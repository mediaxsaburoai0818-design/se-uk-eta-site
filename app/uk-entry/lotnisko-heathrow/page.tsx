import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Heathrow flygplats (LHR) - terminaler, kontroll och resa till London",
  description:
    "Guide till Heathrow flygplats: terminal 2-5, gränskontroll (eGate) samt resa till centrala London - Heathrow Express, Elizabeth Line, tunnelbana och buss.",
  alternates: { canonical: "https://eta-se.com/uk-entry/lotnisko-heathrow/" },
};

export default function Heathrow() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>INRESA TILL UK</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            Heathrow flygplats (LHR)
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Heathrow är Storbritanniens största flygplats och den viktigaste inresepunkten till London. Nedan hittar du terminalerna, hur gränskontrollen går till och hur du tar dig in till centrum.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Läge och terminaler</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Heathrow (IATA-kod: LHR) ligger i västra London. Det är den största och mest trafikerade flygplatsen i UK och betjänar förbindelser från hela världen. Terminal 2, 3, 4 och 5 är i drift - kontrollera terminalnumret på din biljett, eftersom det påverkar både resvägen och incheckningen.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Gränskontroll efter ankomst</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Efter ankomst passerar du gränskontrollen via automatiska <strong>eGate</strong>-spärrar (baserat på biometriskt pass) eller vid en manuell disk med en tjänsteman. Tänk på att du för inresa behöver ett giltigt pass samt en giltig{" "}
              <Link href="/eta-info/what-is-eta/" className="content-link">UK ETA</Link> kopplad till detta pass (vid vistelser upp till 6 månader).
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Resa till centrala London</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200 font-bold" style={{ color: "var(--color-blue)" }}>Färdmedel</th>
                    <th className="text-left p-3 border-b border-gray-200 font-bold" style={{ color: "var(--color-blue)" }}>Ungefärlig restid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border-b border-gray-100">Heathrow Express (snabbtåg)</td><td className="p-3 border-b border-gray-100">ca 15 minuter</td></tr>
                  <tr><td className="p-3 border-b border-gray-100">Elizabeth Line</td><td className="p-3 border-b border-gray-100">ca 30 minuter</td></tr>
                  <tr><td className="p-3 border-b border-gray-100">Tunnelbana (Piccadilly line)</td><td className="p-3 border-b border-gray-100">ca 50 minuter</td></tr>
                  <tr><td className="p-3">Buss / coach</td><td className="p-3">ca 60-90 minuter</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Restiderna är ungefärliga och beror på terminal, tid på dygnet och destination i London.</p>
          </div>

          <p className="text-sm text-gray-500">
            Mer om Londons flygplatser:{" "}
            <Link href="/uk-entry/lotniska-londynu/" className="content-link">Londons 5 största flygplatser</Link>
          </p>

          <Breadcrumb items={[{ label: "Heathrow flygplats (LHR)" }]} />
        </article>
      </section>
    </div>
  );
}
