"use client";

import Link from "next/link";
import { useState } from "react";

const subnav = [
  { label: "Vad är UK ETA?", href: "/eta-info/what-is-eta/" },
  { label: "Så ansöker du", href: "/eta-info/application/" },
  { label: "Avgifter", href: "/eta-info/fee/" },
  { label: "Giltighetstid", href: "/eta-info/expiration/" },
  { label: "Kontrollera status", href: "/eta-info/status-check/" },
  { label: "Nödvändiga dokument", href: "/eta-info/required-documents/" },
  { label: "Officiell GOV.UK-sida", href: "/eta-info/official-gov-uk/" },
  { label: "Mobilapp", href: "/eta-info/mobile-app/" },
  { label: "Transit genom Storbritannien", href: "/eta-info/transit/" },
  { label: "Svenskar i Storbritannien", href: "/eta-info/polish-community/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: "var(--color-navy)", borderBottom: "3px solid var(--color-gold)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline">
            {/* Logo C — heraldic shield (crown + ETA) */}
            <svg width="40" height="44" viewBox="0 0 90 100" role="img" aria-label="UK ETA Center" className="h-10 w-auto lg:h-11 shrink-0"><path d="M45 6 L82 18 V52 C82 76 64 90 45 96 C26 90 8 76 8 52 V18 Z" fill="#022444" stroke="#C5A24A" strokeWidth="3"/><g stroke="#C5A24A" strokeWidth="3"><line x1="30" y1="30" x2="30" y2="66"/><line x1="38" y1="30" x2="38" y2="68"/><line x1="45" y1="30" x2="45" y2="70"/><line x1="52" y1="30" x2="52" y2="68"/><line x1="60" y1="30" x2="60" y2="66"/><line x1="26" y1="38" x2="64" y2="38"/><line x1="26" y1="48" x2="64" y2="48"/><line x1="26" y1="58" x2="64" y2="58"/></g><circle cx="30" cy="30" r="3" fill="#C5A24A"/><circle cx="60" cy="30" r="3" fill="#C5A24A"/><text x="45" y="88" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="#ffffff">ETA</text></svg>
            <div className="leading-tight">
              <span
                className="block text-[16px] lg:text-[19px] font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-noto-serif), serif",
                  color: "#ffffff",
                }}
              >
                UK ETA Center
              </span>
              <span className="block text-[10px] lg:text-[11px] tracking-wide text-white/70">
                Reseauktorisering till Storbritannien
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium hover:text-white/75 transition bg-transparent border-0 cursor-pointer"
                style={{ color: "#ffffff" }}
              >
                Information om UK ETA
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-[var(--color-border)] shadow-lg rounded-md py-2 min-w-[260px]">
                  {subnav.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm hover:bg-[var(--color-blue-light)] no-underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/faq/"
              className="px-3 py-2 text-sm font-medium hover:text-white/75 transition no-underline"
              style={{ color: "#ffffff" }}
            >
              FAQ
            </Link>
            <Link
              href="/site-info/contact/"
              className="px-3 py-2 text-sm font-medium hover:text-white/75 transition no-underline"
              style={{ color: "#ffffff" }}
            >
              Kontakt
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-red text-sm"
            >
              Ansök om ETA
            </a>
          </nav>

          <button
            className="lg:hidden p-2 bg-transparent border-0 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 12h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 18h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-3 bg-white rounded-md p-3 space-y-1">
            <p className="px-3 py-1 text-xs uppercase tracking-wider font-bold" style={{ color: "var(--color-navy)" }}>
              Information om UK ETA
            </p>
            {subnav.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {c.label}
              </Link>
            ))}
            <div className="border-t border-[var(--color-border)] mt-2 pt-2">
              <Link
                href="/faq/"
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/site-info/contact/"
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-sm block text-center mt-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ansök om ETA
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
