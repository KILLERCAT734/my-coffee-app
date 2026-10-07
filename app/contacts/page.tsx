import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Где нас найти — Кофе Хаус',
  description: 'Адрес, часы работы и контакты кофейни',
};

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">Где нас найти</h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Мы находимся в самом центре города. Заходите на чашку кофе — мы всегда рады гостям!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg p-8 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <MapPin className="w-10 h-10 text-[#EF7F04]" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Адрес</h3>
          <p className="text-slate-600">г. Москва, ул. Кофейная, 15</p>
          <p className="text-slate-500 text-sm mt-1">м. Центральная, 5 минут пешком</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <Clock className="w-10 h-10 text-[#EF7F04]" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Часы работы</h3>
          <p className="text-slate-600">Пн–Пт: 8:00 — 22:00</p>
          <p className="text-slate-600">Сб–Вс: 9:00 — 23:00</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <Phone className="w-10 h-10 text-[#EF7F04]" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Контакты</h3>
          <p className="text-slate-600">+7 (999) 123-45-67</p>
          <p className="text-slate-600 flex items-center justify-center gap-2 mt-1">
            <Mail className="w-4 h-4" />
            hello@coffeehouse.ru
          </p>
        </div>
      </div>

      <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
        <div className="text-center">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-[#EF7F04]" />
          <p className="text-lg font-medium">Здесь будет карта</p>
          <p className="text-sm mt-2">г. Москва, ул. Кофейная, 15</p>
        </div>
      </div>
    </div>
  );
}