import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, Package, DollarSign, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onConsultation: () => void;
}

const slides = [
  {
    headline: "Прозрачность бизнеса",
    highlight: "в реальном времени",
    sub: "Дашборды, KPI и аналитика — вся картина на одном экране.",
    icon: BarChart3,
    screen: "dashboard",
  },
  {
    headline: "Склад под контролем —",
    highlight: "ноль потерь",
    sub: "Автоматический учёт остатков, резервов и движений товаров.",
    icon: Package,
    screen: "warehouse",
  },
  {
    headline: "Закрытие периода",
    highlight: "в 3 раза быстрее",
    sub: "Финансовая отчётность без ручных операций и ошибок.",
    icon: DollarSign,
    screen: "finance",
  },
  {
    headline: "Производство",
    highlight: "без простоев",
    sub: "Планирование, MES-интеграция и контроль выполнения заказов.",
    icon: Factory,
    screen: "production",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};

/* ---------- SVG screen contents ---------- */
const DashboardScreen = () => (
  <g>
    {/* Bar chart */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const h = 20 + Math.random() * 55;
      return (
        <motion.rect
          key={i}
          x={20 + i * 38}
          y={130 - h}
          width={24}
          rx={4}
          height={h}
          fill={i === 4 ? "hsl(44, 100%, 50%)" : "hsl(220, 14%, 90%)"}
          initial={{ height: 0, y: 130 }}
          animate={{ height: h, y: 130 - h }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
        />
      );
    })}
    {/* Line */}
    <motion.path
      d="M 20 95 Q 60 70, 100 80 T 180 55 T 260 45 T 290 30"
      stroke="hsl(44, 100%, 50%)"
      strokeWidth={2.5}
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    />
    {/* KPI cards */}
    <rect x={20} y={10} width={80} height={32} rx={6} fill="hsl(44, 100%, 50%)" opacity={0.12} />
    <text x={32} y={30} fontSize={11} fontWeight={700} fill="hsl(218, 60%, 9%)">₽ 12.4M</text>
    <rect x={112} y={10} width={80} height={32} rx={6} fill="hsl(150, 60%, 50%)" opacity={0.12} />
    <text x={124} y={30} fontSize={11} fontWeight={700} fill="hsl(218, 60%, 9%)">+24%</text>
    <rect x={204} y={10} width={80} height={32} rx={6} fill="hsl(210, 80%, 60%)" opacity={0.12} />
    <text x={216} y={30} fontSize={11} fontWeight={700} fill="hsl(218, 60%, 9%)">98.2%</text>
  </g>
);

const WarehouseScreen = () => (
  <g>
    {/* Table header */}
    <rect x={15} y={10} width={270} height={24} rx={4} fill="hsl(44, 100%, 50%)" opacity={0.15} />
    <text x={25} y={26} fontSize={9} fontWeight={700} fill="hsl(218, 60%, 9%)">Товар</text>
    <text x={120} y={26} fontSize={9} fontWeight={700} fill="hsl(218, 60%, 9%)">Остаток</text>
    <text x={190} y={26} fontSize={9} fontWeight={700} fill="hsl(218, 60%, 9%)">Резерв</text>
    <text x={245} y={26} fontSize={9} fontWeight={700} fill="hsl(218, 60%, 9%)">Статус</text>
    {/* Rows */}
    {[0, 1, 2, 3, 4].map((i) => {
      const y = 44 + i * 20;
      const names = ["Сталь 09Г2С", "Подшипник 6205", "Редуктор Ц2У", "Электродвигатель", "Кабель ВВГнг"];
      const stocks = ["1 240", "856", "42", "18", "3 200"];
      const reserves = ["320", "120", "12", "5", "800"];
      const colors = ["hsl(150,60%,45%)", "hsl(150,60%,45%)", "hsl(44,100%,50%)", "hsl(0,84%,60%)", "hsl(150,60%,45%)"];
      return (
        <motion.g key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
          <rect x={15} y={y - 10} width={270} height={18} rx={2} fill={i % 2 === 0 ? "hsl(220, 14%, 97%)" : "transparent"} />
          <text x={25} y={y + 2} fontSize={8} fill="hsl(218, 60%, 9%)">{names[i]}</text>
          <text x={130} y={y + 2} fontSize={8} fill="hsl(215, 16%, 34%)">{stocks[i]}</text>
          <text x={200} y={y + 2} fontSize={8} fill="hsl(215, 16%, 34%)">{reserves[i]}</text>
          <circle cx={258} cy={y - 2} r={4} fill={colors[i]} />
        </motion.g>
      );
    })}
    {/* Donut chart */}
    <circle cx={255} cy={115} r={18} fill="none" stroke="hsl(220,14%,90%)" strokeWidth={5} />
    <motion.circle
      cx={255} cy={115} r={18} fill="none" stroke="hsl(44,100%,50%)" strokeWidth={5}
      strokeDasharray="90 113"
      strokeLinecap="round"
      initial={{ strokeDashoffset: 90 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 1 }}
    />
    <text x={245} y={119} fontSize={9} fontWeight={700} fill="hsl(218, 60%, 9%)">79%</text>
  </g>
);

