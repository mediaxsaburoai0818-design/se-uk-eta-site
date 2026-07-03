import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Så ansöker du om UK ETA 2026 - steg för steg-guide",
  description:
    "Så ansöker du om UK ETA steg för steg — från att samla ihop dokument till godkännande. Beslut vanligtvis inom 3 dagar, ofta på några minuter.",
};

export default function Application() {
  return (
    <div>
      {/* Header */}
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/application.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Så ansöker du om UK ETA
          </h1>
          <p className="text-white/85 mb-6 leading-relaxed">
            Ansökan om UK ETA kan göras via den officiella mobilappen
            &quot;UK ETA&quot; eller via webbplatsen GOV.UK. Nedan presenterar vi
            en detaljerad guide till hela proceduren.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Innan du börjar &mdash; vad du behöver förbereda</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Biometriskt pass (e-pass) &mdash; giltigt</li>
            <li>Smartphone med kamera (för att skanna passet och ta en selfie)</li>
            <li>E-postadress</li>
            <li>Betalkort (Visa, Mastercard, Apple Pay, Google Pay)</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Steg 1: Ladda ner appen eller gå till webbplatsen</h2>
          <p className="text-gray-600 leading-relaxed">
            Ladda ner appen &quot;UK ETA&quot; från App Store (iOS) eller Google Play
            (Android). Du kan också använda webbplatsen{" "}
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
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Steg 2: Skanna passet</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Använd kameran i telefonen för att skanna sidan med fotot i
            passet. Appen läser automatiskt av uppgifterna från det
            biometriska chippet (NFC). Om telefonen inte har stöd för NFC kan du
            ange uppgifterna manuellt.
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-600">
            <strong>Tips:</strong> Håll passet mot baksidan av telefonen och
            håll det stilla i några sekunder tills uppgifterna har lästs av.
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Steg 3: Ta ett ansiktsfoto (selfie)</h2>
          <p className="text-gray-600 leading-relaxed">
            Appen ber dig ta ett ansiktsfoto för att verifiera din identitet.
            Fotot bör tas i god belysning, mot en neutral bakgrund, utan
            glasögon och huvudbonad.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Steg 4: Fyll i formuläret</h2>
          <p className="text-gray-600 leading-relaxed">
            Besvara frågor om resans syfte, vistelseadress i Storbritannien,
            resehistorik och säkerhetsfrågor. Formuläret är kort och tar
            cirka 10 minuter.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Steg 5: Betala (&pound;20)</h2>
          <p className="text-gray-600 leading-relaxed">
            Betala &pound;20 med kreditkort, betalkort eller via Apple Pay /
            Google Pay. Betalningen behandlas omedelbart.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Steg 6: Vänta på godkännande</h2>
          <p className="text-gray-600 leading-relaxed">
            När du har skickat in ansökan får du en bekräftelse via e-post. De
            flesta ansökningar handläggs inom några timmar, men det kan ta upp
            till 72 timmar. Du får ett e-postmeddelande om beslutet.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Efter godkännandet</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ETA är elektroniskt kopplad till ditt pass &mdash; du behöver inte
            skriva ut några dokument. Flygbolag och gränsmyndigheter
            verifierar automatiskt din ETA vid incheckningen.
          </p>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm text-gray-600">
            <strong>Observera:</strong> Ansök endast på den officiella
            webbplatsen{" "}
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              className="text-[#022444] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK
            </a>{" "}
            eller via den officiella appen &quot;UK ETA&quot;. Se upp för falska
            webbplatser som tar ut överdrivna avgifter.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/fee/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Se avgifterna &rarr;
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
              { label: "Så ansöker du" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
