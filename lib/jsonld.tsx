// JSON-LD 構造化データの共通ヘルパー（2026-10-15 追加）
// ⚠️ ページに表示していない事実・日付をここで足さない。
//    日付は画面に出ているもの（ニュースの日付）だけ。FAQPage はページに出ている Q&A の文言そのまま。
const SITE = "https://eta-se.com";
const LOGO = `${SITE}/logo-uk-eta.png`;

type Ld = Record<string, unknown>;

export function JsonLd({ data }: { data: Ld }) {
  // "</script>" 混入対策で < をエスケープ
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

function org(id: string, name: string): Ld {
  return { "@type": "Organization", "@id": id, name, url: `${SITE}/`, logo: LOGO };
}

/** 言語TOP: WebSite + Organization */
export function homeLd(o: { name: string; path: string; lang: string; description?: string; orgName?: string }): Ld {
  const url = `${SITE}${o.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: o.name,
        ...(o.description ? { description: o.description } : {}),
        inLanguage: o.lang,
        publisher: { "@id": `${url}#organization` },
      },
      org(`${url}#organization`, o.orgName ?? o.name),
    ],
  };
}

/** 記事・情報ページ: Article（type で WebPage / NewsArticle 等に切替） */
export function pageLd(o: {
  path: string;
  headline: string;
  description?: string;
  lang: string;
  type?: "Article" | "WebPage" | "NewsArticle" | "CollectionPage" | "ContactPage" | "AboutPage";
  datePublished?: string;
  siteName?: string;
}): Ld {
  const url = `${SITE}${o.path}`;
  const type = o.type ?? "Article";
  const isArticle = type === "Article" || type === "NewsArticle";
  const publisher = { "@type": "Organization", name: o.siteName ?? "UK ETA-guiden", url: `${SITE}/`, logo: { "@type": "ImageObject", url: LOGO } };
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...(isArticle ? { headline: o.headline } : { name: o.headline }),
    ...(o.description ? { description: o.description } : {}),
    url,
    ...(isArticle ? { mainEntityOfPage: url, image: `${SITE}/og-image.jpg` } : {}),
    inLanguage: o.lang,
    ...(o.datePublished ? { datePublished: o.datePublished } : {}),
    ...(isArticle ? { author: publisher, publisher } : { publisher }),
  };
}

/** FAQPage（ページに表示している Q&A の文言をそのまま渡す） */
export function faqLd(items: { q: string; a: string }[]): Ld {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

/** metadata.title / description（string 想定）を安全に取り出す */
export function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}
