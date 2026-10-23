import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { JsonLd, pageLd, str } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Transit genom Storbritannien — behöver du UK ETA 2026?",
  description:
    "Krävs UK ETA vid transit genom Storbritannien? Regler för byten och undantag för flygplatsens transitområde.",
};

export default function Transit() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <section><div>
      <JsonLd data={pageLd({ path: "/eta-info/transit/", headline: str(metadata.title), description: str(metadata.description), lang: "sv", type: "Article" })} />
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
        Du behöver UK ETA för transit bara om du passerar gränskontrollen på en flygplats i Storbritannien innan du reser vidare (landside). Om du byter flyg utan att passera gränskontrollen (airside) behöver du ingen ETA. Om du är osäker, fråga ditt flygbolag.
      </p>
      </div></section>

      <section><div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Transitregler
        </h2>
        <p>
          Sedan den 2 april 2025 behöver EU-medborgare (inklusive svenska medborgare) UK ETA för transit genom Storbritannien om de passerar gränskontrollen på flygplatsen (landside transit). För transit utan att passera gränskontrollen (airside transit) behövs ingen ETA. Om du är osäker, fråga ditt flygbolag.
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
              Byte på flygplatsen utan att passera gränskontrollen. UK ETA krävs inte. Om du är osäker på om du kommer att passera gränskontrollen, fråga ditt flygbolag.
            </p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-[#022444] mb-2">
              Landtransit (Landside Transit)
            </h3>
            <p className="text-sm">
              Att passera gränskontrollen innan du reser vidare, t.ex. för att hämta bagage eller övernatta på hotell. UK ETA krävs. Du reser formellt in i Storbritannien.
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
          På dessa rutter behöver du UK ETA om du passerar gränskontrollen på flygplatsen i Storbritannien, oavsett hur kort bytet är. Om du byter utan att passera gränskontrollen (airside) behövs ingen ETA.
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
          ansök om UK ETA minst 3 arbetsdagar före avresa. Avsaknad av ETA kan
          leda till att du nekas ombordstigning.
        </div>
      </div></section>
    </div>
  );
}
