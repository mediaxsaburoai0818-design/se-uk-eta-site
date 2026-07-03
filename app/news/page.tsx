import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { newsItems, CATEGORY_STYLE, CATEGORY_LABEL } from "./news-data";

export const metadata: Metadata = {
  title: "Senaste nyheterna om UK ETA och resor till Storbritannien",
  description:
    "Aktuella nyheter om UK ETA: avgift £20 från 8 april 2026, full tillämpning från februari 2026, inreseregler och ressäkerhet till Storbritannien.",
  alternates: { canonical: "https://eta-se.com/news/" },
};

const sorted = [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function NewsIndex() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>NYHETER</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Senaste nyheterna
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            De viktigaste nyheterna om UK ETA, inreseregler och resor till Storbritannien (2025-2026). Informationen bygger på källor från GOV.UK.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {sorted.map((n) => {
              const c = CATEGORY_STYLE[n.category];
              return (
                <Link
                  key={n.slug}
                  href={`/news/${n.slug}/`}
                  className="card block hover:shadow-lg transition-shadow no-underline"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: c.bg, color: c.fg }}
                    >
                      {CATEGORY_LABEL[n.category]}
                    </span>
                    <time className="text-sm text-gray-500">{n.date}</time>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: "var(--color-blue)" }}>
                    {n.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                    {n.summary}
                  </p>
                  <span className="content-link font-bold text-sm inline-block mt-3">Läs mer &rarr;</span>
                </Link>
              );
            })}
          </div>

          <Breadcrumb items={[{ label: "Senaste nyheterna" }]} />
        </div>
      </section>
    </div>
  );
}
