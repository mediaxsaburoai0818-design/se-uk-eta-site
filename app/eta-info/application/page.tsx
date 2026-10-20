import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, pageLd, str } from "@/lib/jsonld";
import { HOME_CTA } from "@/lib/eta-design";
import SubReveal from "@/components/SubReveal";
import "../../eta-sub.css";

export const metadata: Metadata = {
  title: "Så ansöker du om UK ETA 2026 - steg för steg-guide",
  description:
    "Så ansöker du om UK ETA steg för steg — från att samla ihop dokument till godkännande. Beslut vanligtvis inom 3 dagar, ofta på några minuter.",
};

// 下層ページの新デザイン A案（キービジュアルは TOP と同じ左右分割・下の帯なし）okina 2026-10-20
const GOV = "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta";

const REQ = [
  { icon: "req-passport", t: "Giltigt pass", d: "Biometriskt pass (e-pass)" },
  { icon: "req-photo", t: "Smartphone", d: "Med kamera för att skanna passet och ta en selfie" },
  { icon: "req-email", t: "E-postadress", d: "För bekräftelse och beslut" },
  { icon: "req-card", t: "Betalkort", d: "Visa, Mastercard, Apple Pay, Google Pay" },
];

// 関連ガイド（layout の RelatedPages と同じ「次の4ページ」）
const RELATED = [
  { href: "/eta-info/required-documents/", img: "/sub-hero/required-documents.jpg", t: "Dokument som krävs för ansökan" },
  { href: "/eta-info/fee/", img: "/sub/card-fee.jpg", t: "Avgifter för UK ETA" },
  { href: "/eta-info/handlaggningstid/", img: "/sub-hero/mobile-app.jpg", t: "Hur lång tid tar UK ETA?" },
  { href: "/eta-info/status-check/", img: "/sub-hero/status-check.jpg", t: "Kontrollera status på ansökan" },
];

const TOC = [
  { id: "forbered", t: "Innan du börjar" },
  { id: "steg", t: "Ansökan i 6 steg" },
  { id: "efter", t: "Efter godkännandet" },
  { id: "fler", t: "Fler guider" },
];

