import { motion } from "framer-motion";
import { MessageSquare, Search, FileText, Code2, TestTube, HeadphonesIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: MessageSquare, title: "Экспресс-интервью", desc: "30–60 минут: понимаем ваш бизнес, процессы и задачи", num: "01" },
  { icon: Search, title: "Диагностика / аудит", desc: "Обследуем ИТ-ландшафт, фиксируем «как есть» и «как надо»", num: "02" },
  { icon: FileText, title: "ТЗ и план проекта", desc: "Архитектура решения, этапы, сроки и бюджет", num: "03" },
  { icon: Code2, title: "Разработка и настройка", desc: "Конфигурирование, доработки, интеграции", num: "04" },
  { icon: TestTube, title: "Тестирование и запуск", desc: "UAT, обучение пользователей, миграция данных, go-live", num: "05" },
  { icon: HeadphonesIcon, title: "Поддержка по SLA", desc: "Мониторинг, консультации, развитие системы", num: "06" },
];

const StepsSection = () => (
  <section id="steps" className="section-padding relative">
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'linear-gradient(180deg, hsl(44 100% 50% / 0.03) 0%, transparent 100%)',
    }} />
    <div className="container relative">
      <AnimatedSection>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Прозрачный процесс</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            6 шагов к <span className="text-primary">работающей ERP</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Вы знаете, что происходит на каждом этапе. Без сюрпризов.</p>
        </div>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                className="glass-card-hover p-7 relative overflow-hidden h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <span className="absolute top-4 right-5 text-5xl font-extrabold text-primary/8 select-none">{step.num}</span>
                <div className="w-12 h-12 rounded-2xl bg-yellow-soft flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default StepsSection;
