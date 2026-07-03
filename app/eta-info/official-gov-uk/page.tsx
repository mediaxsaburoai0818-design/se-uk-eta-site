import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Officiell GOV.UK-sida för UK ETA - hur du känner igen falska sidor",
  description:
    "Endast GOV.UK är den officiella källan för UK ETA-ansökan. Så här känner du igen falska sidor och undviker bedrägerier med extra avgifter.",
};

export default function OfficialGovUK() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/official-gov-uk.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Officiell GOV.UK-sida för att lämna in UK ETA-ansökan
          </h1>
          <p className="text-white/85 leading-relaxed">
            UK ETA-ansökan kan lämnas in på den brittiska regeringens officiella
            webbplats eller via den officiella mobilappen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Officiell webbadress</h2>
          <div className="bg-white border border-gray-200 rounded p-6 text-center">
            <p className="text-sm text-gray-500 mb-2">Officiell UK ETA-sida:</p>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold text-[#022444] underline break-all"
            >
              www.gov.uk/eta
            </a>
            <p className="text-xs text-gray-400 mt-2">
              Domänen .gov.uk innebär den brittiska regeringens officiella sida
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Hur känner du igen den officiella sidan?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Webbadressen innehåller <strong>gov.uk</strong> (brittisk regeringsdomän)</li>
            <li>Sidan drivs av Home Office</li>
            <li>Avgiften är exakt &pound;20</li>
            <li>Sidan har den karakteristiska svart-vita GOV.UK-designen</li>
            <li>Den kräver ingen avgift för &quot;snabbare&quot; handläggning</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Hur känner du igen en falsk sida?</h2>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm text-gray-600">
            <p className="font-bold mb-2">Varningstecken:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Webbadressen innehåller inte gov.uk</li>
              <li>Avgift betydligt högre än &pound;20</li>
              <li>Löfte om &quot;garanterat godkännande&quot;</li>
              <li>Erbjudande om &quot;snabbare handläggning&quot;</li>
              <li>Aggressiv reklam eller påträngande pop-up-fönster</li>
              <li>Avsaknad av GOV.UK-logotyp</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Officiell mobilapp</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            UK ETA-ansökan kan även lämnas in via den officiella mobilappen
            &quot;UK ETA&quot;:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>iOS:</strong> Sök efter &quot;UK ETA&quot; i App Store (utgivare: Home Office)</li>
            <li><strong>Android:</strong> Sök efter &quot;UK ETA&quot; i Google Play (utgivare: Home Office)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Andra användbara myndighetssidor</h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="https://www.gov.uk/check-uk-visa" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.uk/check-uk-visa</a> &mdash; Kontrollera viseringskrav för UK
            </li>
            <li>
              <a href="https://www.gov.uk/standard-visitor" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.uk/standard-visitor</a> &mdash; Information om turistvisum
            </li>
            <li>
              <a href="https://www.gov.uk/world/sweden" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.uk/world/sweden</a> &mdash; Brittiska ambassaden i Stockholm
            </li>
            <li>
              <a href="https://www.swedenabroad.se/sv/utlandsmyndigheter/storbritannien-london/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Sveriges ambassad i London</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
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
              { label: "Officiell GOV.UK-sida" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
