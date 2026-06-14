import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles,
  MapPin,
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

interface AuraLayer {
  name: string;
  governs: string;
  compromised: string;
  badgeBg: string;
  badgeText: string;
}

interface AuraPlanet {
  planet: string;
  colorName: string;
  governs: string;
  colorClass: string;
}

interface ClearingTool {
  name: string;
  purpose: string;
  icon: string;
}

export default function AuraCleansing() {
  const auraSectionRef = useRef<HTMLDivElement>(null);

  const auraLayers: AuraLayer[] = [
    { name: 'Etheric', governs: 'Physical vitality & body health', compromised: 'Chronic fatigue, low immunity', badgeBg: 'bg-red-500/10', badgeText: 'text-red-600 border border-red-500/20' },
    { name: 'Emotional', governs: 'Feelings & emotional responses', compromised: 'Mood swings, anxiety, emotional drain', badgeBg: 'bg-orange-500/10', badgeText: 'text-orange-600 border border-orange-500/20' },
    { name: 'Mental', governs: 'Thoughts & belief systems', compromised: 'Overthinking, mental fog, limiting beliefs', badgeBg: 'bg-yellow-500/10', badgeText: 'text-yellow-600 border border-yellow-500/20' },
    { name: 'Astral', governs: 'Relationships & heart connections', compromised: 'Toxic attachments, loneliness, heartbreak residue', badgeBg: 'bg-emerald-500/10', badgeText: 'text-emerald-600 border border-emerald-500/20' },
    { name: 'Etheric Template', governs: 'Blueprint of physical body', compromised: 'Persistent illness, identity confusion', badgeBg: 'bg-cyan-500/10', badgeText: 'text-cyan-600 border border-cyan-500/20' },
    { name: 'Celestial', governs: 'Intuition & spiritual perception', compromised: 'Disconnection, lack of inspiration', badgeBg: 'bg-indigo-500/10', badgeText: 'text-indigo-600 border border-indigo-500/20' },
    { name: 'Ketheric', governs: 'Soul purpose & divine connection', compromised: 'Loss of meaning, spiritual emptiness', badgeBg: 'bg-purple-500/10', badgeText: 'text-purple-600 border border-purple-500/20' },
  ];

  const signs = [
    "Feeling inexplicably drained after social interactions",
    "Absorbing other people's moods and emotions as your own",
    "Persistent negativity or heaviness with no obvious cause",
    "Recurring nightmares or disturbed sleep",
    "A feeling that bad luck follows you everywhere",
    "Sudden loss of motivation, creativity, or joy",
    "Physical ailments that medicine cannot fully explain",
    "Sensing negative energy in your home or workspace",
    "Feeling disconnected from yourself or your purpose"
  ];

  const tools: ClearingTool[] = [
    { name: 'Vedic Mantras', purpose: 'Vibrational clearing of specific aura layers', icon: '🕉️' },
    { name: 'Sacred Sound & Singing Bowls', purpose: 'Breaks up dense, stagnant energy', icon: '🥣' },
    { name: 'Smoke Cleansing', purpose: 'Purifies physical and etheric layers', icon: '💨' },
    { name: 'Crystal Therapy', purpose: 'Amplifies and stabilises cleared zones', icon: '💎' },
    { name: 'Colour Therapy', purpose: 'Recharges depleted aura frequencies', icon: '🎨' },
    { name: 'Breathwork (Pranayama)', purpose: 'Clears emotional and mental layers', icon: '🌬️' },
    { name: 'Protective Yantra', purpose: 'Seals and shields the cleansed aura', icon: '🛡️' },
  ];

  const planetaryAura: AuraPlanet[] = [
    { planet: 'Sun', colorName: 'Golden layer', governs: 'identity and vitality', colorClass: 'bg-amber-400 border border-amber-300' },
    { planet: 'Moon', colorName: 'Silver-white layer', governs: 'emotional body', colorClass: 'bg-slate-100 border border-slate-300' },
    { planet: 'Mars', colorName: 'Red layer', governs: 'courage and life force', colorClass: 'bg-red-500 border border-red-400' },
    { planet: 'Mercury', colorName: 'Green layer', governs: 'mental clarity', colorClass: 'bg-emerald-500 border border-emerald-400' },
    { planet: 'Jupiter', colorName: 'Yellow layer', governs: 'wisdom and protection', colorClass: 'bg-yellow-400 border border-yellow-300' },
    { planet: 'Venus', colorName: 'Pink layer', governs: 'love and creativity', colorClass: 'bg-pink-400 border border-pink-300' },
    { planet: 'Saturn', colorName: 'Blue-black layer', governs: 'discipline and karma', colorClass: 'bg-slate-900 border border-slate-800' },
    { planet: 'Rahu', colorName: 'Smoky grey layer', governs: 'illusion and confusion', colorClass: 'bg-neutral-500 border border-neutral-400' },
    { planet: 'Ketu', colorName: 'Violet layer', governs: 'past life karmic residue', colorClass: 'bg-violet-500 border border-violet-400' },
  ];

  const sessionFeatures = [
    "Vedic birth chart and Dasha analysis",
    "Numerological frequency assessment",
    "Layer-by-layer aura diagnosis",
    "Full cleansing session using multiple modalities",
    "Protective energetic sealing",
    "Personalised post-session maintenance practices",
    "Crystal and colour recommendations for your aura type",
    "21-day follow-up check-in"
  ];

  const scrollToAura = () => {
    auraSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Energy Healing · Aura Purification"
        title="You Carry More Than Your Own Energy. Some of It Was Never Yours."
        description="Every interaction, every environment, every unresolved emotion leaves an energetic imprint on your aura. Over time, it accumulates — and you feel it, even if you cannot name it."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book an Aura Cleansing Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <button 
            onClick={scrollToAura}
            className="inline-flex justify-center px-8 py-3.5 bg-white/60 hover:bg-white text-[#1C3557] border border-[#1C3557]/10 font-display font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            Understand Your Aura
          </button>
        </div>

        {/* SECTION 1 — What Is Your Aura */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Invisible Shield</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">The Invisible Field That Shapes Your Visible Life</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Your aura is your energetic body — a luminous field that surrounds and interpenetrates your physical form, extending several feet in every direction. It carries the imprint of everything you have experienced — your emotions, your traumas, your relationships, your environment, and the energies of every person you have come into close contact with.
              </p>
              <p>
                A clean, vibrant aura acts as a natural shield — filtering negative influences, attracting aligned opportunities, and maintaining physical and emotional vitality. A compromised aura does the opposite. It leaks energy, absorbs negativity, and leaves you feeling perpetually drained, heavy, or inexplicably off-balance.
              </p>
            </div>

            <div className="mt-8 p-6 bg-[#0D1B3E] text-white border-l-4 border-[#C9A84C] rounded-r-xl shadow-md">
              <p className="font-display font-medium text-lg italic tracking-wide text-center">
                "Your aura speaks before you do. Make sure it is saying what you intend."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — The Seven Aura Layers */}
        <section ref={auraSectionRef} className="scroll-mt-24 space-y-8 mb-16">
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Energetic Levels</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1">Every Layer Tells a Story</h2>
            <p className="text-xs text-[#1C3557]/70 mt-2 max-w-xl mx-auto">
              Your energetic body operates at multiple distinct levels of frequency. Explore each layer and check the signs representing an energetic structural compromise.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden border border-[#1C3557]/10 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1C3557] text-white text-xs uppercase tracking-wider font-semibold">
                  <th className="p-4 pl-6 font-display">Layer</th>
                  <th className="p-4 font-display">Governs</th>
                  <th className="p-4 pr-6 font-display">When Compromised</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C3557]/10 text-sm">
                {auraLayers.map((layer, idx) => (
                  <tr key={idx} className="hover:bg-[#F5ECD7]/20 transition-all">
                    <td className="p-4 pl-6 font-semibold">
                      <div className="flex flex-col">
                        <span className="font-display font-medium text-[#1C3557]">{layer.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#1C3557]/80 text-xs font-light">{layer.governs}</td>
                    <td className="p-4 pr-6 text-xs text-red-700/80 font-light leading-relaxed">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] uppercase tracking-widest font-bold ${layer.badgeBg} ${layer.badgeText}`}>
                        {layer.compromised}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden space-y-4">
            {auraLayers.map((layer, idx) => (
              <div key={idx} className="p-5 bg-white border border-[#1C3557]/10 rounded-xl space-y-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#1C3557]/5 pb-2">
                  <h4 className="font-display font-medium text-[#1C3557] text-base">{layer.name}</h4>
                </div>
                <div className="text-xs space-y-2">
                  <div>
                    <strong className="block text-[#1C3557]/80 font-semibold uppercase tracking-widest text-[9px] mb-0.5">Governs:</strong>
                    <p className="text-[#1C3557]/90 font-light font-sans">{layer.governs}</p>
                  </div>
                  <div>
                    <strong className="block text-red-600/90 font-semibold uppercase tracking-widest text-[9px] mb-0.5">When Compromised:</strong>
                    <p className="text-red-700/80 font-medium">{layer.compromised}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Signs Your Aura Needs Cleansing */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Diagnostic Checklist</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Your Energy Is Sending You Signals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {signs.map((sign, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/60 border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                  <div className="p-1 rounded-full bg-red-400/5 mt-0.5 shrink-0">
                    <ShieldAlert className="w-4.5 h-4.5 text-red-600/80" />
                  </div>
                  <p className="text-sm text-[#1C3557]/90 leading-relaxed font-sans">{sign}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1C3557] rounded-xl p-5 text-center mt-6 shadow-md border-l-4 border-[#C9A84C]">
              <p className="text-sm italic font-display font-medium tracking-wide text-white">
                "If three or more of these resonate — your aura needs attention."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — What Damages Your Aura */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Contaminants</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">The Hidden Sources of Energetic Pollution</h2>
            
            <div className="space-y-6 pt-4 font-sans">
              <div className="p-5 bg-white/60 border border-[#1C3557]/5 rounded-xl">
                <h4 className="text-base font-semibold text-[#1C3557] mb-2">People &amp; Environments</h4>
                <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
                  Spending time with emotionally draining individuals, toxic workplaces, hospitals, conflict-heavy spaces — all leave residue on your aura that accumulates over time.
                </p>
              </div>

              <div className="p-5 bg-white/60 border border-[#1C3557]/5 rounded-xl">
                <h4 className="text-base font-semibold text-[#1C3557] mb-2">Unresolved Emotions</h4>
                <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
                  Grief, anger, guilt, and fear that have not been processed do not disappear. They embed themselves in the aura's layers and continue to influence your thoughts, decisions, and physical health.
                </p>
              </div>

              <div className="p-5 bg-white/60 border border-[#1C3557]/5 rounded-xl">
                <h4 className="text-base font-semibold text-[#1C3557] mb-2">Negative Thought Patterns</h4>
                <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
                  Sustained self-criticism, worry, and limiting beliefs generate low-frequency energy that weakens the aura's protective field from within.
                </p>
              </div>

              <div className="p-5 bg-white/60 border border-[#1C3557]/5 rounded-xl">
                <h4 className="text-base font-semibold text-[#1C3557] mb-2">Spiritual Interference</h4>
                <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
                  Certain environments, objects, and even digital spaces carry dense energy that attaches to a weakened aura — particularly in individuals who are naturally empathic or sensitive.
                </p>
              </div>

              <div className="p-5 bg-white/60 border border-[#1C3557]/5 rounded-xl">
                <h4 className="text-base font-semibold text-[#1C3557] mb-2">Planetary Transits</h4>
                <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
                  Malefic planetary periods — particularly Rahu, Ketu, and Saturn Dashas — are known to weaken the aura's resilience. This is when external negative influences find the easiest entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Our Approach */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white font-serif">Ancient Tools. Precise Diagnosis. Lasting Results.</h2>
            <p className="text-white/80 leading-relaxed font-light text-base max-w-3xl">
              At Destiny Numbers, Aura Cleansing is not a one-size-fits-all ritual. Every session begins with a precise energetic and astrological assessment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/30 transition-all">
                <h4 className="font-display font-medium mb-2 text-white italic text-base">Birth Chart Reading</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Your Vedic birth chart reveals which aura layers are constitutionally vulnerable based on planetary placements — and which are currently under pressure from your active Dasha and transits.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/30 transition-all">
                <h4 className="font-display font-medium mb-2 text-white italic text-base">Numerological Frequency Analysis</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Your core numbers carry specific vibrational frequencies. We identify misalignments between your personal numbers and your current energetic state — revealing where the aura is leaking or absorbing the wrong frequencies.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/30 transition-all">
                <h4 className="font-display font-medium mb-2 text-white italic text-base">Targeted Cleansing Protocol</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Using a combination of Vedic mantras, sacred sound frequencies, smoke cleansing, colour therapy, crystal placement, and breathwork — we clear each compromised layer methodically, not generically.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/30 transition-all">
                <h4 className="font-display font-medium mb-2 text-white italic text-base">Protective Sealing</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Cleansing without protection is incomplete. Every session ends with an energetic sealing practice that strengthens the aura's boundary and reduces its vulnerability to future interference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — Tools We Use */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Sacred Modalities</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] mt-1">Sacred Methods. Proven Results.</h2>
              <p className="text-xs text-[#1C3557]/70 mt-2 max-w-xl mx-auto">
                Below is a quick reference guide of the multi-dimensional toolset brought to your purification ritual.
              </p>
            </div>

            <div className="overflow-hidden border border-[#1C3557]/10 rounded-xl bg-white shadow-sm mt-6 font-sans">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1C3557] text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="p-4 pl-6 font-display">Tool</th>
                    <th className="p-4 pr-6 font-display">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C3557]/10 text-sm">
                  {tools.map((t, idx) => (
                    <tr key={idx} className="hover:bg-[#F5ECD7]/20 transition-all">
                      <td className="p-4 pl-6 font-medium flex items-center gap-3">
                        <span className="text-lg shrink-0">{t.icon}</span>
                        <span className="font-display font-medium text-[#1C3557]">{t.name}</span>
                      </td>
                      <td className="p-4 pr-6 text-xs text-[#1C3557]/75 font-light leading-relaxed">{t.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 7 — Aura & Astrology */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Astrological Mapping</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Your Chart Reveals Your Aura's Weakest Zones</h2>
            
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
              Every planet governs a specific colour frequency within the aura. When a planet is weakened, afflicted, or running a malefic Dasha — its corresponding aura layer dims and becomes permeable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-sans">
              {planetaryAura.map((p, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#1C3557]/10 rounded-xl flex items-center gap-3 hover:border-[#C9A84C]/30 transition-all">
                  <span className={`w-4 h-4 rounded-full ${p.colorClass} shrink-0 shadow-sm`}></span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-[#1C3557] text-sm">{p.planet}</span>
                    <span className="text-[10px] text-[#1C3557]/50 uppercase tracking-widest font-black leading-snug">{p.colorName}</span>
                    <span className="text-[11px] text-[#1C3557]/70 font-light mt-0.5 truncate leading-tight">{p.governs}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-center text-[#C9A84C] italic font-semibold border-t border-[#1C3557]/5 pt-6 mt-4">
              Knowing which planetary layers are compromised allows us to cleanse with surgical precision — not guesswork.
            </p>
          </div>
        </section>

        {/* SECTION 8 — What Your Session Includes */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1">A Complete Aura Cleansing Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {sessionFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-white border border-[#1C3557]/10 rounded-2xl hover:border-[#C9A84C]/40 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-1 rounded-full text-[#C9A84C] bg-[#1C3557]/5 shrink-0">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                </div>
                <p className="text-sm text-[#1C3557]/80 font-medium pt-0.5">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9 — Online & In-Person */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-sans">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Flexible Channels</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] leading-tight">Distance Is Not a Barrier to Energy Work</h2>
              <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
                Aura cleansing is equally effective online and in person. Energy transcends physical distance — what matters is intention, precision, and the right tools. Online sessions are conducted via video with full pre-session assessment and a written post-session report.
              </p>
            </div>
            <div className="space-y-4 bg-white/60 p-6 border border-[#1C3557]/10 rounded-xl relative overflow-hidden">
              <div className="flex gap-4 items-center">
                <div className="p-2.5 rounded-full bg-[#1C3557]/5 text-[#C9A84C]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1C3557]">Online Sessions</h4>
                  <p className="text-xs text-[#1C3557]/60">Full pre-assessment + report via video consultation</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center border-t border-[#1C3557]/5 pt-4">
                <div className="p-2.5 rounded-full bg-[#1C3557]/5 text-[#C9A84C]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1C3557]">In-Person Sessions</h4>
                  <p className="text-xs text-[#1C3557]/60">Available in Bengaluru with Dr. Arun Poovaiah</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">You Deserve to Feel Light Again</h2>
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              You have carried enough. Book an Aura Cleansing session and experience what life feels like when the energy holding you back is finally cleared.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/consultation" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Aura Cleansing Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
