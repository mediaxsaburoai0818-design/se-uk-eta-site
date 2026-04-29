import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

export default function Home() {
  return (
    <div>
      {/* Hero Section - bright with light overlay */}
      <section className="relative text-white min-h-[400px] md:min-h-[520px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-uk.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,82,118,0.55), rgba(26,82,118,0.45))" }} />
        <div className="relative max-w-3xl mx-auto px-6 md:px-16 py-16 md:py-28 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg"
              style={{
                fontFamily: "var(--font-noto-serif), serif",
                color: "white",
              }}
            >
              Elektronisk reseauktorisering
              <br />
              till Storbritannien
            </h1>
            <p className="text-base md:text-xl mb-3 md:mb-4 leading-relaxed drop-shadow" style={{ color: "white" }}>
              Fran den 2 april 2025 behover EU-medborgare UK ETA.
              Handlaggningstiden ar upp till 72 timmar.
            </p>
            <p className="text-xs md:text-sm mb-6 md:mb-8 drop-shadow" style={{ color: "rgba(255,255,255,0.9)" }}>
              Electronic Travel Authorisation (ETA) | Sverige omfattas av kravet
            </p>
            <div className="flex flex-col gap-3 items-center mt-2 w-full" style={{ maxWidth: "360px", margin: "0 auto" }}>
              <a
                href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border-2 border-white bg-[#e67e22] hover:bg-[#d35400] transition shadow-lg text-center mx-auto"
                style={{ color: "white", textDecoration: "none", padding: "18px 24px", width: "100%", maxWidth: "360px" }}
              >
                <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Ansok om UK ETA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accent line */}
      <div className="h-1" style={{ background: "linear-gradient(to right, #e67e22, #f39c12, #e67e22)" }} />

      {/* Key facts - floating cards on light blue */}
      <section style={{ backgroundColor: "#ebf5fb" }} className="py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #e67e22" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-payment.png" alt="" width={40} height={40} className="mx-auto mb-2" />
              <p className="text-3xl md:text-4xl font-bold" style={{ color: "#1a5276" }}>&pound;10-20</p>
              <p className="text-sm mt-2" style={{ color: "#5d6d7e" }}>Ansokningsavgift</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #e67e22" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-clock.png" alt="" width={40} height={40} className="mx-auto mb-2" />
              <p className="text-3xl md:text-4xl font-bold" style={{ color: "#1a5276" }}>72h</p>
              <p className="text-sm mt-2" style={{ color: "#5d6d7e" }}>Max handlaggningstid</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #e67e22" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-calendar.png" alt="" width={40} height={40} className="mx-auto mb-2" />
              <p className="text-3xl md:text-4xl font-bold" style={{ color: "#1a5276" }}>2 ar</p>
              <p className="text-sm mt-2" style={{ color: "#5d6d7e" }}>Giltighetstid</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #e67e22" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-suitcase.png" alt="" width={40} height={40} className="mx-auto mb-2" />
              <p className="text-3xl md:text-4xl font-bold" style={{ color: "#1a5276" }}>6 man.</p>
              <p className="text-sm mt-2" style={{ color: "#5d6d7e" }}>Max vistelse i UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* UK ETA overview - white bg */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#1a5276", color: "white" }}>
            Vad ar UK ETA?
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: "#5d6d7e" }}>
            UK ETA (Electronic Travel Authorisation) ar en elektronisk
            reseauktorisering som infordes av Storbritanniens regering. Fran
            den 2 april 2025 maste EU-medborgare, inklusive svenska medborgare,
            erhalla ETA innan resa till Forenade kungariket.
          </p>
          <p className="mb-6 leading-relaxed" style={{ color: "#5d6d7e" }}>
            ETA ersatter tidigare regler for fri rorlighet och kravs for
            turistbesok, affarsresor eller transit. Ansokan gors online eller
            via mobilapp och efter godkannande ar den giltig i 2 ar.
          </p>
          <Link
            href="/eta-info/what-is-eta/"
            className="font-bold underline underline-offset-2 transition"
            style={{ color: "#1a5276" }}
          >
            Las mer om UK ETA &rarr;
          </Link>
        </div>
      </section>

      {/* Application steps - light blue bg */}
      <section style={{ backgroundColor: "#ebf5fb" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#1a5276", color: "white" }}>
            Hur ansoker man om UK ETA?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-1 pb-1" style={{ color: "#1a5276", borderBottom: "2px solid #1a5276" }}>
                Ladda ner appen UK ETA
              </h3>
              <p className="text-sm mt-2" style={{ color: "#5d6d7e" }}>
                Ladda ner appen &quot;UK ETA&quot; fran App Store eller Google Play,
                eller besok GOV.UK:s webbplats.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-1 pb-1" style={{ color: "#1a5276", borderBottom: "2px solid #1a5276" }}>
                Skanna passet och ta ett foto
              </h3>
              <p className="text-sm mt-2" style={{ color: "#5d6d7e" }}>
                Skanna ditt biometriska pass med telefonen och ta ett
                ansiktsfoto (selfie).
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-1 pb-1" style={{ color: "#1a5276", borderBottom: "2px solid #1a5276" }}>
                Fyll i formularet och betala (&pound;10)
              </h3>
              <p className="text-sm mt-2" style={{ color: "#5d6d7e" }}>
                Ange personuppgifter, reseinformation och betala med
                kort eller Apple/Google Pay.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-1 pb-1" style={{ color: "#1a5276", borderBottom: "2px solid #1a5276" }}>
                Vanta pa godkannande
              </h3>
              <p className="text-sm mt-2" style={{ color: "#5d6d7e" }}>
                De flesta ansokningar behandlas inom nagra timmar,
                men det kan ta upp till 72 timmar.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/eta-info/application/"
              className="font-bold underline underline-offset-2 transition"
              style={{ color: "#1a5276" }}
            >
              Detaljerad guide om ansokan &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview - white bg */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#1a5276", color: "white" }}>
            Vanliga fragor
          </h2>

          <FAQAccordion items={[
            { question: "Behover svenskar UK ETA?", answer: "Ja. Fran den 2 april 2025 maste svenska medborgare (och ovriga EU-medborgare) ha UK ETA innan resa till Storbritannien. Detta galler turistresor, affarsresor och transit." },
            { question: "Hur mycket kostar UK ETA och hur lange galler den?", answer: "Avgiften for UK ETA ar \u00a310 (cirka 140 SEK). Auktoriseringen galler i 2 ar fran utfardandedatumet och tillater flera inresor till UK, varje vistelse upp till 6 manader." },
            { question: "Vad ar skillnaden mellan UK ETA och visum?", answer: "UK ETA ar en forenklad elektronisk auktorisering for korta vistelser (upp till 6 manader). Kostnaden ar \u00a310 och ansokan gors online. Brittiskt visum kraver besok pa ett visumcenter, kostar fran \u00a3100 och tillater langre vistelser eller arbete." },
          ]} />

          <div className="mt-6">
            <Link
              href="/faq/"
              className="font-bold underline underline-offset-2 transition"
              style={{ color: "#1a5276" }}
            >
              Se alla fragor i FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Related pages - light blue bg */}
      <section style={{ backgroundColor: "#ebf5fb" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#1a5276", color: "white" }}>
            Anvandbar information
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { href: "/eta-info/what-is-eta/", title: "Vad ar UK ETA?", desc: "Grundlaggande information om ETA-systemet", img: "/images/card-what-is-eta.png" },
              { href: "/eta-info/application/", title: "Hur ansoker man?", desc: "Steg for steg genom formularet", img: "/images/card-application.png" },
              { href: "/eta-info/fee/", title: "Avgifter for UK ETA", desc: "Detaljer om kostnader", img: "/images/card-fee.png" },
              { href: "/eta-info/expiration/", title: "Giltighetstid", desc: "Nar ska du fornya din ETA-auktorisering", img: "/images/card-validity.png" },
              { href: "/eta-info/required-documents/", title: "Nodvandiga dokument", desc: "Vad du behover forbereda innan ansokan", img: "/images/card-documents.png" },
              { href: "/eta-info/official-gov-uk/", title: "Officiell GOV.UK-webbplats", desc: "Lank till den officiella webbplatsen", img: "/images/card-gov-uk.png" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block overflow-hidden transition hover:shadow-lg"
                style={{ textDecoration: "none", borderRadius: "12px", backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.title} className="w-full h-auto object-cover" style={{ aspectRatio: "4/3" }} />
                <div style={{ padding: "14px 16px" }}>
                  <h3 className="text-sm font-bold mb-1" style={{ color: "#1a5276" }}>{item.title}</h3>
                  <p className="text-xs" style={{ color: "#5d6d7e" }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - warm accent */}
      <section style={{ backgroundColor: "#1a5276", marginBottom: "20px" }} className="pt-16 pb-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-16">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-noto-serif), serif",
              color: "white",
            }}
          >
            Borja din UK ETA-ansokan
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Forbered ditt biometriska pass och ansok via appen eller
            GOV.UK:s webbplats.
          </p>
          <div style={{ margin: "0 auto" }}>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border-2 border-white bg-[#e67e22] hover:bg-[#d35400] transition shadow-lg text-center mx-auto"
              style={{ color: "white", textDecoration: "none", padding: "18px 24px", width: "100%", maxWidth: "360px" }}
            >
              <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Ansok om UK ETA</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
