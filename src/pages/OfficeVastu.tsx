import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  MessageSquare, 
  Sparkles, 
  Check, 
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function OfficeVastu() {
  const entrancePoints = [
    "All four directions — North, South, East, West — can be auspicious for an office entrance",
    "What matters is not the direction but the exact pada (position) within that direction"
  ];

  const zones = [
    {
      title: "Owner / MD Cabin",
      icon: "👑",
      bullets: [
        "Always in the Southwest — commands authority and stability",
        "Alternate: South zone if SW is unavailable",
        "Owner must face North, Northeast, or East while seated",
        "Back must be toward South or Southwest — never toward an open window or door",
        "No beam directly overhead — creates mental pressure",
        "Rectangular or square cabin shape only"
      ]
    },
    {
      title: "Reception & Waiting Area",
      icon: "🛋️",
      bullets: [
        "Best in North or Northeast",
        "Receptionist faces North or East while attending visitors",
        "Visitors seated facing South or West — calming and productive"
      ]
    },
    {
      title: "Accounts & Finance",
      icon: "💵",
      bullets: [
        "Southeast or North — Lakshmi zone for cash flow",
        "Cash locker and financial documents in Southwest corner",
        "Never in Northeast — dissipates wealth energy"
      ]
    },
    {
      title: "Sales & Marketing Team",
      icon: "🚀",
      bullets: [
        "Northwest — zone of movement, communication, and deal closure",
        "Promotes outward energy, client activity, and negotiation strength"
      ]
    },
    {
      title: "HR & Administration",
      icon: "📝",
      bullets: [
        "West or Northwest — supports structured processes and team management"
      ]
    },
    {
      title: "Conference Room",
      icon: "👥",
      bullets: [
        "Northwest or East — attracts reliable clients and productive outcomes",
        "Avoid Southwest for meetings — creates dominance conflicts"
      ]
    },
    {
      title: "Pantry / Cafeteria",
      icon: "☕",
      bullets: [
        "Southeast — the fire zone, ideal for food preparation and energy"
      ]
    },
    {
      title: "Toilets",
      icon: "🚾",
      bullets: [
        "Acceptable zones: East of Southeast · South · West of Northwest",
        "Never in Northeast, North, or Brahmasthan — these are the most damaging placements"
      ]
    },
    {
      title: "Staircase",
      icon: "🪜",
      bullets: [
        "South, West, or Southwest — never in Northeast or centre",
        "Avoid dark colours on staircase walls — light shades only"
      ]
    }
  ];

  const deskGuidelines = [
    "General staff — West or South zone of the office",
    "Always sit with a solid wall behind — prevents backstabbing, builds team support",
    "Face North or East while working — financial clarity and growth",
    "Desk shape — always rectangular or square — no irregular shapes",
    "Desk ratio — follow 1:2 length to breadth — prevents confusion and delays",
    "Never sit directly under a beam — creates pressure and mental fatigue",
    "Keep desk clean and clutter-free — directly impacts energy flow and clarity",
    "No divine idols on the work desk — place them in a dedicated prayer zone",
    "Electronics and servers — Southeast zone only"
  ];

  const differencePoints = [
    {
      title: "Owner's Birth Chart Integrated",
      desc: "Your Lagna and active Dasha determine which zones are personally beneficial or harmful for you specifically, transcending generic layouts."
    },
    {
      title: "Business Nature Mapped",
      desc: "Whether your focus is trading, services, creative design, or professional consultation — each requires specific and unique directional alignment."
    },
    {
      title: "Plot Shape Assessed",
      desc: "We analyze building shapes like Sher Mukhi (lion-faced, auspicious for commercial ventures) to determine how your architecture interacts with business energy."
    },
    {
      title: "Remedies Without Reconstruction",
      desc: "We prioritize color corrections, elemental balancing, and symbol placements to keep your business fully functional during rectification — no demolition, no downtime."
    },
    {
      title: "Priority Action List",
      desc: "Receive a clear, sequential priority list of exactly which adjustments to execute first to catalyze rapid business results."
    },
    {
      title: "Online & On-Site Consultation",
      desc: "Simply share your floor plan and compass readings for a comprehensive digital report, or book professional on-site audits within Bengaluru."
    }
  ];

  const dos = [
    "Keep the Brahmasthan (centre of office) open and clutter-free",
    "Place the cash locker in Southwest facing North",
    "Use light greens, blues, and whites for walls",
    "Ensure the main entrance opens inward and is well-lit"
  ];

  const donts = [
    "Paint walls black or dark red — absorbs negative energy",
    "Place toilets in Northeast — most damaging commercial Vastu error",
    "Let the MD sit facing South — creates instability in decisions",
    "Install lifts in Southwest or South — highly inauspicious"
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Vedic Vastu Shastra · Commercial Space"
        title="Your Office Energy Is Either Growing Your Business or Draining It"
        description="Direction. Placement. Proportion. Every detail in your workspace has an energetic consequence — and a Vedic solution."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book Office Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <a 
            href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20an%20Office%20Vastu%20Consultation.%2520I'm%20sharing%20my%20floor%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Floor Plan
          </a>
        </div>

        {/* SECTION 1 — The Office Entrance */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Compass className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Energy Gateway</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">The Door Your Business Walks Through</h2>
            
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Your main entrance is the single most critical Vastu decision in any office. Get it wrong — and no amount of hard work fully compensates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {entrancePoints.map((pt, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-white/50 border border-[#1C3557]/5 rounded-xl">
                  <Check className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1C3557]/90 leading-relaxed font-light">{pt}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#1C3557]/5 mt-4 text-center">
              <Link 
                to="/blog/secrets-home-32-main-entrances-vastu" 
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1C3557] hover:text-[#C9A84C] transition-colors"
              >
                The 32 Entrance Positions — a deep-dive guide. Read the full blog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Zone-by-Zone Office Vastu */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Space Optimization Map</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Every Room Has a Right Place</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {zones.map((zone, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#1C3557]/5 rounded-2xl hover:border-[#C9A84C]/30 transition-all shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl shrink-0">{zone.icon}</span>
                    <h3 className="font-display font-medium text-[#1C3557] italic text-base">{zone.title}</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-[#1C3557]/80 font-light leading-relaxed">
                    {zone.bullets.map((el, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#C9A84C] rounded-full shrink-0 mt-1.5" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Seating & Desk Vastu */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Individual Alignment</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Where You Sit Determines What You Attract</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {deskGuidelines.map((guideline, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/60 border border-[#1C3557]/5 hover:border-[#C9A84C]/25 transition-all rounded-xl shadow-sm">
                  <div className="p-1 rounded-full bg-[#1C3557]/5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <p className="text-xs text-[#1C3557]/90 leading-relaxed font-light">{guideline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — The DestinyNumbers Difference */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Diagnostic Difference</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white leading-tight">Vastu + Your Birth Chart. <br/>Precision No One Else Offers.</h2>
            
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Standard Office Vastu applies general rules to every business. We go further.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
              {differencePoints.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/10 border border-white/10 rounded-xl">
                  <h4 className="font-display font-medium text-white italic text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-white/75 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — QUICK VASTU DO's & DON'Ts */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Diagnostic Balance Checklist</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] mb-8">Quick Vastu Do's & Don'ts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DO's */}
              <div className="space-y-4">
                <h4 className="font-display font-semibold text-[#1C3557] text-lg flex items-center gap-2 italic">
                  <Check className="w-5 h-5 text-emerald-600 font-black shrink-0" /> Do —
                </h4>
                <div className="space-y-3">
                  {dos.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-[#1C3557]/85 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DON'Ts */}
              <div className="space-y-4">
                <h4 className="font-display font-semibold text-[#1C3557] text-lg flex items-center gap-2 italic">
                  <X className="w-5 h-5 text-rose-600 font-black shrink-0" /> Don't —
                </h4>
                <div className="space-y-3">
                  {donts.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-rose-500/5 border border-rose-500/10 rounded-xl">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-[#1C3557]/85 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
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
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] leading-tight">Your Business Deserves a Space Aligned With Its Purpose</h2>
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              One consultation. A complete floor-plan analysis. Practical remedies that work without disrupting a single working day.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/consultation" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Office Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
