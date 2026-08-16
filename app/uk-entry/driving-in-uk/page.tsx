import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Får man köra bil i Storbritannien med utländskt körkort? Regler för besökare (2026)",
  description:
    "Besökare bosatta utanför Storbritannien får köra på ett giltigt hemlandskörkort i upp till 12 månader från inresedagen. Lägsta ålder för personbil är 17 år, man kör på vänster sida och giltig bilförsäkring krävs.",
  alternates: { canonical: "https://eta-se.com/uk-entry/driving-in-uk/" },
};

export default function DrivingInUk() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Får jag köra bil i Storbritannien med mitt svenska körkort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Besökare som är bosatta utanför Storbritannien får köra personbil och motorcykel på ett giltigt körkort från hemlandet i upp till 12 månader räknat från inresedagen.",
        },
      },
      {
        "@type": "Question",
        name: "Behöver jag ett internationellt körkort (IDP) eller översättning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Du får köra på ett giltigt körkort från hemlandet. Om körkortet inte är på engelska rekommenderas en officiell översättning eller ett internationellt körkort (IDP). Reglerna varierar beroende på land - kontrollera din situation på gov.uk/driving-nongb-licence.",
        },
      },
      {
        "@type": "Question",
        name: "Vad gäller för trafiken i Storbritannien - vilken sida och lägsta ålder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I Storbritannien kör man på vänster sida av vägen. Lägsta ålder för att köra personbil är 17 år, och det är obligatoriskt att ha en giltig bilförsäkring.",
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
            Får man köra bil i Storbritannien med utländskt körkort?
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Besökare bosatta utanför Storbritannien får köra på ett giltigt hemlandskörkort i upp till 12 månader. Här är reglerna om körtid, internationellt körkort, vänstertrafik, lägsta ålder och försäkring - samt varför en ETA inte är samma sak som ett körtillstånd.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">12-månadersregeln: köra på hemlandskörkort</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Är du bosatt utanför Storbritannien får du köra på ett <strong>giltigt körkort från ditt hemland i upp till 12 månader</strong>, räknat från den dag du reste in i landet. Rätten gäller för:
            </p>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Personbilar</strong> (upp till 3 500 kg med plats för högst åtta passagerare).</li>
              <li>&bull; <strong>Motorcyklar</strong>.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Körkortet måste vara giltigt under hela vistelsen. Perioden på 12 månader räknas från inresedagen, inte från körkortets utfärdandedatum.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Internationellt körkort (IDP) och översättning</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Du får köra på ett <strong>giltigt körkort från hemlandet</strong>. Är körkortet <strong>inte utfärdat på engelska</strong> rekommenderas en <strong>officiell översättning</strong> eller ett <strong>internationellt körkort (IDP)</strong>, så att myndigheter och uthyrningsfirmor lätt kan läsa uppgifterna.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Kraven <strong>varierar beroende på vilket land körkortet är utfärdat i</strong>. Kontrollera därför din egen situation på GOV.UK innan resan - reglerna kan skilja sig åt beroende på ditt hemland.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Vänstertrafik, lägsta ålder och försäkring</h2>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Vänstertrafik</strong>: i Storbritannien kör man på vänster sida av vägen.</li>
              <li>&bull; <strong>Lägsta ålder</strong>: 17 år för att köra personbil.</li>
              <li>&bull; <strong>Giltig bilförsäkring</strong> är obligatorisk för att köra i Storbritannien.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Kontrollera att din försäkring gäller i Storbritannien innan du kör. Hyr du bil ingår vanligtvis försäkringen i avtalet - läs villkoren noga.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Stora fordon: bussar och lastbilar</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För <strong>stora fordon som bussar och lastbilar</strong> gäller <strong>andra regler</strong> än för personbilar och motorcyklar. Planerar du att köra ett sådant fordon behöver du kontrollera de särskilda kraven på GOV.UK innan resan.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">ETA och körkort: två olika saker</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              En <strong>UK ETA är ett tillstånd för inresa</strong> till Storbritannien - den <strong>avgör inte om du får köra bil</strong>. Rätten att köra styrs av ett separat regelverk för körkort, ålder, försäkring och fordonstyp.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För själva inresan behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link> - ansökans status ser du via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, och vad du får ta med dig förklaras i guiden om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullregler och införselgränser</Link>. Hur <Link href="/uk-entry/uk-border-egates/" className="content-link">passkontrollen och passagen genom eGates</Link> går till kan du också läsa mer om.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/driving-nongb-licence" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Driving in Great Britain on a non-GB licence</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Köra bil i Storbritannien" }]} />
        </article>
      </section>
    </div>
  );
}
