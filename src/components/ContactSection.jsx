import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative bg-[#FDFBF7]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="gold-badge mb-3">
                <MapPin className="w-4 h-4 text-[#B45309]" />
                <span>Kontakt & Anfahrt</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                Besuchen Sie <span className="text-gold-gradient font-serif block">Unsere Garage</span>
              </h2>
              <p className="text-zinc-600 text-sm md:text-base mt-4 font-medium">
                Ob Werkstatt-Termin, MFK-Vorbereitung oder Probefahrt – wir freuen uns auf Ihren Besuch.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF4E6] border border-amber-500/20">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-[#D97706] flex items-center justify-center text-[#B45309] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Standort</h4>
                  <p className="text-zinc-800 text-xs mt-1 font-bold">Schossacher Garage & Autohandel</p>
                  <p className="text-zinc-600 text-xs font-medium">Hauptstrasse 42, 5000 Aarau / Schweiz</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF4E6] border border-amber-500/20">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-[#D97706] flex items-center justify-center text-[#B45309] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Telefon & WhatsApp</h4>
                  <a href="tel:+41791234567" className="text-[#B45309] font-mono text-sm font-bold hover:underline">
                    +41 (0) 79 123 45 67
                  </a>
                  <p className="text-zinc-600 text-xs mt-0.5 font-medium">Schnelle Auskunft & Pannenhilfe</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF4E6] border border-amber-500/20">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-[#D97706] flex items-center justify-center text-[#B45309] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Öffnungszeiten</h4>
                  <div className="text-xs text-zinc-700 space-y-1 mt-1 font-mono font-bold">
                    <p><span className="text-zinc-500">Montag - Freitag:</span> 07:30 - 18:30 Uhr</p>
                    <p><span className="text-zinc-500">Samstag:</span> 08:30 - 16:00 Uhr</p>
                    <p><span className="text-zinc-500">Sonntag:</span> Nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-card-gold p-8 md:p-10 border-[#D97706]/30 relative !bg-[#FDFBF7]">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#F59E0B] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 font-serif">Terminbestätigung Unterwegs!</h3>
                  <p className="text-zinc-700 text-sm font-medium">
                    Vielen Dank. Wir haben Ihre Nachricht erhalten und schicken Ihnen in Kürze die Terminbestätigung.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline-gold text-xs py-2 px-6">
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-zinc-900 font-serif mb-2">
                    Online <span className="text-gold-gradient">Termin Buchen</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1.5">Name *</label>
                      <input type="text" required placeholder="Ihr Vor- und Nachname" className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1.5">Telefonnummer *</label>
                      <input type="tel" required placeholder="+41 79 000 00 00" className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1.5">E-Mail *</label>
                      <input type="email" required placeholder="name@beispiel.ch" className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-800 mb-1.5">Gewünschte Dienstleistung *</label>
                      <select className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium">
                        <option value="mfk">MFK-Vorbereitung & Prüfung</option>
                        <option value="service">Inspektion & Ölwechsel</option>
                        <option value="reparatur">KFZ-Reparatur / Diagnose</option>
                        <option value="reifen">Reifenwechsel & Einlagerung</option>
                        <option value="probefahrt">Probefahrt Occasion</option>
                        <option value="ankauf">Auto-Ankauf Bewertung</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Wunschtermin & Bemerkung</label>
                    <textarea rows="4" placeholder="Fahrzeugmodell, Kontrollschild oder Wunschdatum angeben..." className="w-full bg-[#FAF4E6] border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-[#D97706] font-medium"></textarea>
                  </div>

                  <button type="submit" className="w-full btn-gold justify-center text-sm py-4">
                    <Send className="w-4 h-4" />
                    Terminanfrage Verbindlich Absenden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
