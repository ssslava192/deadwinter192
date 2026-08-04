import { Quote } from 'lucide-react';

const testimonials = [
  {
    role: 'Предприниматель',
    text: 'Очень понравилось как сделали монтаж видео, превзошел мои ожидания, а я клиент еще тот придирчивый) Большое спасибо за работу, однозначно рекомендую!',
  },
  {
    role: 'Криптотрейдер',
    text: 'Вячеслав максимально быстро смонтировал мне интересный Reels! Очень порадовало, что он отвечает моментально — ничего не пришлось ждать. Всё сделал чётко, качественно и с отличным результатом. Рекомендую всем.',
  },
  {
    role: 'Бренд одежды',
    text: 'Нужно было смонтировать короткие вертикальные видео для социальных сетей на основе референсов, сделать цветокоррекцию и наложить звук. Работа понравилась, ролики были смонтированы очень быстро и качественно.',
  },
  {
    role: 'Маркетолог',
    text: 'Хотел бы поблагодарить Вячеслава за хорошую работу на протяжении длительного периода. Хорошо монтировал, предлагал идеи, оперативно вносил правки и всегда был на связи.',
  },
  {
    role: 'Риелтор',
    text: 'Всё сделал даже раньше дедлайна, получилось увидеть то, что именно хотела видеть! Получение обратной связи в любое время суток, очень приятно было работать. Спасибо большое!',
  },
  {
    role: 'Врач',
    text: 'Спасибо большое за качественную работу и профессиональный подход! Однозначно рекомендую) Вячеслав, спасибо за ваш подход и ваш взгляд на монтаж роликов для рилсов, очень круто!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="font-sf-italic text-xs tracking-[0.3em] text-red-500/80 uppercase mb-4">
            03 — Отзывы
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-steelfish">
            Отзывы <span className="text-gradient-ice">клиентов</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal group relative p-8 bg-white/[0.02] border border-white/5 hover:border-red-500/50 hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.4)] transition-all duration-500 flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-all duration-500">
                  <Quote size={16} className="text-red-500/50 group-hover:text-red-400 transition-colors" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 font-sf-italic text-[15px] flex-1">
                {t.text}
              </p>

              <div className="pt-5 border-t border-white/5">
                <p className="text-white text-base font-steelfish tracking-wider uppercase">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
