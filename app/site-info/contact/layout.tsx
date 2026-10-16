import type { Metadata } from "next";

// page.tsx が "use client" で metadata を書けないため、ここで指定する。
// ⚠️ 無いとルートの既定 title/description が出て、TOP と title が重複していた（2026-10-16）
export const metadata: Metadata = {
  title: "Kontakta oss",
  description:
    "Kontakta UK ETA-guiden med frågor om innehållet på webbplatsen. Frågor om statusen för en enskild UK ETA-ansökan besvaras av UK Visas and Immigration.",
  alternates: { canonical: "https://eta-se.com/site-info/contact/" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
