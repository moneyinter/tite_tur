
export function ContactSection() {
  return (
    <section id="contact" className="section bg-slate-900 text-white">
      <div className="wrap flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex-1 animate-fade-up">
          <h2 className="text-3xl font-bold mb-3">Связаться</h2>
          <p className="text-white/80 max-w-md">
            Напишите в Telegram или на почту — пришлём демо-материалы и поможем выбрать тариф.
          </p>
        </div>
        <div className="flex-1 flex justify-center animate-fade-up">
          <div className="bg-transparent p-2 rounded-[var(--radius-pill)] flex flex-col md:flex-row gap-0 items-center w-full max-w-lg shadow-lg">
            <a
              href="https://t.me/your_username"
              className="btn w-full md:w-auto text-base px-7 py-3 flex items-center gap-2 rounded-l-[var(--radius-pill)] rounded-r-none bg-[#23281a] text-white font-semibold hover:bg-[#3a4a1a] transition-colors duration-200 shadow-none min-w-[180px] justify-center"
              style={{ zIndex: 2, height: '48px' }}
              target="_blank" rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="22" height="22" className="mr-1"><g><circle cx="120" cy="120" r="120" fill="#37aee2"/><path d="M179.1 80.6c2.2-9.1-2.2-13.2-11.3-10.2l-110.2 38.2c-9.1 3-9 7.3-1.6 9.2l28.2 8.8 10.8 34.1c1.5 4.1 2.7 5.7 5.6 5.7 3.6 0 5-1.3 6.9-4.5l16.6-25.2 34.5 25.4c6.3 3.5 10.8 1.7 12.4-5.8l20.2-95.7z" fill="#fff"/><path d="M97.7 144.2l-4.2-13.2 51.7-46.7c2.2-2 0-3.1-2.5-1.1l-64.1 48.2-13.8-4.3c-4.2-1.3-4.3-4.2.9-5.9l104.2-36.1c4.8-1.7 7.4 1.1 5.7 5.7l-20.2 95.7c-1.7 7.5-6.1 9.2-12.4 5.8l-34.5-25.4-16.6 25.2c-1.9 3.2-3.3 4.5-6.9 4.5-2.9 0-4.1-1.6-5.6-5.7z" fill="#c8daea"/></g></svg>
              <span className="whitespace-nowrap font-semibold text-base">Написать в Telegram</span>
            </a>
            <a
              href="mailto:info@example.com"
              className="btn w-full md:w-auto text-base px-7 py-3 flex items-center gap-2 rounded-r-[var(--radius-pill)] rounded-l-none bg-[var(--color-primary)] text-white font-semibold cursor-default pointer-events-none shadow-none min-w-[180px] justify-end md:justify-center"
              style={{ marginLeft: '-1px', zIndex: 1, height: '48px', opacity: 1 }}
              tabIndex={-1}
            >
              <span className="whitespace-nowrap font-semibold text-base">info@example.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
