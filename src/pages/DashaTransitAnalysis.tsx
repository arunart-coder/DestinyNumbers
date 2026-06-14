import React from 'react';
import { motion } from 'motion/react';
import { 
  Orbit, 
  Calendar, 
  Clock, 
  Zap, 
  Star, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  Compass,
  Briefcase,
  History,
  TrendingUp,
  LayoutGrid,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function DashaTransitAnalysis() {
  const dashaLevels = [
    { name: 'Mahadasha', desc: 'Major period ruling several years.' },
    { name: 'Antardasha', desc: 'Sub-period within the Mahadasha.' },
    { name: 'Pratyantardasha', desc: 'Detailed sub-sub periods.' }
  ];

  const transitPlanets = [
    { name: 'Shani (Saturn)', effect: 'Major life lessons, delays, or rewards (Sade Sati).', icon: ShieldCheck },
    { name: 'Guru (Jupiter)', effect: 'Growth, opportunities, and blessings.', icon: Star },
    { name: 'Rahu/Ketu', effect: 'Karmic shifts and sudden changes.', icon: Zap },
    { name: 'Fast Planets', effect: 'Sun, Moon, Mercury — influence day-to-day matters.', icon: Globe }
  ];

  const systems = [
    {
      title: 'Nakshatra Nadi Astrology',
      points: [
        'Focuses on 27 Nakshatras and finer subdivisions.',
        'Excels in accurate event timing for career and relationships.',
        'Sub-lord theory (Sub Lord > Nakshatra Lord > Planet) for scientific reliability.'
      ]
    },
    {
      title: 'KP System (Krishnamurti Paddhati)',
      points: [
        'Modern refined approach with high accuracy.',
        'Uses Placidus house division for precise analysis.',
        'Excellent for yes/no questions and pinpointing event timing.'
      ]
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen selection:bg-[#C9A84C] selection:text-[#1C3557]">
      <HeroHeader 
        eyebrow="Vedic Astrology Timing"
        title="Dasha & Transit Analysis"
        description="Life unfolds according to divine timing. Understand the long-term phases and current energetic traffic of your journey."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Introduction */}
        <section className="mb-20 bg-white p-10 md:p-14 border border-[#C9A84C]/20 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
             <Orbit className="w-40 h-40" />
           </div>
           <h2 className="text-2xl font-display font-medium mb-8 border-b border-[#C9A84C]/20 pb-4">Divine Timing in Jyotish</h2>
           <p className="text-[#1C3557]/80 leading-relaxed italic mb-6">
             In Vedic Astrology, Dasha represents major planetary periods that shape long-term life phases, while Transits (Gochar) show the current movement of planets. Together, they allow astrologers to predict events with precision, incorporating advanced systems like Nakshatra Nadi and KP for deeper insight.
           </p>
        </section>

        {/* What is Dasha */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Clock className="w-8 h-8 text-[#C9A84C]" />
            <h2 className="text-3xl font-display font-medium">What is Dasha?</h2>
          </div>
          <p className="text-[#1C3557]/80 leading-relaxed italic mb-10">
            Dasha is a planetary timeline system calculated based on the Moon's Nakshatra at birth. Each planet rules a specific period (Mahadasha), influencing events based on its position in your Kundli.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashaLevels.map((lvl, i) => (
              <div key={i} className="p-8 bg-white/50 border border-[#1C3557]/5 text-center">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3">Level {i+1}</div>
                <div className="text-2xl font-display font-medium text-[#1C3557] mb-3">{lvl.name}</div>
                <p className="text-sm text-[#1C3557]/60 italic font-light">{lvl.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8 bg-[#1C3557] text-[#C9A84C] font-display italic text-lg text-center border-l-4 border-[#C9A84C]">
            "Dasha sets the overall theme of your life journey."
          </div>
        </section>

        {/* Transits */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Globe className="w-8 h-8 text-[#C9A84C]" />
            <h2 className="text-3xl font-display font-medium">What are Transits (Gochar)?</h2>
          </div>
          <p className="text-[#1C3557]/80 leading-relaxed italic mb-10">
            Transits refer to the current positions of planets. While Dasha sets the theme, transits act as triggers for specific events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transitPlanets.map((p, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white border border-[#1C3557]/5 shadow-sm group hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-[#F5ECD7] flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                  <p.icon className="w-6 h-6 text-[#1C3557] group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg mb-2">{p.name}</h3>
                  <p className="text-sm text-[#1C3557]/60 italic font-light leading-relaxed">{p.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nadi & KP Systems */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-medium mb-12 text-center">Advanced Predictive Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {systems.map((sys, i) => (
              <div key={i} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-8 bg-[#C9A84C]" />
                  <h3 className="text-2xl font-display font-medium">{sys.title}</h3>
                </div>
                <ul className="space-y-6">
                  {sys.points.map((pt, j) => (
                    <li key={j} className="flex gap-4">
                      <Zap className="w-5 h-5 text-[#C9A84C] shrink-0 mt-1" />
                      <p className="text-[#1C3557]/80 text-sm leading-relaxed italic">{pt}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why Analysis Matters */}
        <section className="mb-20 py-20 bg-[#1C3557] text-white p-12 md:p-20 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-display italic text-center mb-16 text-white">Why Analyze <span className="text-[#C9A84C]">Timing?</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
               {[
                 'Understand current life phases and upcoming shifts.',
                 'Identify favorable periods for marriage, business, or investments.',
                 'Prepare for karmic challenges and maximize hidden opportunities.',
                 'Gain clarity on career, health, and spiritual alignment.'
               ].map((point, i) => (
                 <div key={i} className="flex gap-4 items-start">
                   <div className="mt-2 w-1.5 h-1.5 bg-[#C9A84C] shrink-0" />
                   <p className="text-lg font-light italic text-white/70 leading-relaxed">{point}</p>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Conclusion */}
        <footer className="text-center">
          <p className="text-[#1C3557]/60 italic font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Dasha and Transit analysis forms the backbone of predictive Vedic astrology. Empower yourself with the wisdom to navigate life's cosmic roadmap.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/consultation" className="px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[11px] uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              Book Analysis Consultation <Calendar className="w-5 h-5" />
            </Link>
            <Link to="/services" className="px-12 py-6 bg-[#1C3557] text-white font-display font-black tracking-widest text-[11px] uppercase hover:brightness-125 transition-all flex items-center justify-center gap-4">
              Explore All Services <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
