import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Работы', href: '#work' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <img
            src="/assets/images/белое_лого_большое.png"
            alt="DEADWINTER logo"
            className="h-7 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="font-steelfish text-base tracking-widest text-slate-300 group-hover:text-red-400 transition-colors duration-300 uppercase">
            DEADWINTER
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link font-sf-italic text-xs tracking-widest text-slate-400 hover:text-red-400 transition-colors duration-300 uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/95 backdrop-blur-md border-b border-white/5`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sf-italic text-xs tracking-widest text-slate-400 hover:text-red-400 transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
