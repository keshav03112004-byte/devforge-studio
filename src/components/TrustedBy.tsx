import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { reviewPlatforms } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by Industry Leaders"
          description="Our quality work has been recognized by top platforms worldwide."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {reviewPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="gradient-border flex flex-col items-center rounded-2xl p-6 text-center"
            >
              <p className="text-lg font-bold text-slate-900">{platform.name}</p>
              <div className="mt-2 flex items-center gap-1">
                <Star size={16} className="fill-amber-400 text-amber-400" />
                <span className="text-xl font-bold text-slate-900">{platform.rating}</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{platform.reviews}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
