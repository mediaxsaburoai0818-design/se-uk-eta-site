import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dokument som krävs för UK ETA 2026 - pass, foto, krav",
  description:
    "Dokument som krävs för UK ETA-ansökan: biometriskt pass, digitalt foto, betalkortsuppgifter. Fullständig lista och tekniska krav.",
};

export default function RequiredDocuments() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/required-documents.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Dokument som krävs för UK ETA-ansökan
          </h1>
          <p className="text-white/85 leading-relaxed">
            För att lämna in en UK ETA-ansökan behöver du förbereda några
            dokument och uppgifter. Nedan finns en komplett lista.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Obligatoriska dokument</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">1. Biometriskt pass (e-pass)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Måste vara giltigt under hela den planerade vistelsen i UK</li>
                <li>Måste innehålla ett biometriskt chip (symbol på omslaget)</li>
                <li>Provisoriskt pass accepteras inte</li>
                <li>ETA är kopplad till ett specifikt pass</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">2. Ansiktsbild (selfie)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Tas under ansökan i appen</li>
                <li>Bra belysning, neutral bakgrund</li>
                <li>Utan glasögon och huvudbonad</li>
                <li>Hela ansiktet ska synas</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">3. E-postadress</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>En aktiv e-postadress för kontakt</li>
                <li>Du får bekräftelse och beslut till denna adress</li>
                <li>Se till att du har tillgång till inkorgen</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">4. Betalningsmetod</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Kredit- eller betalkort (Visa/Mastercard)</li>
                <li>Apple Pay eller Google Pay</li>
                <li>Avgift: &pound;20</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Uppgifter som krävs i formuläret</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Personuppgifter (förnamn, efternamn, födelsedatum, födelseort)</li>
            <li>Medborgarskap och dubbelt medborgarskap (om tillämpligt)</li>
            <li>Bostadsadress</li>
            <li>Uppgifter om anställning</li>
            <li>Syftet med resan till Storbritannien</li>
            <li>Uppgifter om brottslighet och immigrationshistorik</li>
            <li>Svar på säkerhetsfrågor</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Vad du INTE behöver</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Inbjudan från en person i UK</li>
            <li>Hotellbokning (krävs inte, men kan vara användbar)</li>
            <li>Flygbiljett (du kan lämna in ansökan innan du köper biljett)</li>
            <li>Reseförsäkring (rekommenderas, men krävs inte för ETA)</li>
            <li>Besök på ambassad eller viseringscenter</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Dokument för barn</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Varje barn som reser till Storbritannien måste ha en egen UK ETA,
            oavsett ålder. Ett separat biometriskt pass för barnet krävs.
            Ansökan för barnets räkning kan lämnas in av en förälder eller
            vårdnadshavare.
          </p>
          <div className="bg-gray-50 border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Tips:</strong> Innan du påbörjar processen, se till att ditt
            pass är giltigt och att du har tillgång till en smartphone med kamera
            och NFC-funktion (för att skanna passet).
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/application/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Hur du lämnar in ansökan &rarr;
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Lämna in UK ETA-ansökan</span>
            </a>
          </div>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Dokument som krävs" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
