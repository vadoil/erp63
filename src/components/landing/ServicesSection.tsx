import { motion } from "framer-motion";
import {
  Search, Settings, Wrench, Link2, RefreshCw, HeadphonesIcon, Gauge, GraduationCap, Database, BarChart3,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
      <AnimatedSection>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Что мы делаем</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Полный цикл — от аудита до <span className="text-primary">результата</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Не «просто настроим 1С». Построим систему, которая окупается.</p>
        </div>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                className="glass-card-hover p-6 h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-yellow-soft flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
                <p className="text-xs font-semibold text-primary">→ {s.result}</p>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
