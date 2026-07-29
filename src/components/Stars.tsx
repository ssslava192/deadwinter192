import { useEffect, useRef } from 'react';

type LogoMark = {
  id: number;
  top: string;
  left?: string;
  right?: string;
  size: number; // px width
  parallax: number; // 0..1 fraction of scroll
  baseOpacity: number;
  rotate: number; // base rotation deg
};

const LOGOS: LogoMark[] = [
  { id: 1, top: '18vh', right: '-6vw', size: 520, parallax: 0.15, baseOpacity: 0.04, rotate: -8 },
  { id: 2, top: '62vh', left: '-4vw', size: 260, parallax: 0.28, baseOpacity: 0.03, rotate: 12 },
  { id: 3, top: '115vh', right: '8vw', size: 180, parallax: 0.22, baseOpacity: 0.035, rotate: -4 },
  { id: 4, top: '175vh', left: '12vw', size: 340, parallax: 0.18, baseOpacity: 0.028, rotate: 6 },
  { id: 5, top: '240vh', right: '-8vw', size: 220, parallax: 0.32, baseOpacity: 0.038, rotate: -10 },
  { id: 6, top: '310vh', left: '-5vw', size: 300, parallax: 0.25, baseOpacity: 0.028, rotate: 14 },
  { id: 7, top: '380vh', right: '10vw', size: 150, parallax: 0.2, baseOpacity: 0.032, rotate: -6 },
  { id: 8, top: '450vh', left: '6vw', size: 380, parallax: 0.16, baseOpacity: 0.024, rotate: 4 },
];

export default function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.002,
      phase: Math.random() * Math.PI * 2,
      tint: Math.random() > 0.7,
    }));

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const a = 0.2 + 0.8 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.tint
          ? `rgba(248, 113, 113, ${a * 0.5})`
          : `rgba(255,255,255,${a * 0.7})`;
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
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.8 }}
      />
      <ParallaxLogos />
    </>
  );
}

function ParallaxLogos() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const vh = window.innerHeight;

    const onScroll = () => {
      const y = window.scrollY;

      LOGOS.forEach((logo, i) => {
        const el = refs.current[i];
        if (!el) return;

        // parallax drift
        const ty = y * logo.parallax;
        const rot = logo.rotate + y * 0.008 * (logo.parallax / 0.2);

        // fade: fully invisible in hero, ramps in slowly, peaks near screen center
        const logoCenter = parseFloat(logo.top) * (logo.top.includes('vh') ? vh / 100 : 1);
        const screenPos = logoCenter - y;
        const distFromCenter = Math.abs(screenPos - vh / 2);
        const maxDist = vh * 0.6; // tighter window -> faster fade at edges
        const visibility = Math.max(0, 1 - distFromCenter / maxDist);
        const visibilityEase = visibility * visibility; // ease-out: fades harder

        // stay invisible until well past the hero, then ease in
        const heroFade = Math.min(1, Math.max(0, (y - vh * 0.6) / (vh * 0.7)));
        const heroFadeEase = heroFade * heroFade;

        const op = logo.baseOpacity * visibilityEase * heroFadeEase;

        el.style.transform = `translateY(${ty}px) rotate(${rot}deg)`;
        el.style.opacity = op.toFixed(4);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {LOGOS.map((logo, i) => (
        <div
          key={logo.id}
          ref={(el) => { refs.current[i] = el; }}
          className="absolute"
          style={{
            top: logo.top,
            left: logo.left,
            right: logo.right,
            width: logo.size,
            opacity: 0,
            willChange: 'transform, opacity',
            transition: 'opacity 0.4s ease-out',
          }}
        >
          <img
            src="/assets/images/белое_лого_большое.png"
            alt=""
            className="w-full h-auto select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
