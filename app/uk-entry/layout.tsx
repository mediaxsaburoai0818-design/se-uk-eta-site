import RelatedPages from "@/components/RelatedPages";
import SubAside from "@/components/SubAside";
import { HOME_CTA } from "@/lib/eta-design";
import "../eta-sub.css";
import "../eta-skin.css";

// 下層ページの新デザイン（okina 2026-10-20「全記事・全サイト・全言語」）。中身はページのまま、見た目は eta-skin.css で置き換える。
// 各ページ末尾に同カテゴリの関連ガイドを出す（被リンク0〜1本の孤立ページ対策・2026-10-16）
const ASIDE = {
  toc: "På denna sida",
  ctaTitle: "Redo att ansöka?",
  ctaBody: "Ansökan görs i appen UK ETA eller på GOV.UK. Avgiften är £20.",
  ctaButton: "Ansök om UK ETA",
  ctaHref: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
  subLabel: "Så ansöker du →",
  subHref: "/eta-info/application/",
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="etahome xskin">
      <div className="xgrid">
        {children}
        <SubAside t={ASIDE} />
      </div>
      <RelatedPages />
      <div className="xfinal" dangerouslySetInnerHTML={{ __html: HOME_CTA }} />
    </div>
  );
}
