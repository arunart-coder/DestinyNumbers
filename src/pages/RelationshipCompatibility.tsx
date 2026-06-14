import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  ArrowRight, 
  Sparkles, 
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function RelationshipCompatibility() {
  const layers = [
    {
      num: "01",
      title: "Numeroscope Analysis",
      desc: "Your life path numbers, expression numbers, and soul urge vibrations reveal the invisible patterns shaping how you love, communicate, and grow together as a couple."
    },
    {
      num: "02",
      title: "Full Horoscope Reading",
      desc: "We examine entire birth charts — not just Sun signs — assessing planetary placements, houses, and transits to understand your deeper relational dynamic and long-term alignment."
    },
    {
      num: "03",
      title: "Current Life Phase",
      desc: "Timing matters. Your current planetary periods and numerological cycles determine whether now is a season of union, growth, or careful navigation."
    },
    {
      num: "04",
      title: "Prashna Shastra",
      desc: "This ancient art of divine inquiry answers the questions most important to you — offering piercing insight drawn from the moment the question itself is asked."
    }
  ];

  const matters = [
    {
      title: "Understand Each Other Deeply",
      desc: "Gain insight into your partner's core motivations, emotional patterns, and hidden strengths — the things that rarely surface in everyday conversation but define a relationship over time."
    },
    {
      title: "Navigate Hard Seasons Together",
      desc: "Every couple faces challenges. Knowing the nature of those challenges in advance means you can meet them with strategy and mutual understanding, not surprise and blame."
    },
    {
      title: "Build a Lasting Foundation",
      desc: "Our practical guidance and remedies ensure your journey together is oriented toward harmony, mutual growth, and a commitment that deepens with every passing year."
    }
  ];

  const steps = [
    {
      step: "Step 1",
      title: "Book Your Slot",
      desc: "Choose a consultation time that suits you. Online sessions are available across all time zones, including flexible evening and weekend slots."
    },
    {
      step: "Step 2",
      title: "Share Your Details",
      desc: "Provide birth dates, full names, and birth times for both partners. The more precise the information, the richer and more accurate your reading."
    },
    {
      step: "Step 3",
      title: "Deep Analysis",
      desc: "Our expert prepares a comprehensive fourfold reading, synthesising your numeroscope, full birth charts, current life phase, and Prashna Shastra insights."
    },
    {
      step: "Step 4",
      title: "Your Roadmap & Remedies",
      desc: "You receive practical guidance, specific remedies, and a clear understanding of your relationship's strengths, challenges, and highest potential."
    }
  ];

  const testimonials = [
    {
      quote: "The reading didn't just confirm we were compatible — it showed us exactly why we sometimes clash, and gave us a language for working through it. Absolutely worth every minute.",
      names: "Priya & Kiran",
      location: "Bangalore"
    },
    {
      quote: "I was sceptical at first. But the accuracy of our numeroscope reading — the way it described both our personalities — changed my mind entirely. We've been married three years now, stronger than ever.",
      names: "Rahul & Meena",
      location: "Mumbai"
    },
    {
      quote: "Before our wedding, this was the most grounding thing we did. We walked away with real tools and real insight — not just reassurance. That distinction matters enormously.",
      names: "Ananya & Dev",
      location: "Delhi"
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Relationship Compatibility Reading"
        title="Are You Destined for Each Other?"
        description="Beyond attraction and intuition lies a deeper truth — written in your birth numbers and the stars. Discover the sacred blueprint of your relationship."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Reveal Your Compatibility <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <a 
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex justify-center px-8 py-4 border border-[#1C3557]/20 text-[#1C3557] font-display font-bold tracking-widest text-[11px] uppercase hover:bg-[#1C3557]/5 transition-all"
          >
            How It Works
          </a>
        </div>

        {/* SECTION 1 — Our Approach */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Compass className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Our Approach</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Beyond Traditional Match-Making</h2>
            <p className="text-[#1C3557]/80 leading-relaxed font-light italic">
              Conventional methods rely on surface-level criteria — ashta koota, dasha koota, gana koota, and basic number compatibility. We go deeper. Our readings integrate your complete horoscope, your numeroscope, the currents of your present life phase, and the timeless wisdom of Prashna Shastra.
            </p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light italic">
              This is not fortune-telling. It is a practical roadmap — one that reveals the true strengths and friction points in your relationship, so you can navigate them with clarity and confidence.
            </p>
          </div>
        </section>

        {/* SECTION 2 — What We Analyse */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2 block">What We Analyse</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">A Fourfold Reading</h2>
            <p className="text-sm text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto mt-3">
              Each layer of our analysis reveals something the others cannot. Together, they form a complete and honest picture of your relationship's potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layers.map((layer, i) => (
              <div 
                key={i} 
                className="p-6 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm space-y-3 relative overflow-hidden"
              >
                <div className="text-4xl font-display font-black text-[#1C3557]/5 absolute right-4 top-4 select-none">
                  {layer.num}
                </div>
                <h4 className="text-base font-display font-bold text-[#1C3557] italic">
                  {layer.num} — {layer.title}
                </h4>
                <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Why It Matters */}
        <section className="mb-20 bg-[#1C3557] text-white rounded-2xl p-8 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Why It Matters</span>
              <h2 className="text-2xl md:text-3xl font-display italic text-white mt-1">Love Is the Beginning, Not the Blueprint</h2>
              <p className="text-white/75 text-xs font-light leading-relaxed mt-3 italic">
                A compatibility reading is not about labelling a match as "good" or "bad." It is about equipping you with the knowledge to build something lasting, intentional, and real.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {matters.map((matter, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                  <Heart className="w-6 h-6 text-[#C9A84C]" />
                  <h4 className="font-display font-medium text-[#C9A84C] italic text-sm">{matter.title}</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed italic">{matter.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — How It Works */}
        <section id="how-it-works" className="mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">Your Consultation Journey</h2>
            <p className="text-sm text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto mt-3">
              Four thoughtful steps toward clarity, confidence, and connection.
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

        {/* SECTION 5 — Testimonials */}
        <section className="mb-20 bg-white/20 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2 block">What Couples Say</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Real Relationships, Real Results</h2>
          </div>
          
          <div className="space-y-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white/50 p-6 rounded-xl border border-[#1C3557]/5 space-y-3">
                <p className="text-xs text-[#1C3557]/80 leading-relaxed italic font-light">
                  "{t.quote}"
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-[#1C3557]/5">
                  <span className="text-xs font-display font-bold text-[#1C3557]/90 italic">
                    — {t.names}, {t.location}
                  </span>
                  <div className="flex text-[#C9A84C] tracking-tight text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center bg-[#1C3557]/5 p-12 md:p-20 border border-[#C9A84C]/20 rounded-2xl relative">
          <Sparkles className="w-12 h-12 text-[#C9A84C] mx-auto mb-8 animate-pulse" />
          <h2 className="text-2xl md:text-5xl font-display mb-8 italic">Ready to Reveal your <span className="text-[#C9A84C]">Compatibility?</span></h2>
          <p className="text-lg text-[#1C3557]/70 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            Bring clarity, depth, and ancient cosmological alignment into your partnership today. Set yourselves on a shared path with absolute confidence.
          </p>
          <div className="space-y-4">
            <Link 
              to="/contact" 
              className="inline-flex px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all gap-4 animate-bounce"
            >
              Reveal Your Compatibility <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="pt-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#C9A84C]">The consultation takes a few hours. The clarity lasts a lifetime.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
