"use client";

import { Factory, ShoppingCart, Sparkles, Truck } from "lucide-react";
import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";
import { industryExpertise } from "@/lib/data";

const iconMap = {
  "shopping-cart": ShoppingCart,
  truck: Truck,
  factory: Factory,
  sparkles: Sparkles,
};

export default function IndustryExpertise() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Proven Expertise"
            title="Built for Your"
            highlight="Industry"
            description="We don't build generic websites. We deliver specialised solutions for e-commerce, logistics, manufacturing — with AI integration when you need it."
          />
        </AnimateIn>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {industryExpertise.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <AnimateIn key={item.title} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="card-shine gradient-border group flex h-full gap-5 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-cyan-500/30 hover:bg-slate-50">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-600/15 text-cyan-700 ring-1 ring-cyan-500/20 transition-all duration-500 group-hover:ring-cyan-400/40">
                    <Icon size={26} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        e.g. {item.example}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
