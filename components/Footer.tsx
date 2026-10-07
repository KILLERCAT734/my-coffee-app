import Link from 'next/link';
import { Coffee, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-[#EF7F04]" />
              <span className="text-lg font-bold text-white">
                Кофе <span className="text-[#EF7F04]">Хаус</span>
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Кофе, который согревает. Готовим с любовью каждый день.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Меню сайта</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#EF7F04]">Главная</Link></li>
              <li><Link href="/menu" className="hover:text-[#EF7F04]">Меню</Link></li>
              <li><Link href="/about" className="hover:text-[#EF7F04]">О нас</Link></li>
              <li><Link href="/contacts" className="hover:text-[#EF7F04]">Где нас найти</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>г. Москва, ул. Кофейная, 15</li>
              <li>+7 (999) 123-45-67</li>
              <li>hello@coffeehouse.ru</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              {/* VK */}
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-[#EF7F04] rounded-full flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974H1.76c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.202 2.708z" />
                </svg>
              </a>
              {/* Одноклассники */}
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-[#EF7F04] rounded-full flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M14.505 17.44c1.275 3.11 2.735 5.19 4.235 5.19 1.056 0 1.811-.461 1.811-1.248 0-.462-.23-1.028-.654-1.663-1.373-2.058-2.607-3.24-2.607-5.46 0-2.198 1.04-3.972 1.04-6.07 0-3.597-2.716-6.35-6.106-6.35-3.39 0-6.106 2.753-6.106 6.35 0 2.098 1.04 3.872 1.04 6.07 0 2.22-1.234 3.402-2.607 5.46-.424.635-.654 1.201-.654 1.663 0 .787.755 1.248 1.811 1.248 1.5 0 2.96-2.08 4.235-5.19z" />
                </svg>
              </a>
              {/* Telegram (разрешён, хотя и ограничен) */}
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-[#EF7F04] rounded-full flex items-center justify-center transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Кофе Хаус. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#EF7F04]">Конфиденциальность</Link>
            <Link href="#" className="hover:text-[#EF7F04]">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}