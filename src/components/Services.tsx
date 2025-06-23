import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Search",
      title: "Поиск и закупка товаров",
      description:
        "От поиска уникальных позиций и трендовых новинок до организации оптовых закупок напрямую с фабрик. Мы знаем, где искать качественный товар по адекватной цене.",
    },
    {
      icon: "Shield",
      title: "Проверка поставщиков",
      description:
        "Не хотите нарваться на мошенников или недобросовестных производителей? Мы проведем тщательную проверку фабрики, ее документов и продукции.",
    },
    {
      icon: "CheckCircle",
      title: "Контроль качества",
      description:
        "Гарантируем, что вы получите именно то, что заказывали. Проверим товар на всех этапах — от образцов до готовой партии перед отправкой.",
    },
    {
      icon: "Truck",
      title: "Логистика и таможня",
      description:
        'Организуем доставку вашего груза из Китая в Россию "под ключ" — оптимальным маршрутом, со всеми документами и страхованием.',
    },
    {
      icon: "CreditCard",
      title: "Финансовое сопровождение",
      description:
        "Поможем с безопасными взаиморасчетами, конвертацией валюты и другими финансовыми моментами.",
    },
    {
      icon: "Plane",
      title: "ВИП-туры и сопровождение",
      description:
        "Если вы хотите лично посетить фабрики Китая — организуем для вас комфортную и продуктивную поездку.",
    },
    {
      icon: "Crown",
      title: "Поиск люксовых товаров",
      description:
        "Особое направление для тех, кто ищет уникальные вещи высокого класса и эксклюзивные товары.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary-900 mb-4">
            Наши услуги
          </h2>
          <p className="font-opensans text-lg text-secondary-600 max-w-2xl mx-auto">
            Полный спектр услуг для успешного импорта товаров из Китая — от
            поиска до доставки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-secondary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="font-opensans text-secondary-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
