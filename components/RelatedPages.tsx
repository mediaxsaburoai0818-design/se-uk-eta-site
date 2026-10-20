"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// スウェーデン語の /eta-info/ と /uk-entry/ の各ページ末尾に「関連ガイド」を出す（2026-10-16）。
// ⚠️ なぜ必要か: 多くのページが /sitemap/ 等の一覧からしか張られておらず（被リンク0〜1本）、実質孤立していた。
//    同じカテゴリの中で「次の4ページ」を循環で並べる → どのページも同カテゴリの4ページから必ず張られる。
//    ページを足したら下の配列にも足すこと（足し忘れると、そのページには関連ガイドが出ない）。
type P = { href: string; label: string };

const ETA_INFO: P[] = [
  { href: "/eta-info/what-is-eta/", label: "Vad är UK ETA?" },
  { href: "/eta-info/vem-behover/", label: "Vem behöver ett UK ETA?" },
  { href: "/eta-info/application/", label: "Så ansöker du om UK ETA" },
  { href: "/eta-info/required-documents/", label: "Dokument som krävs för ansökan" },
  { href: "/eta-info/fee/", label: "Avgifter för UK ETA" },
  { href: "/eta-info/handlaggningstid/", label: "Hur lång tid tar UK ETA?" },
  { href: "/eta-info/status-check/", label: "Kontrollera status på ansökan" },
  { href: "/eta-info/mobile-app/", label: "UK ETA-mobilappen" },
  { href: "/eta-info/vanliga-fel/", label: "Vanliga fel och UK ETA-appen" },
  { href: "/eta-info/official-gov-uk/", label: "Officiella GOV.UK-sidan" },
  { href: "/eta-info/expiration/", label: "UK ETA:s giltighetstid" },
  { href: "/eta-info/giltighet/", label: "Giltighet och förnyelse" },
  { href: "/eta-info/barn-familj/", label: "UK ETA för barn och familjer" },
  { href: "/eta-info/transit/", label: "Transit genom Storbritannien" },
  { href: "/eta-info/transit-detaljer/", label: "Transit: airside och landside" },
  { href: "/eta-info/eta-eller-visum/", label: "UK ETA eller visum?" },
  { href: "/eta-info/standard-visitor-visa/", label: "Standard Visitor-visum" },
  { href: "/eta-info/eta-avslag/", label: "UK ETA avslag: vad händer nu?" },
  { href: "/eta-info/polish-community/", label: "Svenskar i Storbritannien" },
];

const UK_ENTRY: P[] = [
  { href: "/uk-entry/wjazd-i-wiza/", label: "Inresa till Storbritannien och visum" },
  { href: "/uk-entry/passport-requirements/", label: "Passkrav för resa till Storbritannien" },
  { href: "/uk-entry/eta-stay-duration/", label: "Hur länge får man stanna med en ETA?" },
  { href: "/uk-entry/uk-border-egates/", label: "Passkontroll och eGates" },
  { href: "/uk-entry/uk-customs-rules/", label: "Tullregler i Storbritannien" },
  { href: "/uk-entry/bringing-medicines/", label: "Ta med mediciner" },
  { href: "/uk-entry/airport-security-liquids/", label: "Vätskor i handbagaget" },
  { href: "/uk-entry/smoking-alcohol-rules/", label: "Rökning, alkohol och åldersgränser" },
  { href: "/uk-entry/travelling-with-children/", label: "Resa med barn till Storbritannien" },
  { href: "/uk-entry/lotniska-londynu/", label: "Londons flygplatser" },
  { href: "/uk-entry/lotnisko-heathrow/", label: "Heathrow flygplats (LHR)" },
  { href: "/uk-entry/transport-oyster/", label: "Oyster och kontaktlöst i London" },
  { href: "/uk-entry/driving-in-uk/", label: "Köra bil i Storbritannien" },
  { href: "/uk-entry/money-currency/", label: "Kontanter, valuta och dricks" },
  { href: "/uk-entry/vat-refund/", label: "Momsåterbäring (VAT refund)" },
  { href: "/uk-entry/sim-mobile/", label: "SIM-kort, eSIM och mobilt internet" },
  { href: "/uk-entry/power-plug/", label: "Eluttag och spänning" },
  { href: "/uk-entry/healthcare-nhs/", label: "Sjukvård, NHS och GHIC" },
  { href: "/uk-entry/safety-emergency/", label: "Nödnummer och säkerhet" },
  { href: "/uk-entry/bank-holidays/", label: "Bank holidays 2026" },
];

const PER_PAGE = 4;

// 新デザイン（.xsub）のページは、本文の下に写真カードで同じ「次の4ページ」を出しているので、ここでは出さない
const OWN_RELATED = new Set(["/eta-info/application/"]);

export default function RelatedPages() {
  const pathname = (usePathname() || "/").replace(/\/?$/, "/");
  if (OWN_RELATED.has(pathname)) return null;
  const list = pathname.startsWith("/eta-info/") ? ETA_INFO : pathname.startsWith("/uk-entry/") ? UK_ENTRY : null;
  if (!list) return null;
  const i = list.findIndex((p) => p.href === pathname);
  if (i < 0) return null;
  const items = Array.from({ length: Math.min(PER_PAGE, list.length - 1) }, (_, k) => list[(i + 1 + k) % list.length]);
  const heading = list === ETA_INFO ? "Fler guider om UK ETA" : "Fler guider om resan till Storbritannien";
  return (
    <section className="pb-12 md:pb-16 bg-white">
      <nav className="max-w-4xl mx-auto px-6" aria-label={heading}>
        <h2 className="heading-band mb-4">{heading}</h2>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm">
          {items.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="content-link">{p.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
