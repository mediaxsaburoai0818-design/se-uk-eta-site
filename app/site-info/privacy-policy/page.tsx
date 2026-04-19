import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Integritetspolicy for UK ETA Online. Information om behandling av personuppgifter.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Om webbplatsen", href: "/site-info/about/" },
          { label: "Integritetspolicy" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Integritetspolicy
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Senast uppdaterad: april 2026
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
        <h2 className="heading-band">
          1. Allman information
        </h2>
        <p>
          Denna integritetspolicy beskriver principerna for behandling och
          skydd av personuppgifter for anvandare av UK ETA Online. Vi
          respekterar anvandarnas integritet och varnar om datassakerhet.
        </p>

        <h2 className="heading-band">
          2. Insamlade uppgifter
        </h2>
        <p>Webbplatsen kan samla in foljande uppgifter:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Uppgifter som anges i formular (namn, e-postadress, meddelandeinnehall)</li>
          <li>Tekniska uppgifter (IP-adress, webblasartyp, operativsystem)</li>
          <li>Cookies (enligt cookiepolicyn)</li>
          <li>Analytiska data (besoktid, besokta sidor)</li>
        </ul>

        <h2 className="heading-band">
          3. Syfte med databehandling
        </h2>
        <p>Uppgifterna behandlas i syfte att:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Svara pa forfragan som skickats via kontaktformularet</li>
          <li>Analysera trafiken pa webbplatsen och optimera tjansten</li>
          <li>Sakersta webbplatsens sakerhet</li>
          <li>Visa innehall anpassat efter anvandaren</li>
        </ul>

        <h2 className="heading-band">
          4. Cookies
        </h2>
        <p>
          Webbplatsen anvander cookies for att sakerstalla korrekt funktion,
          analysera trafik och anpassa innehall. Anvandaren kan kontrollera
          cookies via webblasarinstallningarna.
        </p>

        <h2 className="heading-band">
          5. Delning av uppgifter
        </h2>
        <p>
          Personuppgifter delas inte med tredje part, forutom i situationer
          som kravs enligt lag eller som ar nodvandiga for att tillhandahalla
          tjansten (t.ex. hosting, analysverktyg).
        </p>

        <h2 className="heading-band">
          6. Anvandarens rattigheter (GDPR)
        </h2>
        <p>Enligt GDPR har anvandaren ratt till:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Tillgang till sina personuppgifter</li>
          <li>Rattelse av felaktiga uppgifter</li>
          <li>Radering av uppgifter (&quot;ratten att bli bortglomd&quot;)</li>
          <li>Begransning av behandling</li>
          <li>Dataportabilitet</li>
          <li>Invandning mot behandling</li>
        </ul>

        <h2 className="heading-band">
          7. Datassakerhet
        </h2>
        <p>
          Vi vidtar lampliga tekniska och organisatoriska atgarder for att
          skydda personuppgifter mot obefragad atkomst, forlust eller
          forstoring. Webbplatsen anvander SSL/TLS-kryptering.
        </p>

        <h2 className="heading-band">
          8. Kontakt
        </h2>
        <p>
          For fragor om dataskydd, kontakta oss via{" "}
          <Link href="/site-info/contact/" className="text-[#022444] underline">
            kontaktformularet
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
