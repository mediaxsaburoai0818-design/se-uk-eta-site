import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15・バッチ2）: チェコ語（EU 加盟国）。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "Další témata",
  homeHeading: "Více o ETA a cestě do Spojeného království",
  groups: { eta: "ETA, víza a žádost", travel: "Příjezd a pobyt ve Spojeném království" },
  breadcrumbHome: "Průvodce UK ETA",
  relatedHeading: "Mohlo by se vám hodit také",
  hubCardsHeading: "Všechny průvodce příjezdem a pobytem",
  faqHeading: "Časté dotazy",
  sourcesHeading: "Oficiální zdroje",
  checkedLabel: "Naposledy ověřeno:",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
