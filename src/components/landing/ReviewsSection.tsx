import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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

const ReviewsSection = () => (
  <section id="reviews" className="section-padding">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Отзывы <span className="text-primary">клиентов</span></h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Что говорят руководители о&nbsp;наших проектах.</p>
        </div>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <AnimatedSection key={i} delay={i * 0.07}>
            <motion.div
              className="glass-card-hover p-7 h-full flex flex-col"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" strokeWidth={1.5} />
              <p className="text-foreground text-sm leading-relaxed mb-5 flex-1">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-yellow-soft flex items-center justify-center text-sm font-bold text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{r.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
