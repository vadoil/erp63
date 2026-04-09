import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

interface LeadCaptureProps {
  headline: string;
  subtext: string;
  variant?: "compact" | "full";
}

const LeadCapture = ({ headline, subtext, variant = "compact" }: LeadCaptureProps) => {
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      toast({ title: "Введите телефон", variant: "destructive" });
      return;
    }
    setSent(true);
    toast({ title: "Заявка отправлена!", description: "Свяжемся в течение 2 часов." });
  };

  if (sent) {
    return (
      <AnimatedSection>
        <div className="glass-card p-8 text-center max-w-2xl mx-auto">
          <p className="text-lg font-bold text-foreground">✓ Спасибо! Свяжемся в течение 2 часов.</p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection>
      <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto text-center">
        <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-2 tracking-tight">{headline}</h3>
        <p className="text-muted-foreground text-sm mb-6">{subtext}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          {variant === "full" && (
            <Input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full bg-background/60 h-12"
              maxLength={50}
            />
          )}
          <Input
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-full bg-background/60 h-12 flex-1"
            maxLength={20}
          />
          <Button type="submit" size="lg" className="rounded-full font-bold h-12 px-8 group whitespace-nowrap">
            Получить консультацию
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
          <Shield className="h-3 w-3" /> Данные защищены. Без спама.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default LeadCapture;
