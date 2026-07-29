import React from 'react';
import { ShieldCheck, Award, ArrowRight, Wrench, Car, Star, CheckCircle, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#050608]">
      {/* Background Image with Cinematic Metallic Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Schossacher Garage Werkstatt"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/60 to-transparent"></div>
      </div>

      {/* Decorative Glow Orbs */}
      <div className="glow-orb w-[600px] h-[600px] -top-35 -left-35 opacity-25"></div>
      <div className="glow-orb w-[500px] h-[500px] bottom-0 right-0 opacity-20"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="gold-badge shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Schweizer Meisterbetrieb & Autohandel</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Werkstatt Geöffnet • Aarau</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Schweizer Präzision für Ihr Fahrzeug.{' '}
              <span className="text-gold-gradient font-serif block mt-3 drop-shadow-2xl">
                Schossacher Garage
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Ihre zertifizierte Meisterwerkstatt für professionelle Reparaturen, Inspektion & MFK-Vorbereitung sowie Ihr vertrauensvoller Partner für den An- & Verkauf exklusiver Fahrzeuge.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#showroom" className="btn-gold text-decoration-none text-base px-8 py-4 shadow-[0_10px_35px_rgba(212,175,55,0.35)]">
                <Car className="w-5 h-5" />
                Occasionen Entdecken
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a href="#services" className="btn-outline-gold text-decoration-none text-base px-8 py-4">
                <Wrench className="w-5 h-5 text-[#D4AF37]" />
                Werkstatt Services
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 mt-8">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white font-serif text-gold-gradient">15+ Jahre</span>
                <span className="text-xs text-slate-400 font-medium">Erfahrung & Expertise</span>
              </div>

              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white font-serif text-gold-gradient">100% MFK</span>
                <span className="text-xs text-slate-400 font-medium">Schweizer Abnahmegarantie</span>
              </div>

              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white font-serif text-gold-gradient">4.9 / 5.0</span>
                <span className="text-xs text-slate-400 font-medium">★★★★★ 350+ Bewertungen</span>
              </div>
            </div>
          </div>

          {/* Right Floating Card Showcase */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="glass-card p-6 border-[#D4AF37]/40 shadow-2xl relative space-y-6 transform hover:scale-[1.02] transition-all duration-500">
              <div className="relative h-64 rounded-xl overflow-hidden border border-white/10 shadow-inner">
                <img src="/images/porsche.jpg" alt="Schossacher Garage Showroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 gold-badge !text-[10px] !py-1 !px-3">
                  🔥 Aktuelles Highlight
                </span>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-xs text-slate-300">Porsche 911 GT3 RS</span>
                    <h4 className="text-lg font-bold text-white font-serif">525 PS • MFK Neu</h4>
                  </div>
                  <span className="text-lg font-bold font-mono text-[#D4AF37]">CHF 289,900.-</span>
                </div>
              </div>

              {/* Quick Contact Badge */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Heute noch einen Termin?</span>
                    <span className="text-[11px] text-slate-400">Schnelle Abwicklung in Aarau</span>
                  </div>
                </div>
                <a href="#contact" className="btn-gold !py-2 !px-4 !text-xs text-decoration-none">
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
