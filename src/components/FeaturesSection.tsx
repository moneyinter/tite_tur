
import React from "react";

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" strokeWidth="2.5" />
          <path d="M24 14v14" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M24 34h0" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Экономия времени',
      desc: 'Готовые тексты, фото и видео — без многочасового поиска.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" strokeWidth="2.5" />
          <path d="M16 32l8-8 8 8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 16v8" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Системный подход',
      desc: 'Единый стиль подачи, который усиливает доверие туриста.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" strokeWidth="2.5" />
          <path d="M16 24l6 6 10-10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Проверенный контент',
      desc: 'Материалы созданы практикующими экспертами туризма.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" strokeWidth="2.5" />
          <rect x="14" y="18" width="20" height="12" rx="2" strokeWidth="2.5"/>
          <rect x="20" y="32" width="8" height="2" rx="1" strokeWidth="2.5"/>
        </svg>
      ),
      title: 'Удобный формат',
      desc: 'Доступ к базе 24/7 с телефона или компьютера.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" strokeWidth="2.5" />
          <rect x="18" y="18" width="12" height="12" rx="3" strokeWidth="2.5"/>
          <rect x="22" y="14" width="4" height="4" rx="2" strokeWidth="2.5"/>
          <rect x="22" y="30" width="4" height="4" rx="2" strokeWidth="2.5"/>
        </svg>
      ),
      title: 'Подходит всем',
      desc: 'И новичкам, и опытным агентам, и владельцам агентств.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" strokeWidth="2.5" />
          <rect x="16" y="16" width="16" height="16" rx="4" strokeWidth="2.5"/>
          <rect x="20" y="28" width="8" height="4" rx="2" strokeWidth="2.5"/>
        </svg>
      ),
      title: 'Продажи без усилий',
      desc: 'Формулировки и визуалы, которые реально закрывают сделки.'
    }
  ];

  return (
    <section className="bg-white py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-800 text-center">
          Преимущества проекта
        </h2>
        <div className="text-xl md:text-2xl text-neutral-500 text-center mt-2">
          Почему турагенты выбирают именно нас:
        </div>
        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((f, i) => (
            <li key={i} className="flex flex-col items-center text-center gap-4">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-neutral-300 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 leading-tight">
                {f.title}
              </h3>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-[40ch]">
                {f.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { FeaturesSection };
export default FeaturesSection;

