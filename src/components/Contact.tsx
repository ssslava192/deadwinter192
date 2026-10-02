import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="font-sf-italic text-xs tracking-[0.2em] text-slate-400 uppercase mb-4 reveal"
        >
          04 — Контакты
        </p>
        <h2
          className="text-8xl md:text-9xl font-bold mb-3 leading-none font-steelfish text-red-500 reveal"
        >
          Давайте создадим
          <br />
          что-то звёздное
        </h2>
        <p
          className="font-sf-italic text-slate-400 leading-relaxed mb-6 max-w-md mx-auto reveal"
        >
          Хочешь <span className="font-sf-italic text-slate-400 uppercase">КОНТЕНТ</span>,
          который приносит <span className="font-sf-italic text-slate-400 uppercase">РЕЗУЛЬТАТ</span>?
          <br />
          Напиши мне в Telegram — обсудим вашу задачу.
        </p>

        <div className="reveal">
          <a
            href="https://t.me/deadwinter192"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition-colors duration-300"
          >
            Связаться
            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
