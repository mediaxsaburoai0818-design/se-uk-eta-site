"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ borderBottom: "1px solid #d0d0d0", marginBottom: "24px", paddingBottom: "24px" }}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between text-left"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0" }}
          >
            <span style={{ color: "#022444", fontFamily: "var(--font-noto-serif), 'Noto Serif', serif", fontSize: "1.1rem", fontWeight: 700 }}>
              {item.question}
            </span>
            <span style={{ color: "#022444", fontSize: "1.5rem", fontWeight: 700, flexShrink: 0, marginLeft: "16px" }}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div style={{ marginTop: "12px" }}>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.7 }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
