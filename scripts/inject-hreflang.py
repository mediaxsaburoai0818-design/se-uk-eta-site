import re, os
from pathlib import Path

ROOT = Path.home()/"projects/se-uk-eta-site-deploy"
# 旧方式（各言語が同じURLパスを持つ）。ここは従来どおりパス一致で相手を探す。
LANGS = [("sv",""),("de","/de"),("it","/it"),("ro","/ro"),("el","/el")]

# 新方式（言語ごとにスラッグが違う）。パス一致では結び付かないので、
# ビルド時に出した pageKey ベースの対応表 out/hreflang-map.json を使う。
import json
_map_file = Path.home()/"projects/se-uk-eta-site/out/hreflang-map.json"
HMAP = json.loads(_map_file.read_text(encoding="utf-8")) if _map_file.exists() else {}
HCODES = HMAP.get("_codes", {})
# パス → pageKey の逆引き
PATH2KEY = {}
for _k, _langs in HMAP.items():
    if _k.startswith("_"):
        continue
    for _l, _path in _langs.items():
        PATH2KEY[_path] = _k
for _l, _path in HMAP.get("_home", {}).items():
    PATH2KEY[_path] = "_home"
ORIGIN = "https://eta-se.com"
REWRITE = {"/de":"https://eta-de.com","/it":"https://eta-italia.com","/ro":"https://eta-ro.com","/el":"https://eta-gr.com"}

def pages(base: Path, skipdirs):
    for p in base.rglob("index.html"):
        rel = p.relative_to(base)
        parts = rel.parts
        if parts[0] in skipdirs: continue
        yield p, "/" + "/".join(parts[:-1]) + ("/" if len(parts)>1 else "")

def exists(prefix, P):
    d = ROOT / prefix.lstrip("/") if prefix else ROOT
    t = d / P.lstrip("/") / "index.html" if P != "/" else d / "index.html"
    return t.exists()

count=0
NEW_LANGS = list(HCODES.keys())

for lang, prefix in LANGS:
    base = ROOT / prefix.lstrip("/") if prefix else ROOT
    # ルート（sv）を走るときは、他プロジェクト言語も新方式言語も配下に含めない
    skip = ({"de","it","ro","el","_next","_not-found"} | set(NEW_LANGS)) if not prefix else {"_next","_not-found"}
    for f, P in pages(base, skip):
        html = f.read_text(encoding="utf-8")
        # 1) 言語ディレクトリ: スタンドアロンドメインの絶対URLをポータルへ書換
        if prefix:
            old = REWRITE[prefix]
            html = html.replace(old + "/", ORIGIN + prefix + "/").replace(old, ORIGIN + prefix)
        canon_url = f"{ORIGIN}{prefix}{P}"
        # 2) 既存canonical/alternate除去
        html = re.sub(r'<link rel="canonical"[^>]*/?>', "", html)
        html = re.sub(r'<link rel="alternate" hreflang=[^>]*/?>', "", html)
        # 3) 注入タグ生成
        tags = [f'<link rel="canonical" href="{canon_url}"/>']
        for l2, pre2 in LANGS:
            if exists(pre2, P):
                tags.append(f'<link rel="alternate" hreflang="{l2}" href="{ORIGIN}{pre2}{P}"/>')
        if exists("", P):
            tags.append(f'<link rel="alternate" hreflang="x-default" href="{ORIGIN}{P}"/>')
        # トップ同士は新方式言語(es/nl/pt/da/no/cs/fi/hu)とも相互に結ぶ
        if P == "/":
            for l2, path2 in HMAP.get("_home", {}).items():
                tags.append(f'<link rel="alternate" hreflang="{HCODES.get(l2, l2)}" href="{ORIGIN}{path2}"/>')
        block = "".join(tags)
        if "</head>" in html:
            html = html.replace("</head>", block + "</head>", 1)
        f.write_text(html, encoding="utf-8")
        count+=1

# ---- 新方式言語（es/nl/pt/da/no/cs/fi/hu）----
# 相手はパスではなく pageKey で探す。ここを間違えると翻訳同士が1本も結び付かない。
for lang in NEW_LANGS:
    base = ROOT / lang
    if not base.exists():
        continue
    for f in base.rglob("index.html"):
        rel = f.relative_to(ROOT)
        P = "/" + "/".join(rel.parts[:-1]) + "/"
        key = PATH2KEY.get(P)
        if not key:
            continue
        html = f.read_text(encoding="utf-8")
        html = re.sub(r'<link rel="canonical"[^>]*/?>', "", html)
        html = re.sub(r'<link rel="alternate" hreflang=[^>]*/?>', "", html)
        tags = [f'<link rel="canonical" href="{ORIGIN}{P}"/>']
        for l2, path2 in HMAP[key].items():
            tags.append(f'<link rel="alternate" hreflang="{HCODES.get(l2, l2)}" href="{ORIGIN}{path2}"/>')
        # トップ同士は旧方式(sv/de/it/ro/el)とも相互に結ぶ。
        # 下層ページはページ構成が両方式で違うため結ばない（無理に結ぶと誤対応になる）。
        if key == "_home":
            for l2, pre2 in LANGS:
                tags.append(f'<link rel="alternate" hreflang="{l2}" href="{ORIGIN}{pre2}/"/>')
            tags.append(f'<link rel="alternate" hreflang="x-default" href="{ORIGIN}/"/>')
        if "</head>" in html:
            html = html.replace("</head>", "".join(tags) + "</head>", 1)
            f.write_text(html, encoding="utf-8")
            count += 1

print("injected:", count)
