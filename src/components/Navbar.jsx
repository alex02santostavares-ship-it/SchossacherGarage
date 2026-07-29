import React, { useState, useEffect } from 'react';
import { Wrench, Car, Phone, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

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
        ? 'bg-[#0d0e12]/95 backdrop-blur-md border-b border-[rgba(245,158,11,0.3)] py-3 shadow-2xl shadow-amber-950/30' 
        : 'bg-gradient-to-b from-[#0d0e12]/90 via-[#0d0e12]/60 to-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFF5C0] via-[#FBBF24] to-[#F59E0B] p-[1.5px] shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0d0e12] rounded-[10px] flex items-center justify-center text-[#FBBF24]">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wider text-white group-hover:text-[#FBBF24] transition-colors block leading-tight">
              SCHOSSACHER
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FBBF24] font-extrabold block">
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
              className="text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-[#FBBF24] transition-colors duration-200 text-decoration-none relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FBBF24] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Hotline */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+41791234567" className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-[#FBBF24] transition-colors text-decoration-none">
            <div className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-[#FBBF24]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] text-amber-400 uppercase tracking-widest font-bold">Direkt-Hotline</span>
              <span className="font-mono text-white text-xs font-bold">+41 (0) 79 123 45 67</span>
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
          className="lg:hidden text-slate-200 hover:text-[#FBBF24] p-2 rounded-xl bg-white/5 border border-white/10"
          aria-label="Menü umschalten"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0e12] border-b border-[#F59E0B]/40 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-100 hover:text-[#FBBF24] py-2 text-decoration-none border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+41791234567" className="btn-outline-gold justify-center text-xs py-3 text-decoration-none">
              <Phone className="w-4 h-4 text-[#FBBF24]" />
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
