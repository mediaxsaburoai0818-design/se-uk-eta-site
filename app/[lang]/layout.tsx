import type { Metadata } from "next";
import { LANGS } from "@/data/langs";

// 追加言語の共通レイアウト。lang属性を言語ごとに正しく出す。
// ⚠️ ここを固定値にすると全言語が同じlangになり、多言語サイトとして認識されない。
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = LANGS[lang];
  return { title: { default: c?.siteName ?? "UK ETA", template: `%s ‐ ${c?.siteName ?? "UK ETA"}` } };
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
