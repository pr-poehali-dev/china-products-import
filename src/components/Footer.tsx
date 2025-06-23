import Icon from "@/components/ui/icon";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Icon name="Package" size={20} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">
                ChinaImport
              </span>
            </div>
            <p className="font-opensans text-secondary-300 mb-4">
              Профессиональные услуги импорта товаров из Китая под ключ
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Icon name="MessageCircle" size={20} />
              </div>
              <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Icon name="Mail" size={20} />
              </div>
              <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Icon name="Phone" size={20} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Услуги
            </h3>
            <ul className="space-y-2 font-opensans text-secondary-300">
              <li>Поиск поставщиков</li>
              <li>Контроль качества</li>
              <li>Логистика и доставка</li>
              <li>Таможенное оформление</li>
              <li>Финансовое сопровождение</li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Компания
            </h3>
            <ul className="space-y-2 font-opensans text-secondary-300">
              <li>
                <button
                  onClick={() => scrollToSection("advantages")}
                  className="hover:text-white transition-colors"
                >
                  О нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors"
                >
                  Наши услуги
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacts")}
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Контакты
            </h3>
            <div className="space-y-3 font-opensans text-secondary-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@chinaimport.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="mt-1" />
                <span>Москва, ул. Тверская, д. 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 text-center">
          <p className="font-opensans text-secondary-400">
            © 2024 ChinaImport. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
