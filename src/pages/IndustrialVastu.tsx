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

export default function IndustrialVastu() {
  const diffPoints = [
    "Many factories fail not because of market conditions — but because the product being manufactured is misaligned with the owner's birth chart and the factory's facing direction",
    "A factory producing the wrong product for its owner's planetary energy will struggle regardless of investment, infrastructure, or effort",
    "Astro-Vastu — combining the owner's Kundali with the factory's directional alignment — is the only way to diagnose this with precision"
  ];

  const zoneGroups = [
    {
      title: "Plot & Entrance",
      icon: "🏗️",
      items: [
        "Rectangular or square plot — most stable for industrial use",
        "North, East, or Northeast entrance — invites orders, growth, and positive client energy",
        "Avoid Southwest entrance — creates authority conflicts and financial instability",
        "Roads on North or East side of plot — highly auspicious for industrial properties"
      ]
    },
    {
      title: "Production & Manufacturing",
      icon: "🏭",
      items: [
        "Main production floor — South or West zone",
        "Heavy machinery — South, West, or Southwest — grounding zones for heavy load",
        "Boilers, furnaces, electrical panels — Southeast — the fire zone only",
        "Never place fire or heat-generating equipment in Northeast — causes accidents and losses"
      ]
    },
    {
      title: "Management & Administration",
      icon: "💼",
      items: [
        "Owner / MD cabin — Southwest — commands authority and stable decision-making",
        "Accounts and finance — North or Southeast",
        "HR and administration — West or Northwest"
      ]
    },
    {
      title: "Storage & Dispatch",
      icon: "📦",
      items: [
        "Raw material storage — West or Southwest",
        "Finished goods and dispatch — Northwest — zone of movement and outward flow",
        "Never store finished goods in Southwest — delays dispatch and blocks cash conversion"
      ]
    },
    {
      title: "Worker Areas",
      icon: "👥",
      items: [
        "Staff rooms and canteen — Northwest or West",
        "Toilets — South, Southeast, or Northwest — never Northeast",
        "Water sumps and overhead tanks — Northeast for underground · Northwest for overhead"
      ]
    }
  ];

  const avoidList = [
    "Northeast cut or toilet — single most damaging error in any factory",
    "Brahmasthan (centre) blocked or built over — suppresses entire unit's vitality",
    "Irregular L-shaped or T-shaped plots — creates erratic production and cash flow",
    "Owner's cabin in Northeast — loss of authority, poor decisions, financial drain",
    "Staircase in Northeast or centre — accidents and downward energy flow"
  ];

  const differences = [
    {
      title: "Owner's Kundali Integrated",
      desc: "Active Dasha and planetary strengths mapped directly to the factory's direction and industrial functions."
    },
    {
      title: "Product-Direction Alignment",
      desc: "We verify whether your manufactured product is aligned with your chart and factory facing — the single most underdiagnosed cause of industrial failure."
    },
    {
      title: "Worker Safety Zones",
      desc: "Accident-prone areas are identified and corrected before physical or financial losses occur."
    },
    {
      title: "No Shutdown Required",
      desc: "All remedies are implemented non-destructively, without halting ongoing production."
    },
    {
      title: "New Factory Planning",
      desc: "Get the plot selection, entrance, and zone layout built perfectly right from day one of planning."
    },
    {
      title: "Online & On-Site",
      desc: "Full layout analysis from drawings and photos, or site visits across Karnataka and surrounding regions."
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Vedic Vastu · Factory & Industrial Spaces"
        title="Most Factories Don't Fail Because of Competition. They Fail Because of Wrong Energy."
        description="Wrong plot. Wrong product direction. Wrong zone placement. Industrial Vastu finds the invisible source of production loss, labour conflict, and financial drain — and fixes it."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book Industrial Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <a 
            href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%2520an%20Industrial%20Vastu%20Consultation.%22%20I'm%20sharing%20my%2520factory%20floor%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> Send Your Factory Floor Plan
          </a>
        </div>

        {/* SECTION 1 — Why Industrial Vastu Is Different */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Compass className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Stakes Are Higher</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">A Factory Is Not a Home. The Stakes Are Higher.</h2>
            
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              In a home, Vastu imbalance affects one family. In a factory, it affects production output, worker safety, cash flow, machinery performance, and the owner's health — simultaneously.
            </p>

            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C] mt-6">
              The most overlooked fact in industrial Vastu:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {diffPoints.map((pt, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-white/50 border border-[#1C3557]/5 rounded-xl">
                  <Check className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1C3557]/90 leading-relaxed font-light">{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Zone-by-Zone Factory Vastu */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Functional Mapping</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Every Zone Has a Function. Every Misplacement Has a Cost.</h2>

            <div className="space-y-6 pt-6">
              {zoneGroups.map((group, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#1C3557]/5 rounded-2xl hover:border-[#C9A84C]/30 transition-all shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl shrink-0">{group.icon}</span>
                    <h3 className="font-display font-medium text-[#1C3557] italic text-base">{group.title}</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-[#1C3557]/80 font-light leading-relaxed">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#C9A84C] rounded-full shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* What to Strictly Avoid */}
              <div className="p-6 bg-rose-500/5 border border-rose-500/15 rounded-2xl">
                <h3 className="font-display font-medium text-[#1C3557] italic text-base text-rose-800 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-rose-600 shrink-0" /> What to Strictly Avoid
                </h3>
                <ul className="space-y-2.5 text-xs text-[#1C3557]/90 font-light leading-relaxed">
                  {avoidList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — The DestinyNumbers Difference */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Diagnostic Balance</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white leading-tight">Astro-Vastu for Industry — <br />Precision No Standard Consultant Offers.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
              {differences.map((diff, idx) => (
                <div key={idx} className="p-5 bg-white/10 border border-white/10 rounded-xl relative">
                  <div className="absolute top-4 right-4 text-white/5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-medium text-white italic text-sm mb-2">{diff.title}</h4>
                  <p className="text-xs text-white/75 leading-relaxed font-light">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL SEAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <span className="inline-block p-1.5 rounded-full bg-[#1C3557]/5 text-[#C9A84C] mb-2">
              <Sparkles className="w-8 h-8 shrink-0" />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] leading-tight">Your Factory Should Be Your Most Productive Asset. <br />Let's Make Sure It Is.</h2>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 font-display">
              <Link 
                to="/consultation" 
                className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Industrial Vastu Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
              <a 
                href="https://wa.me/917406357511?text=Hi%2C%20I'm%20interested%20in%20an%20Industrial%20Vastu%20Consultation.%22%20I'm%20sharing%20my%20factory%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-8 py-3.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Your Factory Plan
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
