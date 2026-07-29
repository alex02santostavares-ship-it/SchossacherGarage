import React from 'react';
import { Wrench, Globe, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FEF9E7] border-t border-[#D4AF37]/20 pt-16 pb-8 text-stone-700 text-xs">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D4AF37]/20">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6C200] via-[#D4AF37] to-[#C5A028] flex items-center justify-center text-black font-bold">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-stone-900 block leading-tight">
                  SCHOSSACHER
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#785E07] font-extrabold block">
                  GARAGE & AUTOHANDEL • DÜBENDORF
                </span>
              </div>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed max-w-sm font-semibold">
              Ihre professionelle Autowerkstatt & vertrauensvoller Autohändler im Schossacher 22, 8600 Dübendorf.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#785E07] bg-[#FEF08A] border border-[#D4AF37]/40 px-3 py-1.5 rounded-lg w-fit font-bold shadow-sm">
              <Globe className="w-3.5 h-3.5" />
              <span>Cloudflare Pages Deployed</span>
            </div>
          </div>

          {/* Col 2: Werkstatt */}
          <div className="space-y-3">
            <h4 className="text-stone-900 text-xs font-bold uppercase tracking-wider font-serif">Werkstatt</h4>
            <ul className="space-y-2 font-semibold">
              <li><a href="/werkstatt" className="hover:text-[#785E07] transition-colors text-decoration-none">MFK-Vorbereitung</a></li>
              <li><a href="/werkstatt" className="hover:text-[#785E07] transition-colors text-decoration-none">KFZ-Reparaturen</a></li>
              <li><a href="/werkstatt" className="hover:text-[#785E07] transition-colors text-decoration-none">High-Tech Diagnostik</a></li>
              <li><a href="/werkstatt" className="hover:text-[#785E07] transition-colors text-decoration-none">Bremsen & Fahrwerk</a></li>
              <li><a href="/werkstatt" className="hover:text-[#785E07] transition-colors text-decoration-none">Reifen & Wartung</a></li>
            </ul>
          </div>

          {/* Col 3: Autohandel */}
          <div className="space-y-3">
            <h4 className="text-stone-900 text-xs font-bold uppercase tracking-wider font-serif">Autohandel</h4>
            <ul className="space-y-2 font-semibold">
              <li><a href="/autohandel" className="hover:text-[#785E07] transition-colors text-decoration-none">Geprüfte Occasionen</a></li>
              <li><a href="/ankauf" className="hover:text-[#785E07] transition-colors text-decoration-none">Auto-Ankauf Cash</a></li>
              <li><a href="/ankauf" className="hover:text-[#785E07] transition-colors text-decoration-none">Fahrzeug Eintausch</a></li>
              <li><a href="/autohandel" className="hover:text-[#785E07] transition-colors text-decoration-none">Probefahrt Buchen</a></li>
              <li><a href="/ueber-uns" className="hover:text-[#785E07] transition-colors text-decoration-none">Garantieleistungen</a></li>
            </ul>
          </div>

          {/* Col 4: Kontakt */}
          <div className="space-y-3">
            <h4 className="text-stone-900 text-xs font-bold uppercase tracking-wider font-serif">Kontakt Dübendorf</h4>
            <div className="space-y-2 text-xs font-semibold">
              <p className="text-stone-900 font-bold">Schossacher Garage</p>
              <p>Im Schossacher 22</p>
              <p>8600 Dübendorf / ZH</p>
              <p className="font-mono text-[#785E07] font-bold text-sm">044 820 74 74</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-semibold">
          <p>© {new Date().getFullYear()} Schossacher Garage. Im Schossacher 22, 8600 Dübendorf. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-900 transition-colors text-decoration-none">Impressum</a>
            <a href="#" className="hover:text-stone-900 transition-colors text-decoration-none">Datenschutz</a>
            <a href="#" className="hover:text-stone-900 transition-colors text-decoration-none">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
