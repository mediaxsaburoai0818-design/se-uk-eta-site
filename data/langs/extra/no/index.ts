import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15）: ノルウェー語（ブークモール）。ノルウェーは EU 外（EU 限定の記述は EU 市民向けと明示）。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "Flere temaer",
  homeHeading: "Mer om ETA og reisen til Storbritannia",
  groups: { eta: "ETA, visum og søknad", travel: "Ankomst og opphold i Storbritannia" },
  breadcrumbHome: "UK ETA Guide",
  relatedHeading: "Dette kan også være nyttig",
  hubCardsHeading: "Alle guider om ankomst og opphold",
  faqHeading: "Ofte stilte spørsmål",
  sourcesHeading: "Offisielle kilder",
  checkedLabel: "Sist kontrollert:",
  dateLocale: "nb-NO",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
