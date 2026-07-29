import React, { useState, useEffect } from 'react';
import { Wrench, Calendar, Menu, X } from 'lucide-react';

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
    { name: 'Werkstatt', href: '/werkstatt' },
    { name: 'Autohandel', href: '/autohandel' },
    { name: 'Auto-Ankauf', href: '/ankauf' },
    { name: 'Über Uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07080A]/95 backdrop-blur-md border-b border-[#D4AF37]/30 py-3 shadow-xl' 
        : 'bg-[#07080A]/90 border-b border-[#D4AF37]/20 py-4'
    }`}>
      <div className="container flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group text-decoration-none shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#C5A028] p-[1.5px] shadow-md shadow-yellow-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#07080A] rounded-[10px] flex items-center justify-center text-[#FFD700]">
              <Wrench className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wider text-white group-hover:text-[#FFD700] transition-colors block leading-none">
              SCHOSSACHER
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-extrabold block mt-0.5">
              GARAGE • DÜBENDORF
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-extrabold uppercase tracking-wider text-stone-200 hover:text-[#FFD700] transition-colors duration-200 text-decoration-none relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Compact Action CTA Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <a href="/kontakt" className="btn-gold !py-2 !px-4 !text-xs text-decoration-none shadow-md">
            <Calendar className="w-3.5 h-3.5" />
            Termin Buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#FFD700] p-2 rounded-xl bg-[#0E121D] border border-[#D4AF37]/40 shrink-0"
          aria-label="Menü umschalten"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07080A] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold text-stone-100 hover:text-[#FFD700] py-2 text-decoration-none border-b border-[#D4AF37]/15"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a href="/kontakt" onClick={() => setMobileMenuOpen(false)} className="btn-gold justify-center text-xs py-2.5 w-full text-decoration-none">
              <Calendar className="w-4 h-4" />
              Termin Vereinbaren
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
