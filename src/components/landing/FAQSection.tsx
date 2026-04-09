import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Сколько стоит внедрение 1С:ERP?",
    a: "Стоимость зависит от масштаба: количества пользователей, контуров автоматизации и уровня доработок. Типовой проект для среднего предприятия — от 1.5 млн ₽. Точную оценку даём после бесплатного аудита.",
  },
  {
    q: "Сколько времени занимает внедрение?",
    a: "Типовой проект — 3–6 месяцев. Сложные холдинговые внедрения — до 12 месяцев. Используем поэтапный подход: первые результаты вы видите уже через 4–6 недель.",
  },
  {
    q: "Работаете ли вы удалённо?",
    a: "Да, 70% наших проектов ведётся удалённо. Базируемся в Самаре, но работаем по всей России. При необходимости выезжаем на площадку.",
  },
  {
    q: "Что если у нас уже есть 1С, но она работает плохо?",
    a: "Проводим аудит текущей системы, находим узкие места и предлагаем план оптимизации. Часто можно улучшить производительность в 3–5 раз без полного перевнедрения.",
  },
  {
    q: "Как гарантируете качество?",
    a: "Фиксированный бюджет, поэтапная сдача, UAT-тестирование перед каждым запуском. Лично курирую каждый проект и несу ответственность за результат.",
  },
  {
    q: "Что входит в поддержку после внедрения?",
    a: "SLA с гарантированным временем реакции от 2 часов, консультации пользователей, мониторинг производительности, развитие системы и обновления.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container max-w-3xl">
      <AnimatedSection>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Частые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-muted-foreground text-lg">Ответы на то, что спрашивают чаще всего.</p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card-hover px-6 py-1 border-none">
              <AccordionTrigger className="text-left font-bold text-foreground text-sm md:text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
