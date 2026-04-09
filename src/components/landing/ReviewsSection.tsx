import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Дмитрий К.",
    role: "Генеральный директор, производство",
    text: "Алексей и его команда за 4 месяца перевели нас с УПП на ERP. Процесс был прозрачным, ни одного срыва сроков. Теперь у нас единая база на 3 площадки.",
  },
  {
    name: "Ольга М.",
    role: "Финансовый директор, дистрибуция",
    text: "Наконец-то бюджетирование работает как надо. Закрытие периода ускорилось в 3 раза. Отдельное спасибо за терпение с нашей бухгалтерией.",
  },
  {
    name: "Сергей Т.",
    role: "CIO, строительный холдинг",
    text: "Интеграция 1С с нашей CRM и BI — то, что мы не могли решить 2 года. Алексей предложил архитектуру, которая работает стабильно уже год.",
  },
  {
    name: "Анна В.",
    role: "Операционный директор, ритейл",
    text: "Миграция на типовую конфигурацию прошла без остановки бизнеса. Стоимость поддержки снизилась больше чем вдвое. Рекомендую.",
  },
  {
    name: "Игорь Л.",
    role: "Руководитель ИТ, холдинг",
    text: "Профессиональный подход к проектному управлению. Всё по этапам, с документацией и обучением. Команда работает автономно после запуска.",
  },
];

const ReviewCard = ({ r }: { r: typeof reviews[0] }) => (
  <div className="glass-card-hover p-6 h-full flex flex-col">
    <Quote className="h-7 w-7 text-primary/20 mb-3" strokeWidth={1.5} />
    <p className="text-foreground text-sm leading-relaxed mb-4 flex-1">{r.text}</p>
    <div className="flex items-center gap-3 pt-3 border-t border-border">
      <div className="w-9 h-9 rounded-full bg-yellow-soft flex items-center justify-center text-sm font-bold text-primary shrink-0">
        {r.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <p className="font-bold text-foreground text-sm truncate">{r.name}</p>
        <p className="text-muted-foreground text-xs mt-0.5 truncate">{r.role}</p>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-advance on mobile
  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isMobile, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="reviews" className="section-padding">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Социальное доказательство</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-tight">
              Нам доверяют <span className="text-primary">руководители</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Реальные отзывы от людей, принимающих решения.</p>
          </div>
        </AnimatedSection>

        {/* Mobile: carousel */}
        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden min-h-[260px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ReviewCard r={reviews[current]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-5">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-yellow-soft flex items-center justify-center text-primary active:scale-95 transition-transform"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-5" : "bg-border"}`}
                    aria-label={`Отзыв ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-yellow-soft flex items-center justify-center text-primary active:scale-95 transition-transform"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          /* Desktop: grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="h-full">
                  <ReviewCard r={r} />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
