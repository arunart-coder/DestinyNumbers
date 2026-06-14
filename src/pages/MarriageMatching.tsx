import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Heart, 
  Star, 
  Flame, 
  Award, 
  BookOpen, 
  Coins, 
  Activity, 
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function MarriageMatching() {
  const [activeKutaIdx, setActiveKutaIdx] = useState<number>(0);

  const kutaList = [
    {
      name: 'Varna',
      score: '1 Point',
      title: 'Spiritual Compatibility & Ego Balance',
      desc: 'Measures spiritual and work temperament compatibility. It evaluates the inner capabilities and ensures both partners find mutual respect, avoiding superiority clashes.',
      icon: Award
    },
    {
      name: 'Vashya',
      score: '2 Points',
      title: 'Mutual Attraction & Dominance',
      desc: 'Assesses the power equation and magnetic attraction. It determines who will dominate or influence the union, ensuring a mutually supportive, non-subservient equation.',
      icon: Heart
    },
    {
      name: 'Tara',
      score: '3 Points',
      title: 'Birth Star Destiny Alignment',
      desc: 'Analyzes the health, wellbeing, and overall destiny compatibility. Evaluates planetary strength based on the birth constellation (Nakshatra) of both individuals.',
      icon: Star
    },
    {
      name: 'Yoni',
      score: '4 Points',
      title: 'Physical & Intimate Harmony',
      desc: 'Measures biological connection, subconscious reflexes, and intimate physical chemistry. Vital for physical compatibility, direct legacy propagation, and pure attraction.',
      icon: Flame
    },
    {
      name: 'Graha Maitri',
      score: '5 Points',
      title: 'Planetary Friendship & Mental Bond',
      desc: 'Measures mental compatibility, conversational rhythm, and intellectual alignment. Looks at the friendship between moon sign lords of both horoscopes.',
      icon: Users
    },
    {
      name: 'Gana',
      score: '6 Points',
      title: 'Temperament Match (Deva, Manushya, Rakshasa)',
      desc: 'Traces high-level temperament, personality classifications, and basic outlook toward life values. Essential to prevent core behavioral friction.',
      icon: BookOpen
    },
    {
      name: 'Bhakoot',
      score: '7 Points',
      title: 'Emotional Love & Wealth Compatibility',
      desc: 'Sensing monthly moon-transit interactions. Governs longevity, emotional growth, and prosperity accumulation, preventing financial blocks and family discord.',
      icon: Coins
    },
    {
      name: 'Nadi',
      score: '8 Points',
      title: 'Genetic & Health Constitution Match',
      desc: 'The most critical check. Examines physiological compatibility, hereditary strength, and progeny health. Flags major issues like "Nadi Dosha" that cause health delays.',
      icon: Activity
    }
  ];

  const pillars = [
    {
      title: 'Lagna (Ascendant)',
      subtitle: 'Physical Nature & Personality',
      desc: 'The ascendant sign shapes your personality, outer template, and physical constitution. Your Lagna lords must harmonise for daily, practical life routines to flow smoothly.'
    },
    {
      title: 'Rashi (Moon Sign)',
      subtitle: 'Bedrock of Emotional Bonding',
      desc: 'Your moon sign governs emotions, intuition, and your subconscious inner world. Emotional compatibility is the irreplaceable foundation of a happy, lifelong home.'
    },
    {
      title: 'Dasha (Timing & Periods)',
      subtitle: 'Cosmic Temporal Alliance',
      desc: 'Planetary periods must align at the moment of marital union. Even a mathematically high Ashtakuta score can experience severe blocks or friction without proper Dasha support.'
    }
  ];

  const steps = [
    {
      step: 'Step 1',
      title: 'Enter Birth Details',
      desc: 'Provide the precise date, time, and geographical place of birth for both bride and groom. Accuracy here is critical — even a small 10-minute shift can change the Lagna or Nakshatra.'
    },
    {
      step: 'Step 2',
      title: 'Generate Kundali Charts',
      desc: 'Our system computes both comprehensive natal charts using advanced astronomical algorithms and Vedic ephemeris, identifying Nakshatras, Lagna, Rashi, and planetary degrees.'
    },
    {
      step: 'Step 3',
      title: 'Ashtakuta Analysis',
      desc: 'All 8 Kuta scores are calculated and evaluated. The system flags major afflictions like Mangal Dosha (Kuja Dosha) and Nadi Dosha, which require conscious planning.'
    },
    {
      step: 'Step 4',
      title: 'Receive Your Report & Remedies',
      desc: 'Get an in-depth compatibility report with specific Vedic remedies — customized poojas, gemstone guidelines, and timing advice — to dissolve obstacles and strengthen your bond.'
    }
  ];

  const trustTags = [
    'Classical Jyotish Texts',
    'Expert Astrologer Review',
    'Mangal Dosha Analysis',
    'Remedies Included',
    'Multilingual Reports'
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Vedic Astrology · Kundali Milan"
        title="Find Your Destined Union"
        description="Ancient wisdom of the Ashtakuta system — 36 gunas, your Lagna, Rashi & Dasha — revealing cosmic compatibility before you say yes."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Match Your Kundali <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <a 
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex justify-center px-8 py-4 border border-[#1C3557]/20 text-[#1C3557] font-display font-bold tracking-widest text-[11px] uppercase hover:bg-[#1C3557]/5 transition-all"
          >
            How It Works
          </a>
        </div>

        {/* SECTION 1 — What is Kundali Matching */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Compass className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">What is Kundali Matching</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">The Sacred Science Behind Every Happy Marriage</h2>
            <p className="text-[#1C3557]/80 leading-relaxed font-light italic">
              In Vedic tradition, a marriage is not merely a union of two people — it is the alignment of two destinies written in the stars. Kundali matching (Kundli Milan) is the time-honoured practice of comparing the birth charts of a prospective bride and groom to reveal how planetary forces will shape their life together.
            </p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light italic">
              Widely practiced across Hindu families in India and the diaspora, it remains the most trusted first step in an arranged marriage — offering clarity on compatibility, potential challenges, and the remedies that can bring lasting marital bliss.
            </p>
            
            <div className="border-l-2 border-[#C9A84C] pl-4 italic text-[#1C3557]/90 font-display text-sm py-2">
              "The stars incline, they do not compel — but knowing their inclination is the beginning of wisdom."
            </div>
          </div>
        </section>

        {/* SECTION 2 — The Ashtakuta System */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2 block">The Ashtakuta System</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">36 Points. One Lifetime. Zero Compromise.</h2>
            <p className="text-sm text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto mt-3">
              The traditional Ashtakuta method evaluates eight dimensions of compatibility, each carrying a specific score. A total of 36 points are assessed — higher compatibility means a more harmonious union. Click a Guna below to explore:
            </p>
          </div>

          {/* Interactive Guna list selectors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8">
            {kutaList.map((guna, idx) => {
              const IconComp = guna.icon;
              const isActive = activeKutaIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveKutaIdx(idx)}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 focus:outline-none ${
                    isActive 
                      ? 'bg-[#1C3557] text-white border-[#C9A84C] shadow-md scale-105' 
                      : 'bg-white border-[#1C3557]/5 text-[#1C3557] hover:border-[#1C3557]/20 shadow-sm'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#C9A84C]' : 'text-[#1C3557]/50'}`} />
                  <span className="text-xs font-display font-bold">{guna.name}</span>
                  <span className="text-[9px] font-mono opacity-70">({guna.score})</span>
                </button>
              );
            })}
          </div>

          {/* Guna detailed analysis window */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKutaIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-8 bg-white border border-[#1C3557]/5 rounded-2xl shadow-sm space-y-4"
            >
              <div className="flex justify-between items-center border-b border-[#1C3557]/10 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#C9A84C]">{kutaList[activeKutaIdx].name} ({kutaList[activeKutaIdx].score})</span>
                  <h3 className="text-lg font-display font-medium italic text-[#1C3557]">
                    {kutaList[activeKutaIdx].title}
                  </h3>
                </div>
                <div className="p-2.5 bg-[#F5ECD7] rounded-full text-[#1C3557]">
                  {React.createElement(kutaList[activeKutaIdx].icon, { className: "w-5 h-5" })}
                </div>
              </div>
              <p className="text-xs text-[#1C3557]/80 leading-relaxed font-light italic">
                {kutaList[activeKutaIdx].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* SECTION 3 — The Three Pillars */}
        <section className="mb-20 bg-[#1C3557] text-white rounded-2xl p-8 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Beyond the Score</span>
              <h2 className="text-2xl md:text-3xl font-display italic text-white mt-1">Lagna, Rashi & Dasha — The Three Pillars</h2>
              <p className="text-white/75 text-xs font-light leading-relaxed mt-3 italic">
                The 36-point score is only the beginning. True compatibility is revealed when three foundational elements are examined together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {pillars.map((p, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C9A84C]">Pillar 0{idx + 1}</span>
                  <h4 className="font-display font-medium text-[#C9A84C] italic text-sm">{p.title}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/50">{p.subtitle}</p>
                  <p className="text-xs text-white/80 font-light leading-relaxed italic">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — How It Works */}
        <section id="how-it-works" className="mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">Four Steps to Clarity</h2>
            <p className="text-sm text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto mt-3">
              Understanding compatibility scientifically is structured and precise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((st, i) => (
              <div key={i} className="p-5 bg-white border border-[#1C3557]/5 rounded-xl space-y-3 relative">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#C9A84C]">
                  {st.step}
                </span>
                <h4 className="font-display font-bold text-[#1C3557] italic text-xs">
                  {st.title}
                </h4>
                <p className="text-[11px] text-[#1C3557]/70 leading-relaxed font-light italic">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — Why DestinyNumbers */}
        <section className="mb-20 bg-white/20 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center space-y-6">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Why DestinyNumbers</span>
          <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Precision Vedic Astrology, Modern Clarity</h2>
          <p className="text-[#1C3557]/80 leading-relaxed font-light italic max-w-2xl mx-auto text-sm">
            We bridge the depth of ancient Jyotish with the clarity modern families need. Every report is grounded in classical texts, interpreted by expert astrologers, and presented in plain language you can act on.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {trustTags.map((tag, i) => (
              <span 
                key={i} 
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1C3557]/5 border border-[#1C3557]/10 rounded-full text-xs font-light italic text-[#1C3557]"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* SECTION 6 — Final CTA */}
        <footer className="text-center bg-[#1C3557]/5 p-12 md:p-20 border border-[#C9A84C]/20 rounded-2xl relative">
          <Sparkles className="w-12 h-12 text-[#C9A84C] mx-auto mb-8 animate-pulse" />
          <h2 className="text-2xl md:text-5xl font-display mb-8 italic">Begin Your <span className="text-[#C9A84C]">Compatibility Journey</span></h2>
          <p className="text-lg text-[#1C3557]/70 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            Thousands of families have trusted DestinyNumbers to guide one of life's most important decisions. Obtain deep-dive clarity on your destiny alignment.
          </p>
          <div className="space-y-4">
            <Link 
              to="/compatibility" 
              className="inline-flex px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all gap-4 animate-bounce"
            >
              Numerology Match Making — Free <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="pt-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#C9A84C]">Vedic Match Reports. Fully Qualified Insights.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
