import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Användarvillkor",
  description:
    "Användarvillkor för UK ETA Online - villkor för användning och webbplatsens ansvar.",
};

export default function Agreement() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/agreement.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM WEBBPLATSEN</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Användarvillkor
          </h1>
          <p className="text-sm text-gray-500">Senast uppdaterad: april 2026</p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">1. Allmänna bestämmelser</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Dessa användarvillkor fastställer reglerna för användning av
            webbplatsen UK ETA Online. Genom att använda webbplatsen accepterar
            användaren villkoren nedan.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">2. Webbplatsens karaktär</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            UK ETA Online är en informationswebbplats. Den är inte den brittiska
            regeringens officiella webbplats eller någon myndighets webbplats.
            Informationen på webbplatsen är enbart av informativ karaktär och
            utgör inte juridisk rådgivning eller immigrationsrådgivning.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">3. Tjänster</h2>
          <p className="text-gray-600 text-sm mb-3">Webbplatsen tillhandahåller följande tjänster:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Information om UK ETA-systemet</li>
            <li>Guider om ansökningsförfarandet</li>
            <li>Svar på vanliga frågor</li>
            <li>Information om den svenska gemenskapen i Storbritannien</li>
            <li>Kontaktformulär för förfrågningar</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">4. Ansvar</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Webbplatsens operatör lägger ner omsorg på att säkerställa att
            informationen är aktuell och korrekt, men ansvarar inte för
            eventuella fel, inaktuella uppgifter eller skador som uppstår till
            följd av användningen av webbplatsen. Användaren bör alltid verifiera
            informationen på den officiella webbplatsen GOV.UK.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">5. Upphovsrätt</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Webbplatsens innehåll, inklusive texter, grafik och sidlayout, är
            skyddat av upphovsrätt. Kopiering, spridning eller användning av
            innehållet utan operatörens tillstånd är förbjuden.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">6. Externa länkar</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Webbplatsen kan innehålla länkar till externa webbplatser. Operatören
            ansvarar inte för innehållet och integritetspolicyn på externa
            webbplatser.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">7. Ändringar av villkoren</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Operatören förbehåller sig rätten att när som helst ändra
            användarvillkoren. Ändringarna träder i kraft i samband med
            publicering på webbplatsen.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">8. Kontakt</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            För frågor om användarvillkoren, vänligen kontakta oss via{" "}
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
              { label: "Användarvillkor" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
