import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  RefreshCw, 
  Star, 
  Compass,
  ArrowLeft,
  Heart
} from 'lucide-react';
import { cn } from '../lib/utils';
import { StandardNameInput, StandardDateInput } from '../components/StandardFormFields';
import { 
  calculateBirthNumber, 
  calculateLifePathNumber, 
  calculateLoShuGrid, 
  calculateVedicBirthGrid,
  calculateVedicGrid,
  getNameVibrationTotal,
  getCompatibilityScore,
  LO_SHU_POSITIONS,
  getPlaneAnalysis
} from '../lib/numerology';
import { NumerologyMatrix } from '../components/NumerologyMatrix';
import { PREDICTIONS } from '../lib/predictions';

const VEDIC_POSITIONS = [ [3, 1, 9], [6, 7, 5], [2, 8, 4] ];

const getZodiacInfo = (dobString: string) => {
  if (!dobString) return null;
  const parts = dobString.replace(/\s+/g, '').split('/');
  if (parts.length < 2) return null;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  if (isNaN(day) || !month) return null;

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return {
      sign: "Aries",
      symbol: "♈",
      element: "Fire",
      emoji: "🔥",
      keyword: "I am",
      description: "You jump in first and ask questions later — action is your instinct."
    };
  }
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return {
      sign: "Taurus",
      symbol: "♉",
      element: "Earth",
      emoji: "🌍",
      keyword: "I have",
      description: "You need to feel secure before you move — but once committed, nothing stops you."
    };
  }
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return {
      sign: "Gemini",
      symbol: "♊",
      element: "Air",
      emoji: "💨",
      keyword: "I think",
      description: "You process everything through conversation and curiosity before deciding."
    };
  }
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return {
      sign: "Cancer",
      symbol: "♋",
      element: "Water",
      emoji: "💧",
      keyword: "I feel",
      description: "You trust your gut and your heart over logic — emotions guide your choices."
    };
  }
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return {
      sign: "Leo",
      symbol: "♌",
      element: "Fire",
      emoji: "🔥",
      keyword: "I will",
      description: "You think big, plan boldly, and always believe it will happen — your way."
    };
  }
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return {
      sign: "Virgo",
      symbol: "♍",
      element: "Earth",
      emoji: "🌍",
      keyword: "I analyze",
      description: "You notice what others miss and need things to make sense before you act."
    };
  }
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return {
      sign: "Libra",
      symbol: "♎",
      element: "Air",
      emoji: "💨",
      keyword: "I balance",
      description: "You weigh every side carefully — fairness and harmony matter more than speed."
    };
  }
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return {
      sign: "Scorpio",
      symbol: "♏",
      element: "Water",
      emoji: "💧",
      keyword: "I desire",
      description: "You feel things deeply and pursue what you want with quiet, fierce intensity."
    };
  }
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return {
      sign: "Sagittarius",
      symbol: "♐",
      element: "Fire",
      emoji: "🔥",
      keyword: "I see",
      description: "You see the bigger picture instantly and need freedom to explore it your way."
    };
  }
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return {
      sign: "Capricorn",
      symbol: "♑",
      element: "Earth",
      emoji: "🌍",
      keyword: "I use",
      description: "You are practical, patient, and play the long game — results matter most to you."
    };
  }
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return {
      sign: "Aquarius",
      symbol: "♒",
      element: "Air",
      emoji: "💨",
      keyword: "I know",
      description: "You think ahead of your time and march to your own beat, always."
    };
  }
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return {
      sign: "Pisces",
      symbol: "♓",
      element: "Water",
      emoji: "💧",
      keyword: "I believe",
      description: "You live by intuition and feel deeply connected to something beyond the visible world."
    };
  }
  return null;
};

