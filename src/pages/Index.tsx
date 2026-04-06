import { useRef } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import CasesSection from "@/components/landing/CasesSection";
import StepsSection from "@/components/landing/StepsSection";
import ExpertSection from "@/components/landing/ExpertSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen page-glow relative">
      <div className="noise-overlay" />
      <div className="relative z-10">
        <Header />
        <HeroSection onConsultation={scrollToContact} />
        <ProblemsSection />
        <ServicesSection />
        <IndustriesSection />
        <CasesSection />
        <StepsSection />
        <ExpertSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
