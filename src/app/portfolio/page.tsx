import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PortfolioSection from "@/components/PortfolioSection";
import Button from "@/components/Button";
import { portfolioProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of live custom websites — Mayur Plus, Mamta Textiles, and Bagariya Transport.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="glow-orb -right-20 top-20 h-72 w-72 bg-violet-600/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Live Client"
            highlight="Websites"
            description={`${portfolioProjects.length} custom websites in production — built for real businesses across India and the UAE.`}
          />
        </div>
      </section>

      <PortfolioSection showAll />

      <section className="pb-24 text-center">
        <Button href="/contact">Discuss Your Project</Button>
      </section>
    </>
  );
}
