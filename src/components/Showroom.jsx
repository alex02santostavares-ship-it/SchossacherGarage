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
      image: '/images/1.webp',
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
      image: '/images/2.webp',
      badge: 'Top gepflegt',
      features: ['Dynamic Paket Plus', 'Sportabgasanlage', 'Head-Up Display', 'Bang & Olufsen 3D Sound', 'Lückenloses Scheckheft']
    },
    {
      id: 'amg-g63',
      title: 'Mercedes-AMG G 63 V8 Biturbo',
      category: 'suv',
      year: '2021',
      km: '39,000 km',
      power: '585 PS (430 kW)',
      fuel: 'Benzin',
      transmission: '9G-TRONIC',
      price: 'CHF 179,800.-',
      image: '/images/3.webp',
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
      image: '/images/4.webp',
      badge: 'Garantie',
      features: ['M Carbon Dach', 'Laserlicht', 'Bowers & Wilkins Sound', 'M Sportabgasanlage', 'Schweizer Erstauslieferung']
    },
    {
      id: 'lambo-huracan',
      title: 'Lamborghini Huracán EVO Coupe',
      category: 'sportwagen',
      year: '2021',
      km: '18,500 km',
      power: '640 PS (470 kW)',
      fuel: 'Benzin',
      transmission: 'LDF 7-Gang',
      price: 'CHF 265,000.-',
      image: '/images/5.webp',
      badge: 'Super Sport',
      features: ['LDVI Fahrdynamik', 'Carbon-Keramik Bremsen', 'Sport-Ausstattung', 'Lift-System', 'Schweizer MFK Neu']
    },
    {
      id: 'ferrari-f8',
      title: 'Ferrari F8 Tributo V8',
      category: 'sportwagen',
      year: '2022',
      km: '9,800 km',
      power: '720 PS (530 kW)',
      fuel: 'Benzin',
      transmission: 'F1 Doppelkupplung',
      price: 'CHF 310,000.-',
      image: '/images/6.webp',
      badge: 'Rarität',
      features: ['Carbon Rennsitze', 'JBL Premium Sound', 'Titanium Sportabgasanlage', '7 Jahre Maintenance', 'Gepflegt im Schossacher 22']
    },
    {
      id: 'maserati-mc20',
      title: 'Maserati MC20 Nettuno',
      category: 'sportwagen',
      year: '2023',
      km: '6,200 km',
      power: '630 PS (463 kW)',
      fuel: 'Benzin',
      transmission: '8-Gang Doppelkupplung',
      price: 'CHF 239,000.-',
      image: '/images/7.webp',
      badge: 'Erstbesitz',
      features: ['Carbon Monocoque', 'Sonus Faber Sound', 'Dreifach-Schicht Lackierung', 'Rückfahrkamera', 'Schweizer Garantie']
    },
    {
      id: 'aston-vantage',
      title: 'Aston Martin Vantage V8 Coupe',
      category: 'sportwagen',
      year: '2020',
      km: '31,000 km',
      power: '510 PS (375 kW)',
      fuel: 'Benzin',
      transmission: '8-Gang Sport-Automatik',
      price: 'CHF 148,500.-',
      image: '/images/8.webp',
      badge: 'Geprüft',
      features: ['Sports Plus Paket', '360° Kamera', 'Keyless Go', 'Vollederausstattung', 'Lückenloses Serviceheft']
    },
    {
      id: 'amg-gt-r',
      title: 'Mercedes-AMG GT R V8 Biturbo',
      category: 'sportwagen',
      year: '2020',
      km: '24,000 km',
      power: '585 PS (430 kW)',
      fuel: 'Benzin',
      transmission: 'AMG SPEEDSHIFT 7-Gang',
      price: 'CHF 195,000.-',
      image: '/images/9.webp',
      badge: 'Track Edition',
      features: ['AMG Carbon Paket II', 'Hinterachslenkung', 'Keramik-Bremsanlage', 'Bucket Seats', 'MFK 2026']
    },
    {
      id: 'audi-r8',
      title: 'Audi R8 Coupe V10 Performance',
      category: 'sportwagen',
      year: '2021',
      km: '22,000 km',
      power: '620 PS (456 kW)',
      fuel: 'Benzin',
      transmission: 'S tronic 7-Gang',
      price: 'CHF 159,000.-',
      image: '/images/44.webp',
      badge: 'Garantie',
      features: ['Laserlicht', 'Bang & Olufsen 3D Sound', 'Carbon Engine Cover', 'Sportabgasanlage', 'Schweizer Auslieferung']
    },
    {
      id: 'bmw-m4-csl',
      title: 'BMW M4 CSL Limited Edition',
      category: 'sportwagen',
      year: '2023',
      km: '4,500 km',
      power: '550 PS (405 kW)',
      fuel: 'Benzin',
      transmission: 'M Steptronic 8-Gang',
      price: 'CHF 185,000.-',
      image: '/images/92.webp',
      badge: 'Sammlerstück',
      features: ['Carbon Schalensitze', 'M Carbon Keramikbremsen', 'Titan Endschalldämpfer', 'Limitiert auf 1.000 Stück', 'Neuwertig']
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
    <section id="showroom" className="section-padding relative bg-transparent">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="gold-badge mb-3">
              <Car className="w-4 h-4 text-[#FFD700]" />
              <span>Autohandel & Premium Occasionen in Dübendorf</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Aktuelle <span className="text-gold-gradient font-serif">Fahrzeuge</span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base mt-2 max-w-xl font-semibold">
              Alle unsere Fahrzeuge werden in unserer Werkstatt im Schossacher 22 in Dübendorf gründlich geprüft, MFK-zertifiziert und mit Schweizer Garantie übergeben.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Marke oder Modell suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0E121D] border border-[#D4AF37]/30 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFD700] transition-all font-semibold"
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-[#D4AF37]/20 pb-4">
          {[
            { id: 'all', label: 'Alle Fahrzeuge' },
            { id: 'sportwagen', label: 'Sportwagen' },
            { id: 'suv', label: 'SUV / Offroad' },
            { id: 'limousine', label: 'Limousinen & Kombi' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold tracking-wider transition-all duration-200 ${
                filterCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-black shadow-lg shadow-yellow-500/25'
                  : 'bg-[#0E121D] text-stone-300 hover:text-white border border-[#D4AF37]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((car) => (
            <div key={car.id} className="glass-card-gold overflow-hidden group hover:border-[#FFD700] transition-all duration-300 flex flex-col justify-between !bg-[#0E121D]">
              {/* Image & Badge */}
              <div className="relative h-64 overflow-hidden bg-[#07080A]">
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 gold-badge !text-[11px] !py-1 !px-3 shadow-md">
                  {car.badge}
                </span>
                <span className="absolute bottom-4 right-4 text-2xl font-bold font-mono text-[#FFD700] drop-shadow-md">
                  {car.price}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white font-serif group-hover:text-[#FFD700] transition-colors">
                  {car.title}
                </h3>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs text-stone-300 bg-[#07080A] p-3 rounded-xl border border-[#D4AF37]/30 font-bold">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>EZ: {car.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>{car.km}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>{car.power}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>{car.fuel}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 pt-1">
                  {car.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="text-xs text-stone-300 flex items-center gap-2 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></span>
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
            className="glass-card-gold max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative border-[#FFD700] shadow-2xl !bg-[#0E121D]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-4 right-4 p-2 text-stone-300 hover:text-white rounded-full bg-[#07080A] border border-[#D4AF37]/40"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#FFD700] text-black rounded-full flex items-center justify-center mx-auto animate-bounce shadow-lg">
                  <CheckCircle2 className="w-10 h-10 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">Vielen Dank für Ihre Anfrage!</h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto font-semibold">
                  Ein Berater der Schossacher Garage in Dübendorf wird sich in Kürze telefonisch unter <strong>044 820 74 74</strong> für die Bestätigung Ihrer Probefahrt des <strong className="text-[#FFD700]">{selectedVehicle.title}</strong> melden.
                </p>
              </div>
            ) : (
              <div>
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img src={selectedVehicle.image} alt={selectedVehicle.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <span className="text-xs uppercase text-[#FFD700] font-bold tracking-wider">{selectedVehicle.badge}</span>
                      <h3 className="text-2xl font-bold text-white font-serif">{selectedVehicle.title}</h3>
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#FFD700]">{selectedVehicle.price}</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#07080A] p-4 rounded-xl mb-6 text-xs text-stone-200 font-bold border border-[#D4AF37]/30">
                  <div><span className="text-stone-400 block text-[10px]">Erstzulassung</span><strong>{selectedVehicle.year}</strong></div>
                  <div><span className="text-stone-400 block text-[10px]">Kilometerstand</span><strong>{selectedVehicle.km}</strong></div>
                  <div><span className="text-stone-400 block text-[10px]">Leistung</span><strong>{selectedVehicle.power}</strong></div>
                  <div><span className="text-stone-400 block text-[10px]">Getriebe</span><strong>{selectedVehicle.transmission}</strong></div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-[#FFD700] font-bold mb-3">Ausstattungshighlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedVehicle.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-300 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleInquirySubmit} className="space-y-4 pt-4 border-t border-[#D4AF37]/20">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Probefahrt oder Kaufanfrage</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" required placeholder="Ihr Vor- & Nachname *" className="bg-[#07080A] border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFD700] font-semibold" />
                    <input type="tel" required placeholder="Telefonnummer *" className="bg-[#07080A] border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFD700] font-semibold" />
                  </div>
                  <input type="email" required placeholder="E-Mail Adresse *" className="w-full bg-[#07080A] border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFD700] font-semibold" />

                  <div className="flex items-center justify-between pt-2">
                    <a href="tel:0448207474" className="text-xs text-[#FFD700] font-bold flex items-center gap-1">
                      <PhoneCall className="w-4 h-4" /> 044 820 74 74
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
