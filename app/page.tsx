import Link from "next/link";
import { newsItems, CATEGORY_STYLE, CATEGORY_LABEL } from "./news/news-data";
const latestNews = [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);


const facts = [
  { value: "£20", label: "Ansökningsavgift" },
  { value: "72h", label: "Max. handläggningstid" },
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
    desc: "De flesta ansökningar handläggs inom några timmar, men det kan ta upp till 72 timmar.",
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

export default function Home() {
  return (
    <div>
      {/* === Hero (案3 duotone landmark, frame-less chips below CTA) === */}
      <section className="relative text-white min-h-[540px] md:min-h-[680px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-uk.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-[22%_center] md:object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(1,16,40,0.62) 0%, rgba(1,16,40,0.42) 42%, rgba(1,10,28,0.84) 100%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="font-semibold leading-none tracking-wide drop-shadow" style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "clamp(3rem, 12vw, 5.5rem)" }}>
              UK ETA
            </h1>
            <p className="mt-6 uppercase mx-auto" style={{ fontFamily: "var(--font-display)", color: "#E0C878", letterSpacing: "0.08em", fontSize: "clamp(.64rem, 2vw, 1rem)", lineHeight: 1.7, maxWidth: "26rem", textShadow: "0 2px 10px rgba(0,0,0,.5)" }}>
              Elektronisk reseauktorisation till Storbritannien
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-10 justify-center items-center">
              <a href={GOV} target="_blank" rel="noopener noreferrer" className="btn-red text-base">
                Ansök om UK ETA
              </a>
              <Link href="/eta-info/what-is-eta/" className="btn-blue-outline text-sm">
                Läs mer
              </Link>
            </div>
            <div className="grid grid-cols-3 max-w-sm md:max-w-md mx-auto mt-10">
              {facts.slice(0, 3).map((f, i) => (
                <div key={f.label} className="flex flex-col items-center justify-center text-center px-2" style={{ borderLeft: i === 0 ? "none" : "1px solid rgba(224,200,120,0.3)" }}>
                  <span className="font-bold leading-none" style={{ color: "#E0C878", fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 5.5vw, 1.5rem)" }}>{f.value}</span>
                  <span className="mt-1.5 leading-tight text-[10.5px]" style={{ color: "rgba(255,255,255,0.88)" }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* === What is UK ETA — feature cards === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Om ETA-systemet</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Vad är UK ETA?</h2>
            <p className="sec-lead">
              UK ETA (Electronic Travel Authorisation) är en elektronisk reseauktorisation som införts av Storbritanniens regering.
              Sedan 2 april 2025 måste medborgare i EU-länder, däribland Sverige, ha ETA före resa till Förenade kungariket.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className={`feature-card reveal reveal-delay-${i + 1}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`icon-circle ${f.tone} shrink-0 !mb-0`}><Icon name={f.icon} /></span>
                  <h3 className="feature-title !mb-0">{f.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Okres waznosci i termin === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Giltighet och tidsfrist</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">ETA:ns giltighetstid och när du ska ansöka</h2>
            <p className="sec-lead">När du ska ansöka och hur länge din ETA förblir giltig.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="card reveal">
              <h3 className="feature-title mb-2">Giltighetstid</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                ETA är giltig i <strong style={{ color: "var(--color-blue)" }}>2 år</strong> från utfärdandet och tillåter flera inresor till Storbritannien. Om ditt pass dock löper ut tidigare än om 2 år upphör ETA samtidigt som passet — förnya i så fall passet först och ansök sedan om ETA.
              </p>
            </div>
            <div className="card reveal reveal-delay-1">
              <h3 className="feature-title mb-2">När du ska ansöka</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Du får oftast besked inom <strong style={{ color: "var(--color-blue)" }}>3 arbetsdagar</strong>, men i vissa fall (t.ex. begäran om ytterligare dokument) kan det ta upp till 30 dagar. Det är bäst att ansöka direkt efter att du planerat resan. När den godkänts får du ett bekräftelsemejl; vid inresan behöver du oftast inte visa upp ETA-numret, men det är bra att spara bekräftelsen (skärmdump eller utskrift).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Co jest potrzebne === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Krav</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Vad du behöver för att ansöka</h2>
            <p className="sec-lead">Förbered dessa fyra saker innan du börjar fylla i ETA-ansökan.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { label: "Giltigt pass", desc: "Foto eller skanning av sidan med foto." },
              { label: "Ansiktsfoto", desc: "Krävs inte för barn 9 år och yngre." },
              { label: "E-postadress", desc: "Till denna adress får du bekräftelsen på din ETA." },
              { label: "Betalkort", desc: "Visa, Mastercard, JCB, American Express, Diners Club." },
            ].map((item, i) => (
              <div key={i} className="card flex gap-4 items-start reveal text-left">
                <span className="flex-shrink-0 w-9 h-9 rounded-full inline-flex items-center justify-center font-semibold text-white" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>{i + 1}</span>
                <div>
                  <h3 className="feature-title !text-base !mb-1">{item.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Application steps === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <p className="kicker">Procedur</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Hur ansöker du om UK ETA?</h2>
            <p className="sec-lead">Hela processen tar några minuter och görs online i fyra steg.</p>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-5">
            {steps.map((s, i) => (
              <div key={s.title} className="card flex items-start gap-5 text-left reveal">
                <div className="flex-1">
                  <p className="kicker !mb-1">{`Steg ${i + 1}`}</p>
                  <h3 className="sec-title text-lg md:text-xl mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{s.desc}</p>
                </div>
                <span className="icon-circle icon-navy shrink-0 !mb-0"><Icon name={s.icon} /></span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/eta-info/application/" className="content-link font-bold">
              Detaljerad guide till ansökan
            </Link>
          </div>
        </div>
      </section>

      {/* === Countries + who needs ETA / transit === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Vem behöver ETA</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Krävs vid inresa till Storbritannien</h2>
            <p className="sec-lead">
              UK ETA gäller medborgare i Sverige och andra EU-länder samt dussintals andra länder som reser in i Storbritannien
              i turist-, affärs- eller transitsyfte. Auktorisationen tillåter vistelse upp till 6 månader.
            </p>
          </div>

          {/* Karta över området som omfattas av ETA */}
          <div className="max-w-sm mx-auto mb-16 reveal reveal-delay-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/uk-eta-map.webp"
              alt="Karta över Storbritannien med det ETA-täckta området markerat: England, Skottland, Wales och Nordirland"
              width={560}
              height={951}
              className="w-full max-w-[320px] h-auto mx-auto block"
            />
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm">
              <span className="inline-flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                <span className="inline-block w-4 h-4 rounded-sm" style={{ background: "#022444" }} />
                Omfattas av ETA (Storbritannien)
              </span>
              <span className="inline-flex items-center gap-2" style={{ color: "var(--color-text-light)" }}>
                <span className="inline-block w-4 h-4 rounded-sm border" style={{ background: "#d3d8de", borderColor: "var(--color-border)" }} />
                Utanför ETA (Irland)
              </span>
            </div>
            <p className="text-center mt-4 text-sm" style={{ color: "var(--color-text-light)" }}>
              ETA omfattar <strong style={{ color: "var(--color-blue)" }}>hela Storbritannien</strong>: England, Skottland, Wales och Nordirland. Republiken Irland omfattas inte av ETA-systemet.
            </p>
          </div>

          {/* Tranzyt */}
          <div className="max-w-3xl mx-auto reveal reveal-delay-2">
            <div className="text-center mb-8">
              <h3 className="sec-title text-2xl md:text-3xl mb-3">Transit genom Storbritannien</h3>
              <p className="sec-lead">Om ETA krävs vid byte beror på vilken typ av transit det gäller.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="card">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-blue)" }}>Flygtransit (airside)</span>
                <p className="feature-title !text-lg mb-2">I regel utan ETA</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                  Om du inte passerar den brittiska gränskontrollen och stannar i flygplatsens transitzon krävs oftast ingen ETA. Om du dock lämnar transitzonen (t.ex. övernattning eller byte på en annan flygplats) behövs en ETA.
                </p>
              </div>
              <div className="card">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-blue)" }}>Landtransit (landside)</span>
                <p className="feature-title !text-lg mb-2">Kräver i regel ETA</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                  Vid passage genom den brittiska gränskontrollen — t.ex. med Eurostar (tåg genom Engelska kanalen) eller färja — och passage av gränskontrollen krävs i regel en ETA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === UK ETA för svenska medborgare (unik landsektion) === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">För svenskar</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">UK ETA för svenska medborgare</h2>
            <p className="max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Sverige är medlem i Europeiska unionen och svenska medborgare kan resa till Storbritannien utan visum för vistelser upp till 6 månader.
              Sedan 2 april 2025 måste du dock ha en UK ETA före varje resa — det gäller semester, tjänsteresor, släktbesök och transit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="card reveal reveal-delay-1">
              <h3 className="feature-title mb-2">Vem måste ha ETA</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Alla svenska medborgare som reser till UK på en kort vistelse, inklusive barn och spädbarn. Varje person gör en egen separat ansökan.
              </p>
            </div>
            <div className="card reveal reveal-delay-2">
              <h3 className="feature-title mb-2">Pass, inte nationellt id-kort</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                För inresa till Storbritannien krävs ett giltigt pass — nationellt id-kort accepteras inte längre (sedan oktober 2021). ETA är kopplad till detta pass.
              </p>
            </div>
            <div className="card reveal reveal-delay-3">
              <h3 className="feature-title mb-2">Populära destinationer från Sverige</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                London, Manchester, Edinburgh, Birmingham och andra städer. En enda ETA omfattar England, Skottland, Wales och Nordirland.
              </p>
            </div>
            <div className="card reveal reveal-delay-4">
              <h3 className="feature-title mb-2">När du ska ansöka</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Helst några dagar före avresan. De flesta beslut fattas inom några timmar, men handläggningen kan ta upp till 72 timmar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">FAQ</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl">Vanliga frågor</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={f.q} className={`card group reveal reveal-delay-${(i % 4) + 1}`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold" style={{ color: "var(--color-blue)" }}>
                  <span>{f.q}</span>
                  <span aria-hidden className="text-xl group-open:rotate-45 transition-transform" style={{ color: "var(--color-red-vivid)" }}>+</span>
                </summary>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--color-text-light)" }}>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq/" className="content-link font-bold">Se alla vanliga frågor</Link>
          </div>
        </div>
      </section>

      {/* === Senaste nyheterna (TOP) === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">Nyheter</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Senaste nyheterna</h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              De viktigaste nyheterna om UK ETA, avgifter och inreseregler till Storbritannien.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {latestNews.map((n, i) => {
              const c = CATEGORY_STYLE[n.category];
              return (
                <Link key={n.slug} href={`/news/${n.slug}/`} className={`card block hover:shadow-lg transition-shadow no-underline reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: c.bg, color: c.fg }}>{CATEGORY_LABEL[n.category]}</span>
                    <time className="text-xs text-gray-500">{n.date}</time>
                  </div>
                  <h3 className="feature-title mb-2">{n.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{n.summary}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/news/" className="content-link font-bold">Se alla nyheter &rarr;</Link>
          </div>
        </div>
      </section>

      {/* === Related pages === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">Guide</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl">Användbara sidor</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {links.map((item, i) => (
              <Link key={item.href} href={item.href} className={`card no-underline group reveal reveal-delay-${(i % 4) + 1}`} style={{ textDecoration: "none" }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="feature-title text-base mb-1">{item.title}</h3>
                    <p className="text-xs" style={{ color: "var(--color-text-light)" }}>{item.desc}</p>
                  </div>
                  <span className="shrink-0 mt-1" style={{ color: "var(--color-red-vivid)" }}><Icon name="arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 text-white text-center" style={{ background: "var(--color-blue)" }}>
        <div className="max-w-3xl mx-auto px-6 reveal">
          <p className="kicker" style={{ color: "rgba(255,255,255,0.8)" }}>Redo att börja?</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "var(--font-display)", color: "white" }}>
            Påbörja din UK ETA-ansökan
          </h2>
          <p className="mb-8 text-white/90 max-w-xl mx-auto">
            Ta fram ditt biometriska pass och ansök via appen eller GOV.UK. Hela processen tar några minuter.
          </p>
          <a href={GOV} target="_blank" rel="noopener noreferrer" className="btn-red text-base">
            Ansök om UK ETA
          </a>
        </div>
      </section>
    </div>
  );
}
