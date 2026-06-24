import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustedBy from "@/components/TrustedBy";
import Button from "@/components/Button";
import { heroStats, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.description,
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Build custom websites and web engines that help businesses look professional, operate efficiently, and grow with confidence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the go-to development partner for teams who want quality web products — without the noise of a full-service agency.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Honesty, craftsmanship, and respect for your time. We say what we mean and deliver what we promise.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="glow-orb -left-20 top-20 h-80 w-80 bg-violet-600/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Neo Block Dev"
            title="We Build Custom"
            highlight="Web Products"
            description={siteConfig.description}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="gradient-border rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="gradient-border rounded-2xl p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700">
                  <value.icon size={28} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm text-slate-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TrustedBy />

      <section className="py-16 text-center">
        <Button href="/contact">Start Your Project</Button>
      </section>
    </>
  );
}
