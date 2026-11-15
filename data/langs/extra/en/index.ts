import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15）: 英語。国際読者向け（特定国の対象可否は GOV.UK の確認ツールへ）。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "More topics",
  homeHeading: "More about the ETA and travelling to the UK",
  groups: { eta: "ETA, visas and applying", travel: "Arriving and staying in the UK" },
  breadcrumbHome: "UK ETA Guide",
  relatedHeading: "You may also find these useful",
  hubCardsHeading: "All guides on arriving and staying in the UK",
  faqHeading: "Frequently asked questions",
  sourcesHeading: "Official sources",
  checkedLabel: "Last checked:",
  dateLocale: "en-GB",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
