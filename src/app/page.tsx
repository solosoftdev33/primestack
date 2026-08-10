import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import IndustriesSection from "@/sections/IndustriesSection";
import SolutionExamplesSection from "@/sections/SolutionExamplesSection";
import WhyPrimeStackSection from "@/sections/WhyPrimeStackSection";
import ProcessSection from "@/sections/ProcessSection";
import AuditSection from "@/sections/AuditSection";
import TechnologySection from "@/sections/TechnologySection";
import FAQSection from "@/sections/FAQSection";
import ContactSection from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <SolutionExamplesSection />
      <WhyPrimeStackSection />
      <ProcessSection />
      <AuditSection />
      <TechnologySection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
