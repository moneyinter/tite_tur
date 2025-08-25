"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 w-full">
      <div className="flex items-center justify-between h-20 px-6 md:px-12 max-w-none w-full">
        {/* Логотип слева */}
        <a href="/" className="font-extrabold text-2xl tracking-tight flex-shrink-0">
          <span className="text-[var(--color-primary)]">Pro</span>Travel
        </a>

        {/* Центрированные навигационные ссылки */}
        <nav className="hidden md:flex items-center gap-8 mx-auto">
          <a href="#about" className="nav-link">О проекте</a>
          <a href="#features" className="nav-link">Преимущества</a>
          <a href="#pricing" className="nav-link">Тарифы</a>
          <a href="#contact" className="nav-link">Контакты</a>
        </nav>

        {/* Кнопка справа */}
        <a
          href="#pricing"
          className="hidden md:inline-flex btn btn-primary ml-6 px-8 py-3 text-base font-bold shadow-lg"
          style={{ borderRadius: 'var(--radius-pill)', minWidth: 180 }}
        >
          Оформить доступ
        </a>
      </div>
    </header>
  );
}
