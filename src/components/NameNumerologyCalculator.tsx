import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Binary, ChevronRight, RefreshCw, Smartphone, BookOpen, MessageSquare, PhoneCall, ArrowRight, Info, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import { SOCIAL_LINKS } from '../lib/constants';

const CHALDEAN_CHART: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

const NUMBER_MEANINGS: Record<number, string> = {
  1: "You are a natural leader, independent, and creative. Type 1 individuals are ambitious and possess strong willpower to pioneer new paths.",
  2: "You are diplomatic, sensitive, and cooperative. Number 2 individuals thrive in partnerships and possess great emotional intelligence.",
  3: "You are expressive, joyful, and creative. Number 3 individuals are gifted communicators who inspire others with their optimistic outlook.",
  4: "You are practical, disciplined, and reliable. Number 4 individuals are the builders of society, providing stability and order.",
  5: "You are adaptable, intelligent, communicative, and freedom-loving. Number 5 individuals thrive in dynamic environments and possess strong persuasive abilities.",
  6: "You are nurturing, responsible, and harmonious. Number 6 individuals are natural caregivers who seek to create beauty and balance.",
  7: "You are analytical, introspective, and spiritual. Number 7 individuals are seekers of truth who possess deep wisdom and intuition.",
  8: "You are authoritative, efficient, and ambitious. Number 8 individuals possess great executive ability and are driven toward material and spiritual mastery.",
  9: "You are compassionate, idealistic, and humanitarian. Number 9 individuals are selfless souls who seek to make a global impact and serve the greater good."
};

