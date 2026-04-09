import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Warehouse, Factory, ShoppingCart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertPhoto from "@/assets/expert-alexey.jpg";

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
  return (
    <section className="relative min-h-[88vh] flex items-center pt-16 overflow-hidden">
      {/* Glow gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[65%] h-[70%] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 30%, hsl(44 100% 50% / 0.09) 0%, transparent 65%)',
      }} />
      <div className="absolute bottom-[-5%] right-[-10%] w-[45%] h-[55%] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 70% 70%, hsl(210 100% 70% / 0.06) 0%, transparent 60%)',
      }} />

      <div className="container relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center py-8 lg:py-10">
        {/* Left: Text — AIDA: Attention + Interest */}
        <div className="space-y-6 max-w-2xl">
          {/* Badge — social proof */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            50+ внедрений · 15 лет экспертизы в 1С
          </motion.div>

          {/* H1 — Attention: конкретная выгода */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-foreground">
            Ваш бизнес растёт —{" "}
            <span className="relative inline-block">
              <span className="text-primary">1С должна успевать</span>
              <motion.span
                className="absolute bottom-0.5 left-0 w-full h-3 bg-primary/15 -z-10 rounded-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* Subtitle — Interest: объяснение */}
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Внедряем ERP на 1С, которая закрывает период в&nbsp;3 раза быстрее, убирает 90% ручных ошибок
            и&nbsp;даёт прозрачность данных в&nbsp;реальном времени.
          </motion.p>

          {/* Desire: конкретика + urgency */}
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
            className="text-base text-foreground font-semibold">
            Алексей Адволодкин — лично ведёт каждый проект от диагностики до запуска.
          </motion.p>

          {/* Action: CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap gap-4 pt-1">
            <Button size="lg" className="text-base px-7 py-6 font-bold rounded-full shadow-lg group" onClick={onConsultation}>
              Получить бесплатный аудит
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-7 py-6 font-bold rounded-full bg-card/50 backdrop-blur-md border-foreground/8 hover:bg-card hover:border-primary/30"
              onClick={() => document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" })}
            >
              Смотреть кейсы
            </Button>
          </motion.div>

          {/* Trust micro-strip */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3.5}
            className="flex items-center gap-6 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Ответ за 2 часа
            </span>
            <span>Самара + вся Россия</span>
            <span>Сертификат 1С:ERP</span>
          </motion.div>
        </div>

        {/* Right: Expert photo + contours panel (bigger photo, no results panel) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
          className="hidden lg:flex flex-col items-center gap-5 relative"
        >
          {/* Expert photo — enlarged */}
          <div className="relative">
            <div className="w-80 h-[26rem] rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_rgba(2,6,23,0.12)] ring-1 ring-foreground/5">
              <img src={expertPhoto} alt="Алексей Адволодкин — эксперт по 1С и ERP" className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-4 -left-6 glass-card px-5 py-3"
            >
              <p className="font-bold text-foreground text-sm">Алексей Адволодкин</p>
              <p className="text-muted-foreground text-xs">Архитектор ERP · 15+ лет</p>
            </motion.div>
          </div>

          {/* Glass panel: Контуры системы */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-5 w-80"
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
