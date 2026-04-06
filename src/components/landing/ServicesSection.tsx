import {
  Search, Settings, Wrench, Link2, RefreshCw, HeadphonesIcon, Gauge, GraduationCap, Database, BarChart3,
} from "lucide-react";

const services = [
  { icon: Search, title: "Предпроектное обследование", desc: "Экспресс-аудит процессов и ИТ-ландшафта. Обычно 2–4 недели.", result: "Дорожная карта и оценка бюджета" },
  { icon: Settings, title: "Внедрение 1С:ERP / УХ / КА", desc: "Полный цикл: от архитектуры до ввода в эксплуатацию.", result: "Рабочая система «под ключ»" },
  { icon: Wrench, title: "Доработка и развитие 1С", desc: "Архитектурные доработки без «костылей» и технического долга.", result: "Чистый код, документация" },
  { icon: Link2, title: "Интеграции (CRM, EDI, BI)", desc: "Надёжные шины данных и API-коннекторы.", result: "Единый контур данных" },
  { icon: RefreshCw, title: "Переход / миграция", desc: "Миграция версий, баз и контуров без потери данных.", result: "Минимальный даунтайм" },
  { icon: HeadphonesIcon, title: "Поддержка по SLA", desc: "Обслуживание и мониторинг с гарантированным временем реакции.", result: "SLA от 2 часов" },
  { icon: Gauge, title: "Оптимизация производительности", desc: "Ускорение работы 1С: анализ узких мест, рефакторинг, кеширование.", result: "Скорость × 3–10" },
  { icon: GraduationCap, title: "Обучение + документация", desc: "Тренинги для пользователей и администраторов, инструкции.", result: "Независимость от подрядчика" },
  { icon: Database, title: "Миграция данных", desc: "Перенос из Excel, устаревших БД и других систем.", result: "100% целостность данных" },
  { icon: BarChart3, title: "BI и аналитика", desc: "Дашборды и отчёты для управленческих решений.", result: "Данные в реальном времени" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Наши услуги</h2>
        <p className="text-muted-foreground text-lg">Полный спектр экспертизы для автоматизации вашего бизнеса на&nbsp;1С.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-yellow-soft flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{s.desc}</p>
              <p className="text-xs font-semibold text-primary">→ {s.result}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
