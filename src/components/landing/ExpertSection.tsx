import { Award, MapPin, Briefcase, Shield } from "lucide-react";
import expertPhoto from "@/assets/expert-alexey.jpg";

const credentials = [
  { icon: Briefcase, text: "Опыт автоматизации с 2008 года" },
  { icon: Award, text: "Сертифицированный специалист 1С:ERP, 1С:УХ" },
  { icon: MapPin, text: "Самара + проекты по всей России" },
  { icon: Shield, text: "Лично курирую каждый проект" },
];

const ExpertSection = () => (
  <section id="expert" className="section-padding">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_rgba(2,6,23,0.12)] ring-1 ring-foreground/5">
              <img src={expertPhoto} alt="Алексей Адволодкин" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-extrabold text-sm">15+</span>
              </div>
              <span className="text-sm font-bold text-foreground">лет опыта</span>
            </div>
          </div>
        </div>
        <div className="space-y-7">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Алексей <span className="text-primary">Адволодкин</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Эксперт по автоматизации бизнеса и&nbsp;внедрению ERP-систем на&nbsp;платформе 1С. Специализируюсь на&nbsp;сложных проектах для производственных предприятий, холдингов и&nbsp;дистрибьюторов.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Лично провожу аудит процессов, проектирую архитектуру решения и&nbsp;контролирую качество на&nbsp;каждом этапе. Моя цель — не&nbsp;просто «внедрить 1С», а&nbsp;построить систему, которая реально работает и&nbsp;приносит бизнесу измеримый результат.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-soft flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug pt-2">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExpertSection;
