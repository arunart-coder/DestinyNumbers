import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  AlertTriangle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

interface Gemstone {
  name: string;
  planet: string;
  wearOnlyWhen: string;
  color: string;
}

export default function GemstoneConsultation() {
  const gemstoneGuide: Gemstone[] = [
    { name: 'Ruby', planet: 'Sun', wearOnlyWhen: 'Sun is strong, active Dasha, not 6/8/12 lord', color: 'bg-red-500' },
    { name: 'Pearl', planet: 'Moon', wearOnlyWhen: 'Moon is benefic for your Lagna, active period', color: 'bg-slate-100 border border-slate-300' },
    { name: 'Red Coral', planet: 'Mars', wearOnlyWhen: 'Mars is functional benefic, active Dasha', color: 'bg-red-400' },
    { name: 'Emerald', planet: 'Mercury', wearOnlyWhen: 'Mercury supports your chart, not 6/8/12', color: 'bg-emerald-500' },
    { name: 'Yellow Sapphire', planet: 'Jupiter', wearOnlyWhen: 'Jupiter is benefic, strong Dasha support', color: 'bg-yellow-400' },
    { name: 'Diamond / White Sapphire', planet: 'Venus', wearOnlyWhen: 'Venus is well-placed, active Dasha', color: 'bg-cyan-100' },
    { name: 'Blue Sapphire', planet: 'Saturn', wearOnlyWhen: 'Most powerful — requires deepest study', color: 'bg-blue-600' },
    { name: 'Hessonite', planet: 'Rahu', wearOnlyWhen: 'Only after full shadow planet analysis', color: 'bg-orange-850 bg-[#8c4b28]' },
    { name: 'Cat\'s Eye', planet: 'Ketu', wearOnlyWhen: 'Only after full shadow planet analysis', color: 'bg-yellow-600' },
  ];

  const questions = [
    "Which Dasha and Antardasha are you running — and for how long?",
    "Does the Dasha lord occupy or rule the 6th, 8th, or 12th house?",
    "What is the strength and dignity of the planet in question?",
    "Are there conjunctions or aspects that alter the planet's nature?",
    "What is your current life challenge — health, career, relationship, wealth?",
    "Is the planet a functional benefic or malefic for your specific Lagna?"
  ];

  const sessionIncludes = [
    {
      title: 'Full Dasha and Antardasha analysis',
      desc: 'An exploration of your planetary phases for the next 3 years to see which energies are dominant.'
    },
    {
      title: 'House lordship study',
      desc: 'Exhaustive verification of the ruling houses for all nine potential planetary gemstones.'
    },
    {
      title: 'Clear recommendation',
      desc: 'Specific advice regarding which stone to wear, which stone to absolutely avoid, and the underlying astronomical rationale.'
    },
    {
      title: 'Structural guidance',
      desc: 'Exact directives for weight, metals, specific fingers, and auspicious days of wearing.'
    },
    {
      title: 'Quality & certification advice',
      desc: 'Crucial checklists and standards to look for when procuring the stone so you invest safely.'
    },
    {
      title: '90-Day evaluation window',
      desc: 'A dedicated follow-up window to review and assess energetic changes after 90 days of wear.'
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Vedic Gemology · Dasha-Based Prescription"
        title="Gems Aligned to Your Destiny"
        description="Most astrologers prescribe stones by Lagna and Rashi. We go deeper — because the wrong stone, worn at the wrong time, does more harm than good."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex justify-center">
          <Link 
            to="/consultation" 
            className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book a Gemstone Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
        </div>

        {/* Section 1: The Problem with Common Gemstone Advice */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldAlert className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Where Most Go Wrong</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Lagna &amp; Rashi Alone Is Not Enough</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Walk into any astrology consultation and you will likely walk out with a gemstone recommendation based on your rising sign or moon sign. It feels personalised. It rarely is.
              </p>
              <p>
                The hard truth: a gemstone amplifies planetary energy. If that planet rules or sits in the 6th, 8th, or 12th house in your chart — the houses of disease, obstacles, and hidden losses — amplifying its energy does not help you. It harms you. Wearing the wrong stone can silently aggravate health, finances, relationships, and mental peace for years before anyone connects the dots.
              </p>
            </div>

            <div className="mt-8 p-6 bg-[#0D1B3E] text-white border-l-4 border-[#C9A84C] rounded-r-xl shadow-md">
              <p className="font-display font-medium text-lg italic tracking-wide text-center">
                "A gemstone is not a remedy. In the wrong hands, it is a risk."
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The DestinyNumbers Method */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white">Dasha First. Always.</h2>
            <p className="text-white/80 leading-relaxed font-light text-base">
              At Destiny Numbers, gemstone prescription begins where most astrologers stop. Before recommending any stone, we study three layers of your chart with precision:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/35 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="text-xl font-bold font-display text-[#C9A84C] mb-2">1</div>
                  <h4 className="font-display font-medium mb-2 text-white italic text-base">Active Dasha &amp; Antardasha</h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    The planetary period you are currently running determines which energies are alive in your life right now. A gemstone must support your active Dasha lord — not contradict it.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/35 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="text-xl font-bold font-display text-[#C9A84C] mb-2">2</div>
                  <h4 className="font-display font-medium mb-2 text-white italic text-base">House Lordship — The 6, 8, 12 Rule</h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Any planet ruling or occupying the 6th, 8th, or 12th house is never recommended a gemstone without extensive study. These are malefic houses — amplifying their energy through a stone creates more suffering, not less.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/35 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="text-xl font-bold font-display text-[#C9A84C] mb-2">3</div>
                  <h4 className="font-display font-medium mb-2 text-white italic text-base">Planetary Strength &amp; Dignity</h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    We examine whether the planet is exalted, debilitated, combust, or retrograde. A weak planet in a good house may benefit from a stone. A strong planet in a harmful house will not.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm font-medium italic text-[#C9A84C] border-l border-[#C9A84C] pl-4 py-1 mt-6">
              Only when all three layers align do we prescribe.
            </p>
          </div>
        </section>

        {/* Section 3: What We Study Before Every Recommendation */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Checklist</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Six Questions We Answer Before Naming a Stone</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {questions.map((q, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/60 border border-[#1C3557]/5 hover:border-[#C9A84C]/25 transition-all rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#1C3557]/5 flex items-center justify-center font-display text-[#C9A84C] font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-[#1C3557]/90 leading-relaxed pt-1 font-sans">{q}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-center text-[#1C3557]/70 italic font-semibold border-t border-[#1C3557]/5 pt-6 mt-4">
              Only after this study is complete does a stone enter the conversation.
            </p>
          </div>
        </section>

        {/* Section 4: Gemstone Guide (Quick Reference) */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Common Stones &amp; Their Planets</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] mt-1">Gemstone Reference Guide</h2>
              <p className="text-xs text-[#1C3557]/70 mt-2 max-w-xl mx-auto">
                Each gemstone is locked with a specific planetary frequency. Below is a quick diagnostic indicator of how they should be approached.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden border border-[#1C3557]/10 rounded-xl bg-white shadow-sm mt-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1C3557] text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="p-4 pl-6 font-display">Gemstone</th>
                    <th className="p-4 font-display">Planet</th>
                    <th className="p-4 pr-6 font-display">Wear Only When</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C3557]/10 text-sm">
                  {gemstoneGuide.map((gem, idx) => (
                    <tr 
                      key={idx} 
                      className="hover:bg-[#F5ECD7]/20 transition-all font-sans"
                    >
                      <td className="p-4 pl-6 font-medium flex items-center gap-3">
                        <span className={`w-3.5 h-3.5 rounded-full ${gem.color} shadow-sm shrink-0`}></span>
                        <span className="font-display font-medium text-[#1C3557]">{gem.name}</span>
                      </td>
                      <td className="p-4 font-semibold text-[#1C3557]/80">{gem.planet}</td>
                      <td className="p-4 pr-6 text-xs text-[#1C3557]/75 font-light leading-relaxed">{gem.wearOnlyWhen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="block md:hidden space-y-4 mt-6">
              {gemstoneGuide.map((gem, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#1C3557]/10 rounded-xl space-y-3 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#1C3557]/5 pb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${gem.color} shadow-sm`}></span>
                      <h4 className="font-display font-medium text-[#1C3557] text-base">{gem.name}</h4>
                    </div>
                    <span className="px-3 py-1 bg-[#1C3557]/5 rounded-full text-xs font-semibold text-[#1C3557]/85 uppercase tracking-wider">
                      {gem.planet}
                    </span>
                  </div>
                  <div className="text-xs text-[#1C3557]/70 leading-relaxed font-light">
                    <strong className="block text-[#1C3557]/90 font-semibold mb-1 uppercase tracking-widest text-[9px]">Wear Only When:</strong>
                    {gem.wearOnlyWhen}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Why This Matters */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <AlertTriangle className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Stakes</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Gemstones Are Powerful. Precision Is Non-Negotiable.</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Blue Sapphire is one of the most powerful stones in Vedic astrology. For the right person at the right time it can transform a life. For the wrong person it has been known to bring sudden loss, accidents, and relationship collapse — sometimes within days of wearing it.
              </p>
              <p>
                This is not superstition. This is the reason the ancient texts insisted on exhaustive chart study before any stone was placed on the body. At Destiny Numbers, we honour that caution. Every consultation is a deep study, not a quick prescription.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: What You Get */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Consultation</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1">A Complete Gemstone Report — Not Just a Name</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sessionIncludes.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white border border-[#1C3557]/10 rounded-2xl hover:border-[#C9A84C]/45 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0" />
                    <h4 className="font-display font-medium text-[#1C3557] group-hover:text-[#C9A84C] transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light pl-8">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">Your Chart Deserves More Than a Guess</h2>
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Book a Gemstone Consultation with Dr. Arun Poovaiah and receive a prescription built on precision, not assumption.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/consultation" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
