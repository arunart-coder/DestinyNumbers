import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  User, 
  ArrowRight,
  ShieldCheck,
  Target,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function HoroscopeAnalysis() {
  const coverageItems = [
    { title: 'Ascendant (Lagna) & 12 Houses', desc: 'Insights into career, wealth, marriage, and health.' },
    { title: 'Planetary Positions & Strengths', desc: 'How each planet influences your personality and destiny.' },
    { title: 'Nakshatra Analysis', desc: 'Deep understanding of your lunar mansion and karmic path.' },
    { title: 'Dasha Periods', desc: 'Current and upcoming planetary timelines.' },
    { title: 'Transit Insights', desc: 'How planets are affecting you right now.' },
    { title: 'Nakshatra Nadi', desc: 'Precise stellar predictions for accurate timing.' }
  ];

  const benefits = [
    { title: 'Deep Self-Awareness', desc: 'Gain clarity about your life path and core strengths.', icon: User },
    { title: 'Strategic Timing', desc: 'Identify best periods for growth, marriage, or investments.', icon: Target },
    { title: 'Relationship Clarity', desc: 'Understand dynamics and marriage timing.', icon: Heart },
    { title: 'Practical Remedies', desc: 'Receive guidance to reduce obstacles and maximize flow.', icon: ShieldCheck }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen selection:bg-[#C9A84C] selection:text-[#1C3557]">
      <HeroHeader 
        eyebrow="Cosmic Blueprint Analysis"
        title="Horoscope Analysis"
        description="Discover your true potential through the exact map of the heavens at your birth. Unlock the secrets of your destiny."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Introduction */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-medium italic">Discover Your <span className="text-[#C9A84C]">Cosmic Blueprint</span></h2>
              <p className="text-[#1C3557]/80 leading-relaxed italic">
                Ever wondered why life flows smoothly sometimes and feels challenging at other times? Your Horoscope (Kundli) is a powerful cosmic map that captures the exact planetary positions at the time of your birth.
              </p>
              <p className="text-[#1C3557]/80 leading-relaxed italic">
                A professional Horoscope Analysis reveals your personality, life purpose, and helps you make confident decisions in career, relationships, and health.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#C9A84C]/20 -rotate-3 group-hover:rotate-0 transition-transform" />
              <img 
                src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800" 
                alt="Astrology Chart" 
                className="relative z-10 w-full h-[400px] object-cover grayscale border border-white/10 hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#C9A84C] z-20" />
            </div>
          </div>
        </section>

        {/* What it Covers */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-medium mb-12 text-center">What a Detailed Analysis Covers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageItems.map((item, i) => (
              <div key={i} className="p-8 bg-white border border-[#1C3557]/5 shadow-sm hover:shadow-xl transition-all h-full">
                <div className="w-1 h-8 bg-[#C9A84C] mb-6" />
                <h3 className="font-display font-black text-lg mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-[#1C3557]/60 italic font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Get Analysis */}
        <section className="mb-24 py-20 bg-[#1C3557] text-white p-12 md:p-20 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-display italic text-center mb-16 text-white">Why Analyze Your <span className="text-[#C9A84C]">Horoscope?</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {benefits.map((benefit, i) => (
                 <div key={i} className="flex gap-6 items-start group">
                   <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] transition-all">
                     <benefit.icon className="w-5 h-5 text-[#C9A84C] group-hover:text-[#1C3557]" />
                   </div>
                   <div className="space-y-2">
                     <h4 className="text-xl font-display font-medium">{benefit.title}</h4>
                     <p className="text-white/60 text-sm leading-relaxed italic font-light">{benefit.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Conclusion/CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-[#C9A84C]/20 p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display mb-8 italic">Ready to understand your <span className="text-[#C9A84C]">life’s blueprint?</span></h2>
            <p className="text-lg text-[#1C3557]/60 mb-12 font-light italic leading-loose">
              "Your horoscope is not your fate — it is your guide. Understand it. Align with it. Create your best life."
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link to="/consultation" className="px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[11px] uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4">
                Get Your Analysis Now <Sparkles className="w-5 h-5 text-[#1C3557]" />
              </Link>
              <Link to="/contact" className="px-12 py-6 bg-[#1C3557] text-white font-display font-black tracking-widest text-[11px] uppercase hover:brightness-125 transition-all flex items-center justify-center gap-4">
                Consult with Dr. Arun <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
            <p className="mt-8 text-[10px] uppercase font-black tracking-[0.3em] text-[#C9A84C] opacity-60">Limited slots available monthly</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
