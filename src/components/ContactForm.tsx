import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacts"
      className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-success-100 px-4 py-2 rounded-full mb-4">
            <span className="text-success-700 font-opensans text-sm font-semibold">
              📞 Связаться с нами
            </span>
          </div>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl bg-gradient-to-r from-secondary-900 to-primary-600 bg-clip-text text-transparent mb-6">
            Свяжитесь с нами
          </h2>
          <p className="font-opensans text-xl text-secondary-600 max-w-3xl mx-auto">
            Готовы начать импорт товаров из Китая? Оставьте заявку, и мы
            свяжемся с вами в течение часа
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="font-montserrat text-2xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Получить консультацию
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="font-opensans"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="font-opensans"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="font-opensans"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Расскажите о ваших потребностях в импорте товаров"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="font-opensans"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:scale-105 transition-all duration-300 font-opensans font-semibold shadow-xl"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {[
              {
                icon: "Phone",
                title: "Телефон",
                content: ["+7 (495) 123-45-67", "+86 138 0013 8000"],
                color: "from-primary-500 to-primary-600",
              },
              {
                icon: "Mail",
                title: "Email",
                content: ["info@chinaimport.ru", "manager@chinaimport.ru"],
                color: "from-accent-500 to-accent-600",
              },
              {
                icon: "MapPin",
                title: "Офисы",
                content: [
                  "Москва: ул. Тверская, д. 15, офис 502",
                  "Гуанчжоу: Room 1205, Building A, Jiahe Wanggang",
                ],
                color: "from-success-500 to-success-600",
              },
              {
                icon: "Clock",
                title: "Режим работы",
                content: ["Пн-Пт: 9:00 - 18:00", "Сб-Вс: по договоренности"],
                color: "from-purple-500 to-purple-600",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon
                    name={item.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  {item.content.map((text, i) => (
                    <p
                      key={i}
                      className="font-opensans text-secondary-600 text-lg mb-2"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
