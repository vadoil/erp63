import { useState } from "react";
import { CheckCircle, ArrowRight, Eye, Settings, Zap, BarChart3, Warehouse, Factory, ShoppingCart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertPhoto from "@/assets/expert-alexey.jpg";

const painTabs = [
  {
    pain: "Доработки бесконтрольны",
    solution: "Управление изменениями + архитектура",
  },
  {
    pain: "Нет единой картины",
    solution: "Единый контур данных и отчётов",
  },
  {
    pain: "Тормозит 1С",
    solution: "Оптимизация + правильная нагрузка",
  },
];

const bullets = [
  { icon: Eye, label: "Прозрачность", desc: "Полная видимость финансов, склада и производства" },
  { icon: Settings, label: "Управляемость", desc: "Контролируемые доработки и архитектура без хаоса" },
  { icon: Zap, label: "Скорость", desc: "Быстрое закрытие периодов и обработка данных" },
];

const contours = [
  { icon: BarChart3, label: "Финансы" },
  { icon: Warehouse, label: "Склад" },
  { icon: Factory, label: "Производство" },
  { icon: ShoppingCart, label: "Продажи" },
  { icon: LineChart, label: "BI" },
];

interface HeroSectionProps {
  onConsultation: () => void;
}

const HeroSection = ({ onConsultation }: HeroSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative min-h-[94vh] flex items-center pt-16 overflow-hidden">
      {/* Glow gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[65%] h-[70%] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 30%, hsl(44 100% 50% / 0.09) 0%, transparent 65%)',
      }} />
      <div className="absolute bottom-[-5%] right-[-10%] w-[45%] h-[55%] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 70% 70%, hsl(210 100% 70% / 0.06) 0%, transparent 60%)',
      }} />

      <div className="container relative z-10 grid lg:grid-cols-[1fr_auto] gap-16 items-center py-12 lg:py-16">
        {/* Left: Text */}
        <div className="space-y-7 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Экспертность в 1С для компаний, которые выросли из Excel
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight text-foreground">
            ERP на 1С, которая{" "}
            <span className="relative inline-block">
              <span className="text-primary">держит</span>
              <span className="absolute bottom-0.5 left-0 w-full h-3 bg-primary/15 -z-10 rounded-sm" />
            </span>{" "}
            бизнес
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            От диагностики до запуска: процессы, данные, интеграции и&nbsp;обучение.
            <br />
            <span className="font-semibold text-foreground">Алексей Адволодкин</span> — руководитель и&nbsp;архитектор решений (Самара).
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-1">
            <Button size="lg" className="text-base px-7 py-6 font-bold rounded-full shadow-lg" onClick={onConsultation}>
              Разобрать вашу ситуацию за 30 минут <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-7 py-6 font-bold rounded-full bg-card/50 backdrop-blur-md border-foreground/8 hover:bg-card hover:border-primary/30"
              onClick={() => document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" })}
            >
              Показать похожие кейсы
            </Button>
          </div>

          {/* Pain tabs - glass switcher */}
          <div className="pt-3">
            <div className="glass-card p-1.5 inline-flex gap-1 mb-4">
              {painTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === i
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.pain}
                </button>
              ))}
            </div>
            <div className="glass-card px-5 py-4 flex items-center gap-3 max-w-lg">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{painTabs[activeTab].solution}</p>
            </div>
          </div>

          {/* Bullets */}
          <div className="flex flex-wrap gap-5 pt-2">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-start gap-2.5 min-w-[140px]">
                  <div className="w-9 h-9 rounded-xl bg-yellow-soft flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-tight">{b.label}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Expert photo + glass panels */}
        <div className="hidden lg:flex flex-col items-center gap-5 relative">
          {/* Expert photo */}
          <div className="relative">
            <div className="w-64 h-80 rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_rgba(2,6,23,0.12)] ring-1 ring-foreground/5">
              <img src={expertPhoto} alt="Алексей Адволодкин — эксперт по 1С и ERP" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-6 glass-card px-4 py-2.5">
              <p className="font-bold text-foreground text-sm">Алексей Адволодкин</p>
              <p className="text-muted-foreground text-xs">Архитектор ERP · Самара</p>
            </div>
          </div>

          {/* Glass panel: Контуры системы */}
          <div className="glass-card p-5 w-72">
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Контуры системы</p>
            <div className="flex items-center justify-between">
              {contours.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-xl bg-yellow-soft flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground">{c.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Glass panel: Результаты проекта */}
          <div className="glass-card p-5 w-72">
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Результаты проекта</p>
            <div className="space-y-3">
              {[
                { label: "Скорость закрытия периода", indicator: "В 3–5 раз быстрее" },
                { label: "Ошибки ручного ввода", indicator: "Снижение до 90%" },
                { label: "Прозрачность данных", indicator: "Реальное время" },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{r.label}</span>
                  <span className="text-xs font-bold text-primary">{r.indicator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
