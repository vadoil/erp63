import { MessageSquare, Search, FileText, Code2, TestTube, HeadphonesIcon } from "lucide-react";

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
    {/* Very subtle warm background gradient instead of dark section */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'linear-gradient(180deg, hsl(44 100% 50% / 0.03) 0%, hsl(220 20% 98% / 0) 100%)',
    }} />
    <div className="container relative">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Как мы <span className="text-primary">работаем</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">От первого звонка до стабильной работы системы — прозрачный процесс.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="glass-card-hover p-7 relative overflow-hidden">
              <span className="absolute top-4 right-5 text-5xl font-extrabold text-primary/8 select-none">{step.num}</span>
              <div className="w-12 h-12 rounded-2xl bg-yellow-soft flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default StepsSection;
