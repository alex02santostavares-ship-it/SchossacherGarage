import React, { useState } from 'react';
import { 
  Wrench, ShieldCheck, Cpu, Disc, Disc3, Wind, Sparkles, 
  Car, ArrowRight, Check, X, Calendar 
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
    <section id="services" className="section-padding relative bg-[#FDFBF7]">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="gold-badge mx-auto">
            <Wrench className="w-4 h-4 text-[#B45309]" />
            <span>Meisterhafte Werkstattarbeiten</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Unsere <span className="text-gold-gradient font-serif">Werkstatt-Dienstleistungen</span>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg font-medium">
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
                className="glass-card-gold p-6 flex flex-col justify-between cursor-pointer group hover:border-[#D97706] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-[#D97706] flex items-center justify-center text-[#B45309] group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full border border-amber-500/30">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-[#B45309] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-medium">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#B45309]">{srv.price}</span>
                  <span className="text-xs font-bold text-[#D97706] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
            className="glass-card-gold max-w-xl w-full p-8 relative border-[#D97706] shadow-2xl !bg-[#FDFBF7]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-zinc-900 rounded-full bg-amber-500/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-white flex items-center justify-center font-bold">
                {React.createElement(selectedService.icon, { className: 'w-8 h-8 stroke-[2.5]' })}
              </div>
              <div>
                <span className="text-xs uppercase text-[#B45309] font-bold tracking-wider">{selectedService.badge}</span>
                <h3 className="text-2xl font-bold text-zinc-900 font-serif">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-zinc-700 text-sm mb-6 leading-relaxed font-medium">
              {selectedService.shortDesc}
            </p>

            <div className="bg-[#FAF4E6] rounded-xl p-5 mb-6 border border-amber-500/20">
              <h4 className="text-xs uppercase tracking-widest text-[#B45309] font-bold mb-3">Leistungsumfang</h4>
              <ul className="space-y-2.5">
                {selectedService.details.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-zinc-800 font-semibold">
                    <Check className="w-4 h-4 text-[#D97706] flex-shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-xs text-zinc-500 block font-semibold">Richtpreis</span>
                <span className="text-lg font-bold text-[#B45309] font-mono">{selectedService.price}</span>
              </div>

              <a 
                href="/kontakt" 
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
