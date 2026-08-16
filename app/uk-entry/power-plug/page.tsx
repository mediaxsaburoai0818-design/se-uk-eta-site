import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Eluttag och spänning i Storbritannien: Type G (2026)",
  description:
    "I Storbritannien används eluttag av typ G (fyrkantig trestift) och spänningen är 230 V, 50 Hz. Har din laddare INPUT 100-240 V räcker en reseadapter - kontrollera alltid apparatens märkning.",
  alternates: { canonical: "https://eta-se.com/uk-entry/power-plug/" },
};

export default function PowerPlug() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Fungerar min laddare i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Om laddaren är märkt INPUT 100-240 V (dual voltage) fungerar den i Storbritannien - du behöver då bara en reseadapter till typ G. De flesta laddare till mobiler, datorer och kameror är märkta så. Kontrollera alltid märkningen på apparaten.",
        },
      },
      {
        "@type": "Question",
        name: "Behöver jag en spänningsomvandlare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En spänningsomvandlare (transformator) kan behövas för högeffektsapparater som är byggda enbart för det egna landets spänning, till exempel vissa hårtorkar och plattänger. Kontrollera märkningen (INPUT) - står det bara det egna landets spänning kan en omvandlare krävas.",
        },
      },
      {
        "@type": "Question",
        name: "Vilken typ av eluttag används i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Storbritannien använder eluttag av typ G, med tre fyrkantiga stift. Spänningen är 230 V och frekvensen 50 Hz.",
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
            Eluttag och spänning i Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Storbritannien använder eluttag av typ G med tre fyrkantiga stift, och spänningen är 230 V. Vilken reseadapter du behöver, när det räcker med bara en adapter och när en spänningsomvandlare kan krävas - allt avgörs av apparatens märkning.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Type G och 230 V: så ser den brittiska standarden ut</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Eluttagen i Storbritannien är av <strong>typ G</strong> - kontakten har <strong>tre fyrkantiga stift</strong>. Spänningen är <strong>230 V</strong> och frekvensen <strong>50 Hz</strong>. För att kunna ansluta utrustning med annan kontakttyp behöver du en <strong>reseadapter till typ G</strong>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Är laddaren märkt 100-240 V? Då räcker en adapter</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Utrustning från länder med lägre spänning - som Japan (100 V) eller Nordamerika (120 V) - fungerar i Storbritannien <strong>om apparatens INPUT-märkning anger &quot;100-240 V&quot;</strong> (så kallad dual voltage). Då behöver du <strong>bara en reseadapter till typ G</strong>.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Laddare till <strong>mobiler, bärbara datorer och kameror</strong> är i de flesta fall märkta 100-240 V. Även om det oftast stämmer bör du alltid <strong>läsa etiketten (INPUT)</strong> på just din apparat.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">När kan en spänningsomvandlare behövas?</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Apparater vars <strong>INPUT enbart anger det egna landets spänning</strong> - ofta <strong>högeffektsutrustning som vissa hårtorkar och plattänger</strong> - kan behöva en <strong>spänningsomvandlare (transformator)</strong>. Kontrollera märkningen innan du ansluter något; är du osäker är det säkrast att låta apparaten stanna hemma.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">USB-uttag och praktiska tips</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Vissa boenden har <strong>USB-uttag</strong>, men det säkraste är att ta med en egen <strong>reseadapter till typ G</strong>. Då kan du ladda oavsett hur rummet är utrustat.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Kontrollista före avresan</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; Läs <strong>INPUT-märkningen</strong> på varje laddare och apparat.</li>
              <li>&bull; Är det <strong>100-240 V</strong>? Då räcker en <strong>adapter till typ G</strong>.</li>
              <li>&bull; Enbart eget lands spänning på en högeffektsapparat? Då kan en <strong>omvandlare</strong> behövas.</li>
              <li>&bull; Ta med en egen adapter i stället för att lita på USB-uttag i rummet.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Innan du reser till Storbritannien</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              För själva inresan behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link>, och du kan följa ansökan via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. Vid ankomsten passerar du <Link href="/uk-entry/uk-border-egates/" className="content-link">passkontrollen och eGates</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>. Planerar du att köra bil, läs om <Link href="/uk-entry/driving-in-uk/" className="content-link">att köra bil i Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Officiell och teknisk referens:{" "}
            <a href="https://www.gov.uk/guidance/electrical-products-and-appliances" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Electrical products and appliances</a>. Den brittiska standarden för stickproppar och uttag är BS 1363 (typ G).
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Eluttag och spänning i Storbritannien" }]} />
        </article>
      </section>
    </div>
  );
}
