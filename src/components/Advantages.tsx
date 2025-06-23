import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Users",
      title: "Опытная команда",
      description:
        "7 лет работы на китайском рынке, знание языка и местной специфики",
    },
    {
      icon: "MapPin",
      title: "Офис в Китае",
      description:
        "Представительство в Гуанчжоу для оперативного решения вопросов",
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "Многоступенчатый контроль качества на каждом этапе",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary-900 mb-6">
              Почему выбирают нас
            </h2>
            <p className="font-opensans text-lg text-secondary-600 mb-8 leading-relaxed">
              Мы не просто посредники — мы ваши надежные партнеры в бизнесе.
              Наша команда имеет многолетний опыт работы с китайскими
              производителями и знает все тонкости импорта товаров.
            </p>

            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={advantage.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-secondary-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="font-opensans text-secondary-600">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Команда профессионалов"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-primary mb-2">
                  24/7
                </div>
                <div className="font-opensans text-sm text-secondary-600">
                  Поддержка клиентов
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
