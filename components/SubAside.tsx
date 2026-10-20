"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** 新デザインの下層ページ（.xskin）の右カラム：目次＋申請ボタン。
 *  目次は本文の h2 から作る（ページごとに書かなくて済むように）。サーバーでは空で出し、表示後に埋める。 */
export type AsideText = { toc: string; ctaTitle: string; ctaBody: string; ctaButton: string; ctaHref: string; subLabel: string; subHref: string };

export default function SubAside({ t }: { t: AsideText }) {
  const [items, setItems] = useState<{ id: string; label: string }[]>([]);
  const pathname = usePathname();
  useEffect(() => {
    // layout の Reveal は初回表示しか動かず、layout は画面遷移で作り直されないので、ページが替わるたびにここで .reveal を出す
    const nodes = document.querySelectorAll<HTMLElement>(".xskin .reveal:not(.is-visible)");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io!.unobserve(e.target); } }),
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
      );
      nodes.forEach((n) => io!.observe(n));
    } else nodes.forEach((n) => n.classList.add("is-visible"));
    const hs = Array.from(document.querySelectorAll<HTMLElement>(".xskin .xgrid > div > section h2"));
    setItems(
      hs
        .filter((h) => h.textContent && h.textContent.trim())
        .map((h, i) => {
          if (!h.id) h.id = `del-${i + 1}`;
          return { id: h.id, label: h.textContent!.trim() };
        })
    );
    return () => io?.disconnect();
  }, [pathname]);
  return (
    <aside className="xside">
      {items.length > 1 && (
        <nav className="xbox xtoc" aria-label={t.toc}>
          <span className="xeyebrow">{t.toc}</span>
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`}>{it.label}</a>
          ))}
        </nav>
      )}
      <div className="xbox xcta">
        <b>{t.ctaTitle}</b>
        <p>{t.ctaBody}</p>
        <a className="btn btn--ghost" href={t.ctaHref} target="_blank" rel="noopener noreferrer">
          {t.ctaButton} <span className="arrow" aria-hidden="true">→</span>
        </a>
        <Link href={t.subHref} className="xsub-link" style={{ display: "block", marginTop: 12, font: "600 13.5px var(--font-sans)", color: "#fff" }}>
          {t.subLabel}
        </Link>
      </div>
    </aside>
  );
}
