import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Ta med mediciner till Storbritannien: regler och intyg (2026)",
  description:
    "Du får ta med upp till tre månaders förbrukning av dina egna mediciner till Storbritannien. Ha med bevis på att de är utskrivna till dig. Vissa läkemedel innehåller narkotikaklassade ämnen och kan kräva särskilt tillstånd. Här är reglerna.",
  alternates: { canonical: "https://eta-se.com/uk-entry/bringing-medicines/" },
};

export default function BringingMedicines() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Får jag ta med mina mediciner till Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, du får ta med upp till tre månaders förbrukning av dina egna mediciner för personligt bruk. Ha med bevis på att läkemedlen är utskrivna till dig och förvara dem gärna i originalförpackning.",
        },
      },
      {
        "@type": "Question",
        name: "Vilka dokument behöver jag för att ta med mediciner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ta med ett intyg eller ett recept som visar läkemedlets namn, dosering och styrka, hur ofta du tar det samt den förskrivande läkarens underskrift eller registreringsnummer. Behåll läkemedlen i originalförpackningen där det går.",
        },
      },
      {
        "@type": "Question",
        name: "Vad gäller för narkotikaklassade läkemedel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vissa läkemedel innehåller narkotikaklassade ämnen (controlled drugs) och omfattas av extra regler. Fråga din läkare eller apotekspersonal om det gäller dina mediciner. Om så är fallet kan du behöva ett personligt tillstånd och bör kontakta brittiska Home Office minst 15 arbetsdagar före resan.",
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
            Ta med mediciner till Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Du får ta med dina egna mediciner till Storbritannien - upp till tre månaders förbrukning - så länge du kan visa att de är utskrivna till dig. Här går vi igenom hur mycket du får ta med, vilka intyg du behöver, vad som gäller för narkotikaklassade läkemedel och reglerna för vätskor i handbagaget.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Upp till tre månaders förbrukning</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Du får ta med <strong>upp till tre månaders förbrukning</strong> av dina egna mediciner för <strong>personligt bruk</strong> till Storbritannien. Du bör kunna <strong>styrka att läkemedlen är utskrivna till dig</strong>.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Förvara medicinerna <strong>i originalförpackningen</strong> där det är möjligt. Det gör det lättare att visa vad läkemedlen är och att de tillhör dig, om du skulle bli tillfrågad vid gränsen.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Intyg och recept att ta med</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Ta med ett <strong>intyg eller recept</strong> som bevis på att medicinen är förskriven till dig. Handlingen bör innehålla:
            </p>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Läkemedlets namn</strong>.</li>
              <li>&bull; <strong>Dosering och styrka</strong>.</li>
              <li>&bull; <strong>Hur ofta</strong> du tar läkemedlet.</li>
              <li>&bull; Den <strong>förskrivande läkarens underskrift eller registreringsnummer</strong>.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Behåll läkemedlen i <strong>originalförpackningen</strong> där det går, så att uppgifterna på förpackningen stämmer överens med intyget.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Narkotikaklassade läkemedel (controlled drugs)</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Vissa läkemedel innehåller <strong>narkotikaklassade ämnen</strong> (<em>controlled drugs</em>) och omfattas av <strong>extra regler</strong>. Fråga din <strong>läkare eller apotekspersonal</strong> om det gäller just dina mediciner.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Om så är fallet kan du behöva ett <strong>personligt tillstånd</strong> (personal licence). Du bör då kontakta brittiska <strong>Home Office</strong> (Drug and Firearms Licensing Unit) <strong>minst 15 arbetsdagar före resan</strong>.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Läkemedel som klassas i <strong>Schedule 1</strong> får <strong>inte föras in utan tillstånd</strong>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Vätskor och sprutor i handbagaget</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              <strong>Vätskor och sprutor</strong> i handbagaget omfattas av flygplatsernas vanliga <strong>säkerhetsregler</strong>. Har du med dig flytande mediciner eller injektionsutrustning kan det vara bra att ha intyget till hands även i säkerhetskontrollen. Läs mer i vår guide om <Link href="/uk-entry/airport-security-liquids/" className="content-link">säkerhetskontroll och vätskor på flygplatsen</Link>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Vård på plats i Storbritannien</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Skulle du behöva vård eller nya läkemedel under din vistelse är det bra att veta hur det brittiska sjukvårdssystemet fungerar. Det beskriver vi i guiden om <Link href="/uk-entry/healthcare-nhs/" className="content-link">sjukvård och NHS i Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/take-medicine-in-or-out-uk" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Take medicine in or out of the UK</a>,{" "}
            <a href="https://www.gov.uk/travelling-controlled-drugs" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Bringing medicine containing a controlled drug into the UK</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Ta med mediciner" }]} />
        </article>
      </section>
    </div>
  );
}
