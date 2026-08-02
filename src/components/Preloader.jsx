import React, { useState, useEffect } from 'react';
import { Wrench, Sparkles } from 'lucide-react';

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    try {
      const shown = sessionStorage.getItem('schossacher_preloader_shown');
      if (!shown) {
        setLoading(true);
        const intervalTime = 18; // 18ms * 100 steps = 1.8s + 200ms fade = 2s total
        const timer = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(timer);
              try {
                sessionStorage.setItem('schossacher_preloader_shown', 'true');
              } catch (e) {}
              setTimeout(() => setLoading(false), 200);
              return 100;
            }
            return prev + 1;
          });
        }, intervalTime);

        return () => clearInterval(timer);
      }
    } catch (e) {
      setLoading(false);
    }
  }, []);

  if (!mounted || !loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#050608] flex flex-col items-center justify-center transition-opacity duration-500 ${
      progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Background White Spotlight & Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_45%,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_70%,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

      {/* White/Gold Ambient Center Glow */}
      <div className="absolute w-[450px] h-[450px] bg-white/10 rounded-full blur-[140px] animate-pulse pointer-events-none"></div>

      <div className="relative z-10 text-center space-y-6 px-6 max-w-md">
        {/* Animated Obsidian & Gold Wappen Logo */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 via-[#FFD700] to-white/40 p-[2px] shadow-[0_0_40px_rgba(255,255,255,0.25)] animate-spin-slow">
            <div className="w-full h-full bg-[#050608] rounded-[14px]"></div>
          </div>
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#0D111A] to-[#050608] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFD700] shadow-2xl backdrop-blur-md">
            <Wrench className="w-9 h-9 stroke-[2.2] text-[#FFD700] drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-white uppercase drop-shadow-sm">
            SCHOSSACHER
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-300 font-extrabold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            SWISS GARAGE & AUTOHANDEL
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-2.5 pt-2">
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/20 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-white rounded-full transition-all duration-100 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-xs font-mono font-bold">
            <span className="text-stone-300">Systeme werden geladen...</span>
            <span className="text-white font-extrabold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
