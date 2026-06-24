import type { Metadata } from "next";
import ExpertiseServices from "@/components/ExpertiseServices";
import BuildCapabilities from "@/components/BuildCapabilities";
import ProcessSection from "@/components/ProcessSection";
import IndustryExpertise from "@/components/IndustryExpertise";
import DigitalShopSection from "@/components/DigitalShopSection";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites for e-commerce, logistics, and manufacturing — with AI integration. Your website works as your 24/7 digital salesperson.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="glow-orb -left-20 top-20 h-72 w-72 bg-cyan-500/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Websites That"
            highlight="Sell For You"
            description="E-commerce stores, logistics corporate sites, manufacturer catalogues, and AI-powered web engines — built custom for your business."
          />
          <div className="mt-10 text-center">
            <Button href="/contact">Start Your Project</Button>
          </div>
        </div>
      </section>
      <DigitalShopSection />
      <IndustryExpertise />
      <ExpertiseServices />
      <BuildCapabilities />
      <ProcessSection />
    </>
  );
}
