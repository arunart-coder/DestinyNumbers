import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, ArrowLeft, ArrowRight, RefreshCw, Star, Info, Shield, Compass, BookOpen } from 'lucide-react';

interface PersonalYearResult {
  birthDay: number;
  birthMonth: number;
  targetYear: number;
  personalYearNumber: number;
  title: string;
  subTitle: string;
  theme: string;
  advice: string;
  challenge: string;
  luckyColors: string[];
  luckyDays: string[];
  luckyGem: string;
  monthlyProjections: { month: string; number: number; theme: string }[];
  cycleStartStr: string;
  cycleEndStr: string;
  isPastBirthday: boolean;
  actualCalculationYear: number;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const YEAR_DETAILS: Record<number, {
  title: string;
  subTitle: string;
  theme: string;
  advice: string;
  challenge: string;
  luckyColors: string[];
  luckyDays: string[];
  luckyGem: string;
}> = {
  1: {
    title: "The Pioneer & Catalyst",
    subTitle: "A Year of New Beginnings, Independence, and Pure Action",
    theme: "This is the start of a brand new 9-year cycle. The stagnation of the past represents seed material now being cast into fresh ground. You have the direct energetic calling to act on your desires, launch new ventures, and stand confidently on your own two feet.",
    advice: "Initiate. If you have been waiting to start a brand, pivot your career, or launch a physical transformation, this is your green light. Practice executive courage and rely on your own intuition rather than group consensus.",
    challenge: "Overcoming fear of failure, breaking old codependencies, and resisting the urge to procrastinate or wait for permission.",
    luckyColors: ["Sun Gold", "Bright Yellow", "Ruby Red"],
    luckyDays: ["Sunday", "Monday"],
    luckyGem: "Ruby (Manik)"
  },
  2: {
    title: "The Partner & Diplomat",
    subTitle: "A Year of Cooperation, Patience, and Deep Relationships",
    theme: "After the fiery sprint of Year 1, Year 2 demands patience, assimilation, and cooperation. It represents a period where seeds germinate beneath the soil — quiet growth, emotional balancing, and aligning with divine partners.",
    advice: "Collaborate. This is a brilliant year for joining forces, resolving corporate or family conflicts, and focusing on emotional healing. Work behind the scenes and sharpen your intuitive empathy.",
    challenge: "Guarding against over-sensitivity, avoiding toxic codependency, and maintaining firm and healthy boundaries under emotional strain.",
    luckyColors: ["Soft Ivory", "Cream", "Light Willow Green"],
    luckyDays: ["Monday", "Friday"],
    luckyGem: "Natural Pearl (Moti)"
  },
  3: {
    title: "The Storyteller & Catalyst",
    subTitle: "A Year of Creative Expression, Expansion, and Celebration",
    theme: "The quiet partnerships of Year 2 burst into full color here. This year demands self-expression, creative release, social vitality, and communication. Your ideas and voice are highly magnetic under Jupiter's expansion.",
    advice: "Express yourself! Speak, build and publish content, write a book, or expand your social or digital reach. Give life to your hobbies and surround yourself with celebratory, positive minds.",
    challenge: "Avoiding scattered priorities, overspending, emotional drama, and superficial gossip that drains your vital lifeforce.",
    luckyColors: ["Saffron Orange", "Bright Gold", "Lemon Yellow"],
    luckyDays: ["Thursday", "Tuesday"],
    luckyGem: "Yellow Sapphire (Pukhraj)"
  },
  4: {
    title: "The Architect & Foundation Builder",
    subTitle: "A Year of Discipline, Physical Health, and Hard Labor",
    theme: "This is a stabilizing year, ruled by Rahu's structural demands. The playful energy of Year 3 gives way to concrete calculations. It is time to organize your files, commit to a routine, establish strong foundations, and focus heavily on financial security.",
    advice: "Build. Work systematically to create physical, economic, and practical stability. Refine your corporate workflows, commit to clean health habits, and build structural equity.",
    challenge: "Staying motivated when faced with administrative chores, handling physical exhaustion, and avoiding rigid, defensive thinking.",
    luckyColors: ["Electric Blue", "Steel Grey", "Refined Silver"],
    luckyDays: ["Saturday", "Wednesday"],
    luckyGem: "Hessonite Garnet (Gomed)"
  },
  5: {
    title: "The Free Spirit & Explorer",
    subTitle: "A Year of Mercury-Driven Pivot Points, Freedom, and Rapid Transition",
    theme: "Halfway through the cycle, you hit a massive point of release! Ruled by Mercury, Year 5 represents sudden shifts, geographical moves, frequent travel, and rich sensory experiences. It shakes up the heavy labor of Year 4 to bring brand-new, exciting opportunities.",
    advice: "Pivot. Be highly versatile. Embrace progressive shifts in your lifestyle, test out different marketing funnels, expand your business model, and travel to unfamiliar lands to spark inspiration.",
    challenge: "Resisting destructive impulses, managing excessive sensory indulgence, and avoiding the urge to abandon projects prematurely out of pure boredom.",
    luckyColors: ["Jade Green", "Bright Teal", "Turquoise Blue"],
    luckyDays: ["Wednesday", "Friday"],
    luckyGem: "Emerald (Panna)"
  },
  6: {
    title: "The Nurturer & Harmonizer",
    subTitle: "A Year of Venusian Abundance, Domestic Duty, and Heart Alignment",
    theme: "With the chaotic transition of Year 5 settled, the focus shifts directly to your relationships, home, and community bonds under Venus. This is a beautifully supportive year for marriage, family nesting, buying a home, and establishing deep, protective care frameworks.",
    advice: "Nurture. Dedicate yourself to beautifying your physical home and resolving ancestral or relational friction. Take your domestic duties seriously, but remember to pamper and care for yourself first so you can pour from a full cup.",
    challenge: "Slipping into a martyr complex, taking on other people's burdens unnecessary, and overbearing attempts to control or direct family matters.",
    luckyColors: ["Sky Blue", "Blossom Pink", "Off-White Pearls"],
    luckyDays: ["Friday", "Monday"],
    luckyGem: "White Sapphire / Diamond (Heera)"
  },
  7: {
    title: "The Mystic & Truth Seeker",
    subTitle: "A Year of Ketu-Guided Self-Knowledge, Deep Study, and Reflection",
    theme: "This is a deeply internal, spiritual Year ruled by Ketu's cosmic lens. External expansion, massive investments, or loud public networking will yield little joy right now. Instead, focus entirely on your spiritual practices, intellectual growth, research, and self-analysis.",
    advice: "Reflect. Dedicate serious hours to meditation, study, writing, and solitude. Step out of the loud rat race to examine where your life alignment is genuinely heading. Your inner voice is exceptionally loud this year.",
    challenge: "Experiencing feelings of sudden isolation or abandonment, overthinking scenarios, and pushing too hard for worldly, material success when spiritual learning is the priority.",
    luckyColors: ["Lavender", "Deep Amethyst Purple", "Soft Smokey Grey"],
    luckyDays: ["Monday", "Thursday"],
    luckyGem: "Cat's Eye (Lehsuniya)"
  },
  8: {
    title: "The Sovereign & Executive",
    subTitle: "A Year of Saturnian Harvest, Material Manifestation, and Karma",
    theme: "The internal work of Year 7 pays off handsomely. Ruled by Saturn, Year 8 is your power year. It represents a dramatic return to the worldly arena to handle large cashflows, launch major acquisitions, and reap the direct rewards of the hard work sown in Year 4.",
    advice: "Execute. Demand your true worth in business. Manage your budget with sharp precision, make calculated career advancements, and step into authority roles. Command respect and execute your plans with unshakeable discipline.",
    challenge: "Handling heavy responsibilities, avoiding greed or material arrogance, and staying grounded in the face of Saturn's absolute karmic balance.",
    luckyColors: ["Dark Charcoal", "Midnight Blue", "Slate Black"],
    luckyDays: ["Saturday", "Thursday"],
    luckyGem: "Blue Sapphire (Neelam)"
  },
  9: {
    title: "The Sage & Humanist",
    subTitle: "A Year of Absolute Completion, Emotional Release, and Letting Go",
    theme: "You have reached the final stage of your 9-year journey. Ruled by Mars' transformative flames, this year is entirely about completion and editing. It is a period where situations, clients, relationships, and old paradigms that no longer serve you naturally depart to make room for the upcoming Year 1.",
    advice: "Release. Bless the past and let go of what is expiring. Complete outstanding projects, clean out physical clutter, settle old debts, and focus on altruistic, humanitarian energy. Forgiveness is your gateway to peace.",
    challenge: "Clinging tightly to outdated situations, facing grief or fear of change, and attempting to force new starts when the season calls for release.",
    luckyColors: ["Crimson Red", "Terracotta Coral", "Sunset Saffron"],
    luckyDays: ["Tuesday", "Sunday"],
    luckyGem: "Red Coral (Moonga)"
  }
};

export function PersonalYearCalculator({ onBack }: { onBack?: () => void }) {
  const [dob, setDob] = useState('');
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<PersonalYearResult | null>(null);

  const calculatePersonalYear = () => {
    if (!dob) return;

    setIsCalculating(true);
    setResult(null);

    setTimeout(() => {
      // DOB format: YYYY-MM-DD
      const parts = dob.split('-');
      if (parts.length < 3) {
        setIsCalculating(false);
        return;
      }

      const birthMonth = parseInt(parts[1], 10);
      const birthDay = parseInt(parts[2], 10);

      // Simple reduction utility
      const reduceToSingleDigit = (n: number): number => {
        let num = n;
        while (num > 9) {
          num = String(num).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
        }
        return num;
      };

      // Get current date relative to target year
      const today = new Date();
      // Reference date is target year with today's month & day
      const refDate = new Date(targetYear, today.getMonth(), today.getDate());
      const birthdayOfTargetYear = new Date(targetYear, birthMonth - 1, birthDay);

      let actualCalculationYear = targetYear;
      let cycleStartYear = targetYear;
      let cycleEndYear = targetYear + 1;
      let isPastBirthday = true;

      if (refDate < birthdayOfTargetYear) {
        actualCalculationYear = targetYear - 1;
        cycleStartYear = targetYear - 1;
        cycleEndYear = targetYear;
        isPastBirthday = false;
      }

      // Personal Year formula: Day Sum + Month Sum + Actual Calculation Year Sum
      const daySum = reduceToSingleDigit(birthDay);
      const monthSum = reduceToSingleDigit(birthMonth);
      const yearSum = reduceToSingleDigit(actualCalculationYear);

      const totalSum = daySum + monthSum + yearSum;
      const personalYearNumber = reduceToSingleDigit(totalSum);

      const details = YEAR_DETAILS[personalYearNumber];

      // Format date strings nicely
      const monthName = MONTH_NAMES[birthMonth - 1];
      let prevDay = birthDay - 1;
      let endMonthName = monthName;
      let endMonth = birthMonth;
      let endYear = cycleEndYear;

      if (prevDay === 0) {
        const prevMonthDate = new Date(cycleEndYear, birthMonth - 1, 0);
        prevDay = prevMonthDate.getDate();
        endMonth = prevMonthDate.getMonth() + 1;
        endMonthName = MONTH_NAMES[endMonth - 1];
      }

      const cycleStartStr = `${monthName} ${birthDay}, ${cycleStartYear}`;
      const cycleEndStr = `${endMonthName} ${prevDay}, ${endYear}`;

      // Calculate monthly projections
      // Monthly Personal Cycle = Personal Year Number + Current Month (1-12) reduced
      const monthlyProjections = MONTH_NAMES.map((monthName, idx) => {
        const monthVal = idx + 1;
        const monthCycle = reduceToSingleDigit(personalYearNumber + monthVal);
        
        // Short, highly accurate themes for each monthly cycle
        const MONTH_THEMES: Record<number, string> = {
          1: "New doors, sudden spark of energy, take the initiative.",
          2: "Delicate adjustments, trust your intuition, focus on cooperation.",
          3: "Joyful communication, networking, beautiful self-expression.",
          4: "Hard structural focus, details, getting things done methodically.",
          5: "Mercury movement, travel plans, refreshing lifestyle shifts.",
          6: "Home focus, resolving family boundaries, cosmetic upgrades.",
          7: "Solitude, research, analyzing your deepest inner trajectory.",
          8: "Karmic push, cashflow focus, executive decisions.",
          9: "Completing old cycles, cleansing clutter, setting things free."
        };

        return {
          month: monthName,
          number: monthCycle,
          theme: MONTH_THEMES[monthCycle] || "Strategic alignment"
        };
      });

      setResult({
        birthDay,
        birthMonth,
        targetYear,
        personalYearNumber,
        title: details.title,
        subTitle: details.subTitle,
        theme: details.theme,
        advice: details.advice,
        challenge: details.challenge,
        luckyColors: details.luckyColors,
        luckyDays: details.luckyDays,
        luckyGem: details.luckyGem,
        monthlyProjections,
        cycleStartStr,
        cycleEndStr,
        isPastBirthday,
        actualCalculationYear
      });

      setIsCalculating(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-4 pb-16">
      {/* Headings */}
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
            Calculate Votre <span style={{ color: '#C9A84C' }}>Personal Year</span> Roadmap
          </h2>
          <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '4px auto 0' }}></div>
        </div>
        <p className="text-[15px] md:text-[16px] text-[#1C3557]/60 max-w-2xl mx-auto font-sans leading-relaxed italic mb-6">
          Every year carries a specific planetary and mathematical vibration that determines either smooth pathways or learning hurdles. Find out where you stand right now.
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

      {/* Calculator Card */}
      <div className="bg-white border border-[#1C3557]/10 rounded-none shadow-2xl p-6 md:p-10 relative overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5 pointer-events-none" />
        
        {!result && !isCalculating ? (
          <div className="relative z-10 max-w-md mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#1C3557] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C9A84C]" /> Select Your Birth Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full bg-[#F5ECD7]/30 border border-[#1C3557]/15 p-4 text-[#1C3557] focus:outline-none focus:border-[#C9A84C]/60 text-sm tracking-wide font-sans rounded-none transition-all"
                    required
                  />
                </div>
                <p className="text-[10px] text-[#1C3557]/50 mt-1.5 italic font-sans">We only use this locally to calculate your personal vibration.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C3557] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C9A84C]" /> Target Year of Projection
                </label>
                <select
                  value={targetYear}
                  onChange={(e) => setTargetYear(parseInt(e.target.value, 10))}
                  className="w-full bg-[#F5ECD7]/30 border border-[#1C3557]/15 p-4 text-[#1C3557] focus:outline-none focus:border-[#C9A84C]/60 text-sm tracking-wide font-sans rounded-none transition-all"
                >
                  {[2025, 2026, 2027, 2028, 2029, 2030].map(y => (
                    <option key={y} value={y}>{y} {y === new Date().getFullYear() ? "(Current Year)" : ""}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={calculatePersonalYear}
                disabled={!dob}
                className="w-full bg-[#C9A84C] text-white py-4.5 font-display font-black text-xs uppercase tracking-widest hover:bg-[#B3933C] transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase hover:-translate-y-0.5 active:translate-y-0 relative z-10 flex items-center justify-center gap-3"
              >
                <span>Reveal My Forecast</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : isCalculating ? (
          <div className="relative z-10 py-16 flex flex-col items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="mb-6"
            >
              <RefreshCw className="w-10 h-10 text-[#C9A84C]" />
            </motion.div>
            <p className="text-[13px] font-bold text-[#1C3557] uppercase tracking-widest animate-pulse font-sans">Decoding Celestial Frequencies...</p>
          </div>
        ) : (
          result && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Result Header */}
              <div className="text-center border-b border-[#1C3557]/10 pb-8 mb-8">
                <p className="text-xs font-black text-[#C9A84C] uppercase tracking-[0.2em] mb-2 font-display">Target Year: {result.targetYear}</p>
                
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-[#C9A84C] bg-[#F5ECD7]/30 text-[#1C3557] mb-4">
                  <span className="text-4xl font-display font-black leading-none">{result.personalYearNumber}</span>
                </div>

                <h3 className="font-sans text-2xl font-bold text-[#1C3557] mt-2 mb-1">{result.title}</h3>
                <p className="text-[17px] font-sans tracking-wide italic text-[#1C3557]/60 max-w-xl mx-auto mb-6">{result.subTitle}</p>

                {/* Highly structured Active Cycle date range box */}
                <div className="inline-flex flex-col items-center justify-center p-5 bg-[#F5ECD7]/45 border border-[#C9A84C]/35 rounded-none max-w-xl mx-auto text-center shadow-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Calendar className="w-4 h-4 text-[#C9A84C]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C]">
                      Active Vibration Timeline
                    </span>
                  </div>
                  <span className="text-[16px] font-bold text-[#1C3557] font-display">
                    {result.cycleStartStr} to {result.cycleEndStr}
                  </span>
                  {!result.isPastBirthday ? (
                    <p className="text-[11.5px] text-[#1C3557]/70 font-sans mt-2.5 leading-relaxed max-w-md">
                      *Note: Since your birthday in the year {result.targetYear} ({MONTH_NAMES[result.birthMonth - 1]} {result.birthDay}) has not arrived yet relative to today's date, you are still actively under the vibration of the {result.actualCalculationYear} Personal Year.
                    </p>
                  ) : (
                    <p className="text-[11.5px] text-[#1C3557]/70 font-sans mt-2.5 leading-relaxed max-w-md">
                      *Note: Your birthday in {result.targetYear} has occurred or is occurring today, meaning you have successfully transitioned into your {result.targetYear} Personal Year vibration.
                    </p>
                  )}
                </div>
              </div>

              {/* Core Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Col 1: Energetic Core theme */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs font-black text-[#1C3557] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#C9A84C]" /> Energetic Core & Influence
                    </h4>
                    <p className="text-[17px] leading-relaxed text-[#1C3557]/80 font-sans">{result.theme}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-[#1C3557] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#C9A84C]" /> Strategic Path & Advice
                    </h4>
                    <p className="text-[17px] leading-relaxed text-[#1C3557]/80 font-sans">{result.advice}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-[#1C3557] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#C9A84C]" /> Subconscious Pitfalls & Challenge
                    </h4>
                    <p className="text-[17px] leading-relaxed text-red-900 border-l-2 border-red-200 pl-4 font-sans">{result.challenge}</p>
                  </div>
                </div>

                {/* Col 2: Lucky Vibrations */}
                <div className="bg-[#F5ECD7]/30 p-6 border border-[#1C3557]/10 space-y-6 h-fit">
                  <h4 className="text-xs font-black text-[#1C3557] uppercase tracking-wider border-b border-[#1C3557]/10 pb-2">
                    🔮 Lucky Correspondences
                  </h4>

                  <div>
                    <span className="block text-[10px] font-bold text-[#1C3557]/50 uppercase tracking-widest mb-1">Lucky Colors</span>
                    <div className="flex flex-wrap gap-2">
                      {result.luckyColors.map(color => (
                        <span key={color} className="text-[15px] font-semibold px-2.5 py-1 bg-[#1C3557]/5 text-[#1C3557] border border-[#1C3557]/10">{color}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold text-[#1C3557]/50 uppercase tracking-widest mb-1">Prime Business Days</span>
                    <div className="flex flex-wrap gap-2">
                      {result.luckyDays.map(day => (
                        <span key={day} className="text-[15px] font-semibold px-2.5 py-1 bg-[#C9A84C]/10 text-[#B3933C] border border-[#C9A84C]/25">{day}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold text-[#1C3557]/50 uppercase tracking-widest mb-1">Vibrational Gemstone</span>
                    <p className="text-[15px] font-bold text-[#1C3557] italic">{result.luckyGem}</p>
                  </div>

                  <div className="pt-2 border-t border-[#1C3557]/10">
                    <p className="text-[13px] text-[#1C3557]/60 italic font-sans leading-relaxed">
                      Syncing physical environments with these properties enhances career luck, confidence, and spatial peace.
                    </p>
                  </div>
                </div>
              </div>

              {/* Monthly Roadmaps */}
              <div className="mt-12 bg-white border-t border-[#1C3557]/10 pt-10">
                <h4 className="text-xs font-black text-[#1C3557] uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C9A84C]" /> Month-By-Month Projections
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {result.monthlyProjections.map(proj => (
                    <div key={proj.month} className="p-4 bg-[#F5ECD7]/15 border border-[#1C3557]/5 flex flex-col justify-between hover:border-[#C9A84C]/50 transition-colors">
                      <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#1C3557]/5">
                        <span className="text-xs font-bold text-[#1C3557] uppercase tracking-wider">{proj.month}</span>
                        <span className="text-[13px] font-bold text-[#C9A84C]/80 px-1.5 py-0.5 bg-[#C9A84C]/10 font-mono">Cycle {proj.number}</span>
                      </div>
                      <p className="text-[15px] text-[#1C3557]/70 font-sans italic">{proj.theme}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Actions */}
              <div className="mt-12 border-t border-[#1C3557]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  onClick={() => setResult(null)}
                  className="flex items-center gap-2 text-xs font-bold text-[#C9A84C] hover:text-[#B3933C] uppercase tracking-widest transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" /> Calculate for another DOB
                </button>
                
                <a
                  href="/consultation"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1C3557] px-6 py-3.5 hover:bg-[#2e4c75] transition-colors uppercase tracking-widest"
                >
                  Book Professional Alignment <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
