"use client";

import { Moon, Sparkles, Store } from "lucide-react";
import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { digitalShopMessage } from "@/lib/data";

const icons = [Store, Moon, Sparkles];

export default function DigitalShopSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-500/5" />
      <div className="glow-orb animate-pulse-glow left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 bg-violet-600/10" />
      <div className="glow-orb animate-float right-0 top-0 h-72 w-72 bg-cyan-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Why Your Business Needs a Website"
            title={digitalShopMessage.headline}
            highlight={digitalShopMessage.highlight}
            description={digitalShopMessage.description}
          />
        </AnimateIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {digitalShopMessage.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <AnimateIn key={point.title} delay={index * 120}>
                <div className="card-shine gradient-border group h-full rounded-2xl p-8 transition-all duration-500 hover:bg-slate-50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 text-cyan-700 transition-transform duration-500 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={400} className="mt-12 text-center">
          <p className="text-lg font-medium text-slate-700">
            Your website is your <span className="gradient-text font-bold">e-shop</span> — open always, selling always, representing you professionally.
          </p>
          <div className="mt-6">
            <Button href="/contact">Build Your Digital Sales Engine</Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
