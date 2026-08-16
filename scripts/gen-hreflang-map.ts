/**
 * 言語をまたいだページの対応表を out/hreflang-map.json に書き出す。
 *
 * ⚠️ なぜ必要か
 *   inject-hreflang.py は「同じURLパスが他言語にも存在するか」で alternate を張っていた。
 *   ところが新方式の言語はスラッグを言語ごとに変えている（意図的にそうしている）。
 *     /da/hvad-er-eta/   /es/que-es-la-eta/   /fi/mika-on-eta/
 *   パスが一致しないので、この判定では**翻訳同士が1本も結び付かない**。
 *   そこで pageKey（what-is-eta 等）を軸にした対応表をビルド時に吐き、
 *   Python 側はパスではなく pageKey で相手を探す。
 */
import fs from "node:fs";
import path from "node:path";
import { LANGS } from "../data/langs/index";

const map: Record<string, Record<string, string>> = { _home: {}, _codes: {} };
for (const [lang, c] of Object.entries(LANGS)) {
  map._home[lang] = `/${lang}/`;
  map._codes[lang] = c.code;
  for (const [key, page] of Object.entries(c.pages)) {
    (map[key] ??= {})[lang] = `/${lang}/${page.slug}/`;
  }
}

const out = path.join(process.cwd(), "out", "hreflang-map.json");
fs.writeFileSync(out, JSON.stringify(map, null, 1), "utf8");
const n = Object.keys(map).filter((k) => !k.startsWith("_")).length;
console.log(`hreflang-map: ${Object.keys(LANGS).length}言語 × ${n}ページキー → ${out}`);
