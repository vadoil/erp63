import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import imgProduction from "@/assets/industries/industry-production.jpg";
import imgDistribution from "@/assets/industries/industry-distribution.jpg";
import imgRetail from "@/assets/industries/industry-retail.jpg";
import imgConstruction from "@/assets/industries/industry-construction.jpg";
import imgHolding from "@/assets/industries/industry-holding.jpg";
import imgFood from "@/assets/industries/industry-food.jpg";

const industries = [
  {
    name: "Производство",
    image: imgProduction,
    pains: ["Нет сквозного планирования", "Простои из-за отсутствия данных"],
    solutions: ["MES-интеграция и планирование", "Управление качеством и ремонтами"],
  },
  {
    name: "Дистрибуция и опт",
    image: imgDistribution,
    pains: ["Ошибки в заказах и отгрузках", "Ценообразование вручную"],
    solutions: ["Автоматизация заказов и логистики", "Динамическое ценообразование"],
  },
  {
    name: "Ритейл",
    image: imgRetail,
    pains: ["Разрозненный учёт по точкам", "Нет аналитики продаж"],
    solutions: ["Единая система торговых точек", "BI-дашборды и программы лояльности"],
  },
  {
    name: "Строительство",
    image: imgConstruction,
    pains: ["Сметы расходятся с фактом", "Хаос в субподрядах"],
    solutions: ["Проектный учёт и сметы в 1С", "Контроль субподрядчиков и этапов"],
  },
  {
    name: "Холдинги и ГК",
    image: imgHolding,
    pains: ["Нет консолидированной отчётности", "Трансферты непрозрачны"],
    solutions: ["Консолидация и МСФО", "Трансфертное ценообразование"],
  },
  {
    name: "Пищевое производство",
    image: imgFood,
    pains: ["Сроки годности не отслеживаются", "Рецептуры и партии вручную"],
    solutions: ["Партионный учёт и прослеживаемость", "Управление рецептурами в ERP"],
  },
];

const IndustriesSection = () => (
  <section id="industries" className="section-padding relative">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Наши <span className="text-primary">отрасли</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Глубокая экспертиза в&nbsp;ключевых секторах — знаем боли каждой отрасли изнутри.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <AnimatedSection key={i} delay={i * 0.07}>
            <motion.div
              className="glass-card-hover overflow-hidden h-full flex flex-col"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="glass-card px-3 py-1.5 text-sm font-bold text-foreground">
                    {ind.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                {/* Pains */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Боли</p>
                  {ind.pains.map((pain, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <AlertTriangle className="h-3.5 w-3.5 text-destructive/70 mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="text-xs text-muted-foreground leading-snug">{pain}</span>
                    </div>
                  ))}
                </div>

                {/* Solutions */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Решения</p>
                  {ind.solutions.map((sol, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="text-xs font-medium text-foreground leading-snug">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
