import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ - Vanliga fragor om UK ETA",
  description:
    "Svar pa vanliga fragor om UK ETA: forfarande, kostnader, giltighet, avslag och mycket mer.",
};

const faqs = [
  {
    q: "Vad ar UK ETA och vad anvands det till?",
    a: "UK ETA (Electronic Travel Authorisation) ar en elektronisk reseauktorisering till Storbritannien. Fran den 2 april 2025 maste EU-medborgare, inklusive svenskar, ha ETA innan resa till UK for turism, affarer eller transit.",
  },
  {
    q: "Hur mycket kostar UK ETA-ansokan?",
    a: "Avgiften for UK ETA ar \u00a310 (cirka 140 SEK). Avgiften debiteras vid insandning av ansokan och aterbetalas inte. Var forsiktig med falska webbplatser som tar ut \u00a350-150 for samma tjanst.",
  },
  {
    q: "Hur lang tid tar handlaggningen av UK ETA?",
    a: "De flesta ansokningar behandlas inom nagra timmar. I vissa fall kan handlaggningen ta upp till 72 timmar. Det rekommenderas att ansoka minst 72 timmar fore planerad resa.",
  },
  {
    q: "Hur lange galler UK ETA-auktoriseringen?",
    a: "UK ETA galler i 2 ar fran utfardandedatumet eller tills passet gar ut (beroende pa vad som intraffar forst). Under denna period kan du resa till UK flera ganger, varje vistelse upp till 6 manader.",
  },
  {
    q: "Vad ar skillnaden mellan UK ETA och visum?",
    a: "UK ETA ar en forenklad elektronisk auktorisering for korta vistelser (upp till 6 manader). Kostnad: \u00a310, ansokan online. Brittiskt visum kraver besok pa visumcenter, kostar fran \u00a3100 och tillater langre vistelser eller arbete.",
  },
  {
    q: "Omfattas Sverige av UK ETA-kravet?",
    a: "Ja. Fran den 2 april 2025 maste svenska medborgare (och alla EU-medborgare) ha UK ETA fore resa till Storbritannien. Detta galler turistresor, affarsresor och transit.",
  },
  {
    q: "Vad hander om min UK ETA-ansokan avslags?",
    a: "Vid avslag pa UK ETA-ansokan far du ett e-postmeddelande med information om orsakerna. Du kan overklaga (administrative review) eller ansoka om turistvisum Standard Visitor visa. Avgiften pa \u00a310 aterbetalas inte.",
  },
  {
    q: "Behover jag UK ETA for transit genom Storbritannien?",
    a: "Ja, UK ETA kravs aven vid transit genom Storbritannien, aven om du inte lamnar transitzonen pa flygplatsen. Detta galler t.ex. byten pa Heathrow.",
  },
  {
    q: "Vilka dokument behovs for att ansoka om UK ETA?",
    a: "Du behover ett giltigt biometriskt pass, en smartphone med kamera (for att skanna passet och ta selfie), en e-postadress samt ett betalkort (Visa/Mastercard) eller Apple Pay/Google Pay.",
  },
  {
    q: "Kan jag ansoka om UK ETA pa telefonen?",
    a: "Ja, UK ETA-ansokan kan goras via den officiella mobilappen 'UK ETA' som finns for iOS och Android. Detta ar det rekommenderade sattet att ansoka eftersom appen mojliggor NFC-skanning av passet.",
  },
  {
    q: "Garanterar UK ETA inresa till Storbritannien?",
    a: "Nej. UK ETA ar enbart en reseauktorisering. Det slutliga beslutet om inresa fattas av en tjanstemn vid UK Border Force vid ankomst. Inresa kan nekas aven med godkand ETA.",
  },
  {
    q: "Kan jag arbeta i UK med UK ETA?",
    a: "Nej. UK ETA ger inte ratt att arbeta i Storbritannien. For arbete kravs lampligt arbetsvisum (t.ex. Skilled Worker visa). ETA ar avsedd enbart for turistbesok, affarsresor och transit.",
  },
  {
    q: "Behover barn UK ETA?",
    a: "Ja, varje barn som reser till Storbritannien maste ha en egen UK ETA oavsett alder. Ett separat biometriskt pass kravs. Ansokan for barnet kan goras av en foralder eller vardnadshavare.",
  },
  {
    q: "Behover svenskar med settled status UK ETA?",
    a: "Nej. Svenskar med settled eller pre-settled status inom ramen for EU Settlement Scheme behover inte UK ETA. Deras status ar kopplad till passet och verifieras automatiskt vid gransen.",
  },
  {
    q: "Var kan jag ansoka om UK ETA?",
    a: "UK ETA-ansokan kan enbart goras pa den officiella GOV.UK-webbplatsen (gov.uk/eta) eller via den officiella mobilappen 'UK ETA'. Anvand inte formedlare som tar ut forhojda avgifter.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-4"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Vanliga fragor (FAQ)
      </h1>
      <p className="text-gray-600 mb-10 leading-relaxed">
        Svar pa vanliga fragor om UK ETA-systemet och resor till
        Storbritannien.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-200 pb-5">
            <h2 className="font-bold text-[#022444] mb-2 text-base">
              {faq.q}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#F5F5F5] border border-gray-200 rounded p-6">
        <h2 className="font-bold text-[#022444] mb-2">
          Hittade du inte svaret?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Kontakta oss sa svarar vi pa din fraga.
        </p>
        <Link
          href="/site-info/contact/"
          className="inline-block bg-[#022444] hover:bg-[#0a3a6b] text-white px-5 py-2 rounded font-bold text-sm transition"
        >
          Kontakta oss
        </Link>
      </div>
    </div>
  );
}
