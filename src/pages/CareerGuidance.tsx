import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Orbit, 
  TrendingUp, 
  Flame, 
  Heart, 
  Award, 
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function CareerGuidance() {
  const [activePlanetIndex, setActivePlanetIndex] = useState<number>(0);

  const planetsList = [
    {
      name: 'Saturn',
      role: 'Karma & Discipline',
      desc: 'Your Saturn placement reveals where your karmic debt lies and the industry that rewards your perseverance most. Known as the taskmaster, Saturn teaches persistence and structure.',
      bestFor: 'Long-term career planning, overcoming delays, establishing robust operational foundations.',
      icon: Award,
      color: 'from-slate-850 to-slate-950'
    },
    {
      name: 'Jupiter',
      role: 'Abundance & Growth',
      desc: 'The great benefactor — shows where your biggest financial and career opportunities naturally flow. Jupiter represents higher wisdom, expansion, and sudden fortunes.',
      bestFor: 'Business expansion, finding ideal mentors, strategic timing for promotions.',
      icon: TrendingUp,
      color: 'from-amber-600 to-amber-700'
    },
    {
      name: 'Mars',
      role: 'Drive & Ambition',
      desc: 'Reveals your action style — aggressive, strategic, or persistent — and the industrial sectors or roles that match your raw energy and competitive instinct.',
      bestFor: 'Entrepreneurship, leadership positions, real estate, execution and sales targets.',
      icon: Flame,
      color: 'from-red-600 to-red-700'
    },
    {
      name: 'Mercury',
      role: 'Intellect & Craft',
      desc: 'Governs communication, data, and mental skill — whether you\'re built for strategic thinking, persuasive writing, rigorous analysis, or high-stakes negotiation.',
      bestFor: 'Finance, technology, media, journalism, commercial law, and brokerage.',
      icon: BookOpen,
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      name: 'Venus',
      role: 'Values & Aesthetics',
      desc: 'Identifies creative, relationship-focused, and people-driven career paths — where your innate sense of harmony, luxury, and aesthetics matches the market.',
      bestFor: 'Luxury segments, design, interior vastu, hospitality, elite public relations, and fashion.',
      icon: Heart,
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: '10th House',
      role: 'Career Destiny',
      desc: 'The primary house of career in your natal chart — reveals your public standing, true vocational calling, peak professional achievement, and leadership style.',
      bestFor: 'Complete professional blueprint reading, legacy planning, and major industry transitions.',
      icon: Orbit,
      color: 'from-indigo-600 to-indigo-700'
    }
  ];

  const steps = [
    {
      stepNum: "01",
      title: "Book Your Consultation",
      desc: "Connect with us online or visit our Bengaluru center. Share your date, time, and place of birth — this is your cosmic fingerprint. No preparation is required from your end."
    },
    {
      stepNum: "02",
      title: "Numerology Blueprint",
      subtitle: "Calculate Your Life Path",
      desc: "We reduce your full birth date to your Life Path Number (1–9) and cross-reference it with your Destiny, Soul Urge, and Expression numbers to map your exact vocational DNA."
    },
    {
      stepNum: "03",
      title: "Astrological Chart Analysis",
      subtitle: "Planets with Dasha Period",
      desc: "Using Nakshatra Nadi methodology, we examine your Saturn placement, 10th house lord, your current Dasha period, and transits to identify active career karma and ideal sectors."
    },
    {
      stepNum: "04",
      title: "Vibrational Cross-Analysis",
      subtitle: "Where Numbers Meet Planets",
      desc: "The magic happens when your life path number aligns with (or challenges) your planetary positions. This cosmic intersection reveals your true calling with uncanny precision."
    },
    {
      stepNum: "05",
      title: "Personalized Blueprint & Remedies",
      desc: "Receive a comprehensive written report detailing career field recommendations, auspicious times to make moves, name/number corrections if needed, and simple Vedic remedies to dissolve blocks."
    }
  ];

  const careerBenefits = [
    'Stop fighting uphill battles in industries that conflict with your birth charts.',
    'Align major professional moves, job applications, or startup launches with your supportive Dasha timing.',
    'Capitalize on your dominant planetary energies (creative Venus, analytical Mercury, leading Sun/Mars).',
    'Dissolve stubborn career blocks and financial ceilings through scientific, low-overhead Vedic remedies.'
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Cosmic Vocation Alignment"
        title="Career Guidance"
        description="Understand Your Professional Karma and Stop Struggling Against the Cosmic Stream."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-base text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto">
            At Destiny Numbers, we read your birth chart and numerology profile through the specific lens of career — identifying which planetary energies are helping you rise and which are creating karmic friction in your work life.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Link 
              to="/contact" 
              className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
            >
              Book Your Career Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>
        </div>

        {/* Section 1: Planet Vocation Blueprint - High Polish Table and Interactive View */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Cosmic Architecture</div>
            <h2 className="text-3xl font-display font-medium italic text-[#1C3557]">How the Planets Shape Your Professional Karma</h2>
            <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic max-w-xl mx-auto mt-2">
              Every letter, number, and celestial placement plays a key role. Click a planet below to inspect its detailed vibrational blueprint.
            </p>
          </div>

          {/* Interactive Planet Cards Layout */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
            {planetsList.map((planet, idx) => {
              const IconComp = planet.icon;
              const isActive = activePlanetIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePlanetIndex(idx)}
                  className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-2 focus:outline-none ${
                    isActive 
                      ? 'bg-[#1C3557] text-white border-[#C9A84C] shadow-md scale-105' 
                      : 'bg-white border-[#1C3557]/10 text-[#1C3557] hover:border-[#1C3557]/30'
                  }`}
                >
                  <IconComp className={`w-5 h-5 ${isActive ? 'text-[#C9A84C]' : 'text-[#1C3557]/60'}`} />
                  <span className="text-xs font-display font-bold tracking-wider">{planet.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Planet Description Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlanetIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-8 bg-white border border-[#1C3557]/5 rounded-2xl shadow-sm space-y-4"
            >
              <div className="flex justify-between items-center border-b border-[#1C3557]/10 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#C9A84C]">Active Vibe Reading</span>
                  <h3 className="text-xl font-display font-medium italic text-[#1C3557]">
                    {planetsList[activePlanetIndex].name} — <span className="text-[#C9A84C]">{planetsList[activePlanetIndex].role}</span>
                  </h3>
                </div>
                <div className="p-3 bg-[#F5ECD7] rounded-full text-[#1C3557]">
                  {React.createElement(planetsList[activePlanetIndex].icon, { className: "w-5 h-5" })}
                </div>
              </div>
              <p className="text-xs text-[#1C3557]/80 leading-relaxed font-light italic">
                {planetsList[activePlanetIndex].desc}
              </p>
              <div className="bg-[#F5ECD7]/35 p-4 rounded-xl border border-[#1C3557]/5">
                <h4 className="text-xs font-display font-black uppercase text-[#C9A84C] tracking-wide mb-1">Destined Career Pathways</h4>
                <p className="text-xs text-[#1C3557]/90 font-light italic leading-normal">
                  {planetsList[activePlanetIndex].bestFor}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Fully Responsive Grid/Table Detail (Desktop-First styled table list) */}
          <div className="mt-12 hidden md:block overflow-hidden rounded-2xl border border-[#1C3557]/10 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1C3557] text-white font-display text-xs uppercase tracking-wider">
                  <th className="p-4 pl-6">Planet</th>
                  <th className="p-4">Career Role</th>
                  <th className="p-4">What We Read</th>
                  <th className="p-4 pr-6">Primary Sectors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C3557]/5">
                {planetsList.map((p, i) => (
                  <tr key={i} className="hover:bg-[#F5ECD7]/30 transition-colors">
                    <td className="p-4 pl-6 font-display font-bold text-[#C9A84C] italic text-xs">{p.name}</td>
                    <td className="p-4 font-display font-medium italic text-xs text-[#1C3557]">{p.role}</td>
                    <td className="p-4 text-xs font-light text-[#1C3557]/85 italic leading-snug">{p.desc}</td>
                    <td className="p-4 pr-6 text-xs font-light text-[#1C3557]/80 italic leading-snug">{p.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: How It Works Process Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Step-By-Step Journey</div>
            <h2 className="text-3xl font-display font-medium italic text-[#1C3557]">How It Works — Your Cosmic Career Reading</h2>
            <p className="text-sm text-[#1C3557]/75 mt-2 italic font-light max-w-xl mx-auto">
              From first contact to a life-changing professional blueprint, here is exactly what your Destiny Numbers journey looks like:
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((st, idx) => (
              <div 
                key={idx}
                className="flex gap-6 p-6 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/25 transition-all rounded-xl shadow-sm relative overflow-hidden"
              >
                <div className="absolute right-4 top-4 text-5xl font-display font-black text-[#1C3557]/5 select-none">
                  {st.stepNum}
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#C9A84C] bg-[#F5ECD7] flex items-center justify-center font-display font-black text-xs text-[#1C3557] shrink-0">
                  {st.stepNum}
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-display font-bold text-[#1C3557]">
                    {st.title} 
                    {st.subtitle && <span className="text-xs font-light italic text-[#C9A84C] ml-2">— {st.subtitle}</span>}
                  </h4>
                  <p className="text-xs text-[#1C3557]/80 leading-relaxed font-light italic max-w-2xl">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Diagnostic Benefits Checklist */}
        <section className="mb-20 bg-[#1C3557] text-white rounded-2xl p-8 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
          <div className="relative z-10 space-y-8">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">STRATEGIC ADVANTAGES</span>
              <h2 className="text-2xl md:text-3xl font-display italic text-white mt-1">Why Align Your Career Graph with Vedic Sciences?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerBenefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-sm text-white/90 font-light leading-relaxed italic">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center pt-4">
              <p className="text-xs text-[#C9A84C] italic tracking-widest uppercase">
                Stop forcing outcomes. Operate in perfect sync with your pre-defined energetic peaks.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Why Destiny Numbers? (Traditional authority block) */}
        <section className="mb-20 text-center space-y-6">
          <div className="w-12 h-1 bg-[#C9A84C] mx-auto mb-4"></div>
          <h2 className="text-3xl font-display font-medium italic text-[#1C3557]">Our Professional Consultation Excellence</h2>
          <p className="text-[#1C3557]/85 text-base leading-relaxed font-light italic max-w-2xl mx-auto">
            At Destiny Numbers, we are not interested in generic algorithms or automated online readings. We combine classical Vedic Nadi parameters, planetary transits, and complete graphology/numerology analysis to build clear recommendations.
          </p>
          <p className="text-[#1C3557]/85 text-base leading-relaxed font-light italic max-w-2xl mx-auto">
            Our expert practitioners walk hand-in-hand with professionals globally — helping key decision-makers, executives, students, and startup founders step into high-flow orbits of career progress.
          </p>
        </section>

        {/* CTA Footer Form Container */}
        <footer className="text-center bg-[#1C3557]/5 p-12 md:p-20 border border-[#C9A84C]/20 rounded-2xl relative">
          <Sparkles className="w-12 h-12 text-[#C9A84C] mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-display mb-8 italic">Ready to Redesign Your <span className="text-[#C9A84C]">Professional Path?</span></h2>
          <p className="text-lg text-[#1C3557]/70 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            A single multi-dimensional session with Destiny Numbers is all it takes to bring clarity, purpose, and cosmic strength to your career.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all gap-4"
          >
            Book your consultation now <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-8 text-[12px] font-black uppercase tracking-[0.4em] text-[#C9A84C]">Command your professional trajectory with absolute confidence.</div>
        </footer>
      </div>
    </div>
  );
}
