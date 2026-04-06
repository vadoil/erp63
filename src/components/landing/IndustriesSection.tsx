import { motion } from "framer-motion";
import { Factory, Truck, ShoppingBag, HardHat, Building2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const industries = [
  { icon: Factory, name: "Производство", desc: "MES, планирование, управление качеством и ремонтами" },
  { icon: Truck, name: "Дистрибуция и опт", desc: "Управление заказами, логистикой и ценообразованием" },
  { icon: ShoppingBag, name: "Ритейл", desc: "Автоматизация торговых точек, лояльность, аналитика продаж" },
  { icon: HardHat, name: "Строительство", desc: "Проектный учёт, сметы, управление субподрядчиками" },
  { icon: Building2, name: "Холдинги и группы компаний", desc: "Консолидация, МСФО, трансфертное ценообразование" },
];

const IndustriesSection = () => (
  <section id="industries" className="section-padding relative">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Наши <span className="text-primary">отрасли</span></h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Глубокая экспертиза в&nbsp;ключевых секторах экономики.</p>
        </div>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <AnimatedSection key={i} delay={i * 0.07}>
              <motion.div
                className="glass-card-hover p-6 text-center h-full"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-soft flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold mb-2 text-foreground">{ind.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
