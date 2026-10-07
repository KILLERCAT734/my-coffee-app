import Image from 'next/image';

export default function Hero() {
  const features = [
    {
      icon: '/icons/icon-guarantee.svg',
      text: 'Современные окна и балконные конструкции по доступным ценам',
    },
    {
      icon: '/icons/icon-quality.svg',
      text: 'Квалифицированный подход к решению задач любой сложности',
    },
    {
      icon: '/icons/icon-window.svg',
      text: 'Гарантия высочайшего качества нашей продукции',
    },
  ];

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Фоновое фото с затемнением */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Установка окон"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Левая часть */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-normal leading-snug">
              <span className="text-[#EF7F04]">Окна Хаус -</span><br />
              Профессиональный подход<br />
              к остеклению
            </h1>

            <div className="mt-16 grid grid-cols-3 gap-8">
              {features.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.icon}
                      alt=""
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-100">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Правая часть: форма */}
          <div className="relative bg-white text-slate-800 rounded-lg shadow-2xl p-8 lg:p-10 max-w-md w-full lg:ml-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Вызвать замерщика на дом
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Представьтесь, пожалуйста"
                className="w-full border border-slate-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#EF7F04]"
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                className="w-full border border-slate-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#EF7F04]"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border border-slate-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#EF7F04]"
              />

              <label className="flex items-start gap-3 text-xs text-slate-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 w-4 h-4 accent-[#EF7F04]"
                />
                <span>
                  Согласен на обработку персональных данных в соответствии с{' '}
                  <a href="#" className="text-blue-600 underline">
                    политикой конфиденциальности
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#EF7F04] hover:bg-[#d66f03] text-white py-4 rounded font-semibold transition-colors"
              >
                Отправить заявку
              </button>
            </form>

                           {/* Рулетка — очень крупная, сдвинута вправо */}
            <div className="absolute -bottom-23 -left-25 w-[750px] hidden lg:block">
              <Image
                src="/roulette.png"
                alt="Рулетка"
                width={750}
                height={240}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}