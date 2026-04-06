import { Factory, Truck, ShoppingBag, HardHat, Building2 } from "lucide-react";

const industries = [
  { icon: Factory, name: "Производство", desc: "MES, планирование, управление качеством и ремонтами" },
  { icon: Truck, name: "Дистрибуция и опт", desc: "Управление заказами, логистикой и ценообразованием" },
  { icon: ShoppingBag, name: "Ритейл", desc: "Автоматизация торговых точек, лояльность, аналитика продаж" },
  { icon: HardHat, name: "Строительство", desc: "Проектный учёт, сметы, управление субподрядчиками" },
  { icon: Building2, name: "Холдинги и группы компаний", desc: "Консолидация, МСФО, трансфертное ценообразование" },
];

const IndustriesSection = () => (
  <section id="industries" className="section-padding">
    {/* Soft divider gradient */}
    <div className="absolute inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(15,23,42,0.06) 50%, transparent)' }} />
    <div className="container">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Отрасли</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">Глубокая экспертиза в&nbsp;ключевых секторах экономики.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <div key={i} className="glass-card-hover p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-yellow-soft flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold mb-2 text-foreground">{ind.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
