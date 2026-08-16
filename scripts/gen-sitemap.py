#!/usr/bin/env python3
"""デプロイ先の実ファイルから sitemap.xml を作る。

■ なぜ必要になったか
  sitemap.xml が public/ の手書きファイルで、スウェーデン語の28URLしか載っていなかった。
  一方 eta-se.com は多言語ポータルになっていて、実際には
  /es/ /nl/ /pt/ /da/ /no/ /cs/ /fi/ /hu/ と /de/ /it/ /ro/ /el/ を配信している。
  **どの言語も1本もsitemapに載っていない**状態だった。

■ 方針
  ・生成元は se-uk-eta-site の out/ ではなく、**デプロイ先ディレクトリ**にする。
    /de/ /it/ /ro/ /el/ は別プロジェクトから同期されるため、out/ には存在しない。
    「実際に配信しているもの」を数えるにはデプロイ先を見るしかない。
  ・404 / _next / _not-found は載せない。
"""
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path.home() / "projects" / "se-uk-eta-site-deploy"
ORIGIN = "https://eta-se.com"
SKIP_TOP = {"_next", "_not-found", "404"}


def main() -> None:
    if not ROOT.exists():
        raise SystemExit(f"デプロイ先がありません: {ROOT}")

    paths = []
    for p in ROOT.rglob("index.html"):
        rel = p.parent.relative_to(ROOT)
        parts = rel.parts
        if parts and parts[0] in SKIP_TOP:
            continue
        path = "/" if not parts else "/" + "/".join(parts) + "/"
        # noindex のページは載せない（送っておいて拒否するのは矛盾したシグナルになる）
        if re.search(r'<meta name="robots"[^>]*noindex',
                     p.read_text(encoding="utf-8", errors="replace")):
            continue
        paths.append(path)
    paths.sort(key=lambda x: (x != "/", x))

    today = date.today().isoformat()
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for path in paths:
        pri = "1.0" if path == "/" else ("0.8" if path.count("/") == 2 else "0.6")
        lines.append(f"  <url><loc>{ORIGIN}{path}</loc><lastmod>{today}</lastmod>"
                     f"<changefreq>monthly</changefreq><priority>{pri}</priority></url>")
    lines += ["</urlset>", ""]
    (ROOT / "sitemap.xml").write_text("\n".join(lines), encoding="utf-8")

    # 言語別の内訳を出す（どこかの言語がまるごと抜けたら気づけるように）
    from collections import Counter
    c = Counter(p.split("/")[1] if p != "/" and len(p.split("/")) > 2 else "(sv/ルート)"
                for p in paths)
    print(f"sitemap: {len(paths)} URL")
    for k, v in sorted(c.items(), key=lambda x: -x[1]):
        print(f"  {k or '(root)':14} {v}")


if __name__ == "__main__":
    sys.exit(main())
