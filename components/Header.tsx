import { ListChecks, Calculator } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between gap-8">
        {/* Логотип */}
        <img
          src="/icons/logo.svg"
          alt="Окна Хаус"
          className="h-16 w-auto object-contain"
        />

        {/* Навигация */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Услуги', 'Продукция', 'О компании', 'Портфолио', 'Вопрос-ответ', 'Контакты'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-base text-slate-700 hover:text-[#EF7F04] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Кнопки */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#EF7F04] hover:bg-[#d66f03] text-white px-5 py-3 rounded text-sm font-medium transition-colors">
            <ListChecks className="w-4 h-4" />
            Заявка на замер
          </button>
          <button className="flex items-center gap-2 bg-[#3B3A63] hover:bg-[#2e2d4f] text-white px-5 py-3 rounded text-sm font-medium transition-colors">
            <Calculator className="w-4 h-4" />
            Заказать расчет
          </button>
        </div>
      </div>
    </header>
  );
}