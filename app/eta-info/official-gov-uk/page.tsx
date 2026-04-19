import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Officiell GOV.UK-webbplats - UK ETA",
  description:
    "Information om den officiella GOV.UK-webbplatsen for UK ETA-ansokningar. Hur du kanner igen den officiella sidan och undviker bedrageri.",
};

export default function OfficialGovUK() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Officiell GOV.UK-webbplats" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Officiell GOV.UK-webbplats for UK ETA-ansokningar
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        UK ETA-ansokningar kan lamnas in pa Storbritanniens regerings
        officiella webbplats eller via den officiella mobilappen.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Officiell webbadress
        </h2>
        <div className="bg-[#F5F5F5] border border-gray-200 rounded p-6 text-center">
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
            Domanen .gov.uk innebar att det ar en officiell brittisk regeringswebbplats
          </p>
        </div>

        <h2 className="heading-band">
          Hur kanner du igen den officiella sidan?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            URL:en innehaller <strong>gov.uk</strong> (brittisk regeringsdoman)
          </li>
          <li>Webbplatsen drivs av Home Office</li>
          <li>Avgiften ar exakt &pound;10</li>
          <li>Sidan har den karakteristiska vit-svarta GOV.UK-designen</li>
          <li>Kraver inte avgift for &quot;paskyndad&quot; handlaggning</li>
        </ul>

        <h2 className="heading-band">
          Hur kanner du igen en falsk webbplats?
        </h2>
        <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm">
          <p className="font-bold mb-2">Varningstecken:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>URL:en innehaller inte gov.uk</li>
            <li>Avgiften ar avsevart hogre an &pound;10</li>
            <li>Lofte om &quot;garanterat godkannande&quot;</li>
            <li>Erbjudande om &quot;paskyndad handlaggning&quot;</li>
            <li>Aggressiv reklam eller palitrangande popup-fonster</li>
            <li>Saknar GOV.UK-logotyp</li>
          </ul>
        </div>

        <h2 className="heading-band">
          Officiell mobilapp
        </h2>
        <p>
          UK ETA-ansokan kan ocksa goras via den officiella mobilappen
          &quot;UK ETA&quot;:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>iOS:</strong> Sok efter &quot;UK ETA&quot; i App Store
            (utgivare: Home Office)
          </li>
          <li>
            <strong>Android:</strong> Sok efter &quot;UK ETA&quot; i Google Play
            (utgivare: Home Office)
          </li>
        </ul>

        <h2 className="heading-band">
          Andra anvandbar officiella webbplatser
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.gov.uk/check-uk-visa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              gov.uk/check-uk-visa
            </a>{" "}
            &mdash; Kontrollera visumkrav for UK
          </li>
          <li>
            <a
              href="https://www.gov.uk/standard-visitor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              gov.uk/standard-visitor
            </a>{" "}
            &mdash; Information om turistvisum
          </li>
          <li>
            <a
              href="https://www.swedenabroad.se/en/embassies/united-kingdom-london/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              Sveriges ambassad i London
            </a>{" "}
            &mdash; Konsular hjalp och information
          </li>
          <li>
            <a
              href="https://www.gov.uk/world/organisations/british-embassy-stockholm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              Brittiska ambassaden i Stockholm
            </a>
          </li>
        </ul>
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
