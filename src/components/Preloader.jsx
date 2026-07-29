import React, { useState, useEffect } from 'react';
import { Wrench, Sparkles } from 'lucide-react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#FFFDF0] flex flex-col items-center justify-center transition-opacity duration-500 ${
      progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Gold Ambient Pulse Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#FFD700]/25 rounded-full blur-[140px] animate-pulse"></div>

      <div className="relative z-10 text-center space-y-6 px-6 max-w-md">
        {/* Animated Gold Wappen Logo */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FEF08A] via-[#FFD700] to-[#D4AF37] p-[3px] shadow-[0_0_50px_rgba(255,215,0,0.5)] animate-spin-slow">
            <div className="w-full h-full bg-[#FFFDF0] rounded-[13px]"></div>
          </div>
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#B8860B] flex items-center justify-center text-black font-bold shadow-2xl animate-float">
            <Wrench className="w-10 h-10 stroke-[2.5]" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#1C1917] uppercase">
            SCHOSSACHER
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-[#856404] font-extrabold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            SWISS GARAGE & AUTOHANDEL
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-2">
          <div className="h-2.5 w-full bg-[#FEF9D7] rounded-full overflow-hidden p-[1px] border border-[#D4AF37]/50 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] rounded-full transition-all duration-100 shadow-[0_0_20px_rgba(255,215,0,0.8)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-xs font-mono text-stone-600 font-bold">
            <span>Systeme werden geladen...</span>
            <span className="text-[#856404] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
