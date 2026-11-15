import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15）: オランダ語（オランダ・ベルギー）。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "Meer onderwerpen",
  homeHeading: "Meer over de ETA en reizen naar het VK",
  groups: { eta: "ETA, visum en aanvragen", travel: "Aankomst en verblijf in het VK" },
  breadcrumbHome: "UK ETA Gids",
  relatedHeading: "Dit is misschien ook nuttig",
  hubCardsHeading: "Alle gidsen over aankomst en verblijf",
  faqHeading: "Veelgestelde vragen",
  sourcesHeading: "Officiële bronnen",
  checkedLabel: "Laatst gecontroleerd:",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
