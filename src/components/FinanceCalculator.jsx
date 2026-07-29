import React, { useState } from 'react';
import { Calculator, DollarSign, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function FinanceCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(45000);
  const [downPayment, setDownPayment] = useState(9000);
  const [months, setMonths] = useState(48);

  const financedAmount = Math.max(0, vehiclePrice - downPayment);
  const interestRate = 0.049; // 4.9% Swiss Leasing Rate
  const monthlyPayment = Math.round((financedAmount * (1 + interestRate * (months / 12))) / months);

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#07080a] via-[#0c0e12] to-[#07080a]">
      <div className="container">
        <div className="glass-card p-8 md:p-12 border-[#D4AF37]/40 relative overflow-hidden">
          <div className="glow-orb w-[400px] h-[400px] -top-20 -left-20 opacity-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="gold-badge">
                <Calculator className="w-4 h-4 text-[#D4AF37]" />
                <span>Schweizer Leasing & Finanzierung</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Traumwagen <span className="text-gold-gradient font-serif">Flexibel Finanzieren</span>
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Profitieren Sie von unseren attraktiven Schweizer Partner-Leasingkonditionen ab <strong>3.9% Effektiver Jahreszins</strong>. Individuelle Laufzeiten, niedrige Monatsraten und faire Übernahmebedingungen.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Schnellentscheid innerhalb von 24 Stunden',
                  'Flexible Anzahlung & Restwert-Gestaltung',
                  'Inklusive Reparatur- & Wartungsoption',
                  'Eintausch Ihres Altfahrzeugs als Anzahlung angerechnet'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Calculator Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#08090c] p-6 md:p-8 rounded-2xl border border-[#D4AF37]/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Leasing Rechner</span>
                  <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                    Sollzins 4.9% p.a.
                  </span>
                </div>

                {/* Price Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Fahrzeugpreis (CHF)</span>
                    <span className="text-[#D4AF37] font-mono text-sm font-bold">CHF {vehiclePrice.toLocaleString('de-CH')}.-</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="300000"
                    step="5000"
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                {/* Down Payment Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Anzahlung (CHF)</span>
                    <span className="text-[#D4AF37] font-mono text-sm font-bold">CHF {downPayment.toLocaleString('de-CH')}.-</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={vehiclePrice * 0.5}
                    step="1000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                {/* Months Selection */}
                <div className="space-y-2">
                  <span className="text-xs text-slate-300 font-semibold block">Laufzeit (Monate)</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[24, 36, 48, 60].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMonths(m)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                          months === m 
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37]' 
                            : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                        }`}
                      >
                        {m} Mt.
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculation Result Box */}
                <div className="bg-gradient-to-r from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent p-5 rounded-xl border border-[#D4AF37]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Geschätzte Monatsrate</span>
                    <span className="text-3xl font-bold font-mono text-white font-serif">
                      CHF {monthlyPayment.toLocaleString('de-CH')}.-
                    </span>
                    <span className="text-[10px] text-slate-400 block">/ Monat inkl. MwSt.</span>
                  </div>

                  <a href="#contact" className="btn-gold !py-3 !px-5 text-xs text-decoration-none">
                    Anfragen <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
