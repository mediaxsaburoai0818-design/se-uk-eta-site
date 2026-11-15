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

export type OptionalPageKey = "mobile-app";

export type PageContent = {
  slug: string;        // その言語のURLスラッグ（必須・言語に合わせる）
  title: string;       // 答えを先頭に出す（CTR改善で実証済みの型）
  description: string;
  h1: string;
  lead: string;
  sections: { h: string; p: string[] }[];
  officialLink?: { href: string; label: string }; // 本文下のボタン先を変えるとき（無ければ officialLinkLabel で申請ページへ）
};

// ---- 追加トピック（2026-11-15・canada-eta-ro の extra 方式を移植）----------------------------
// ルート（スウェーデン語 /eta-info/ ・ /uk-entry/）にあって 12 ページに無いテーマを、言語ごとに任意で持てるようにする。
//  ・TopicKey はテーマの識別子。言語間の hreflang はこのキーで結ぶ（スラッグは言語ごと・gen-hreflang-map.ts）。
//  ・原本はルートのページ（TOPIC_ROOT）。事実と出典はルートのものだけ。数値のうち FACTS にあるものは `${F.xxx}` で埋め込む。
//  ・本文の記法は [文言](URL) のリンクだけ。⚠️ Markdown の ** は使わない（画面に素の ** が出る事故があった）→ allRoutes() で検出して止める。
//  ・checked はルートページに表示されている確認日（ISO）。ルートに確認日が無いページは省略（表示しない）。
//  ・mobile-app は en だけ pages 側（12+1 ページ）に持っている。extra と pages の両方に置かない（allRoutes() で検出）。
//  ・ルートのうち扱わないもの: giltighet（= pages.validity と同じ内容）/ transit-detaljer（transit に統合）/
//    polish-community（スウェーデン在住者向け）/ faq（pages.faq がある）/ news の個別記事（eta-news に1本でまとめる）。
export const TOPIC_ROOT = {
  // 制度・手続き（group: "eta"）
  "who-needs-eta": "/eta-info/vem-behover/",
  "eta-vs-visa": "/eta-info/eta-eller-visum/",
  "standard-visitor-visa": "/eta-info/standard-visitor-visa/",
  "expiration": "/eta-info/expiration/",
  "children-family": "/eta-info/barn-familj/",
  "eta-refused": "/eta-info/eta-avslag/",
  "common-mistakes": "/eta-info/vanliga-fel/",
  "official-gov-uk": "/eta-info/official-gov-uk/",
  "mobile-app": "/eta-info/mobile-app/",
  "transit": "/eta-info/transit/",
  "eta-news": "/news/",
  // 入国・滞在（group: "travel"）
  "entry-and-visa": "/uk-entry/wjazd-i-wiza/",
  "passport-requirements": "/uk-entry/passport-requirements/",
  "uk-border-egates": "/uk-entry/uk-border-egates/",
  "uk-customs-rules": "/uk-entry/uk-customs-rules/",
  "bringing-medicines": "/uk-entry/bringing-medicines/",
  "airport-security-liquids": "/uk-entry/airport-security-liquids/",
  "smoking-alcohol-rules": "/uk-entry/smoking-alcohol-rules/",
  "travelling-with-children": "/uk-entry/travelling-with-children/",
  "london-airports": "/uk-entry/lotniska-londynu/",
  "heathrow": "/uk-entry/lotnisko-heathrow/",
  "transport-oyster": "/uk-entry/transport-oyster/",
  "driving-in-uk": "/uk-entry/driving-in-uk/",
  "money-currency": "/uk-entry/money-currency/",
  "vat-refund": "/uk-entry/vat-refund/",
  "sim-mobile": "/uk-entry/sim-mobile/",
  "power-plug": "/uk-entry/power-plug/",
  "healthcare-nhs": "/uk-entry/healthcare-nhs/",
  "safety-emergency": "/uk-entry/safety-emergency/",
  "bank-holidays": "/uk-entry/bank-holidays/",
} as const;
export type TopicKey = keyof typeof TOPIC_ROOT;
export const EXTRA_TOPICS = Object.keys(TOPIC_ROOT) as TopicKey[];

/** 本文ブロック: 段落・箇条書き・注意枠・表。文字列中の [文言](URL) だけがリンクになる */
export type Block =
  | string
  | { ul: string[] }
  | { note: string }
  | { table: { head: string[]; rows: string[][] } };

export type ExtraPage = {
  slug: string;              // その言語のスラッグ（他言語のスラッグを流用しない・同言語内で一意・[a-z0-9-]）
  group: "eta" | "travel";
  hub?: boolean;             // 入国・滞在ガイドの目次（同じ group のカードを並べる）
  title: string;             // <title>（「| サイト名」が付く）
  description: string;       // 160字以内
  h1: string;
  lead: string;
  card: string;              // 言語TOP・関連カードに出す1行説明
  sections: { h: string; blocks: Block[] }[];
  faq?: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  checked?: string;          // YYYY-MM-DD（ルートページの確認日）。表示は言語の日付表記で
};

export type ExtraUI = {
  homeEyebrow: string;       // 言語TOPの追加セクション
  homeHeading: string;
  groups: { eta: string; travel: string };
  breadcrumbHome: string;    // パンくずの先頭（言語TOP）
  relatedHeading: string;
  hubCardsHeading: string;
  faqHeading: string;
  sourcesHeading: string;
  checkedLabel: string;
  dateLocale?: string;       // 確認日の表記（省略時は code。en は en-GB）
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
  // mobile-app は任意（2026-10-14 en のみ。「uk eta app」表示2,346 が /de/ に着地していたため）
  pages: Record<PageKey, PageContent> & Partial<Record<OptionalPageKey, PageContent>>;
  extraUI?: ExtraUI;                                // extra がある言語は必須
  extra?: Partial<Record<TopicKey, ExtraPage>>;
};
