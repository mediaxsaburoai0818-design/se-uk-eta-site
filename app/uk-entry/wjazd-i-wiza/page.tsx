import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Inresa till Storbritannien och visum - guide 2026",
  description:
    "Regler för inresa till Storbritannien: UK ETA för vistelser upp till 6 månader, när du behöver visum, gränskontroll (eGate), nödvändiga dokument och resor med barn.",
  alternates: { canonical: "https://eta-se.com/uk-entry/wjazd-i-wiza/" },
};

export default function VisaEntry() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>INRESA TILL UK</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            Inresa till Storbritannien och visum
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            En komplett guide till reglerna för inresa till Storbritannien: när en UK ETA räcker, när du behöver visum, hur gränskontrollen går till och vilka dokument du bör förbereda.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">ETA eller visum? Vistelser upp till 6 månader</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              För turism, affärer, släktbesök eller transit, vid vistelser upp till 6 månader, behöver EU-medborgare inget visum - det räcker med en <strong>UK ETA</strong> (Electronic Travel Authorisation). Ansökan görs online och handläggningen tar vanligtvis upp till 72 timmar, så det är klokt att ansöka några dagar före resan.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              En ETA kostar £20, är giltig i 2 år och tillåter flera inresor. Läs mer i avsnittet{" "}
              <Link href="/eta-info/what-is-eta/" className="content-link">Vad är UK ETA?</Link>
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">När du behöver visum</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Ett brittiskt visum krävs vid vistelser längre än 6 månader samt vid resor för långtidsstudier, arbete eller bosättning. De vanligaste typerna är:
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Studentvisum</strong> - långtidsstudier (vanligtvis 2 till 5 år beroende på utbildning).</li>
              <li>&bull; <strong>Arbetsvisum</strong> - arbete i UK; typen beror på erbjudandet och dina kvalifikationer.</li>
              <li>&bull; <strong>Familjevisum</strong> - för att återförenas med en familjemedlem som bor i UK.</li>
              <li>&bull; <strong>Youth Mobility Scheme</strong> - för unga personer från utvalda länder (vistelse upp till 2 år).</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Gränskontroll: eGate och manuell passkontroll</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              På brittiska flygplatser sker gränskontrollen via automatiska <strong>eGate</strong>-spärrar (baserat på biometriskt pass) eller vid en manuell disk med en gränspolis. eGate snabbar upp passkontrollen; vid frågor om resans syfte kan ett samtal med en tjänsteman bli aktuellt.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Nödvändiga dokument</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Pass</strong> som är giltigt under hela vistelsen (nationellt id-kort godtas inte sedan oktober 2021).</li>
              <li>&bull; <strong>UK ETA</strong> kopplad till detta pass (eller motsvarande visum vid längre vistelse).</li>
              <li>&bull; Stödjande dokument: bekräftelse på boende, returbiljett och medel för vistelsen kan kontrolleras.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Resor med barn (personer under 18 år)</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Varje person måste ha en egen UK ETA, oavsett ålder - även spädbarn och barn. Barn som reser utan en eller båda föräldrarna kan bli ombedda att visa ett dokument som styrker vårdnadshavarens medgivande till resan. Det är bra att ha med sig födelseattest eller ett skriftligt medgivande (på engelska).
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/check-uk-visa" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Check if you need a UK visa</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum" }]} />
        </article>
      </section>
    </div>
  );
}
