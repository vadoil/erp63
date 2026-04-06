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
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Кейсы</h2>
        <p className="text-muted-foreground text-lg">Реальные результаты наших проектов.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow flex flex-col">
            <span className="text-xs font-semibold text-primary bg-yellow-soft px-3 py-1 rounded-full w-fit mb-4">
              {c.industry}
            </span>
            <h3 className="font-bold text-foreground mb-2">{c.task}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{c.result}</p>
            <p className="text-xs text-muted-foreground border-t border-border pt-3 mt-auto">
              <span className="font-semibold">Стек:</span> {c.stack}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CasesSection;
