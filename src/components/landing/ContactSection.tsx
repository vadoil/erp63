import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", company: "", position: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({ title: "Необходимо согласие", description: "Пожалуйста, подтвердите согласие на обработку данных.", variant: "destructive" });
      return;
    }
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Заполните обязательные поля", description: "Имя и телефон обязательны.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="container max-w-2xl text-center space-y-6">
          <div className="w-20 h-20 bg-yellow-soft rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">Спасибо за заявку!</h2>
          <p className="text-muted-foreground text-lg">Мы свяжемся с вами в течение 2 рабочих часов для обсуждения вашего проекта.</p>
          <Button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", company: "", position: "", comment: "" }); setAgreed(false); }} variant="outline" className="rounded-full">
            Отправить ещё одну заявку
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Обсудим ваш <span className="text-primary">проект</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Оставьте заявку — ответим в&nbsp;течение 2&nbsp;рабочих часов.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Имя *</label>
                <Input placeholder="Ваше имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="rounded-xl bg-background/60" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон *</label>
                <Input placeholder="+7 (___) ___-__-__" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="rounded-xl bg-background/60" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Компания</label>
                <Input placeholder="Название компании" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={100} className="rounded-xl bg-background/60" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Должность</label>
                <Input placeholder="Ваша должность" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} maxLength={100} className="rounded-xl bg-background/60" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Комментарий</label>
              <Textarea placeholder="Расскажите о задаче..." value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} rows={4} maxLength={1000} className="rounded-xl bg-background/60" />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="agree" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} className="mt-0.5" />
              <label htmlFor="agree" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                Согласен на обработку персональных данных в&nbsp;соответствии с&nbsp;политикой конфиденциальности.
              </label>
            </div>
            <Button type="submit" size="lg" className="w-full text-base font-bold py-6 rounded-full shadow-lg">
              Отправить заявку <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <div className="space-y-8">
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Телефон", value: "+7 (846) 000-00-00", href: "tel:+78460000000" },
                { icon: Mail, label: "Email", value: "info@erp-samara.ru", href: "mailto:info@erp-samara.ru" },
                { icon: MapPin, label: "Адрес", value: "г. Самара, ул. Примерная, д. 1, офис 100" },
                { icon: Clock, label: "Время ответа", value: "В течение 2 рабочих часов" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-yellow-soft flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-[1.25rem] overflow-hidden ring-1 ring-foreground/5 shadow-[0_10px_30px_rgba(2,6,23,0.08)] h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169401.14849498842!2d50.0516!3d53.2001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661e58029e93fd%3A0xe1012d620e0c0b89!2z0KHQsNC80LDRgNCw!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта — офис в Самаре"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
