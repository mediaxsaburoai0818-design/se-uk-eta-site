import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Transit genom Storbritannien - Behover jag UK ETA?",
  description:
    "Kravs UK ETA vid transit genom Storbritannien? Regler for byten pa brittiska flygplatser.",
};

export default function Transit() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Transit genom UK" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Transit genom Storbritannien &mdash; behover jag UK ETA?
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Ja, UK ETA kravs ocksa vid transit genom Storbritannien, aven om du
        inte lamnar transitzonen pa flygplatsen.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Transitregler
        </h2>
        <p>
          Fran den 2 april 2025 behover EU-medborgare (inklusive svenska
          medborgare) UK ETA for transit genom Storbritannien. Detta galler
          bade flygtransit (airside transit) och landtransit (landside
          transit).
        </p>

        <h2 className="heading-band">
          Typer av transit
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-[#022444] mb-2">
              Flygtransit (Airside Transit)
            </h3>
            <p className="text-sm">
              Byte pa flygplatsen utan att lamna den internationella zonen.
              UK ETA kravs. Detta galler t.ex. byte pa Heathrow pa vag till
              USA eller Kanada.
            </p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-[#022444] mb-2">
              Landtransit (Landside Transit)
            </h3>
            <p className="text-sm">
              Att lamna transitzonen, t.ex. for att byta terminal, hamta
              bagage eller overnatta pa hotell. UK ETA kravs. Du reser
              formellt in i Storbritannien.
            </p>
          </div>
        </div>

        <h2 className="heading-band">
          Populara transitrutter via UK
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Stockholm &rarr; London (Heathrow) &rarr; New York</li>
          <li>Goteborg &rarr; London (Gatwick) &rarr; Toronto</li>
          <li>Malmo &rarr; London (Stansted) &rarr; Dublin</li>
          <li>Stockholm &rarr; London (Heathrow) &rarr; Los Angeles</li>
        </ul>
        <p>
          Pa alla dessa rutter kravs UK ETA, aven om vistelsen pa
          flygplatsen bara ar nagra timmar.
        </p>

        <h2 className="heading-band">
          Undantag fran ETA-kravet vid transit
        </h2>
        <p>
          Det finns fa undantag fran kravet pa ETA vid transit:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Irlandska medborgare (gemensamt reseomrade CTA)</li>
          <li>Innehavare av giltigt brittiskt visum</li>
          <li>Innehavare av permanent uppehallstillstand i UK (settled/pre-settled status)</li>
        </ul>

        <h2 className="heading-band">
          Hur undviker du behovet av ETA for transit?
        </h2>
        <p>
          Om du inte vill ansoka om UK ETA kan du valja rutter som inte
          gar genom Storbritannien. Till exempel:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Direktflyg fran Sverige till destinationen</li>
          <li>Byte i EU-lander (Amsterdam, Frankfurt, Paris)</li>
          <li>Byte i Dublin (Irland &mdash; kraver inte ETA)</li>
        </ul>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Tips:</strong> Om du planerar ett flyg med byte i London,
          ansok om UK ETA minst 72 timmar fore avresa. Avsaknad av ETA kan
          leda till att du nekas ombordstigning.
        </div>
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
