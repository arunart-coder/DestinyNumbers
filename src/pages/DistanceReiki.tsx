import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

interface ReikiLayer {
  layer: string;
  healed: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function DistanceReiki() {
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const reikiLayers: ReikiLayer[] = [
    { layer: 'Physical Restoration', healed: 'Supports relief from pain, chronic fatigue, nervous tension, and low physical immunity.' },
    { layer: 'Emotional Rebalancing', healed: 'Eases anxiety, deep grief, mental burnout, suppressed irritation, and past trauma.' },
    { layer: 'Mental Alignment', healed: 'Quietens an overactive mind, breaks circular worry, and dissolves unconscious, repetitive limiting beliefs.' },
    { layer: 'Spiritual Integration', healed: 'Reconnects your current experience with your soul’s blueprint, lifting cosmic and ancestral heaviness.' }
  ];

  const steps: Step[] = [
    {
      num: '01',
      title: 'Vedic Mapping & Preparation',
      desc: 'Before the energetic transmission begins, Dr. Arun Poovaiah analyzes your Vedic birth chart and current Dasha planetary period. This reveals exactly where your life force is experiencing structural blockage or pressure, allowing us to plan the transmission with absolute astrological precision.'
    },
    {
      num: '02',
      title: 'Intentional Setup & Alignment',
      desc: 'You select a quiet 60-minute window where you can rest undisturbed at home or in a quiet, dedicated space. We connect premium intentions, and you establish a peaceful, open, receptive inner state. No video camera is needed during the transmission itself, allowing complete, stress-free surrender.'
    },
    {
      num: '03',
      title: 'Active Energy Channelling',
      desc: 'Tapping into the nonlocal energetic field, Dr. Poovaiah utilizes Master-level Reiki symbols and mantras to bypass distance entirely. He guides healing energy along your unique planetary pathways, clearing energy blocks in your chakras, aura, and physical-spiritual channels.'
    },
    {
      num: '04',
      title: 'Integrative Report & Support',
      desc: 'After the session, you receive a detailed written summary of the blockages cleared, planetary insights, and customized daily practices (like specific mantras, meditation rules, or crystal recommendations) to permanently anchor your new frequency.'
    }
  ];

  const signs = [
    "Experiencing a total depletion of energy that sleep or rest cannot resolve.",
    "A heavy, lingering emotional fog or grief with no immediate physical explanation.",
    "Chronic physical discomforts that traditional medicine manages but never fully clears.",
    "Feeling highly sensitive can absorb negative energy from toxic environments.",
    "Being in the midst of a hostile, chaotic planetary cycle (e.g., active Saturn or Rahu Dashas).",
    "Feeling completely disconnected from your true life purpose or spiritual intuition."
  ];

  const benefits = [
    "In-depth analysis of your Vedic birth chart and active Dasha period before the session.",
    "Full-body, subtle energy assessment to locate stagnant energetic pockets.",
    "60 minutes of focused Master-level Distance Reiki transmission directed to all 7 chakras.",
    "Specialized channelling along your primary active planetary pathways.",
    "Distance-proof transmission that is just as potent as in-person treatment.",
    "A tailored written guidance report containing protective mantras and daily alignment practices.",
    "21-day energetic integration tracking and personal follow-up."
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
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Ancient Foundations</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Ancient Japanese Healing. Profound Modern Results.</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Reiki is the channelling of universal life force energy — <strong>Rei</strong> meaning universal wisdom, and <strong>Ki</strong> meaning life energy — through the hands of a trained practitioner directly into the recipient's energy body.
              </p>
              <p>
                Where energy flows freely, the body heals. Where it is blocked, disease, pain, and emotional suffering take root. Distance Reiki dissolves those blocks — quietly, non-invasively, and with lasting effect.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — What Reiki Heals */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Direct Healing Impact</span>
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
                      <td className="p-4 pl-6 font-bold text-[#1C3557] font-display">
                        {item.layer}
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
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Lineage Mastery</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white">Not All Reiki Is Equal</h2>
            
            <div className="space-y-4 text-base text-white/80 leading-relaxed font-light">
              <p>
                Reiki has three levels of practice. Most practitioners work at Level 1 or 2 — effective for surface healing. A Reiki Master operates at the highest level of attunement — with the ability to channel deeper frequencies, work across distance with equal potency, and address karmic and soul-level blockages that lower-level practice cannot reach.
              </p>
              <p>
                Dr. Arun Poovaiah brings Reiki Master healing integrated with Vedic astrological insight — identifying exactly which energy centres and life areas need healing based on your birth chart and active Dasha before a single session begins.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — The Step-by-Step Distance Protocol */}
        <section className="space-y-8 mb-16">
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Flow Matrix</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1">Our Nonlocal Sacred Protocol</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
            {steps.map((st, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white border border-[#1C3557]/10 rounded-2xl hover:border-[#C9A84C]/40 hover:shadow-md transition-all relative overflow-hidden group"
              >
                <div className="absolute top-4 right-6 text-4xl font-black font-display text-[#1C3557]/5 select-none">{st.num}</div>
                <div className="space-y-3 relative z-10">
                  <h4 className="font-display font-medium text-lg text-[#1C3557] italic group-hover:text-[#C9A84C] transition-colors">{st.title}</h4>
                  <p className="text-xs text-[#1C3557]/80 leading-relaxed font-light">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — Distance Reiki Concept */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Quantum Field Connection</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Energy Has No Address</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Distance Reiki is not a compromise — it is a different application of the same universal force. At Master level, the practitioner works with your energetic signature directly, independent of physical proximity. Clients across India and internationally report results identical to in-person sessions.
              </p>
              <p>
                All that is needed is your birth details, a quiet space, and an open intention to serve as a conduit for the divine light.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — Signs You Need Reiki Now */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Diagnostic Checklist</span>
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

        {/* SECTION 7 — What Your Session Includes */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1 font-serif">What Your Nonlocal Session Includes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {benefits.map((feat, idx) => (
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

        {/* FINAL SEAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">You Were Designed for a Specific Life. Let's Find It.</h2>
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Connect to master-level life force energy across distance with Dr. Arun Poovaiah. Align your chakras and release old karmic blockages from the comfort of your space.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/consultation" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Distance Reiki Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
