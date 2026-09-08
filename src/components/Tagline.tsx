export default function Tagline() {
  return (
    <section className="relative py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="font-sf-italic text-base md:text-xl text-slate-400 tracking-[0.15em] uppercase mb-4 reveal"
        >
          Не монтаж,
        </p>
        <p
          className="font-sf-italic text-base md:text-xl text-slate-400 tracking-[0.15em] uppercase mb-6 reveal"
        >
          а
        </p>
        <h2
          className="text-9xl md:text-[14rem] lg:text-[17rem] font-steelfish font-bold leading-none text-gradient-ice tracking-tight reveal"
          style={{ textShadow: '0 0 40px rgba(255, 26, 26, 0.3)' }}
        >
          КОСМОС
        </h2>
        <div className="mt-6 flex items-center justify-center gap-4 reveal">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/50" />
          <span className="font-sf-italic text-xs text-red-500/60 tracking-[0.3em] uppercase">
            deadwinter
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/50" />
        </div>
      </div>
    </section>
  );
}
