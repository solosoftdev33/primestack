import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import IndustriesSection from "@/sections/IndustriesSection";
import SuccessStoriesSection from "@/sections/SuccessStoriesSection";
import WhyPrimeStackSection from "@/sections/WhyPrimeStackSection";
import ProcessSection from "@/sections/ProcessSection";
import ROISection from "@/sections/ROISection";
import TechnologySection from "@/sections/TechnologySection";
import FAQSection from "@/sections/FAQSection";
import ContactSection from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <SuccessStoriesSection />
      <WhyPrimeStackSection />
      <ProcessSection />
      <ROISection />
      <TechnologySection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
