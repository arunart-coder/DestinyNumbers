import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Activity,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

interface Chakra {
  name: string;
  sanskrit: string;
  location: string;
  governs: string;
  blockedSigns: string;
  colorClass: string;
  badgeColorClass: string;
  glowColorClass: string;
}

export default function ChakraBalancing() {
  const chakrasSectionRef = useRef<HTMLDivElement>(null);

  const chakras: Chakra[] = [
    {
      name: 'Muladhara',
      sanskrit: 'Root Chakra',
      location: 'Base of spine',
      governs: 'Safety & Stability',
      blockedSigns: 'Fear, financial stress, fatigue',
      colorClass: 'bg-red-600',
      badgeColorClass: 'bg-red-500/10 text-red-500 border border-red-500/20',
      glowColorClass: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]'
    },
    {
      name: 'Svadhisthana',
      sanskrit: 'Sacral Chakra',
      location: 'Lower abdomen',
      governs: 'Creativity & Emotion',
      blockedSigns: 'Guilt, low drive, emotional numbness',
      colorClass: 'bg-orange-500',
      badgeColorClass: 'bg-orange-500/10 text-orange-500 border border-orange-500/20',
      glowColorClass: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]'
    },
    {
      name: 'Manipura',
      sanskrit: 'Solar Plexus',
      location: 'Upper abdomen',
      governs: 'Confidence & Will',
      blockedSigns: 'Low self-worth, control issues',
      colorClass: 'bg-yellow-500',
      badgeColorClass: 'bg-yellow-500/10 text-[#C9A84C] border border-[#C9A84C]/25',
      glowColorClass: 'group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]'
    },
    {
      name: 'Anahata',
      sanskrit: 'Heart Chakra',
      location: 'Center of chest',
      governs: 'Love & Compassion',
      blockedSigns: 'Grief, isolation, inability to forgive',
      colorClass: 'bg-emerald-600',
      badgeColorClass: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
      glowColorClass: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]'
    },
    {
      name: 'Vishuddha',
      sanskrit: 'Throat Chakra',
      location: 'Throat',
      governs: 'Expression & Truth',
      blockedSigns: 'Inability to speak up, chronic throat issues',
      colorClass: 'bg-cyan-500',
      badgeColorClass: 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20',
      glowColorClass: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]'
    },
    {
      name: 'Ajna',
      sanskrit: 'Third Eye',
      location: 'Between eyebrows',
      governs: 'Intuition & Clarity',
      blockedSigns: 'Confusion, poor decisions, overthinking',
      colorClass: 'bg-indigo-600',
      badgeColorClass: 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20',
      glowColorClass: 'group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]'
    },
    {
      name: 'Sahasrara',
      sanskrit: 'Crown Chakra',
      location: 'Top of head',
      governs: 'Wisdom & Connection',
      blockedSigns: 'Disconnection, lack of purpose, depression',
      colorClass: 'bg-purple-600',
      badgeColorClass: 'bg-purple-500/10 text-purple-500 border border-purple-500/20',
      glowColorClass: 'group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]'
    }
  ];

  const signs = [
    'Persistent anxiety or unexplained fear',
    'Feeling stuck despite consistent effort',
    'Emotional outbursts or complete emotional shutdown',
    'Chronic physical issues with no clear medical cause',
    'Difficulty trusting yourself or others',
    'A deep sense of being disconnected from life',
    'Repeating the same painful patterns in relationships or work'
  ];

  const blocks = [
    {
      title: 'Birth chart mapping to your seven chakras',
      desc: 'Identifying baseline pressure states, structural blocks, and inherited planetary alignments.'
    },
    {
      title: 'Diagnostic state measurement',
      desc: 'Defining each energetic portal as underactive, highly congested (overactive), or balanced.'
    },
    {
      title: 'Targeted energy clearing',
      desc: 'Vedic acoustic resonance (sound), focused breath cycles, and elemental alignment.'
    },
    {
      title: 'Personalised mantras',
      desc: 'Seeding custom vibrational root syllables matched to your unique energetic chart.'
    },
    {
      title: 'Cosmic frequency matching',
      desc: 'Specific recommendation filters covering colors, crystals, and dietary element shifts.'
    },
    {
      title: 'Ongoing integration kit',
      desc: 'Simple, practical daily micro-habits designed to sustain fluid energy pathways.'
    },
    {
      title: '21-Day recalibration review',
      desc: 'A secondary, structured follow-up call to lock in alignment and review active symptoms.'
    }
  ];

  const scrollToChakras = () => {
    chakrasSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Energy Healing · Chakra Alignment"
        title="When Life Feels Blocked — Your Energy Body Is Trying to Tell You Something"
        description="Every emotion, every illness, every pattern of struggle has an energetic root. Chakra balancing finds it — and clears it."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book a Chakra Balancing Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <button 
            onClick={scrollToChakras}
            className="inline-flex justify-center px-8 py-3.5 bg-white/60 hover:bg-white text-[#1C3557] border border-[#1C3557]/10 font-display font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            Know Your Chakras
          </button>
        </div>

        {/* SECTION 1 — What Are Chakras */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Activity className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Energy Anatomy</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Seven Energy Centres. One Complete You.</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Your body carries seven primary energy centres — chakras — running from the base of your spine to the crown of your head. Each one governs a specific dimension of your physical, emotional, and spiritual life.
              </p>
              <p>
                When they spin freely, life flows — health, clarity, confidence, and connection come naturally. When one or more are blocked or overactive, the imbalance shows up as physical symptoms, emotional patterns, and recurring life problems that no amount of logic seems to fix.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — The Seven Chakras */}
        <section ref={chakrasSectionRef} className="scroll-mt-24 space-y-8 mb-16">
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Know Where You Are Blocked</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1">The Map of Your Energy Center</h2>
            <p className="text-xs text-[#1C3557]/70 mt-2 max-w-xl mx-auto">
              Review each principal vortex to isolate which recurring signs are flagging potential congestion or under-activation.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden border border-[#1C3557]/10 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1C3557] text-white text-xs uppercase tracking-wider font-semibold">
                  <th className="p-4 pl-6 font-display">Chakra</th>
                  <th className="p-4 font-display">Location</th>
                  <th className="p-4 font-display">Governs</th>
                  <th className="p-4 pr-6 font-display">When Blocked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C3557]/10 text-sm">
                {chakras.map((chk, idx) => (
                  <tr key={idx} className="hover:bg-[#F5ECD7]/20 transition-all group">
                    <td className="p-4 pl-6 font-medium">
                      <div className="flex items-center gap-3">
                        <span className={`w-3.5 h-3.5 rounded-full ${chk.colorClass} ${chk.glowColorClass} transition-shadow duration-300 shrink-0`}></span>
                        <div className="flex flex-col">
                          <span className="font-display font-medium text-[#1C3557]">{chk.name}</span>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#1C3557]/50">{chk.sanskrit}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-[#1C3557]/80 text-xs font-light">{chk.location}</td>
                    <td className="p-4 font-medium text-[#1C3557] font-sans">{chk.governs}</td>
                    <td className="p-4 pr-6 text-xs text-red-700/80 font-light leading-relaxed">{chk.blockedSigns}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden space-y-4">
            {chakras.map((chk, idx) => (
              <div key={idx} className="p-5 bg-white border border-[#1C3557]/10 rounded-xl space-y-3 shadow-sm group">
                <div className="flex items-center justify-between border-b border-[#1C3557]/5 pb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${chk.colorClass} shadow-sm shrink-0`}></span>
                    <div>
                      <h4 className="font-display font-medium text-[#1C3557] text-base">{chk.name}</h4>
                      <span className="text-[9px] uppercase tracking-wider font-black text-[#1C3557]/50 block">{chk.sanskrit}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${chk.badgeColorClass}`}>
                    {chk.location}
                  </span>
                </div>
                <div className="text-xs space-y-2">
                  <div>
                    <strong className="block text-[#1C3557]/80 font-semibold uppercase tracking-widest text-[9px] mb-0.5">Governs:</strong>
                    <p className="text-[#1C3557]/90 font-medium font-sans">{chk.governs}</p>
                  </div>
                  <div>
                    <strong className="block text-red-600/90 font-semibold uppercase tracking-widest text-[9px] mb-0.5">When Blocked:</strong>
                    <p className="text-red-700/80 font-light">{chk.blockedSigns}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Signs You Need Balancing */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Diagnostic Checklist</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Does This Sound Like You?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {signs.map((sign, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/60 border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                  <div className="p-1 rounded-full bg-red-500/5 mt-0.5 shrink-0">
                    <ShieldAlert className="w-4.5 h-4.5 text-red-600/80" />
                  </div>
                  <p className="text-sm text-[#1C3557]/90 leading-relaxed font-sans">{sign}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1C3557] rounded-xl p-5 text-center mt-6 shadow-md border-l-4 border-[#C9A84C]">
              <p className="text-sm italic font-display font-medium tracking-wide text-white">
                "These are not personality flaws. They are energy signals."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Our Approach */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white">Rooted in Vedic Science. Deeply Personal.</h2>
            <p className="text-white/80 leading-relaxed font-light text-base max-w-3xl">
              At Destiny Numbers, Chakra Balancing is not a generic healing session. It begins with your birth chart — identifying which planetary energies are suppressed or excessive in your life and mapping them to the corresponding chakras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/30 transition-all h-full">
                <div className="text-xl font-bold font-display text-[#C9A84C] mb-2">1</div>
                <h4 className="font-display font-medium mb-2 text-white italic text-base">Chart-Based Diagnosis</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Each planet governs a chakra. Your Vedic chart reveals which chakras have been under pressure since birth and which have been activated by your current Dasha.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/30 transition-all h-full">
                <div className="text-xl font-bold font-display text-[#C9A84C] mb-2">2</div>
                <h4 className="font-display font-medium mb-2 text-white italic text-base">Targeted Healing</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Using sound, breathwork, colour therapy, affirmations, and elemental corrections, we work on the specific chakras identified — not all seven indiscriminately.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/30 transition-all h-full">
                <div className="text-xl font-bold font-display text-[#C9A84C] mb-2">3</div>
                <h4 className="font-display font-medium mb-2 text-white italic text-base">Sustainable Practices</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  You leave every session with simple daily practices that maintain the balance long after the consultation ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — What a Session Includes */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1">Your Chakra Session at a Glance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blocks.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white border border-[#1C3557]/10 rounded-2xl hover:border-[#C9A84C]/40 hover:shadow-md transition-all group"
              >
                <div className="flex gap-4">
                  <div className="p-1 rounded-full text-[#C9A84C] bg-[#1C3557]/5 self-start shrink-0">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-[#1C3557] mb-1 group-hover:text-[#C9A84C] transition-colors">{item.title}</h4>
                    <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6 — Chakra & Numerology Connection */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Compass className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Sacred Integration</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Your Numbers Reveal Your Energy Blocks</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Every number in your numerology chart carries a vibrational frequency that directly corresponds to a chakra. Your Life Path number, for instance, reveals the primary energy centre you are here to master — and the one most likely to face resistance.
              </p>
              <p>
                At Destiny Numbers, this integration of numerology and chakra science gives you a uniquely precise map of where your energy flows freely and where it has been quietly blocked for years.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">You Were Not Built to Feel Blocked</h2>
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Book a Chakra Balancing session and discover the energetic root of what has been holding you back.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/consultation" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
