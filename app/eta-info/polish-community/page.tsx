import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Svenskar i Storbritannien - svensk gemenskap och UK ETA",
  description:
    "Många svenskar bor i och besöker Storbritannien. Information om den svenska gemenskapen, Svenska kyrkan i London och frågor om UK ETA.",
};

export default function PolishCommunity() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/polish-community.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Svenskar i Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed">
            Storbritannien, och särskilt London, är ett populärt resmål för
            svenskar och hem för en aktiv svensk gemenskap. Sedan den
            <strong> 2 april 2025</strong> behöver svenska medborgare en UK ETA
            för att resa in i landet som besökare.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">UK ETA för svenskar som bor i Storbritannien</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Svenskar som har status som permanent bosatt (settled status eller
            pre-settled status) inom ramen för EU Settlement Scheme{" "}
            <strong>behöver inte UK ETA</strong>. ETA krävs endast av personer
            som reser till UK som besökare (turister, affärsresenärer, personer
            i transit).
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Viktigt:</strong> Om du har settled eller pre-settled status
            behöver du inte lämna in en UK ETA-ansökan. Din status är kopplad
            till passet och verifieras automatiskt vid gränsen.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Viktigt att veta för svenska resenärer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { city: "Pass krävs", desc: "Endast giltigt pass accepteras vid inresa" },
              { city: "Inget nationellt ID-kort", desc: "Svenskt ID-kort godtas inte sedan oktober 2021" },
              { city: "ETA per person", desc: "Varje resenär, även barn, behöver en egen UK ETA" },
              { city: "Ansök i förväg", desc: "Lämna in ansökan minst 72 timmar före avresan" },
              { city: "Avgift £20", desc: "Cirka 250 kr per ansökan" },
              { city: "Giltig i 2 år", desc: "Flera inresor under giltighetstiden" },
            ].map((item) => (
              <div key={item.city} className="border border-gray-200 rounded p-3 bg-gray-50">
                <h3 className="font-bold text-[#022444] text-sm">{item.city}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Användbara organisationer och resurser</h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="https://www.swedenabroad.se/sv/utlandsmyndigheter/storbritannien-london/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Sveriges ambassad i London</a> &mdash; Konsulär hjälp, dokument, information
            </li>
            <li>
              <a href="https://www.svenskakyrkan.se/london" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Svenska kyrkan i London</a> &mdash; Svensk gemenskap och mötesplats i utlandet
            </li>
            <li>
              <a href="https://www.gov.uk/world/sweden" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.uk/world/sweden</a> &mdash; Brittiska myndigheternas information för svenskar
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Vanliga flygrutter mellan Sverige och Storbritannien</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Stockholm &rarr; London (Heathrow, Gatwick, Stansted)</li>
            <li>Göteborg &rarr; London och Manchester</li>
            <li>Malmö och Köpenhamn &rarr; London och Edinburgh</li>
            <li>Direktflyg till flera brittiska städer året runt</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Besöka familj och vänner i UK</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Om du planerar att besöka familj eller vänner som bor i
            Storbritannien, kom ihåg att skaffa en UK ETA före resan. Här är det
            viktigaste att tänka på:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Lämna in UK ETA-ansökan minst 72 timmar före avresan</li>
            <li>Avgiften är &pound;20 (cirka 250 kr)</li>
            <li>Du får vistas i UK upp till 6 månader per inresa</li>
            <li>ETA är giltig i 2 år &mdash; flera inresor</li>
            <li>Du får inte arbeta med en ETA</li>
            <li>Du behöver ingen inbjudan från familjen i UK</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">EU Settlement Scheme &mdash; status som permanent bosatt</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Svenskar som bodde i UK före den 31 december 2020 kunde ansöka om
            settled eller pre-settled status inom ramen för EU Settlement Scheme.
            Innehavare av denna status:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Behöver inte UK ETA</li>
            <li>Har rätt att arbeta och bo i UK</li>
            <li>Har tillgång till NHS och sociala förmåner</li>
            <li>Status är kopplad till pass eller identitetshandling</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/what-is-eta/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Vad är UK ETA? &rarr;
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Lämna in UK ETA-ansökan</span>
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
              { label: "Svenskar i Storbritannien" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
