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
    default: "UK ETA Online - Reseauktorisering till Storbritannien",
    template: "%s | UK ETA Online",
  },
  description:
    "Komplett guide om UK ETA (Electronic Travel Authorisation) till Storbritannien. Ansokan, avgifter, FAQ och mer.",
  keywords:
    "UK ETA, Storbritannien, reseauktorisering, Electronic Travel Authorisation, ETA ansokan, Sverige, resa till England, GOV.UK",
  robots: { index: true, follow: true },
  openGraph: {
    title: "UK ETA Online - Reseauktorisering till Storbritannien",
    description:
      "Komplett guide om UK ETA-systemet. Information, forfarande, kostnader och FAQ.",
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
