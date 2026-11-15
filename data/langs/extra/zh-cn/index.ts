import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15・バッチ2）: 简体中文（中国大陆读者）。🚨 中国大陆护照不适用 ETA（visa national）：ETA 相关页面一律先说明需要签证，并引导到 GOV.UK check-uk-visa 与 Standard Visitor 页面。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "更多主题",
  homeHeading: "更多关于 ETA、签证与入境英国的资讯",
  groups: { eta: "ETA、签证与申请", travel: "入境与在英国停留" },
  breadcrumbHome: "UK ETA 指南",
  relatedHeading: "你可能还需要这些",
  hubCardsHeading: "入境与在英国停留的全部指南",
  faqHeading: "常见问题",
  sourcesHeading: "官方来源",
  checkedLabel: "最后确认：",
  dateLocale: "zh-CN",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
