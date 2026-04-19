import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send, X, MessageCircle, Sparkles } from "lucide-react";

const PHONE = "+79966194020";
const PHONE_DISPLAY = "+7 (996) 619-40-20";
const TG_USERNAME = "Allert9";

const FloatingAssistant = () => {
  const [open, setOpen] = useState(false);
  const [bumped, setBumped] = useState(false);

  // Auto-open hint once after 8s
  useEffect(() => {
    const t = setTimeout(() => setBumped(true), 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Right: phone */}
      <div className="fixed right-3 sm:right-5 bottom-3 sm:bottom-5 z-[60] flex flex-col items-end gap-2">
        <AnimatePresence>
          {bumped && !open && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              onClick={() => setOpen(true)}
              className="glass-card px-3 py-2 text-xs font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1.5 shadow-lg"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Получить консультацию
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          href={`tel:${PHONE}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(255,179,0,0.45)] flex items-center justify-center"
          aria-label="Позвонить"
        >
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 relative" strokeWidth={2.2} />
        </motion.a>
      </div>

      {/* Left: telegram + helper */}
      <div className="fixed left-3 sm:left-5 bottom-3 sm:bottom-5 z-[60] flex flex-col items-start gap-2">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="glass-card p-4 w-[280px] sm:w-[320px] shadow-2xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-tight">Алексей Адволодкин</p>
                    <p className="text-[10px] text-muted-foreground">Эксперт по 1С:ERP · онлайн</p>
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground" aria-label="Закрыть">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-sm text-foreground mb-3 leading-relaxed">
                Здравствуйте! Подскажу, подойдёт ли 1С:ERP под ваш бизнес. Как удобнее связаться?
              </p>

              <div className="space-y-2">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-4 w-4" />
                  Позвонить — {PHONE_DISPLAY}
                </a>
                <a
                  href={`https://t.me/${TG_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#229ED9] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4" />
                  Написать в Telegram
                </a>
              </div>

              <p className="text-[10px] text-muted-foreground mt-3 text-center">
                Ответ в течение 5 минут · без спама
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => { setOpen(!open); setBumped(false); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#229ED9] text-white shadow-[0_10px_30px_rgba(34,158,217,0.45)] flex items-center justify-center"
          aria-label="Онлайн-помощник"
        >
          {!open && <span className="absolute inset-0 rounded-full bg-[#229ED9] animate-ping opacity-25" />}
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
            ) : (
              <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
                <Send className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-background">1</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default FloatingAssistant;