export default function CalculatorPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [calculationProgress, setCalculationProgress] = useState(0);

  const calculate = () => {
    const fullName = `${firstName} ${lastName}`.trim();
    if (!fullName || dob.length < 10) return;
    setIsCalculating(true);
    setResults(null);
    setCalculationProgress(0);

    const interval = setInterval(() => {
      setCalculationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    setTimeout(() => {
      clearInterval(interval);
      const moolank = calculateBirthNumber(dob);
      const bhagyankRaw = calculateLifePathNumber(dob);
      const bhagyank = bhagyankRaw; 
      
      const loShu = calculateLoShuGrid(dob, moolank, bhagyank);
      const vedicBirthGrid = calculateVedicBirthGrid(dob, moolank, bhagyank);
      const vedicGrid = calculateVedicGrid(fullName);
      const nameVibration = getNameVibrationTotal(fullName);
      
      // For prediction key, we always need a single digit 1-9
      const reducedBhagyank = bhagyankRaw > 9 && bhagyankRaw !== 11 && bhagyankRaw !== 22 
        ? (bhagyankRaw % 9 || 9) 
        : (bhagyankRaw === 11 ? 2 : (bhagyankRaw === 22 ? 4 : bhagyankRaw));
      
      const predictionKey = `${moolank}-${reducedBhagyank}`;
      const prediction = PREDICTIONS[predictionKey] || PREDICTIONS["1-1"];

      const planeAnalysis = getPlaneAnalysis(loShu);
      
      // Detect Active Planes
      const arrows = planeAnalysis.filter(p => p.isComplete).map(a => a.name);

      // Add compatibility status
      const nameRes = getNameVibrationTotal(fullName);
      const reducedName = (nameRes % 9) || 9;
      const dScore = getCompatibilityScore(reducedName, reducedBhagyank);
      const pScore = getCompatibilityScore(reducedName, moolank);
      const totalScore = dScore + pScore;

      let verdict = "Neutral";
      let verdictDesc = "The alignment is stable but requires consistent effort to manifest its potential.";
      if (totalScore >= 4) {
        verdict = "Excellent";
        verdictDesc = "Outstanding synchronization between identity and destiny.";
      } else if (totalScore >= 2) {
        verdict = "Good";
        verdictDesc = "Harmonious vibration supporting growth.";
      } else if (totalScore < 0) {
        verdict = "Conflicting";
        verdictDesc = "Vibrational friction detected. Consider name adjustment.";
      }

      setResults({
        name: fullName,
        dob,
        moolank,
        bhagyank,
        loShu,
        vedicBirthGrid,
        vedicGrid,
        nameVibration,
        prediction,
        arrows,
        planeAnalysis,
        verdict,
        verdictDesc,
        score: totalScore
      });
      setIsCalculating(false);
    }, 1000);
  };

  if (results) {
    const loShuPresent = Object.keys(results.loShu).map(Number);
    const loShuMissing = [1,2,3,4,5,6,7,8,9].filter(n => !results.loShu[n]);

    return (
      <div className="min-h-screen bg-[#F5ECD7] text-[#1C3557] pt-12 pb-24 px-6 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <button 
                onClick={() => setResults(null)}
                className="flex items-center gap-2 text-[#C9A84C] text-[10px] font-medium tracking-widest mb-10 hover:translate-x-[-4px] transition-all uppercase"
              >
                <ArrowLeft className="w-4 h-4" /> Recalculate matrix
              </button>
              
              <div className="mb-8">
                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: '32px',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  margin: '0 0 8px 0',
                  color: '#1C3557',
                  letterSpacing: '0'
                }}>
                  Professional <span style={{ color: '#C9A84C' }}>Reading</span>
                </h2>
                <div style={{ width: '60px', height: '1px', background: '#C9A84C' }}></div>
              </div>

              <h1 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: '40px',
                fontWeight: 400,
                color: '#1C3557',
                marginBottom: '24px'
              }}>
                Numerology reading for <span style={{ color: '#C9A84C' }}>{results.name}</span>
              </h1>
              <p className="text-[20px] font-normal italic text-[#1C3557]/60">
                📅 Date of Birth: <span className="text-[#1C3557] font-medium">{results.dob}</span>
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {/* Core Numbers */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 rounded-none border border-[#E0D5C0] shadow-xl"
            >
              <div className="mb-8">
                <h3 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#1C3557',
                  margin: '0 0 8px 0'
                }}>
                  Core <span style={{ color: '#C9A84C' }}>Numbers</span>
                </h3>
                <div style={{ width: '60px', height: '1px', background: '#C9A84C' }}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex items-center gap-6 group">
                     <div className="w-20 h-20 rounded-none bg-[#1C3557] flex items-center justify-center text-[#C9A84C] text-[24pt] font-serif font-normal group-hover:scale-110 transition-transform">
                        {results.moolank}
                     </div>
                     <div>
                        <span className="text-[14px] tracking-widest text-[#C9A84C] font-medium mb-1 block uppercase">Birth Number (Psychic)</span>
                        <p className="text-[14px] text-[#3D3D3D] font-normal italic">Inner nature & personality.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="w-20 h-20 rounded-none bg-[#C9A84C] flex items-center justify-center text-[#1C3557] text-[24pt] font-serif font-normal group-hover:scale-110 transition-transform">
                        {results.bhagyank}
                     </div>
                     <div>
                        <span className="text-[14px] tracking-widest text-[#1C3557] font-medium mb-1 block uppercase">Life Path Number (Destiny)</span>
                        <p className="text-[14px] text-[#3D3D3D] font-normal italic">Ultimate mission & direction.</p>
                     </div>
                  </div>
                </div>

                <div className="p-8 bg-[#1C3557] text-white rounded-none border-l-4 border-l-[#C9A84C]">
                  <p className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-4">Vibrational Alignment</p>
                  <p className="text-2xl font-serif mb-2">Verdict: <span className="text-[#C9A84C]">{results.verdict}</span></p>
                  <p className="text-sm text-white/70 italic leading-relaxed">{results.verdictDesc}</p>
                </div>
              </div>
            </motion.section>

            {/* Astrological Identity Decoding Section */}
            {getZodiacInfo(results.dob) && (() => {
              const zodiac = getZodiacInfo(results.dob)!;
              return (
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-12 rounded-none border border-[#E0D5C0] shadow-xl"
                >
                  <div className="mb-8">
                    <h3 style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: '24px',
                      fontWeight: 400,
                      color: '#1C3557',
                      margin: '0 0 8px 0'
                    }}>
                      Western <span style={{ color: '#C9A84C' }}>Astrology Decode</span>
                    </h3>
                    <div style={{ width: '60px', height: '1px', background: '#C9A84C' }}></div>
                  </div>

                  <div className="p-8 bg-[#F5ECD7]/30 border border-[#E0D5C0] text-[#1C3557] rounded-none space-y-6">
                    <p className="text-[17px] font-sans tracking-wide">
                      🗓️ <span className="font-bold">Date of Birth:</span> {results.dob}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-[19px] md:text-[21px] font-serif">
                      <span className="text-3xl">{zodiac.symbol}</span>
                      <span>You are a <span className="text-[#C9A84C] font-semibold">{zodiac.sign}</span> — {zodiac.emoji} {zodiac.element} Sign</span>
                    </div>

                    <p className="text-[17px] font-sans">
                      ✨ <span className="font-bold">Your Life Keyword:</span> <span className="italic">"{zodiac.keyword}"</span>
                    </p>

                    <div className="pt-4 border-t border-[#E0D5C0] text-[17px] italic font-sans text-mystic-navy font-medium leading-relaxed">
                      💬 {zodiac.description}
                    </div>
                  </div>
                </motion.section>
              );
            })()}

            {/* Grids Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Lo Shu Grid */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-12 rounded-none border border-royal-gold/20 shadow-xl tool-card"
              >
                <div className="border-b border-royal-gold/10 pb-8 mb-8">
                  <h3 className="tool-title text-mystic-navy flex items-center gap-4">
                     <div className="w-12 h-0.5 bg-royal-gold" /> Lo shu grid (Birth)
                  </h3>
                </div>
                
                <div className="flex justify-center">
                  <NumerologyMatrix 
                    gridData={results.loShu} 
                    layout={LO_SHU_POSITIONS}
                  />
                </div>

                <div className="space-y-6 mt-12">
                  <div className="flex flex-wrap gap-4">
                     <div className="bg-mystic-navy/5 px-6 py-3 rounded-none flex-1 min-w-[200px]">
                        <span className="section-eyebrow text-royal-gold mb-1 block">Present</span>
                        <p className="text-sm font-bold">{loShuPresent.join(', ') || 'None'}</p>
                     </div>
                     <div className="bg-mystic-navy/5 px-6 py-3 rounded-none flex-1 min-w-[200px]">
                        <span className="section-eyebrow text-mystic-navy/40 mb-1 block">Missing</span>
                        <p className="text-sm font-bold">{loShuMissing.join(', ')}</p>
                     </div>
                  </div>
                  {results.arrows.length > 0 && (
                    <div className="pt-6 border-t border-royal-gold/10">
                      <h4 className="section-eyebrow text-royal-gold mb-4">Active Planes (Yogas)</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {results.arrows.map((a: string) => (
                          <li key={a} className="text-sm font-bold flex items-center gap-2">
                             <Compass className="w-4 h-4 text-royal-gold" /> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.section>

              {/* Vedic Matrix Grid */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-12 rounded-none border border-royal-gold/20 shadow-xl tool-card"
              >
                <div className="border-b border-royal-gold/10 pb-8 mb-8">
                  <h3 className="tool-title text-mystic-navy flex items-center gap-4">
                     <div className="w-12 h-0.5 bg-royal-gold" /> Vedic matrix (Birth)
                  </h3>
                </div>
                
                <div className="flex justify-center">
                  <NumerologyMatrix 
                    gridData={results.vedicBirthGrid} 
                    layout={VEDIC_POSITIONS}
                  />
                </div>

                <div className="mt-12 space-y-6">
                   <div className="p-6 bg-mystic-navy/5 rounded-none border border-royal-gold/10">
                      <h4 className="section-eyebrow text-royal-gold mb-3 tracking-widest text-[9px]">Vedic Configuration</h4>
                      <p className="text-xs font-bold text-mystic-navy/60 leading-relaxed italic">
                        The Vedic matrix aligns these frequencies with the 9 planetary influences, creating a sacred geometry of your destiny.
                      </p>
                   </div>
                </div>
              </motion.section>
            </div>

            {/* Prediction */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative p-12 md:p-20 rounded-none bg-[#1C3557] text-warm-off-white border border-[#C9A84C]/30 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(196,164,106,0.1),transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div className="text-left">
                    <h3 style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: '40px',
                      fontWeight: 400,
                      color: '#FAF7F0',
                      margin: '0 0 16px 0'
                    }}>
                      Complete <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Prediction</span>
                    </h3>
                    <div style={{ width: '60px', height: '1px', background: '#C9A84C' }}></div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-none border border-white/10 backdrop-blur-sm">
                    <p className="text-[10px] font-medium tracking-widest text-[#C9A84C]/60 uppercase mb-2">Subject Frequency</p>
                    <p className="text-2xl font-serif font-normal uppercase">{results.name}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="p-10 relative overflow-hidden bg-[#0B0F2A] border-l-4 border-[#C9A84C] rounded-none min-h-[300px] flex flex-col justify-center group">
                       <div className="relative z-10">
                         <h4 className="text-[16px] tracking-widest text-[#C9A84C] font-medium mb-6 uppercase">Core Personality</h4>
                         <p className="text-[20px] font-normal italic leading-relaxed text-warm-off-white/95">
                           "{results.prediction.meaning}"
                         </p>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-8 bg-white/5 border border-white/10 rounded-none">
                          <span className="text-[16px] uppercase font-medium text-[#C9A84C]/60 block mb-2">Birth Number</span>
                          <p className="text-3xl font-serif font-normal">{results.moolank}</p>
                       </div>
                       <div className="p-8 bg-white/5 border border-white/10 rounded-none">
                          <span className="text-[16px] uppercase font-medium text-[#C9A84C]/60 block mb-2">Life Path Number</span>
                          <p className="text-3xl font-serif font-normal text-[#C9A84C]">{results.bhagyank}</p>
                       </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                       <div className="p-10 relative overflow-hidden bg-[#0B0F2A] border border-white/10 rounded-none flex flex-col group hover:bg-[#0B0F2A]/80 transition-all min-h-[280px] justify-start text-left">
                          <div className="relative z-10">
                            <Compass className="w-10 h-10 text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform" />
                            <h4 style={{
                              fontFamily: "Georgia, 'Times New Roman', serif",
                              fontSize: '28px',
                              fontWeight: 400,
                              color: '#C9A84C',
                              margin: '0 0 16px 0'
                            }}>
                              Career <span style={{ color: '#FAF7F0' }}>Path</span>
                            </h4>
                            <div style={{ width: '40px', height: '1px', background: '#C9A84C', marginBottom: '20px' }}></div>
                            <p className="text-[19px] text-warm-off-white/80 leading-relaxed font-normal italic">
                               {results.prediction.career}
                            </p>
                          </div>
                       </div>
                       <div className="p-10 relative overflow-hidden bg-[#0B0F2A] border border-white/10 rounded-none flex flex-col group hover:bg-[#0B0F2A]/80 transition-all min-h-[280px] justify-start text-left">
                          <div className="relative z-10">
                            <Heart className="w-10 h-10 text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform" />
                            <h4 style={{
                              fontFamily: "Georgia, 'Times New Roman', serif",
                              fontSize: '28px',
                              fontWeight: 400,
                              color: '#C9A84C',
                              margin: '0 0 16px 0'
                            }}>
                              Health <span style={{ color: '#FAF7F0' }}>Vitality</span>
                            </h4>
                            <div style={{ width: '40px', height: '1px', background: '#C9A84C', marginBottom: '20px' }}></div>
                            <p className="text-[19px] text-warm-off-white/80 leading-relaxed font-normal italic">
                               {results.prediction.health}
                            </p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-8 relative overflow-hidden bg-[#0B0F2A] border border-white/10 rounded-none flex flex-col justify-center h-full min-h-[200px] group text-left">
                    <div className="relative z-10">
                      <h4 className="text-[16px] tracking-widest text-[#C9A84C] font-medium mb-6 uppercase">Lucky Numbers</h4>
                      <p className="text-[16px] font-normal tracking-[0.2em]">{results.prediction.luckyNumbers}</p>
                    </div>
                  </div>
                  <div className="p-8 relative overflow-hidden bg-[#0B0F2A] border border-white/10 rounded-none flex flex-col justify-center h-full min-h-[200px] group text-left">
                    <div className="relative z-10">
                      <h4 className="text-[16px] tracking-widest text-[#C9A84C] font-medium mb-6 uppercase">Lucky Colors</h4>
                      <p className="text-[16px] font-normal tracking-widest">{results.prediction.luckyColors}</p>
                    </div>
                  </div>
                  <div className="p-8 bg-[#C9A84C] text-[#1C3557] rounded-none flex flex-col justify-center text-left">
                    <h4 className="text-[13px] font-medium mb-2 uppercase tracking-tight">Vibration Tuning</h4>
                    <p className="text-[15px] font-normal italic leading-snug mb-4">{results.prediction.nameCorrection}</p>
                    <Link 
                      to="/consultation"
                      className="text-[12px] font-bold border-b border-[#000] inline-block w-fit uppercase"
                      style={{ color: '#000', fontWeight: 'bold' }}
                    >
                      Speak to an Expert
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>

          <div className="mt-24 text-center">
             <Link 
               to="/consultation" 
               className="inline-flex items-center gap-4 px-12 py-6 bg-mystic-navy text-warm-off-white rounded-none font-black tracking-widest text-[20px] hover:scale-105 transition-all shadow-2xl"
             >
                Unlock Your Destiny <ArrowRight className="w-5 h-5 text-royal-gold" />
             </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5ECD7] text-[#1C3557] pt-12 pb-20 px-6 font-sans overflow-hidden">
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#1C3557]/5 blur-[150px] -z-10 animate-pulse" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 rounded-none bg-[#1C3557] flex items-center justify-center mx-auto mb-4 shadow-lg border border-[#C9A84C]/20"
          >
            <Star className="text-[#C9A84C] w-6 h-6" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4"
          >
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
              Scientific <span style={{ color: '#C9A84C' }}>Numerology Matrix</span>
            </h2>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '4px auto 0' }}></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: '30px',
              fontWeight: 400,
              color: '#1C3557',
              marginBottom: '16px',
              lineHeight: 1.2
            }}
          >
            Destiny <span style={{ color: '#C9A84C' }}>Pattern</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[15px] md:text-[16px] text-[#1C3557]/75 max-w-2xl mx-auto font-normal leading-relaxed italic"
          >
            Reveal the cosmic algorithms of your identity. By merging Chaldean name frequencies with Lo Shu grid birth alignments, we decode your soul's roadmap.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-[800px] glass-card p-8 md:p-12 rounded-none bg-white border border-[#E0D5C0] shadow-[0_40px_100px_rgba(13,27,62,0.05)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 blur-[120px] -z-10" />
          
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StandardNameInput
                label="First Name"
                value={firstName}
                onChange={setFirstName}
                placeholder="Enter first name"
                error={!firstName && firstName !== undefined ? "Name is required" : ""}
              />
              <StandardNameInput
                label="Second Name"
                value={lastName}
                onChange={setLastName}
                placeholder="Enter second name"
                error={!lastName && lastName !== undefined ? "Name is required" : ""}
              />
            </div>

            <StandardDateInput
              label="Chronological Entry"
              value={dob}
              onChange={setDob}
              error={dob && dob.length < 14 ? "Please enter a valid date (DD / MM / YYYY)" : ""}
            />

            <div className="pt-6">
              <button
                onClick={calculate}
                disabled={!firstName || !lastName || dob.length < 14 || isCalculating}
                className={cn(
                  "w-full h-[52px] rounded-none font-medium tracking-[0.4em] text-[12px] transition-all flex items-center justify-center gap-4 relative overflow-hidden group uppercase",
                  firstName && lastName && dob.length >= 14 && !isCalculating
                    ? "bg-[#1C3557] text-white shadow-xl hover:scale-[1.01] active:scale-95"
                    : "bg-[#1C3557]/5 text-[#1C3557]/20 cursor-not-allowed border border-[#C9A84C]/10"
                )}
              >
                {isCalculating ? (
                  <div className="flex flex-col items-center gap-2 w-full px-8">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="w-4 h-4 animate-spin text-[#C9A84C]" />
                      <span className="text-[10px] font-medium tracking-widest">CALCULATING {calculationProgress}%</span>
                    </div>
                    <div className="w-full h-0.5 bg-[#C9A84C]/10 rounded-none overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${calculationProgress}%` }}
                        className="h-full bg-[#C9A84C]"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    Unlock My Cosmic Code <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-6 text-center">
          <p className="text-[14px] text-black tracking-[0.25em] font-extrabold italic leading-relaxed">
            * High precision dasha periods and planetary <br /> 
            degree correction require executive sessions.
          </p>
        </div>
      </div>
    </div>
  );
}

