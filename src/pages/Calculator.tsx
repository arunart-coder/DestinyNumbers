import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  RefreshCw, 
  Star, 
  ArrowLeft
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
      <div className="min-h-screen bg-[#F5ECD7] text-[#1C3557] pt-8 pb-24 px-4 md:px-6 font-sans">
        <div className="max-w-5xl mx-auto mb-6">
          <button 
            onClick={() => setResults(null)}
            className="flex items-center gap-2 text-[#C9A84C] text-[10px] font-bold tracking-widest hover:translate-x-[-4px] transition-all uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> Recalculate matrix
          </button>
        </div>

        {/* Main Card Sheet matching Mockup */}
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-14 border border-[#E0D5C0] shadow-xl text-[#1C3557]">
          
          {/* Core Numbers Section */}
          <div className="mb-12">
            <div className="mb-6">
              <h2 className="font-serif text-[28px] font-normal text-[#1C3557] tracking-tight">
                Core <span className="text-[#C9A84C]">Numbers</span>
              </h2>
              <div className="w-[120px] h-[1px] bg-[#C9A84C] mt-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Birth Number Block */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <div className="w-14 h-14 bg-[#1C3557] text-[#C9A84C] flex items-center justify-center text-3xl font-serif font-bold flex-shrink-0">
                  {results.moolank}
                </div>
                <div>
                  <h4 className="text-[12px] font-bold tracking-widest text-[#C9A84C] uppercase">
                    Birth Number (Psychic)
                  </h4>
                  <p className="text-[13px] text-gray-500 italic mt-0.5">Inner nature & personality.</p>
                </div>
              </div>

              {/* Life Path Number Block */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <div className="w-14 h-14 bg-[#C9A84C] text-[#1C3557] flex items-center justify-center text-3xl font-serif font-bold flex-shrink-0">
                  {results.bhagyank}
                </div>
                <div>
                  <h4 className="text-[12px] font-bold tracking-widest text-[#1C3557] uppercase">
                    Life Path Number (Destiny)
                  </h4>
                  <p className="text-[13px] text-gray-500 italic mt-0.5">Ultimate mission & direction.</p>
                </div>
              </div>

              {/* Vibrational Alignment Block */}
              <div className="lg:col-span-4 bg-[#1C3557] text-white p-4 flex flex-col justify-center border-l-4 border-[#C9A84C]">
                <span className="text-[9px] font-bold tracking-widest text-[#C9A84C] uppercase mb-1">
                  Vibrational Alignment
                </span>
                <p className="text-lg font-serif font-semibold">
                  Verdict: <span className="text-[#C9A84C]">{results.verdict}</span>
                </p>
                <p className="text-[11px] text-white/70 italic mt-1 leading-tight">
                  {results.verdictDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Western Astrology Decode Section */}
          <div className="mb-12">
            <div className="mb-6">
              <h2 className="font-serif text-[28px] font-normal text-[#1C3557] tracking-tight">
                Western <span className="text-[#C9A84C]">Astrology Decode</span>
              </h2>
              <div className="w-[120px] h-[1px] bg-[#C9A84C] mt-1"></div>
            </div>

            {getZodiacInfo(results.dob) && (() => {
              const zodiac = getZodiacInfo(results.dob)!;
              return (
                <div className="bg-[#FDFBF7] p-6 border border-[#E0D5C0]/40 flex flex-col gap-4 relative overflow-hidden">
                  {/* Item 1: Date of Birth */}
                  <div className="flex items-center gap-3 text-sm text-[#1C3557]/80">
                    <span className="text-base">📅</span>
                    <span>
                      <span className="font-bold">Date of Birth:</span> {results.dob}
                    </span>
                  </div>

                  {/* Item 2: Sign description */}
                  <div className="flex items-center gap-3 text-sm text-[#1C3557]/80">
                    <div className="w-8 h-8 bg-indigo-900 text-white flex items-center justify-center text-lg shadow-sm">
                      {zodiac.symbol}
                    </div>
                    <span>
                      You are a <span className="text-[#C9A84C] font-semibold text-base">{zodiac.sign}</span> — {zodiac.emoji} {zodiac.element} Sign
                    </span>
                  </div>

                  {/* Item 3: Your Life Keyword */}
                  <div className="flex items-center gap-3 text-sm text-[#1C3557]/80">
                    <span className="text-[#C9A84C] text-lg">✨</span>
                    <span>
                      <span className="font-bold">Your Life Keyword:</span> <span className="italic font-serif">"{zodiac.keyword}"</span>
                    </span>
                  </div>

                  {/* Additional description if desired */}
                  <div className="mt-2 pt-3 border-t border-[#E0D5C0]/30 text-xs text-[#1C3557]/60 italic leading-relaxed">
                    {zodiac.description}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Grids Section (Lo Shu & Vedic) */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              {/* Vertical Divider in the center on large screens */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#FAF7F0] -translate-x-1/2"></div>

              {/* Left Side: Lo Shu Grid */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <h3 className="font-serif text-[18px] font-normal text-[#1C3557] flex items-center gap-2">
                    <span className="w-6 h-[1px] bg-[#C9A84C]"></span> Lo shu grid (Birth)
                  </h3>
                </div>

                <div className="flex justify-center mb-6">
                  <NumerologyMatrix 
                    gridData={results.loShu} 
                    layout={LO_SHU_POSITIONS}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-[#FAF7F0] px-4 py-2 flex-1">
                      <span className="text-[10px] font-semibold tracking-wider text-gray-400 block uppercase mb-0.5">Present</span>
                      <p className="text-xs font-bold text-[#1C3557]">{loShuPresent.join(', ') || 'None'}</p>
                    </div>
                    <div className="bg-[#FAF7F0] px-4 py-2 flex-1">
                      <span className="text-[10px] font-semibold tracking-wider text-gray-400 block uppercase mb-0.5">Missing</span>
                      <p className="text-xs font-bold text-[#1C3557]">{loShuMissing.join(', ')}</p>
                    </div>
                  </div>

                  {results.arrows.length > 0 && (
                    <div className="pt-3 border-t border-[#E0D5C0]/40">
                      <h4 className="text-[10px] font-bold tracking-widest text-[#C9A84C] uppercase mb-2">Active Planes (Yogas)</h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {results.arrows.map((a: string) => (
                          <span key={a} className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                            <span className="text-[#C9A84C]">🧭</span> {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side: Vedic Matrix */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <h3 className="font-serif text-[18px] font-normal text-[#1C3557] flex items-center gap-2">
                      <span className="w-6 h-[1px] bg-[#C9A84C]"></span> Vedic matrix (Birth)
                    </h3>
                  </div>

                  <div className="flex justify-center mb-6">
                    <NumerologyMatrix 
                      gridData={results.vedicBirthGrid} 
                      layout={VEDIC_POSITIONS}
                    />
                  </div>
                </div>

                <div className="bg-[#FAF7F0] p-4 border border-[#E0D5C0]/20 flex flex-col justify-center mt-auto">
                  <h4 className="text-[10px] font-bold tracking-widest text-[#C9A84C] uppercase mb-1">Vedic Configuration</h4>
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    The Vedic matrix aligns these frequencies with the 9 planetary influences, creating a sacred geometry of your destiny.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Prediction Section with full bar */}
          <div className="mt-16">
            {/* Header Navy Bar */}
            <div className="bg-[#1C3557] px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-white mb-8 border-b-2 border-[#C9A84C]">
              <h3 className="font-serif text-2xl font-normal">
                Complete <span className="text-[#C9A84C] italic">Prediction</span>
              </h3>
              <div className="text-right mt-2 sm:mt-0 flex flex-col items-center sm:items-end">
                <span className="text-[9px] font-bold tracking-widest text-[#C9A84C]/80 uppercase">Subject Frequency</span>
                <span className="text-base font-serif tracking-wider font-semibold uppercase">{results.name}</span>
              </div>
            </div>

            {/* 3 Columns Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#1C3557]">
              {/* Column 1: Core Personality */}
              <div className="flex flex-col justify-between pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-[#E0D5C0]/40 pb-6 md:pb-0">
                <div>
                  <h4 className="font-serif text-2xl font-medium text-[#1C3557] mb-4">
                    Core Personality
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-600 font-normal italic">
                    "{results.prediction.meaning}"
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-[#E0D5C0]/20">
                  <h5 className="font-bold text-sm uppercase text-[#1C3557] mb-1">
                    Lucky Numbers
                  </h5>
                  <p className="text-2xl font-serif text-gray-700 tracking-wider mb-6">
                    {results.prediction.luckyNumbers}
                  </p>
                  
                  <Link 
                    to="/consultation"
                    className="w-full inline-flex items-center justify-between px-4 py-3 bg-[#1C3557] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#1C3557]/90 transition-all"
                  >
                    <span>Unlock Your Destiny</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
                  </Link>
                </div>
              </div>

              {/* Column 2: Good Career */}
              <div className="flex flex-col justify-between px-0 md:px-4 border-b md:border-b-0 md:border-r border-[#E0D5C0]/40 pb-6 md:pb-0">
                <div>
                  <h4 className="font-serif text-2xl font-medium text-[#1C3557] mb-4">
                    Good Career
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-600 font-normal">
                    {results.prediction.career}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E0D5C0]/20">
                  <h5 className="font-bold text-sm uppercase text-[#1C3557] mb-1">
                    Lucky Colors
                  </h5>
                  <p className="text-base font-medium text-gray-700">
                    {results.prediction.luckyColors}
                  </p>
                  <div className="h-10 mt-6"></div> {/* Spacer to align with button */}
                </div>
              </div>

              {/* Column 3: Health Vitality */}
              <div className="flex flex-col justify-between pl-0 md:pl-4 pb-6 md:pb-0">
                <div>
                  <h4 className="font-serif text-2xl font-medium text-[#1C3557] mb-4">
                    Health Vitality
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-600 font-normal">
                    {results.prediction.health}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E0D5C0]/20">
                  <h5 className="font-bold text-sm uppercase text-[#1C3557] mb-1">
                    Vibration Tuning
                  </h5>
                  <p className="text-[13px] text-gray-500 italic leading-snug mb-4">
                    {results.prediction.nameCorrection}
                  </p>

                  <Link 
                    to="/consultation"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#C9A84C] text-[#1C3557] text-xs font-extrabold tracking-wider uppercase hover:bg-[#C9A84C]/90 transition-all border border-[#C9A84C]"
                  >
                    Speak to an Expert
                  </Link>
                </div>
              </div>
            </div>
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
            Reveal the cosmic algorithms of your identity. By merging Chaldean name frequencies with<br />Lo Shu grid birth alignments, we decode your soul's roadmap.
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
                id="unlock-cosmic-code-btn"
                onClick={calculate}
                disabled={!firstName || !lastName || dob.length < 14 || isCalculating}
                className={cn(
                  "w-full h-[56px] rounded-none font-serif font-semibold tracking-[0.2em] text-[14px] transition-all flex items-center justify-center gap-4 relative overflow-hidden group uppercase shadow-lg",
                  (!firstName || !lastName || dob.length < 14 || isCalculating)
                    ? "bg-[#1C3557] text-[#F5ECD7]/80 cursor-not-allowed border border-[#C9A84C]/10"
                    : "bg-[#1C3557] text-[#F5ECD7] hover:bg-[#132845] hover:scale-[1.01] active:scale-95 cursor-pointer"
                )}
              >
                {isCalculating ? (
                  <div className="flex flex-col items-center gap-2 w-full px-8">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="w-4 h-4 animate-spin text-[#C9A84C]" />
                      <span className="text-[10px] font-medium tracking-widest text-[#F5ECD7]">CALCULATING {calculationProgress}%</span>
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
                    Unlock My Cosmic Code <ArrowRight className={cn(
                      "w-4 h-4 transition-transform group-hover:translate-x-2",
                      (!firstName || !lastName || dob.length < 14 || isCalculating) ? "text-[#C9A84C]/80" : "text-[#C9A84C]"
                    )} />
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

