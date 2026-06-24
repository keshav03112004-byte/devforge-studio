"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import AnimateIn from "./AnimateIn";
import BrowserPreview from "./BrowserPreview";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { portfolioProjects, portfolioStats } from "@/lib/data";

export default function PortfolioSection({ showAll = false }: { showAll?: boolean }) {
  const featured = portfolioProjects.find((p) => p.featured);
  const others = portfolioProjects.filter((p) => !p.featured);
  const gridProjects = showAll ? portfolioProjects : others;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="glow-orb -right-32 top-0 h-96 w-96 bg-violet-600/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!showAll && (
          <AnimateIn>
            <SectionHeading
              eyebrow="Our Portfolio"
              title="Live Websites"
              highlight="We Built"
              description="Real client projects in production — e-commerce, logistics, and manufacturing websites with actual screenshots."
            />
          </AnimateIn>
        )}

        {featured && !showAll && (
          <AnimateIn delay={100}>
            <div className="mt-16 gradient-border overflow-hidden rounded-3xl">
              <div className="grid lg:grid-cols-2">
                <div className="order-2 bg-gradient-to-br from-cyan-600/10 via-violet-600/10 to-transparent p-8 sm:p-12 lg:order-1 lg:min-h-[480px]">
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-700">
                    Featured Project
                  </span>
                  <span className="ml-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {featured.category}
                  </span>
                  <h3 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">{featured.title}</h3>
                  <p className="mt-2 text-sm text-cyan-700">{featured.tagline}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {featured.industry} · {featured.location}
                  </p>
                  <p className="mt-4 text-slate-600">{featured.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {featured.stats && (
                    <div className="mt-8 flex flex-wrap gap-8">
                      {featured.stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                          <p className="text-xs text-slate-500">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={`/portfolio/${featured.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-600"
                    >
                      View Case Study
                      <ArrowUpRight size={16} className="ml-1" />
                    </Link>
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Visit Live Site
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
                <div className="order-1 p-6 sm:p-8 lg:order-2 lg:p-10">
                  <BrowserPreview
                    src={featured.image}
                    alt={`${featured.title} website preview`}
                    url={featured.url}
                    priority
                  />
                </div>
              </div>
            </div>
          </AnimateIn>
        )}

        <div
          className={`grid gap-8 sm:grid-cols-2 ${showAll ? "" : "mt-8"} ${gridProjects.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}
        >
          {gridProjects.map((project, index) => (
            <AnimateIn key={project.slug} delay={index * 120}>
              <div className="card-shine gradient-border group flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:bg-slate-50">
                <div className="p-4 pb-0">
                  <BrowserPreview
                    src={project.image}
                    alt={`${project.title} website preview`}
                    url={project.url}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-700">{project.category}</span>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-600 transition-colors group-hover:text-cyan-700"
                    />
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="mt-1 text-sm text-cyan-700/80">{project.tagline}</p>
                  <p className="mt-1 text-xs text-slate-600">
                    {project.industry} · {project.location}
                  </p>
                  <p className="mt-3 flex-1 text-sm text-slate-500">{project.description}</p>
                  {project.stats && (
                    <div className="mt-4 flex flex-wrap gap-4">
                      {project.stats.slice(0, 2).map((s) => (
                        <div key={s.label}>
                          <span className="text-sm font-bold text-slate-900">{s.value}</span>
                          <span className="ml-1 text-xs text-slate-500">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-600"
                    >
                      Case Study
                      <ArrowUpRight size={14} className="ml-1" />
                    </Link>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900"
                    >
                      Live Site
                      <ExternalLink size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {!showAll && (
          <AnimateIn delay={300} className="mt-12 text-center">
            <Button href="/portfolio" variant="secondary">
              Explore Full Portfolio
            </Button>
            <p className="mt-4 text-sm text-slate-500">
              {portfolioStats[0].value} {portfolioStats[0].label.toLowerCase()} across{" "}
              {portfolioStats[2].value} countries
            </p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
