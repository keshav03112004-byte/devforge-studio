import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-orb -left-20 top-1/2 h-72 w-72 bg-violet-600/15" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Neo Block Dev"
          title="Why Choose Us?"
          description="Focused expertise, transparent process, and work you can trust — built for teams who care about quality."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.num}
              className="gradient-border group rounded-2xl p-8 transition-all hover:bg-slate-50"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {item.metric}
                </span>
                <span className="text-2xl font-bold text-slate-700">{item.num}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">Ready to build something amazing?</p>
          <div className="mt-4">
            <Button href="/contact">Start Your Project</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
