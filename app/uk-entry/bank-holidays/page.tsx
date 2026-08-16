import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Bank holidays i Storbritannien 2026: helgdagar (2026)",
  description:
    "Officiella bank holidays i England och Wales 2026 enligt GOV.UK. Bankerna håller stängt, många butiker har kortare öppettider och kollektivtrafiken kan ha reducerad turtäthet - på juldagen är nästan allt stängt.",
  alternates: { canonical: "https://eta-se.com/uk-entry/bank-holidays/" },
};

export default function BankHolidays() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "När är bank holidays i Storbritannien 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I England och Wales 2026 är de officiella bank holidays enligt GOV.UK: 1 januari (nyårsdagen), 3 april (långfredagen), 6 april (annandag påsk), 4 maj (Early May), 25 maj (Spring), 31 augusti (Summer), 25 december (juldagen) och 28 december (ersättningsdag för annandag jul). Skottland och Nordirland har delvis andra datum.",
        },
      },
      {
        "@type": "Question",
        name: "Har butikerna öppet på bank holidays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bankerna håller stängt. Många butiker och sevärdheter har öppet men ofta med kortare öppettider. På juldagen (25 december) är nästan allt stängt.",
        },
      },
      {
        "@type": "Question",
        name: "Hur påverkas kollektivtrafiken på helgdagar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kollektivtrafiken kan ha reducerad turtäthet, till exempel söndagstidtabell. På juldagen ställs det mesta av trafiken in, så planera resedagarna med marginal.",
        },
      },
    ],
  });

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqLd }} />
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>INRESA TILL UK</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            Bank holidays i Storbritannien 2026
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            På en bank holiday håller bankerna stängt, många butiker har kortare öppettider och kollektivtrafiken kan gå glesare. Här är de officiella helgdagarna i England och Wales 2026 enligt GOV.UK - och vad de betyder för din resa.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Bank holidays i England och Wales 2026</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Enligt GOV.UK gäller följande officiella bank holidays i <strong>England och Wales under 2026</strong>. <strong>Skottland och Nordirland</strong> har delvis andra datum.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Datum</th>
                    <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Helgdag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-gray-100">1 januari</td>
                    <td className="p-3 border-b border-gray-100">Nyårsdagen (New Year&apos;s Day)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">3 april</td>
                    <td className="p-3 border-b border-gray-100">Långfredagen (Good Friday)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">6 april</td>
                    <td className="p-3 border-b border-gray-100">Annandag påsk (Easter Monday)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">4 maj</td>
                    <td className="p-3 border-b border-gray-100">Early May bank holiday</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">25 maj</td>
                    <td className="p-3 border-b border-gray-100">Spring bank holiday</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">31 augusti</td>
                    <td className="p-3 border-b border-gray-100">Summer bank holiday</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">25 december</td>
                    <td className="p-3 border-b border-gray-100">Juldagen (Christmas Day)</td>
                  </tr>
                  <tr>
                    <td className="p-3">28 december</td>
                    <td className="p-3">Ersättningsdag för annandag jul (Boxing Day)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="heading-band mb-4">Vad har öppet - och vad påverkas?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              På en bank holiday <strong>håller bankerna stängt</strong>. Många butiker och sevärdheter har öppet, men <strong>ofta med kortare öppettider</strong>. <strong>Kollektivtrafiken</strong> kan ha reducerad turtäthet, exempelvis söndagstidtabell.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Kontrollera öppettider och tidtabeller i förväg för just den dag du planerar, eftersom det varierar mellan orter och verksamheter.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Juldagen: nästan allt är stängt</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              <strong>Juldagen (25 december)</strong> är särskild: <strong>nästan allt håller stängt</strong> och större delen av <strong>kollektivtrafiken ställs in</strong>. Reser du under julhelgen bör du planera dagarna med marginal och inte räkna med reguljär trafik.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Ersättningsdagar när helgdagen infaller på en helg</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Om en bank holiday <strong>infaller på en lördag eller söndag</strong> flyttas den lediga dagen normalt till <strong>närmast följande vardag</strong> (en så kallad ersättningsdag). Det är förklaringen till att vissa datum i listan ovan ligger på en vardag efter en helg.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Innan du reser till Storbritannien</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För själva inresan behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link>, och du kan följa ansökan via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. Vid ankomsten passerar du <Link href="/uk-entry/uk-border-egates/" className="content-link">passkontrollen och eGates</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>. Ska du köra bil under resan, läs om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/bank-holidays" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - UK bank holidays</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Bank holidays i Storbritannien 2026" }]} />
        </article>
      </section>
    </div>
  );
}
