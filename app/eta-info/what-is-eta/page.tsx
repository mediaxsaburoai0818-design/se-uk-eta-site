import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Vad är UK ETA? Komplett guide 2026",
  description:
    "UK ETA (Electronic Travel Authorisation) är ett elektroniskt resetillstånd som gäller från 2 april 2025. Procedur, avgift £20, giltighet 2 år, beslut vanligtvis inom 3 dagar.",
};

export default function WhatIsEta() {
  return (
    <div>
      {/* Header */}
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/what-is-eta.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Vad är UK ETA?
          </h1>
          <p className="text-white/85 leading-relaxed">
            UK ETA (Electronic Travel Authorisation) är ett elektroniskt
            resetillstånd som införts av den brittiska regeringen som en del av
            ett nytt system för gränskontroll. Detta system kräver att resenärer
            från vissa länder skaffar ett digitalt tillstånd innan de reser in i
            Storbritannien.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Syftet med UK ETA-systemet</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA-systemet infördes för att stärka säkerheten vid
            Storbritanniens gränser efter Brexit. Det gör det möjligt för de
            brittiska myndigheterna att kontrollera resenärer innan de anländer,
            vilket effektiviserar gränskontrollen och ökar landets säkerhet. ETA
            för EU-medborgare gäller från och med 2 april 2025.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Vem måste ha UK ETA?</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA krävs av medborgare i länder som inte behöver visum för
            korta vistelser i Storbritannien, men som inte är brittiska eller
            irländska medborgare. Från och med 2 april 2025 omfattar detta
            samtliga EU-medborgare, inklusive Sverige.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">EU-länder som omfattas av UK ETA-kravet</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {[
              "Sverige", "Tyskland", "Frankrike", "Spanien", "Italien", "Nederländerna",
              "Belgien", "Österrike", "Tjeckien", "Portugal", "Polen", "Danmark",
              "Finland", "Grekland", "Kroatien", "Rumänien", "Bulgarien", "Ungern",
              "Slovakien", "Litauen", "Lettland", "Estland",
            ].map((country) => (
              <span
                key={country}
                className="bg-white border border-gray-200 rounded px-3 py-1.5 text-gray-700"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">UK ETA:s viktigaste egenskaper</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Resans syfte: turism, affärer, korta studier eller transit</li>
            <li>Maximal vistelse: 6 månader per inresa</li>
            <li>Giltighet: 2 år från utfärdandedatum</li>
            <li>Avgift: &pound;20</li>
            <li>Flera inresor under giltighetstiden</li>
            <li>Biometriskt pass krävs</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">UK ETA jämfört med visum &mdash; skillnader</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-white">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Kriterium</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">UK ETA</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Brittiskt visum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Kostnad</td>
                  <td className="p-3 border-b border-gray-100">&pound;20</td>
                  <td className="p-3 border-b border-gray-100">från &pound;100</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Handläggningstid</td>
                  <td className="p-3 border-b border-gray-100">Några timmar &mdash; 72h</td>
                  <td className="p-3 border-b border-gray-100">Veckor / månader</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Maximal vistelse</td>
                  <td className="p-3 border-b border-gray-100">6 månader</td>
                  <td className="p-3 border-b border-gray-100">Beror på typ</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Giltighet</td>
                  <td className="p-3 border-b border-gray-100">2 år</td>
                  <td className="p-3 border-b border-gray-100">Beror på typ</td>
                </tr>
                <tr>
                  <td className="p-3">Besök på visumcenter</td>
                  <td className="p-3">Nej</td>
                  <td className="p-3">Ja</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r mt-6">
            <p className="text-sm text-gray-700">
              <strong>Viktigt:</strong> UK ETA garanterar inte inresa i
              Storbritannien. Det slutgiltiga beslutet om inresa fattas av en
              gränskontrolltjänsteman (UK Border Force) vid ankomsten.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              { label: "Vad är UK ETA?" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
