import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Vad ar UK ETA? - Komplett guide",
  description:
    "UK ETA (Electronic Travel Authorisation) - elektronisk reseauktorisering till Storbritannien. Lander som omfattas, villkor, skillnader mot visum.",
};

export default function WhatIsEta() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Vad ar UK ETA?" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Vad ar UK ETA?
      </h1>

      <img
        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
        alt="London - Tower Bridge och stadsvy"
        className="w-full h-64 object-cover rounded mb-8"
      />

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          UK ETA (Electronic Travel Authorisation) ar en elektronisk
          reseauktorisering som infordes av Storbritanniens regering som en del
          av det nya granskontrollsystemet. Systemet kraver att resenarer fran
          vissa lander far ett digitalt tillstand innan inresa till Forenade
          kungariket.
        </p>

        <h2 className="heading-band">
          Syftet med UK ETA-systemet
        </h2>
        <p>
          UK ETA-systemet infordes for att starka gransssakerheten i
          Storbritannien efter Brexit. Det ger brittiska myndigheter mojlighet
          att verifiera resenarer innan deras ankomst, vilket effektiviserar
          granskontrollen och okar landets sakerhet. ETA for EU-medborgare
          trader i kraft den 2 april 2025.
        </p>

        <h2 className="heading-band">
          Vem maste ha UK ETA?
        </h2>
        <p>
          UK ETA kravs av medborgare i lander som inte behover visum for korta
          vistelser i Storbritannien men som inte ar brittiska eller irlandska
          medborgare. Fran den 2 april 2025 omfattar detta alla EU-medborgare,
          inklusive Sverige.
        </p>

        <h2 className="heading-band">
          EU-lander som omfattas av UK ETA-kravet
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {[
            "Sverige",
            "Tyskland",
            "Frankrike",
            "Spanien",
            "Italien",
            "Nederlanderna",
            "Belgien",
            "Osterrike",
            "Tjeckien",
            "Portugal",
            "Polen",
            "Danmark",
            "Finland",
            "Grekland",
            "Kroatien",
            "Rumanien",
            "Bulgarien",
            "Ungern",
            "Slovakien",
            "Litauen",
            "Lettland",
            "Estland",
          ].map((country) => (
            <span
              key={country}
              className="bg-[#F5F5F5] border border-gray-200 rounded px-3 py-1.5 text-gray-700"
            >
              {country}
            </span>
          ))}
        </div>

        <h2 className="heading-band">
          Viktiga egenskaper for UK ETA
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Reseanledning: turism, affarer, korttidsstudier eller transit</li>
          <li>Maximal vistelse: 6 manader per inresa</li>
          <li>Giltighet: 2 ar fran utfardandedatumet</li>
          <li>Avgift: &pound;10</li>
          <li>Flera inresor under giltighetstiden</li>
          <li>Biometriskt pass kravs</li>
        </ul>

        <h2 className="heading-band">
          UK ETA kontra visum &mdash; skillnader
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Kriterium
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  UK ETA
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Brittiskt visum
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">Kostnad</td>
                <td className="p-3 border-b border-gray-100">&pound;10</td>
                <td className="p-3 border-b border-gray-100">fran &pound;100</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Handlaggningstid
                </td>
                <td className="p-3 border-b border-gray-100">
                  Nagra timmar &mdash; 72h
                </td>
                <td className="p-3 border-b border-gray-100">
                  Veckor / manader
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Maximal vistelse
                </td>
                <td className="p-3 border-b border-gray-100">6 manader</td>
                <td className="p-3 border-b border-gray-100">Beror pa typ</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">Giltighet</td>
                <td className="p-3 border-b border-gray-100">2 ar</td>
                <td className="p-3 border-b border-gray-100">Beror pa typ</td>
              </tr>
              <tr>
                <td className="p-3">Besok pa visumcenter</td>
                <td className="p-3">Nej</td>
                <td className="p-3">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r">
          <p className="text-sm text-gray-700">
            <strong>Viktigt:</strong> UK ETA garanterar inte inresa till
            Storbritannien. Det slutliga beslutet om inresa fattas av
            granskontrolltjanstemannen (UK Border Force) vid ankomst.
          </p>
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
