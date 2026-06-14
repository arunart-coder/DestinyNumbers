import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Compass, 
  MessageSquare, 
  Sparkles, 
  AlertTriangle,
  Droplet,
  Grid,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function VastuCorrections() {
  const commonDefects = [
    { defect: "Northeast cut or toilet", consequence: "Financial drain, health issues, mental stress" },
    { defect: "Kitchen in Northeast", consequence: "Wealth loss, family conflict, poor digestion" },
    { defect: "Master bedroom in Northeast", consequence: "Loss of authority, poor decisions, sleep issues" },
    { defect: "Main entrance in wrong pada", consequence: "Blocked opportunities, slow business growth" },
    { defect: "Toilet in Northeast", consequence: "Most damaging — affects health and prosperity simultaneously" },
    { defect: "Brahmasthan blocked or built over", consequence: "Suppresses entire home or office vitality" },
    { defect: "Southwest open or lightweight", consequence: "Instability, relationship breakdown, lack of grounding" },
    { defect: "Irregular L or T-shaped plot", consequence: "Erratic finances, recurring problems, no sustained growth" },
    { defect: "Bathroom above kitchen", consequence: "Pollutes health energy — major fault requiring priority correction" }
  ];

  const warningSignals = [
    "Persistent financial stress despite consistent income",
    "Recurring health issues with no clear medical explanation",
    "Constant family conflicts or relationship tension at home",
    "Business stagnation — effort goes in but results don't come out",
    "Frequent accidents, legal disputes, or unexpected losses",
    "Children struggling with focus, sleep, or academic progress",
    "A general heaviness or unease that never fully lifts",
    "Feeling drained every time you return home"
  ];

  const elementalBalancing = [
    { title: "Colour therapy", desc: "each zone has a correct colour frequency; wrong colours amplify defects" },
    { title: "Plants", desc: "specific species placed in specific zones restore elemental balance" },
    { title: "Water bodies", desc: "Northeast placement activates wealth and clarity energy" },
    { title: "Fire activators", desc: "candles, copper décor, fire paintings correct Southeast imbalances" }
  ];

  const symbolicTools = [
    { title: "Vastu pyramids", desc: "copper, wood, or crystal — placed at defect zones pull in corrective cosmic energy" },
    { title: "Brass energy helix", desc: "corrects Northwest defects and main door imbalances" },
    { title: "Energy plates", desc: "copper 81-pada grid restores Brahmasthan vitality" },
    { title: "Vastu partition strips", desc: "correct extended or missing corners without structural changes" },
    { title: "Crystals", desc: "zone-specific crystals seal and stabilise corrected energy fields" }
  ];

  const placementCorrections = [
    { title: "Furniture relocation", desc: "repositioning heavy furniture to Southwest restores grounding" },
    { title: "Magnetic axis alignment", desc: "corrects sleeping and sitting directions immediately" },
    { title: "Mirror and painting placement", desc: "activates or subdues specific directional energies" }
  ];

  const approachPoints = [
    {
      title: "Birth Chart Integration",
      desc: "Your active Dasha reveals which Vastu defects are currently amplified and which are dormant — we prioritise accordingly."
    },
    {
      title: "Priority Correction List",
      desc: "The three highest-impact fixes that produce the fastest, most measurable shift in liveability."
    },
    {
      title: "No Panic. No Demolition",
      desc: "Every remedy is practical, affordable, non-disruptive, and implementable immediately."
    },
    {
      title: "Online & On-Site Consultation",
      desc: "Comprehensive analysis from floor plans and photos, or site visits across Bengaluru."
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Vastu Dosha · Correction Without Demolition"
        title="You Don't Need to Break Walls. You Need to Fix Energy."
        description="75% of Vastu defects in homes and businesses can be corrected without any demolition — through precise elemental and directional remedies."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book a Vastu Correction Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <a 
            href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20a%20Vastu%20Correction%20Consultation.%22%20I'm%20sharing%20my%20floor%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> Send Your Floor Plan
          </a>
        </div>

        {/* SECTION 1 — What Is a Vastu Defect */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <AlertTriangle className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Vastu Dosha Breakdown</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Every Defect Has a Direction. Every Direction Has a Consequence.</h2>
            
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Vastu defects — called Vastu Dosha — occur when rooms, elements, or zones are placed in conflict with natural directional energies. They accumulate silently and show up as persistent life problems that seem unrelated to the space you live or work in.
            </p>

            <div className="pt-6 border-t border-[#1C3557]/5">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#C9A84C] block mb-4">Common defects and what they cause:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {commonDefects.map((item, i) => (
                  <div key={i} className="p-4 bg-white/60 border border-[#1C3557]/5 rounded-xl hover:border-rose-500/30 transition-all text-xs flex flex-col justify-between space-y-3 shadow-sm min-h-[110px]">
                    <span className="font-semibold text-[#1C3557] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0" />
                      {item.defect}
                    </span>
                    <span className="text-[#1C3557]/80 font-light pt-2.5 border-t border-[#1C3557]/5 block">
                      {item.consequence}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Signs Your Space Has a Vastu Defect */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Warning Signals</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Recognise Any of These?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 font-sans">
              {warningSignals.map((sig, i) => (
                <div key={i} className="flex flex-col gap-2.5 p-4 bg-white/50 border border-[#1C3557]/5 rounded-xl hover:border-amber-500/20 transition-all shadow-sm">
                  <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                  <p className="text-xs text-[#1C3557]/90 leading-relaxed font-light">{sig}</p>
                </div>
              ))}
            </div>

            <p className="text-xs md:text-sm text-[#1C3557]/80 leading-relaxed font-light pt-4 border-t border-[#1C3557]/5">
              These are not coincidences. They are <span className="font-semibold text-[#C9A84C]">directional signals</span> — and every one has a remedy.
            </p>
          </div>
        </section>

        {/* SECTION 3 — Correction Without Demolition */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-8">
            <div className="border-b border-[#1C3557]/5 pb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Non-Invasive Remediation</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] mt-1">Practical Remedies. Zero Disruption.</h2>
              <p className="text-xs text-[#1C3557]/80 font-light mt-2 leading-relaxed">
                Vastu correction does not require breaking walls or relocating rooms in most cases. Effective correction works through balance, energy tools, and orientation adjustments.
              </p>
            </div>

            {/* Elemental Balancing */}
            <div className="space-y-4">
              <h3 className="font-display font-medium text-lg text-[#1C3557] italic flex items-center gap-2">
                <Droplet className="w-5 h-5 text-[#C9A84C]" /> 1. Elemental Balancing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {elementalBalancing.map((item, i) => (
                  <div key={i} className="p-4 bg-white/50 border border-[#1C3557]/5 rounded-xl text-xs leading-relaxed">
                    <span className="font-semibold text-[#1C3557] block">{item.title}</span>
                    <span className="text-[#1C3557]/70 font-light">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Symbolic & Energy Tools */}
            <div className="space-y-4 pt-4 border-t border-[#1C3557]/5">
              <h3 className="font-display font-medium text-lg text-[#1C3557] italic flex items-center gap-2">
                <Grid className="w-5 h-5 text-[#C9A84C]" /> 2. Symbolic & Energy Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {symbolicTools.map((item, i) => (
                  <div key={i} className="p-4 bg-white/50 border border-[#1C3557]/5 rounded-xl text-xs leading-relaxed">
                    <span className="font-semibold text-[#1C3557] block">{item.title}</span>
                    <span className="text-[#1C3557]/70 font-light">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Corrections */}
            <div className="space-y-4 pt-4 border-t border-[#1C3557]/5">
              <h3 className="font-display font-medium text-lg text-[#1C3557] italic flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#C9A84C]" /> 3. Placement Corrections
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {placementCorrections.map((item, i) => (
                  <div key={i} className="p-4 bg-white/50 border border-[#1C3557]/5 rounded-xl text-xs leading-relaxed">
                    <span className="font-semibold text-[#1C3557] block">{item.title}</span>
                    <span className="text-[#1C3557]/70 font-light">{item.desc}</span>
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
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Astro-Vastu Precision</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white leading-tight">Correction Built Around Your Chart — <br />Not Just Your Floor Plan.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
              {approachPoints.map((point, idx) => (
                <div key={idx} className="p-5 bg-white/10 border border-white/10 rounded-xl relative">
                  <div className="absolute top-4 right-4 text-white/5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-medium text-white italic text-sm mb-2">{point.title}</h4>
                  <p className="text-xs text-white/75 leading-relaxed font-light">{point.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] leading-tight">Your Space Can Be Fixed. <br />Most of It Without a Single Brick Moved.</h2>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 font-display">
              <Link 
                to="/consultation" 
                className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Vastu Correction Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
              <a 
                href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20a%20Vastu%20Correction%2520Consultation.%22%20I'm%20sharing%20my%20floor%20plan."
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
