import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Alkohol i Storbritannien: 18-årsgräns – rökregler och vad du får ta in | 2026",
  description:
    "I Storbritannien är åldersgränsen 18 år för att köpa alkohol och tobak. Rökning är förbjuden inomhus på offentliga platser. Vad du får ta in i landet.",
  alternates: { canonical: "https://eta-se.com/uk-entry/smoking-alcohol-rules/" },
};

export default function SmokingAlcoholRules() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vilken åldersgräns gäller för att köpa alkohol och tobak i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Du måste vara minst 18 år för att köpa alkohol och tobak i Storbritannien. Butiker och barer kan begära legitimation som styrker din ålder.",
        },
      },
      {
        "@type": "Question",
        name: "Får jag röka på pubar och i butiker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Rökning är förbjuden inomhus på alla slutna allmänna platser, arbetsplatser och i kollektivtrafiken. Pubar, restauranger och stationer är rökfria inomhus - du får bara röka i särskilt anvisade utomhusområden.",
        },
      },
      {
        "@type": "Question",
        name: "Får jag använda e-cigarett (vaping)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reglerna för e-cigaretter och vaping varierar mellan olika platser. Ofta är det inte tillåtet inomhus. Följ alltid skyltningen och personalens anvisningar på platsen.",
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
            Rökning, alkohol och åldersgränser
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            I Storbritannien gäller åldersgränsen 18 år för att köpa alkohol och tobak, och rökning är förbjuden inomhus på allmänna platser. Här går vi igenom åldersreglerna, rökförbudet, hur vaping hanteras samt vad som gäller för rattfylleri och alkohol på allmän plats.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Åldersgräns 18 år för alkohol och tobak</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              I Storbritannien måste du vara <strong>minst 18 år</strong> för att köpa <strong>alkohol och tobak</strong>. Åldersgränsen gäller i butiker, barer, restauranger och andra försäljningsställen.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Butiker och serveringsställen kan <strong>begära legitimation</strong> som styrker din ålder, även om du ser äldre ut. Ha därför gärna en giltig ID-handling till hands om du planerar att handla alkohol eller tobak.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Rökförbud inomhus på allmänna platser</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Sedan rökfrilagen infördes 2007 (<strong>Smoke-free law</strong>) är rökning <strong>förbjuden inomhus</strong> på alla slutna allmänna platser, arbetsplatser och i kollektivtrafiken.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Det innebär att <strong>pubar, restauranger och stationer är rökfria inomhus</strong>. Du får bara röka i <strong>särskilt anvisade utomhusområden</strong>.
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Inomhus:</strong> rökning förbjuden på slutna allmänna platser och arbetsplatser.</li>
              <li>&bull; <strong>Kollektivtrafik:</strong> rökfritt.</li>
              <li>&bull; <strong>Tillåtet:</strong> endast i anvisade utomhusområden.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Vaping och e-cigaretter</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Reglerna för <strong>vaping och e-cigaretter</strong> varierar mellan olika platser. På många ställen är det <strong>inte tillåtet inomhus</strong>, men det kan skilja sig åt mellan olika lokaler och verksamheter. Följ alltid <strong>skyltningen</strong> och personalens anvisningar på platsen där du befinner dig.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Rattfylleri och alkohol på allmän plats</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              <strong>Rattfylleri</strong> beivras strikt i Storbritannien, med fastställda gränsvärden och påföljder. Om du planerar att köra bil bör du känna till reglerna - läs mer i vår guide om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Vissa lokala myndigheter har dessutom infört <strong>zoner med restriktioner mot att dricka alkohol på allmän plats</strong>. Var uppmärksam på lokal skyltning som anger sådana begränsningar.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Införsel av alkohol och tobak</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För hur mycket alkohol och tobak du får föra in i landet gäller särskilda <strong>tull- och införselgränser</strong> (duty-free). Dessa gränser beskrivs närmare i vår guide om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullregler och införselgränser</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Rökning, alkohol och åldersgränser" }]} />
        </article>
      </section>
    </div>
  );
}
