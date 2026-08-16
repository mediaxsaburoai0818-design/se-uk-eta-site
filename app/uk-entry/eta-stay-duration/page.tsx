import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Med ETA får du stanna upp till 6 månader per besök i Storbritannien | 2026",
  description:
    "Med en UK ETA får du vistas upp till 6 månader per besök. Tillståndet gäller i 2 år och tillåter flera inresor – vad du får och inte får göra.",
  alternates: { canonical: "https://eta-se.com/uk-entry/eta-stay-duration/" },
};

export default function EtaStayDuration() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hur länge får jag stanna i Storbritannien med en ETA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En ETA ger dig rätt att besöka Storbritannien i upp till 6 månader per besök, för turism, besök hos familj och vänner eller kortare affärsresor. Tillståndet ger inte rätt att bosätta sig eller arbeta i landet.",
        },
      },
      {
        "@type": "Question",
        name: "Hur länge är en ETA giltig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En ETA är giltig i 2 år från det att den utfärdas, eller tills ditt pass går ut om det sker tidigare. Under giltighetstiden kan du resa in i Storbritannien flera gånger.",
        },
      },
      {
        "@type": "Question",
        name: "Får jag arbeta i Storbritannien med en ETA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. En ETA ger inte rätt att arbeta, bosätta sig eller vistas långsiktigt i Storbritannien. För det krävs ett visum av rätt kategori.",
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
            Hur länge får man stanna med en ETA?
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            En UK ETA ger dig rätt att besöka Storbritannien i upp till 6 månader per besök. Här går vi igenom hur länge tillståndet gäller, hur många gånger du får resa in, hur det fungerar utan inresestämpel i passet och när du behöver ansöka om ett nytt ETA.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Upp till 6 månader per besök</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              En ETA ger dig rätt att vistas i Storbritannien i <strong>upp till 6 månader per besök</strong>. Tillståndet är avsett för <strong>turism</strong>, <strong>besök hos familj och vänner</strong> samt <strong>kortare affärsresor</strong>, till exempel möten och konferenser.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Sex månader är den maximala vistelsetiden per besök - hur länge du faktiskt får stanna vid en enskild inresa avgörs alltid av gränspolisen. Tänk på att en ETA <strong>inte</strong> ger rätt att arbeta, bosätta sig eller vistas långsiktigt i landet.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Giltig i 2 år med flera inresor</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              En ETA är giltig i <strong>2 år från det att den utfärdas</strong> - eller tills ditt pass går ut, om det sker tidigare. Det tidigaste av dessa två datum avgör alltså när giltigheten upphör.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Under giltighetstiden får du resa in i Storbritannien <strong>flera gånger</strong>. Du behöver alltså inte ansöka om ett nytt tillstånd inför varje resa så länge din ETA fortfarande är giltig och kopplad till samma pass.
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Giltighet:</strong> 2 år, eller tills passet går ut.</li>
              <li>&bull; <strong>Antal inresor:</strong> flera under giltighetstiden.</li>
              <li>&bull; <strong>Vistelse:</strong> upp till 6 månader vid varje besök.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Ingen inresestämpel med eGates</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Om du passerar gränsen genom de automatiska passpärrarna (<Link href="/uk-entry/uk-border-egates/" className="content-link">eGates</Link>) får du <strong>ingen inresestämpel i passet</strong>. Din tillåtna vistelse räknas då som 6 månader från inresedagen.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Eftersom det inte finns någon stämpel som visar inresedatum kan det vara bra att <strong>spara ditt boardingkort eller din bokningsbekräftelse</strong> som bevis på när du reste in, om du skulle behöva styrka det senare.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Arbete och långvarig vistelse kräver visum</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              En ETA kan <strong>inte</strong> användas för att arbeta, bosätta sig eller vistas långsiktigt i Storbritannien. För sådana ändamål krävs ett <strong>visum</strong> av rätt kategori, till exempel ett besöks- eller arbetsvisum beroende på syftet med din resa.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Planerar du en längre eller annan typ av vistelse än ett kortare besök bör du undersöka vilken visumkategori som gäller innan du reser. Mer om vad som krävs för själva inresan hittar du i vår guide om <Link href="/uk-entry/passport-requirements/" className="content-link">passkrav för resa till Storbritannien</Link>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">ETA är kopplad till passet</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Din ETA är <strong>kopplad till det pass</strong> du ansökte med. Om du förnyar eller byter pass måste du <strong>ansöka om en ny ETA</strong>, även om den gamla fortfarande är giltig - annars är tillståndet inte längre kopplat till den resehandling du reser med. Läs mer i guiden om <Link href="/uk-entry/passport-requirements/" className="content-link">passkrav</Link> och om hur de automatiska <Link href="/uk-entry/uk-border-egates/" className="content-link">passpärrarna vid gränsen</Link> fungerar.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/eta" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Get an ETA to visit the UK</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Vistelsetid med en ETA" }]} />
        </article>
      </section>
    </div>
  );
}
