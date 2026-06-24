import SectionHeading from "./SectionHeading";
import { testimonials, trustedCountries } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="What Our Clients Say"
          description="Real feedback from founders and teams we've built websites and web engines for."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`gradient-border rounded-2xl p-8 ${i === 0 ? "lg:row-span-2" : ""}`}
            >
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700">
                {t.industry}
              </span>
              <blockquote className="mt-5 text-slate-700 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-sm font-bold text-slate-900">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">
                    {t.role} &bull; {t.location}
                  </p>
                </div>
              </div>
              {t.stats.length > 0 && (
                <div className="mt-6 flex gap-6 border-t border-slate-200 pt-6">
                  {t.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-lg font-bold text-slate-900">{s.value}</p>
                      <p className="text-xs text-slate-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">Trusted by teams in:</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            {trustedCountries.map((c) => (
              <span
                key={c}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
