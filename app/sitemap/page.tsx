import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Webbplatskarta",
  description: "Komplett lista over alla sidor pa UK ETA Online.",
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
      { href: "/eta-info/what-is-eta/", label: "Vad ar UK ETA?" },
      { href: "/eta-info/application/", label: "Hur ansoker man?" },
      { href: "/eta-info/fee/", label: "Avgifter" },
      { href: "/eta-info/expiration/", label: "Giltighet" },
      { href: "/eta-info/status-check/", label: "Kontrollera status" },
      { href: "/eta-info/required-documents/", label: "Nodvandiga dokument" },
      { href: "/eta-info/official-gov-uk/", label: "Officiell GOV.UK-webbplats" },
      { href: "/eta-info/transit/", label: "Transit genom Storbritannien" },
      { href: "/eta-info/swedish-community/", label: "Svenska i Storbritannien" },
    ],
  },
  {
    title: "Om webbplatsen",
    links: [
      { href: "/site-info/about/", label: "Om oss" },
      { href: "/site-info/contact/", label: "Kontakt" },
      { href: "/site-info/privacy-policy/", label: "Integritetspolicy" },
      { href: "/site-info/agreement/", label: "Anvandningsvillkor" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "Webbplatskarta" }]} />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-8"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Webbplatskarta
      </h1>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
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
        ))}
      </div>
    </div>
  );
}
