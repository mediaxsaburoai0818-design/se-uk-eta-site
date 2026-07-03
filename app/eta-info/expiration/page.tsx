import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "UK ETA giltighet 2026 - 2 år och flera inresor",
  description:
    "UK ETA är giltig i 2 år från godkännandet. Flera inresor till Storbritannien är möjliga. Se när tillståndet behöver förnyas.",
};

export default function Expiration() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/expiration.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            UK ETA:s giltighetstid
          </h1>
          <p className="text-white/85 leading-relaxed">
            UK ETA-tillståndet är giltigt i <strong>2 år</strong> från
            utfärdandedatumet eller tills passet löper ut &mdash; beroende på
            vilket som inträffar först.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Giltighetsregler</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Giltig i 2 år från utfärdandedatumet</li>
            <li>Upphör att gälla tillsammans med passet (om passet löper ut tidigare)</li>
            <li>Tillåter flera inresor till Storbritannien under giltighetstiden</li>
            <li>Varje vistelse får inte överstiga 6 månader</li>
            <li>ETA är kopplad till ett specifikt pass</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">När behöver du lämna in en ny ansökan?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            En ny UK ETA-ansökan behöver lämnas in i följande fall:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>När det har gått 2 år sedan ETA utfärdades</li>
            <li>När du har fått ett nytt pass</li>
            <li>Vid namnbyte</li>
            <li>Vid byte av medborgarskap</li>
            <li>Vid könsbyte</li>
            <li>Vid förändrade omständigheter som påverkar berättigandet</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kan jag resa med en ETA som snart löper ut?</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA måste vara giltig vid inresan i Storbritannien. Den behöver
            inte vara giltig under hela vistelsen &mdash; det viktiga är att den
            är giltig på ankomstdagen. Det rekommenderas dock att lämna in en
            ny ansökan i god tid.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Hur kontrollerar jag giltighetsdatumet?</h2>
          <p className="text-gray-600 leading-relaxed">
            Giltighetsdatumet för UK ETA kan kontrolleras i mobilappen &quot;UK
            ETA&quot; eller på webbplatsen GOV.UK genom att logga in på det konto
            som skapades vid ansökan.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Vad händer om jag byter pass medan ETA är giltig?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ETA är kopplad till ett specifikt pass. Om du skaffar ett nytt
            pass (t.ex. efter att det gamla löpt ut eller vid namnbyte) måste du
            lämna in en ny ETA-ansökan och betala avgiften på &pound;20 igen. Den gamla
            ETA upphör att gälla.
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Tips:</strong> Det rekommenderas att lämna in UK ETA-ansökan
            minst 72 timmar före den planerade resan, för att ha tid för
            handläggning av ansökan.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/status-check/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Kontrollera ansökans status &rarr;
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
              { label: "Giltighetstid" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
