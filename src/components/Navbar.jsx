import React, { useState, useEffect } from 'react';
import { Wrench, Car, Phone, Menu, X, Sparkles } from 'lucide-react';

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
        ? 'bg-[#FFFDF0]/95 backdrop-blur-md border-b border-[rgba(212,175,55,0.35)] py-3 shadow-lg shadow-yellow-900/5' 
        : 'bg-gradient-to-b from-[#FFFDF0]/95 via-[#FFFDF0]/80 to-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#B8860B] p-[1.5px] shadow-lg shadow-yellow-500/30 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#FFFDF0] rounded-[10px] flex items-center justify-center text-[#856404]">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wider text-[#1C1917] group-hover:text-[#856404] transition-colors block leading-tight">
              SCHOSSACHER
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#856404] font-extrabold block">
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
              className="text-xs font-extrabold uppercase tracking-wider text-stone-800 hover:text-[#856404] transition-colors duration-200 text-decoration-none relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Hotline */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+41791234567" className="flex items-center gap-2.5 text-xs font-bold text-stone-800 hover:text-[#856404] transition-colors text-decoration-none">
            <div className="w-8 h-8 rounded-full bg-[#FEF08A] border border-[#D4AF37] flex items-center justify-center text-[#856404]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] text-[#856404] uppercase tracking-widest font-extrabold">Direkt-Hotline</span>
              <span className="font-mono text-stone-900 text-xs font-bold">+41 (0) 79 123 45 67</span>
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
          className="lg:hidden text-stone-800 hover:text-[#856404] p-2 rounded-xl bg-[#FEF08A] border border-[#D4AF37]"
          aria-label="Menü umschalten"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF0] border-b border-[#D4AF37]/40 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-extrabold text-stone-900 hover:text-[#856404] py-2 text-decoration-none border-b border-[#D4AF37]/15"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+41791234567" className="btn-outline-gold justify-center text-xs py-3 text-decoration-none">
              <Phone className="w-4 h-4 text-[#856404]" />
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
