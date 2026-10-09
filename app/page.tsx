import Link from "next/link";
import { HOME_MAIN, HOME_CTA } from "@/lib/eta-design";
import { newsItems, CATEGORY_STYLE, CATEGORY_LABEL } from "./news/news-data";
const latestNews = [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);


const facts = [
  { value: "£20", label: "Ansökningsavgift" },
  { value: "Minuter", label: "Automatiskt beslut för de flesta" },
  { value: "2 år", label: "Giltighetstid" },
  { value: "6 mån.", label: "Max. vistelse i UK" },
];

const features = [
  {
    icon: "doc",
    tone: "icon-navy",
    title: "Helt digital ansökan",
    desc: "Du ansöker om ETA via mobilappen eller på GOV.UK. Inget ambassadbesök och inga pappersblanketter.",
  },
  {
    icon: "coin",
    tone: "icon-red",
    title: "Avgift endast £20",
    desc: "En engångsavgift på £20 (cirka 250 kr) för en auktorisation som gäller i 2 år, med flera inresor till Storbritannien.",
  },
  {
    icon: "shield",
    tone: "icon-blue",
    title: "Giltig i 2 år",
    desc: "När den godkänts tillåter ETA flera inresor, varje vistelse upp till 6 månader, under hela giltighetstiden.",
  },
];

const steps = [
  {
    icon: "phone",
    title: "Ladda ner appen UK ETA",
    desc: 'Ladda ner appen "UK ETA" från App Store eller Google Play, eller gå till GOV.UK.',
  },
  {
    icon: "scan",
    title: "Skanna passet och ta ett foto",
    desc: "Skanna ditt biometriska pass med telefonen och ta ett ansiktsfoto (selfie).",
  },
  {
    icon: "card",
    title: "Fyll i formuläret och betala (£20)",
    desc: "Ange personuppgifter och reseinformation och betala med kort eller Apple/Google Pay.",
  },
  {
    icon: "check",
    title: "Vänta på godkännande",
    desc: "De flesta sökande får ett automatiskt beslut inom några minuter via UK ETA-appen. Ett litet antal ansökningar kan kräva ytterligare granskning.",
  },
];

const faqs = [
  {
    q: "Behöver svenska medborgare UK ETA?",
    a: "Ja. Sedan 2 april 2025 måste svenska medborgare (och övriga EU-medborgare) ha UK ETA före resa till Storbritannien. Det gäller turist-, affärs- och transitresor.",
  },
  {
    q: "Vad kostar UK ETA och hur länge är den giltig?",
    a: "Avgiften för UK ETA är £20 (cirka 250 kr). Auktorisationen är giltig i 2 år från utfärdandet och tillåter flera inresor till UK, var och en upp till 6 månader.",
  },
  {
    q: "Vad är skillnaden mellan UK ETA och ett visum?",
    a: "UK ETA är en förenklad elektronisk auktorisation för korta vistelser (upp till 6 månader). Den kostar £20 och ansökan görs online. Ett brittiskt visum kräver besök på ett viseringscenter, kostar från £100 och tillåter längre vistelser eller arbete.",
  },
  {
    q: "Behöver barn från Sverige UK ETA?",
    a: "Ja. Varje resenär, oavsett ålder, måste ha en egen UK ETA — även spädbarn och barn. En förälder eller vårdnadshavare kan ansöka för barnet med barnets pass.",
  },
  {
    q: "Kan en svensk medborgare resa in i UK med nationellt id-kort?",
    a: "Nej. Sedan oktober 2021 krävs ett giltigt pass för inresa till Storbritannien — nationellt id-kort accepteras inte längre. UK ETA är kopplad just till detta pass.",
  },
  {
    q: "Behöver jag ETA för en transitflygning via UK?",
    a: "Om du passerar gränskontrollen under bytet (t.ex. byter terminal eller hämtar bagage) krävs UK ETA. Vid transit utan att passera gränsen (airside) behövs den oftast inte — bekräfta gärna reglerna med flygbolaget och flygplatsen.",
  },
];

