import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Passkrav för resa till Storbritannien: giltighet och ETA (2026)",
  description:
    "För att besöka Storbritannien behöver du ett giltigt pass som i regel ska gälla under hela vistelsen. ETA är kopplad till passet, och alla resenärer - även spädbarn - behöver ett eget pass. Kontrollera ditt lands krav på gov.uk före resan.",
  alternates: { canonical: "https://eta-se.com/uk-entry/passport-requirements/" },
};

export default function PassportRequirements() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hur länge måste passet vara giltigt för en resa till Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "För att besöka Storbritannien behöver du i regel ett giltigt pass som gäller under hela din vistelse. För många nationaliteter krävs vanligtvis inte något extra tillägg, som att passet ska vara giltigt ytterligare sex månader efter inresan, men kraven kan skilja sig åt. Kontrollera därför ditt eget lands krav på gov.uk före resan.",
        },
      },
      {
        "@type": "Question",
        name: "Vilket pass är ETA kopplad till?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En ETA är kopplad till det pass du använde när du ansökte, och du reser med samma pass. Om du förnyar eller byter pass behöver du i regel ansöka om en ny ETA för det nya passet. Har du dubbelt medborgarskap och flera pass reser du in med det pass som ETA:n är kopplad till.",
        },
      },
      {
        "@type": "Question",
        name: "Behöver barn ett eget pass till Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alla resenärer, även spädbarn, behöver i regel ett eget pass för att resa till Storbritannien. Varje resenär behöver dessutom sin egen ETA. Kontrollera kraven i god tid, eftersom det kan ta tid att ordna pass för barn.",
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
            Passkrav för resa till Storbritannien: giltighet och ETA
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            För att besöka Storbritannien behöver du ett giltigt pass som i regel ska gälla under hela vistelsen. Passet är dessutom kopplat till din ETA. Här går vi igenom vad som brukar gälla för passets giltighet, hur passet hänger ihop med ETA:n och varför alla resenärer behöver ett eget pass.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Giltigt pass under hela vistelsen</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              För att besöka Storbritannien behöver du ett <strong>giltigt pass</strong>, och det ska i regel vara giltigt <strong>under hela din vistelse</strong>.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För många nationaliteter krävs vanligtvis inget extra tillägg, som att passet måste vara giltigt ytterligare sex månader efter inresan. Kraven kan dock skilja sig åt beroende på nationalitet, så kontrollera ditt eget lands krav på gov.uk före resan.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">ETA är kopplad till passet</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              En <strong>ETA är kopplad till det pass</strong> du använde när du ansökte, och du reser med <strong>samma pass</strong> som du angav i ansökan.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Om du <strong>förnyar eller byter pass</strong> behöver du i regel <strong>ansöka om en ny ETA</strong> för det nya passet. Det kan därför vara klokt att kontrollera passets giltighet i god tid innan du ansöker om din ETA.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Alla resenärer behöver ett eget pass - även spädbarn</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              <strong>Varje resenär</strong>, även <strong>spädbarn och barn</strong>, behöver i regel ett <strong>eget pass</strong> för att resa till Storbritannien, och dessutom en egen ETA. Läs mer i vår guide om <Link href="/uk-entry/travelling-with-children/" className="content-link">att resa med barn till Storbritannien</Link>. Eftersom det kan ta tid att ordna pass för barn är det bra att börja i god tid.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Flera pass eller dubbelt medborgarskap</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Har du <strong>dubbelt medborgarskap</strong> eller flera pass reser du i regel in med det <strong>pass som din ETA är kopplad till</strong>. Se därför till att ETA:n är knuten till det pass du faktiskt tänker resa med.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Nästa steg inför resan</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              När passet är i ordning kan du <Link href="/eta-info/application/" className="content-link">ansöka om din UK ETA</Link> och sedan följa ärendet via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. Vid ankomsten sker inpasseringen genom <Link href="/uk-entry/uk-border-egates/" className="content-link">passkontrollen och eGates</Link>, och vad du får föra in beskrivs i guiden om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullen i Storbritannien</Link>. De allmänna inresereglerna finns i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, och för mellanlandningar i guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/check-uk-visa" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Check if you need a UK visa</a>,{" "}
            <a href="https://www.gov.uk/eta" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Electronic Travel Authorisation (ETA)</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Passkrav och giltighet" }]} />
        </article>
      </section>
    </div>
  );
}
