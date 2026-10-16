import type { Metadata } from "next";
import Link from "next/link";
import { allRoutes, findPage } from "@/data/langs";
import { JsonLd, pageLd, faqLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return allRoutes();
}

const SITE = "https://eta-se.com";

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const hit = findPage(lang, slug);
  if (!hit) return {};
  return {
    // 同上（ルートのテンプレートを適用させない）
    title: { absolute: `${hit.page.title} | ${hit.content.siteName}` },
    openGraph: { title: hit.page.title, description: hit.page.description,
                 siteName: hit.content.siteName,
                 images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: hit.content.siteName }], locale: hit.content.code.replace('-', '_'), type: 'article' },
    twitter: { card: 'summary_large_image', images: ['/og-image.jpg'], title: hit.page.title, description: hit.page.description },
    description: hit.page.description,
    // ⚠️ canonicalは必ず生成側で組む。言語ファイルに書かせない（旧ドメイン参照の再発防止）
    alternates: { canonical: `${SITE}/${lang}/${slug}/` },
  };
}

export default async function LangPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const hit = findPage(lang, slug);
  if (!hit) return null;
  const { content: c, page, key } = hit;
  // 構造化データ: FAQ は表示中の Q&A（見出し＝質問・本文＝回答）をそのまま／about・privacy・terms は WebPage／他は Article（日付は画面に無いので入れない）
  const ld = key === "faq"
    ? faqLd(page.sections.map((s) => ({ q: s.h, a: s.p.join(" ") })))
    : pageLd({ path: `/${lang}/${slug}/`, headline: page.h1, description: page.description, lang: c.code,
               siteName: c.siteName,
               type: key === "about" ? "AboutPage" : key === "privacy" || key === "terms" ? "WebPage" : "Article" });
  return (
    <div lang={c.code} dir={c.dir}>
      <JsonLd data={ld} />
      <section className="sub-hero relative overflow-hidden">
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">{c.nav.info}</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            {page.h1}
          </h1>
          <p className="text-white/90 leading-relaxed">{page.lead}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-sm text-stone-500 mb-8">
          <Link href={`/${lang}/`} className="underline">{c.siteName}</Link>
        </p>

        {page.sections.map((s, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 border-b border-stone-200 pb-2 mb-4">{s.h}</h2>
            {s.p.map((t, j) => (
              <p key={j} className="text-stone-700 leading-relaxed mb-3">{t}</p>
            ))}
          </section>
        ))}

        <div className="mt-10 p-5 bg-stone-50 border border-stone-200 rounded-lg">
          <a href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
             target="_blank" rel="noopener noreferrer"
             className="inline-block bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium">
            {c.officialLinkLabel}
          </a>
        </div>
        {/* 同じ言語のほかのページ（各ページが言語TOPからの1本しか張られていなかった・2026-10-14） */}
        <nav className="mt-10 border-t border-stone-200 pt-6">
          <p className="text-sm font-semibold text-stone-900 mb-3">{c.nav.info}</p>
          <ul className="grid gap-2 sm:grid-cols-2 text-sm">
            {(Object.entries(c.pages) as [string, { slug: string; h1: string }][])
              .filter(([k, pg]) => pg.slug !== page.slug && !["about", "privacy", "terms"].includes(k))
              .map(([k, pg]) => (
                <li key={k}><Link href={`/${lang}/${pg.slug}/`} className="underline text-stone-700">{pg.h1}</Link></li>
              ))}
          </ul>
          {/* about・privacy・terms は言語TOPからの1本しか張られていなかった（2026-10-16）→ ページ末尾に並べる */}
          <p className="mt-6 flex flex-wrap gap-4 text-xs text-stone-500">
            {(["about", "privacy", "terms"] as const)
              .filter((k) => c.pages[k].slug !== page.slug)
              .map((k) => (
                <Link key={k} href={`/${lang}/${c.pages[k].slug}/`} className="underline">{c.pages[k].h1}</Link>
              ))}
          </p>
        </nav>
      </article>
    </div>
  );
}
