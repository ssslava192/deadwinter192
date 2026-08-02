const socials = [
  { label: 'ТЕЛЕГРАМ КАНАЛ', href: 'https://t.me/deadwinter_space' },
  { label: 'ЮТУБ', href: 'https://www.youtube.com/@deadwinter192' },
  { label: 'ИНСТАГРАМ', href: 'https://www.instagram.com/deadwinter1922/' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 px-6">
      {/* Divider line that fades on both sides */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
        }}
      />
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sf-italic text-xs text-slate-500 hover:text-red-400 transition-colors uppercase tracking-wider"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="font-sf-italic text-xs text-slate-600">
          © {new Date().getFullYear()} · Все права защищены
        </p>
      </div>
    </footer>
  );
}
