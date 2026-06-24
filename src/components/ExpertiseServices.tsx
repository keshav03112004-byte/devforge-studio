import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { expertiseServices } from "@/lib/data";

export default function ExpertiseServices() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Websites That"
          highlight="Sell For You"
          description="Custom websites and web engines for e-commerce, logistics, and manufacturing — with optional AI integration to work as your 24/7 salesperson."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {expertiseServices.map((service) => (
            <div
              key={service.num}
              className="group gradient-border rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:bg-slate-50"
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-bold text-cyan-500/25 transition-colors group-hover:text-cyan-500/50">
                  {service.num}
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-slate-600 transition-colors group-hover:text-cyan-700"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">{service.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-3">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700">
                      <Check size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-600"
              >
                Learn more
                <ArrowUpRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact" variant="secondary">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
