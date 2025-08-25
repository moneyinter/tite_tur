


export function PricingSection() {
  const plans = [
    {
      name: "Доступ к материалам на 1 день",
      price: "100 ₽",
      features: ["Тестовый доступ"],
    },
    {
      name: "Доступ к материалам на 1 месяц",
      price: "999 ₽",
      features: ["Полный доступ", "Обновления"],
    },
    {
      name: "Доступ к материалам на 3 месяца",
      price: "2 699 ₽",
      features: ["Экономия", "Приоритет поддержки"],
    },
    {
      name: "Доступ к материалам на 6 месяцев",
      price: "4 999 ₽",
      features: ["Максимум выгод", "Бонус-материалы"],
    },
    {
      name: "Безлимитный доступ",
      price: "30 000 ₽",
      features: ["Все материалы без ограничений"],
    },
  ];

  return (
    <section className="bg-[#eef1f0] py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-800 uppercase">
          Тарифы
        </h2>
        <div className="mt-2 text-lg md:text-xl text-neutral-500">
          Оплачивая подписку вы получаете доступ ко всему ранее размещенному контенту проекта!
        </div>
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [&>li]:h-full lg:[&>li:nth-child(5)]:col-start-2">
          {plans.map((plan, idx) => (
            <li
              key={plan.name}
              className="h-full flex flex-col justify-between rounded-2xl border border-neutral-300 bg-white shadow-sm p-8 text-left"
            >
              <div>
                <div className="text-2xl font-medium text-neutral-700 leading-tight">
                  {plan.name}
                </div>
                <div className="mt-4 text-5xl font-semibold text-neutral-900">
                  {plan.price}
                </div>
                <ul className="mt-3 space-y-1 text-neutral-600">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-[var(--color-primary)] text-white font-semibold rounded-full py-3 transition hover:opacity-90">
                Купить тариф
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
