import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="font-sf-italic text-xs tracking-[0.3em] text-red-500/80 uppercase mb-4 reveal"
        >
          04 — Контакты
        </p>
        <h2
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-steelfish reveal"
        >
          Давайте создадим
          <br />
          что-то <span className="text-gradient-ice">звёздное</span>
        </h2>
        <p
          className="font-sf-italic text-slate-400 leading-relaxed mb-12 max-w-md mx-auto reveal"
        >
          Хочешь <span className="text-red-400 font-semibold not-italic">КОНТЕНТ</span>,
          который приносит <span className="text-red-400 font-semibold not-italic">РЕЗУЛЬТАТ</span>?
          Напиши мне в Telegram — обсудим вашу задачу.
        </p>

        <div className="reveal">
          <a
            href="https://t.me/deadwinter192"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide hover:bg-red-300 transition-colors duration-300"
          >
            Связаться
            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
