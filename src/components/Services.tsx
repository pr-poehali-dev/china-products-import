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
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 px-4 py-2 rounded-full mb-4">
            <span className="text-primary-700 font-opensans text-sm font-semibold">
              ✨ Наши возможности
            </span>
          </div>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-6">
            Наши услуги
          </h2>
          <p className="font-opensans text-xl text-secondary-600 max-w-3xl mx-auto">
            Полный спектр услуг для успешного импорта товаров из Китая — от
            поиска до доставки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = [
              "from-primary-500 to-primary-600",
              "from-accent-500 to-accent-600",
              "from-success-500 to-success-600",
              "from-purple-500 to-purple-600",
              "from-pink-500 to-pink-600",
              "from-cyan-500 to-cyan-600",
              "from-indigo-500 to-indigo-600",
            ];
            const bgColors = [
              "from-primary-50 to-primary-100",
              "from-accent-50 to-accent-100",
              "from-success-50 to-success-100",
              "from-purple-50 to-purple-100",
              "from-pink-50 to-pink-100",
              "from-cyan-50 to-cyan-100",
              "from-indigo-50 to-indigo-100",
            ];
            return (
              <Card
                key={index}
                className={`hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 bg-gradient-to-br ${bgColors[index % bgColors.length]} group cursor-pointer overflow-hidden`}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={service.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-opensans text-secondary-700 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
