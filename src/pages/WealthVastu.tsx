import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  Coins,
  AlertOctagon,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function WealthVastu() {
  const wealthKillers = [
    { text: "Leaking taps and broken fixtures", desc: "water is prosperity in Vastu; every drip is wealth leaving" },
    { text: "Clutter at the entrance", desc: "blocks incoming opportunities before they even reach you" },
    { text: "Northeast corner blocked, heavy, or used as storage", desc: "shuts down the primary wealth activation zone" },
    { text: "Mirror facing the main door", desc: "reflects incoming energy and opportunity straight back out" },
    { text: "Cash locker in wrong zone", desc: "North and Southwest are the only correct placements" },
    { text: "Dead or wilted plants", desc: "signal stagnant, decaying energy in the home" },
    { text: "Dark, poorly lit interiors", desc: "low light attracts low energy and low financial vibration" },
    { text: "Broken clocks, non-functional electronics", desc: "symbolise stalled time and stuck progress" }
  ];

  const wealthZones = [
    {
      title: "North — The Kubera Zone",
      subtitle: "Governed by Kubera, the deity of wealth",
      desc: "The single most important wealth direction in any home or office. Keep it open, clutter-free, and well-lit at all times.",
      bestFor: "mirrors, water features, cash storage",
      avoid: "toilets, heavy storage, staircases in this zone",
      icon: "💰"
    },
    {
      title: "Northeast — The Divine Energy Corner",
      subtitle: "Sacred zone called Ishaan — gateway for cosmic and financial energy",
      desc: "Must remain open, light, and clean — no heavy furniture, no toilets. A blocked Northeast is the most common cause of persistent financial stagnation.",
      bestFor: "prayer room, water feature, small meditation space",
      avoid: "heavy furniture, toilets, or staircases",
      icon: "🧭"
    },
    {
      title: "Southeast — The Lakshmi Zone",
      subtitle: "Governed by Goddess Lakshmi — deity of wealth and abundance",
      desc: "Correct fire placement here activates cash flow and financial momentum. Governed by Agni, the energy of dynamic circulation.",
      bestFor: "kitchen, electrical panels, financial activity rooms",
      avoid: "water features or sumps in Southeast — water kills fire and suppresses wealth",
      icon: "🔥"
    },
    {
      title: "Southwest — The Stability Corner",
      subtitle: "Zone of grounding and retention — what enters must be held here",
      desc: "Cash locker, important documents, and valuables belong in Southwest. Master bedroom here ensures the head of family retains authority over finances.",
      bestFor: "cash locker, master bedroom, heavy construction",
      avoid: "leaving Southwest open or lightweight — wealth comes in but never stays",
      icon: "🏔️"
    }
  ];

  const wealthActivations = [
    "Place a Tulsi plant in Northeast or North — activates divine prosperity energy",
    "Fix every leaking tap immediately — especially in North and Northeast",
    "Hang a mirror on the North wall — doubles wealth zone energy",
    "Keep the entrance well-lit and decorated with auspicious symbols",
    "Place a money plant in North or Northeast — never in South",
    "Use white, cream, or light yellow in living areas — prosperity colours",
    "Remove all broken objects, dead plants, and unused items within 48 hours",
    "Place sea salt in corners — absorbs negative energy monthly; replace every 30 days",
    "Hang a metal wind chime near the entrance — activates incoming opportunity energy",
    "Keep Brahmasthan (centre) completely open — never build over or clutter it"
  ];

  const approachPoints = [
    {
      title: "Active Dasha Mapped",
      desc: "Your current planetary period determines which wealth zone needs activation now and which needs protection."
    },
    {
      title: "Lagna-Based Zone Analysis",
      desc: "Not every North activation works for every person; your ascendant determines your personal wealth direction."
    },
    {
      title: "Numerological House Number Check",
      desc: "Your house number carries a vibrational frequency that either supports or suppresses your wealth energy."
    },
    {
      title: "Priority Remedy List",
      desc: "The three highest-impact changes for the fastest financial shift."
    },
    {
      title: "Zero Demolition",
      desc: "All corrections through placement, colour, plants, and elemental tools."
    },
    {
      title: "Online & On-Site",
      desc: "Full report from floor plan and photos · on-site visits across Bengaluru."
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Vedic Vastu · Wealth Activation"
        title="Wealth Is Not Just Earned. It Is Attracted — By the Space You Live In."
        description="Your home holds specific energy zones that either invite prosperity or silently drain it. Wealth Vastu identifies them — and activates them."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book a Wealth Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <a 
            href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20a%20Wealth%20Vastu%20Consultation.%22%20I'm%20sharing%20my%20floor%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> Send Your Floor Plan
          </a>
        </div>

        {/* SECTION 1 — How Your Home Affects Your Wealth */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Coins className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Energetics of Abundance</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Every Leak, Every Clutter, Every Wrong Placement Has a Financial Cost.</h2>
            
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Vastu Shastra maps prosperity directly onto your living space. When wealth zones are correctly aligned — money flows in and stays. When they are blocked, broken, or misused — wealth drains out regardless of how much comes in.
            </p>

            <div className="pt-6 border-t border-[#1C3557]/5">
              <span className="font-semibold text-xs uppercase tracking-wider text-rose-800 block mb-4">The biggest wealth killers hiding in plain sight:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wealthKillers.map((killer, i) => (
                  <div key={i} className="p-4 bg-white/60 border border-rose-500/5 rounded-xl hover:border-rose-500/20 transition-all text-xs flex flex-col justify-between space-y-2 shadow-sm">
                    <span className="font-semibold text-[#1C3557] flex items-center gap-2">
                      <AlertOctagon className="w-4 h-4 text-rose-600 shrink-0" />
                      {killer.text}
                    </span>
                    <span className="text-[#1C3557]/70 font-light block">
                      — {killer.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — The Wealth Zones of Your Home */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl shadow-sm">
          <div className="space-y-6">
            <div className="text-center md:text-left mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Spatial Prosperity</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] mt-1">Know Which Corners Are Making You Rich — or Keeping You Poor.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wealthZones.map((zone, i) => (
                <div key={i} className="p-6 bg-white border border-[#1C3557]/5 rounded-2xl hover:border-[#C9A84C]/30 transition-all shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl shrink-0">{zone.icon}</span>
                      <h3 className="font-display font-medium text-lg text-[#1C3557] italic">{zone.title}</h3>
                    </div>
                    <p className="text-[11px] font-semibold text-[#C9A84C] uppercase tracking-wider mb-3 leading-tight">{zone.subtitle}</p>
                    <p className="text-xs text-[#1C3557]/80 font-light leading-relaxed mb-4">{zone.desc}</p>
                  </div>
                  <div className="border-t border-[#1C3557]/5 pt-3 space-y-2 text-[11px]">
                    <div>
                      <span className="font-semibold text-emerald-700 block">Best for:</span>
                      <span className="text-[#1C3557]/70 font-light">{zone.bestFor}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-rose-700 block">Avoid:</span>
                      <span className="text-[#1C3557]/70 font-light">{zone.avoid}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Quick Wealth Vastu Activations */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Immediate Energy Shifts</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Simple Changes. Immediate Energy Shifts.</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {wealthActivations.map((act, i) => (
                <div key={i} className="flex gap-3 items-start p-3 bg-white/50 border border-[#1C3557]/5 rounded-xl hover:border-[#C9A84C]/20 transition-all">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1C3557]/90 leading-relaxed font-light">{act}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — The DestinyNumbers Wealth Vastu Approach */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Vastu + Birth Chart</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white leading-tight">Vastu + Your Birth Chart = Wealth That Lasts.</h2>
            
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Generic Wealth Vastu activates zones. Personalised Wealth Vastu activates the right zones for you specifically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-sans">
              {approachPoints.map((point, idx) => (
                <div key={idx} className="p-5 bg-white/10 border border-white/10 rounded-xl relative flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-medium text-white italic text-sm mb-2">{point.title}</h4>
                    <p className="text-xs text-white/75 leading-relaxed font-light">{point.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 text-white/5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL SEAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <span className="inline-block p-1.5 rounded-full bg-[#1C3557]/5 text-[#C9A84C] mb-2">
              <Sparkles className="w-8 h-8 shrink-0 animate-pulse" />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] leading-tight">Your Home Has a Wealth Code. <br />Let's Unlock It.</h2>
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
              One consultation reveals exactly where your home is blocking prosperity — and precisely what to do about it.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 font-display">
              <Link 
                to="/consultation" 
                className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Wealth Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
              <a 
                href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20a%20Wealth%20Vastu%20Consultation.%22%20I'm%20sharing%20my%20floor%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Your Floor Plan
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
