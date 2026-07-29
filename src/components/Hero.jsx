import React from 'react';
import { ArrowRight, Wrench, Car, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FFFDF5]">
      {/* Background Image with Clean Gold Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Schossacher Garage Werkstatt Dübendorf"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF5] via-[#FFFDF5]/85 to-[#FFFDF5]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF5] via-[#FFFDF5]/80 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.08]">
              Schweizer Präzision für Ihr Fahrzeug.{' '}
              <span className="text-gold-gradient font-serif block mt-3">
                Schossacher Garage
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-stone-700 font-semibold leading-relaxed max-w-2xl">
              Ihre zertifizierte Meisterwerkstatt in Dübendorf (Zürich) für professionelle Reparaturen, Inspektion & MFK-Vorbereitung sowie An- & Verkauf gepflegter Fahrzeuge.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="/autohandel" className="btn-gold text-decoration-none text-base px-8 py-4 shadow-md">
                <Car className="w-5 h-5" />
                Occasionen Entdecken
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a href="/werkstatt" className="btn-outline-gold text-decoration-none text-base px-8 py-4">
                <Wrench className="w-5 h-5 text-[#785E07]" />
                Werkstatt Services
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#D4AF37]/25 mt-8">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#785E07] font-serif">4.3 / 5.0</span>
                <span className="text-xs text-stone-600 font-bold">★★★★☆ 35 Google-Rezensionen</span>
              </div>

              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#C5A028] font-serif">100% MFK</span>
                <span className="text-xs text-stone-600 font-bold">Schweizer Abnahmegarantie</span>
              </div>

              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#785E07] font-serif">Dübendorf</span>
                <span className="text-xs text-stone-600 font-bold">Im Schossacher 22</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Card with User's Real Car Image */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="glass-card-gold p-6 border-[#D4AF37]/40 shadow-xl relative space-y-6">
              <div className="relative h-64 rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-inner bg-[#FEF9E7]">
                <img src="/images/1.webp" alt="Porsche 911 GT3 RS Schossacher Garage" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 gold-badge !text-[10px] !py-1 !px-3 shadow-md">
                  <Sparkles className="w-3 h-3 text-[#785E07]" /> Aktuelles Highlight
                </span>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-xs text-stone-200 font-semibold">Porsche 911 GT3 RS</span>
                    <h4 className="text-lg font-bold text-white font-serif">525 PS • MFK Neu</h4>
                  </div>
                  <span className="text-lg font-bold font-mono text-[#FEF08A]">CHF 289,900.-</span>
                </div>
              </div>

              {/* Quick Contact Badge */}
              <div className="bg-[#FEF9E7] p-4 rounded-xl border border-[#D4AF37]/30 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF08A] border border-[#D4AF37] flex items-center justify-center text-[#785E07]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Termin in Dübendorf?</span>
                    <span className="text-[11px] text-stone-600 font-semibold">Tel. 044 820 74 74</span>
                  </div>
                </div>
                <a href="/kontakt" className="btn-gold !py-2 !px-4 !text-xs text-decoration-none">
                  Buchen
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
