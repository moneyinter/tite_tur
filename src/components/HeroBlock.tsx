export function HeroBlock() {
  return (
    <section
      className="section relative flex items-center justify-center min-h-[520px]"
      style={{
  background: `url('/image_2025-08-23_17-46-54.png') center/cover no-repeat`,
        paddingBottom: 0,
      }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none select-none" style={{zIndex:1}} />
      <div className="wrap relative z-10 flex flex-col items-center justify-center text-center animate-fade-up min-h-[520px] w-full">
        {/* Верхняя строка */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 flex justify-center pointer-events-none select-none w-full" style={{zIndex:3}}>
          <div className="text-sm md:text-base tracking-wide font-medium text-white/80 drop-shadow bg-black/10 rounded-full px-5 py-2 mx-auto">
            130+ ОТЕЛЕЙ ТУРЦИИ В ГОТОВЫХ ОБЗОРАХ ДЛЯ ТУРАГЕНТОВ
          </div>
        </div>

        {/* Лого */}
        <div className="mb-4 mt-24 md:mt-32 flex justify-center w-full">
          <LogoLarge />
        </div>

        {/* Подзаголовок */}
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow text-center">
          Всё про отели Турции — структурировано, удобно, с экспертными выводами. То, что реально помогает в продажах
        </p>

        {/* Кнопки внизу */}
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto justify-center z-20">
          <a
            href="#pricing"
            className="flex-1 btn bg-[var(--color-primary)] text-white text-lg font-semibold py-4 rounded-[var(--radius-pill)] shadow-lg flex items-center justify-center gap-2 hover:opacity-95 transition"
            style={{ minWidth: 220 }}
          >
            Оформить доступ <span className="text-xl">🔑</span>
          </a>
          <a
            href="#cases"
            className="flex-1 btn bg-[var(--color-accent)] text-white text-lg font-semibold py-4 rounded-[var(--radius-pill)] shadow-lg flex items-center justify-center gap-2 hover:opacity-95 transition"
            style={{ minWidth: 220 }}
          >
            Заглянуть внутрь
          </a>
        </div>
      </div>
    </section>
  );
}

function LogoLarge() {
  return (
    <h1
      className="font-extrabold leading-tight text-white drop-shadow-xl"
      style={{
        fontSize: 'clamp(2.5rem, 8vw, 7.5rem)',
        lineHeight: 1.05,
      }}
    >
      PROдаём Турцию<br className="hidden md:block" />
      PROфи
    </h1>
  );
}
