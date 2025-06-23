import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToContacts = () => {
    const element = document.getElementById("contacts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-primary-50 to-primary-100 pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-secondary-900 mb-6">
              Импорт товаров из Китая{" "}
              <span className="text-primary">под ключ</span>
            </h1>
            <p className="font-opensans text-lg text-secondary-700 mb-8 leading-relaxed">
              Полный спектр услуг по поиску, закупке и доставке товаров напрямую
              с китайских фабрик. От идеи до склада — мы берем все заботы на
              себя.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={scrollToContacts}
                className="bg-primary hover:bg-primary-700 font-opensans font-semibold"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-primary text-primary hover:bg-primary hover:text-white font-opensans font-semibold"
              >
                <Icon name="ArrowDown" size={20} className="mr-2" />
                Наши услуги
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary-200">
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-primary">
                  500+
                </div>
                <div className="font-opensans text-sm text-secondary-600">
                  Проверенных поставщиков
                </div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-primary">
                  7
                </div>
                <div className="font-opensans text-sm text-secondary-600">
                  Лет на рынке
                </div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-primary">
                  1000+
                </div>
                <div className="font-opensans text-sm text-secondary-600">
                  Успешных сделок
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Импорт товаров из Китая"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-opensans font-semibold text-secondary-900">
                    Доставка 15-30 дней
                  </div>
                  <div className="font-opensans text-sm text-secondary-600">
                    По всей России
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
