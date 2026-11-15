import { EXTRA_TOPICS, type Block, type ExtraPage, type LangContent, type PageKey, type TopicKey } from "./_schema";
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
// 2026-10-17 フランス語は eta-fr.com を統合し /fr/ を別ソース（uk-eta-site-fr・ETA_BASE=/fr）から配信するため、ここから外した（旧 [lang] の12ページは _redirects で新ページへ301）
import en from "./en";
import zhTw from "./zh-tw";
import zhCn from "./zh-cn";

// 追加言語のレジストリ。ここに1行足すだけで全ページが生成される。
// ⚠️ 既存の /de/ /it/ /ro/ /el/ は別プロジェクトから配信しているのでここには入れない。
// ⚠️ 中国語2種は結論が逆。取り違えると読者を誤った申請に誘導する。
//    zh-tw … 台湾旅券はETAの対象（旅券に国民身分証番号の記載があるものに限る）
//    zh-cn … 🚨 中国本土旅券はETAの対象外＝ビザが必要
export const LANGS: Record<string, LangContent> = { es, nl, pt, da, no, cs, fi, hu, ko, he, en, "zh-tw": zhTw, "zh-cn": zhCn };

export const LANG_CODES = Object.keys(LANGS);

export function allRoutes(): { lang: string; slug: string }[] {
  const out: { lang: string; slug: string }[] = [];
  for (const [lang, c] of Object.entries(LANGS)) {
    for (const key of Object.keys(c.pages) as PageKey[]) {
      out.push({ lang, slug: c.pages[key].slug });
    }
    for (const { page } of extraList(c)) {
      out.push({ lang, slug: page.slug });
    }
  }
  // 同じ言語の中でスラッグが重複したらビルドを止める（12ページと追加トピックの衝突を含む）
  const seen = new Set<string>();
  for (const r of out) {
    const k = `${r.lang}/${r.slug}`;
    if (seen.has(k) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.slug)) throw new Error(`bad or duplicate slug: ${k}`);
    seen.add(k);
  }
  checkExtras(seen);
  return out;
}

const NO_ROOT_SOURCE = new Set<TopicKey>(["london-airports"]);

// 追加トピックの機械チェック（ビルドを止める）: extraUI の有無・pages との二重持ち・description 160字・
// Markdown の ** 混入・内部リンク切れ（/<lang>/<slug>/ が実在するか）・出典なし
function checkExtras(routes: Set<string>) {
  const texts = (b: Block): string[] =>
    typeof b === "string" ? [b] : "ul" in b ? b.ul : "note" in b ? [b.note] : [...b.table.head, ...b.table.rows.flat()];
  for (const [lang, c] of Object.entries(LANGS)) {
    if (!c.extra) continue;
    if (!c.extraUI) throw new Error(`${lang}: extra without extraUI`);
    for (const { key, page: p } of extraList(c)) {
      const where = `${lang}/${p.slug}`;
      if ((c.pages as Record<string, unknown>)[key]) throw new Error(`${where}: ${key} is both in pages and extra`);
      if ([...p.description].length > 160) throw new Error(`${where}: description > 160 chars`);
      // 出典は必須。ただしルート自体に公式出典リンクが無いページ（london-airports）は空のまま（無関係な出典を足さない）
      if (!p.sources.length && !NO_ROOT_SOURCE.has(key)) throw new Error(`${where}: no sources`);
      const all = [p.title, p.description, p.h1, p.lead, p.card,
        ...p.sections.flatMap((s) => [s.h, ...s.blocks.flatMap(texts)]),
        ...(p.faq ?? []).flatMap((f) => [f.q, f.a])];
      for (const t of all) {
        if (t.includes("**")) throw new Error(`${where}: Markdown ** in text: ${t.slice(0, 60)}`);
        for (const m of t.matchAll(/\]\((\/[^)\s]*)\)/g)) {
          const href = m[1];
          const mm = href.match(/^\/([a-z-]+)\/([a-z0-9-]+)\/(#[a-z0-9-]+)?$/);
          if (!href.startsWith(`/${lang}/`) || (href !== `/${lang}/` && (!mm || !routes.has(`${mm[1]}/${mm[2]}`))))
            throw new Error(`${where}: broken internal link ${href}`);
        }
      }
    }
  }
}

// 追加トピック（EXTRA_TOPICS の順）。言語TOPの一覧・関連リンク・generateStaticParams が同じ順序を使う
export function extraList(c: LangContent): { key: TopicKey; page: ExtraPage }[] {
  if (!c.extra) return [];
  return EXTRA_TOPICS.filter((k) => c.extra![k]).map((k) => ({ key: k, page: c.extra![k]! }));
}

export function findExtra(lang: string, slug: string) {
  const c = LANGS[lang];
  if (!c?.extra || !c.extraUI) return null;
  const hit = extraList(c).find((x) => x.page.slug === slug);
  return hit ? { content: c, page: hit.page, key: hit.key, ui: c.extraUI } : null;
}

export function findPage(lang: string, slug: string) {
  const c = LANGS[lang];
  if (!c) return null;
  const key = (Object.keys(c.pages) as PageKey[]).find((k) => c.pages[k].slug === slug);
  return key ? { content: c, page: c.pages[key], key } : null;
}
