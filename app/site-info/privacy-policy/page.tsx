import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Integritetspolicy för UK ETA Online - information om behandling av personuppgifter i enlighet med GDPR.",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/privacy-policy.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM WEBBPLATSEN</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Integritetspolicy
          </h1>
          <p className="text-sm text-gray-500">Senast uppdaterad: april 2026</p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">1. Allmän information</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Denna integritetspolicy fastställer reglerna för behandling och skydd
            av personuppgifter för användare av webbplatsen UK ETA Online. Vi
            respekterar användarnas integritet och värnar om datasäkerheten.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">2. Insamlade uppgifter</h2>
          <p className="text-gray-600 text-sm mb-3">Webbplatsen kan samla in följande uppgifter:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Uppgifter som lämnas i formulär (namn, e-postadress, meddelandets innehåll)</li>
            <li>Tekniska uppgifter (IP-adress, webbläsartyp, operativsystem)</li>
            <li>Cookies (i enlighet med cookiepolicyn)</li>
            <li>Analysuppgifter (besökstid, besökta sidor)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">3. Syfte med behandlingen av uppgifter</h2>
          <p className="text-gray-600 text-sm mb-3">Uppgifterna behandlas i syfte att:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Besvara förfrågningar som skickas via kontaktformuläret</li>
            <li>Analysera trafiken på webbplatsen och optimera webbplatsen</li>
            <li>Säkerställa webbplatsens säkerhet</li>
            <li>Visa innehåll anpassat efter användaren</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">4. Cookies</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Webbplatsen använder cookies för att säkerställa att webbplatsen
            fungerar korrekt, för trafikanalys och för att anpassa innehåll.
            Användaren kan kontrollera cookies via webbläsarens inställningar.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">5. Delning av uppgifter</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Personuppgifter delas inte med tredje part, förutom i situationer som
            krävs enligt lag eller är nödvändiga för att tillhandahålla tjänsten
            (t.ex. hosting, analysverktyg).
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">6. Användarens rättigheter (GDPR)</h2>
          <p className="text-gray-600 text-sm mb-3">Enligt GDPR har användaren rätt till:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Tillgång till sina personuppgifter</li>
            <li>Rättelse av felaktiga uppgifter</li>
            <li>Radering av uppgifter (&quot;rätten att bli bortglömd&quot;)</li>
            <li>Begränsning av behandlingen</li>
            <li>Dataportabilitet</li>
            <li>Invändning mot behandlingen</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">7. Datasäkerhet</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Vi använder lämpliga tekniska och organisatoriska åtgärder för att
            skydda personuppgifter mot obehörig åtkomst, förlust eller
            förstörelse. Webbplatsen använder SSL/TLS-kryptering.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">8. Kontakt</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            För frågor om skydd av personuppgifter, vänligen kontakta oss
            via{" "}
            <Link href="/site-info/contact/" className="text-[#022444] underline">
              kontaktformuläret
            </Link>
            .
          </p>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Information om webbplatsen", href: "/site-info/about/" },
              { label: "Integritetspolicy" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
