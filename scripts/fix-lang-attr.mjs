#!/usr/bin/env node
// 追加言語ページの <html lang="..."> を正しい言語コードに書き換える。
//
// ⚠️ なぜ後処理なのか
//   App Router では <html> はルートレイアウトにしか書けない。
//   このプロジェクトのルートはスウェーデン語(sv)で、既存の /（sv）を壊さずに
//   /es/ 等だけ lang を変える方法が他にない（ルートレイアウトの分割は
//   既存サイトの構造変更になりリスクが大きい）。
//   スペイン語のページが lang="sv" と宣言していると多言語サイトとして
//   正しく扱われないため、ビルド後に該当ディレクトリだけ置換する。
import fs from "node:fs";
import path from "node:path";

// data/langs/index.ts と重複させないため、out/ にあるディレクトリから判定する
const MAP = { es: "es", nl: "nl", pt: "pt-PT", da: "da", no: "nb", cs: "cs",
              fi: "fi", hu: "hu", he: "he", ko: "ko", en: "en", fr: "fr" };
const RTL = new Set(["he"]);
const OUT = path.join(process.cwd(), "out");

let files = 0;
for (const [dir, code] of Object.entries(MAP)) {
  const base = path.join(OUT, dir);
  if (!fs.existsSync(base)) continue;
  const stack = [base];
  while (stack.length) {
    const d = stack.pop();
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { stack.push(p); continue; }
      if (e.name !== "index.html") continue;
      let s = fs.readFileSync(p, "utf8");
      const rep = RTL.has(dir) ? `<html lang="${code}" dir="rtl"` : `<html lang="${code}"`;
      const s2 = s.replace(/<html lang="[a-zA-Z-]+"/, rep);
      if (s2 !== s) { fs.writeFileSync(p, s2); files++; }
    }
  }
}
console.log(`lang属性を修正: ${files}ファイル`);
