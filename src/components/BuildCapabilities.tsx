import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { buildCapabilities } from "@/lib/data";

export default function BuildCapabilities() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-orb -right-20 top-0 h-80 w-80 bg-violet-600/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Every Shape of"
          highlight="Web Product"
          description="From polished public-facing sites to the engines that power them — all custom, all yours."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildCapabilities.map((item) => (
            <div
              key={item.title}
              className="gradient-border group rounded-2xl p-8 transition-all hover:bg-slate-50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700">
                <Check size={18} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
