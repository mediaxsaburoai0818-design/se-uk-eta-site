import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Om UK ETA Online - syftet med webbplatsen, vilka vi är och vilken information vi tillhandahåller om UK ETA 2026.",
};

export default function About() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/about.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM WEBBPLATSEN</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Om oss
          </h1>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Webbplatsens syfte</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA Online är en informationswebbplats som ägnas åt det
            elektroniska resetillståndet (ETA) till Storbritannien. Vårt mål är
            att tillhandahålla tillförlitlig, aktuell och användbar information på
            svenska om det nya systemet för resetillstånd.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Vad gör vi?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Vi tillhandahåller komplett information om UK ETA-systemet på svenska</li>
            <li>Vi förklarar ansökningsförfarandet steg för steg</li>
            <li>Vi svarar på de vanligaste frågorna om resor till Storbritannien</li>
            <li>Vi varnar för falska webbplatser och bedrägerier kopplade till ETA</li>
            <li>Vi informerar om ändringar i reglerna för resor till Storbritannien</li>
            <li>Vi tillhandahåller information för den svenska gemenskapen i Storbritannien</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Viktig friskrivning</h2>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <p>
              UK ETA Online är inte den brittiska regeringens officiella webbplats.
              Vi är inte anslutna till Home Office, UK Visas and Immigration
              eller någon annan brittisk myndighet. Den officiella webbplatsen för
              att ansöka om UK ETA är{" "}
              <a
                href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                className="text-[#022444] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GOV.UK
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Information om operatören</h2>
          <div className="border border-gray-200 rounded p-4 text-sm text-gray-600">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Webbplatsens namn:</td>
                  <td className="py-2">UK ETA Online</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Typ:</td>
                  <td className="py-2">Informationswebbplats</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Språk:</td>
                  <td className="py-2">Svenska</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Kontakt:</td>
                  <td className="py-2">
                    <Link href="/site-info/contact/" className="text-[#022444] underline">
                      Kontaktformulär
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Information om webbplatsen", href: "/site-info/about/" },
              { label: "Om oss" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
