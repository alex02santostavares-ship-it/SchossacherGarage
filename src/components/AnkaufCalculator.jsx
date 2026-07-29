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
    <section id="ankauf" className="section-padding relative bg-[#FDFBF7]">
      <div className="container">
        <div className="max-w-4xl mx-auto glass-card-gold p-8 md:p-12 relative overflow-hidden border-[#D97706]/30">
          <div className="glow-orb w-[300px] h-[300px] -bottom-20 -right-20 opacity-30"></div>

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="gold-badge mx-auto">
              <DollarSign className="w-4 h-4 text-[#B45309]" />
              <span>Faire Preise & Sofortige Auszahlung</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
              Möchten Sie Ihr Auto <span className="text-gold-gradient font-serif">Verkaufen?</span>
            </h2>
            <p className="text-zinc-600 text-sm md:text-base font-medium">
              Wir kaufen Ihr Fahrzeug zu fairen Schweizer Marktpreisen. Unkomplizierte Abwicklung, Barauszahlung oder Eintausch gegen eine unserer Occasionen.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-[#F59E0B] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 font-serif">Ankauf-Anfrage Erfolgreich Übermittelt!</h3>
              <p className="text-zinc-700 text-sm max-w-lg mx-auto font-medium">
                Ungefähre Schätzung: <strong className="text-[#B45309] font-mono text-xl block mt-2">ca. CHF {estimatedValue.toLocaleString('de-CH')}.-</strong>
                Unsere Experten prüfen Ihre Angaben und kontaktieren Sie innerhalb von 2 Stunden mit einem verbindlichen Kaufangebot.
              </p>
              <button onClick={() => { setSubmitted(false); setStep(1); }} className="btn-outline-gold text-xs py-2 px-6">
                Neues Fahrzeug bewerten
              </button>
            </div>
          ) : (
            <div>
              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 1 ? 'text-[#B45309]' : 'text-zinc-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#F59E0B] text-white' : 'bg-zinc-200 text-zinc-600'}`}>1</span>
                  <span>Fahrzeugdaten</span>
                </div>
                <div className="w-12 h-[1px] bg-amber-900/10"></div>
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 2 ? 'text-[#B45309]' : 'text-zinc-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#F59E0B] text-white' : 'bg-zinc-200 text-zinc-600'}`}>2</span>
                  <span>Angebot Anfordern</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-zinc-800 font-bold mb-2">Marke *</label>
                        <select
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium"
                        >
                          <option value="Audi">Audi</option>
                          <option value="BMW">BMW</option>
                          <option value="Mercedes-Benz">Mercedes-Benz</option>
                          <option value="Porsche">Porsche</option>
                          <option value="Volkswagen">Volkswagen</option>
                          <option value="Andere">Andere Marke</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-zinc-800 font-bold mb-2">Modell & Ausführung *</label>
                        <input
                          type="text"
                          required
                          placeholder="z.B. M3 Competition, Golf R..."
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                          className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-zinc-800 font-bold mb-2">Jahrgang / Erstzulassung *</label>
                        <input
                          type="number"
                          required
                          min="2000"
                          max="2026"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-zinc-800 font-bold mb-2">Kilometerstand (km) *</label>
                        <input
                          type="number"
                          required
                          value={km}
                          onChange={(e) => setKm(e.target.value)}
                          className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-800 font-bold mb-2">Fahrzeugzustand</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'hervorragend', label: 'Sehr Gut (Neuwertig)' },
                          { id: 'gut', label: 'Gut (Gebrauchsspuren)' },
                          { id: 'mfk-faellig', label: 'MFK fällig / Mängel' }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setCondition(item.id)}
                            className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                              condition === item.id 
                                ? 'bg-[#FEF3C7] border-[#D97706] text-[#78350F]' 
                                : 'bg-[#FAF4E6] border-amber-500/20 text-zinc-700 hover:text-zinc-900'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-gold text-xs py-3 px-6"
                      >
                        Weiter zu Kontaktdaten
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="bg-[#FEF3C7] p-4 rounded-xl border border-amber-500/30 flex items-center justify-between text-xs text-zinc-800 mb-4 font-semibold">
                      <div>
                        <span className="text-zinc-600 block text-[10px]">Geschätzter Marktwert</span>
                        <strong className="text-zinc-900 text-base font-mono font-bold">{brand} {model} ({year})</strong>
                      </div>
                      <span className="text-[#78350F] font-mono text-lg font-bold">~ CHF {estimatedValue.toLocaleString('de-CH')}.-</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" required placeholder="Ihr Name *" className="bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium" />
                      <input type="tel" required placeholder="Telefonnummer für Angebot *" className="bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium" />
                    </div>
                    <input type="email" required placeholder="E-Mail Adresse *" className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium" />

                    <div className="flex items-center justify-between pt-4">
                      <button type="button" onClick={() => setStep(1)} className="btn-outline-gold text-xs py-3 px-5">
                        Zurück
                      </button>
                      <button type="submit" className="btn-gold text-xs py-3 px-6">
                        Verbindliches Angebot Erhalten
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