const FinanceScreen = () => (
  <g>
    {/* Big number */}
    <text x={25} y={35} fontSize={22} fontWeight={800} fill="hsl(218, 60%, 9%)">₽ 48.7M</text>
    <text x={25} y={50} fontSize={9} fill="hsl(215, 16%, 34%)">Выручка за период</text>
    {/* Progress bars */}
    {[
      { label: "План", pct: 92, color: "hsl(44,100%,50%)" },
      { label: "Факт", pct: 87, color: "hsl(150,60%,45%)" },
      { label: "Маржа", pct: 34, color: "hsl(210,80%,60%)" },
    ].map((b, i) => (
      <g key={i}>
        <text x={25} y={78 + i * 26} fontSize={8} fill="hsl(215,16%,34%)">{b.label}</text>
        <rect x={70} y={70 + i * 26} width={200} height={8} rx={4} fill="hsl(220,14%,92%)" />
        <motion.rect
          x={70} y={70 + i * 26} width={b.pct * 2} height={8} rx={4} fill={b.color}
          initial={{ width: 0 }}
          animate={{ width: b.pct * 2 }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
        />
        <text x={72 + b.pct * 2} y={78 + i * 26} fontSize={8} fontWeight={600} fill="hsl(218,60%,9%)">{b.pct}%</text>
      </g>
    ))}
  </g>
);

const ProductionScreen = () => (
  <g>
    {/* Gantt-like */}
    <text x={25} y={22} fontSize={10} fontWeight={700} fill="hsl(218,60%,9%)">План производства</text>
    {[
      { name: "Заказ #1204", start: 20, w: 120, color: "hsl(44,100%,50%)" },
      { name: "Заказ #1205", start: 60, w: 100, color: "hsl(150,60%,45%)" },
      { name: "Заказ #1206", start: 30, w: 180, color: "hsl(210,80%,60%)" },
      { name: "Заказ #1207", start: 140, w: 80, color: "hsl(44,100%,50%)" },
      { name: "Заказ #1208", start: 10, w: 150, color: "hsl(280,60%,60%)" },
    ].map((row, i) => (
      <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
        <text x={25} y={48 + i * 22} fontSize={8} fill="hsl(215,16%,34%)">{row.name}</text>
        <motion.rect
          x={95 + row.start * 0.6} y={38 + i * 22} height={12} rx={3} fill={row.color} opacity={0.85}
          initial={{ width: 0 }}
          animate={{ width: row.w * 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
        />
      </motion.g>
    ))}
    {/* Status badges */}
    <rect x={25} y={115} width={50} height={18} rx={9} fill="hsl(150,60%,45%)" opacity={0.15} />
    <text x={33} y={127} fontSize={7} fontWeight={600} fill="hsl(150,60%,35%)">В срок</text>
    <rect x={85} y={115} width={60} height={18} rx={9} fill="hsl(44,100%,50%)" opacity={0.15} />
    <text x={91} y={127} fontSize={7} fontWeight={600} fill="hsl(44,80%,35%)">Загрузка 87%</text>
  </g>
);

const screens: Record<string, React.FC> = {
  dashboard: DashboardScreen,
  warehouse: WarehouseScreen,
  finance: FinanceScreen,
  production: ProductionScreen,
};

const HeroSection = ({ onConsultation }: HeroSectionProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];
  const ScreenComponent = screens[slide.screen];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Glow gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[65%] h-[70%] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 30%, hsl(44 100% 50% / 0.10) 0%, transparent 65%)',
      }} />
      <div className="absolute bottom-[-5%] right-[-10%] w-[45%] h-[55%] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 70% 70%, hsl(210 100% 70% / 0.07) 0%, transparent 60%)',
      }} />

      <div className="container relative z-10 grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-center py-6 lg:py-8">
        {/* Left: Text */}
        <div className="space-y-5 max-w-2xl">
          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            50+ внедрений · 15 лет экспертизы
          </motion.div>

          {/* Static H1 — main site identity */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground"
          >
            Внедрение <span className="text-primary">1С:ERP</span> под&nbsp;ключ
            <span className="block text-xl md:text-2xl lg:text-[1.6rem] font-bold text-muted-foreground mt-2">
              для среднего и крупного бизнеса
            </span>
          </motion.h1>

          {/* Rotating sub-headline (smaller, supporting) */}
          <div className="min-h-[5.5rem] md:min-h-[6rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-extrabold leading-tight tracking-tight text-foreground">
                  {slide.headline}{" "}
                  <span className="relative inline-block">
                    <span className="text-primary">{slide.highlight}</span>
                    <motion.span
                      className="absolute bottom-0.5 left-0 w-full h-2.5 bg-primary/15 -z-10 rounded-sm"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mt-2 max-w-xl">
                  {slide.sub}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    active === i
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "glass-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{s.highlight.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" className="text-base px-7 py-6 font-bold rounded-full shadow-lg group" onClick={onConsultation}>
              Получить бесплатный аудит
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-7 py-6 font-bold rounded-full bg-card/50 backdrop-blur-md border-foreground/8 hover:bg-card hover:border-primary/30"
              onClick={() => document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" })}
            >
              Смотреть кейсы
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3.5}
            className="flex items-center gap-5 pt-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Ответ за 2 часа
            </span>
            <span>Самара + вся Россия</span>
            <span>Сертификат 1С:ERP</span>
          </motion.div>
        </div>

        {/* Right: Laptop with animated screens */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            {/* Laptop frame */}
            <div className="relative mx-auto" style={{ maxWidth: 520 }}>
              {/* Screen bezel */}
              <div className="rounded-t-2xl bg-[hsl(218,60%,12%)] p-[10px] pb-0 shadow-[0_30px_80px_rgba(2,6,23,0.18)]">
                {/* Camera dot */}
                <div className="w-2 h-2 rounded-full bg-[hsl(218,30%,25%)] mx-auto mb-2" />
                {/* Screen */}
                <div className="bg-white rounded-t-lg overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      {/* 1C top bar mock */}
                      <div className="bg-[hsl(44,100%,50%)] h-7 flex items-center px-3 gap-2">
                        <div className="flex gap-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(218,60%,9%)]/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(218,60%,9%)]/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(218,60%,9%)]/20" />
                        </div>
                        <span className="text-[9px] font-bold text-[hsl(218,60%,9%)] tracking-wide">1С:ERP Управление предприятием</span>
                      </div>
                      {/* SVG content */}
                      <svg viewBox="0 0 300 140" className="w-full" style={{ display: "block" }}>
                        <ScreenComponent />
                      </svg>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              {/* Keyboard base */}
              <div className="h-4 bg-gradient-to-b from-[hsl(218,20%,78%)] to-[hsl(218,15%,82%)] rounded-b-xl mx-2" />
              <div className="h-1.5 bg-[hsl(218,15%,85%)] rounded-b-2xl mx-10" />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-3 -left-4 glass-card px-4 py-2.5 flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">ROI +340%</p>
                <p className="text-[10px] text-muted-foreground">Средний результат</p>
              </div>
            </motion.div>

            {/* Floating uptime badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-2 -right-4 glass-card px-4 py-2.5"
            >
              <p className="text-sm font-bold text-foreground">99.9% <span className="text-primary">uptime</span></p>
              <p className="text-[10px] text-muted-foreground">Стабильность системы</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
