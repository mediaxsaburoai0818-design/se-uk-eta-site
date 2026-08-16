import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Passkontroll i Storbritannien: eGates i London (2026)",
  description:
    "Med ett EU-pass och en giltig UK ETA kan du använda eGates - inga frågor, ingen stämpel. Från den 8 juli 2026 får även barn från 8 år använda eGates.",
  alternates: { canonical: "https://eta-se.com/uk-entry/uk-border-egates/" },
};

export default function UkBorderEgates() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kan jag använda eGates med svenskt pass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. eGates är öppna för passinnehavare från alla EU-länder (samt Island, Liechtenstein, Norge och Schweiz, plus Australien, Kanada, Japan, Nya Zeeland, Singapore, Sydkorea och USA), förutsatt att du har ett giltigt resetillstånd som UK ETA eller eVisa.",
        },
      },
      {
        "@type": "Question",
        name: "Från vilken ålder får barn använda eGates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sedan den 8 juli 2026 får barn från 8 år använda eGates (tidigare gällde 10 år). Barnet måste vara minst 120 cm långt, och barn mellan 8 och 17 år måste resa i sällskap med en vuxen.",
        },
      },
      {
        "@type": "Question",
        name: "Stämplas passet när jag går genom en eGate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Vid passage genom en eGate ställer ingen tjänsteman frågor och ingen inresestämpel sätts i passet. Din UK ETA är elektroniskt kopplad till ditt pass.",
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
            Passkontroll i Storbritannien och eGates
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Vem som får använda de automatiska eGates-spärrarna på Londons flygplatser, hur passagen fungerar steg för steg, vad gränspolisen kan fråga vid disken och vad som ändras för familjer från den 8 juli 2026.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Nytt från den 8 juli 2026: eGates från 8 år</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Från den <strong>8 juli 2026</strong> får barn som är <strong>8 år eller äldre</strong> använda eGates - tidigare var gränsen 10 år. Två villkor gäller: barnet måste vara minst <strong>120 cm</strong> långt, och barn mellan <strong>8 och 17 år</strong> måste resa i sällskap med en vuxen.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För många familjer innebär det att hela sällskapet nu kan gå genom de automatiska spärrarna, utan att köa till disken med gränspolis.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Vem får använda eGates</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              eGates är öppna för passinnehavare från:
            </p>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>alla EU-länder</strong> (inklusive Sverige),</li>
              <li>&bull; Island, Liechtenstein, Norge och Schweiz,</li>
              <li>&bull; Australien, Kanada, Japan, Nya Zeeland, Singapore, Sydkorea och USA.</li>
            </ul>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Villkoret är att du har ett giltigt resetillstånd - för svenska resenärer betyder det i praktiken en <strong>giltig UK ETA</strong> (eller eVisa). Har du ingen ännu, se hur du gör en <Link href="/eta-info/application/" className="content-link">ansökan om UK ETA</Link>.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              På <strong>15 flygplatser och tågterminaler</strong> i UK finns fler än <strong>290 eGates</strong> - däribland på <Link href="/uk-entry/lotniska-londynu/" className="content-link">Londons flygplatser</Link> som Heathrow.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Så fungerar en eGate: inga frågor, ingen stämpel</h2>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; Lägg ditt biometriska pass, uppslaget på sidan med fotot, på läsaren.</li>
              <li>&bull; Titta in i kameran - systemet jämför ditt ansikte med fotot i passet.</li>
              <li>&bull; Spärren öppnas och du går igenom - <strong>utan samtal med någon tjänsteman och utan inresestämpel</strong> i passet.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Om spärren inte känner igen dig (till exempel på grund av ett slitet pass) hänvisas du helt enkelt till disken med gränspolis.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Manuell passkontroll: de 5 möjliga frågorna</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Går du genom kontrollen hos en gränspolis kan du få frågor om:
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Resans syfte</strong> - turism, affärer, släktbesök.</li>
              <li>&bull; <strong>Vistelsens längd</strong> - hur många dagar du stannar.</li>
              <li>&bull; <strong>Boendet</strong> - adressen till hotellet eller värden.</li>
              <li>&bull; <strong>Returresan</strong> - datum och bokning för hemresan.</li>
              <li>&bull; <strong>Ekonomiska medel</strong> - tillräckliga pengar för vistelsen.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Nödvändiga dokument</h2>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Biometriskt pass</strong> som är giltigt under hela vistelsen.</li>
              <li>&bull; <strong>Giltig UK ETA</strong> - den är <strong>elektroniskt kopplad till passet</strong> och behöver inte skrivas ut; spara ändå gärna godkännandemejlet.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Är du osäker på din ansökan, se hur du gör en <Link href="/eta-info/status-check/" className="content-link">kontroll av ETA-ansökans status</Link>. För mellanlandningar via UK gäller särskilda regler - läs guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Familjer med barn: det här gäller</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; Barn <strong>från 8 år</strong> (och minst 120 cm långa) använder eGates; barn mellan 8 och 17 år alltid i sällskap med en vuxen.</li>
              <li>&bull; Barn under 8 år går genom disken med gränspolis tillsammans med föräldrarna.</li>
              <li>&bull; Varje barn - även spädbarn - behöver en <strong>egen UK ETA</strong>.</li>
              <li>&bull; De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Efter passkontrollen: tullen</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Efter passkontrollen följer tullkontrollen - observera att det är <strong>förbjudet att ta med kött och mejeriprodukter från EU</strong> till Storbritannien. Läs mer i guiden om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullregler och införselgränser</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Faster travel through the UK border</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Passkontroll och eGates" }]} />
        </article>
      </section>
    </div>
  );
}
