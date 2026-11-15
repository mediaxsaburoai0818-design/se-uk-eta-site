import type { ExtraPage, ExtraUI, TopicKey } from "../../_schema";
import eta from "./eta";
import travelA from "./travel-a";
import travelB from "./travel-b";

// 追加トピック（2026-11-15・バッチ2）: 韓国語。スラッグはローマ字転写（既存ページの綴りに合わせる）。並び順は EXTRA_TOPICS（_schema.ts の TOPIC_ROOT）が決める
export const ui: ExtraUI = {
  homeEyebrow: "더 알아보기",
  homeHeading: "ETA와 영국 여행에 대해 더 알아보기",
  groups: { eta: "ETA·비자·신청", travel: "영국 입국과 체류" },
  breadcrumbHome: "UK ETA 가이드",
  relatedHeading: "함께 보면 좋은 안내",
  hubCardsHeading: "영국 입국과 체류에 관한 모든 안내",
  faqHeading: "자주 묻는 질문",
  sourcesHeading: "공식 출처",
  checkedLabel: "최종 확인:",
  dateLocale: "ko-KR",
};

const extra: Partial<Record<TopicKey, ExtraPage>> = { ...eta, ...travelA, ...travelB };
export default extra;
