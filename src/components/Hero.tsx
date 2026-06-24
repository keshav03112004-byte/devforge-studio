"use client";

import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";
import Button from "./Button";
import HeroVideoBackground from "./HeroVideoBackground";
import { heroStats, siteConfig } from "@/lib/data";

const expertiseTags = ["E-Commerce", "Logistics", "Manufacturing", "AI Integration"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroVideoBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-28 pb-16 text-center sm:px-6 md:pt-32">
        <AnimateIn>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-cyan-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Fast &middot; Modern &middot; AI-Ready
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-7xl">
            {siteConfig.tagline}
            <br />
            <span className="gradient-text animate-gradient drop-shadow-lg">{siteConfig.taglineHighlight}</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-200 drop-shadow-md sm:text-lg md:text-xl">
            {siteConfig.description}
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {expertiseTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={400}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" className="hover-lift shimmer-btn shadow-lg shadow-violet-500/30">
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              href="/portfolio"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              View Live Portfolio
            </Button>
          </div>
        </AnimateIn>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-6">
          {heroStats.map((stat, index) => (
            <AnimateIn key={stat.label} delay={500 + index * 80} direction="scale">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm md:p-4">
                <p className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-xl font-bold text-transparent md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-gray-300 md:mt-1 md:text-sm">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
