import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "Vanliga fel vid UK ETA-ansökan och den officiella appen 2026", description: "Vanliga fel vid UK ETA-ansökan: passuppgifter som inte stämmer, fotokrav, betalning och falska webbplatser. Använd den officiella UK ETA-appen." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/mobile-app.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA-INFORMATION</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />Vanliga fel och UK ETA-appen</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`Många problem beror på <strong>uppgifter som inte stämmer</strong> med passet. Använd alltid den <strong>officiella appen ”UK ETA”</strong> och kontrollera uppgifterna innan du skickar.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Fel att undvika</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Uppgifterna måste stämma exakt med passet: avvikelser orsakar förseningar eller avslag`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Foton som krävs: ansiktet och alla passsidor, skarpa och korrekta`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Betalning (£20): Apple Pay/Google Pay/kort (Amex, JCB, Mastercard, Visa); 3D Secure-autentisering kan krävas`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Biometriskt pass (ePassport-symbol) krävs för att läsa chippet`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Se upp för falska webbplatser som imiterar regeringen och tar ut högre avgifter: använd endast GOV.UK`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Officiella källor (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/guidance/using-the-uk-eta-app" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/guidance/using-the-uk-eta-app</a></li><li><a href="https://www.gov.uk/eta/apply" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta/apply</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Hem", href: "/" }, { label: "UK ETA-information", href: "/eta-info/what-is-eta" }, { label: "Vanliga fel och UK ETA-appen" }]} /></div>
    </div>);
}
