import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Compass, 
  MessageSquare, 
  Sparkles, 
  Check, 
  X 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function CommercialVastu() {
  const customBenefits = [
    "Customers walk in more freely",
    "Employees work with greater focus and less conflict",
    "Financial flow becomes consistent and predictable",
    "Decision-making at the top becomes clearer and more confident"
  ];

  const elementsMap = [
    { zone: "Northeast — Water zone", desc: "sumps, water features, open space" },
    { zone: "Southeast — Fire zone", desc: "electrical panels, servers, kitchen, accounts" },
    { zone: "Southwest — Earth zone", desc: "owner's cabin, heavy storage, cash locker" },
    { zone: "Northwest — Air zone", desc: "sales, marketing, movement-based functions" },
    { zone: "Centre (Brahmasthan) — Space", desc: "must remain open and clutter-free at all times" }
  ];

  const placementMap = [
    { zone: "North — Wealth and new business", desc: "ideal for cash counters and finance rooms" },
    { zone: "East — Growth and beginnings", desc: "best for reception, meeting rooms, and client-facing spaces" },
    { zone: "Southwest — Authority", desc: "owner or MD cabin always here" },
    { zone: "Northwest — Communication", desc: "sales team, dispatch, and outward-facing functions" }
  ];

  const avoidList = [
    "Irregular or L-shaped plot — creates energy imbalance",
    "Northeast cut or toilet — most damaging in any commercial property",
    "Staircase in Northeast or centre — causes financial loss",
    "Cluttered Brahmasthan — suppresses the entire building's vitality",
    "Excessive height on Northeast side — blocks incoming positive energy"
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Vedic Vastu · Commercial Properties"
        title="The Right Space Builds Business. The Wrong One Quietly Breaks It."
        description="Commercial Vastu aligns your property with natural forces — so every square foot works in your favour."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book Commercial Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <a 
            href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20a%20Commercial%20Vastu%20Consultation.%20I'm%20sharing%20my%20floor%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> Send Your Floor Plan
          </a>
        </div>

        {/* SECTION 1 — Why Commercial Vastu Matters */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Compass className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Energy Synergy</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Your Building Has an Energy. Is It Working For You?</h2>
            
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Every commercial property — shop, showroom, factory, or office building — sits within a field of directional and elemental forces. When aligned correctly:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {customBenefits.map((benefit, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-white/50 border border-[#1C3557]/5 rounded-xl">
                  <Check className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1C3557]/90 leading-relaxed font-light">{benefit}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#C9A84C] italic font-medium pt-4">
              When misaligned — even a well-run business hits invisible walls.
            </p>
          </div>
        </section>

        {/* SECTION 2 — The Key Vastu Principles */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-8">
            <div className="border-b border-[#1C3557]/5 pb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Anatomical Audit</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] mt-1">What We Analyse in Every Commercial Property</h2>
            </div>

            {/* Entrance & Orientation */}
            <div className="space-y-4">
              <h3 className="font-display font-medium text-lg text-[#1C3557] italic">1. Entrance & Orientation</h3>
              <ul className="space-y-2 text-xs text-[#1C3557]/80 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0 mt-1.5" />
                  <span>North and East entrances invite prosperity and new opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0 mt-1.5" />
                  <span>South and West entrances are not automatically inauspicious — the exact pada within the direction decides it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0 mt-1.5" />
                  <span>Entrance must never face an interior wall — blocks incoming energy completely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0 mt-1.5" />
                  <span>Irregular-shaped buildings and sharp external edges create unstable energy fields</span>
                </li>
              </ul>
            </div>

            {/* Five Element Balance */}
            <div className="space-y-4 pt-4 border-t border-[#1C3557]/5">
              <h3 className="font-display font-medium text-lg text-[#1C3557] italic">2. Five Element Balance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {elementsMap.map((el, i) => (
                  <div key={i} className="p-3 bg-white/50 border border-[#1C3557]/5 rounded-lg text-xs leading-relaxed">
                    <span className="font-semibold text-[#1C3557] block">{el.zone}</span>
                    <span className="text-[#1C3557]/70 font-light">{el.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone-by-Zone Placement */}
            <div className="space-y-4 pt-4 border-t border-[#1C3557]/5">
              <h3 className="font-display font-medium text-lg text-[#1C3557] italic">3. Zone-by-Zone Placement</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {placementMap.map((pl, i) => (
                  <div key={i} className="p-3 bg-white/50 border border-[#1C3557]/5 rounded-lg text-xs leading-relaxed">
                    <span className="font-semibold text-[#1C3557] block">{pl.zone}</span>
                    <span className="text-[#1C3557]/70 font-light">{pl.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Light, Ventilation & Colour */}
            <div className="space-y-4 pt-4 border-t border-[#1C3557]/5">
              <h3 className="font-display font-medium text-lg text-[#1C3557] italic">4. Light, Ventilation & Colour</h3>
              <p className="text-xs text-[#1C3557]/80 font-light leading-relaxed">
                Natural light and airflow must be maximised — particularly from North and East. Windows and doors positioned to allow free circulation of air.
              </p>
              <div className="bg-white/60 border border-[#1C3557]/5 p-4 rounded-xl space-y-3">
                <span className="font-semibold text-xs tracking-wider uppercase text-[#C9A84C] block">Recommended colours by zone:</span>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-semibold block text-[#1C3557]">North & East</span>
                    <span className="text-[#1C3557]/70 font-light">White, light green, light blue</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-[#1C3557]">Southeast</span>
                    <span className="text-[#1C3557]/70 font-light">Orange, red, coral tones</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-[#1C3557]">Southwest</span>
                    <span className="text-[#1C3557]/70 font-light">Yellow, beige, earthy tones</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-[#1C3557]">Northwest</span>
                    <span className="text-[#1C3557]/70 font-light">Grey, silver, light pastels</span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-rose-600 border-t border-[#1C3557]/5 pt-3">
                  Avoid black and dark red on primary walls — absorbs negativity.
                </p>
              </div>
            </div>

            {/* What to Avoid */}
            <div className="space-y-4 pt-4 border-t border-[#1C3557]/5">
              <h3 className="font-display font-medium text-lg text-[#1C3557] italic text-rose-800">5. What to Avoid</h3>
              <div className="space-y-2">
                {avoidList.map((avoid, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-xs text-[#1C3557]/90 leading-relaxed font-light p-2.5 bg-rose-500/5 border border-rose-500/10 rounded-lg">
                    <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{avoid}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3 — The DestinyNumbers Difference */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Astrological Accuracy</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white leading-tight">Commercial Vastu + Astrology. <br />Precision No One Else Offers.</h2>
            
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Standard Vastu reads the building. We read the owner too.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
              <div className="p-5 bg-white/10 border border-white/10 rounded-xl relative">
                <h4 className="font-display font-medium text-white italic text-sm mb-2">Owner's Birth Chart Integrated</h4>
                <p className="text-xs text-white/75 leading-relaxed font-light">Your Lagna, active Dasha, and planetary strengths determine which zones personally support or harm you as the business owner.</p>
              </div>
              <div className="p-5 bg-white/10 border border-white/10 rounded-xl relative">
                <h4 className="font-display font-medium text-white italic text-sm mb-2">Business Type Mapped</h4>
                <p className="text-xs text-white/75 leading-relaxed font-light">Trading, service, manufacturing, or retail each require specific directional alignment to nurture business success.</p>
              </div>
              <div className="p-5 bg-white/10 border border-white/10 rounded-xl relative">
                <h4 className="font-display font-medium text-white italic text-sm mb-2">Plot Shape Assessed</h4>
                <p className="text-xs text-white/75 leading-relaxed font-light">Sher Mukhi (lion-faced) plots are highly recommended for commercial use; we work systematically with what you have.</p>
              </div>
              <div className="p-5 bg-white/10 border border-white/10 rounded-xl relative">
                <h4 className="font-display font-medium text-white italic text-sm mb-2">No Demolition Needed</h4>
                <p className="text-xs text-white/75 leading-relaxed font-light">Practical remedies through colour, elemental balancing, and symbolic corrections ensure continuity without downtime.</p>
              </div>
              <div className="p-5 bg-white/10 border border-white/10 rounded-xl relative col-span-1 md:col-span-2">
                <h4 className="font-display font-medium text-white italic text-sm mb-2">Online & On-Site Consultation</h4>
                <p className="text-xs text-white/75 leading-relaxed font-light">Get a full, detailed report simply using your floor plans and photos, or choose on-site specialist visits across Bengaluru.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL SEAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <span className="inline-block p-1.5 rounded-full bg-[#1C3557]/5 text-[#C9A84C] mb-2">
              <Sparkles className="w-8 h-8 shrink-0" />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] leading-tight">Build Your Business on the Right Foundation — Energetically and Physically.</h2>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 font-display">
              <Link 
                to="/consultation" 
                className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Commercial Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
              <a 
                href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20a%20Commercial%20Vastu%20Consultation.%22%20I'm%20sharing%20my%20floor%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Floor Plan
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
