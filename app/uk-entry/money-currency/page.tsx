import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Kontanter, valuta och dricks i Storbritannien (2026)",
  description:
    "Valutan är brittiskt pund (GBP). Har du med dig £10 000 eller mer måste du deklarera det. Kort accepteras nästan överallt - så fungerar växling och dricks i Storbritannien.",
  alternates: { canonical: "https://eta-se.com/uk-entry/money-currency/" },
};

export default function MoneyCurrency() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Från vilket belopp måste jag deklarera kontanter vid inresa till Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Om du reser in i Storbritannien (GB) med £10 000 eller mer i kontanter (inklusive motsvarande belopp i andra valutor) är du skyldig att deklarera summan. Det görs online i förväg eller i den röda filen vid ankomsten. Att inte deklarera kan leda till att hela beloppet beslagtas och till böter på upp till £5 000.",
        },
      },
      {
        "@type": "Question",
        name: "Räcker det med kort i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kort, inklusive kontaktlösa betalningar, är mycket utbrett och accepteras i de flesta situationer. I många fall klarar du dig helt med kort. Det kan ändå vara praktiskt att ha lite kontanter för mindre butiker eller dricks.",
        },
      },
      {
        "@type": "Question",
        name: "Är dricks obligatoriskt i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej, dricks är en sedvänja och inte något lagstadgat krav. På restauranger läggs ibland en 'service charge' på 10-12,5 % till notan - kontrollera specifikationen. Om ingen serviceavgift tillkommer är omkring 10 % en vanlig riktlinje.",
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
            Kontanter, valuta och dricks i Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Valutan i Storbritannien är brittiskt pund. Så mycket kontanter får du ta med utan att deklarera, hur du växlar pengar smidigast och vad som gäller för kort och dricks under din resa.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Valutan: brittiskt pund (GBP, £)</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Betalmedlet i Storbritannien är <strong>brittiskt pund (GBP, £)</strong>. Euro och andra valutor accepteras generellt inte i vanliga butiker, så du behöver antingen kort eller pund i kontanter för dina utgifter på plats.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Kontanter: deklarationsplikt från £10 000</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Reser du in i Storbritannien (GB) med <strong>£10 000 eller mer</strong> i kontanter - inklusive motsvarande belopp i andra valutor - är du <strong>skyldig att deklarera summan</strong>. Deklarationen görs <strong>online i förväg</strong> eller i den <strong>röda filen vid ankomsten</strong>. Att inte deklarera kan leda till att <strong>hela beloppet beslagtas</strong> och till böter på upp till <strong>£5 000</strong>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Kort eller kontanter?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              <strong>Kort, särskilt kontaktlösa betalningar, är mycket utbrett</strong> i Storbritannien. I många situationer klarar du dig helt utan kontanter - från kollektivtrafik och kaféer till större butiker.
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; Det kan ändå vara <strong>praktiskt med lite kontanter</strong> för mindre butiker, marknader och dricks.</li>
              <li>&bull; Kontrollera med din bank om avgifter för utländska kortbetalningar innan resan.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Var växlar man pengar?</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Du kan växla pengar på <strong>banker, växlingskontor och flygplatser</strong>. Tänk på att växling på flygplatser ofta ger en <strong>mindre fördelaktig kurs</strong>. Jämför gärna kurser innan du växlar större belopp.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Dricks: sedvänja, inte krav</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Dricks i Storbritannien är en <strong>sedvänja och inte något lagstadgat krav</strong>. Riktlinjerna varierar beroende på situation:
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Restauranger</strong>: en 'service charge' på 10-12,5 % läggs ibland till på notan - kontrollera specifikationen. Om ingen avgift tillkommer är omkring 10 % en vanlig riktlinje.</li>
              <li>&bull; <strong>Pub</strong>: vid beställning i baren förväntas normalt ingen dricks.</li>
              <li>&bull; <strong>Taxi</strong>: att avrunda uppåt är vanligt.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Bra att veta inför inresan</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Kontanter deklareras vid behov i tullen, som kommer efter passkontrollen - se hur <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullreglerna och införselgränserna</Link> fungerar. För inresan behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link>, och du kan följa ansökan via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, och planerar du att hyra bil kan du läsa om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>. För mellanlandningar, se guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/bringing-cash-into-uk" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Taking cash in and out of Great Britain</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Kontanter, valuta och dricks" }]} />
        </article>
      </section>
    </div>
  );
}
