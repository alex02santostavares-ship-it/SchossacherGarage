import React, { useState, useEffect } from 'react';
import { Wrench, ShieldCheck, Sparkles } from 'lucide-react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#050608] flex flex-col items-center justify-center transition-opacity duration-700 ${
      progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Background Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 text-center space-y-6 px-6 max-w-md">
        {/* Animated Gold Logo */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#F39C12] to-[#FFF5C0] p-[2px] animate-spin-slow shadow-[0_0_50px_rgba(212,175,55,0.4)]">
            <div className="w-full h-full bg-[#07080a] rounded-[14px]"></div>
          </div>
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA771C] flex items-center justify-center text-black font-bold shadow-2xl">
            <Wrench className="w-10 h-10 animate-bounce-subtle" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-white uppercase">
            SCHOSSACHER
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            SWISS AUTOMOTIVE EXCELLENCE
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-2">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] rounded-full transition-all duration-100 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
            <span>Systeme werden geladen...</span>
            <span className="text-[#D4AF37] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
