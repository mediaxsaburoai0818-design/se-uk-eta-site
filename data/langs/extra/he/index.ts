import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15・バッチ2）: ヘブライ語（RTL・イスラエル読者）。スラッグはラテン文字の転写。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "נושאים נוספים",
  homeHeading: "עוד על ה‑ETA ועל הנסיעה לבריטניה",
  groups: { eta: "ETA, ויזות והגשת בקשה", travel: "כניסה ושהייה בבריטניה" },
  breadcrumbHome: "מדריך UK ETA",
  relatedHeading: "אולי יעניין אתכם גם",
  hubCardsHeading: "כל המדריכים על כניסה ושהייה בבריטניה",
  faqHeading: "שאלות נפוצות",
  sourcesHeading: "מקורות רשמיים",
  checkedLabel: "נבדק לאחרונה:",
  dateLocale: "he-IL",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
