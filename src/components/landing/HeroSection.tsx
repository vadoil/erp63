import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertPhoto from "@/assets/expert-alexey.jpg";

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
  <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
    {/* Subtle warm glow top-left */}
    <div className="absolute top-0 left-0 w-[60%] h-[70%] pointer-events-none" style={{
      background: 'radial-gradient(ellipse at 20% 20%, hsl(44 100% 50% / 0.08) 0%, transparent 60%)',
    }} />
    {/* Cool blue glow bottom-right */}
    <div className="absolute bottom-0 right-0 w-[40%] h-[50%] pointer-events-none" style={{
      background: 'radial-gradient(ellipse at 80% 80%, hsl(210 100% 70% / 0.05) 0%, transparent 60%)',
    }} />

    <div className="container relative z-10 grid lg:grid-cols-2 gap-14 items-center py-16">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Экспертная 1С/ERP-автоматизация
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground">
          Автоматизация бизнеса и&nbsp;ERP на&nbsp;1С{" "}
          <span className="relative inline-block">
            для среднего и&nbsp;крупного бизнеса
            <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-sm" />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          Прозрачность финансов, скорость процессов и&nbsp;полный контроль — от&nbsp;аудита до&nbsp;поддержки по&nbsp;SLA.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="text-base px-8 py-6 font-bold rounded-full shadow-lg" onClick={onConsultation}>
            Получить консультацию <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 font-bold rounded-full border-foreground/10 bg-card/60 backdrop-blur-md hover:bg-card hover:border-primary/30" onClick={onConsultation}>
            Запросить аудит / КП
          </Button>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3 pt-2">
          {proofs.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-foreground/80">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex justify-center">
        <div className="relative">
          <div className="w-72 h-80 rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_rgba(2,6,23,0.12)] ring-1 ring-foreground/5">
            <img src={expertPhoto} alt="Алексей Адволодкин — эксперт по 1С и ERP" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-5 glass-card px-5 py-3.5">
            <p className="font-bold text-foreground text-sm">Алексей Адволодкин</p>
            <p className="text-muted-foreground text-xs">Эксперт по 1С и ERP · Самара</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
