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
    <section className="py-12 bg-[#FAF4E6] border-y border-[rgba(217,119,6,0.15)] relative overflow-hidden">
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#B45309] mb-8">
          Spezialisiert auf Reparatur, Service & Handel aller Premium-Marken
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {brands.map((brand, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-[#FDFBF7] border border-amber-500/20 hover:border-[#D97706] hover:shadow-md transition-all duration-300 text-center group cursor-default"
            >
              <span className="block font-serif text-sm font-bold text-zinc-800 group-hover:text-[#B45309] transition-colors tracking-wider">
                {brand.name}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-500 block mt-0.5 font-semibold">
                {brand.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
