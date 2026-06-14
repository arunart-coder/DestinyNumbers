import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Compass, 
  MessageSquare, 
  Sparkles, 
  Check, 
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function Vastu() {
  const roomPlacements = [
    {
      title: "Main Entrance",
      desc: "North or East is ideal. What truly matters is the exact pada within the direction — not all North or East doors are auspicious.",
      icon: "🚪"
    },
    {
      title: "Master Bedroom",
      desc: "Southwest only. Brings stability, deep sleep, and authority to the head of the family.",
      icon: "🛏️"
    },
    {
      title: "Kitchen",
      desc: "Southeast — the fire zone. Governed by Agni, the deity of energy and nourishment.",
      icon: "🍳"
    },
    {
      title: "Living Room",
      desc: "Northeast or East for East-facing homes · Northeast or North for North-facing homes.",
      icon: "🛋️"
    },
    {
      title: "Children's Room",
      desc: "West or Northwest — supports focus, growth, and academic progress.",
      icon: "🧸"
    },
    {
      title: "Pooja Room",
      desc: "Northeast — the most sacred zone. Enhances clarity, peace, and spiritual energy.",
      icon: "🪔"
    },
    {
      title: "Toilets & Bathrooms",
      desc: "East of Southeast · South · West of Northwest. Never in Northeast — the most damaging placement in any home.",
      icon: "🚾"
    },
    {
      title: "Water Features & Sumps",
      desc: "Northeast only. Water in the wrong zone causes financial drain.",
      icon: "⛲"
    }
  ];

  const destinyDifference = [
    {
      title: "Birth Chart Integration",
      desc: "Each occupant's Lagna and active Dasha determines which zones are personally beneficial or challenging for them specifically."
    },
    {
      title: "Numerological Mapping",
      desc: "Your house number and personal numbers are checked for vibrational alignment."
    },
    {
      title: "Practical Remedies",
      desc: "Colour, element placement, symbolic corrections — zero demolition required in the vast majority of cases."
    },
    {
      title: "Online & On-Site",
      desc: "Full comprehensive report from floor plan and photos · on-site visits across Bengaluru."
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Vedic Vastu Shastra · Home Energy Alignment"
        title="Your Home Should Be Your Greatest Source of Peace. Not Your Biggest Problem."
        description="Every room in your home has a Vastu consequence. When they align — health, wealth, and harmony follow naturally."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book a Home Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <a 
            href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20a%20Home%20Vastu%20Consultation.%20I'm%20sharing%20my%20floor%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> Send Your Floor Plan
          </a>
        </div>

        {/* SECTION 1 — What House Vastu Actually Means */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Home className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Cosmic House</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Every Room. Every Direction. Every Consequence.</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Vastu Shastra is the ancient Indian science of aligning your living space with natural forces — the five elements, eight directions, and planetary energies — to create an environment that actively supports your life.
              </p>
              <p>
                A common misconception is that fixing one room is enough. It is not. Each room holds a specific role. The full benefit of Vastu is experienced only when the entire home is in alignment — entrance, bedroom, kitchen, bathroom, and the all-important Northeast corner, all working together.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Room-by-Room Placement */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Anatomical Blueprint</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Right Room. Right Direction. Right Life.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {roomPlacements.map((room, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#1C3557]/5 rounded-2xl hover:border-[#C9A84C]/30 transition-all shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl shrink-0">{room.icon}</span>
                    <h3 className="font-display font-medium text-[#1C3557] italic text-base">{room.title}</h3>
                  </div>
                  <p className="text-xs text-[#1C3557]/85 leading-relaxed font-light">{room.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — The Two Most Critical Zones */}
        <section className="space-y-8 mb-16">
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Twin Pillars</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1 font-serif">Northeast and Southwest — Get These Right First.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            {/* Northeast Corner */}
            <div className="p-8 bg-white border border-[#1C3557]/10 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl shrink-0">🧭</span>
                <h3 className="text-xl font-display font-medium text-[#1C3557] italic">Northeast — The Exalted Corner</h3>
              </div>
              <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light">
                The most powerful zone in any home. When it is open, light, and clutter-free — residents experience clarity, prosperity, and gradual positive growth. When it is blocked, heavy, or has a toilet or storeroom — problems accumulate silently over years.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-[#1C3557]/5">
                {[
                  "Keep it open, clean, and well-lit",
                  "Ideal for pooja room, open space, or water placement",
                  "Never place heavy furniture, toilets, or staircases here"
                ].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-xs text-[#1C3557]/90 leading-relaxed font-light">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Southwest Corner */}
            <div className="p-8 bg-white border border-[#1C3557]/10 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl shrink-0">⛰️</span>
                <h3 className="text-xl font-display font-medium text-[#1C3557] italic">Southwest — The Grounding Corner</h3>
              </div>
              <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light">
                The zone of stability and strength. The master bedroom belongs here. The head of the family sleeping in the Southwest commands authority and makes clear decisions.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-[#1C3557]/5">
                {[
                  "Heavy construction and master bedroom belong here",
                  "Cash lockers and important documents stored in this corner",
                  "Never leave Southwest open or lightweight — it weakens the entire home's foundation energy"
                ].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-xs text-[#1C3557]/90 leading-relaxed font-light">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — The DestinyNumbers Approach */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Vastu + Birth Chart</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white leading-tight">Vastu Personalised to Your Chart — <br />Not Just Your Floor Plan.</h2>
            
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Most Vastu consultants analyse the building. We analyse the people living inside it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
              {destinyDifference.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/10 border border-white/10 rounded-xl relative">
                  <div className="absolute top-4 right-4 text-white/10">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-medium text-white italic text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-white/75 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL SEAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <span className="inline-block p-1.5 rounded-full bg-[#1C3557]/5 text-[#C9A84C] mb-2">
              <Compass className="w-8 h-8 shrink-0 animate-spin-slow" />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] leading-tight">Your Home Was Built to Support You. <br />Let's Make Sure It Does.</h2>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 font-display">
              <Link 
                to="/consultation" 
                className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Home Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
              <a 
                href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20a%20Home%20Vastu%20Consultation.%20I'm%20sharing%20my%20floor%20plan."
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
