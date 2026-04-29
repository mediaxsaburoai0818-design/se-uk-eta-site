"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300 pb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-3 text-left"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <h3 className="font-bold pr-4" style={{ color: "#1a5276", margin: 0, fontSize: "inherit" }}>
              {item.question}
            </h3>
            <span className="flex-shrink-0 text-xl font-bold" style={{ color: "#1a5276" }}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="pt-2">
              <p className="text-sm leading-relaxed" style={{ color: "#5d6d7e" }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
