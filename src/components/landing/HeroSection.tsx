import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Settings, Zap, BarChart3, Warehouse, Factory, ShoppingCart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertPhoto from "@/assets/expert-alexey.jpg";

const painTabs = [
  { pain: "Доработки бесконтрольны", solution: "Управление изменениями + архитектура" },
  { pain: "Нет единой картины", solution: "Единый контур данных и отчётов" },
  { pain: "Тормозит 1С", solution: "Оптимизация + правильная нагрузка" },
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};

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
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Экспертность в 1С для компаний, которые выросли из Excel
          </motion.div>

          {/* H1 */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight text-foreground">
            ERP на 1С, которая{" "}
            <span className="relative inline-block">
              <span className="text-primary">держит</span>
              <motion.span
                className="absolute bottom-0.5 left-0 w-full h-3 bg-primary/15 -z-10 rounded-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            бизнес
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            От диагностики до запуска: процессы, данные, интеграции и&nbsp;обучение.
            <br />
            <span className="font-semibold text-foreground">Алексей Адволодкин</span> — руководитель и&nbsp;архитектор решений (Самара).
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap gap-4 pt-1">
            <Button size="lg" className="text-base px-7 py-6 font-bold rounded-full shadow-lg group" onClick={onConsultation}>
              Разобрать вашу ситуацию за 30 минут
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-7 py-6 font-bold rounded-full bg-card/50 backdrop-blur-md border-foreground/8 hover:bg-card hover:border-primary/30"
              onClick={() => document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" })}
            >
              Показать похожие кейсы
            </Button>
          </motion.div>

          {/* Pain tabs */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="pt-3">
            <div className="glass-card p-1.5 inline-flex gap-1 mb-4">
              {painTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    activeTab === i
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === i && (
                    <motion.div
                      layoutId="pain-tab-bg"
                      className="absolute inset-0 bg-primary rounded-xl shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.pain}</span>
                </button>
              ))}
            </div>
            <div className="glass-card px-5 py-4 flex items-center gap-3 max-w-lg">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium text-foreground"
                >
                  {painTabs[activeTab].solution}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bullets */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
            className="flex flex-wrap gap-5 pt-2">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-start gap-2.5 min-w-[140px]"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-9 h-9 rounded-xl bg-yellow-soft flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-tight">{b.label}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: Expert photo + glass panels */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
          className="hidden lg:flex flex-col items-center gap-5 relative"
        >
          {/* Expert photo */}
          <div className="relative">
            <div className="w-64 h-80 rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_rgba(2,6,23,0.12)] ring-1 ring-foreground/5">
              <img src={expertPhoto} alt="Алексей Адволодкин — эксперт по 1С и ERP" className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-4 -left-6 glass-card px-4 py-2.5"
            >
              <p className="font-bold text-foreground text-sm">Алексей Адволодкин</p>
              <p className="text-muted-foreground text-xs">Архитектор ERP · Самара</p>
            </motion.div>
          </div>

          {/* Glass panel: Контуры системы */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-5 w-72"
          >
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Контуры системы</p>
            <div className="flex items-center justify-between">
              {contours.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-1.5"
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-yellow-soft flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground">{c.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Glass panel: Результаты проекта */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="glass-card p-5 w-72"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
