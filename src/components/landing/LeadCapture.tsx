import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      toast({ title: "Введите телефон", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("submit-lead", {
        body: {
          name: name.trim() || "Не указано",
          phone: phone.trim(),
          source: `lead-capture (${variant})`,
        },
      });
      if (error) throw error;
      setSent(true);
      toast({ title: "Заявка отправлена!", description: "Свяжемся в течение 2 часов." });
    } catch (err) {
      console.error(err);
      toast({ title: "Не удалось отправить", description: "Попробуйте ещё раз или позвоните нам.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-3">
          {variant === "full" && (
            <Input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full bg-background/60 h-12"
              maxLength={50}
            />
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-full bg-background/60 h-12 flex-1"
              maxLength={20}
            />
            <Button type="submit" disabled={loading} size="lg" className="rounded-full font-bold h-12 px-8 group whitespace-nowrap">
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Отправляем…</> : <>Получить консультацию<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
            </Button>
          </div>
        </form>
        <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
          <Shield className="h-3 w-3" /> Данные защищены. Без спама.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default LeadCapture;
