import Link from 'next/link';
import { Coffee } from 'lucide-react';

export default function Header() {
  const nav = [
    { label: 'Главная', href: '/' },
    { label: 'Меню', href: '/menu' },
    { label: 'О нас', href: '/about' },
    { label: 'Где нас найти', href: '/contacts' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Coffee className="w-8 h-8 text-[#EF7F04]" />
          <span className="text-xl font-bold text-slate-800">
            Кофе <span className="text-[#EF7F04]">Хаус</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-slate-700 hover:text-[#EF7F04] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/menu"
          className="flex items-center gap-2 bg-[#EF7F04] hover:bg-[#d66f03] text-white px-5 py-3 rounded text-sm font-medium transition-colors"
        >
          <Coffee className="w-4 h-4" />
          Смотреть меню
        </Link>
      </div>
    </header>
  );
}