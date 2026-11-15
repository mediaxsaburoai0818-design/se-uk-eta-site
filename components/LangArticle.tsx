import Link from "next/link";
import type { ReactNode } from "react";
import type { Block, ExtraPage, LangContent, TopicKey } from "@/data/langs/_schema";
import { extraList } from "@/data/langs";
import { JsonLd, faqLd, pageLd } from "@/lib/jsonld";

// 追加言語の「追加トピック」ページ（data/langs/extra/<lang>/・2026-11-15）。
// 皮は 12 ページ（app/[lang]/[slug]/page.tsx）と同じ: sub-hero の見出し → 本文 → 公式ボタン → 同言語のページ一覧。
// 加えて パンくず・関連カード・FAQ（FAQPage 構造化データ）・出典・確認日 を出す（canada-eta-ro の LangArticle と同じ構成）。

const OFFICIAL_ETA = "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta";

// [文言](URL) だけを解釈する（** は使わない・allRoutes() で検出して止める）
function inline(s: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index));
    out.push(m[2].startsWith("/")
      ? <Link key={k++} href={m[2]} className="underline text-[#022444]">{m[1]}</Link>
      : <a key={k++} href={m[2]} target="_blank" rel="noopener noreferrer" className="underline text-[#022444] break-words">{m[1]}</a>);
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

