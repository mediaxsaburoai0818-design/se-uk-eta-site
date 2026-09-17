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
import zhTw from "./zh-tw";
import zhCn from "./zh-cn";

// 追加言語のレジストリ。ここに1行足すだけで全ページが生成される。
// ⚠️ 既存の /de/ /it/ /ro/ /el/ は別プロジェクトから配信しているのでここには入れない。
// ⚠️ 中国語2種は結論が逆。取り違えると読者を誤った申請に誘導する。
//    zh-tw … 台湾旅券はETAの対象（旅券に国民身分証番号の記載があるものに限る）
//    zh-cn … 🚨 中国本土旅券はETAの対象外＝ビザが必要
export const LANGS: Record<string, LangContent> = { es, nl, pt, da, no, cs, fi, hu, ko, he, fr, en, "zh-tw": zhTw, "zh-cn": zhCn };

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
