import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, TrendingUp, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import imgControl from "@/assets/problems/problem-control.jpg";
import imgData from "@/assets/problems/problem-data.jpg";
import imgBudget from "@/assets/problems/problem-budget.jpg";
import imgProduction from "@/assets/problems/problem-production.jpg";
import imgIntegration from "@/assets/problems/problem-integration.jpg";

const items = [
  {
    pain: "1С не тянет рост",
    solution: "Управленческий учёт и финансовая модель",
    desc: "Настроим единую систему учёта с прозрачной аналитикой по всем направлениям бизнеса.",
    image: imgControl,
    bullets: ["Единая база данных", "Прозрачная аналитика", "Контроль финансов"],
  },
  {
    pain: "Нет прозрачности",
    solution: "Производство, склад и логистика",
    desc: "Автоматизируем планирование, MES-интеграции и управление запасами в 1С:ERP.",
    image: imgProduction,
    bullets: ["Планирование производства", "Управление запасами", "MES-интеграция"],
  },
  {
    pain: "Бюджеты «на коленке»",
    solution: "Казначейство и бюджетирование",
    desc: "Внедрим контур бюджетирования, БДДС и контроль лимитов в реальном времени.",
    image: imgBudget,
    bullets: ["БДДС и бюджеты", "Контроль лимитов", "Реальное время"],
  },
  {
    pain: "Доработки без контроля",
    solution: "Регламентированный учёт и отчётность",
    desc: "Приведём в порядок конфигурацию, автоматизируем отчёты для ФНС и управления.",
    image: imgData,
    bullets: ["Чистая конфигурация", "Автоотчёты ФНС", "Управленческая отчётность"],
  },
  {
    pain: "Интеграции — костыли",
    solution: "Интеграции и единый контур данных",
    desc: "Построим надёжные шины данных между 1С, CRM, сайтом, EDI, WMS и BI-системами.",
    image: imgIntegration,
    bullets: ["Шина данных", "API-коннекторы", "Единый контур"],
  },
];

const ProblemsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="problems" className="section-padding">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Проблемы → <span className="text-primary">Решения</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Знаем боли бизнеса изнутри и&nbsp;превращаем их&nbsp;в&nbsp;системные решения на&nbsp;1С/ERP.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.pain}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="glass-card p-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid lg:grid-cols-2 gap-0"
              >
                {/* Image */}
                <div className="relative h-64 lg:h-auto min-h-[320px] overflow-hidden">
                  <img
                    src={items[active].image}
                    alt={items[active].solution}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width={640}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
                </div>

                {/* Text */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="h-4 w-4 text-destructive" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-semibold text-destructive/80">{items[active].pain}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{items[active].solution}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{items[active].desc}</p>

                  <div className="space-y-3">
                    {items[active].bullets.map((b, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-yellow-soft flex items-center justify-center shrink-0">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemsSection;
