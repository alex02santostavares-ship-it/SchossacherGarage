import React, { useState, useEffect } from 'react';
import { Wrench, Car, Phone, Menu, X, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

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
        ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-[rgba(6,182,212,0.2)] py-3 shadow-2xl shadow-cyan-950/20' 
        : 'bg-gradient-to-b from-[#07090e]/90 via-[#07090e]/60 to-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#06B6D4] via-[#0284C7] to-[#F59E0B] p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center text-[#06B6D4]">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wider text-white group-hover:text-[#06B6D4] transition-colors block leading-tight">
              SCHOSSACHER
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-semibold block font-mono-tech">
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
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#06B6D4] transition-colors duration-200 text-decoration-none relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#06B6D4] after:to-[#F59E0B] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Hotline */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+41791234567" className="flex items-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors text-decoration-none">
            <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#06B6D4]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-mono-tech">Pannenhilfe 24/7</span>
              <span className="font-mono text-white text-xs">+41 (0) 79 123 45 67</span>
            </div>
          </a>

          <a href="/kontakt" className="btn-primary-cyan !py-2.5 !px-5 !text-xs text-decoration-none">
            <Car className="w-4 h-4" />
            Termin Buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-300 hover:text-[#06B6D4] p-2 rounded-xl bg-white/5 border border-white/10"
          aria-label="Menü umschalten"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17] border-b border-cyan-500/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyan-400 py-2 text-decoration-none border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+41791234567" className="btn-glass-subtle justify-center text-xs py-3 text-decoration-none">
              <Phone className="w-4 h-4 text-cyan-400" />
              +41 (0) 79 123 45 67
            </a>
            <a href="/kontakt" onClick={() => setMobileMenuOpen(false)} className="btn-primary-cyan justify-center text-xs py-3 text-decoration-none">
              <Car className="w-4 h-4" />
              Termin Vereinbaren
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
