import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ UK ETA 2026 - vanliga frågor om ansökan och avgifter",
  description:
    "Svar på de vanligaste frågorna om UK ETA 2026: procedur, avgift £20, giltighet 2 år, avslag på ansökan och undantag.",
};

const faqs = [
  {
    q: "Vad är UK ETA och vad används den till?",
    a: "UK ETA (Electronic Travel Authorisation) är en elektronisk reseauktorisation till Storbritannien. Sedan 2 april 2025 måste EU-medborgare, däribland svenska, ha en ETA före resa till UK i turist-, affärs- eller transitsyfte.",
  },
  {
    q: "Vad kostar en UK ETA-ans\u00f6kan?",
    a: "Avgiften f\u00f6r UK ETA \u00e4r \u00a320 (cirka 250 kr). Avgiften tas ut vid ans\u00f6kan och \u00e5terbetalas inte. Se upp f\u00f6r falska webbplatser som tar \u00a350-150 f\u00f6r samma tj\u00e4nst.",
  },
  {
    q: "Hur lång tid tar handläggningen av en UK ETA-ansökan?",
    a: "De flesta ansökningar handläggs inom några timmar. I vissa fall kan handläggningen ta upp till 72 timmar. Det rekommenderas att du ansöker minst 72 timmar före den planerade resan.",
  },
  {
    q: "Hur länge är en UK ETA giltig?",
    a: "UK ETA är giltig i 2 år från utfärdandet eller tills passet löper ut (beroende på vad som inträffar först). Under denna period kan du resa in i UK flera gånger, varje vistelse upp till 6 månader.",
  },
  {
    q: "Vad \u00e4r skillnaden mellan UK ETA och ett visum?",
    a: "UK ETA \u00e4r en f\u00f6renklad elektronisk auktorisation f\u00f6r korta vistelser (upp till 6 m\u00e5nader). Kostnad: \u00a320, ans\u00f6kan online. Ett brittiskt visum kr\u00e4ver bes\u00f6k p\u00e5 ett viseringscenter, kostar fr\u00e5n \u00a3100 och till\u00e5ter l\u00e4ngre vistelser eller arbete.",
  },
  {
    q: "Omfattas Sverige av kravet på UK ETA?",
    a: "Ja. Sedan 2 april 2025 måste svenska medborgare (och alla EU-medborgare) ha en UK ETA före resa till Storbritannien. Det gäller turist-, affärs- och transitresor.",
  },
  {
    q: "Vad h\u00e4nder om min UK ETA-ans\u00f6kan avsl\u00e5s?",
    a: "Om din UK ETA-ans\u00f6kan avsl\u00e5s f\u00e5r du ett mejl med information om sk\u00e4len till avslaget. Du kan beg\u00e4ra ompr\u00f6vning (administrative review) eller ans\u00f6ka om ett turistvisum, Standard Visitor visa. Avgiften p\u00e5 \u00a320 \u00e5terbetalas inte.",
  },
  {
    q: "Behöver jag UK ETA för transit genom Storbritannien?",
    a: "Ja, UK ETA krävs även vid transit genom Storbritannien, även om du inte lämnar transitzonen på flygplatsen. Det gäller t.ex. byten på Heathrow.",
  },
  {
    q: "Vilka dokument behövs för en UK ETA-ansökan?",
    a: "Du behöver ett giltigt biometriskt pass, en smartphone med kamera (för att skanna passet och ta en selfie), en e-postadress samt ett betalkort (Visa/Mastercard) eller Apple Pay/Google Pay.",
  },
  {
    q: "Kan jag ansöka om UK ETA på telefonen?",
    a: "Ja, du kan ansöka om UK ETA via den officiella mobilappen 'UK ETA' som finns för iOS och Android. Det är det rekommenderade sättet att ansöka, eftersom appen kan skanna passet via NFC.",
  },
  {
    q: "Garanterar UK ETA inresa till Storbritannien?",
    a: "Nej. UK ETA är endast en reseauktorisation. Det slutgiltiga beslutet om inresa fattas av en tjänsteman från UK Border Force vid ankomsten. Tjänstemannen kan neka inresa även med en godkänd ETA.",
  },
  {
    q: "Kan jag arbeta i UK med en UK ETA?",
    a: "Nej. UK ETA ger inte rätt att arbeta i Storbritannien. För arbete krävs ett lämpligt arbetsvisum (t.ex. Skilled Worker visa). ETA är endast avsedd för turist-, affärs- och transitresor.",
  },
  {
    q: "Behöver barn UK ETA?",
    a: "Ja, varje barn som reser till Storbritannien måste ha en egen UK ETA, oavsett ålder. Ett eget biometriskt pass krävs. En förälder eller vårdnadshavare kan ansöka för barnets räkning.",
  },
  {
    q: "Behöver svenskar med settled status UK ETA?",
    a: "Nej. Svenskar som har settled eller pre-settled status inom EU Settlement Scheme behöver inte UK ETA. Deras status är kopplad till passet och verifieras automatiskt vid gränsen.",
  },
  {
    q: "Var kan jag ansöka om UK ETA?",
    a: "Du kan endast ansöka om UK ETA på den officiella GOV.UK-sidan (gov.uk/eta) eller via den officiella mobilappen 'UK ETA'. Använd inte mellanhänder som tar ut överpriser.",
  },
];

export default function FAQ() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/faq.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">FAQ</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Vanliga frågor (FAQ)
          </h1>
          <p className="text-white/85 leading-relaxed">
            Svar på de vanligaste frågorna om UK ETA-systemet och att resa till
            Storbritannien.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(0, 5).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#022444] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(5, 10).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#022444] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(10).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#022444] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="bg-gray-50 border border-gray-200 rounded p-6">
            <h2 className="font-bold text-[#022444] mb-2">
              Hittade du inget svar?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Kontakta oss så svarar vi på din fråga.
            </p>
            <Link
              href="/site-info/contact/"
              className="inline-block bg-[#022444] hover:bg-[#0a3a6b] text-white px-5 py-2 rounded font-bold text-sm transition"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb items={[{ label: "FAQ" }]} />
        </div>
      </section>
    </div>
  );
}
