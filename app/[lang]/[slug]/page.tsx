import type { Metadata } from "next";
import Link from "next/link";
import { allRoutes, findPage } from "@/data/langs";

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
                 siteName: hit.content.siteName, locale: hit.content.code.replace('-', '_'), type: 'article' },
    twitter: { card: 'summary_large_image', title: hit.page.title, description: hit.page.description },
    description: hit.page.description,
    // ⚠️ canonicalは必ず生成側で組む。言語ファイルに書かせない（旧ドメイン参照の再発防止）
    alternates: { canonical: `${SITE}/${lang}/${slug}/` },
  };
}

export default async function LangPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const hit = findPage(lang, slug);
  if (!hit) return null;
  const { content: c, page } = hit;
  return (
    <div lang={c.code} dir={c.dir}>
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
      </article>
    </div>
  );
}
