import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A Clear, Reliable"
          highlight="Process"
          description="No surprises. You always know what we're building, when it ships, and what happens next."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < processSteps.length - 1 && (
                <div
                  className="absolute top-10 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-cyan-500/30 to-violet-500/30 md:block"
                  aria-hidden="true"
                />
              )}
              <div className="gradient-border h-full rounded-2xl p-8">
                <span className="text-4xl font-bold text-cyan-500/40">{step.step}</span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact">Start Your Project</Button>
        </div>
      </div>
    </section>
  );
}
