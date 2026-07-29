import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marc Oberholzer',
      location: 'Zürich',
      text: 'Ich habe meinen Porsche 911 zur MFK-Vorbereitung und zum Service gebracht. Die Betreuung war erstklassig, absolut transparent und pünktlich. Sehr empfehlenswert!',
      car: 'Porsche 911 GTS'
    },
    {
      name: 'Sandra & Thomas Keller',
      location: 'Aargau',
      text: 'Unseren Audi RS6 haben wir über die Schossacher Garage verkauft und direkt ein neues Fahrzeug eingetauscht. Der Preis war super fair und die Abwicklung extrem unkompliziert.',
      car: 'Audi RS6 Avant'
    },
    {
      name: 'Beat Schneider',
      location: 'Luzern',
      text: 'Ehrliche Werkstatt mit echtem Fachwissen! Bei anderen Garagen sollte der Motor zerlegt werden, Schossacher Garage hat das Problem in 30 Min durch präzise Elektronikdiagnose gelöst.',
      car: 'BMW M5'
    }
  ];

  return (
    <section className="section-padding relative bg-[#0b0c10]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="gold-badge mx-auto">
            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span>Kundenstimmen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Was unsere <span className="text-gold-gradient font-serif">Kunden Sagen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card p-8 relative flex flex-col justify-between hover:border-[#D4AF37]/30">
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex text-[#D4AF37] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </h4>
                  <span className="text-xs text-slate-400">{rev.location} • {rev.car}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
