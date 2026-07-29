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
    { name: 'Werkstatt', href: '/werkstatt' },
    { name: 'Autohandel', href: '/autohandel' },
    { name: 'Auto-Ankauf', href: '/ankauf' },
    { name: 'Über Uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FFFDF5]/95 backdrop-blur-md border-b border-[#D4AF37]/30 py-4 shadow-sm' 
        : 'bg-[#FFFDF5]/90 border-b border-[#D4AF37]/20 py-6'
    }`}>
      <div className="container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3.5 group text-decoration-none">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6C200] via-[#D4AF37] to-[#C5A028] p-[1.5px] shadow-md shadow-yellow-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#FFFDF5] rounded-[10px] flex items-center justify-center text-[#785E07]">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-wider text-[#1C1917] group-hover:text-[#785E07] transition-colors block leading-none">
              SCHOSSACHER
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#785E07] font-extrabold block mt-1">
              GARAGE & AUTOHANDEL • DÜBENDORF
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-extrabold uppercase tracking-wider text-stone-800 hover:text-[#785E07] transition-colors duration-200 text-decoration-none relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Hotline */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:0448207474" className="flex items-center gap-3 text-xs font-bold text-stone-800 hover:text-[#785E07] transition-colors text-decoration-none">
            <div className="w-9 h-9 rounded-full bg-[#FEF08A] border border-[#D4AF37] flex items-center justify-center text-[#785E07]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] text-[#785E07] uppercase tracking-widest font-extrabold">Hotline Dübendorf</span>
              <span className="font-mono text-stone-900 text-sm font-bold">044 820 74 74</span>
            </div>
          </a>

          <a href="/kontakt" className="btn-gold !py-3 !px-6 !text-xs text-decoration-none">
            <Car className="w-4 h-4" />
            Termin Buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-stone-800 hover:text-[#785E07] p-2.5 rounded-xl bg-[#FEF08A] border border-[#D4AF37]"
          aria-label="Menü umschalten"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFDF5] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-extrabold text-stone-900 hover:text-[#785E07] py-2 text-decoration-none border-b border-[#D4AF37]/15"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:0448207474" className="btn-outline-gold justify-center text-xs py-3 text-decoration-none">
              <Phone className="w-4 h-4 text-[#785E07]" />
              044 820 74 74
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
