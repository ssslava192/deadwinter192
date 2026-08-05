import { useEffect } from 'react';
import Stars from './components/Stars';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ChromaOverlay() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-30 select-none"
        style={{
          backgroundImage:
            'linear-gradient(105deg, rgba(220,38,38,0.05) 0%, transparent 40%, transparent 60%, rgba(37,99,235,0.05) 100%)',
          mixBlendMode: 'screen',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-30 select-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 25% 40%, rgba(220,38,38,0.04) 0%, transparent 55%), radial-gradient(ellipse at 75% 60%, rgba(37,99,235,0.04) 0%, transparent 55%)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <Stars />
      <Navbar />
      <main className="relative z-10">
        {/* Chromatic aberration over Hero + About + Contact */}
        <div className="relative">
          <Hero />
          <About />
          <ChromaOverlay />
        </div>
        <Work />
        <Testimonials />
        <div className="relative">
          <Contact />
          <ChromaOverlay />
        </div>
      </main>
      <Footer />
    </div>
  );
}
