import { Film, Zap, TrendingUp, Eye } from 'lucide-react';

const stats = [
  { icon: Film, value: '300+', label: 'Reels смонтировано' },
  { icon: Eye, value: '12M+', label: 'Всего просмотров' },
  { icon: TrendingUp, value: '50+', label: 'Креаторов сотрудничали' },
  { icon: Zap, value: '24ч', label: 'Средняя сдача' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="reveal">
            <p className="font-sf-italic text-xs tracking-[0.3em] text-red-500/80 uppercase mb-4">
              01 — Обо мне
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-steelfish">
              Создаю <span className="text-gradient-ice">вертикальные</span> видео,
              которые вирусятся
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed font-sf-italic">
              <p>
                Я видеомонтажёр, специализируюсь исключительно на коротких
                вертикальных форматах — Reels, Shorts и TikTok. Мой фокус узкий:
                я делаю видео, которые останавливают скролл.
              </p>
              <p>
                В вертикальном видео важна каждая секунда. Я знаю, как зацепить
                зрителя в первом кадре, держать ритм острым и выдать финал, который
                драйвит вовлечённость. Как комета, прочертившая ночное небо —
                быстрая, яркая и невозможная, чтобы не заметить.
              </p>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 reveal">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-black p-8 flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300 group"
              >
                <s.icon
                  size={24}
                  className="text-red-500/60 mb-4 group-hover:text-red-400 transition-colors"
                />
                <p className="text-4xl font-bold text-white mb-1 font-steelfish">{s.value}</p>
                <p className="font-sf-italic text-xs text-slate-500 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
