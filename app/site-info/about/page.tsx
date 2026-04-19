import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Om oss - UK ETA Online",
  description: "Information om UK ETA Online. Vilka vi ar och vad syftet med var webbplats ar.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Om webbplatsen", href: "/site-info/about/" },
          { label: "Om oss" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Om oss
      </h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Webbplatsens syfte
        </h2>
        <p>
          UK ETA Online ar en informationswebbplats om elektronisk
          reseauktorisering (ETA) till Storbritannien. Vart mal ar att
          tillhandahalla palitlig, aktuell och anvandar information pa
          svenska om det nya reseauktoriseringssystemet.
        </p>

        <h2 className="heading-band">
          Vad gor vi?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Tillhandahaller komplett information om UK ETA-systemet pa svenska
          </li>
          <li>Forklarar ansokningsforfarandet steg for steg</li>
          <li>
            Svarar pa vanliga fragor om resor till UK
          </li>
          <li>
            Varnar for falska webbplatser och bedragerier relaterade till ETA
          </li>
          <li>
            Informerar om andringar i resebestammelserna for Storbritannien
          </li>
          <li>
            Tillhandahaller information for den svenska gemenskapen i UK
          </li>
        </ul>

        <h2 className="heading-band">
          Viktig ansvarsfriskrivning
        </h2>
        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <p>
            UK ETA Online ar inte en officiell webbplats for Storbritanniens
            regering. Vi ar inte anslutna till Home Office, UK Visas and
            Immigration eller nagon annan brittisk myndighet. Den officiella
            webbplatsen for UK ETA-ansokningar ar{" "}
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

        <h2 className="heading-band">
          Information om operatoren
        </h2>
        <div className="border border-gray-200 rounded p-4 text-sm">
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
                <td className="py-2 pr-4 text-gray-500 font-medium">Sprak:</td>
                <td className="py-2">Svenska</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-500 font-medium">Kontakt:</td>
                <td className="py-2">
                  <Link href="/site-info/contact/" className="text-[#022444] underline">
                    Kontaktformular
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
