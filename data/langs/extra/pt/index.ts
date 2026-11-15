import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15）: ポルトガル語（ポルトガル向け）。ブラジル等の読者には GOV.UK の確認ツールを案内。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "Mais temas",
  homeHeading: "Mais sobre a ETA e a viagem ao Reino Unido",
  groups: { eta: "ETA, vistos e pedido", travel: "Chegada e estadia no Reino Unido" },
  breadcrumbHome: "Guia UK ETA",
  relatedHeading: "Também lhe pode interessar",
  hubCardsHeading: "Todos os guias sobre a chegada e a estadia",
  faqHeading: "Perguntas frequentes",
  sourcesHeading: "Fontes oficiais",
  checkedLabel: "Última verificação:",
  dateLocale: "pt-PT",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
