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
  <section id="steps" className="section-padding bg-foreground">
    <div className="container">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-foreground">
          Как мы <span className="text-primary">работаем</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg">От первого звонка до стабильной работы системы — прозрачный процесс.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="relative bg-foreground/50 border border-primary-foreground/10 rounded-xl p-6 hover:border-primary/40 transition-colors">
              <span className="text-5xl font-extrabold text-primary/20 absolute top-4 right-4">{step.num}</span>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-primary-foreground mb-2">{step.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default StepsSection;
