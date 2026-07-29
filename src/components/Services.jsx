import React, { useState } from 'react';
import { Wrench, Shield, Zap, Car, Award, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const serviceCategories = [
    {
      id: 'mfk',
      title: 'MFK-Vorführung & Check',
      icon: Shield,
      badge: 'Garantierte MFK-Bestätigung',
      desc: '100% Vorführgarantie für Ihr Fahrzeug bei den Schweizer Straßenverkehrsämtern.',
      items: [
        'Vollständige Fahrzeugdiagnose auf unserem Prüfstand',
        'Brems- & Abgastest nach offiziellen CH-Normen',
        'Unterboden-, Lenkungs- & Aufhängungsprüfung',
        'Licht- & Scheinwerferjustierung',
        'Persönliche Vorführung beim Strassenverkehrsamt durch unseren Meister'
      ]
    },
    {
      id: 'reparatur',
      title: 'KFZ-Reparatur & Diagnostik',
      icon: Wrench,
      badge: 'Markenübergreifendes Handwerk',
      desc: 'Modernste Fehlerspeicher-Diagnose und fachgerechte Reparaturen mit Originalteilen.',
      items: [
        'High-End Computerdiagnostik aller Steuergeräte',
        'Motor- & Getriebeinstandsetzung',
        'Erneuerung von Bremsscheiben & Belägen',
        'Elektronische Fehlersuche & Sensorik',
        'Klimaanlagen-Wartung & Desinfektion'
      ]
    },
    {
      id: 'wartung',
      title: 'Inspektion nach Herstellervorgabe',
      icon: Zap,
      badge: 'Voller Erhalt der Garantie',
      desc: 'Regelmäßige Wartungen nach Herstellervorgaben mit Schweizer Sorgfalt.',
      items: [
        'Ölwechsel mit zertifizierten Synthetikölen',
        'Filterwechsel (Luft, Innenraum, Kraftstoff)',
        'Zündkerzen- & Zahnriemenwechsel',
        'Batterie-Check & Spannungsmessung',
        'Eintrag ins digitale Serviceheft des Herstellers'
      ]
    },
    {
      id: 'reifen',
      title: 'Reifenservice & Einlagerung',
      icon: Car,
      badge: 'Grip & Sicherheit',
      desc: 'Kompletter Reifenservice mit Auswuchten und professioneller Radeinlagerung.',
      items: [
        'Reifenwechsel (Sommer / Winter)',
        'Präzises computergestütztes Auswuchten',
        'Spur- & Sturzeinstellung (Achsmessung)',
        'Professionelle Radeinlagerung im Reifenhotel',
        'Neureifenverkauf aller Premiummarken'
      ]
    }
  ];

  return (
    <section id="services" className="section-padding relative bg-transparent">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="gold-badge mx-auto">
            <Award className="w-4 h-4 text-[#FFD700]" />
            <span>Schweizer Meisterbetrieb</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Unsere <span className="text-gold-gradient font-serif">Werkstatt-Services</span>
          </h2>
          <p className="text-stone-300 text-sm md:text-base font-semibold">
            Von der MFK-Vorbereitung bis zur komplexen Diagnostik – Schweizer Qualität und faire Schweizer Preise im Schossacher 22 in Dübendorf.
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-4 space-y-3">
            {serviceCategories.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFD700] via-[#E6C200] to-[#C5A028] text-black border-[#FFD700] shadow-xl'
                      : 'glass-card-gold text-stone-200 border-[#D4AF37]/25 hover:border-[#FFD700]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-black text-[#FFD700]' : 'bg-[#060709] text-[#FFD700] border border-[#D4AF37]/30'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-base font-bold font-serif ${isActive ? 'text-black' : 'text-white'}`}>
                        {service.title}
                      </h4>
                      <span className={`text-[11px] font-bold block ${isActive ? 'text-black/80' : 'text-[#FFD700]'}`}>
                        {service.badge}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 text-black' : 'text-stone-400 group-hover:text-white'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Active Service Content */}
          <div className="lg:col-span-8">
            <div className="glass-card-gold p-8 md:p-10 border-[#FFD700]/40 space-y-6 relative overflow-hidden">
              <div className="space-y-2">
                <span className="gold-badge">{serviceCategories[activeTab].badge}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
                  {serviceCategories[activeTab].title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed font-semibold">
                  {serviceCategories[activeTab].desc}
                </p>
              </div>

              {/* Items checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-widest text-[#FFD700] font-bold">Leistungsumfang im Detail</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {serviceCategories[activeTab].items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#060709]/70 border border-[#D4AF37]/25">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD700] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-stone-200 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner */}
              <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-stone-400 block font-semibold">Jetzt Service im Schossacher 22 Buchen</span>
                  <span className="text-sm font-bold text-white">Garantiert ohne lange Wartezeiten</span>
                </div>
                <a href="/kontakt" className="btn-gold text-xs !py-3 !px-6 text-decoration-none">
                  Termin Vereinbaren
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
