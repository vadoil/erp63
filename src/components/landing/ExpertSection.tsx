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
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
              <img src={expertPhoto} alt="Алексей Адволодкин" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-extrabold text-xl leading-tight text-center">15+<br /><span className="text-xs font-medium">лет</span></span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Алексей <span className="text-primary">Адволодкин</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Эксперт по автоматизации бизнеса и&nbsp;внедрению ERP-систем на&nbsp;платформе 1С. Специализируюсь на&nbsp;сложных проектах для производственных предприятий, холдингов и&nbsp;дистрибьюторов.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Лично провожу аудит процессов, проектирую архитектуру решения и&nbsp;контролирую качество на&nbsp;каждом этапе. Моя цель — не&nbsp;просто «внедрить 1С», а&nbsp;построить систему, которая реально работает и&nbsp;приносит бизнесу измеримый результат.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-soft flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{c.text}</p>
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
