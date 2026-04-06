import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertPhoto from "@/assets/expert-alexey.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const proofs = [
  "Опыт автоматизации с 2008 года",
  "Более 120 успешных проектов",
  "Поддержка по SLA 24/7",
  "Работа по всей России",
];

interface HeroSectionProps {
  onConsultation: () => void;
}

const HeroSection = ({ onConsultation }: HeroSectionProps) => (
  <section
    className="relative min-h-[90vh] flex items-center overflow-hidden"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-foreground/80" />
    <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
          Автоматизация бизнеса и&nbsp;ERP на&nbsp;1С{" "}
          <span className="text-primary">для среднего и&nbsp;крупного бизнеса</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
          Прозрачность финансов, скорость процессов и&nbsp;полный контроль — от&nbsp;аудита до&nbsp;поддержки по&nbsp;SLA.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="text-lg px-8 py-6 font-bold" onClick={onConsultation}>
            Получить консультацию <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={onConsultation}>
            Запросить аудит / КП
          </Button>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {proofs.map((p) => (
            <li key={p} className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex justify-center">
        <div className="relative">
          <div className="w-72 h-80 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
            <img src={expertPhoto} alt="Алексей Адволодкин — эксперт по 1С и ERP" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card rounded-xl px-5 py-3 shadow-lg border border-border">
            <p className="font-bold text-foreground text-sm">Алексей Адволодкин</p>
            <p className="text-muted-foreground text-xs">Эксперт по 1С и ERP · Самара</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
