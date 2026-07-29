import React, { useState } from 'react';
import { 
  Wrench, ShieldCheck, Cpu, Disc, Disc3, Wind, Sparkles, 
  Car, Clock, ArrowRight, Check, X, Calendar 
} from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const serviceList = [
    {
      id: 'mfk',
      title: 'MFK-Vorbereitung & Vorführung',
      icon: ShieldCheck,
      badge: 'Schweizer Garantie',
      shortDesc: 'Vollständiger MFK-Check inklusive Mängelbeseitigung und Vorführung beim Strassenverkehrsamt.',
      details: [
        'Gründlicher Vor-MFK System-Check',
        'Bremsen-, Licht- und Abgastest',
        'Unterboden- & Motorwäsche',
        'Direkte Vorführung auf Wunsch durch unser Team'
      ],
      price: 'Ab CHF 190.-'
    },
    {
      id: 'reparatur',
      title: 'KFZ-Reparaturen & Wartung',
      icon: Wrench,
      badge: 'Herstellerkonform',
      shortDesc: 'Service nach Herstellervorgaben mit Erhalt der vollen Werkgarantie für alle Marken.',
      details: [
        'Zahnriemen- & Steuerkettenwechsel',
        'Ölwechsel inkl. Qualitätsöl & Filter',
        'Getriebespülung & Kupplungsservice',
        'Originalersatzteile in Erstausrüsterqualität'
      ],
      price: 'Nach Aufwand / Festpreis'
    },
    {
      id: 'diagnose',
      title: 'Elektronik & High-Tech Diagnostik',
      icon: Cpu,
      badge: 'Moderne OBD-III',
      shortDesc: 'Präzise Fehlersuche mittels modernster Diagnosecomputer für alle Fahrzeugelektroniken.',
      details: [
        'Auslesen des Fehlerspeichers aller Steuergeräte',
        'Batterie- & Lichtmaschinen-Prüfung',
        'Sensoren- & Steuergerätekalibrierung',
        'Assistenzsystem-Einmessung'
      ],
      price: 'Ab CHF 80.-'
    },
    {
      id: 'bremsen',
      title: 'Bremsen- & Fahrwerksservice',
      icon: Disc3,
      badge: 'Maximale Sicherheit',
      shortDesc: 'Fachgerechter Austausch von Bremsscheiben, Belägen, Stoßdämpfern & Spureinstellung.',
      details: [
        'Sicherheits-Check der Bremsanlage',
        'Qualitäts-Bremsscheiben & Sportbeläge',
        'Stoßdämpfer- & Federnwechsel',
        'Elektronische 3D-Spurvermessung'
      ],
      price: 'Ab CHF 220.-'
    },
    {
      id: 'reifen',
      title: 'Reifen- & Räderservice',
      icon: Disc,
      badge: 'Inkl. Einlagerung',
      shortDesc: 'Reifenwechsel, Auswuchten, Neureifenkauf sowie bequemes Hotel für Ihre Saisonräder.',
      details: [
        'Räder- & Reifensechsel (Sommer/Winter)',
        'Präzisions-Auswuchten & RDKS-Anlernung',
        'Reifeneinlagerung im klimatisierten Räderhotel',
        'Verkauf aller Premium-Reifenmarken'
      ],
      price: 'Wechsel ab CHF 60.-'
    },
    {
      id: 'klima',
      title: 'Klimaservice & Abgaswartung',
      icon: Wind,
      badge: 'Frische & Gesundheit',
      shortDesc: 'Kältemittel-Auffüllung (R134a & R1234yf), Ozon-Desinfektion und Abgasprüfung.',
      details: [
        'Kältemittel-Absaugung & Befüllung',
        'Dichtigkeitsprüfung (Formiergas)',
        'Innenraumfilter-Wechsel & Ozonbehandlung',
        'Abgaswartung nach Schweizer Gesetz'
      ],
      price: 'Ab CHF 110.-'
    },
    {
      id: 'detailing',
      title: 'Car Detailing & Aufbereitung',
      icon: Sparkles,
      badge: 'High-End Finish',
      shortDesc: 'Professionelle Innen- & Aussenreinigung, Keramikversiegelung und Lackkorrektur.',
      details: [
        'Mehrstufige Lackpolitur & Kratzerentfernung',
        'Langanhaltende Keramik-Versiegelung',
        'Lederpflege & Deep Clean Innenraum',
        'Verkaufsvorbereitung für Ihren Gebrauchten'
      ],
      price: 'Ab CHF 250.-'
    },
    {
      id: 'ersatzwagen',
      title: 'Ersatzwagen & Hol-Bring-Service',
      icon: Car,
      badge: 'Immer Mobil',
      shortDesc: 'Kostenlose Mobilität während des Werkstattaufenthalts oder bequemer Abholservice.',
      details: [
        'Moderne Ersatzfahrzeuge stehen bereit',
        'Kostenfreie Nutzung bei Service ab CHF 500.-',
        'Hol- & Bring-Service im Umkreis von 25km',
        'Flexibles Bringen & Abholen rund um die Uhr'
      ],
      price: 'Ab CHF 35.- / Tag'
    }
  ];

  return (
    <section id="services" className="section-padding relative bg-[#07080a]">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="gold-badge mx-auto">
            <Wrench className="w-4 h-4 text-[#D4AF37]" />
            <span>Meisterhafte Werkstattarbeiten</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Unsere <span className="text-gold-gradient font-serif">Werkstatt-Dienstleistungen</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Von der routinemässigen Inspektion über komplexe Reparaturen bis hin zur MFK-Vorführung – bei Schossacher Garage ist Ihr Fahrzeug in besten Händen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className="glass-card p-6 flex flex-col justify-between cursor-pointer group hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-300">{srv.price}</span>
                  <span className="text-xs font-bold text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div 
            className="glass-card max-w-xl w-full p-8 relative animate-in zoom-in-95 duration-200 border-[#D4AF37]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] text-black flex items-center justify-center font-bold">
                {React.createElement(selectedService.icon, { className: 'w-8 h-8' })}
              </div>
              <div>
                <span className="text-xs uppercase text-[#D4AF37] font-semibold tracking-wider">{selectedService.badge}</span>
                <h3 className="text-2xl font-bold text-white font-serif">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {selectedService.shortDesc}
            </p>

            <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-3">Leistungsumfang</h4>
              <ul className="space-y-2.5">
                {selectedService.details.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-xs text-slate-400 block">Richtpreis</span>
                <span className="text-lg font-bold text-white font-mono">{selectedService.price}</span>
              </div>

              <a 
                href="#contact" 
                onClick={() => setSelectedService(null)}
                className="btn-gold text-decoration-none text-sm"
              >
                <Calendar className="w-4 h-4" />
                Jetzt Termin Anfragen
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
