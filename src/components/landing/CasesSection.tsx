import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const cases = [
  {
    industry: "Производство / машиностроение",
    task: "Перейти с устаревшей УПП на 1С:ERP, объединить 3 площадки",
    result: "Единая база, сквозной учёт, -40% время закрытия периода",
    stack: "1С:ERP 2.5, интеграция с WMS",
  },
  {
    industry: "Дистрибуция / FMCG",
    task: "Автоматизировать управление заказами и логистикой",
    result: "Скорость обработки заказов +60%, ошибки отгрузок -85%",
    stack: "1С:ERP, EDI, BI-дашборды",
  },
  {
    industry: "Строительный холдинг",
    task: "Внедрить бюджетирование и казначейство на 6 юр.лиц",
    result: "Консолидация за 2 дня вместо 2 недель",
    stack: "1С:ERP + 1С:УХ, Power BI",
  },
  {
    industry: "Ритейл / сеть магазинов",
    task: "Миграция с франчайзинговой конфигурации на типовую 1С:КА",
    result: "Снижение стоимости поддержки на 55%",
    stack: "1С:КА 2, интеграция с сайтом",
  },
  {
    industry: "Группа компаний / холдинг",
    task: "Построить единый ИТ-контур из разрозненных баз 1С",
    result: "Прозрачная отчётность для совета директоров",
    stack: "1С:ERP, 1С:УХ, шина данных",
  },
];

const CasesSection = () => (
  <section id="cases" className="section-padding">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Наши <span className="text-primary">кейсы</span></h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Реальные результаты наших проектов.</p>
        </div>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.07}>
            <motion.div
              className="glass-card-hover p-7 flex flex-col h-full"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <span className="text-xs font-semibold text-foreground bg-yellow-soft px-3 py-1.5 rounded-full w-fit mb-5">
                {c.industry}
              </span>
              <h3 className="font-bold text-foreground mb-3 leading-snug">{c.task}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">{c.result}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Стек:</span> {c.stack}
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CasesSection;
