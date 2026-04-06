const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <p className="font-extrabold text-xl text-primary-foreground mb-3">
            ERP<span className="text-primary">Самара</span>
          </p>
          <p className="text-sm leading-relaxed">
            Экспертная автоматизация бизнеса на&nbsp;1С для среднего и&nbsp;крупного бизнеса. Самара и&nbsp;вся Россия.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3 text-sm">Услуги</h4>
          <ul className="space-y-2 text-sm">
            <li>Аудит и обследование</li>
            <li>Внедрение 1С:ERP</li>
            <li>Интеграции и BI</li>
            <li>Поддержка по SLA</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3 text-sm">Контакты</h4>
          <ul className="space-y-2 text-sm">
            <li>+7 (846) 000-00-00</li>
            <li>info@erp-samara.ru</li>
            <li>г. Самара</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3 text-sm">Документы</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Согласие на обработку данных</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} ERPСамара. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
