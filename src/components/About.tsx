import { Film, Zap, TrendingUp, Eye } from 'lucide-react';

const stats = [
  { icon: Film, value: '500+', label: 'ВИДЕО СМОНТИРОВАНО' },
  { icon: Eye, value: <>10<span className="text-[0.78em] align-baseline">М</span>+</>, label: 'Всего просмотров' },
  { icon: TrendingUp, value: '100+', label: 'Клиентов сотрудничали' },
  { icon: Zap, value: <>24<span className="text-[0.78em] align-baseline">Ч</span></>, label: 'ВРЕМЯ ВЫПОЛНЕНИЯ' }
];

export default function About() {
  return (
    <section id="about" className="relative py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          {/* Left: Text + Stats */}
          <div className="reveal">
            <p className="font-sf-italic text-xs tracking-[0.2em] text-slate-400 uppercase mb-4">
              01 — Обо мне
            </p>
            <h2 className="heading-display text-8xl md:text-9xl font-bold mb-1 leading-tight font-steelfish">
              Вячеслав
            </h2>
            <div className="space-y-3 text-slate-400 leading-relaxed font-sf-italic mb-4">
              <p>
                Видеомонтажер, создающий динамичный и трендовый
                монтаж для ТВОИХ Shorts, Reels и TikTok, который достигает ЦЕЛЕЙ
                и вызывает ЭМОЦИИ у зрителей.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 w-full max-w-[calc(100%-2rem)]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-black p-6 flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300 group"
                >
                  <s.icon
                    size={20}
                    className="text-red-500/60 mb-3 group-hover:text-red-400 transition-colors"
                  />
                  <p className="text-6xl font-bold text-white mb-1 font-steelfish">{s.value}</p>
                  <p className="font-sf-italic text-xs text-white uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="reveal flex w-full justify-center md:justify-end">
            <div className="relative w-full max-w-[30rem] md:max-w-[36rem] lg:max-w-[42rem]">
              <div className="absolute inset-x-[18%] top-[8%] h-[52%] rounded-full bg-red-500/35 blur-[70px] pointer-events-none" />
              <div className="absolute inset-x-[8%] top-[28%] bottom-[10%] rounded-full bg-red-500/15 blur-[90px] pointer-events-none" />
              <img
                src="/assets/images/Моя_фотка.png"
                alt="Вячеслав"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_28px_rgba(255,26,26,0.28)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
