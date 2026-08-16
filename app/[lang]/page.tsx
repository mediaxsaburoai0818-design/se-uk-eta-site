import type { Metadata } from "next";
import Link from "next/link";
import { LANGS, LANG_CODES } from "@/data/langs";
import { FACTS } from "@/data/langs/_schema";

export function generateStaticParams() {
  return LANG_CODES.map((lang) => ({ lang }));
}

const SITE = "https://eta-se.com";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = LANGS[lang];
  if (!c) return {};
  return {
    title: c.homeTitle,
    description: c.homeDescription,
    // canonicalは機械的に組む（旧ドメインを指す事故を防ぐ）
    alternates: { canonical: `${SITE}/${lang}/` },
  };
}

export default async function LangHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = LANGS[lang];
  if (!c) return null;
  const p = c.pages;
  const order: (keyof typeof p)[] = [
    "what-is-eta", "application", "fee", "processing-time",
    "status-check", "validity", "required-documents", "stay-duration", "faq",
  ];
  return (
    <div lang={c.code} dir={c.dir}>
      <section className="sub-hero relative overflow-hidden">
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">{c.label}</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            {c.tagline}
          </h1>
          <p className="text-white/90 leading-relaxed">{c.homeLead}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {order.map((k) => (
            <Link key={k} href={`/${lang}/${p[k].slug}/`}
                  className="block border border-stone-200 rounded-lg p-5 hover:shadow-md transition">
              <p className="font-semibold text-stone-900 mb-1">{p[k].h1}</p>
              <p className="text-sm text-stone-600 leading-relaxed">{p[k].lead.slice(0, 96)}…</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 p-5 bg-stone-50 border border-stone-200 rounded-lg">
          <p className="text-sm text-stone-700 mb-3">{`${FACTS.fee} · ${FACTS.validYears} · ${FACTS.staySixMonths}`}</p>
          <a href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
             target="_blank" rel="noopener noreferrer"
             className="inline-block bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium">
            {c.officialLinkLabel}
          </a>
        </div>

        <nav className="mt-10 flex flex-wrap gap-4 text-sm text-stone-600">
          <Link href={`/${lang}/${p.about.slug}/`} className="underline">{p.about.h1}</Link>
          <Link href={`/${lang}/${p.privacy.slug}/`} className="underline">{p.privacy.h1}</Link>
          <Link href={`/${lang}/${p.terms.slug}/`} className="underline">{p.terms.h1}</Link>
        </nav>
      </div>
    </div>
  );
}
