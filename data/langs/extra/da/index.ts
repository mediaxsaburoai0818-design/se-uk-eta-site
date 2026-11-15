import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15）: デンマーク語。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "Flere emner",
  homeHeading: "Mere om ETA og rejsen til Storbritannien",
  groups: { eta: "ETA, visum og ansøgning", travel: "Ankomst og ophold i Storbritannien" },
  breadcrumbHome: "UK ETA Guide",
  relatedHeading: "Det kan også være relevant for dig",
  hubCardsHeading: "Alle guides om ankomst og ophold",
  faqHeading: "Ofte stillede spørgsmål",
  sourcesHeading: "Officielle kilder",
  checkedLabel: "Senest kontrolleret:",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
