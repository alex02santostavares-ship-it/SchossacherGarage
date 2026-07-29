import React, { useState, useEffect } from 'react';
import { Wrench } from 'lucide-react';

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
    <div className={`fixed inset-0 z-[9999] bg-[#FDFBF7] flex flex-col items-center justify-center transition-opacity duration-500 ${
      progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Gold Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#F59E0B]/20 rounded-full blur-[140px] animate-pulse"></div>

      <div className="relative z-10 text-center space-y-6 px-6 max-w-md">
        {/* Animated Gold Logo */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FEF08A] via-[#F59E0B] to-[#D97706] p-[2.5px] shadow-[0_0_50px_rgba(245,158,11,0.4)]">
            <div className="w-full h-full bg-[#FDFBF7] rounded-[14px]"></div>
          </div>
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#D97706] flex items-center justify-center text-white font-bold shadow-2xl">
            <Wrench className="w-10 h-10 stroke-[2.5]" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#18181B] uppercase">
            SCHOSSACHER
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-[#B45309] font-extrabold">
            SWISS GARAGE & AUTOHANDEL
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-2">
          <div className="h-2 w-full bg-[#FAF4E6] rounded-full overflow-hidden p-[1px] border border-[#F59E0B]/40">
            <div 
              className="h-full bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#FBBF24] rounded-full transition-all duration-100 shadow-[0_0_20px_rgba(245,158,11,0.6)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-xs font-mono text-zinc-600">
            <span>Systeme werden geladen...</span>
            <span className="text-[#B45309] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
