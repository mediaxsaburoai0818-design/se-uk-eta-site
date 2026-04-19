import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Anvandningsvillkor - UK ETA Online",
  description: "Anvandningsvillkor for UK ETA Online. Villkor for anvandning av webbplatsen.",
};

export default function Agreement() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Om webbplatsen", href: "/site-info/about/" },
          { label: "Anvandningsvillkor" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Anvandningsvillkor
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Senast uppdaterad: april 2026
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
        <h2 className="heading-band">
          1. Allmanna bestammelser
        </h2>
        <p>
          Dessa anvandningsvillkor anger reglerna for anvandning av UK ETA Online.
          Genom att anvanda webbplatsen accepterar anvandaren nedanstaende villkor.
        </p>

        <h2 className="heading-band">
          2. Webbplatsens karaktar
        </h2>
        <p>
          UK ETA Online ar en informationswebbplats. Den ar inte en officiell
          webbplats for Storbritanniens regering eller nagon myndighet.
          Informationen pa webbplatsen ar enbart informativ och utgor inte
          juridisk eller immigrationsradgivning.
        </p>

        <h2 className="heading-band">
          3. Tjanster
        </h2>
        <p>Webbplatsen tillhandahaller foljande tjanster:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Information om UK ETA-systemet</li>
          <li>Guider om ansokningsforfarandet</li>
          <li>Svar pa vanliga fragor</li>
          <li>Information om den svenska gemenskapen i UK</li>
          <li>Kontaktformular for fragor</li>
        </ul>

        <h2 className="heading-band">
          4. Ansvar
        </h2>
        <p>
          Operatoren stravar efter att sakerstalla att informationen ar aktuell
          och korrekt men ansvarar inte for eventuella fel, inaktuella uppgifter
          eller skador som uppstar till foljd av anvandning av webbplatsen.
          Anvandaren bor alltid verifiera informationen pa den officiella
          GOV.UK-webbplatsen.
        </p>

        <h2 className="heading-band">
          5. Upphovsratt
        </h2>
        <p>
          Webbplatsens innehall, inklusive texter, grafik och layout, ar
          skyddat av upphovsratt. Kopiering, spridning eller anvandning av
          innehall utan operatorens samtycke ar forbjudet.
        </p>

        <h2 className="heading-band">
          6. Externa lankar
        </h2>
        <p>
          Webbplatsen kan innehalla lankar till externa webbplatser. Operatoren
          ansvarar inte for innehall och integritetspolicyer pa externa
          webbplatser.
        </p>

        <h2 className="heading-band">
          7. Andringar av villkoren
        </h2>
        <p>
          Operatoren forbehaller sig ratten att andra villkoren nar som helst.
          Andringar trader i kraft vid publicering pa webbplatsen.
        </p>

        <h2 className="heading-band">
          8. Kontakt
        </h2>
        <p>
          For fragor om anvandningsvillkoren, kontakta oss via{" "}
          <Link href="/site-info/contact/" className="text-[#022444] underline">
            kontaktformularet
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
