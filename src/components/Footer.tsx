export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-slate-600">
          © {year} ProTravel. Все права защищены.
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="text-slate-700">О проекте</a>
          <a href="#features" className="text-slate-700">Преимущества</a>
          <a href="#pricing" className="text-slate-700">Тарифы</a>
          <a href="#contact" className="text-slate-700">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
