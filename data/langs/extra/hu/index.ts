import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15・バッチ2）: ハンガリー語（EU 加盟国）。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "További témák",
  homeHeading: "További tudnivalók az ETA-ról és az utazásról",
  groups: { eta: "ETA, vízum és igénylés", travel: "Érkezés és tartózkodás az Egyesült Királyságban" },
  breadcrumbHome: "UK ETA útmutató",
  relatedHeading: "Ez is hasznos lehet",
  hubCardsHeading: "Minden útmutató az érkezésről és a tartózkodásról",
  faqHeading: "Gyakori kérdések",
  sourcesHeading: "Hivatalos források",
  checkedLabel: "Utoljára ellenőrizve:",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
