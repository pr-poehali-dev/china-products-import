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
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="font-opensans text-lg text-secondary-600 max-w-2xl mx-auto">
            Готовы начать импорт товаров из Китая? Оставьте заявку, и мы
            свяжемся с вами в течение часа
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat text-xl text-secondary-900">
                Получить консультацию
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full bg-primary hover:bg-primary-700 font-opensans font-semibold"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-secondary-900 mb-2">
                  Телефон
                </h3>
                <p className="font-opensans text-secondary-600">
                  +7 (495) 123-45-67
                </p>
                <p className="font-opensans text-secondary-600">
                  +86 138 0013 8000
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-secondary-900 mb-2">
                  Email
                </h3>
                <p className="font-opensans text-secondary-600">
                  info@chinaimport.ru
                </p>
                <p className="font-opensans text-secondary-600">
                  manager@chinaimport.ru
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-secondary-900 mb-2">
                  Офисы
                </h3>
                <p className="font-opensans text-secondary-600 mb-2">
                  Москва: ул. Тверская, д. 15, офис 502
                </p>
                <p className="font-opensans text-secondary-600">
                  Гуанчжоу: Room 1205, Building A, Jiahe Wanggang
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-secondary-900 mb-2">
                  Режим работы
                </h3>
                <p className="font-opensans text-secondary-600">
                  Пн-Пт: 9:00 - 18:00
                </p>
                <p className="font-opensans text-secondary-600">
                  Сб-Вс: по договоренности
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