const links = [
  { href: "/eta-info/what-is-eta/", title: "Vad är UK ETA?", desc: "Grundläggande information om ETA-systemet" },
  { href: "/eta-info/application/", title: "Så ansöker du", desc: "Steg för steg genom formuläret" },
  { href: "/eta-info/fee/", title: "Avgifter för UK ETA", desc: "Detaljer om kostnaderna" },
  { href: "/eta-info/expiration/", title: "Giltighetstid", desc: "När du behöver förnya din ETA" },
  { href: "/eta-info/required-documents/", title: "Nödvändiga dokument", desc: "Vad du ska förbereda inför ansökan" },
  { href: "/eta-info/official-gov-uk/", title: "Officiella GOV.UK-sidan", desc: "Länk till myndighetssidan" },
];

const GOV = "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta";

function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "doc": return (<svg viewBox="0 0 24 24" {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></svg>);
    case "coin": return (<svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8" /><path d="M12 8v8M9.5 10.2a2.2 2 0 0 1 4 0M9.5 13.8a2.2 2 0 0 0 4 0" /></svg>);
    case "shield": return (<svg viewBox="0 0 24 24" {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>);
    case "phone": return (<svg viewBox="0 0 24 24" {...p}><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg>);
    case "scan": return (<svg viewBox="0 0 24 24" {...p}><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="2.4" /></svg>);
    case "card": return (<svg viewBox="0 0 24 24" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></svg>);
    case "check": return (<svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.2 2.2 4.8-4.8" /></svg>);
    case "pin": return (<svg viewBox="0 0 24 24" {...p}><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>);
    case "arrow": return (<svg viewBox="0 0 24 24" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
    default: return null;
  }
}

// ⚠️ 2026-10 デザインリニューアル（okina依頼）。
//    ヘッダー・フッターは layout（components/Header.tsx・Footer.tsx）が全ページ共通で出す。
//    上＝新デザイン（HOME_MAIN）、中＝旧TOPの本文のうちデザインに無いもの（新デザインの見た目で組み直し）、下＝CTA（HOME_CTA）。
//    「Krävs vid inresa till Storbritannien」はデザインの「Vem behöver UK ETA?」と重複するため 10/9 okina指示で削除。
export default function Home() {
  return (
    <div className="etahome">
      <div dangerouslySetInnerHTML={{ __html: HOME_MAIN }} />

      {/* Giltighet och när du ska ansöka */}
      <section className="band xsec">
        <div className="container">
          <span className="eyebrow">Giltighet och tidsfrist</span>
          <h2>ETA:ns giltighetstid och när du ska ansöka</h2>
          <p className="xlead">När du ska ansöka och hur länge din ETA förblir giltig.</p>
          <div className="xcards x2">
            <div className="xcard">
              <h3>Giltighetstid</h3>
              <p>ETA är giltig i <strong>2 år</strong> från utfärdandet och tillåter flera inresor till Storbritannien. Om ditt pass går ut inom 2 år upphör ETA samtidigt som passet — förnya i så fall passet först och ansök sedan om ETA.</p>
            </div>
            <div className="xcard">
              <h3>När du ska ansöka</h3>
              <p>De flesta sökande får ett automatiskt beslut inom <strong>några minuter</strong> via UK ETA-appen. Ansök minst 3 arbetsdagar före resan, eftersom ett litet antal ansökningar kan kräva ytterligare granskning. När den godkänts får du ett bekräftelsemejl; vid inresan behöver du oftast inte visa upp ETA-numret, men det är bra att spara bekräftelsen (skärmdump eller utskrift).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transit */}
      <section className="section xsec">
        <div className="container">
          <span className="eyebrow">Transit</span>
          <h2>Transit genom Storbritannien</h2>
          <p className="xlead">Om ETA krävs vid byte beror på vilken typ av transit det gäller.</p>
          <div className="xcards x2">
            <div className="xcard">
              <span className="eyebrow">Flygtransit (airside)</span>
              <h3>I regel utan ETA</h3>
              <p>Om du inte passerar den brittiska gränskontrollen och stannar i flygplatsens transitzon krävs oftast ingen ETA. Om du dock lämnar transitzonen (t.ex. övernattning eller byte på en annan flygplats) behövs en ETA.</p>
            </div>
            <div className="xcard">
              <span className="eyebrow">Landtransit (landside)</span>
              <h3>Kräver i regel ETA</h3>
              <p>Vid passage genom den brittiska gränskontrollen — t.ex. med Eurostar (tåg genom Engelska kanalen) eller färja — och passage av gränskontrollen krävs i regel en ETA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UK ETA för svenska medborgare（詳細） */}
      <section id="svenska" className="band xsec">
        <div className="container">
          <span className="eyebrow">För svenskar</span>
          <h2>UK ETA för svenska medborgare</h2>
          <p className="xlead">Sverige är medlem i Europeiska unionen och svenska medborgare kan resa till Storbritannien utan visum för vistelser upp till 6 månader. Sedan 2 april 2025 måste du dock ha en UK ETA före varje resa — det gäller semester, tjänsteresor, släktbesök och transit.</p>
          <div className="xcards x4">
            <div className="xcard"><h3>Vem måste ha ETA</h3><p>Alla svenska medborgare som reser till UK för en kort vistelse, inklusive barn och spädbarn. Varje person gör en egen separat ansökan.</p></div>
            <div className="xcard"><h3>Pass, inte nationellt id-kort</h3><p>För inresa till Storbritannien krävs ett giltigt pass — nationellt id-kort accepteras inte längre (sedan oktober 2021). ETA är kopplad till detta pass.</p></div>
            <div className="xcard"><h3>Populära destinationer från Sverige</h3><p>London, Manchester, Edinburgh, Birmingham och andra städer. En enda ETA omfattar England, Skottland, Wales och Nordirland.</p></div>
            <div className="xcard"><h3>När du ska ansöka</h3><p>Minst 3 arbetsdagar före avresan. De flesta beslut fattas automatiskt inom några minuter, men ett litet antal ansökningar kan kräva ytterligare granskning.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section xsec">
        <div className="container xnarrow">
          <span className="eyebrow">FAQ</span>
          <h2>Vanliga frågor</h2>
          <div className="xfaq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary><span>{f.q}</span><span className="xplus" aria-hidden="true">+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <Link href="/faq/" className="textlink xmore">Se alla vanliga frågor <span className="arrow" aria-hidden="true">→</span></Link>
        </div>
      </section>

      {/* Nyheter */}
      <section id="nyheter" className="band xsec">
        <div className="container">
          <span className="eyebrow">Nyheter</span>
          <h2>Senaste nyheterna</h2>
          <p className="xlead">De viktigaste nyheterna om UK ETA, avgifter och inreseregler till Storbritannien.</p>
          <div className="xcards x3">
            {latestNews.map((n) => {
              const c = CATEGORY_STYLE[n.category];
              return (
                <Link key={n.slug} href={`/news/${n.slug}/`} className="xcard xlink">
                  <div className="xmeta">
                    <span className="xtag" style={{ backgroundColor: c.bg, color: c.fg }}>{CATEGORY_LABEL[n.category]}</span>
                    <time>{n.date}</time>
                  </div>
                  <h3>{n.title}</h3>
                  <p>{n.summary}</p>
                </Link>
              );
            })}
          </div>
          <Link href="/news/" className="textlink xmore">Se alla nyheter <span className="arrow" aria-hidden="true">→</span></Link>
        </div>
      </section>

      {/* Användbara sidor */}
      <section className="section xsec">
        <div className="container">
          <span className="eyebrow">Guide</span>
          <h2>Användbara sidor</h2>
          <div className="xcards x3">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="xcard xlink xrow">
                <span><h3>{item.title}</h3><p>{item.desc}</p></span>
                <span className="xgo" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: HOME_CTA }} />
    </div>
  );
}
