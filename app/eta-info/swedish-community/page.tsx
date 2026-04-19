import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Svenska i Storbritannien - Svensk gemenskap i UK",
  description:
    "Information om den svenska gemenskapen i Storbritannien. Cirka 100 000 svenskar bor i UK. Anvandbar resurser och organisationer.",
};

export default function SwedishCommunity() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Svenska i Storbritannien" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Svenska i Storbritannien
      </h1>

      <img
        src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80"
        alt="London - stadsvy"
        className="w-full h-64 object-cover rounded mb-8"
      />

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          Storbritannien ar hem for en betydande svensk gemenskap. Cirka
          <strong> 100 000 svenskar</strong> bor i UK, och med cirka 1,5
          miljoner arliga resenarer fran Sverige ar forbindelserna mellan
          landerna starka.
        </p>

        <h2 className="heading-band">
          UK ETA och svenskar som bor i Storbritannien
        </h2>
        <p>
          Svenskar som har permanent uppehallstillstand (settled status eller
          pre-settled status) inom ramen for EU Settlement Scheme <strong>behover
          inte UK ETA</strong>. ETA kravs enbart av personer som reser till UK
          som besokare (turister, affarsresenarer, personer i transit).
        </p>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Viktigt:</strong> Om du har settled eller pre-settled status
          behover du inte ansoka om UK ETA. Din status ar kopplad till ditt
          pass och verifieras automatiskt vid gransen.
        </div>

        <h2 className="heading-band">
          Huvudsakliga svenska koncentrationer i UK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { city: "London", desc: "Storsta svenska gemenskapen, omraden: South Kensington, Barnes" },
            { city: "Manchester", desc: "Vaxande svensk gemenskap, starka affarskopplingar" },
            { city: "Edinburgh", desc: "Betydande svensk narvaro i Skottland" },
            { city: "Cambridge", desc: "Akademisk gemenskap, forskare och studenter" },
            { city: "Bristol", desc: "Populart bland unga yrkesverksamma" },
            { city: "Birmingham", desc: "Svensk narvaro inom naringsliv och industri" },
          ].map((item) => (
            <div key={item.city} className="border border-gray-200 rounded p-3">
              <h3 className="font-bold text-[#022444] text-sm">{item.city}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="heading-band">
          Anvandbar organisationer och resurser
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.swedenabroad.se/en/embassies/united-kingdom-london/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              Sveriges ambassad i London
            </a>{" "}
            &mdash; Konsular hjalp, dokument, information
          </li>
          <li>
            <a
              href="https://www.swechurch.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              Svenska kyrkan i London
            </a>{" "}
            &mdash; Samlingsplats for svenskar i UK
          </li>
          <li>
            <a
              href="https://www.scc.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              Swedish Chamber of Commerce for the UK
            </a>{" "}
            &mdash; Handel och affarsnnatverk
          </li>
        </ul>

        <h2 className="heading-band">
          Svenska konsulat i Storbritannien
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Sveriges ambassad i London</li>
          <li>Honorarkonsulat i Edinburgh</li>
          <li>Honorarkonsulat i Cardiff</li>
        </ul>

        <h2 className="heading-band">
          Besoka familj och vanner i UK
        </h2>
        <p>
          Om du planerar att besoka familj eller vanner som bor i
          Storbritannien, kom ihag att skaffa UK ETA fore resan.
          Har ar den viktigaste informationen:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Ansok om UK ETA minst 72 timmar fore avresa</li>
          <li>Avgiften ar &pound;10</li>
          <li>Du kan stanna i UK i upp till 6 manader per besok</li>
          <li>ETA galler i 2 ar &mdash; flera inresor</li>
          <li>Du far inte arbeta med ETA</li>
          <li>Du behover ingen inbjudan fran nagon i UK</li>
        </ul>

        <h2 className="heading-band">
          EU Settlement Scheme &mdash; permanent uppehallstillstand
        </h2>
        <p>
          Svenskar som bodde i UK fore den 31 december 2020 kunde ansoka
          om settled eller pre-settled status inom ramen for EU Settlement
          Scheme. Innehavare av denna status:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Behover inte UK ETA</li>
          <li>Har ratt att arbeta och bo i UK</li>
          <li>Har tillgang till NHS och sociala formaner</li>
          <li>Statusen ar kopplad till passet eller id-handlingen</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/eta-info/what-is-eta/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Vad ar UK ETA? &rarr;
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
