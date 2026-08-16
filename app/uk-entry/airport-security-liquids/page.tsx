import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Vätskor i handbagaget: säkerhetskontroll på brittiska flygplatser (2026)",
  description:
    "På många brittiska flygplatser gäller ofta högst 100 ml per behållare i handbagaget, i en genomskinlig påse på högst 1 liter. Vissa flygplatser tillåter upp till 2 liter tack vare nya CT-skannrar - reglerna varierar, så kontrollera din avreseflygplats.",
  alternates: { canonical: "https://eta-se.com/uk-entry/airport-security-liquids/" },
};

export default function AirportSecurityLiquids() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hur mycket vätska får man ta med i handbagaget på en brittisk flygplats?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "På många brittiska flygplatser gäller ofta en gräns på 100 ml per behållare, samlade i en genomskinlig och återförslutningsbar påse på högst 1 liter, en påse per person. Vissa flygplatser har infört nya CT-skannrar och kan då tillåta upp till 2 liter, men införandet varierar mellan flygplatser. Kontrollera därför alltid de aktuella reglerna för just din avreseflygplats före resan.",
        },
      },
      {
        "@type": "Question",
        name: "Får man ta med vatten genom säkerhetskontrollen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vatten och andra drycker som köps efter säkerhetskontrollen brukar kunna tas med ombord. Drycker som medförs före kontrollen omfattas däremot vanligtvis av vätskereglerna och kan behöva slängas om de överstiger gränsen. Reglerna kan skilja sig åt mellan flygplatser, så kontrollera vad som gäller där du reser.",
        },
      },
      {
        "@type": "Question",
        name: "Får man ta med barnmjölk och mediciner genom kontrollen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Barnmat, modersmjölksersättning och nödvändiga mediciner kan i vissa fall tas med i större mängd än den vanliga vätskegränsen, förutsatt att de anmäls till personalen vid kontrollen. Vilka mängder och villkor som gäller kan variera, så kontrollera i förväg hos din flygplats och ha eventuellt recept eller dokumentation till hands.",
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
            Vätskor i handbagaget och säkerhetskontrollen på brittiska flygplatser
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            På många brittiska flygplatser gäller ofta en gräns på 100 ml per behållare för vätskor i handbagaget. Vissa flygplatser har börjat tillåta större mängder tack vare nya skannrar, men reglerna varierar - här går vi igenom vad som brukar gälla och varför det är klokt att kontrollera just din avreseflygplats.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">100 ml-regeln och den genomskinliga påsen</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              På många brittiska flygplatser gäller ofta att vätskor i handbagaget får finnas i <strong>behållare på högst 100 ml vardera</strong>. En behållare som rymmer mer än 100 ml brukar inte godtas även om den inte är helt fylld.
            </p>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; Behållarna ska vanligtvis samlas i <strong>en genomskinlig och återförslutningsbar påse på högst 1 liter</strong>.</li>
              <li>&bull; Regeln brukar vara <strong>en påse per person</strong>.</li>
              <li>&bull; Som vätskor räknas ofta även geler, pastor, krämer, sprayer och liknande produkter.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Eftersom detaljerna kan skilja sig åt mellan flygplatser är det klokt att kontrollera de aktuella reglerna för just din avreseflygplats före resan.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Nya CT-skannrar: på vissa flygplatser kan gränsen vara högre</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              En del brittiska flygplatser har infört <strong>nya CT-skannrar</strong> och kan i samband med det tillåta <strong>vätskor i behållare på upp till 2 liter</strong>. Införandet sker dock i olika takt, och <strong>läget varierar mellan flygplatser</strong>.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Även vid mitten av 2026 fortsätter 100 ml-gränsen att gälla på många flygplatser. Utgå därför inte från att den högre gränsen gäller, utan <strong>kontrollera alltid de senaste reglerna</strong> för den flygplats du reser från - och gärna även för din returflygplats.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Undantag: barnmat, modersmjölk och mediciner</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              <strong>Barnmat och modersmjölksersättning</strong> samt <strong>nödvändiga mediciner</strong> kan i vissa fall tas med i större mängd än den vanliga vätskegränsen. Det brukar dock krävas att du <strong>anmäler dem till personalen</strong> vid kontrollen.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Vilka mängder och villkor som gäller kan variera mellan flygplatser. Det kan vara bra att ha recept eller annan dokumentation till hands, och att kontrollera i förväg vad som gäller där du reser. Reser du med barn kan du även läsa vår guide om <Link href="/uk-entry/travelling-with-children/" className="content-link">att resa med barn till Storbritannien</Link>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Elektronik och större föremål</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Större elektronik, som bärbara datorer, kan behöva <strong>tas upp ur väskan</strong> och läggas separat i backen enligt personalens anvisningar. Även detta kan skilja sig åt beroende på flygplats och vilken utrustning kontrollen använder, så följ de instruktioner som ges på plats.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Så förbereder du dig inför kontrollen</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              För att kontrollen ska gå smidigt kan det hjälpa att packa vätskorna i den genomskinliga påsen redan hemma, att ha barnmat och mediciner lätt åtkomliga för att kunna anmäla dem, och att kontrollera de aktuella reglerna för din flygplats i förväg.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Säkerhetskontrollen sker före passkontrollen - se hur <Link href="/uk-entry/uk-border-egates/" className="content-link">passkontrollen och passagen genom eGates</Link> går till, och vad du får ta med genom <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullen i Storbritannien</Link>. Glöm inte att du för inresan behöver en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link> - status ser du via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. De allmänna inresereglerna finns i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, och för mellanlandningar i guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/hand-luggage-restrictions/liquids" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Hand luggage restrictions: liquids</a>,{" "}
            <a href="https://www.gov.uk/hand-luggage-restrictions" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Hand luggage restrictions at UK airports</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Vätskor och säkerhetskontroll på flygplatsen" }]} />
        </article>
      </section>
    </div>
  );
}