function renderBlock(b: Block, i: number) {
  if (typeof b === "string") return <p key={i} className="text-stone-700 leading-relaxed mb-3">{inline(b)}</p>;
  if ("ul" in b) {
    return (
      <ul key={i} className="list-disc pl-6 space-y-2 text-stone-700 leading-relaxed mb-4">
        {b.ul.map((x, j) => <li key={j}>{inline(x)}</li>)}
      </ul>
    );
  }
  if ("note" in b) {
    return (
      <div key={i} className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-stone-700 leading-relaxed mb-4">
        {inline(b.note)}
      </div>
    );
  }
  return (
    <div key={i} className="overflow-x-auto mb-4">
      <table className="w-full text-sm text-left text-stone-700 border border-gray-200 bg-white">
        <thead className="bg-gray-100">
          <tr>{b.table.head.map((h, j) => <th key={j} className="p-3 font-bold text-[#022444]">{h}</th>)}</tr>
        </thead>
        <tbody>
          {b.table.rows.map((r, j) => (
            <tr key={j} className="border-t border-gray-200">
              {r.map((c, n) => <td key={n} className="p-3 align-top">{inline(c)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatChecked(iso: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
    .format(new Date(`${iso}T00:00:00Z`));
}

// 関連: 同じ group の中で自分の次から巡回して n 本（ハブは除く）。どのページも同言語内から複数の被リンクを持つ
function pickRelated(list: { key: TopicKey; page: ExtraPage }[], self: TopicKey, n: number) {
  const group = list.find((x) => x.key === self)!.page.group;
  const items = list.filter((x) => x.page.group === group && !x.page.hub);
  const i = items.findIndex((x) => x.key === self);
  const res: typeof items = [];
  for (let k = 1; res.length < n && k <= items.length; k++) {
    const x = items[(i + k + items.length) % items.length];
    if (x.key !== self) res.push(x);
  }
  return res;
}

function Card({ lang, p }: { lang: string; p: ExtraPage }) {
  return (
    <Link href={`/${lang}/${p.slug}/`} className="block bg-white border border-stone-200 rounded-lg p-4 no-underline hover:border-[#022444] transition">
      <span className="block font-semibold text-[#022444]">{p.h1}</span>
      <span className="mt-1 block text-sm text-stone-600">{p.card}</span>
    </Link>
  );
}

export default function LangArticle({ lang, c, page, topic }: { lang: string; c: LangContent; page: ExtraPage; topic: TopicKey }) {
  const ui = c.extraUI!;
  const list = extraList(c);
  const hub = list.find((x) => x.page.hub && x.page.group === page.group);
  const path = `/${lang}/${page.slug}/`;
  const crumbs: { label: string; href?: string }[] = [
    { label: ui.breadcrumbHome, href: `/${lang}/` },
    ...(hub && !page.hub ? [{ label: hub.page.h1, href: `/${lang}/${hub.page.slug}/` }] : []),
    { label: page.h1 },
  ];
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((x, i) => ({
      "@type": "ListItem", position: i + 1, name: x.label,
      item: `https://eta-se.com${x.href ?? path}`,
    })),
  };

  return (
    <div lang={c.code} dir={c.dir}>
      <JsonLd data={pageLd({ path, headline: page.h1, description: page.description, lang: c.code, siteName: c.siteName, type: "Article" })} />
      <JsonLd data={breadcrumbLd} />
      {page.faq?.length ? <JsonLd data={faqLd(page.faq.map((f) => ({ q: f.q, a: plain(f.a) })))} /> : null}
      <section className="sub-hero relative overflow-hidden">
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">{ui.groups[page.group]}</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            {page.h1}
          </h1>
          <p className="text-white/90 leading-relaxed">{inline(page.lead)}</p>
        </div>
      </section>

      <section><div className="max-w-3xl mx-auto px-6 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-stone-500 mb-8">
          <ol className="flex flex-wrap items-center gap-1">
            {crumbs.map((x, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <span className="mx-1" aria-hidden="true">/</span>}
                {x.href ? <Link href={x.href} className="underline">{x.label}</Link> : <span className="text-stone-800">{x.label}</span>}
              </li>
            ))}
          </ol>
        </nav>

        {page.sections.map((s, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 border-b border-stone-200 pb-2 mb-4">{s.h}</h2>
            {s.blocks.map(renderBlock)}
          </section>
        ))}

        {page.hub && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 border-b border-stone-200 pb-2 mb-4">{ui.hubCardsHeading}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {list.filter((x) => x.page.group === page.group && !x.page.hub).map((x) => <Card key={x.key} lang={lang} p={x.page} />)}
            </div>
          </section>
        )}

        {page.faq?.length ? (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 border-b border-stone-200 pb-2 mb-4">{ui.faqHeading}</h2>
            <dl className="space-y-5">
              {page.faq.map((f, i) => (
                <div key={i}>
                  <dt className="font-semibold text-stone-900">{f.q}</dt>
                  <dd className="mt-1 text-stone-700 leading-relaxed">{inline(f.a)}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <div className="mt-10">
          <a href={OFFICIAL_ETA} target="_blank" rel="noopener noreferrer" className="btn">
            {c.officialLinkLabel} <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {!page.hub && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-stone-900 mb-3">{ui.relatedHeading}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {hub && <Card lang={lang} p={hub.page} />}
              {pickRelated(list, topic, hub ? 3 : 4).map((x) => <Card key={x.key} lang={lang} p={x.page} />)}
            </div>
          </section>
        )}

        {(page.sources.length > 0 || page.checked) && <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500">
          {page.sources.length > 0 && <p className="font-semibold text-stone-700 mb-2">{ui.sourcesHeading}</p>}
          <ul className="space-y-1">
            {page.sources.map((s) => (
              <li key={s.url}>
                {s.label}:{" "}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline text-[#022444] break-all">
                  {s.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </a>
              </li>
            ))}
          </ul>
          {page.checked && (
            <p className="mt-3 text-xs">{ui.checkedLabel} <time dateTime={page.checked}>{formatChecked(page.checked, ui.dateLocale ?? c.code)}</time></p>
          )}
        </div>}

        {/* 同じ言語の基本ページへの導線（12 ページ側と同じ形） */}
        <nav className="mt-10 border-t border-stone-200 pt-6">
          <p className="text-sm font-semibold text-stone-900 mb-3">{c.nav.info}</p>
          <ul className="grid gap-2 sm:grid-cols-2 text-sm">
            {(Object.entries(c.pages) as [string, { slug: string; h1: string }][])
              .filter(([k]) => !["about", "privacy", "terms"].includes(k))
              .map(([k, pg]) => (
                <li key={k}><Link href={`/${lang}/${pg.slug}/`} className="underline text-stone-700">{pg.h1}</Link></li>
              ))}
          </ul>
          <p className="mt-6 flex flex-wrap gap-4 text-xs text-stone-500">
            {(["about", "privacy", "terms"] as const).map((k) => (
              <Link key={k} href={`/${lang}/${c.pages[k].slug}/`} className="underline">{c.pages[k].h1}</Link>
            ))}
          </p>
        </nav>
      </div></section>
    </div>
  );
}
