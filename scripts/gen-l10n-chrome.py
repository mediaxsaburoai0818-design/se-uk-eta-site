#!/usr/bin/env python3
"""追加言語（/es/ 等・13言語）の下層ページ用ヘッダー・フッター・申請ボタンを、各言語TOP（lib/home-l10n.ts＝翻訳・リンク検査済み）から抜き出す（okina 2026-10-21「全言語のヘッダー・フッターも新デザインに」）。
  python3 scripts/gen-l10n-chrome.py → lib/l10n-chrome.ts
新しい翻訳は作らない。目次の見出し（TOC）だけはTOPに無いのでここで持つ。"""
import json, re
from pathlib import Path
R = Path(__file__).resolve().parent.parent
s = (R / "lib/home-l10n.ts").read_text()
obj = json.loads(s[s.index("{"):s.rindex("}") + 1])
TOC = {"cs": "Na této stránce", "da": "På denne side", "en": "On this page", "es": "En esta página", "fi": "Tällä sivulla",
       "he": "בעמוד זה", "hu": "Ezen az oldalon", "ko": "이 페이지의 내용", "nl": "Op deze pagina", "no": "På denne siden",
       "pt": "Nesta página", "zh-cn": "本页内容", "zh-tw": "本頁內容"}
def txt(x): return re.sub(r"<[^>]+>", "", x).strip()
out = {}
for l, h in obj.items():
    hd = h[h.index('<div class="trustbar"'):h.index("</header>") + 9]
    ft = h[h.index('<footer class="footer"'):h.index("</footer>") + 9]
    cta = h[h.index('<section class="finalcta"'):]; cta = cta[:cta.index("</section>") + 10]
    nav = re.findall(r'<a href="([^"]+)">([^<]+)</a>', re.search(r'<nav class="nav"[^>]*>(.*?)</nav>', h, re.S).group(1))
    btn = re.search(r'<a class="btn" href="([^"]+)"[^>]*>(.*?)<span', hd, re.S)
    out[l] = {"header": hd, "footer": ft, "cta": cta, "aside": {
        "toc": TOC[l], "ctaTitle": txt(re.search(r"<h2>(.*?)</h2>", cta, re.S).group(1)),
        "ctaBody": txt(re.search(r"<p>(.*?)</p>", cta, re.S).group(1)),
        "ctaButton": txt(btn.group(2)), "ctaHref": btn.group(1),
        "subLabel": nav[2][1] + " →", "subHref": nav[2][0]}}
(R / "lib/l10n-chrome.ts").write_text("// 自動生成: scripts/gen-l10n-chrome.py（元＝lib/home-l10n.ts の各言語TOP）\nexport type L10nChrome = { header: string; footer: string; cta: string; aside: { toc: string; ctaTitle: string; ctaBody: string; ctaButton: string; ctaHref: string; subLabel: string; subHref: string } };\nexport const L10N_CHROME: Record<string, L10nChrome> = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
for l, v in out.items(): print(l, v["aside"]["ctaButton"], "|", v["aside"]["subLabel"], v["aside"]["subHref"])
