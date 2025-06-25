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
    <section
      id="advantages"
      className="py-20 bg-gradient-to-br from-white to-accent-50/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-accent-100 px-4 py-2 rounded-full mb-6">
              <span className="text-accent-700 font-opensans text-sm font-semibold">
                ⭐ Наши преимущества
              </span>
            </div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl bg-gradient-to-r from-secondary-900 to-accent-600 bg-clip-text text-transparent mb-8">
              Почему выбирают нас
            </h2>
            <p className="font-opensans text-xl text-secondary-600 mb-10 leading-relaxed">
              Мы не просто посредники — мы ваши надежные партнеры в бизнесе.
              Наша команда имеет многолетний опыт работы с китайскими
              производителями и знает все тонкости импорта товаров.
            </p>

            <div className="space-y-8">
              {advantages.map((advantage, index) => {
                const colors = [
                  "from-primary-500 to-primary-600",
                  "from-success-500 to-success-600",
                  "from-accent-500 to-accent-600",
                ];
                return (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon
                        name={advantage.icon as any}
                        size={28}
                        className="text-white"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-montserrat font-bold text-xl text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="font-opensans text-secondary-600 text-lg leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Команда профессионалов"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -top-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl max-w-xs z-20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={28} className="text-white" />
                </div>
                <div className="font-montserrat font-bold text-3xl bg-gradient-to-r from-success-600 to-success-700 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="font-opensans text-secondary-600 font-semibold">
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
