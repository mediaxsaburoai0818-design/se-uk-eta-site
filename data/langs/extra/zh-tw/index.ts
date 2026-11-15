import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15・バッチ2）: 繁體中文（台灣讀者）。⚠️ 台灣護照限「載有國民身分證統一編號」者適用 ETA，提到適用資格時一律保留此條件。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "更多主題",
  homeHeading: "更多關於 ETA 與前往英國的資訊",
  groups: { eta: "ETA、簽證與申請", travel: "入境與在英國停留" },
  breadcrumbHome: "UK ETA 指南",
  relatedHeading: "您可能也需要這些",
  hubCardsHeading: "入境與在英國停留的所有指南",
  faqHeading: "常見問題",
  sourcesHeading: "官方資料來源",
  checkedLabel: "最後確認：",
  dateLocale: "zh-TW",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
