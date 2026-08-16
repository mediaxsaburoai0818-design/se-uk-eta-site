import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Betala för resor i London: Oyster och kontaktlöst (2026)",
  description:
    "I Londons tunnelbana, bussar och tåg betalar du med kontaktlöst kort, mobil eller Oyster-kort. Kontaktlöst och Oyster har samma pris och det finns dagliga och veckovisa pristak - kontrollera aktuella belopp hos TfL.",
  alternates: { canonical: "https://eta-se.com/uk-entry/transport-oyster/" },
};

export default function TransportOyster() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Behöver jag ett Oyster-kort i London?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inte nödvändigtvis. Har du ett kontaktlöst betalkort eller en mobil med betalning kan du resa direkt till samma pris som med Oyster. Kontaktlöst och Oyster kostar lika mycket, så för besökare räcker det oftast med ett kontaktlöst kort.",
        },
      },
      {
        "@type": "Question",
        name: "Kan man betala kontant på bussen i London?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Londons bussar tar inte emot kontanter. Du betalar med kontaktlöst kort, mobil eller Oyster-kort genom att hålla det mot läsaren när du kliver på.",
        },
      },
      {
        "@type": "Question",
        name: "Vad händer om jag reser mycket under en dag?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Det finns pristak (capping) per dag och per vecka. När du nått takbeloppet debiteras du inte mer för fler resor. Takbeloppen varierar beroende på zon och ändras över tid - kontrollera aktuella belopp hos Transport for London (TfL).",
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
            Betala för resor i London: Oyster och kontaktlöst
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            I Londons tunnelbana, bussar och tåg betalar du enklast genom att hålla ett kontaktlöst kort, en mobil eller ett Oyster-kort mot läsaren. Så fungerar &quot;pay as you go&quot;, varför kontaktlöst och Oyster kostar lika mycket och hur de dagliga pristaken fungerar.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Kontaktlöst eller Oyster - så betalar du</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Londons kollektivtrafik - tunnelbana (Tube), bussar och tåg - bygger på <strong>&quot;pay as you go&quot;</strong>: du håller ett <strong>kontaktlöst betalkort, en mobil med betalning eller ett Oyster-kort</strong> mot den gula läsaren och betalar per resa.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              <strong>Kontaktlöst och Oyster har samma pris.</strong> Har du redan ett kontaktlöst kort eller en mobil hemifrån kan du resa till samma taxa utan att köpa ett Oyster-kort. För tillfälliga besökare är kontaktlöst oftast smidigast. Ett Visitor Oyster-kort är däremot något du beställer <strong>innan</strong> avresan.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Pristak (capping): du betalar inte hur mycket som helst</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Det finns <strong>pristak per dag och per vecka</strong>. När dina resor sammanlagt nått takbeloppet debiteras du inte mer för resterande resor under perioden. Takbeloppen skiljer sig åt beroende på vilka <strong>zoner</strong> du reser i. Beloppen ändras över tid, så <strong>kontrollera de aktuella siffrorna hos TfL</strong> i stället för att förlita dig på ett fast belopp.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Tunnelbana och tåg: tagga in och tagga ut</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              På <strong>tunnelbana och tåg</strong> taggar du <strong>både när du kliver på och när du kliver av</strong> - annars kan fel taxa debiteras. På <strong>bussar och spårvagnar (tram)</strong> taggar du <strong>bara när du kliver på</strong>; ingen uttaggning behövs.
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Tube / tåg</strong>: tagga in vid start, tagga ut vid slut.</li>
              <li>&bull; <strong>Buss / spårvagn</strong>: tagga endast in.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Bussar tar inte kontanter</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Londons <strong>bussar accepterar inte kontanter</strong>. Du kan bara betala med kontaktlöst kort, mobil eller Oyster-kort. Se därför till att ha ett fungerande kontaktlöst betalmedel innan du kliver på.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Använd samma kort varje gång</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Tagga med <strong>samma kort eller enhet</strong> vid varje resa. Dela inte ett och samma kontaktlösa kort mellan flera resenärer - för att pristaken ska räknas rätt behöver varje person tagga med sitt eget betalmedel.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Innan du reser till Storbritannien</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Kollektivtrafiken använder du först efter ankomsten - för själva inresan behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link>, och du kan följa ansökan via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. Vid ankomsten passerar du <Link href="/uk-entry/uk-border-egates/" className="content-link">passkontrollen och eGates</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>. Ska du köra bil i stället för att åka kollektivt, läs om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" target="_blank" rel="noopener noreferrer" className="content-link">Transport for London - Best ways for visitors to pay</a>,{" "}
            <a href="https://tfl.gov.uk/fares/find-fares/capping" target="_blank" rel="noopener noreferrer" className="content-link">Transport for London - Capping</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Transport i London: Oyster och kontaktlöst" }]} />
        </article>
      </section>
    </div>
  );
}
