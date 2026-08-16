// 新言語の共通スキーマ。1言語=1ファイルにまとめ、生成側は触らない。
//
// ⚠️ この設計の理由（過去の事故を防ぐため）
//  1. slug を言語ごとに必ず定義する
//     → 独語・伊語のURLにポーランド語スラッグが混入し68.8位/50.0位に沈んだ事故があった。
//       slug を言語ファイルの必須項目にして、書き忘れを型で防ぐ。
//  2. canonical は生成時に eta-se.com/{lang}/ から機械的に組む
//     → 統合後も旧ドメインを指すcanonicalが54ページ残っていた事故があった。
//       手書きさせない。
//  3. 数値・事実は共有定数（FACTS）を参照する
//     → 言語ごとに料金や日数を書かせると、値がずれて誤情報になる。

export type Facts = {
  fee: string;          // 公式手数料（例: £20）
  validYears: number;   // 有効年数
  staySixMonths: number;// 1回の滞在上限（月）
  decisionDays: string;  // 判定所要（例: 3）
};

/** gov.uk 記載の事実。全言語で共有し、言語ファイルには書かせない。 */
export const FACTS: Facts = {
  fee: "£20",
  validYears: 2,
  staySixMonths: 6,
  decisionDays: "3",
};

export type PageKey =
  | "what-is-eta" | "application" | "fee" | "status-check"
  | "validity" | "processing-time" | "required-documents"
  | "stay-duration" | "faq" | "about" | "privacy" | "terms";

export type PageContent = {
  slug: string;        // その言語のURLスラッグ（必須・言語に合わせる）
  title: string;       // 答えを先頭に出す（CTR改善で実証済みの型）
  description: string;
  h1: string;
  lead: string;
  sections: { h: string; p: string[] }[];
};

export type LangContent = {
  code: string;        // hreflang用（例: es, nl, pt-PT）
  dir?: "rtl";
  label: string;       // 言語名（自言語表記）
  siteName: string;
  tagline: string;
  homeTitle: string;
  homeDescription: string;
  homeLead: string;
  nav: { info: string; entry: string; faq: string };
  officialLinkLabel: string;
  updatedLabel: string;
  pages: Record<PageKey, PageContent>;
};
