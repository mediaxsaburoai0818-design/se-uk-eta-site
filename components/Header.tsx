"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Information om UK ETA",
    href: "/eta-info/what-is-eta/",
    children: [
      { label: "Vad ar UK ETA?", href: "/eta-info/what-is-eta/" },
      { label: "Hur ansoker man?", href: "/eta-info/application/" },
      { label: "Avgifter", href: "/eta-info/fee/" },
      { label: "Giltighet", href: "/eta-info/expiration/" },
      { label: "Kontrollera status", href: "/eta-info/status-check/" },
      { label: "Nodvandiga dokument", href: "/eta-info/required-documents/" },
      { label: "Officiell GOV.UK-webbplats", href: "/eta-info/official-gov-uk/" },
      { label: "Transit genom Storbritannien", href: "/eta-info/transit/" },
      { label: "Svenska i Storbritannien", href: "/eta-info/swedish-community/" },
    ],
  },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontakt", href: "/site-info/contact/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: "#1a5276" }}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col" style={{ textDecoration: "none" }}>
            <span
              className="text-xl md:text-2xl font-bold tracking-wide leading-tight"
              style={{
                fontFamily: "var(--font-noto-serif), serif",
                color: "white",
                textDecoration: "none",
              }}
            >
              UK ETA Online
            </span>
            <span className="text-[10px] md:text-xs tracking-wider" style={{ color: "white", textDecoration: "none" }}>
              Reseauktorisering till Storbritannien
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Dropdown: ETA Info */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition">
                Information om UK ETA
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md py-2 min-w-[260px]">
                  {navLinks[0].children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a5276]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faq/"
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition"
            >
              FAQ
            </Link>
            <Link
              href="/site-info/contact/"
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition"
            >
              Kontakt
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-[#e67e22] hover:bg-[#d35400] rounded-lg py-2.5 px-6 text-sm transition shadow-md"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span style={{ color: "white" }}>Ansok om ETA</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Meny"
          >
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 12h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 18h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-white/20 pt-3 space-y-1">
            <p className="px-3 py-1 text-xs uppercase tracking-wider font-bold" style={{ color: "white" }}>
              Information om UK ETA
            </p>
            {navLinks[0].children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block hover:bg-white/10 px-4 py-2 text-sm"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {child.label}
              </Link>
            ))}
            <div className="border-t border-white/20 mt-2 pt-2">
              <Link
                href="/faq/"
                className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/site-info/contact/"
                className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#e67e22] hover:bg-[#d35400] rounded-lg py-3 px-6 text-sm text-center mt-2 transition shadow-md"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span style={{ color: "white" }}>Ansok om ETA</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
