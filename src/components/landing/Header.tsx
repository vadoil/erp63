import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Проблемы", href: "#problems" },
  { label: "Услуги", href: "#services" },
  { label: "Отрасли", href: "#industries" },
  { label: "Кейсы", href: "#cases" },
  { label: "Этапы", href: "#steps" },
  { label: "Эксперт", href: "#expert" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(247, 248, 250, 0.72)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
    }}>
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-extrabold text-xl tracking-tight text-foreground">
          ERP<span className="text-primary">Самара</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+78460000000" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" /> +7 (846) 000-00-00
          </a>
          <Button size="sm" className="rounded-full px-5 font-bold" asChild>
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Меню">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div style={{
          background: 'rgba(247, 248, 250, 0.92)',
          backdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(15, 23, 42, 0.06)',
        }}>
          <nav className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">
                {item.label}
              </a>
            ))}
            <Button size="sm" className="w-full mt-2 rounded-full font-bold" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Оставить заявку</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
