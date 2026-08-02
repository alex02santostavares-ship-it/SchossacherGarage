import React from 'react';

export default function BrandLogos() {
  const brands = [
    { name: 'PORSCHE', subtitle: 'Stuttgart' },
    { name: 'MERCEDES-AMG', subtitle: 'Affalterbach' },
    { name: 'AUDI SPORT', subtitle: 'Ingolstadt' },
    { name: 'BMW M', subtitle: 'München' },
    { name: 'LAMBORGHINI', subtitle: 'Sant\'Agata' },
    { name: 'FERRARI', subtitle: 'Maranello' },
    { name: 'MASERATI', subtitle: 'Modena' },
    { name: 'ASTON MARTIN', subtitle: 'Gaydon' },
  ];

  return (
    <section className="py-14 relative bg-transparent border-y border-[#D4AF37]/15 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial from-white/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container relative z-10">
        <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#FFD700] mb-8">
          Spezialisiert auf Reparatur, Service & Handel aller Premium-Marken
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {brands.map((brand, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl glass-card-gold hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:-translate-y-1 transition-all duration-300 text-center group cursor-default"
            >
              <span className="block font-serif text-sm font-bold text-stone-200 group-hover:text-[#FFD700] transition-colors tracking-wider">
                {brand.name}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-stone-400 block mt-1 font-bold group-hover:text-stone-300">
                {brand.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
