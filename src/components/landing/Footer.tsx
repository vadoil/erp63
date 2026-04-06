const Footer = () => (
  <footer className="py-14" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <p className="font-extrabold text-xl tracking-tight text-foreground mb-3">
            ERP<span className="text-primary">Самара</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Экспертная автоматизация бизнеса на&nbsp;1С для среднего и&nbsp;крупного бизнеса. Самара и&nbsp;вся Россия.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3 text-sm">Услуги</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Аудит и обследование</li>
            <li>Внедрение 1С:ERP</li>
            <li>Интеграции и BI</li>
            <li>Поддержка по SLA</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3 text-sm">Контакты</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+7 (846) 000-00-00</li>
            <li>info@erp-samara.ru</li>
            <li>г. Самара</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3 text-sm">Документы</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Согласие на обработку данных</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-6 text-center text-xs text-muted-foreground" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
        © {new Date().getFullYear()} ERPСамара. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
