import React, { useState, useEffect } from 'react';
import { Wrench, Car, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '/' },
    { name: 'Werkstatt & Services', href: '/werkstatt' },
    { name: 'Autohandel & Occasionen', href: '/autohandel' },
    { name: 'Auto-Ankauf', href: '/ankauf' },
    { name: 'Über Uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[rgba(217,119,6,0.25)] py-3 shadow-lg shadow-amber-900/5' 
        : 'bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/80 to-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#D97706] p-[1.5px] shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#FDFBF7] rounded-[10px] flex items-center justify-center text-[#B45309]">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wider text-[#18181B] group-hover:text-[#B45309] transition-colors block leading-tight">
              SCHOSSACHER
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B45309] font-extrabold block">
              GARAGE & AUTOHANDEL
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-[#B45309] transition-colors duration-200 text-decoration-none relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D97706] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Hotline */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+41791234567" className="flex items-center gap-2.5 text-xs font-semibold text-zinc-700 hover:text-[#B45309] transition-colors text-decoration-none">
            <div className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-[#B45309]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] text-[#B45309] uppercase tracking-widest font-bold">Direkt-Hotline</span>
              <span className="font-mono text-zinc-900 text-xs font-bold">+41 (0) 79 123 45 67</span>
            </div>
          </a>

          <a href="/kontakt" className="btn-gold !py-2.5 !px-5 !text-xs text-decoration-none">
            <Car className="w-4 h-4" />
            Termin Buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-zinc-800 hover:text-[#B45309] p-2 rounded-xl bg-amber-500/10 border border-amber-500/20"
          aria-label="Menü umschalten"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#D97706]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-zinc-900 hover:text-[#B45309] py-2 text-decoration-none border-b border-amber-500/10"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+41791234567" className="btn-outline-gold justify-center text-xs py-3 text-decoration-none">
              <Phone className="w-4 h-4 text-[#B45309]" />
              +41 (0) 79 123 45 67
            </a>
            <a href="/kontakt" onClick={() => setMobileMenuOpen(false)} className="btn-gold justify-center text-xs py-3 text-decoration-none">
              <Car className="w-4 h-4" />
              Termin Vereinbaren
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
