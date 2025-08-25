import { ForWhomSection } from "./ForWhomSection";
// src/components/AboutSection.tsx
export function AboutSection() {
  return (
    <>
      <section className="bg-white py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-0 text-[var(--color-primary)]">О проекте</h2>
              <div className="space-y-2 text-base md:text-lg lg:text-xl leading-relaxed">
                <p>Мы помогаем турагентам продавать проще: даём готовые структурированные материалы — от обзоров и чек-листов до роликов и скриптов.<br />
                Обновления еженедельно. 130+ отелей в базе. Единый визуальный стиль. Доступ 24/7.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/image_2025-08-23_17-46-34.png"
                alt="О проекте"
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <ForWhomSection />
    </>
  );
}
