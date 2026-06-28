import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, User, Search, RefreshCw, MessageSquare, PhoneCall, ChevronRight, ArrowLeft } from 'lucide-react';

const PYTHAGOREAN_CHART: Record<string, number> = {
  'A': 1, 'J': 1, 'S': 1,
  'B': 2, 'K': 2, 'T': 2,
  'C': 3, 'L': 3, 'U': 3,
  'D': 4, 'M': 4, 'V': 4,
  'E': 5, 'N': 5, 'W': 5,
  'F': 6, 'O': 6, 'X': 6,
  'G': 7, 'P': 7, 'Y': 7,
  'H': 8, 'Q': 8, 'Z': 8,
  'I': 9, 'R': 9
};

const VOWELS = ['A', 'E', 'I', 'O', 'U'];

interface CalculationDetail {
  char: string;
  val: number;
}

interface ResultData {
  title: string;
  desc: string;
  details: CalculationDetail[];
  total: number;
  final: number;
  icon: any;
}

interface Results {
  expression: ResultData;
  heartDesire: ResultData;
  personality: ResultData;
}

export default function PythagoreanCalculator({ onBack }: { onBack?: () => void }) {
  const [name, setName] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState('');

  const getLetterValue = (char: string): number => {
    return PYTHAGOREAN_CHART[char.toUpperCase()] || 0;
  };

  const reduceNumber = (num: number, keepMaster = true): number => {
    if (keepMaster && (num === 11 || num === 22 || num === 33)) {
      return num;
    }
    if (num <= 9) return num;
    
    const sum = String(num).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return reduceNumber(sum, keepMaster);
  };

  const calculateResults = () => {
    if (!name.trim()) {
      setError('Please enter a name to decode your vibration');
      return;
    }
    setError('');
    setIsCalculating(true);
    
    setTimeout(() => {
      const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
      const chars = cleanName.split('');
      
      const expressionDetails = chars.map(c => ({ char: c, val: getLetterValue(c) }));
      const expressionTotal = expressionDetails.reduce((acc, item) => acc + item.val, 0);
      const expressionFinal = reduceNumber(expressionTotal);

      const vowelDetails = chars.filter(c => VOWELS.includes(c)).map(c => ({ char: c, val: getLetterValue(c) }));
      const vowelTotal = vowelDetails.reduce((acc, item) => acc + item.val, 0);
      const vowelFinal = reduceNumber(vowelTotal);

      const consonantDetails = chars.filter(c => !VOWELS.includes(c)).map(c => ({ char: c, val: getLetterValue(c) }));
      const consonantTotal = consonantDetails.reduce((acc, item) => acc + item.val, 0);
      const personalityFinal = reduceNumber(consonantTotal);

      setResults({
        expression: {
          title: "Expression Number",
          desc: "Your overall potential, innate talents, and how you express yourself in the world.",
          details: expressionDetails,
          total: expressionTotal,
          final: expressionFinal,
          icon: Sparkles
        },
        heartDesire: {
          title: "Heart Desire Number",
          desc: "Also known as Soul Urge, this reveals your inner cravings, motivations, and deepest likes.",
          details: vowelDetails,
          total: vowelTotal,
          final: vowelFinal,
          icon: Heart
        },
        personality: {
          title: "Personality Number",
          desc: "How others perceive you - your social persona and the first impression you make.",
          details: consonantDetails,
          total: consonantTotal,
          final: personalityFinal,
          icon: User
        }
      });
      setIsCalculating(false);
      
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  };

  return (
    <div className="w-full bg-transparent text-[#1C3557] font-sans overflow-hidden rounded-none pb-4">
      {/* SECTION 1: Hero Section */}
      <div className="text-center mb-10 pt-[45px] md:pt-[55px]">
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
            Decode the <span style={{ color: '#C9A84C' }}>energy hidden</span> in your name
          </h2>
          <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '4px auto 0' }}></div>
        </div>
        <p className="text-[14px] md:text-[15px] text-[#1C3557]/70 max-w-xl mx-auto font-sans leading-relaxed italic mb-4">
          Discover your expression, heart desire, and personality numbers using the ancient Pythagorean vibrational system.
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

      {/* SECTION 2: Calculator Card */}
      <section id="calculator-card" className="py-4 md:py-6 px-4 max-w-2xl mx-auto relative mt-[50px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card bg-white/40 border border-[#C9A84C]/25 rounded-none p-6 md:p-10 shadow-xl relative overflow-hidden"
        >
          <div className="mb-6">
            <label className="text-sm md:text-base font-bold tracking-[0.15em] text-[#1C3557] mb-4 block text-center uppercase">
              Enter Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  const val = e.target.value.replace(/[0-9]/g, '');
                  setName(val);
                  if (val.trim()) {
                    setError('');
                  }
                }}
                placeholder="First, second/ full name"
                className="w-full bg-white border border-[#C9A84C]/30 hover:border-[#C9A84C]/50 rounded-none py-1.5 px-3 md:py-2 md:px-4 text-black font-sans text-sm md:text-base tracking-wider focus:border-[#C9A84C] outline-none transition-all placeholder:text-gray-400 text-center"
                onKeyPress={(e) => e.key === 'Enter' && calculateResults()}
              />
              {error && (
                <p className="text-red-600 text-sm mt-3 text-center font-sans font-medium tracking-wide">
                  {error}
                </p>
              )}
            </div>
          </div>

           <button
            onClick={calculateResults}
            disabled={isCalculating}
            className="w-full py-5 rounded-none font-sans font-extrabold tracking-[0.25em] text-base md:text-lg transition-all flex items-center justify-center gap-2 shadow-xl uppercase bg-[#C9A84C] text-[#0D1B3E] hover:bg-[#b59540] hover:scale-[1.01] active:scale-95 cursor-pointer border border-[#C9A84C]/50 hover:border-[#C9A84C] disabled:opacity-50 disabled:cursor-not-allowed duration-300"
          >
            {isCalculating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Calculating Vibration...
              </>
            ) : (
              <>
                Unlock Name Energy
                <ChevronRight className="w-5 h-5 font-bold" />
              </>
            )}
          </button>
        </motion.div>
      </section>

      {/* SECTION 3: Results Section */}
      <AnimatePresence>
        {results && (
          <section id="results-section" className="py-4 md:py-6 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-[10px] tracking-[0.6em] font-black text-[#C9A84C] mb-2 block">Analysis complete</span>
              <h2 className="text-4xl md:text-5xl font-display font-light italic text-[#1C3557]">Your Cosmic <span className="not-italic font-black text-[#1C3557]">Vibrational Profile</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[results.expression, results.heartDesire, results.personality].map((res, idx) => (
                <motion.div
                  key={res.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white/40 border border-[#C9A84C]/25 rounded-none p-5 md:p-6 hover:border-[#C9A84C]/35 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-[#C9A84C]/10 transition-colors" />
                    
                    <div className="w-12 h-12 rounded-none bg-[#1C3557]/5 border border-[#1C3557]/10 flex items-center justify-center text-[#C9A84C] mb-3 group-hover:bg-[#C9A84C] group-hover:text-white transition-all duration-300">
                      <res.icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-display font-bold text-[#1C3557] mb-2 italic truncate">{res.title}</h3>
                    
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-[20pt] font-display font-black text-[#1C3557] leading-none">
                        {res.final === 11 || res.final === 22 || res.final === 33 ? `${res.final}/${reduceNumber(res.final, false)}` : res.final}
                      </span>
                      <div className="h-6 w-[2px] bg-[#C9A84C]/20 rotate-[20deg]" />
                      <span className="text-sm text-[#1C3557]/50 font-display font-light">Compound {res.total}</span>
                    </div>

                    <p className="text-xs text-[#1C3557]/80 font-light leading-relaxed">
                      {res.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SECTION 4: Calculation Breakdown */}
             <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-white/40 border border-[#C9A84C]/25 rounded-none p-5 md:p-6 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-none bg-[#1C3557]/5 border border-[#1C3557]/10 flex items-center justify-center text-[#1C3557]/60">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#1C3557]">Mathematical Breakdown</h3>
              </div>

              <div className="space-y-6">
                {[results.expression, results.heartDesire, results.personality].map((res, idx) => (
                  <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#C9A84C]/20">
                    <h4 className="text-xs tracking-[0.4em] font-black text-[#C9A84C] mb-2">{res.title}</h4>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-3 mb-2">
                      {res.details.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-[18pt] font-display font-medium text-[#1C3557]">{item.char}</span>
                          <span className="text-[9px] font-black text-[#1C3557]/50">({item.val})</span>
                        </div>
                      ))}
                      <div className="text-[#1C3557]/40 px-2 font-display font-black">=</div>
                      <div className="text-[18pt] font-display font-black text-[#1C3557]">{res.total}</div>
                      <div className="text-[#1C3557]/40 px-2 font-display font-black">=</div>
                      <div className="text-[18pt] font-display font-black text-[#C9A84C]">{res.final}</div>
                    </div>
                    
                    <p className="text-[10px] text-[#1C3557]/60 font-light italic">
                      {res.title === 'Expression Number' ? 'Includes all letters in full name.' : 
                       res.title === 'Heart Desire Number' ? 'Includes only vowels (A, E, I, O, U).' : 
                       'Includes only consonants.'}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        )}
      </AnimatePresence>

      {/* SECTION 5: Consultation CTA */}
      <section className="py-8 px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-12 md:p-20 rounded-none bg-[#1C3557] relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(13,27,62,0.4)] border border-[#C9A84C]/20 text-center text-white"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display mb-8 italic text-white leading-tight">
              <span className="text-white">Align Your</span> <span className="text-[#C9A84C]">Name now</span>
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto font-light italic leading-loose">
              Your name's frequency can be the difference between struggle and success. Get a professional consultation to align your name's total vibration with your life path and unlock prosperity.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link 
                to="/consultation" 
                className="px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 rounded-none border border-transparent"
              >
                Book consultation <PhoneCall className="w-4 h-4" />
              </Link>
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
        </motion.div>
      </section>

      {/* Info helper modal trigger or summary */}
      <div className="pb-4 px-4 text-center">
        <p className="text-[10px] tracking-[0.5em] text-slate-600 font-medium">
          Ancient science • Modern precision • Destiny Numbers
        </p>
      </div>
    </div>
  );
}
