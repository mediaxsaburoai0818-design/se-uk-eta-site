import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15）: スペイン語（スペイン在住者向け）。中南米の読者には GOV.UK の確認ツールを案内。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "Más temas",
  homeHeading: "Más sobre la ETA y el viaje al Reino Unido",
  groups: { eta: "ETA, visados y solicitud", travel: "Llegada y estancia en el Reino Unido" },
  breadcrumbHome: "Guía UK ETA",
  relatedHeading: "También te puede interesar",
  hubCardsHeading: "Todas las guías sobre la llegada y la estancia",
  faqHeading: "Preguntas frecuentes",
  sourcesHeading: "Fuentes oficiales",
  checkedLabel: "Última comprobación:",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
