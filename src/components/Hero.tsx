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
      className="bg-gradient-to-br from-primary-500 via-purple-600 to-accent-500 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white/90 font-opensans text-sm">
                🚀 Профессиональный импорт
              </span>
            </div>
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Импорт товаров из Китая{" "}
              <span className="bg-gradient-to-r from-accent-400 to-yellow-300 bg-clip-text text-transparent">
                под ключ
              </span>
            </h1>
            <p className="font-opensans text-xl text-white/90 mb-8 leading-relaxed">
              Полный спектр услуг по поиску, закупке и доставке товаров напрямую
              с китайских фабрик. От идеи до склада — мы берем все заботы на
              себя.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={scrollToContacts}
                className="bg-white text-primary-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 font-opensans font-semibold shadow-xl"
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
                className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 font-opensans font-semibold"
              >
                <Icon name="ArrowDown" size={20} className="mr-2" />
                Наши услуги
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-accent-300 mb-1">
                  500+
                </div>
                <div className="font-opensans text-sm text-white/80">
                  Проверенных поставщиков
                </div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-accent-300 mb-1">
                  7
                </div>
                <div className="font-opensans text-sm text-white/80">
                  Лет на рынке
                </div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-accent-300 mb-1">
                  1000+
                </div>
                <div className="font-opensans text-sm text-white/80">
                  Успешных сделок
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-success-500 rounded-2xl blur opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Импорт товаров из Китая"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center">
                  <Icon name="Truck" size={28} className="text-white" />
                </div>
                <div>
                  <div className="font-opensans font-bold text-secondary-900 text-lg">
                    Доставка 15-30 дней
                  </div>
                  <div className="font-opensans text-secondary-600">
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
