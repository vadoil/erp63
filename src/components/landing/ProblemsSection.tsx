import { AlertTriangle, TrendingUp } from "lucide-react";

const items = [
  {
    pain: "1С не тянет рост, хаос в учёте и данных",
    solution: "Управленческий учёт и финансовая модель",
    desc: "Настроим единую систему учёта с прозрачной аналитикой по всем направлениям бизнеса.",
  },
  {
    pain: "Нет прозрачности по производству/складу",
    solution: "Производство, склад и логистика",
    desc: "Автоматизируем планирование, MES-интеграции и управление запасами в 1С:ERP.",
  },
  {
    pain: "Бюджеты «на коленке», казначейство вручную",
    solution: "Казначейство и бюджетирование",
    desc: "Внедрим контур бюджетирования, БДДС и контроль лимитов в реальном времени.",
  },
  {
    pain: "Доработки без контроля, сроки горят",
    solution: "Регламентированный учёт и отчётность",
    desc: "Приведём в порядок конфигурацию, автоматизируем отчёты для ФНС и управления.",
  },
  {
    pain: "Интеграции с CRM/EDI/BI — костыли",
    solution: "Интеграции и единый контур данных",
    desc: "Построим надёжные шины данных между 1С, CRM, сайтом, EDI, WMS и BI-системами.",
  },
];

const ProblemsSection = () => (
  <section id="problems" className="section-padding bg-surface-warm">
    <div className="container">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Проблемы → <span className="text-primary">Решения</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Знаем боли бизнеса изнутри и&nbsp;превращаем их&nbsp;в&nbsp;системные решения на&nbsp;1С/ERP.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-destructive/90">{item.pain}</p>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <h3 className="font-bold text-foreground">{item.solution}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
