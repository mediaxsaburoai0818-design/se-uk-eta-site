import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Officiell UK ETA-mobilapp 2026 - iOS och Android",
  description:
    "Den officiella UK ETA-mobilappen för iOS och Android - hur du laddar ner den och ansöker direkt från telefonen steg för steg.",
};

export default function MobileApp() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/mobile-app.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            UK ETA-mobilappen
          </h1>
          <p className="text-white/85 leading-relaxed">
            Den brittiska regeringen har tillhandahållit den officiella
            mobilappen &quot;UK ETA&quot;, som gör det möjligt att lämna in
            ansökningar direkt från smartphonen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Om UK ETA-appen</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA-appen är Home Offices officiella verktyg för att lämna in
            ansökningar om elektroniskt resetillstånd. Det är det rekommenderade
            sättet att ansöka, eftersom det gör det möjligt att skanna passet med
            NFC och fylla i uppgifterna automatiskt.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Tillgänglighet</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>iOS (App Store)</strong> &mdash; för Apple-enheter
              (iPhone). Kräver iOS 15.6 eller senare.
            </li>
            <li>
              <strong>Android (Google Play)</strong> &mdash; för enheter med
              Android. Kräver Android 9.0 eller senare.
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            Sök efter appen under namnet &quot;UK ETA&quot;, utgivare: Home Office.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Appens funktioner</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Lämna in en ny UK ETA-ansökan</li>
            <li>Skanna biometriskt pass (NFC + OCR)</li>
            <li>Ta ett ansiktsfoto (selfie) för verifiering</li>
            <li>Kontrollera statusen för en befintlig ansökan</li>
            <li>Betala med kort, Apple Pay eller Google Pay</li>
            <li>Push-notiser vid statusändring</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Hur ansöker man via appen?</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>Ladda ner appen &quot;UK ETA&quot; från App Store eller Google Play</li>
            <li>Skapa ett konto (e-postadress och lösenord)</li>
            <li>Skanna det biometriska passet (håll telefonen mot passet)</li>
            <li>Ta ett ansiktsfoto (selfie)</li>
            <li>Besvara frågorna i formuläret</li>
            <li>Betala &pound;20</li>
            <li>Skicka in ansökan och vänta på beslut</li>
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Passkanning (NFC)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Appen använder NFC-teknik (Near Field Communication) för att läsa
            av uppgifterna från det biometriska chippet i passet. Så här gör du
            för att skanna passet:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Öppna passet på sidan med fotot</li>
            <li>Håll telefonens baksida mot det öppna passet</li>
            <li>Håll det stilla i 5-10 sekunder</li>
            <li>Vänta tills appen bekräftar att uppgifterna har lästs av</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Fördelar med mobilappen</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Passkanning med NFC &mdash; automatisk ifyllnad av uppgifter</li>
            <li>Snabbare ansökan än via webbplatsen</li>
            <li>Push-notiser om ansökans status</li>
            <li>Biometrisk säkerhet (Face ID / Touch ID)</li>
          </ul>
          <div className="bg-gray-50 border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Observera:</strong> Se till att du laddar ner den officiella appen.
            Sök efter utgivaren &quot;Home Office&quot; i appbutiken.
            Falska appar kan stjäla personuppgifter.
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
              Så ansöker du &rarr;
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Ansök om UK ETA</span>
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
              { label: "Mobilapp" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
