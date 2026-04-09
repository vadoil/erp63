import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Внедрений ERP", color: "text-primary" },
  { value: 15, suffix: "+", label: "Лет экспертизы", color: "text-primary" },
  { value: 340, suffix: "%", label: "Средний ROI", color: "text-primary" },
  { value: 3, suffix: "×", label: "Быстрее закрытие", color: "text-primary" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsSection = () => (
  <section className="py-14 relative overflow-hidden">
    <div className="absolute inset-0" style={{
      background: "linear-gradient(135deg, hsl(44 100% 50% / 0.06) 0%, hsl(210 100% 70% / 0.04) 50%, hsl(44 100% 50% / 0.06) 100%)",
    }} />
    <div className="container relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className={`text-4xl md:text-5xl font-extrabold ${s.color} tracking-tight`}>
              <Counter target={s.value} suffix={s.suffix} />
            </p>
            <p className="text-sm text-muted-foreground font-medium mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
