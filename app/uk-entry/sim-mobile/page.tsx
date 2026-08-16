import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SIM-kort, eSIM och mobilt internet i Storbritannien (2026)",
  description:
    "De största mobiloperatörerna i Storbritannien är EE, O2, Vodafone och Three. Kontantkort och eSIM för besökare, olåst telefon och roaming efter brexit - så håller du dig uppkopplad.",
  alternates: { canonical: "https://eta-se.com/uk-entry/sim-mobile/" },
};

export default function SimMobile() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Behöver jag ett lokalt SIM-kort i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Det beror på din nuvarande operatör. Ett lokalt kontantkort eller ett eSIM kan vara praktiskt för att undvika roamingavgifter och få mobildata på plats. eSIM köps online och aktiveras direkt om din telefon stöder det.",
        },
      },
      {
        "@type": "Question",
        name: "Kan jag använda eSIM i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, om din telefon stöder eSIM och är olåst kan du köpa ett eSIM online och aktivera det utan att byta fysiskt SIM-kort. Kontrollera i förväg att din enhet är kompatibel och operatörsupplåst.",
        },
      },
      {
        "@type": "Question",
        name: "Kan jag använda min EU-telefon som vanligt i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Efter brexit tar vissa operatörer ut avgifter för roaming i Storbritannien, medan andra inte gör det. Villkoren varierar mellan operatörer och abonnemang - kontrollera med din operatör före avresan.",
        },
      },
    ],
  });

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqLd }} />
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>INRESA TILL UK</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            SIM-kort, eSIM och mobilt internet i Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Vilka mobiloperatörer som finns i Storbritannien, hur du väljer mellan kontantkort och eSIM som besökare, vad du bör tänka på kring olåst telefon och roaming - och var du hittar fri Wi-Fi.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Mobiloperatörer i Storbritannien</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              De största mobilnäten i Storbritannien är <strong>EE, O2, Vodafone och Three</strong>. Utöver dem finns flera virtuella operatörer (MVNO) som använder samma nät, till exempel <strong>giffgaff, Lebara och Lyca</strong>.
            </p>
            <p className="leading-relaxed text-sm" style={{ color: "var(--color-text-light)" }}>
              Detta område har få enhetliga officiella regler, och priser och abonnemang ändras ofta. Betrakta informationen nedan som en allmän vägledning och kontrollera aktuella villkor hos operatören.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Alternativ för besökare: kontantkort eller eSIM</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Kontantkort / SIM för turister</strong>: köps på flygplatser, i mobilbutiker och i mataffärer.</li>
              <li>&bull; <strong>eSIM</strong>: köps online och aktiveras direkt om din telefon stöder det - då slipper du byta fysiskt SIM-kort.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Olåst telefon är en förutsättning</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För att kunna använda ett lokalt SIM-kort eller eSIM behöver din telefon vara <strong>operatörsupplåst (SIM-olåst)</strong>. Kontrollera detta med din nuvarande operatör i god tid före avresan.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Roaming efter brexit</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Besökare från EU bör vara uppmärksamma på <strong>roamingavgifter</strong>. Efter brexit kan vissa operatörer ta ut avgifter för roaming i Storbritannien, medan andra inte gör det. Villkoren varierar - <strong>kontrollera med din operatör före avresan</strong> för att undvika oväntade kostnader.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Täckning och fri Wi-Fi</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Täckningen är generellt god i städer, medan den på landsbygden kan variera mellan operatörer. Du kan kontrollera täckningen via <strong>Ofcoms täckningskarta</strong>.
            </p>
            <p className="leading-relaxed text-sm" style={{ color: "var(--color-text-light)" }}>
              Fri Wi-Fi är vanligt på kaféer, i kollektivtrafiken och på många offentliga platser, vilket kan komplettera din mobila uppkoppling.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Bra att veta inför inresan</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För inresan till Storbritannien behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link> - ansökans status ser du via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, reglerna för vad du får ta med i guiden om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullregler och införselgränser</Link>, och planerar du att hyra bil kan du läsa om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>. För mellanlandningar, se guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.ofcom.org.uk/" target="_blank" rel="noopener noreferrer" className="content-link">Ofcom - Storbritanniens tillsynsmyndighet för kommunikation</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "SIM-kort och mobilt internet" }]} />
        </article>
      </section>
    </div>
  );
}
