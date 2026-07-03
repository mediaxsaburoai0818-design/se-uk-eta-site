import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { newsItems, CATEGORY_STYLE, CATEGORY_LABEL } from "../news-data";

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const n = newsItems.find((x) => x.slug === slug);
  if (!n) return {};
  return {
    title: `${n.title} | UK ETA`,
    description: n.summary,
    alternates: { canonical: `https://eta-se.com/news/${n.slug}/` },
  };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = newsItems.find((x) => x.slug === slug);
  if (!n) notFound();
  const c = CATEGORY_STYLE[n.category];

  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: c.bg, color: c.fg }}>
              {n.category}
            </span>
            <time className="text-sm text-white/70">{n.date}</time>
          </div>
          <h1
            className="deco-head text-2xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            {n.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-3xl mx-auto px-6">
          <p className="text-lg font-medium mb-6" style={{ color: "var(--color-blue)" }}>{n.summary}</p>
          <div className="space-y-4">
            {n.body.map((p, i) => (
              <p key={i} className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>{p}</p>
            ))}
          </div>

          {n.source && (
            <p className="text-sm text-gray-500 mt-8">
              Källa:{" "}
              <a href={n.source.href} target="_blank" rel="noopener noreferrer" className="content-link">
                {n.source.label}
              </a>
            </p>
          )}

          <div className="mt-10">
            <Link href="/news/" className="content-link font-bold">&larr; Alla nyheter</Link>
          </div>

          <Breadcrumb items={[{ label: "Senaste nyheterna", href: "/news/" }, { label: n.title }]} />
        </article>
      </section>
    </div>
  );
}
