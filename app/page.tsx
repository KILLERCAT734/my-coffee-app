import Link from 'next/link';
import { Coffee, ArrowRight, Clock, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt="Кофейня"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#EF7F04]">Кофе Хаус</span> —<br />
              кофе, который согревает
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-xl">
              Мы обжариваем зёрна каждую неделю, готовим с любовью и создаём уют.
              Заходите за своим идеальным напитком.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-[#EF7F04] hover:bg-[#d66f03] text-white px-6 py-3 rounded font-medium transition-colors"
              >
                <Coffee className="w-5 h-5" />
                Смотреть меню
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#EF7F04] text-white px-6 py-3 rounded font-medium transition-colors"
              >
                О нас
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Coffee className="w-10 h-10 text-[#EF7F04]" />,
                title: 'Свежая обжарка',
                text: 'Обжариваем зёрна каждую неделю — только свежий кофе',
              },
              {
                icon: <Clock className="w-10 h-10 text-[#EF7F04]" />,
                title: 'Быстро и удобно',
                text: 'Готовим за 5 минут, работаем с 8 утра до 10 вечера',
              },
              {
                icon: <MapPin className="w-10 h-10 text-[#EF7F04]" />,
                title: 'Удобное место',
                text: 'В центре города, рядом с метро и парком',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#3B3A63] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Заходите на чашку кофе</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Мы всегда рады гостям. Уютная атмосфера, приветливые бариста и вкусный кофе — всё для вас.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-[#EF7F04] hover:bg-[#d66f03] text-white px-8 py-4 rounded font-medium transition-colors"
          >
            <MapPin className="w-5 h-5" />
            Как нас найти
          </Link>
        </div>
      </section>
    </>
  );
}