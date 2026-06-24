"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { faqCategories, faqs } from "@/lib/data";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("websites");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Got Questions?"
          description="Everything you need to know about our services"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-cyan-500/20 text-cyan-700"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          {filtered.map((faq, index) => (
            <div key={faq.question} className="gradient-border overflow-hidden rounded-xl">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-slate-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-200 px-6 pb-5">
                  <p className="pt-4 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600">Still have questions?</p>
          <div className="mt-4">
            <Button href="/contact" variant="secondary">
              Talk to our experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
