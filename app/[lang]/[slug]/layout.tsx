import SubAside from "@/components/SubAside";
import { L10N_CHROME } from "@/lib/l10n-chrome";
import "../../eta-sub.css";
import "../../eta-skin.css";

// 追加言語の下層ページも新デザインに（okina 2026-10-21「全言語」）。文言は各言語TOPの翻訳から（scripts/gen-l10n-chrome.py）。
export default async function LangSubLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = L10N_CHROME[lang];
  if (!c) return <>{children}</>;
  return (
    <div className="etahome xskin" dir={lang === "he" ? "rtl" : undefined}>
      <div className="xgrid">
        {children}
        <SubAside t={c.aside} />
      </div>
      <div className="xfinal" dangerouslySetInnerHTML={{ __html: c.cta }} />
    </div>
  );
}
