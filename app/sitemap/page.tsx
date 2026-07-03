import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Webbplatskarta",
  description:
    "Fullständig lista över alla sidor på UK ETA Online - bläddra bland webbplatsens innehåll.",
};

const sections = [
  {
    title: "Huvudsidor",
    links: [
      { href: "/", label: "Startsida" },
      { href: "/faq/", label: "FAQ" },
    ],
  },
  {
    title: "Information om UK ETA",
    links: [
      { href: "/eta-info/what-is-eta/", label: "Vad är UK ETA?" },
      { href: "/eta-info/application/", label: "Så ansöker du" },
      { href: "/eta-info/fee/", label: "Avgifter" },
      { href: "/eta-info/expiration/", label: "Giltighetstid" },
      { href: "/eta-info/status-check/", label: "Kontrollera ansökans status" },
      { href: "/eta-info/required-documents/", label: "Nödvändiga dokument" },
      { href: "/eta-info/official-gov-uk/", label: "Officiella webbplatsen GOV.UK" },
      { href: "/eta-info/mobile-app/", label: "Mobilapp" },
      { href: "/eta-info/transit/", label: "Transit genom Storbritannien" },
      { href: "/eta-info/polish-community/", label: "Svenskar i Storbritannien" },
    ],
  },
  {
    title: "Information om webbplatsen",
    links: [
      { href: "/site-info/about/", label: "Om oss" },
      { href: "/site-info/contact/", label: "Kontakt" },
      { href: "/site-info/privacy-policy/", label: "Integritetspolicy" },
      { href: "/site-info/agreement/", label: "Användarvillkor" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/sitemap.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">WEBBPLATSKARTA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Webbplatskarta
          </h1>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.title} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
          <div className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="font-bold text-[#022444] text-lg mb-3 border-b border-gray-200 pb-2">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#022444] transition underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb items={[{ label: "Webbplatskarta" }]} />
        </div>
      </section>
    </div>
  );
}
