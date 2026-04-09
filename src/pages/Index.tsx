import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import LeadCapture from "@/components/landing/LeadCapture";
import ServicesSection from "@/components/landing/ServicesSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import CasesSection from "@/components/landing/CasesSection";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import StepsSection from "@/components/landing/StepsSection";
import ExpertSection from "@/components/landing/ExpertSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import FAQSection from "@/components/landing/FAQSection";
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
        <StatsSection />
        <ProblemsSection />

        <div className="container pb-10">
          <LeadCapture
            headline="Узнайте, сколько вы теряете без ERP"
            subtext="Оставьте номер — проведём экспресс-диагностику бесплатно"
          />
        </div>

        <ServicesSection />
        <IndustriesSection />
        <CasesSection />

        <UrgencyBanner />

        <StepsSection />
        <ExpertSection />
        <ReviewsSection />

        <div className="container pb-10">
          <LeadCapture
            headline="Готовы обсудить ваш проект?"
            subtext="30-минутная консультация с архитектором ERP — бесплатно"
            variant="full"
          />
        </div>

        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
