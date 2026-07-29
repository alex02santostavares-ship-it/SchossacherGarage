import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

export default function FinanceCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(45000);
  const [downPayment, setDownPayment] = useState(9000);
  const [months, setMonths] = useState(48);

  const financedAmount = Math.max(0, vehiclePrice - downPayment);
  const interestRate = 0.049;
  const monthlyPayment = Math.round((financedAmount * (1 + interestRate * (months / 12))) / months);

  return (
    <section className="py-20 relative bg-[#FAF4E6]">
      <div className="container">
        <div className="glass-card-gold p-8 md:p-12 border-[#D97706]/30 relative overflow-hidden !bg-[#FDFBF7]">
          <div className="glow-orb w-[400px] h-[400px] -top-20 -left-20 opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="gold-badge">
                <Calculator className="w-4 h-4 text-[#B45309]" />
                <span>Schweizer Leasing & Finanzierung</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                Traumwagen <span className="text-gold-gradient font-serif">Flexibel Finanzieren</span>
              </h2>

              <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-medium">
                Profitieren Sie von unseren attraktiven Schweizer Partner-Leasingkonditionen ab <strong>3.9% Effektiver Jahreszins</strong>. Individuelle Laufzeiten, niedrige Monatsraten und faire Übernahmebedingungen.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Schnellentscheid innerhalb von 24 Stunden',
                  'Flexible Anzahlung & Restwert-Gestaltung',
                  'Inklusive Reparatur- & Wartungsoption',
                  'Eintausch Ihres Altfahrzeugs als Anzahlung angerechnet'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-800 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-[#D97706] flex items-center justify-center text-[#B45309]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Calculator Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAF4E6] p-6 md:p-8 rounded-2xl border border-amber-500/30 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-amber-900/10 pb-4">
                  <span className="text-xs uppercase tracking-wider text-zinc-800 font-extrabold">Leasing Rechner</span>
                  <span className="text-xs font-mono text-[#78350F] bg-[#FEF3C7] px-3 py-1 rounded-full border border-amber-500/40 font-bold">
                    Sollzins 4.9% p.a.
                  </span>
                </div>

                {/* Price Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-zinc-700">Fahrzeugpreis (CHF)</span>
                    <span className="text-[#B45309] font-mono text-sm font-bold">CHF {vehiclePrice.toLocaleString('de-CH')}.-</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="300000"
                    step="5000"
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(Number(e.target.value))}
                    className="w-full accent-[#D97706] cursor-pointer"
                  />
                </div>

                {/* Down Payment Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-zinc-700">Anzahlung (CHF)</span>
                    <span className="text-[#B45309] font-mono text-sm font-bold">CHF {downPayment.toLocaleString('de-CH')}.-</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={vehiclePrice * 0.5}
                    step="1000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full accent-[#D97706] cursor-pointer"
                  />
                </div>

                {/* Months Selection */}
                <div className="space-y-2">
                  <span className="text-xs text-zinc-700 font-bold block">Laufzeit (Monate)</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[24, 36, 48, 60].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMonths(m)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                          months === m 
                            ? 'bg-[#F59E0B] text-white border-[#F59E0B]' 
                            : 'bg-[#FDFBF7] border-amber-500/20 text-zinc-800 hover:text-zinc-900'
                        }`}
                      >
                        {m} Mt.
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculation Result Box */}
                <div className="bg-[#FEF3C7] p-5 rounded-xl border border-amber-500/40 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#92400E] block font-extrabold">Geschätzte Monatsrate</span>
                    <span className="text-3xl font-bold font-mono text-[#78350F] font-serif">
                      CHF {monthlyPayment.toLocaleString('de-CH')}.-
                    </span>
                    <span className="text-[10px] text-zinc-600 block font-semibold">/ Monat inkl. MwSt.</span>
                  </div>

                  <a href="/kontakt" className="btn-gold !py-3 !px-5 text-xs text-decoration-none">
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
