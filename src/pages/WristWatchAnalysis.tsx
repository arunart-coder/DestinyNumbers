import React from 'react';
import { motion } from 'motion/react';
import { 
  Watch, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  User, 
  Clock, 
  FileText, 
  Users,
  CircleDot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function WristWatchAnalysis() {
  const points = [
    'Hidden patterns in your subconscious mind',
    'Your true strengths, confidence levels, and areas of resistance',
    'How your watch is influencing your relationships, finances, and health',
    'What simple changes to your timepiece could shift your life\'s momentum'
  ];

  const scienceElements = [
    {
      title: 'Colour',
      desc: 'Speaks directly to your energy field, emotional state, and the planetary wavelengths you reinforce daily.'
    },
    {
      title: 'Shape',
      desc: 'Reflects your core approach to organization, boundaries, decision-making, and structure.'
    },
    {
      title: 'Dial Style',
      desc: 'Connects to how you process the passage of time, professional ambition, mental clarity, and focus.'
    },
    {
      title: 'Strap Material',
      desc: 'Whether leather, metal, or rubber — each carries a distinct elemental resonance (Earth, Metal, Water).'
    }
  ];

  const gains = [
    {
      title: 'Clarity on Personality Patterns',
      desc: 'Understand what drives you, what holds you back, and what you project to the world without realising it.'
    },
    {
      title: 'Relationship Insights',
      desc: 'Discover how your watch choice is subtlely affecting your personal and professional bonds.'
    },
    {
      title: 'Wealth & Health Alignment',
      desc: 'Identify if your current timepiece is energetically working for or against your financial and physical wellbeing.'
    },
    {
      title: 'Confidence & Courage',
      desc: 'Learn what your watch preferences reveal about your inner reserves of strength.'
    },
    {
      title: 'Practical Remedies',
      desc: 'Receive specific, personalised guidance on watch type, colour, material, and style to support your goals.'
    }
  ];

  const components = [
    {
      icon: FileText,
      title: 'In-depth Analysis Report',
      desc: 'A comprehensive written overview of your wristwatch\'s attributes and what they mean for your life situation right now.'
    },
    {
      icon: Users,
      title: 'Expert Interpretation',
      desc: 'A one-on-one session where our specialist walks you through the findings, answers your questions, and connects the analysis to your specific goals.'
    },
    {
      icon: Sparkles,
      title: 'Personalised Remedial Guidance',
      desc: 'Tailored recommendations — whether that means switching strap colours, changing the dial style, or choosing a different watch altogether — with clear reasoning.'
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Subconscious Decoding"
        title="Wristwatch Analysis"
        description="Your watch is quietly reflecting your deepest patterns, your energy, and your life trajectory. Decode the hidden language on your wrist."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-base text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto">
            You chose your wristwatch for a reason — the colour, the shape, the strap, the dial. At <strong>Destiny Numbers</strong>, we go beyond standard charts to offer this rare, powerful insight strapping right to your wrist.
          </p>
          <div className="mt-8 flex justify-center">
            <Link 
              to="/contact" 
              className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
            >
              Book a Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>
        </div>

        {/* Intro Card */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Watch className="w-40 h-40" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-medium italic">What Is Wristwatch Analysis?</h2>
            <p className="text-[#1C3557]/80 leading-relaxed font-light">
              Wristwatch Analysis is a proven science that decodes the hidden language of your timepiece. At <strong>Destiny Numbers</strong>, we go beyond horoscopes and numerology charts to offer this rare, powerful insight — because sometimes, the most profound answers are strapped right to your wrist.
            </p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light">
              Every element of your wristwatch — its colour, dial design, shape, size, strap material, and even whether you wear one at all — carries energetic and psychological significance. Wristwatch Analysis is the structured study of these elements to reveal:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {points.map((pt, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-white/60 border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-lg">
                  <CircleDot className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span className="text-sm italic font-medium text-[#1C3557]/90">{pt}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#1C3557]/60 italic pt-2">
              This is not guesswork. It is a research-backed methodology refined through thousands of consultations, delivering measurable changes in people's personal and professional lives.
            </p>
          </div>
        </section>

        {/* Science Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Deep Elemental Resonance</div>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">The Science Behind the Strap</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light text-center max-w-2xl mx-auto mb-10">
              Think of your wristwatch as a constant companion — worn every day, close to your pulse. The attributes of this companion matter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scienceElements.map((el, i) => (
                <div key={i} className="p-6 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/30 transition-all rounded-xl shadow-sm">
                  <h4 className="text-lg font-display font-medium text-[#C9A84C] mb-3 italic">{el.title}</h4>
                  <p className="text-sm text-[#1C3557]/70 leading-relaxed font-light italic">{el.desc}</p>
                </div>
              ))}
            </div>
            <p className="p-6 border-l-2 border-[#C9A84C] bg-white/20 text-[#1C3557]/80 italic text-sm leading-relaxed mt-8 rounded-r-xl">
              Our experts analyse these attributes against your personal numerology and life goals, then offer precise, actionable recommendations. Sometimes a simple change in strap colour or watch style is enough to unlock a prolonged financial block or restore confidence.
            </p>
          </div>
        </section>

        {/* Wear vs No-Wear Grid */}
        <section className="mb-20 bg-[#1C3557] text-white rounded-2xl p-8 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-display italic text-center mb-6 text-white">What Wearing (or Not Wearing) a Watch Reveals</h2>
            <p className="text-white/70 text-sm font-light leading-relaxed mb-10">
              The act of wearing a watch itself is significant. Every dynamic of physical connection has an energetic translation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                <div className="flex gap-2 items-center">
                  <Clock className="w-5 h-5 text-[#C9A84C]" />
                  <h4 className="font-display font-medium text-[#C9A84C] italic">If you wear a watch regularly:</h4>
                </div>
                <p className="text-sm text-white/80 font-light leading-relaxed italic">
                  You tend to be highly committed, time-conscious, and deeply connected with the people and responsibilities in your life. You are someone who shows up.
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                <div className="flex gap-2 items-center">
                  <User className="w-5 h-5 text-[#C9A84C]" />
                  <h4 className="font-display font-medium text-[#C9A84C] italic">If you rarely or never wear a watch:</h4>
                </div>
                <p className="text-sm text-white/80 font-light leading-relaxed italic">
                  You may still carry strong values and intentions, but there could be a gap in your sense of connection — with others, with your goals, or with the present moment.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center text-xs text-[#C9A84C]/80 italic uppercase tracking-wider">
              Neither is a judgment. Both are insights — and insights lead to transformation.
            </div>
          </div>
        </section>

        {/* Session Gains */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Measurable Lifepath Shifts</div>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">What You Gain from a Session</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gains.map((gain, i) => (
              <div key={i} className="flex gap-4 items-start p-6 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-display font-medium text-[#1C3557] italic">{gain.title}</h4>
                  <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic">{gain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Components */}
        <section className="mb-20 bg-white/20 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">What Our Consultation Includes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.map((c, i) => (
              <div key={i} className="p-6 bg-white border border-[#1C3557]/5 rounded-xl flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F5ECD7] flex items-center justify-center rounded-full">
                  <c.icon className="w-6 h-6 text-[#1C3557]" />
                </div>
                <h4 className="font-display font-medium text-[#1C3557] italic text-sm">{c.title}</h4>
                <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Is This For? */}
        <section className="mb-20 text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-display font-medium italic text-[#1C3557]">Who Is This For?</h2>
          <p className="text-[#1C3557]/85 leading-relaxed font-light italic">
            Wristwatch Analysis is for anyone who feels something is subtly off — in their career momentum, their relationships, their finances, or their confidence — and wants an unconventional, deeply personal lens to understand why.
          </p>
          <p className="text-[#1C3557]/85 leading-relaxed font-light italic">
            It is equally powerful for those who are already doing well and want to fine-tune their energy for the next level of growth.
          </p>
          <div className="p-4 bg-white/60 border border-[#C9A84C]/20 text-[#1C3557] text-sm italic inline-block rounded-lg font-medium">
            💡 If you wear a watch every day, you owe it to yourself to know what it is saying about you.
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center bg-[#1C3557]/5 p-12 md:p-20 border border-[#C9A84C]/20 rounded-2xl relative">
          <Sparkles className="w-12 h-12 text-[#C9A84C] mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-display mb-8 italic">Ready to Read Your <span className="text-[#C9A84C]">Watch?</span></h2>
          <p className="text-lg text-[#1C3557]/70 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            Book a Wristwatch Analysis session with Destiny Numbers today. Our experts in Bengaluru bring together numerology, energy science, and years of practical research to give you insights that are genuinely transformative — not generic.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all gap-4"
          >
            Book a session now <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-8 text-[12px] font-black uppercase tracking-[0.4em] text-[#C9A84C]">Unlock the Hidden Language of Your Time.</div>
        </footer>
      </div>
    </div>
  );
}
