import type { Metadata } from "next";
import Link from "next/link";
import { HOME_L10N } from "@/lib/home-l10n";
import HomeChrome from "@/components/HomeChrome";
import "../eta-design.css";
import { LANGS, LANG_CODES, extraList } from "@/data/langs";
import { FACTS } from "@/data/langs/_schema";
import { JsonLd, homeLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return LANG_CODES.map((lang) => ({ lang }));
}

const SITE = "https://eta-se.com";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = LANGS[lang];
  if (!c) return {};
  return {
    // ルートのスウェーデン語テンプレートが付くのを止め、その言語の社名を付ける
    title: { absolute: `${c.homeTitle} | ${c.siteName}` },
    // ⚠️ ルートのOG設定(sv_SE・スウェーデン語の社名/alt)が全言語に出ていた。言語ごとに上書きする。
    openGraph: { title: c.homeTitle, description: c.homeDescription,
                 siteName: c.siteName,
                 images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: c.siteName }], locale: c.code.replace('-', '_'), type: 'website' },
    twitter: { card: 'summary_large_image', images: ['/og-image.jpg'], title: c.homeTitle, description: c.homeDescription },
    description: c.homeDescription,
    // canonicalは機械的に組む（旧ドメインを指す事故を防ぐ）
    alternates: { canonical: `${SITE}/${lang}/` },
  };
}

// ⚠️ 2026-10-17 okina「他言語TOPもルートと同じデザインで、言語だけ変える」。
//    HTML は ~/projects/top-l10n/etase/<lang>.html（ルートTOPの翻訳）から integrate.py が生成する（手で直さない）。旧TOPは ~/projects/top-l10n/backup/。
//    layout の Header/Footer/StickyCta は言語TOPでは出さない。翻訳が無い言語は出さない（generateStaticParams は従来どおり）。
// ⚠️ 2026-10-17 okina「他言語TOPもルートと同じデザインで、言語だけ変える」。
//    HTML は ~/projects/top-l10n/etase/<lang>.html（ルートTOPの翻訳）から integrate.py が生成する（手で直さない）。旧TOPは ~/projects/top-l10n/backup/。
//    layout の Header/Footer/StickyCta は言語TOPでは出さない。翻訳が無い言語は出さない（generateStaticParams は従来どおり）。
// ⚠️ 2026-10-17 okina「他言語TOPもルートと同じデザインで、言語だけ変える」。
//    HTML は ~/projects/top-l10n/etase/<lang>.html（ルートTOPの翻訳）から integrate.py が生成する（手で直さない）。旧TOPは ~/projects/top-l10n/backup/。
//    layout の Header/Footer/StickyCta は言語TOPでは出さない。翻訳が無い言語は出さない（generateStaticParams は従来どおり）。
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// 追加トピック（data/langs/extra/）がある言語だけ、TOPの「役立つページ」カード群（最初の .xcard.xlink.xrow を含む section）の
// 直後に同じ見た目のカード群を足す。HOME_L10N（integrate.py の生成物）自体は書き換えない。見つからなければ何もしない。
function withExtraSection(html: string, lang: string) {
  const c = LANGS[lang];
  const list = extraList(c);
  if (!list.length || !c.extraUI) return html;
  const start = html.indexOf('class="xcard xlink xrow"');
  const end = start < 0 ? -1 : html.indexOf("</section>", start);
  if (end < 0) return html;
  const card = (slug: string, h: string, p: string) =>
    `<a class="xcard xlink xrow" href="/${lang}/${slug}/"><span><h3>${esc(h)}</h3><p>${esc(p)}</p></span><span class="xgo" aria-hidden="true">→</span></a>`;
  const groups = (["eta", "travel"] as const)
    .map((g) => ({ g, items: list.filter((x) => x.page.group === g) }))
    .filter((x) => x.items.length)
    .map(({ g, items }) => `<h3 style="margin:28px 0 4px">${esc(c.extraUI!.groups[g])}</h3><div class="xcards x3">${items.map((x) => card(x.page.slug, x.page.h1, x.page.card)).join("")}</div>`)
    .join("");
  const section = `<section id="more-topics" class="band xsec"><div class="container"><span class="eyebrow">${esc(c.extraUI.homeEyebrow)}</span><h2>${esc(c.extraUI.homeHeading)}</h2>${groups}</div></section>`;
  const at = end + "</section>".length;
  return html.slice(0, at) + section + html.slice(at);
}

export default async function LangHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = LANGS[lang];
  if (!c) return null;
  const base = HOME_L10N[lang];
  if (!base) return null;
  const html = withExtraSection(base, lang);
  return (
    <div lang={c.code} dir={c.dir}>
      <JsonLd data={homeLd({ name: c.siteName, path: `/${lang}/`, lang: c.code, description: c.homeDescription })} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Allura&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" precedence="default" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <HomeChrome />
    </div>
  );
}
