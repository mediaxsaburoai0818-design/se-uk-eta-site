import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Nödnummer i Storbritannien: ring 999 vid nödläge, 111 för vård | 2026",
  description:
    "Ring 999 (eller 112) vid nödsituation – polis, brandkår och ambulans, avgiftsfritt. 101 för polis i icke-akuta ärenden och NHS 111 för sjukvårdsrådgivning.",
  alternates: { canonical: "https://eta-se.com/uk-entry/safety-emergency/" },
};

export default function SafetyEmergency() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vilket nummer ringer man vid en nödsituation i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ring 999 vid en nödsituation som kräver polis, brandkår eller ambulans. Numret 112 fungerar likadant och går till samma larmtjänst. Båda är avgiftsfria och kan ringas från vilken telefon som helst.",
        },
      },
      {
        "@type": "Question",
        name: "Vad gör jag om det inte är akut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "För polisärenden som inte är brådskande ringer du 101. Behöver du sjukvårdsrådgivning som inte är akut ringer du NHS 111, som ger råd om symtom och hänvisar till rätt vård.",
        },
      },
      {
        "@type": "Question",
        name: "Hur skyddar jag mig mot ficktjuvar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Håll värdesaker nära kroppen, undvik att visa upp telefon och plånbok i folkträngsel och var uppmärksam på turistplatser och i kollektivtrafiken. Blir du bestulen kan du kontakta polisen på 101 eller vända dig till närmaste polisstation.",
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
            Nödnummer och säkerhet i Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Det viktigaste först: vid en nödsituation ringer du 999 (eller 112). Här går vi igenom skillnaden mellan larmnumren 999 och 101, sjukvårdsrådgivningen NHS 111, hur ett samtal till larmtjänsten fungerar samt några allmänna säkerhetsråd för dig som reser.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Nödnummer: 999 och 112</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Vid en <strong>nödsituation</strong> - när du behöver <strong>polis, brandkår eller ambulans</strong> - ringer du <strong>999</strong>. Numret är <strong>avgiftsfritt</strong> och kan ringas från vilken telefon som helst, även utan täckning från din egen operatör.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Även <strong>112</strong>, det gemensamma europeiska larmnumret, fungerar i Storbritannien och går till samma larmtjänst som 999. Du kan alltså använda vilket som helst av numren.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              När du ringer får du frågan om vilken tjänst du behöver - <strong>police, fire, ambulance</strong> eller <strong>coastguard</strong> (kustbevakning).
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Icke-akuta ärenden: 101 och NHS 111</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Är situationen inte akut finns det separata nummer att använda i stället för 999:
            </p>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>101</strong> - polisens nummer för ärenden som inte är brådskande, till exempel för att anmäla ett mindre brott eller en förlorad ägodel.</li>
              <li>&bull; <strong>NHS 111</strong> - sjukvårdsrådgivning som inte är akut. Du får råd om symtom och hänvisas vidare till rätt vårdnivå.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Att använda rätt nummer bidrar till att larmtjänsten på 999 kan prioritera de verkliga nödsituationerna. Mer om hur den brittiska sjukvården fungerar hittar du i guiden om <Link href="/uk-entry/healthcare-nhs/" className="content-link">sjukvård och NHS i Storbritannien</Link>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Så går ett larmsamtal till</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              När du ringer 999 eller 112 kopplas du till en operatör som frågar vilken tjänst du behöver och var du befinner dig. Försök att så tydligt som möjligt beskriva plats och vad som har hänt.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För dig som har svårt att höra eller tala finns särskilda lösningar, som att skicka <strong>SMS till 999</strong> via den förregistrerade tjänsten emergencySMS, eller den så kallade <strong>silent solution</strong> (att trycka 55 när samtalet har kopplats fram) om du inte kan tala fritt. Villkoren för dessa tjänster beskrivs närmare av de officiella källorna.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Allmänna säkerhetsråd för resenärer</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Som på många resmål kan det vara bra att vara uppmärksam på fickstölder och väskryckning på turistplatser, i kollektivtrafiken och på trånga, folktäta platser. Några vanliga råd:
            </p>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; Håll <strong>värdesaker nära kroppen</strong> och undvik att lämna väskor obevakade.</li>
              <li>&bull; Undvik att <strong>visa upp telefon, plånbok och dyra föremål</strong> i folkträngsel.</li>
              <li>&bull; Anmäl <strong>borttappade föremål eller mindre brott</strong> till polisen på 101 eller till närmaste polisstation.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Det kan också vara klokt att ha en <strong>reseförsäkring</strong> med sig. Om du planerar att köra bil, se de brittiska trafikreglerna i guiden om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Förlorat pass: kontakta ambassaden</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Om du förlorar ditt pass under resan vänder du dig till <strong>ditt eget lands ambassad eller konsulat</strong> för hjälp med tillfälliga resehandlingar. Rör det sig om en stöld kan det också vara bra att anmäla den till polisen. För inresan behöver du dessutom en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link> - status för din ansökan ser du via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. Vad du får och inte får ta med dig över gränsen beskrivs i guiden om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullregler och införselgränser</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/dial-999-when-you-need-to" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - When you should dial 999</a>,{" "}
            <a href="https://www.police.uk/contact/101/" target="_blank" rel="noopener noreferrer" className="content-link">police.uk - Contacting the police on 101</a>,{" "}
            <a href="https://111.nhs.uk/" target="_blank" rel="noopener noreferrer" className="content-link">NHS 111</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Nödnummer och säkerhet" }]} />
        </article>
      </section>
    </div>
  );
}
