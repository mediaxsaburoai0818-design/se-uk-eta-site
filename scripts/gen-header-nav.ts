/**
 * 各言語のヘッダー表示に必要な最小限のデータを out/header-nav.json に書き出す。
 *
 * ⚠️ なぜ別ファイルにするか
 *   Header は "use client" のクライアントコンポーネント。
 *   ここで data/langs/index.ts を直接importすると、全14言語の本文（各200行超）が
 *   すべてのページのJSバンドルに載る。表示に要るのは社名とメニュー4つだけなので、
 *   その分だけを切り出した小さなJSONにする。
 */
import fs from "node:fs";
import path from "node:path";
import { LANGS } from "../data/langs/index";

type Item = { label: string; href: string };
const out: Record<string, { siteName: string; tagline: string; items: Item[]; cta: string }> = {};

for (const [lang, c] of Object.entries(LANGS)) {
  const p = (key: keyof typeof c.pages) => `/${lang}/${c.pages[key].slug}/`;
  out[lang] = {
    siteName: c.siteName,
    tagline: c.tagline,
    cta: c.officialLinkLabel,
    items: [
      { label: c.nav.info, href: p("what-is-eta") },
      { label: c.pages.application.h1, href: p("application") },
      { label: c.nav.entry, href: p("stay-duration") },
      { label: c.nav.faq, href: p("faq") },
    ],
  };
}

const dest = path.join(process.cwd(), "data", "langs", "header-nav.json");
fs.writeFileSync(dest, JSON.stringify(out, null, 1), "utf8");
console.log(`header-nav: ${Object.keys(out).length}言語 → ${dest}`);
