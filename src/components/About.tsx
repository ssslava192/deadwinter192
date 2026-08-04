import { Film, Zap, TrendingUp, Eye } from 'lucide-react';

const stats = [
  { icon: Film, value: '300+', label: 'ВИДЕО СМОНТИРОВАНО' },
  { icon: Eye, value: '10М+', label: 'Всего просмотров' },
  { icon: TrendingUp, value: '50+', label: 'Клиентов сотрудничали' },
  { icon: Zap, value: '24ч', label: 'Средняя сдача' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text + Stats */}
          <div className="reveal">
            <p className="font-sf-italic text-xs tracking-[0.3em] text-red-500/80 uppercase mb-4">
              01 — Обо мне
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-steelfish">
              <span className="text-gradient-ice">Вячеслав</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed font-sf-italic mb-10">
              <p>
                Видеомонтажер, создающий динамичный и трендовый
                монтаж для ТВОИХ Shorts, Reels и TikTok, который достигает ЦЕЛЕЙ
                и вызывает ЭМОЦИИ у зрителей.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-black p-6 flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300 group"
                >
                  <s.icon
                    size={20}
                    className="text-red-500/60 mb-3 group-hover:text-red-400 transition-colors"
                  />
                  <p className="text-3xl font-bold text-white mb-1 font-steelfish">{s.value}</p>
                  <p className="font-sf-italic text-xs text-slate-500 uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="reveal flex justify-center md:justify-end">
            <div className="relative w-72 md:w-80">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full scale-110 pointer-events-none" />
              {/* Border frame */}
              <div className="relative border border-white/10 overflow-hidden">
                <img
                  src="/rounded-in-photoretrica.png"
                  alt="Вячеслав"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red-500/60 -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-red-500/60 translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-red-500/60 -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red-500/60 translate-x-1 translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
