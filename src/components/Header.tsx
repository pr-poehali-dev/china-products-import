import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Icon name="Package" size={20} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl text-primary">
              ChinaImport
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-opensans text-secondary-600 hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-opensans text-secondary-600 hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="font-opensans text-secondary-600 hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="font-opensans text-secondary-600 hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection("contacts")}
              className="bg-primary hover:bg-primary-700"
            >
              Получить консультацию
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left py-2 font-opensans text-secondary-600"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 font-opensans text-secondary-600"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="block w-full text-left py-2 font-opensans text-secondary-600"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="block w-full text-left py-2 font-opensans text-secondary-600"
              >
                Контакты
              </button>
              <Button
                onClick={() => scrollToSection("contacts")}
                className="w-full mt-4 bg-primary hover:bg-primary-700"
              >
                Получить консультацию
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
