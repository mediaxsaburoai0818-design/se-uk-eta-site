import type { LangContent, PageKey } from "./_schema";
import es from "./es";
import nl from "./nl";
import pt from "./pt";
import da from "./da";
import no from "./no";
import cs from "./cs";
import fi from "./fi";
import hu from "./hu";
import ko from "./ko";
import he from "./he";
import fr from "./fr";
import en from "./en";

// 追加言語のレジストリ。ここに1行足すだけで全ページが生成される。
// ⚠️ 既存の /de/ /it/ /ro/ /el/ は別プロジェクトから配信しているのでここには入れない。
export const LANGS: Record<string, LangContent> = { es, nl, pt, da, no, cs, fi, hu, ko, he, fr, en };

export const LANG_CODES = Object.keys(LANGS);

export function allRoutes(): { lang: string; slug: string }[] {
  const out: { lang: string; slug: string }[] = [];
  for (const [lang, c] of Object.entries(LANGS)) {
    for (const key of Object.keys(c.pages) as PageKey[]) {
      out.push({ lang, slug: c.pages[key].slug });
    }
  }
  return out;
}

export function findPage(lang: string, slug: string) {
  const c = LANGS[lang];
  if (!c) return null;
  const key = (Object.keys(c.pages) as PageKey[]).find((k) => c.pages[k].slug === slug);
  return key ? { content: c, page: c.pages[key], key } : null;
}
