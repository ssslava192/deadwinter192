import { Quote } from 'lucide-react';

const testimonials = [
  {
    username: '@olgazotova_psy',
    role: 'предприниматель',
    text: 'Очень понравилось как сделали монтаж видео, превзошел мои ожидания, а я клиент еще тот придирчивый) Большое спасибо за работу, однозначно рекомендую!',
  },
  {
    username: '@stas_haker',
    role: 'криптотрейдер',
    text: 'Вячеслав максимально быстро смонтировал мне интересный Reels! Очень порадовало, что он отвечает моментально — ничего не пришлось ждать.',
  },
  {
    username: '@polinapilia',
    role: 'бренд одежды',
    text: 'Нужно было смонтировать короткие вертикальные видео для социальных сетей на основе референсов. Работа понравилась, ролики были смонтированы очень быстро и качественно.',
  },
  {
    username: '@sergeykudryavtsevSEO',
    role: 'маркетолог',
    text: 'Хотел бы поблагодарить Вячеслава за хорошую работу на протяжении длительного периода. Хорошо монтировал, предлагал идеи, оперативно вносил правки и всегда был на связи.',
  },
  {
    username: '@mikroElik',
    role: 'риелтор',
    text: 'Всё сделал даже раньше дедлайна, получилось увидеть то, что именно хотела видеть! Получение обратной связи в любое время суток, очень приятно было работать. Спасибо большое!',
  },
  {
    username: '@dok_tor_eliseev',
    role: 'врач',
    text: 'Спасибо большое за качественную работу и профессиональный подход! Однозначно рекомендую) Вячеслав, спасибо за ваш подход и ваш взгляд на монтаж роликов для рилсов, очень круто!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative pt-20 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-4 reveal">
          <p className="font-sf-italic text-xs tracking-[0.2em] text-slate-400 uppercase mb-4">
            03 — Отзывы
          </p>
          <h2 className="text-8xl md:text-9xl font-bold mb-3 leading-tight font-steelfish text-red-500">
            Отзывы клиентов
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal group relative p-4 bg-white/[0.02] border border-white/5 hover:border-red-500/50 hover:shadow-[0_0_40px_-10px_rgba(255,22,56,0.4)] transition-all duration-500 flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-all duration-500">
                  <Quote size={16} className="text-red-500/50 group-hover:text-red-400 transition-colors" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />
              </div>

              <p className="text-slate-300 leading-relaxed mb-4 font-sf-italic text-[15px] flex-1">
                {t.text}
              </p>

              <div className="pt-3">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3" />
                <p className="text-slate-400 font-sf-italic tracking-wide">
                  <span className="text-[clamp(1rem,1.8vw,1.3rem)] text-slate-400 normal-case break-words">{t.username}</span>{' '}
                  <span className="text-[clamp(0.9rem,1.5vw,1.1rem)] text-slate-400 uppercase break-words">{t.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
