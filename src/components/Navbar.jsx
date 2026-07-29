import React, { useState, useEffect } from 'react';
import { Wrench, Car, Phone, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '#hero' },
    { name: 'Werkstatt & Services', href: '#services' },
    { name: 'Autohandel & Occasionen', href: '#showroom' },
    { name: 'Auto-Ankauf', href: '#ankauf' },
    { name: 'Über Uns', href: '#why-us' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07080a]/90 backdrop-blur-md border-b border-[rgba(212,175,55,0.2)] py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-[#07080a]/80 to-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA771C] flex items-center justify-center text-black font-bold shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
            <Wrench className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors block leading-tight">
              SCHOSSACHER
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
              GARAGE & AUTOHANDEL
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors duration-200 text-decoration-none relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Phone Hotline */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+41791234567" className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-[#D4AF37] transition-colors text-decoration-none">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Direkt-Hotline</span>
              <span className="font-mono text-white text-xs">+41 (0) 79 123 45 67</span>
            </div>
          </a>

          <a href="#contact" className="btn-gold !py-2.5 !px-5 !text-xs text-decoration-none">
            <Car className="w-4 h-4" />
            Termin Buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-300 hover:text-[#D4AF37] p-2 rounded-lg bg-white/5 border border-white/10"
          aria-label="Menü umschalten"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c10] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-[#D4AF37] py-2 text-decoration-none border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+41791234567" className="btn-outline-gold justify-center text-sm py-3 text-decoration-none">
              <Phone className="w-4 h-4" />
              +41 (0) 79 123 45 67
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold justify-center text-sm py-3 text-decoration-none">
              <Car className="w-4 h-4" />
              Termin Vereinbaren
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
