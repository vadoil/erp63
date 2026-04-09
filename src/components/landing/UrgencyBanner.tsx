import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencyBanner = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="absolute inset-0" style={{
      background: "linear-gradient(135deg, hsl(44 100% 50% / 0.08) 0%, hsl(280 60% 60% / 0.04) 50%, hsl(210 100% 70% / 0.06) 100%)",
    }} />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
      >
        {/* Decorative gradient blob */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none" style={{
          background: "radial-gradient(circle, hsl(44 100% 50% / 0.12) 0%, transparent 70%)",
        }} />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none" style={{
          background: "radial-gradient(circle, hsl(210 100% 70% / 0.08) 0%, transparent 70%)",
        }} />
        
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Zap className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
            Каждый месяц без ERP — <span className="text-primary">потерянные деньги</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Пока вы сводите данные в Excel, конкуренты принимают решения в реальном времени.
            Начните с бесплатной диагностики — покажем, где именно теряются деньги.
          </p>
          <Button size="lg" className="rounded-full font-bold px-8 py-6 text-base shadow-lg group" asChild>
            <a href="#contact">
              Записаться на диагностику
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default UrgencyBanner;
