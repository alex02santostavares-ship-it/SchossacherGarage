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
    <section className="py-12 bg-[#050608] border-y border-[rgba(212,175,55,0.15)] relative overflow-hidden">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-8">
          Spezialisiert auf Reparatur, Service & Handel aller Premium-Marken
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {brands.map((brand, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 hover:bg-white/[0.05] transition-all duration-300 text-center group cursor-default"
            >
              <span className="block font-serif text-sm font-bold text-slate-300 group-hover:text-[#D4AF37] transition-colors tracking-wider">
                {brand.name}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 block mt-0.5">
                {brand.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
