import React from 'react';
import { Shield, Award, Clock, DollarSign, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: Shield,
      title: 'Schweizer Qualitätsgarantie',
      desc: 'Alle Arbeiten werden streng nach Herstellervorgaben mit Schweizer Präzision und Garantie ausgeführt.'
    },
    {
      icon: DollarSign,
      title: 'Transparente Festpreise',
      desc: 'Keine versteckten Kosten. Sie erhalten vor jeder Reparatur eine klare Aufschlüsselung aller Arbeiten.'
    },
    {
      icon: Clock,
      title: 'Kostenfreier Ersatzwagen',
      desc: 'Bleiben Sie während des Werkstattaufenthalts Ihres Autos stets mobil mit unseren modernen Ersatzwagen.'
    },
    {
      icon: HeartHandshake,
      title: 'Fairer An- & Verkauf',
      desc: 'Ehrliche Schweizer Marktbewertung bei der Inzahlungnahme oder dem Kauf Ihrer nächsten Occasion.'
    }
  ];

  return (
    <section id="why-us" className="section-padding relative bg-[#FDFBF7]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="gold-badge mx-auto">
            <Award className="w-4 h-4 text-[#B45309]" />
            <span>Warum Schossacher Garage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Verlässlichkeit & <span className="text-gold-gradient font-serif">Erfahrung</span>
          </h2>
          <p className="text-zinc-600 text-sm md:text-base font-medium">
            Wir stehen seit über 15 Jahren für ehrliches Handwerk, Kundennähe und höchste Zufriedenheit im Aargau und der ganzen Schweiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card-gold p-8 text-center space-y-4 hover:border-[#D97706] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-[#D97706] flex items-center justify-center text-[#B45309] mx-auto">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 font-serif">{item.title}</h3>
                <p className="text-zinc-600 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
