import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Momsåterbäring i Storbritannien (VAT refund): vad som gäller (2026)",
  description:
    "Sedan 1 januari 2021 återbetalas i Storbritannien (England, Skottland, Wales) i regel inte momsen på varor som resenärer tar med sig hem i handbagaget. Om butiken skickar varan direkt utomlands kan köp ibland ske utan moms - och Nordirland hanteras separat.",
  alternates: { canonical: "https://eta-se.com/uk-entry/vat-refund/" },
};

export default function VatRefund() {
  const faqLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kan man få tillbaka momsen (VAT) på shopping i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I Storbritannien (England, Skottland och Wales) återbetalas i regel inte längre momsen på varor som resenärer tar med sig hem i handbagaget. Systemet för momsåterbäring vid detaljhandelsexport (VAT Retail Export Scheme) avskaffades där den 1 januari 2021. Detta skiljer sig från hur det tidigare fungerade och från vad som gäller i vissa andra länder.",
        },
      },
      {
        "@type": "Question",
        name: "Finns det något sätt att handla utan moms i Storbritannien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Om en butik skickar varan direkt till en adress utomlands kan köpet i vissa fall ske utan moms. Detta beror dock på butikens rutiner och på de villkor som gäller. Kontrollera med den enskilda butiken vad som är möjligt.",
        },
      },
      {
        "@type": "Question",
        name: "Gäller samma regler i Nordirland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nordirland hanteras separat och har delvis andra regler. För resenärer som inte är bosatta i EU kan viss momsåterbäring finnas kvar där, kopplat till Nordirlandsprotokollet. Kontrollera de aktuella villkoren innan du räknar med återbäring.",
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
            Momsåterbäring (VAT refund) vid shopping i Storbritannien
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            En vanlig missuppfattning: sedan 2021 återbetalas i Storbritannien i regel inte momsen på varor som resenärer tar med sig hem. Här går vi igenom vad som faktiskt gäller, det undantag som finns när butiken skickar varan utomlands, och varför Nordirland behandlas separat.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Det viktigaste: ingen momsåterbäring för handbagage sedan 2021</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Detta är den punkt som ofta missförstås. <strong>Sedan den 1 januari 2021</strong> återbetalas i <strong>Storbritannien (England, Skottland och Wales)</strong> i regel inte längre momsen på varor som resenärer köper och tar med sig hem i handbagaget.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Systemet för momsåterbäring vid detaljhandelsexport (<strong>VAT Retail Export Scheme</strong>) avskaffades vid den tidpunkten. Det innebär att du normalt inte kan få tillbaka momsen på varor du bär med dig ut ur landet.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Undantaget: när butiken skickar varan direkt utomlands</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Om en <strong>butik skickar varan direkt till en adress utomlands</strong> kan köpet i vissa fall ske <strong>utan moms</strong>. Detta beror dock på butikens rutiner och på de villkor som gäller, så kontrollera med den enskilda butiken vad som är möjligt innan du handlar.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Nordirland hanteras separat</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              <strong>Nordirland</strong> har delvis andra regler. För resenärer som <strong>inte är bosatta i EU</strong> kan viss momsåterbäring finnas kvar där, kopplat till <strong>Nordirlandsprotokollet</strong>. Villkoren kan förändras, så kontrollera vad som gäller vid tidpunkten för din resa.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Bra att veta på flygplatsen</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Även om du ser skyltar med &quot;Tax Free&quot; eller tidigare återbetalningsdiskar bör du vara medveten om att momsen på varor du tar med i handbagaget i regel <strong>inte återbetalas</strong> i England, Skottland eller Wales. Utgå därför inte från att en återbäring kommer att ske, utan kontrollera de aktuella reglerna om du är osäker.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Läs vidare inför resan</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Vad du får föra in och ut i övrigt beskrivs i guiden om <Link href="/uk-entry/uk-customs-rules/" className="content-link">tullen i Storbritannien</Link>, och hur inpasseringen går till i guiden om <Link href="/uk-entry/uk-border-egates/" className="content-link">passkontrollen och eGates</Link>. Reser du med barn kan du läsa om <Link href="/uk-entry/travelling-with-children/" className="content-link">att resa med barn till Storbritannien</Link>. För inresan behöver du en giltig <Link href="/eta-info/application/" className="content-link">UK ETA</Link> - status ser du via <Link href="/eta-info/status-check/" className="content-link">statuskontrollen för ETA</Link>. De allmänna inresereglerna finns i guiden <Link href="/uk-entry/wjazd-i-wiza/" className="content-link">Inresa till Storbritannien och visum</Link>, och för mellanlandningar i guiden om <Link href="/eta-info/transit/" className="content-link">transit genom Storbritannien</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Källa för officiell information:{" "}
            <a href="https://www.gov.uk/tax-on-shopping/taxfree-shopping" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Tax-free shopping</a>
          </p>

          <Breadcrumb items={[{ label: "Inresa till Storbritannien och visum", href: "/uk-entry/wjazd-i-wiza/" }, { label: "Momsåterbäring (VAT refund)" }]} />
        </article>
      </section>
    </div>
  );
}
