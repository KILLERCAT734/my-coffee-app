import Link from 'next/link';
import { dishes } from '@/lib/dishes';
import { Coffee } from 'lucide-react';

export const metadata = {
  title: 'Меню — Кофе Хаус',
  description: 'Наши напитки и десерты',
};

export default function MenuPage() {
  const categories = [
    { key: 'coffee', label: 'Кофе' },
    { key: 'drinks', label: 'Напитки' },
    { key: 'desserts', label: 'Десерты' },
  ] as const;

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">Наше меню</h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Свежий кофе, согревающие напитки и вкусные десерты — всё, чтобы сделать ваш день лучше.
        </p>
      </div>

      {categories.map((cat) => {
        const items = dishes.filter((d) => d.category === cat.key);
        if (items.length === 0) return null;

        return (
          <section key={cat.key} className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Coffee className="w-6 h-6 text-[#EF7F04]" />
              {cat.label}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((dish) => (
                <Link
                  key={dish.id}
                  href={`/menu/${dish.id}`}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="aspect-video bg-amber-100 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#EF7F04] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="text-[#EF7F04] font-bold whitespace-nowrap ml-2">
                        {dish.price} ₽
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}