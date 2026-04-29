"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="font-bold pr-4" style={{ color: "#1a5276", fontFamily: "var(--font-noto-serif), 'Noto Serif', serif", fontSize: "1.1rem" }}>
              {item.question}
            </span>
            <span className="flex-shrink-0 text-2xl font-bold" style={{ color: "#1a5276" }}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="pb-5">
              <p className="leading-relaxed" style={{ color: "#5d6d7e", fontSize: "0.95rem" }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
