import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";

// Font option 2 — Playfair Display (display/headings) × Work Sans (body).
// Variable names kept identical so existing globals.css/components need no change.
const notoSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  weight: ["500", "600", "700"],
  display: "swap",
});

const fraunces = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UK ETA Center 2026 | Komplett guide på svenska steg för steg",
    template: "%s ‐ UK ETA Center",
  },
  description:
    "Komplett guide till UK ETA 2026 på svenska. Vid resa till Storbritannien krävs ETA sedan 2 april 2025 — ansök minst 3 dagar före avresan. Kom ihåg att ansöka i god tid.",
  keywords:
    "UK ETA, UK ETA 2026, Storbritannien, reseauktorisation, Electronic Travel Authorisation, ETA-ansökan, Sverige, avgift £20",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://eta-se.com"),
  openGraph: {
    title: "UK ETA Center 2026 | Komplett guide på svenska steg för steg",
    description:
      "Komplett guide till UK ETA 2026 på svenska. Vid resa till Storbritannien krävs ETA sedan 2 april 2025 — ansök minst 3 dagar före avresan. Kom ihåg att ansöka i god tid.",
    locale: "sv_SE",
    type: "website",
    siteName: "UK ETA Center",
    url: "https://eta-se.com/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UK ETA Center — Big Ben och Westminsterbron i London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK ETA Center 2026 | Komplett guide på svenska steg för steg",
    description:
      "Komplett guide till UK ETA 2026 på svenska — avgift £20, beslut oftast inom 72 h, giltig i 2 år.",
    images: ["/og-image.jpg"],
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
        className={`${notoSans.variable} ${notoSerif.variable} ${fraunces.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Reveal />
        <StickyCta />
      </body>
    </html>
  );
}
