import re, os
from pathlib import Path

ROOT = Path.home()/"projects/se-uk-eta-site-deploy"
LANGS = [("sv",""),("de","/de"),("it","/it"),("ro","/ro")]
ORIGIN = "https://eta-se.com"
REWRITE = {"/de":"https://eta-de.com","/it":"https://eta-italia.com","/ro":"https://eta-ro.com"}

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
for lang, prefix in LANGS:
    base = ROOT / prefix.lstrip("/") if prefix else ROOT
    skip = {"de","it","ro","_next","_not-found"} if not prefix else {"_next","_not-found"}
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
        block = "".join(tags)
        if "</head>" in html:
            html = html.replace("</head>", block + "</head>", 1)
        f.write_text(html, encoding="utf-8")
        count+=1
print("injected:", count)
