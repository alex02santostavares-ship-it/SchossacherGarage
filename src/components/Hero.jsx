import React from 'react';
import { ShieldCheck, Award, ArrowRight, Wrench, Car, Star, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Ambient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Schossacher Garage Werkstatt"
          className="w-full h-full object-cover object-center filter brightness-45 contrast-110 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-[#07080a]/40"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07080a]/60 to-[#07080a]"></div>
      </div>

      {/* Decorative Glow Orbs */}
      <div className="glow-orb w-[450px] h-[450px] -top-20 -left-20 opacity-20"></div>
      <div className="glow-orb w-[500px] h-[500px] bottom-10 right-0 opacity-15"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div className="gold-badge animate-bounce-subtle">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Schweizer Meisterbetrieb & Autohandel</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Perfektion für Ihr Fahrzeug.{' '}
            <span className="text-gold-gradient font-serif block mt-2">
              Schossacher Garage
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Ihre zertifizierte Werkstatt für professionelle Reparaturen, Inspektion & MFK-Vorbereitung sowie Ihr vertrauensvoller Autohändler für An- & Verkauf von geprüften Occasionen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#showroom" className="btn-gold text-decoration-none text-base px-8 py-4">
              <Car className="w-5 h-5" />
              Fahrzeuge Entdecken
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a href="#services" className="btn-outline-gold text-decoration-none text-base px-8 py-4">
              <Wrench className="w-5 h-5 text-[#D4AF37]" />
              Werkstatt Services
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 mt-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <span className="block text-xl font-bold text-white font-serif">15+ Jahre</span>
                <span className="text-xs text-slate-400">Erfahrung & Kompetenz</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <span className="block text-xl font-bold text-white font-serif">100% MFK</span>
                <span className="text-xs text-slate-400">Garantierte Abnahme</span>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="flex text-[#D4AF37] text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <div>
                <span className="block text-sm font-bold text-white">4.9 / 5.0 Sterne</span>
                <span className="text-xs text-slate-400">Über 350+ Bewertungen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
