import RelatedPages from "@/components/RelatedPages";

// 各ページ末尾に同カテゴリの関連ガイドを出す（被リンク0〜1本の孤立ページ対策・2026-10-16）
export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedPages />
    </>
  );
}
