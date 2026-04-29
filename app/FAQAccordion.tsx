"use client";
import { useState } from "react";
interface FAQItem { question: string; answer: string; }
export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between py-4 text-left" style={{ background: "none", border: "none", cursor: "pointer" }}>
            <span className="font-bold text-sm sm:text-base pr-4" style={{ color: "#1a5276" }}>{item.question}</span>
            <span className="flex-shrink-0 text-xl font-bold" style={{ color: "#1a5276" }}>{openIndex === index ? "\u2212" : "+"}</span>
          </button>
          {openIndex === index && (<div className="pb-4"><p className="text-sm leading-relaxed" style={{ color: "#5d6d7e" }}>{item.answer}</p></div>)}
        </div>
      ))}
    </div>
  );
}
