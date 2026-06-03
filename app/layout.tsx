import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UK ETA Online 2026 | Steg-för-steg-ansökningsguide på svenska",
    template: "%s ‐ UK ETA Online",
  },
  description:
    "Komplett guide om UK ETA 2026 på svenska. För resor till Storbritannien: obligatoriskt från den 2 april 2025 — ansökan ska lämnas in 3 dagar före avresa. Se till att skicka in ansökan i tid.",
  keywords:
    "UK ETA, UK ETA 2026, Storbritannien, elektronisk reseauktorisering, ETA-ansökan, Sverige, avgift £20",
  robots: { index: true, follow: true },
  openGraph: {
    title: "UK ETA Online 2026 | Steg-för-steg-ansökningsguide på svenska",
    description:
      "Komplett guide om UK ETA 2026 på svenska. För resor till Storbritannien: obligatoriskt från den 2 april 2025 — ansökan ska lämnas in 3 dagar före avresa. Se till att skicka in ansökan i tid.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
