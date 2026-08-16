import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sjukvård, NHS och GHIC för besökare i Storbritannien (2026)",
  description:
    "Akutvård (A&E) och besök hos allmänläkare (GP) är kostnadsfritt inom NHS. Så fungerar EHIC/GHIC, varför reseförsäkring rekommenderas starkt och nödnummer 999 och NHS 111.",
  alternates: { canonical: "https://eta-se.com/uk-entry/healthcare-nhs/" },
};

export default function HealthcareNhs() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kostar akutvård pengar i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akutmottagning (A&E) och besök hos allmänläkare (GP) är kostnadsfritt inom NHS för alla, oavsett uppehållsstatus eller papper. Sjukhusvård utöver akut behandling kan däremot medföra kostnader för besökare utan EHIC/GHIC.",
        },
      },
      {
        "@type": "Question",
        name: "Kan jag använda EHIC eller GHIC i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Besökare från EU, EFTA och Schweiz kan med ett giltigt EHIC/GHIC utfärdat i hemlandet få medicinskt nödvändig vård under en tillfällig vistelse. EHIC/GHIC täcker dock inte alla kostnader och ersätter inte en reseförsäkring.",
        },
      },
      {
        "@type": "Question",
        name: "Behöver jag reseförsäkring för Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reseförsäkring rekommenderas starkt. EHIC/GHIC täcker inte allt - till exempel ingår normalt inte hemtransport (repatriering). En reseförsäkring är alltså ett viktigt komplement och inte utbytbart mot GHIC.",
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
            Sjukvård, NHS och GHIC för besökare i Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Vad som är kostnadsfritt inom NHS, hur EHIC/GHIC fungerar för besökare från EU, EFTA och Schweiz, varför en reseförsäkring rekommenderas starkt och vilka nödnummer som gäller.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Akutvård och allmänläkare är kostnadsfritt</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Inom NHS är <strong>akutmottagning (A&amp;E) och besök hos allmänläkare (GP) kostnadsfritt för alla</strong> - oavsett uppehållsstatus eller om du har papper med dig. Detta gäller den akuta första vården.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Besökare från EU, EFTA och Schweiz: EHIC/GHIC</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Med ett <strong>giltigt EHIC/GHIC</strong> utfärdat i hemlandet kan besökare från <strong>EU, EFTA och Schweiz</strong> få den vård som blir <strong>medicinskt nödvändig</strong> under en tillfällig vistelse. Observera att EHIC/GHIC <strong>inte täcker alla kostnader</strong> och <strong>inte ersätter en reseförsäkring</strong>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Besökare utan EHIC/GHIC</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Besökare <strong>utan EHIC/GHIC</strong> kan bli <strong>debiterade för sjukhusvård utöver akut behandling</strong> (enligt uppgift 150 % av NHS standardavgift). Akut vård som inte kan vänta ges dock alltid, och betalningen hanteras i efterhand.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Reseförsäkring rekommenderas starkt</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              En <strong>reseförsäkring rekommenderas starkt</strong>. EHIC/GHIC täcker inte allt - till exempel ingår normalt inte <strong>hemtransport (repatriering)</strong>. Försäkringen är därför ett viktigt komplement och kan inte bytas ut mot ett GHIC.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Nödnummer och vårdrådgivning</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>999</strong> (eller 112) - nödnummer för akuta situationer.</li>
              <li>&bull; <strong>NHS 111</strong> - för icke-akut medicinsk rådgivning.</li>
              <li>&bull; Receptbelagda läkemedel kan medföra en <strong>receptavgift</strong> (i England).</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Bra att veta inför inresan</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För inresan till Storbritannien behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link> - ansökans status ser du via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, reglerna för vad du får ta med i guiden om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullregler och införselgränser</Link>, och planerar du att hyra bil kan du läsa om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>. För mellanlandningar, se guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källor för officiell information:{" "}
            <a href="https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" target="_blank" rel="noopener noreferrer" className="content-link">NHS - Accessing NHS services when visiting from abroad</a>,{" "}
            <a href="https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Healthcare for EU and EFTA citizens visiting the UK</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Sjukvård, NHS och GHIC" }]} />
        </article>
      </section>
    </div>
  );
}
