import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Avgifter for UK ETA - Hur mycket kostar ansokan?",
  description:
    "Avgiften for UK ETA ar 10 pund. Detaljer om kostnader, betalningsmetoder och varningar for falska webbplatser.",
};

export default function Fee() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Avgifter" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Avgifter for UK ETA-ansokan
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Den officiella avgiften for att ansoka om UK ETA ar <strong>&pound;10</strong> (cirka 140 SEK).
        Nedan presenterar vi detaljerad information om kostnader och betalningsmetoder.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Avgiftsstruktur
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Komponent
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Belopp
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Beskrivning
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  ETA-ansokningsavgift
                </td>
                <td className="p-3 border-b border-gray-100">&pound;10</td>
                <td className="p-3 border-b border-gray-100">
                  Avgift for handlaggning och utfardande av auktorisering
                </td>
              </tr>
              <tr className="font-bold">
                <td className="p-3">Totalt</td>
                <td className="p-3">&pound;10</td>
                <td className="p-3">
                  Total avgift for ansokan
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Observera:</strong> Avgiften pa &pound;10 debiteras vid
          insandning av ansokan och aterbetalas inte, aven om ansokan avslags.
        </div>

        <h2 className="heading-band">
          Omrakning till svenska kronor
        </h2>
        <p>
          &pound;10 ar cirka 140 SEK (beroende pa aktuell vaxelkurs).
          Det exakta beloppet i SEK beror pa den vaxelkurs som tillampas av
          den bank som utfardat betalkortet. En tillkommande valutavaxlingsavgift
          kan debiteras.
        </p>

        <h2 className="heading-band">
          Godkanda betalningsmetoder
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Kreditkort Visa</li>
          <li>Kreditkort Mastercard</li>
          <li>Betalkort (med Visa/Mastercard-logotyp)</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
        </ul>

        <h2 className="heading-band">
          Ar ETA gratis for vissa personer?
        </h2>
        <p>
          Nej. Avgiften pa &pound;10 galler alla sokande oavsett
          medborgarskap. Det finns inga undantag fran avgiften. Barn maste
          ocksa ha egen ETA och betala separat avgift.
        </p>

        <h2 className="heading-band">
          Kostnadsjamforelse: officiell webbplats kontra formedlare
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Kalla
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Kostnad
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Officiella GOV.UK / appen
                </td>
                <td className="p-3 border-b border-gray-100 font-bold text-green-700">
                  &pound;10
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Formedlarwebbplatser
                </td>
                <td className="p-3 border-b border-gray-100 text-red-600">
                  &pound;50 &mdash; &pound;150+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm">
          <strong>Varning:</strong> Manga formedlare driver webbplatser som
          liknar de officiella UK ETA-sidorna. De tar ut forhojda avgifter for
          samma tjanst. Ansok alltid direkt pa{" "}
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
