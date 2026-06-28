import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Sparkles, Binary, ChevronRight, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';
import { StandardDateInput } from './StandardFormFields';

export function NumerologyCalculator() {
  const [dob, setDob] = useState('');
  const [results, setResults] = useState<{ birth: number | null; destiny: number | null } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const reduceNumber = (num: number): number => {
    let sum = num;
    while (sum > 9) {
      sum = String(sum).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    return sum;
  };

  const calculateNumerology = () => {
    if (!dob || dob.length < 10) return;
    
    setIsCalculating(true);
    setResults(null);

    // Simulate "analytical calculation" delay
    setTimeout(() => {
      const parts = dob.trim().split(/[/-]|\s\/\s/).filter(Boolean).map(p => p.trim());
      const day = parseInt(parts[0] || '0');
      
      const birthNumber = reduceNumber(day);
      
      const fullString = dob.replace(/\D/g, '');
      const fullSum = fullString.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
      const destinyNumber = reduceNumber(fullSum);

      setResults({ birth: birthNumber, destiny: destinyNumber });
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="glass-card p-8 md:p-12 rounded-none gold-glow relative overflow-hidden ring-1 ring-white/10">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[100px] -z-10" />

        <div className="text-center mb-10">
          <div className="mb-4">
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: 1.3,
              margin: '0 0 4px 0',
              color: '#1C3557',
              letterSpacing: '0',
              textAlign: 'center'
            }}>
              Analyze your <span style={{ color: '#C9A84C' }}>vibrational</span> destiny
            </h2>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '4px auto 0' }}></div>
          </div>
          <p className="text-[15px] md:text-[16px] text-[#1C3557]/60 max-w-2xl mx-auto font-sans leading-relaxed italic">
            Enter your date of birth to decode the numerical algorithms governing your destiny and internal frequency.
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-8">
          <StandardDateInput
            label="Date of Birth"
            value={dob}
            onChange={setDob}
          />

          <button
            onClick={calculateNumerology}
            disabled={dob.length < 10 || isCalculating}
            className={cn(
              "w-full h-[56px] rounded-none font-serif font-semibold tracking-[0.2em] text-[14px] transition-all flex items-center justify-center gap-3 shadow-lg",
              (dob.length < 10 || isCalculating)
                ? "bg-mystic-navy text-[#F5ECD7]/80 cursor-not-allowed border border-[#C9A84C]/10"
                : "bg-mystic-navy text-[#F5ECD7] hover:bg-[#132845] hover:scale-[1.01] active:scale-95 cursor-pointer"
            )}
          >
            {isCalculating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin text-[#C9A84C]" />
                Decoding Matrix...
              </>
            ) : (
              <>
                Execute Matrix Analysis
                <ChevronRight className={cn(
                  "w-5 h-5 transition-transform group-hover:translate-x-1",
                  (dob.length < 10 || isCalculating) ? "text-[#C9A84C]/80" : "text-[#C9A84C]"
                )} />
              </>
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-white/5"
            >
              <div className="p-8 rounded-none border border-gold/10 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl -z-10 group-hover:bg-gold/10 transition-all" />
                <span className="text-[10px] text-gold tracking-[0.4em] font-black mb-4 block opacity-60">Birth number</span>
                <div className="flex items-end gap-4 mb-6">
                  <h3 className="text-[24pt] font-display font-black text-gold leading-none">{results.birth}</h3>
                  <div className="pb-2">
                    <Sparkles className="w-6 h-6 text-gold opacity-50" />
                  </div>
                </div>
                <h4 className="text-premium-charcoal font-display text-xs tracking-[0.2em] mb-4 font-bold">Key Character Traits</h4>
                <p className="text-[13px] text-text-body/50 font-light leading-relaxed">
                  The Birth Number represents your internal nature and core talents. It is the frequency you broadcast to those closest to you.
                </p>
              </div>

              <div className="p-8 rounded-none border border-gold/10 relative group overflow-hidden bg-white/5 shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl -z-10 group-hover:bg-gold/10 transition-all" />
                <span className="text-[10px] text-gold tracking-[0.4em] font-black mb-4 block opacity-60">Destiny number</span>
                <div className="flex items-end gap-4 mb-6">
                  <h3 className="text-[24pt] font-display font-black text-premium-charcoal leading-none drop-shadow-[0_0_20px_rgba(196,155,102,0.1)]">{results.destiny}</h3>
                  <div className="pb-2">
                    <Binary className="w-6 h-6 text-gold opacity-50" />
                  </div>
                </div>
                <h4 className="text-premium-charcoal font-display text-xs tracking-[0.2em] mb-4 font-bold">Collective Purpose</h4>
                <p className="text-[13px] text-text-body/50 font-light leading-relaxed">
                  Your Destiny Number reveals the path you are meant to walk and the ultimate goal of your current incarnation and brand legacy.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 text-center">
            <p className="text-[10px] text-text-body/20 tracking-[0.4em] italic">
              * This analyzer provides a baseline reduction. <br />
              For Degree Mapping and Dasha timing, book a private session.
            </p>
        </div>
      </div>
    </div>
  );
}
