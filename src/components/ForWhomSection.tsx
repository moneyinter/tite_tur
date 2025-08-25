// src/components/ForWhomSection.tsx
export function ForWhomSection() {
  return (
    <section className="section pt-0">
      <div className="wrap">
        <h2
          className="text-center mb-2 font-light"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            color: "#757575",
            fontWeight: 300,
            letterSpacing: "0.01em",
            lineHeight: 1.15,
          }}
        >
          Для кого этот проект?
        </h2>
  <p
    className="text-center mb-8"
    style={{
      fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
      color: '#7a7a7a',
      fontWeight: 300,
      letterSpacing: '0.01em',
      lineHeight: 1.3
    }}
  >
    Канал создан специально для тех, кто работает в туризме и хочет продавать быстрее.
  </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Турагентам и менеджерам */}
          <div className="flex flex-col items-center text-center">
            <svg width="64" height="64" fill="none" stroke="#bfc2b0" strokeWidth="2" viewBox="0 0 64 64" className="mb-4"><circle cx="32" cy="32" r="30" stroke="#bfc2b0" strokeWidth="2" fill="#fff"/><path d="M32 36c-6 0-12 3-12 9v3h24v-3c0-6-6-9-12-9Zm0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" stroke="#bfc2b0" strokeWidth="2"/></svg>
            <h3 className="font-semibold text-lg mb-2">Турагентам и менеджерам</h3>
            <p className="text-slate-600">Чтобы не тратить часы на поиск материалов и тексты для туристов.</p>
          </div>
          {/* Владельцам агентств */}
          <div className="flex flex-col items-center text-center">
            <svg width="64" height="64" fill="none" stroke="#bfc2b0" strokeWidth="2" viewBox="0 0 64 64" className="mb-4">
              <rect x="8" y="12" width="48" height="40" rx="6" fill="#fff" stroke="#bfc2b0" strokeWidth="2"/>
              <rect x="20" y="32" width="10" height="10" fill="#bfc2b0"/>
              <rect x="34" y="32" width="10" height="10" fill="#bfc2b0"/>
            </svg>
            <h3 className="font-semibold text-lg mb-2">Владельцам агентств</h3>
            <p className="text-slate-600">Для системной работы команды: единый стиль подачи, быстрые продажи, готовые инструменты.</p>
          </div>
          {/* Новичкам в туризме */}
          <div className="flex flex-col items-center text-center">
            <svg width="64" height="64" fill="none" stroke="#bfc2b0" strokeWidth="2" viewBox="0 0 64 64" className="mb-4"><circle cx="32" cy="32" r="30" stroke="#bfc2b0" strokeWidth="2" fill="#fff"/><path d="M32 18a14 14 0 1 1 0 28 14 14 0 0 1 0-28Zm0 0v28M18 32h28" stroke="#bfc2b0" strokeWidth="2"/></svg>
            <h3 className="font-semibold text-lg mb-2">Новичкам в туризме</h3>
            <p className="text-slate-600">Чтобы старт был лёгким — всё готово: фото, видео, тексты, формулировки.</p>
          </div>
          {/* Блогерам и SMM-щикам */}
          <div className="flex flex-col items-center text-center">
            <svg width="64" height="64" fill="none" stroke="#bfc2b0" strokeWidth="2" viewBox="0 0 64 64" className="mb-4"><rect x="18" y="10" width="28" height="44" rx="6" fill="#fff" stroke="#bfc2b0" strokeWidth="2"/><rect x="28" y="48" width="8" height="4" fill="#bfc2b0"/></svg>
            <h3 className="font-semibold text-lg mb-2">Блогерам и SMM-щикам</h3>
            <p className="text-slate-600">Для создания цепляющего контента о Турции без затрат на поездки и съёмки.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
