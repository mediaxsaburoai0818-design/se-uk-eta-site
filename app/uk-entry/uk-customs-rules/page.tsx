import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Vad får man ta med till England? Tullregler (2026)",
  description:
    "Från EU får du inte ta med kött och mejeriprodukter till Storbritannien - undantag: modersmjölksersättning (upp till 2 kg). Se tullfria kvoter för alkohol och tobak samt regeln om kontanter på £10 000.",
  alternates: { canonical: "https://eta-se.com/uk-entry/uk-customs-rules/" },
};

export default function UkCustomsRules() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Får man ta med ost eller köttprodukter från Sverige till England?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Från EU är det förbjudet att ta med kött (gris, nöt, får, get, vilt) och köttprodukter samt mejeriprodukter (ost, mjölk, smör, yoghurt) till Storbritannien. Produkterna kan beslagtas vid gränsen.",
        },
      },
      {
        "@type": "Question",
        name: "Hur mycket cigaretter och alkohol får jag ta med tullfritt till Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "200 cigaretter (eller 50 cigarrer eller 250 g tobak), 42 liter öl, 18 liter icke-mousserande vin samt 4 liter sprit över 22 % eller 9 liter alkoholdrycker upp till 22 %.",
        },
      },
      {
        "@type": "Question",
        name: "Måste jag deklarera kontanter vid inresa till Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, om du har med dig £10 000 eller mer. Deklarationen görs online i förväg eller i den röda filen vid ankomsten. Att inte deklarera kan leda till att hela beloppet beslagtas och böter på upp till £5 000.",
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
            Vad får man ta med till England? Tullen i Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Den viktigaste regeln: från EU får du inte ta med kött och mejeriprodukter till Storbritannien. Vilka livsmedel som är tillåtna, vilka undantag som gäller för spädbarn, kvoterna för alkohol och tobak och när kontanter måste deklareras.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Regel nr 1: inget kött och inga mejeriprodukter från EU</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Från EU är det <strong>förbjudet att ta med kött och mejeriprodukter</strong> till Storbritannien (England, Skottland, Wales). Förbudet omfattar:
            </p>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Mejeriprodukter</strong>: ost, mjölk, smör, yoghurt.</li>
              <li>&bull; <strong>Kött</strong>: gris, nöt, får, get och vilt samt produkter av dessa - inklusive salami, korv, skinka och smörgåsar med kött eller ost.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Regeln gäller även små mängder i handbagaget - en skinksmörgås köpt på flygplatsen måste ätas upp eller slängas före kontrollen.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Undantaget: barnmat (upp till 2 kg)</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              <strong>Modersmjölksersättning, barnmat och speciallivsmedel för medicinskt bruk</strong> är tillåtna upp till <strong>2 kg per person</strong>, förutsatt att de ligger i <strong>obruten märkesförpackning</strong> och inte behöver kylförvaras före konsumtion.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Livsmedel du kan ta med utan problem</h2>
            <ul className="space-y-2 text-sm mb-3" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Bröd</strong> (men inte smörgåsar med kött eller mejeriprodukter).</li>
              <li>&bull; <strong>Kakor</strong> utan färsk grädde, <strong>kex</strong> och <strong>choklad</strong>.</li>
              <li>&bull; <strong>Pasta</strong> och <strong>förpackade soppor</strong>.</li>
              <li>&bull; <strong>Fisk, ägg och honung</strong> - tillåtna för eget bruk.</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Är du osäker, kontrollera den specifika produkten på GOV.UK före avresan - reglerna varierar beroende på livsmedelskategori.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Alkohol och tobak: tullfria kvoter vid ankomst till Storbritannien</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Kategori</th>
                    <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Tullfri kvot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-gray-100">Öl</td>
                    <td className="p-3 border-b border-gray-100">42 liter</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">Icke-mousserande vin</td>
                    <td className="p-3 border-b border-gray-100">18 liter</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">Sprit (över 22 %)</td>
                    <td className="p-3 border-b border-gray-100">4 liter <em>eller</em> 9 liter drycker upp till 22 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-100">Cigaretter</td>
                    <td className="p-3 border-b border-gray-100">200 stycken (eller 50 cigarrer eller 250 g tobak)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Övriga varor (presenter, souvenirer)</td>
                    <td className="p-3">upp till &pound;390 (&pound;270 vid ankomst med privatflyg eller privat båt)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-3 text-sm" style={{ color: "var(--color-text-light)" }}>
              Allt som överstiger kvoterna måste deklareras, och tillhörande avgifter måste betalas.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Kontanter: deklarationsplikt från £10 000</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Har du med dig <strong>£10 000 eller mer</strong> (kontanter, inklusive motsvarande belopp i andra valutor) är du <strong>skyldig att deklarera summan</strong> - online före resan eller i den röda filen vid ankomsten. Att inte deklarera kan leda till att <strong>hela beloppet beslagtas</strong> och till böter på upp till <strong>£5 000</strong>.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Påföljder och hur kontrollen går till</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Förbjudna livsmedel kan beslagtas vid gränsen, och om du utan deklaration överskrider kvoterna för alkohol och tobak kan varorna hållas kvar och påföljder utdömas. Säkrast är att använda den röda filen om du har något att deklarera.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Tullkontrollen kommer efter passkontrollen - se hur <Link href="/uk-entry/uk-border-egates/" className="content-link">passkontrollen och passagen genom eGates</Link> går till. Glöm inte: för inresan behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link> - ansökans status ser du via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. De allmänna inresereglerna hittar du i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, och för mellanlandningar i guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/bringing-food-into-great-britain" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Bringing food into Great Britain</a>,{" "}
            <a href="https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Bringing goods into the UK</a>,{" "}
            <a href="https://www.gov.uk/bringing-cash-into-uk" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Taking cash in and out of Great Britain</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Tullregler och införselgränser" }]} />
        </article>
      </section>
    </div>
  );
}
