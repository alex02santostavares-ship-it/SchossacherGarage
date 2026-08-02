import React, { useState } from 'react';
import { DollarSign, Check, ArrowRight } from 'lucide-react';

export default function AnkaufCalculator() {
  const [step, setStep] = useState(1);
  const [brand, setBrand] = useState('BMW');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('2020');
  const [km, setKm] = useState('60000');
  const [condition, setCondition] = useState('gut');
  const [submitted, setSubmitted] = useState(false);

  const estimatedValue = Math.max(8500, Math.round((2026 - parseInt(year || 2020)) * -1800 + 42000 - (parseInt(km || 60000) * 0.18)));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="ankauf" className="section-padding relative bg-transparent">
      <div className="container">
        <div className="max-w-4xl mx-auto glass-card-gold p-8 md:p-12 relative overflow-hidden border-[#D4AF37]/30 bg-[#0C101B]/80 backdrop-blur-xl">
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <div className="gold-badge mx-auto">
              <DollarSign className="w-4 h-4 text-[#FFD700]" />
              <span>Faire Preise & Sofortige Auszahlung</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Möchten Sie Ihr Auto <span className="text-gold-gradient font-serif">Verkaufen?</span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base font-medium">
              Wir kaufen Ihr Fahrzeug zu fairen Schweizer Marktpreisen. Unkomplizierte Abwicklung, Barauszahlung oder Eintausch gegen eine unserer Occasionen.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-black rounded-full flex items-center justify-center mx-auto shadow-lg shadow-yellow-500/20">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">Ankauf-Anfrage Erfolgreich Übermittelt!</h3>
              <p className="text-stone-300 text-sm max-w-lg mx-auto font-medium">
                Ungefähre Schätzung: <strong className="text-[#FFD700] font-mono text-2xl block mt-2 font-bold">ca. CHF {estimatedValue.toLocaleString('de-CH')}.-</strong>
                Unsere Experten prüfen Ihre Angaben und kontaktieren Sie innerhalb von 2 Stunden mit einem verbindlichen Kaufangebot.
              </p>
              <button onClick={() => { setSubmitted(false); setStep(1); }} className="btn-outline-gold text-xs py-2 px-6">
                Neues Fahrzeug bewerten
              </button>
            </div>
          ) : (
            <div className="relative z-10">
              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 1 ? 'text-[#FFD700]' : 'text-stone-500'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-black font-bold' : 'bg-stone-800 text-stone-500'}`}>1</span>
                  <span>Fahrzeugdaten</span>
                </div>
                <div className="w-12 h-[1px] bg-[#D4AF37]/30"></div>
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 2 ? 'text-[#FFD700]' : 'text-stone-500'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-black font-bold' : 'bg-stone-800 text-stone-500'}`}>2</span>
                  <span>Angebot Anfordern</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-stone-300 font-bold mb-2">Marke *</label>
                        <select
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          className="w-full bg-[#060810]/90 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD700] font-semibold"
                        >
                          <option value="Audi" className="bg-[#060810] text-white">Audi</option>
                          <option value="BMW" className="bg-[#060810] text-white">BMW</option>
                          <option value="Mercedes-Benz" className="bg-[#060810] text-white">Mercedes-Benz</option>
                          <option value="Porsche" className="bg-[#060810] text-white">Porsche</option>
                          <option value="Volkswagen" className="bg-[#060810] text-white">Volkswagen</option>
                          <option value="Andere" className="bg-[#060810] text-white">Andere Marke</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-stone-300 font-bold mb-2">Modell & Ausführung *</label>
                        <input
                          type="text"
                          required
                          placeholder="z.B. M3 Competition, Golf R..."
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                          className="w-full bg-[#060810]/90 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD700] font-semibold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-stone-300 font-bold mb-2">Erstzulassung (Jahr) *</label>
                        <select
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          className="w-full bg-[#060810]/90 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD700] font-semibold"
                        >
                          {Array.from({ length: 20 }, (_, i) => 2026 - i).map((y) => (
                            <option key={y} value={y} className="bg-[#060810] text-white">{y}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-stone-300 font-bold mb-2">KM-Stand (ca.) *</label>
                        <input
                          type="number"
                          required
                          placeholder="z.B. 75000"
                          value={km}
                          onChange={(e) => setKm(e.target.value)}
                          className="w-full bg-[#060810]/90 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD700] font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-stone-300 font-bold mb-2">Zustand & Serviceheft *</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'sehr_gut', title: 'Sehr Gut', sub: 'Lückenloses Serviceheft' },
                          { id: 'gut', title: 'Gut', sub: 'Normal gebraucht' },
                          { id: 'reparatur', title: 'Service Fällig', sub: 'Kleine Mängel' }
                        ].map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => setCondition(c.id)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              condition === c.id 
                                ? 'bg-amber-500/15 border-[#FFD700] text-white shadow-md shadow-yellow-500/10' 
                                : 'bg-[#060810]/60 border-[#D4AF37]/20 text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            <span className="block text-xs font-bold">{c.title}</span>
                            <span className="text-[10px] block opacity-80 mt-0.5">{c.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => { if (model) setStep(2); }}
                        disabled={!model}
                        className="btn-gold text-xs px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Weiter zu Schritt 2 <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="bg-[#070A12]/90 p-4 rounded-xl border border-[#D4AF37]/30 flex items-center justify-between text-xs text-stone-300 mb-4 font-semibold">
                      <div>
                        <span className="block font-bold text-white">{brand} {model} ({year})</span>
                        <span className="text-[11px] text-stone-400">{parseInt(km).toLocaleString('de-CH')} km • Zustand: {condition}</span>
                      </div>
                      <button type="button" onClick={() => setStep(1)} className="text-[#FFD700] hover:underline font-bold text-[11px]">
                        Bearbeiten
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" required placeholder="Ihr Name *" className="bg-[#060810]/90 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD700] font-semibold" />
                      <input type="tel" required placeholder="Telefonnummer für Angebot *" className="bg-[#060810]/90 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD700] font-semibold" />
                    </div>

                    <input type="email" required placeholder="E-Mail Adresse *" className="w-full bg-[#060810]/90 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#FFD700] font-semibold" />

                    <div className="pt-4 flex items-center justify-between">
                      <button type="button" onClick={() => setStep(1)} className="btn-outline-gold text-xs py-2 px-6">
                        Zurück
                      </button>
                      <button type="submit" className="btn-gold text-xs px-8 py-3">
                        Kostenloses Angebot Anfordern <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
