import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marc Oberholzer',
      location: 'Dübendorf',
      text: 'Ich habe mein Fahrzeug zur MFK-Vorbereitung und zum Service in die Schossacher Garage gebracht. Die Betreuung war erstklassig, absolut transparent und pünktlich.',
      car: 'Porsche 911 GTS'
    },
    {
      name: 'Thomas & Sandra Keller',
      location: 'Zürich',
      text: 'Unseren Audi RS6 haben wir in Dübendorf über Schossacher Garage verkauft und ein neues Fahrzeug eingetauscht. Der Preis war fair und die Abwicklung extrem angenehm.',
      car: 'Audi RS6 Avant'
    },
    {
      name: 'Beat Schneider',
      location: 'Wallisellen',
      text: 'Ehrliche Werkstatt mit echtem Fachwissen! Kompetente Fehlersuche bei der Elektronik und transparente Arbeit direkt im Schossacher 22.',
      car: 'BMW M5'
    }
  ];

  return (
    <section className="section-padding relative bg-[#FEF9E7]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="gold-badge mx-auto">
            <Star className="w-4 h-4 text-[#785E07] fill-[#D4AF37]" />
            <span>4.3 Sterne • 35 Google-Rezensionen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Was unsere <span className="text-gold-gradient font-serif">Kunden Sagen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card-gold p-8 relative flex flex-col justify-between hover:border-[#C5A028] !bg-[#FFFDF5]">
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex text-[#D4AF37] gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                  <Star className="w-4 h-4 fill-[#FEF08A] text-[#D4AF37]" />
                </div>
                <p className="text-stone-700 text-sm italic leading-relaxed font-semibold">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#D4AF37]/20 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-[#785E07]" />
                  </h4>
                  <span className="text-xs text-stone-500 font-semibold">{rev.location} • {rev.car}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
