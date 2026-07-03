import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "UK ETA för transit: airside eller landside? Guide 2026", description: "Behöver du ett UK ETA för transit? Om du passerar gränskontrollen (landside) ja; om inte (airside) nej. Officiell guide 2026." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/transit.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA-INFORMATION</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />UK ETA för transit (airside/landside)</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`Om du under transit <strong>passerar gränskontrollen (landside) krävs ett ETA</strong>. Om du <strong>inte passerar passkontrollen (airside) behövs inget ETA</strong>.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Transit: när ett ETA krävs</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Landside-transit (du passerar gränskontrollen): ETA krävs`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Airside-transit (ingen passkontroll): inget ETA krävs`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Enligt det officiella factsheet-et behöver transitresenärer på Heathrow/Manchester som inte passerar UK-passkontrollen för närvarande inget ETA`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Kontrollera alltid transittypen med ditt flygbolag`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Officiella källor (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/eta" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta</a></li><li><a href="https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Hem", href: "/" }, { label: "UK ETA-information", href: "/eta-info/what-is-eta" }, { label: "UK ETA för transit (airside/landside)" }]} /></div>
    </div>);
}
