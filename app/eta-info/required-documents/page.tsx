import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Nodvandiga dokument for UK ETA-ansokan",
  description:
    "Lista over nodvandiga dokument for att ansoka om UK ETA. Biometriskt pass, foto, personuppgifter.",
};

export default function RequiredDocuments() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Nodvandiga dokument" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Nodvandiga dokument for UK ETA-ansokan
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        For att ansoka om UK ETA behover du forbereda nagra dokument och
        uppgifter. Nedan finns en komplett lista.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Obligatoriska dokument
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-[#022444] mb-2">
              1. Biometriskt pass (e-pass)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Maste vara giltigt under hela den planerade vistelsen i UK</li>
              <li>Maste innehalla biometriskt chip (symbol pa omslaget)</li>
              <li>Tillfalligt pass godkanns inte</li>
              <li>ETA ar kopplad till det specifika passet</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-[#022444] mb-2">
              2. Ansiktsfoto (selfie)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Tas under ansokningsprocessen i appen</li>
              <li>Bra belysning, neutral bakgrund</li>
              <li>Utan glasogon och huvudbonad</li>
              <li>Hela ansiktet synligt</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-[#022444] mb-2">
              3. E-postadress
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Aktiv e-postadress for kontakt</li>
              <li>Till denna adress skickas bekraftelse och beslut</li>
              <li>Se till att du har tillgang till inkorgen</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-[#022444] mb-2">
              4. Betalningsmetod
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Kredit- eller betalkort (Visa/Mastercard)</li>
              <li>Apple Pay eller Google Pay</li>
              <li>Avgift: &pound;10</li>
            </ul>
          </div>
        </div>

        <h2 className="heading-band">
          Uppgifter som kravs i formularet
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personuppgifter (fornamn, efternamn, fodelsedatum, fodelseort)</li>
          <li>Medborgarskap och dubbelt medborgarskap (om tillampligt)</li>
          <li>Bostadsadress</li>
          <li>Uppgifter om anstallning</li>
          <li>Syfte med resan till Storbritannien</li>
          <li>Information om brottshistorik och immigrationshistorik</li>
          <li>Svar pa sakerhetsrelaterade fragor</li>
        </ul>

        <h2 className="heading-band">
          Vad du INTE behover
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Inbjudan fran nagon i UK</li>
          <li>Hotellbokning (inte obligatorisk men kan vara bra att ha)</li>
          <li>Flygbiljett (du kan ansoka innan du koper biljett)</li>
          <li>Reseforsakring (rekommenderas men kravs inte for ETA)</li>
          <li>Besok pa ambassad eller visumcenter</li>
        </ul>

        <h2 className="heading-band">
          Dokument for barn
        </h2>
        <p>
          Varje barn som reser till Storbritannien maste ha en egen UK ETA
          oavsett alder. Ett separat biometriskt pass for barnet kravs.
          Ansokan for barnet kan goras av en foralder eller vardnadshavare.
        </p>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Tips:</strong> Innan du borjar processen, forsakra dig om
          att ditt pass ar giltigt och att du har tillgang till en smartphone
          med kamera och NFC-funktion (for passskanning).
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/eta-info/application/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Hur ansoker man &rarr;
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
