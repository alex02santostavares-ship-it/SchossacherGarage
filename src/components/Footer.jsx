import React from 'react';
import { Wrench, ShieldCheck, Globe, ChevronRight, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040507] border-t border-white/10 pt-16 pb-8 text-slate-400 text-xs">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA771C] flex items-center justify-center text-black font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block leading-tight">
                  SCHOSSACHER
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
                  GARAGE & AUTOHANDEL
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Ihre erfahrene Schweizer Autowerkstatt & vertrauensvoller Autohändler für An- und Verkauf von erstklassigen Fahrzeugen.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1.5 rounded-lg w-fit">
              <Globe className="w-3.5 h-3.5" />
              <span>Cloudflare Pages Deployed & Optimized</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-serif">Werkstatt</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors text-decoration-none">MFK-Vorbereitung</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors text-decoration-none">KFZ-Reparaturen</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors text-decoration-none">High-Tech Diagnostik</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors text-decoration-none">Bremsen & Fahrwerk</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors text-decoration-none">Reifeneinlagerung</a></li>
            </ul>
          </div>

          {/* Col 3: Autohandel */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-serif">Autohandel</h4>
            <ul className="space-y-2">
              <li><a href="#showroom" className="hover:text-[#D4AF37] transition-colors text-decoration-none">Geprüfte Occasionen</a></li>
              <li><a href="#ankauf" className="hover:text-[#D4AF37] transition-colors text-decoration-none">Auto-Ankauf Cash</a></li>
              <li><a href="#ankauf" className="hover:text-[#D4AF37] transition-colors text-decoration-none">Fahrzeug Eintausch</a></li>
              <li><a href="#showroom" className="hover:text-[#D4AF37] transition-colors text-decoration-none">Probefahrt Buchen</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors text-decoration-none">Garantieleistungen</a></li>
            </ul>
          </div>

          {/* Col 4: Kontakt */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-serif">Kontakt</h4>
            <div className="space-y-2 text-xs">
              <p className="text-white font-medium">Schossacher Garage</p>
              <p>Hauptstrasse 42, 5000 Aarau</p>
              <p className="font-mono text-[#D4AF37]">+41 79 123 45 67</p>
              <p>info@schossacher-garage.ch</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Schossacher Garage & Autohandel. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors text-decoration-none">Impressum</a>
            <a href="#" className="hover:text-slate-300 transition-colors text-decoration-none">Datenschutz</a>
            <a href="#" className="hover:text-slate-300 transition-colors text-decoration-none">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
