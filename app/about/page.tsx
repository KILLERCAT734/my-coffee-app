import { Coffee, Heart, Leaf, Users } from 'lucide-react';

export const metadata = {
  title: 'О нас — Кофе Хаус',
  description: 'История и ценности нашей кофейни',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">О нас</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          «Кофе Хаус» — это уютная кофейня в центре города, где каждый гость чувствует себя как дома.
          Мы начали свой путь в 2020 году с маленькой кофейни на 10 мест, а сегодня — это любимое место
          сотен людей, которые ценят настоящий кофе и тёплую атмосферу.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Наша история</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Всё началось с любви к кофе. Мы объездили полмира, чтобы найти лучшие зёрна, и нашли их
            в Эфиопии, Колумбии и Бразилии. Каждую неделю мы обжариваем зёрна вручную, чтобы вы
            получали максимально свежий и ароматный напиток.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Наши бариста — настоящие мастера своего дела. Они не просто готовят кофе, а создают
            настроение, с которым хочется возвращаться снова и снова.
          </p>
        </div>
        <div className="aspect-video bg-amber-100 rounded-lg overflow-hidden">
          <img
            src="/about/kitchen.jpg"
            alt="Наша кухня"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">Наши ценности</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="w-10 h-10 text-[#EF7F04]" />,
              title: 'Качество',
              text: 'Только свежеобжаренные зёрна и натуральные ингредиенты',
            },
            {
              icon: <Heart className="w-10 h-10 text-[#EF7F04]" />,
              title: 'Забота',
              text: 'Каждый гость для нас — дорогой друг, а не просто клиент',
            },
            {
              icon: <Users className="w-10 h-10 text-[#EF7F04]" />,
              title: 'Сообщество',
              text: 'Мы создаём место, где приятно встречаться и проводить время',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#3B3A63] text-white rounded-lg overflow-hidden grid md:grid-cols-2">
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Подход к приготовлению</h2>
          <p className="text-slate-200 leading-relaxed">
            Мы используем только свежемолотый кофе, профессиональные кофемашины и чистую
            фильтрованную воду. Каждый напиток готовится с вниманием к деталям — от температуры
            воды до времени экстракции.
          </p>
        </div>
        <div className="relative min-h-[300px] md:min-h-0 bg-amber-100 overflow-hidden">
          <img
            src="/about/coffee-beans.jpg"
            alt="Кофейные зёрна"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}