export default function Application() {
  const steps: { h: string; body: React.ReactNode }[] = [
    {
      h: "Ladda ner appen eller gå till webbplatsen",
      body: (
        <p>
          Ladda ner appen &quot;UK ETA&quot; från App Store (iOS) eller Google Play (Android). Du kan också använda
          webbplatsen{" "}
          <a href={GOV} target="_blank" rel="noopener noreferrer">GOV.UK</a>.
        </p>
      ),
    },
    {
      h: "Skanna passet",
      body: (
        <>
          <p>
            Använd kameran i telefonen för att skanna sidan med fotot i passet. Appen läser automatiskt av uppgifterna
            från det biometriska chippet (NFC). Om telefonen inte har stöd för NFC kan du ange uppgifterna manuellt.
          </p>
          <div className="callout">
            <strong>Tips:</strong> Håll passet mot baksidan av telefonen och håll det stilla i några sekunder tills
            uppgifterna har lästs av.
          </div>
        </>
      ),
    },
    {
      h: "Ta ett ansiktsfoto (selfie)",
      body: (
        <p>
          Appen ber dig ta ett ansiktsfoto för att verifiera din identitet. Fotot bör tas i god belysning, mot en
          neutral bakgrund, utan glasögon och huvudbonad.
        </p>
      ),
    },
    {
      h: "Fyll i formuläret",
      body: (
        <p>
          Besvara frågor om resans syfte, vistelseadress i Storbritannien, resehistorik och säkerhetsfrågor. Formuläret
          är kort och tar cirka 10 minuter.
        </p>
      ),
    },
    {
      h: "Betala (£20)",
      body: <p>Betala £20 med kreditkort, betalkort eller via Apple Pay / Google Pay. Betalningen behandlas omedelbart.</p>,
    },
    {
      h: "Vänta på godkännande",
      body: (
        <p>
          När du har skickat in ansökan får du en bekräftelse via e-post. De flesta sökande får ett automatiskt beslut
          inom några minuter, men vissa ansökningar kan kräva ytterligare granskning. Du får ett e-postmeddelande om
          beslutet.
        </p>
      ),
    },
  ];

  return (
    <div className="etahome xsub">
      <JsonLd data={pageLd({ path: "/eta-info/application/", headline: str(metadata.title), description: str(metadata.description), lang: "sv", type: "Article" })} />
      <SubReveal />

      <section className="kvA">
        <div className="container">
          <div className="grid">
            <div className="rv">
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link href="/">Hem</Link>
                <span aria-hidden="true">/</span>
                <Link href="/eta-info/what-is-eta/">Information om UK ETA</Link>
                <span aria-hidden="true">/</span>
                <span>Så ansöker du</span>
              </nav>
              <span className="eyebrow">Ansökan</span>
              <h1 className="sh1">Så ansöker du om UK ETA</h1>
              <p className="slead">
                Ansökan om UK ETA kan göras via den officiella mobilappen &quot;UK ETA&quot; eller via webbplatsen
                GOV.UK. Nedan presenterar vi en detaljerad guide till hela proceduren.
              </p>
              <div className="meta">
                <span>Källa: <b>GOV.UK</b></span>
                <span><b>6 steg</b> från nedladdning till beslut</span>
              </div>
            </div>
            <div className="photo rv">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sub-hero/application.jpg" alt="Ansökan om UK ETA i mobilen" width={1344} height={768} />
              <div className="tag">6 steg · formuläret tar ca 10 minuter</div>
            </div>
          </div>
        </div>
      </section>

      <section className="body">
        <div className="container">
          <div className="cols">
            <div>
              <div className="sec rv" id="forbered">
                <span className="eyebrow">Förbered</span>
                <h2>Innan du börjar — vad du behöver förbereda</h2>
                <p>Ha det här till hands innan du öppnar appen.</p>
                <div className="req">
                  {REQ.map((r) => (
                    <div className="c" key={r.icon}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/home/${r.icon}.png`} alt="" width={34} height={34} />
                      <b>{r.t}</b>
                      <span>{r.d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sec rv" id="steg">
                <span className="eyebrow">Steg för steg</span>
                <h2>Ansökan i 6 steg</h2>
                <div className="tl">
                  {steps.map((s, i) => (
                    <div className="tstep rv" key={s.h}>
                      <span className="n">0{i + 1}</span>
                      <div className="b">
                        <h3>Steg {i + 1}: {s.h}</h3>
                        {s.body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sec rv" id="efter">
                <span className="eyebrow">Efter godkännandet</span>
                <h2>Efter godkännandet</h2>
                <p>
                  ETA är elektroniskt kopplad till ditt pass — du behöver inte skriva ut några dokument. Flygbolag och
                  gränsmyndigheter verifierar automatiskt din ETA vid incheckningen.
                </p>
                <div className="callout callout--warn">
                  <strong>Observera:</strong> Ansök endast på den officiella webbplatsen{" "}
                  <a href={GOV} target="_blank" rel="noopener noreferrer">GOV.UK</a>{" "}eller via den officiella appen
                  &quot;UK ETA&quot;. Se upp för falska webbplatser som tar ut överdrivna avgifter.
                </div>
              </div>
            </div>

            <aside className="side">
              <div className="box toc">
                <span className="eyebrow">På denna sida</span>
                {TOC.map((t) => (
                  <a key={t.id} href={`#${t.id}`}>{t.t}</a>
                ))}
              </div>
              <div className="box cta-box">
                <b>Redo att ansöka?</b>
                <p>Ansökan görs i appen UK ETA eller på GOV.UK. Avgiften är £20.</p>
                <a className="btn btn--ghost" href={GOV} target="_blank" rel="noopener noreferrer">
                  Ansök om UK ETA <span className="arrow" aria-hidden="true">→</span>
                </a>
                <Link href="/eta-info/fee/" className="sub-link">Se avgifterna →</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="related" id="fler">
        <div className="container">
          <span className="eyebrow">Läs vidare</span>
          <h2>Fler guider om UK ETA</h2>
          <div className="rgrid">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="rcard rv">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.img} alt="" loading="lazy" />
                <span>{r.t}</span>
                <i aria-hidden="true">→</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: HOME_CTA }} />
    </div>
  );
}
