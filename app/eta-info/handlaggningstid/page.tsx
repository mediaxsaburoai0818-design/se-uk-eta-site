import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "Hur lång tid tar UK ETA? Handläggningstid och när du ansöker", description: "UK ETA avgörs oftast inom 1 dag, men planera för upp till 3 arbetsdagar. Ansök minst 3 arbetsdagar före avresa. Kostnad £20." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/status-check.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA-INFORMATION</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />Hur lång tid tar UK ETA?</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`Beslutet meddelas via e-post från UKVI. <strong>Oftast inom 1 dag</strong>, men planera för <strong>upp till 3 arbetsdagar</strong> (mån–fre). Via appen får många ansökningar ett automatiskt beslut på några minuter.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Tider och tips</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Beslut vanligtvis inom 1 dag; upp till 3 arbetsdagar vid ytterligare kontroller`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Ansök <strong>minst 3 arbetsdagar före</strong> avresa`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Om du efter 3 arbetsdagar inte fått svar, kontrollera skräpposten innan du kontaktar UKVI`}} /></li></ul></div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Kostnad och giltighet</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Kostnad: <strong>£20</strong> (engångsbetalning, ej återbetalningsbar)`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Giltighet: 2 år eller tills passet går ut; flera inresor; max 6 månader per vistelse`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Officiella källor (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/eta/apply" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta/apply</a></li><li><a href="https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Hem", href: "/" }, { label: "UK ETA-information", href: "/eta-info/what-is-eta" }, { label: "Hur lång tid tar UK ETA?" }]} /></div>
    </div>);
}
