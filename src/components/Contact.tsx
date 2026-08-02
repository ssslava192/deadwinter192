import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Обязательно';
    if (!form.message.trim()) e.message = 'Обязательно';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: invitation */}
          <div className="reveal">
            <p className="font-sf-italic text-xs tracking-[0.3em] text-red-500/80 uppercase mb-4">
              04 — Контакты
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-steelfish">
              Давайте создадим
              <br />
              что-то <span className="text-gradient-ice">звёздное</span>.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md font-sf-italic">
              Хочешь <span className="text-red-400 font-semibold not-italic">КОНТЕНТ</span>, который приносит{' '}
              <span className="text-red-400 font-semibold not-italic">РЕЗУЛЬТАТ</span>? Пишите мне, обсудим вашу задачу.
            </p>


          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-6 reveal">
            <div>
              <label className="block font-sf-italic text-xs text-slate-500 uppercase tracking-wider mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full bg-transparent border-b px-0 py-2 text-white text-sm outline-none transition-colors duration-300 font-sf-italic ${
                  errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-red-500/60'
                }`}
              />
              {errors.name && (
                <p className="font-sf-italic text-xs text-red-500/80 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-sf-italic text-xs text-slate-500 uppercase tracking-wider mb-2">
                Детали проекта
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className={`w-full bg-transparent border-b px-0 py-2 text-white text-sm outline-none transition-colors duration-300 resize-none font-sf-italic ${
                  errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-red-500/60'
                }`}
              />
              {errors.message && (
                <p className="font-sf-italic text-xs text-red-500/80 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sent}
              className={`inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 font-steelfish ${
                sent
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-white text-black hover:bg-red-300'
              }`}
            >
              {sent ? (
                <>
                  <Check size={16} /> Отправлено
                </>
              ) : (
                <>
                  Отправить <Send size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
