"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#022444] focus:ring-1 focus:ring-[#022444] transition";

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1
          className="text-2xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
            <span className="deco-line" />
          Meddelandet har skickats
        </h1>
        <p className="text-gray-600 mb-6">
          Tack för att du kontaktar oss. Vi svarar så snart som möjligt.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-2 rounded font-bold text-sm transition"
        >
          Startsida
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/contact.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM WEBBPLATSEN</p>
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">
              Startsida
            </Link>
            <span className="mx-1">/</span>
            <span className="text-gray-800">Kontakt</span>
          </nav>

          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Kontakt
          </h1>
          <p className="text-gray-600">
            Har du en fråga om UK ETA eller vår webbplats? Fyll i formuläret
            nedan.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                För- och efternamn *
              </label>
              <input
                type="text"
                required
                className={inputClass}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-postadress *
              </label>
              <input
                type="email"
                required
                className={inputClass}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ämne *
              </label>
              <input
                type="text"
                required
                className={inputClass}
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meddelande *
              </label>
              <textarea
                required
                rows={6}
                className={inputClass}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-2.5 rounded font-bold text-sm transition"
            >
              Skicka meddelande
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-500">
            <p>
              <strong>Observera:</strong> Vi kan inte ge information om statusen
              för en specifik UK ETA-ansökan. För frågor om en ansökans status,
              vänligen kontakta{" "}
              <a
                href="https://www.gov.uk/contact-ukvi-inside-outside-uk"
                className="text-[#022444] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                UK Visas and Immigration
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