export function NameNumerologyCalculator({ onBack }: { onBack?: () => void }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<{
    breakdown: { char: string; val: number }[];
    compound: number;
    single: number;
    psychic: number;
    destiny: number;
    verdict: string;
    verdictDesc: string;
    score: number;
  } | null>(null);

  const calculateNameNumerology = () => {
    if (!name.trim() || dob.length < 10) return;

    setIsCalculating(true);
    setResults(null);

    setTimeout(() => {
      const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
      const breakdown = cleanName.split('').map(char => ({
        char,
        val: CHALDEAN_CHART[char] || 0
      }));

      const compound = breakdown.reduce((acc, curr) => acc + curr.val, 0);
      
      const getSingleDigit = (n: number | string): number => {
        let num = typeof n === 'string' ? parseInt(n.replace(/\D/g, '')) : n;
        while (num > 9) {
          num = String(num).split('').reduce((a, b) => a + parseInt(b), 0);
        }
        return num;
      };

      const psychic = getSingleDigit(dob.split('-')[2] || '1'); // Day of month
      const destinySum = dob.replace(/\D/g, '').split('').reduce((a, b) => a + parseInt(b), 0);
      const destiny = getSingleDigit(destinySum);
      const single = getSingleDigit(compound);

      // Using simpler matrix for quick result
      const getScore = (n1: number, n2: number) => {
        const matrix: Record<number, Record<number, number>> = {
          1: { 1: 3, 2: 3, 3: 3, 4: 1, 5: 3, 6: 2, 7: 3, 8: -1, 9: 3 },
          2: { 1: 3, 2: 2, 3: 3, 4: -1, 5: 3, 6: 1, 7: 1, 8: -2, 9: 3 },
          3: { 1: 3, 2: 3, 3: 2, 4: 1, 5: 3, 6: -1, 7: 3, 8: 1, 9: 3 },
          4: { 1: 1, 2: -1, 3: 1, 4: 2, 5: 3, 6: 3, 7: 3, 8: 3, 9: -1 },
          5: { 1: 3, 2: 3, 3: 3, 4: 3, 5: 2, 6: 3, 7: 1, 8: 3, 9: 3 },
          6: { 1: 2, 2: 1, 3: -1, 4: 3, 5: 3, 6: 2, 7: 3, 8: 3, 9: 3 },
          7: { 1: 3, 2: 1, 3: 3, 4: 3, 5: 1, 6: 3, 7: 2, 8: -1, 9: -1 },
          8: { 1: -1, 2: -2, 3: 1, 4: 3, 5: 3, 6: 3, 7: -1, 8: 2, 9: 1 },
          9: { 1: 3, 2: 3, 3: 3, 4: -1, 5: 3, 6: 3, 7: -1, 8: 1, 9: 2 },
        };
        return matrix[n1]?.[n2] || 1;
      };

      const score = getScore(single, destiny) + getScore(single, psychic);
      
      let verdict = "Neutral";
      let verdictDesc = "The alignment is stable but could be improved for better manifestation.";
      if (score >= 4) {
        verdict = "Excellent";
        verdictDesc = "Outstanding! Your name vibration is in perfect harmony with your birth frequency.";
      } else if (score >= 2) {
        verdict = "Good";
        verdictDesc = "A supportive vibration that aligns well with your destiny path.";
      } else if (score < 0) {
        verdict = "Conflicting";
        verdictDesc = "Vibrational friction detected. This frequency may hinder your progress.";
      }

      setResults({
        breakdown,
        compound,
        single,
        psychic,
        destiny,
        verdict,
        verdictDesc,
        score
      });
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-1 pb-16">
      {/* Hero Section */}
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
            Discover the <span style={{ color: '#C9A84C' }}>power hidden</span> in your name
          </h2>
          <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '4px auto 0' }}></div>
        </div>
        <p className="text-[15px] md:text-[16px] text-[#1C3557]/60 max-w-2xl mx-auto font-sans leading-relaxed italic mb-6">
          Your name's frequency influences your career, wealth, and destiny. Decode the vibrational energy of your identity using the precise Chaldean frequency matrix.
        </p>
        {onBack && (
          <div className="flex justify-center mt-6">
            <button 
              onClick={onBack}
              className="px-8 py-4 bg-white border border-[#1C3557]/10 text-[#1C3557] font-display font-black tracking-widest text-[11px] uppercase hover:bg-[#1C3557] hover:text-white transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm relative z-10"
            >
              Back to Tools <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Calculator Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-12"
        >
          <div className="glass-card p-10 md:p-16 rounded-none purple-glow relative overflow-hidden ring-1 ring-black/5 bg-white/40 shadow-xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 blur-[120px] -z-10 rounded-full" />
             
             <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                   <div>
                      <label className="text-[10px] tracking-[0.4em] font-black text-text-body/60 mb-4 block uppercase text-left">Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value.replace(/[0-9]/g, ''))}
                        placeholder="Legal Name..."
                        className="w-full bg-white border border-gold/20 rounded-xl px-6 py-4 text-black font-display text-lg tracking-widest focus:border-gold outline-none transition-all placeholder:text-gray-300"
                      />
                   </div>
                   <div>
                      <label className="text-[10px] tracking-[0.4em] font-black text-text-body/60 mb-4 block uppercase text-left">Date of Birth</label>
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full bg-white border border-gold/20 rounded-xl px-6 py-4 text-black font-display text-lg tracking-widest focus:border-gold outline-none transition-all"
                      />
                   </div>
                </div>

                <button
                  onClick={calculateNameNumerology}
                  disabled={!name.trim() || !dob || isCalculating}
                  className={cn(
                    "w-full py-6 rounded-2xl font-display font-bold tracking-[0.4em] text-[11px] transition-all flex items-center justify-center gap-4",
                    name.trim() && dob && !isCalculating
                      ? "bg-premium-charcoal text-white shadow-2xl hover:scale-[1.02] active:scale-95"
                      : "bg-black/5 text-black/20 border border-black/5 cursor-not-allowed"
                  )}
                >
                  {isCalculating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      SYNCHRONIZING...
                    </>
                  ) : (
                    <>
                      ANALYZE DESTINY MATRIX
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
             </div>

             <AnimatePresence>
                {results && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-20 pt-20 border-t border-black/5"
                  >
                    {/* Core Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                       <div className="p-6 bg-white border border-black/5 rounded-2xl text-center">
                          <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-1 block">Name Total</span>
                          <span className="text-2xl font-display font-black text-premium-charcoal">{results.compound}</span>
                       </div>
                       <div className="p-6 bg-white border border-black/5 rounded-2xl text-center">
                          <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-1 block">Birth No.</span>
                          <span className="text-2xl font-display font-black text-premium-charcoal">{results.psychic}</span>
                       </div>
                       <div className="p-6 bg-white border border-black/5 rounded-2xl text-center">
                          <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-1 block">Destiny No.</span>
                          <span className="text-2xl font-display font-black text-premium-charcoal">{results.destiny}</span>
                       </div>
                       <div className="p-6 bg-gold text-white rounded-2xl text-center shadow-lg shadow-gold/20">
                          <span className="text-[9px] font-black text-white/60 uppercase tracking-widest mb-1 block">Vibration</span>
                          <span className="text-2xl font-display font-black">{results.single}</span>
                       </div>
                    </div>

                    <div className="mb-16">
                      <div className={cn(
                        "p-8 rounded-3xl border-2 flex flex-col md:flex-row items-center gap-8",
                        results.score >= 2 ? "bg-green-50/50 border-green-200" : 
                        results.score === 1 ? "bg-yellow-50/50 border-yellow-200" : 
                        "bg-red-50/50 border-red-200"
                      )}>
                        <div className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg",
                          results.score >= 2 ? "bg-green-500 text-white shadow-green-100" : 
                          results.score === 1 ? "bg-yellow-500 text-white shadow-yellow-100" : 
                          "bg-red-500 text-white shadow-red-100"
                        )}>
                           <Sparkles className="w-8 h-8" />
                        </div>
                        <div className="text-center md:text-left">
                           <h4 className="text-xl font-display font-black text-premium-charcoal mb-2">
                             Result: {results.verdict} Alignment
                           </h4>
                           <p className="text-sm text-text-body/70 leading-relaxed font-medium italic">
                             {results.verdictDesc}
                           </p>
                        </div>
                      </div>
                    </div>

                    {/* Breakdown Display */}
                    <div className="text-center mb-10">
                       <span className="text-[10px] font-black text-gold uppercase tracking-widest">Character Vibration Breakdown</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                      {results.breakdown.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex flex-col items-center"
                        >
                          <div className="text-2xl font-display font-bold text-premium-charcoal mb-2">{item.char}</div>
                          <div className="text-[10px] font-black text-gold border border-gold/20 rounded-full w-6 h-6 flex items-center justify-center bg-gold/5">{item.val}</div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Compound Number Card */}
                      <div className="p-10 rounded-none bg-white border border-gold/10 shadow-lg relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -z-10" />
                        <span className="text-[10px] text-gold tracking-[0.5em] font-black mb-6 block opacity-50">Compound Number</span>
                        <div className="flex items-end gap-6 mb-8">
                          <h3 className="text-[24pt] font-display font-black text-premium-charcoal leading-none">{results.compound}</h3>
                          <Binary className="w-8 h-8 text-gold/40 mb-2" />
                        </div>
                        <p className="text-[13px] text-text-body/50 leading-relaxed font-light">
                          The compound number reflects the spiritual or hidden forces at play in your name's resonance.
                        </p>
                      </div>

                      {/* Single Digit Card */}
                      <div className="p-10 rounded-none bg-gold shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)] relative group overflow-hidden border border-white/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl -z-10" />
                        <span className="text-[10px] text-white tracking-[0.5em] font-black mb-6 block opacity-80">Name Number (Single)</span>
                        <div className="flex items-end gap-6 mb-8">
                          <h3 className="text-[24pt] font-display font-black text-white leading-none">{results.single}</h3>
                          <Sparkles className="w-8 h-8 text-white/50 mb-2" />
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed font-light">
                          The single digit represents your primary vibration and how the world perceives your core identity.
                        </p>
                      </div>
                    </div>

                    {/* Meaning Section */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-16 p-10 md:p-14 rounded-[2.5rem] bg-premium-gray/50 border border-black/5"
                    >
                       <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-accent-purple shadow-sm">
                             <BookOpen className="w-6 h-6" />
                          </div>
                          <h4 className="text-xl font-display font-bold text-premium-charcoal">Vibrational Insight</h4>
                       </div>
                       <p className="text-lg md:text-xl text-text-body/80 leading-relaxed font-light font-serif">
                          "Number {results.single}: {NUMBER_MEANINGS[results.single]}"
                       </p>
                    </motion.div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>
        </motion.div>
      </div>

    {/* CTA Section */}
        <motion.section 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-20 rounded-none bg-[#1C3557] shadow-[0_40px_100px_-20px_rgba(28,53,87,0.3)] relative overflow-hidden group text-center border border-royal-gold/10"
          >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-8 italic text-white leading-tight">
            <span className="text-white">Align Your</span> <span className="text-[#C9A84C]">Name now</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            Your name's frequency can be the difference between struggle and success. Get a professional consultation to align your name's total vibration with your life path and unlock prosperity.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="/consultation" 
              className="px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 rounded-none border border-transparent"
            >
              Book Consultation <PhoneCall className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/917406357511" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-12 py-6 bg-white/5 border border-white/20 text-white font-display font-black tracking-widest text-[12px] uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-4 rounded-none"
            >
              WhatsApp <MessageSquare className="w-4 h-4 text-[#C9A84C]" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
