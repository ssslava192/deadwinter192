import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function HeroStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.15,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.002 + 0.0006,
      tint: Math.random() > 0.75,
    }));

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const a = 0.15 + 0.85 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.tint
          ? `rgba(248,113,113,${a * 0.55})`
          : `rgba(255,255,255,${a * 0.75})`;
        ctx.fill();
      }
      animFrame = requestAnimationFrame(draw);
    };

    animFrame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}

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
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-black/20 to-black/40" />

      {/* Stars layer over the moon image */}
      <HeroStars />

      {/* Scanline subtle effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
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
            Shorts и TikTok, которые цепляют внимание и держат его до конца
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
              href="https://t.me/deadwinter192"
              target="_blank"
              rel="noopener noreferrer"
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
        <p>52.6768° N</p>
        <p>31.0192° E</p>
      </div>

      {/* Strong bottom fade — dissolves hero into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 9,
          height: '220px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.92) 70%, #000 100%)',
        }}
      />
    </section>
  );
}
