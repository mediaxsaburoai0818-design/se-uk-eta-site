import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Londons 5 största flygplatser - Heathrow, Gatwick, Stansted, Luton, City",
  description:
    "Guide till Londons fem flygplatser: Heathrow, Gatwick, Stansted, Luton och London City. Läge, kännetecken och resa till stadens centrum.",
  alternates: { canonical: "https://eta-se.com/uk-entry/lotniska-londynu/" },
};

const airports = [
  { code: "LHR", name: "Heathrow", loc: "västra London", desc: "Storbritanniens största flygplats och viktigaste internationella nav (terminal 2-5).", access: "Heathrow Express ~15 min, Elizabeth Line ~30 min, tunnelbana ~50 min." },
  { code: "LGW", name: "Gatwick", loc: "södra London", desc: "Londons näst största flygplats; både traditionella och lågprisbolag (norra och södra terminalen).", access: "Gatwick Express ~30 min, Thameslink ~30-45 min." },
  { code: "STN", name: "Stansted", loc: "nordöstra London", desc: "Ryanairs bas, många europeiska förbindelser; en terminal, lätt att orientera sig.", access: "Stansted Express ~50 min, buss ~60-90 min." },
  { code: "LTN", name: "Luton", loc: "norr om London", desc: "Bas för easyJet och Wizz Air; en terminal, anslutning till stationen med shuttle.", access: "Luton Airport Express ~30 min, Thameslink ~30 min." },
  { code: "LCY", name: "London City", loc: "centrala London (närmast)", desc: "Närmast centrum; populär bland affärsresenärer.", access: "DLR ~15-25 min till centrum." },
];

export default function LondonAirports() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>INRESA TILL UK</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            Londons 5 största flygplatser
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            London betjänas av fem stora flygplatser. Valet påverkar resväg, tid och kostnad för att ta sig in till centrum. Nedan följer en kort beskrivning av var och en.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {airports.map((a) => (
              <div key={a.code} className="card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "var(--color-navy)", color: "#fff" }}>{a.code}</span>
                  <h2 className="text-lg font-bold" style={{ color: "var(--color-blue)" }}>{a.name}</h2>
                  <span className="text-sm text-gray-500">{a.loc}</span>
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--color-text-light)" }}>{a.desc}</p>
                <p className="text-sm" style={{ color: "var(--color-text-light)" }}><strong>Resa:</strong> {a.access}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">Restiderna är ungefärliga och beror på destination i London samt tid på dygnet.</p>

          <p className="text-sm text-gray-500 mt-6">
            Detaljer om den största flygplatsen:{" "}
            <Link href="/uk-entry/lotnisko-heathrow/" className="content-link">Heathrow flygplats (LHR)</Link>
          </p>

          <Breadcrumb items={[{ label: "Londons 5 största flygplatser" }]} />
        </div>
      </section>
    </div>
  );
}
