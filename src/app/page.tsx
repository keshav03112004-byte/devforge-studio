import Hero from "@/components/Hero";
import CinematicSection from "@/components/CinematicSection";
import DigitalShopSection from "@/components/DigitalShopSection";
import IndustryExpertise from "@/components/IndustryExpertise";
import ExpertiseServices from "@/components/ExpertiseServices";
import BuildCapabilities from "@/components/BuildCapabilities";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustedBy from "@/components/TrustedBy";
import PortfolioSection from "@/components/PortfolioSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <CinematicSection delayMs={50}>
        <DigitalShopSection />
      </CinematicSection>
      <CinematicSection delayMs={80}>
        <IndustryExpertise />
      </CinematicSection>
      <CinematicSection delayMs={100}>
        <ExpertiseServices />
      </CinematicSection>
      <CinematicSection delayMs={120}>
        <PortfolioSection />
      </CinematicSection>
      <CinematicSection delayMs={140}>
        <BuildCapabilities />
      </CinematicSection>
      <CinematicSection delayMs={160}>
        <ProcessSection />
      </CinematicSection>
      <CinematicSection delayMs={180}>
        <WhyChooseUs />
      </CinematicSection>
      <CinematicSection delayMs={200}>
        <TrustedBy />
      </CinematicSection>
      <CinematicSection delayMs={220}>
        <Testimonials />
      </CinematicSection>
      <CinematicSection delayMs={240}>
        <FAQ />
      </CinematicSection>
      <CinematicSection delayMs={260}>
        <ContactForm />
      </CinematicSection>
    </>
  );
}
