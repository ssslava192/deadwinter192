const socials = [
  { label: 'ТЕЛЕГРАМ КАНАЛ', href: 'https://t.me/deadwinter_space' },
  { label: 'ЮТУБ', href: 'https://www.youtube.com/@deadwinter192' },
  { label: 'ИНСТАГРАМ', href: 'https://www.instagram.com/deadwinter1922/' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
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
