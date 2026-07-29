import React, { useState } from 'react';
import { Car, Search, Gauge, Calendar, Fuel, Zap, ArrowUpRight, CheckCircle2, X, PhoneCall } from 'lucide-react';

export default function Showroom() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const vehicles = [
    {
      id: 'porsche-gt3',
      title: 'Porsche 911 GT3 RS',
      category: 'sportwagen',
      year: '2023',
      km: '12,500 km',
      power: '525 PS (386 kW)',
      fuel: 'Benzin',
      transmission: 'PDK 7-Gang',
      price: 'CHF 289,900.-',
      image: '/images/porsche.jpg',
      badge: 'Neuzugang',
      features: ['Keramikbremsen (PCCB)', 'Clubsport Paket', 'Lift-System Vorderachse', 'Full Carbon Eimer-Sitze', 'MFK Neu 2026']
    },
    {
      id: 'audi-rs6',
      title: 'Audi RS6 Avant Performance',
      category: 'limousine',
      year: '2022',
      km: '28,000 km',
      power: '630 PS (463 kW)',
      fuel: 'Benzin',
      transmission: 'Tiptronic 8-Gang',
      price: 'CHF 134,500.-',
      image: '/images/audi.jpg',
      badge: 'Top gepflegt',
      features: ['Dynamic Paket Plus', 'Sportabgasanlage', 'Head-Up Display', 'Bang & Olufsen 3D Sound', 'Lückenloses Scheckheft']
    },
    {
      id: 'amg-g63',
      title: 'Mercedes-AMG G 63 V8',
      category: 'suv',
      year: '2021',
      km: '39,000 km',
      power: '585 PS (430 kW)',
      fuel: 'Benzin',
      transmission: '9G-TRONIC',
      price: 'CHF 179,800.-',
      image: '/images/hero.jpg',
      badge: 'Exklusiv',
      features: ['Night Paket II', 'Burmester Surround', 'Exklusiv Interieur Plus', 'Standheizung', '12 Monate Garantie']
    },
    {
      id: 'bmw-m5',
      title: 'BMW M5 Competition xDrive',
      category: 'limousine',
      year: '2022',
      km: '21,000 km',
      power: '625 PS (460 kW)',
      fuel: 'Benzin',
      transmission: 'Automatik 8-Gang',
      price: 'CHF 118,900.-',
      image: '/images/workshop.jpg',
      badge: 'Garantie',
      features: ['M Carbon Dach', 'Laserlicht', 'Bowiers & Wilkins Sound', 'M Sportabgasanlage', 'Schweizer Erstauslieferung']
    }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesCategory = filterCategory === 'all' || vehicle.category === filterCategory;
    const matchesSearch = vehicle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.fuel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedVehicle(null);
    }, 2500);
  };

  return (
    <section id="showroom" className="section-padding relative bg-[#0d0e12]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="gold-badge mb-3">
              <Car className="w-4 h-4 text-[#FBBF24]" />
              <span>Autohandel & Premium Occasionen</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Aktuelle <span className="text-gold-gradient font-serif">Fahrzeuge</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl">
              Alle unsere Fahrzeuge sind von unseren KFZ-Meistern gründlich geprüft, MFK-zertifiziert und werden mit Schweizer Garantie übergeben.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Marke oder Modell suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FBBF24] transition-all"
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-white/10 pb-4">
          {[
            { id: 'all', label: 'Alle Fahrzeuge' },
            { id: 'sportwagen', label: 'Sportwagen' },
            { id: 'suv', label: 'SUV / Offroad' },
            { id: 'limousine', label: 'Limousinen & Kombi' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${
                filterCategory === cat.id
                  ? 'bg-[#FBBF24] text-black shadow-lg shadow-amber-500/25'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((car) => (
            <div key={car.id} className="glass-card-gold overflow-hidden group hover:border-[#FBBF24] transition-all duration-300 flex flex-col justify-between">
              {/* Image & Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80"></div>
                <span className="absolute top-4 left-4 gold-badge !text-[11px] !py-1 !px-3">
                  {car.badge}
                </span>
                <span className="absolute bottom-4 right-4 text-2xl font-bold font-mono text-white drop-shadow-md">
                  {car.price}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white font-serif group-hover:text-[#FBBF24] transition-colors">
                  {car.title}
                </h3>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/5 font-semibold">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#FBBF24]" />
                    <span>EZ: {car.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-3.5 h-3.5 text-[#FBBF24]" />
                    <span>{car.km}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#FBBF24]" />
                    <span>{car.power}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-3.5 h-3.5 text-[#FBBF24]" />
                    <span>{car.fuel}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 pt-1">
                  {car.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedVehicle(car)}
                  className="w-full btn-outline-gold justify-center text-xs py-3 font-bold"
                >
                  Details & Probefahrt Anfragen
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Modal */}
      {selectedVehicle && (
        <div className="modal-overlay" onClick={() => setSelectedVehicle(null)}>
          <div 
            className="glass-card-gold max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative border-[#FBBF24]/60 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#FBBF24] text-black rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">Vielen Dank für Ihre Anfrage!</h3>
                <p className="text-slate-200 text-sm max-w-md mx-auto">
                  Ein Berater der Schossacher Garage wird sich in Kürze telefonisch für die Bestätigung Ihrer Probefahrt des <strong className="text-[#FBBF24]">{selectedVehicle.title}</strong> melden.
                </p>
              </div>
            ) : (
              <div>
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img src={selectedVehicle.image} alt={selectedVehicle.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <span className="text-xs uppercase text-[#FBBF24] font-bold tracking-wider">{selectedVehicle.badge}</span>
                      <h3 className="text-2xl font-bold text-white font-serif">{selectedVehicle.title}</h3>
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#FBBF24]">{selectedVehicle.price}</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/5 p-4 rounded-xl mb-6 text-xs text-slate-200 font-semibold">
                  <div><span className="text-slate-400 block text-[10px]">Erstzulassung</span><strong>{selectedVehicle.year}</strong></div>
                  <div><span className="text-slate-400 block text-[10px]">Kilometerstand</span><strong>{selectedVehicle.km}</strong></div>
                  <div><span className="text-slate-400 block text-[10px]">Leistung</span><strong>{selectedVehicle.power}</strong></div>
                  <div><span className="text-slate-400 block text-[10px]">Getriebe</span><strong>{selectedVehicle.transmission}</strong></div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-[#FBBF24] font-bold mb-3">Ausstattungshighlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedVehicle.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FBBF24]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleInquirySubmit} className="space-y-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Probefahrt oder Kaufanfrage</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" required placeholder="Ihr Vor- & Nachname *" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FBBF24]" />
                    <input type="tel" required placeholder="Telefonnummer *" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FBBF24]" />
                  </div>
                  <input type="email" required placeholder="E-Mail Adresse *" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FBBF24]" />

                  <div className="flex items-center justify-between pt-2">
                    <a href="tel:+41791234567" className="text-xs text-[#FBBF24] font-bold flex items-center gap-1">
                      <PhoneCall className="w-4 h-4" /> Direkt Anrufen
                    </a>
                    <button type="submit" className="btn-gold !py-2.5 !px-6 text-xs">
                      Anfrage Jetzt Absenden
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
