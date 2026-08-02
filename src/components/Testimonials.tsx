import { Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Анна Петрова',
    role: 'Лайфстайл-креатор',
    handle: '@annalive',
    text: 'Вовлечённость на моих Reels выросла втрое после работы с deadwinter. Ритм, переходы, хук — всё просто попадает. Подписчики постоянно спрашивают, кто монтирует мои видео.',
  },
  {
    name: 'Макс Соколов',
    role: 'Фитнес-тренер',
    handle: '@maxfit',
    text: 'Принёс сырые съёмки из зала — получил TikTok, который набил 1.2M просмотров за неделю. deadwinter понимает алгоритм лучше всех, с кем я работал.',
  },
  {
    name: 'Лина Чен',
    role: 'Бренд косметики',
    handle: '@linaskin',
    text: 'Наши продуктовые Reels никогда не выглядели так круто. Чистые каты, идеальный тайминг с музыкой, текстовые оверлеи реально конвертили. Продажи взлетели на 40% за неделю.',
  },
  {
    name: 'Дмитрий Волков',
    role: 'Тревел-блогер',
    handle: '@dimatravels',
    text: 'Три Shorts, все — больше 500K просмотров. Спид-рампы и цветокоррек сделали мои тревел-съёмки кинематографичными в вертикали. Стоит каждого рубля.',
  },
  {
    name: 'Сара Ким',
    role: 'Фуд-креатор',
    handle: '@saraeats',
    text: 'ASMR-переходы на моих фуд-TikTok — просто нереальные. deadwinter нашёл звуки и каты, до которых я бы сама не додумалась. Процент сохранений взлетел до небес.',
  },
  {
    name: 'Игорь Новак',
    role: 'Фэшн-бренд',
    handle: '@novakwear',
    text: 'Наши фэшн Shorts требовали матч-катов на бит — deadwinter доставил. Бренд наконец выглядит премиально в вертикали. И быстрая сдача — 24 часа.',
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
              className="reveal group relative p-6 bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Quote
                size={28}
                className="text-red-500/20 mb-4 group-hover:text-red-500/40 transition-colors"
              />
              <p className="text-slate-300 leading-relaxed mb-6 font-sf-italic text-sm">
                «{t.text}»
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <User size={18} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-steelfish tracking-wide">{t.name}</p>
                  <p className="text-slate-500 text-xs font-sf-italic">
                    {t.role} · {t.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
