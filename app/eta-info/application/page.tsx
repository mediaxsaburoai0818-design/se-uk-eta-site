import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Hur ansoker man om UK ETA - Steg-for-steg-guide",
  description:
    "Detaljerad guide om hur du ansoker om UK ETA. Steg for steg fran forberedelse av dokument till godkannande.",
};

export default function Application() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Hur ansoker man?" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Hur ansoker man om UK ETA?
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        UK ETA-ansokan kan goras via den officiella mobilappen
        &quot;UK ETA&quot; eller via GOV.UK:s webbplats. Nedan presenterar vi
        en detaljerad guide om hela processen.
      </p>

      <img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80"
        alt="Pass och resedokument"
        className="w-full h-56 object-cover rounded mb-8"
      />

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Innan du borjar &mdash; vad du behover forbereda
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Biometriskt pass (e-pass) &mdash; giltigt</li>
          <li>Smartphone med kamera (for att skanna passet och ta selfie)</li>
          <li>E-postadress</li>
          <li>Betalkort (Visa, Mastercard, Apple Pay, Google Pay)</li>
        </ul>

        <h2 className="heading-band">
          Steg 1: Ladda ner appen eller besok webbplatsen
        </h2>
        <p>
          Ladda ner appen &quot;UK ETA&quot; fran App Store (iOS) eller Google Play
          (Android). Du kan ocksa anvanda webbplatsen{" "}
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#022444] underline"
          >
            GOV.UK
          </a>
          .
        </p>

        <h2 className="heading-band">
          Steg 2: Skanna passet
        </h2>
        <p>
          Anvand telefonens kamera for att skanna fotosidan i ditt pass.
          Appen laser automatiskt av data fran det biometriska chippet (NFC).
          Om din telefon inte stoder NFC kan du ange uppgifterna manuellt.
        </p>
        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Tips:</strong> Hall passet mot baksidan av telefonen och
          hall det stilla i nagra sekunder tills data har lasts av.
        </div>

        <h2 className="heading-band">
          Steg 3: Ta ett ansiktsfoto (selfie)
        </h2>
        <p>
          Appen ber dig ta ett ansiktsfoto for identitetsverifiering.
          Fotot bor tas i god belysning, mot en neutral bakgrund, utan
          glasogon och huvudbonad.
        </p>

        <h2 className="heading-band">
          Steg 4: Fyll i formularet
        </h2>
        <p>
          Svara pa fragor om resans syfte, din adress i UK, resehistorik
          och sakerhetsrelaterade fragor. Formularet ar kort och tar
          cirka 10 minuter.
        </p>

        <h2 className="heading-band">
          Steg 5: Betala (&pound;10)
        </h2>
        <p>
          Betala &pound;10 med kredit- eller betalkort eller via Apple Pay /
          Google Pay. Betalningen behandlas omedelbart.
        </p>

        <h2 className="heading-band">
          Steg 6: Vanta pa godkannande
        </h2>
        <p>
          Efter inlamning av ansokan far du en bekraftelse via e-post. De
          flesta ansokningar behandlas inom nagra timmar, men det kan ta upp
          till 72 timmar. Du far ett e-postmeddelande om beslutet.
        </p>

        <h2 className="heading-band">
          Efter godkannande
        </h2>
        <p>
          ETA ar elektroniskt kopplad till ditt pass &mdash; du behover inte
          skriva ut nagra dokument. Flygbolag och granstjansteman verifierar
          automatiskt din ETA vid incheckning.
        </p>

        <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm">
          <strong>Varning:</strong> Lamna in ansokan enbart pa den officiella
          webbplatsen{" "}
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            className="text-[#022444] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOV.UK
          </a>{" "}
          eller via den officiella appen &quot;UK ETA&quot;. Var forsiktig med
          falska webbplatser som tar ut forhojda avgifter.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/eta-info/fee/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Kontrollera avgifter &rarr;
        </Link>
        <a
          href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-lg py-5 px-6 text-center transition shadow-lg"
          style={{ color: "white", textDecoration: "none" }}
        >
          <span className="text-white text-lg font-bold" style={{ color: "white" }}>Ansok om UK ETA</span>
        </a>
      </div>
    </div>
  );
}
