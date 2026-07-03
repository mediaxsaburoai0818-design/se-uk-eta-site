import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "UK ETA-avgift 2026 £20 - höjning från £16 och betalsätt",
  description:
    "Den aktuella UK ETA-avgiften 2026 är £20 (höjning från £16 sedan 9 april 2025). Engångsbetalning, giltighet 2 år, inga dolda kostnader.",
};

export default function Fee() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/fee.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Avgifter för UK ETA-ansökan
          </h1>
          <p className="text-white/85 leading-relaxed">
            Den officiella avgiften för att ansöka om UK ETA är <strong>&pound;20</strong> (cirka 250 kr).
            Nedan presenterar vi detaljerad information om kostnader och betalsätt.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Avgiftsstruktur</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Komponent</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Belopp</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Beskrivning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Avgift för ETA-ansökan</td>
                  <td className="p-3 border-b border-gray-100">&pound;20</td>
                  <td className="p-3 border-b border-gray-100">Avgift för handläggning och utfärdande av tillståndet</td>
                </tr>
                <tr className="font-bold">
                  <td className="p-3">Totalt</td>
                  <td className="p-3">&pound;20</td>
                  <td className="p-3">Total avgift för ansökan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm mt-4 text-gray-700">
            <strong>Observera:</strong> Avgiften på &pound;20 tas ut i samband med
            att ansökan lämnas in och återbetalas inte, även om ansökan
            avslås.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Omräkning till svenska kronor</h2>
          <p className="text-gray-600 leading-relaxed">
            &pound;20 motsvarar cirka 250 kr (beroende på aktuell växelkurs).
            Det exakta beloppet i kronor beror på den kurs som tillämpas av
            banken som utfärdat betalkortet. En extra avgift för
            valutaväxling kan tillkomma.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Godkända betalsätt</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Visa-kreditkort</li>
            <li>Mastercard-kreditkort</li>
            <li>Betalkort (med Visa/Mastercard-logotyp)</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Är ETA gratis för vissa personer?</h2>
          <p className="text-gray-600 leading-relaxed">
            Nej. Avgiften på &pound;20 gäller alla sökande, oavsett
            medborgarskap. Det finns inga undantag från avgiften. Barn måste
            också ha en egen ETA och betala en separat avgift.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kostnadsjämförelse: officiell webbplats vs mellanhänder</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Källa</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Kostnad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Officiell webbplats GOV.UK / app</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-green-700">&pound;20</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Mellanhänders webbplatser</td>
                  <td className="p-3 border-b border-gray-100 text-red-600">&pound;50 &mdash; &pound;150+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm mt-4 text-gray-600">
            <strong>Varning:</strong> Många mellanhänder driver webbplatser
            som ser ut som de officiella UK ETA-sidorna. De tar ut
            överdrivna avgifter för samma tjänst. Ansök alltid
            direkt på{" "}
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              className="text-[#022444] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK
            </a>{" "}
            eller via den officiella appen.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
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
              { label: "Avgifter" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
