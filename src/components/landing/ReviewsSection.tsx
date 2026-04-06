import { Star } from "lucide-react";

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
  <section id="reviews" className="section-padding bg-surface-warm">
    <div className="container">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Отзывы клиентов</h2>
        <p className="text-muted-foreground text-lg">Что говорят руководители о&nbsp;наших проектах.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
            <div className="border-t border-border pt-3">
              <p className="font-bold text-foreground text-sm">{r.name}</p>
              <p className="text-muted-foreground text-xs">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
