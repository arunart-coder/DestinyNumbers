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

interface ReikiLayer {
  layer: string;
  healed: string;
}

interface DashaPlanet {
  planet: string;
  governs: string;
  icon: string;
}

export default function ReikiMaster() {
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const reikiLayers: ReikiLayer[] = [
    { layer: 'Physical', healed: 'Pain, fatigue, slow recovery, low immunity' },
    { layer: 'Emotional', healed: 'Anxiety, grief, anger, emotional numbness' },
    { layer: 'Mental', healed: 'Overthinking, fear, limiting beliefs' },
    { layer: 'Spiritual', healed: 'Loss of purpose, disconnection, karmic heaviness' }
  ];

  const dashaPlanets: DashaPlanet[] = [
    { planet: 'Sun', governs: 'Heart, spine, vitality, self-worth', icon: '☀️' },
    { planet: 'Moon', governs: 'Mind, lungs, emotional body, mother wounds', icon: '🌙' },
    { planet: 'Mars', governs: 'Blood, muscles, anger, drive', icon: '🔥' },
    { planet: 'Mercury', governs: 'Nervous system, speech, anxiety', icon: '☿️' },
    { planet: 'Jupiter', governs: 'Liver, wisdom, abundance blocks', icon: '🪐' },
    { planet: 'Venus', governs: 'Kidneys, relationships, creative blocks', icon: '💖' },
    { planet: 'Saturn', governs: 'Bones, chronic conditions, karmic fatigue', icon: '⏳' },
    { planet: 'Rahu', governs: 'Confusion, obsession, unexplained illness', icon: '🌪️' },
    { planet: 'Ketu', governs: 'Spiritual blocks, past life pain, detachment', icon: '✨' }
  ];

  const sessionIncludes = [
    "Birth chart and Dasha analysis before healing begins",
    "Full body energy scan — identifying blocked pathways",
    "Master-level Reiki channelling across all seven chakras",
    "Targeted healing on Dasha-specific planetary pathways",
    "Distance healing available — equally potent online",
    "Post-session grounding and protection",
    "Written guidance — mantras, crystals, and practices to sustain the healing",
    "21-day integration follow-up"
  ];

  const signs = [
    "Exhaustion that rest cannot fix",
    "Emotional heaviness with no clear source",
    "Physical symptoms medicine keeps managing but never resolving",
    "Feeling energetically depleted after being around certain people",
    "A persistent sense of being stuck or held back",
    "Grief, trauma, or heartbreak that will not fully release",
    "Entering or finishing a major Saturn, Rahu, or Ketu Dasha"
  ];

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Universal Life Force · Master Level Healing"
        title="Some Wounds Don't Respond to Medicine. They Respond to Energy."
        description="Reiki works where logic stops — restoring the life force that illness, stress, and trauma quietly drain away."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book a Reiki Healing Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <button 
            onClick={scrollToHowItWorks}
            className="inline-flex justify-center px-8 py-3.5 bg-white/60 hover:bg-white text-[#1C3557] border border-[#1C3557]/10 font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            How Reiki Works
          </button>
        </div>

        {/* SECTION 1 — What Is Reiki */}
        <section ref={howItWorksRef} className="scroll-mt-24 bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Flow of Spirit</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Ancient Japanese Healing. Profound Modern Results.</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Reiki is the channelling of universal life force energy — <strong>Rei</strong> meaning universal wisdom, <strong>Ki</strong> meaning life energy — through the hands of a trained practitioner directly into the recipient's energy body.
              </p>
              <p>
                Where energy flows freely, the body heals. Where it is blocked, disease, pain, and emotional suffering take root. Reiki dissolves those blocks — quietly, non-invasively, and with lasting effect.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — What Reiki Heals */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Multi-Dimensional Clearing</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Physical. Emotional. Spiritual. All at Once.</h2>
            
            <div className="overflow-hidden border border-[#1C3557]/10 rounded-xl bg-white shadow-sm mt-6 font-sans">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1C3557] text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="p-4 pl-6 font-display">Layer</th>
                    <th className="p-4 pr-6 font-display">What Gets Healed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C3557]/10 text-sm">
                  {reikiLayers.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F5ECD7]/20 transition-all">
                      <td className="p-4 pl-6 font-semibold">
                        <span className="font-display font-medium text-[#1C3557]">{item.layer}</span>
                      </td>
                      <td className="p-4 pr-6 text-xs text-[#1C3557]/75 font-light leading-relaxed">{item.healed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Master Level — Why It Matters */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Highest Attunement</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Not All Reiki Is Equal</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Reiki has three levels of practice. Most practitioners work at Level 1 or 2 — effective for surface healing. A Reiki Master operates at the highest level of attunement — with the ability to channel deeper frequencies, work across distance with equal potency, and address karmic and soul-level blockages that lower-level practice cannot reach.
              </p>
              <p>
                Dr. Arun Poovaiah brings Reiki Master healing integrated with Vedic astrological insight — identifying exactly which energy centres and life areas need healing based on your birth chart and active Dasha before a single session begins.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Reiki & Vedic Astrology */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Cosmic Synergy</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Precision Healing — Not Guesswork</h2>
            
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light mb-6">
              Every planet governs specific organs, emotions, and energy pathways in the body. Your active Dasha reveals exactly where your life force is under the greatest pressure right now.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 font-sans">
              {dashaPlanets.map((dp, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#1C3557]/10 rounded-xl hover:border-[#C9A84C]/30 transition-all flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{dp.icon}</span>
                    <h4 className="font-display font-medium text-[#1C3557] text-sm italic">{dp.planet}</h4>
                  </div>
                  <p className="text-[11px] text-[#1C3557]/80 leading-relaxed font-light">{dp.governs}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-center text-[#C9A84C] italic font-semibold border-t border-[#1C3557]/5 pt-6 mt-6">
              Knowing your Dasha lord, we channel Reiki with surgical precision — directly into the planetary pathway creating the most disruption in your life right now.
            </p>
          </div>
        </section>

        {/* SECTION 5 — What a Session Includes */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1">Your Reiki Master Session</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {sessionIncludes.map((feat, idx) => (
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

        {/* SECTION 6 — Distance Reiki */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Nonlocal Transmission</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white">Distance Reiki — Energy Has No Address</h2>
            
            <div className="space-y-4 text-sm text-white/80 leading-relaxed font-light">
              <p>
                Distance Reiki is not a compromise — it is a different application of the same universal force. At Master level, the practitioner works with your energetic signature directly, independent of physical proximity. Clients across India and internationally report results identical to in-person sessions.
              </p>
              <p>
                All that is needed is your birth details, a quiet space, and an open intention.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-sans text-[#1C3557]">
              <div className="flex gap-4 items-center bg-white/10 text-white p-4 border border-white/10 rounded-xl">
                <div className="p-2.5 rounded-full bg-white/5 text-[#C9A84C]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Online Transmission</h4>
                  <p className="text-xs text-white/70">Equally potent deep distance alignment sessions via direct intention resonance</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center bg-white/10 text-white p-4 border border-white/10 rounded-xl">
                <div className="p-2.5 rounded-full bg-white/5 text-[#C9A84C]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Bengaluru In-Person</h4>
                  <p className="text-xs text-white/70">Direct therapeutic room sessions available with Dr. Arun Poovaiah</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — Signs You Need Reiki Now */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Energy Warnings</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Your Energy Is Calling</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {signs.map((sign, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/60 border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                  <div className="p-1 rounded-full bg-red-400/5 mt-0.5 shrink-0">
                    <ShieldAlert className="w-4.5 h-4.5 text-[#C9A84C]" />
                  </div>
                  <p className="text-sm text-[#1C3557]/90 leading-relaxed font-sans">{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL SEAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">Your Body Knows How to Heal. It Just Needs the Energy to Do It.</h2>
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Book a Reiki Master Healing session with Dr. Arun Poovaiah — where ancient Japanese healing meets Vedic astrological precision for results that go deeper than any single modality alone.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/consultation" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Reiki Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
