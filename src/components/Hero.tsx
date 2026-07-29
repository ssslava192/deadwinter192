import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/images/backiee-184988.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Scanline subtle effect */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p
            className="font-sf-italic text-sm tracking-[0.25em] text-red-500/80 uppercase mb-6 animate-fadeInUp"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Reels · Shorts · TikTok
          </p>

          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none mb-6 animate-fadeInUp font-steelfish"
            style={{ animationDelay: '0.25s', opacity: 0, letterSpacing: '0.05em' }}
          >
            <span className="text-gradient-ice block">DEADWINTER</span>
          </h1>

          <p
            className="font-sf-italic text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mb-4 animate-fadeInUp"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Создаю вертикальные видео, которые останавливают скролл. Reels,
            Shorts и TikTok, которые цепляют внимание и держат его до конца.
          </p>

          <p
            className="font-sf-italic text-sm md:text-base text-red-500/70 tracking-[0.2em] uppercase mb-10 animate-fadeInUp"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            Не монтаж — а космос
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fadeInUp"
            style={{ animationDelay: '0.55s', opacity: 0 }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-7 py-3 bg-white text-black text-sm font-semibold tracking-wide hover:bg-red-300 transition-colors duration-300"
            >
              Мои работы
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors animate-float"
      >
        <span className="font-sf-italic text-xs tracking-widest uppercase">Листай</span>
        <ChevronDown size={16} />
      </a>

      {/* Corner coordinates decoration */}
      <div className="absolute bottom-8 right-8 z-10 font-sf-italic text-xs text-slate-600 hidden md:block">
        <p>55.7558° N</p>
        <p>37.6176° E</p>
      </div>
    </section>
  );
}
