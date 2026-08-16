import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Resa med barn till Storbritannien: ETA och pass (2026)",
  description:
    "Alla resenärer, även spädbarn, behöver en egen ETA och ett eget pass till Storbritannien. Border Force kan begära bevis på släktskap - så förbereder du resan med barn.",
  alternates: { canonical: "https://eta-se.com/uk-entry/travelling-with-children/" },
};

export default function TravellingWithChildren() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Behöver barn också en ETA till Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Alla resenärer, inklusive spädbarn, behöver en egen ETA. Ett barn kan inte resa på en förälders ETA - det gäller en ETA per person.",
        },
      },
      {
        "@type": "Question",
        name: "Kan barn resa på förälderns pass eller ETA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Varje resenär behöver ett eget pass och en egen ETA, oavsett ålder. Det går inte att resa in på en annan persons pass eller ETA.",
        },
      },
      {
        "@type": "Question",
        name: "Vad gäller om jag reser med ett barn som har ett annat efternamn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Border Force kan begära bevis på släktskap, särskilt om ni har olika efternamn eller om du inte är barnets förälder. Giltiga bevis kan vara födelse- eller adoptionsbevis, vigsel- eller skilsmässobevis, eller ett samtyckesbrev (consent letter) från föräldern.",
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
            Resa med barn till Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Varför varje barn behöver en egen ETA och ett eget pass, när Border Force kan begära bevis på släktskap och vilka dokument du bör ha med dig för en smidig inresa med barn.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Varje resenär behöver en egen ETA och ett eget pass</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              <strong>Alla resenärer, inklusive spädbarn, behöver en egen ETA och ett eget pass.</strong> Ett barn kan <strong>inte</strong> resa på en förälders ETA - det gäller <strong>en ETA per person</strong>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Border Force kan begära bevis på släktskap</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              När du reser med barn kan <strong>Border Force (gränskontrollen) begära bevis på er relation</strong> - särskilt om ni har olika efternamn eller om du inte är barnets förälder. Giltiga bevis kan vara:
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Födelse- eller adoptionsbevis</strong>.</li>
              <li>&bull; <strong>Vigsel- eller skilsmässobevis</strong> (om du är förälder men har ett annat efternamn).</li>
              <li>&bull; Ett <strong>samtyckesbrev (consent letter) från föräldern</strong> (om du inte är barnets förälder).</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Ha dokumenten med dig</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Även för framtida resor är det bra att <strong>ha med sådana bevis på släktskap</strong>. Det gör inresan smidigare om du blir tillfrågad vid gränskontrollen.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Bra att veta inför inresan</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Ansök om en <Link href="/eta-info/application/" className="content-link">UK ETA</Link> för varje familjemedlem och följ ansökan via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, reglerna för vad du får ta med i guiden om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullregler och införselgränser</Link>, och planerar du att hyra bil kan du läsa om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>. För mellanlandningar, se guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källor för officiell information:{" "}
            <a href="https://www.gov.uk/eta" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Electronic Travel Authorisation (ETA)</a>,{" "}
            <a href="https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Children travelling to the UK</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Resa med barn" }]} />
        </article>
      </section>
    </div>
  );
}
