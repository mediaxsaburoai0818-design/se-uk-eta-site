import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15）: フィンランド語。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "Lisää aiheita",
  homeHeading: "Lisää ETA:sta ja matkasta Britanniaan",
  groups: { eta: "ETA, viisumi ja hakeminen", travel: "Saapuminen ja oleskelu Britanniassa" },
  breadcrumbHome: "UK ETA -opas",
  relatedHeading: "Saatat tarvita myös nämä",
  hubCardsHeading: "Kaikki oppaat saapumisesta ja oleskelusta",
  faqHeading: "Usein kysytyt kysymykset",
  sourcesHeading: "Viralliset lähteet",
  checkedLabel: "Tarkistettu viimeksi:",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
