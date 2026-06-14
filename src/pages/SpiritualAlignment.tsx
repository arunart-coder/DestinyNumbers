import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Compass, 
  Star,
  MapPin,
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

interface Dimension {
  title: string;
  desc: string;
  num: string;
}

interface DashaPeriod {
  name: string;
  character: string;
  effect: string;
}

interface AlignmentStage {
  stage: string;
  title: string;
  desc: string;
}

interface Modality {
  name: string;
  role: string;
  icon: string;
}

export default function SpiritualAlignment() {
  const stepsSectionRef = useRef<HTMLDivElement>(null);

  const dimensions: Dimension[] = [
    {
      title: 'Physical Alignment',
      num: '01',
      desc: 'Your body holds the memory of every unprocessed experience. Chronic tension, illness, and fatigue are often misalignment stored in the physical layer — not just medical conditions to be managed.'
    },
    {
      title: 'Emotional Alignment',
      num: '02',
      desc: 'Unresolved grief, suppressed anger, inherited fear — emotions that were never fully felt do not disappear. They calcify in the energy body and silently shape every decision, relationship, and reaction.'
    },
    {
      title: 'Mental Alignment',
      num: '03',
      desc: 'Limiting beliefs, inherited narratives, and unconscious thought patterns run like background programmes — consuming enormous energy and pulling your reality in directions you never consciously chose.'
    },
    {
      title: 'Spiritual Alignment',
      num: '04',
      desc: 'This is the deepest layer. Your soul came into this life with a specific purpose, specific lessons, and specific gifts. When your daily life is disconnected from that purpose — even success feels hollow and rest never truly restores you.'
    }
  ];

  const signs = [
    "Success on the outside, emptiness on the inside",
    "Chronic exhaustion that sleep does not fix",
    "Doing everything right but results never come",
    "Relationships that drain more than they nourish",
    "A persistent feeling that you are meant for more",
    "Difficulty making decisions or trusting your instincts",
    "Repeating the same painful cycles despite awareness",
    "Spiritual practices that once worked no longer do",
    "A deep, quiet restlessness you cannot explain"
  ];

  const approaches = [
    {
      title: 'Vedic Birth Chart Analysis',
      desc: "Your birth chart is the original map of your soul's design. It reveals your dharmic path, your karmic patterns, the planetary energies shaping your current life phase, and the specific areas where misalignment is most likely to occur."
    },
    {
      title: 'Numerological Soul Blueprint',
      desc: "Your core numbers — Life Path, Soul Urge, Destiny, and Personal Year — reveal the vibrational frequency you were born to embody. When your current life energy does not match these numbers, misalignment is inevitable."
    },
    {
      title: 'Dasha & Transit Mapping',
      desc: "Your current planetary period is the single most powerful determinant of what you are being asked to align with right now. We identify exactly where you are in your cosmic cycle — and what specific alignment work will produce the greatest shift at this precise moment in your life."
    },
    {
      title: 'Karmic Pattern Identification',
      desc: "Some misalignments are not from this lifetime. Using your chart and numerology, we identify karmic threads — inherited patterns, past life residues, and soul contracts — that are creating friction in your present reality."
    }
  ];

  const stages: AlignmentStage[] = [
    {
      stage: 'Stage 1',
      title: 'Diagnosis',
      desc: 'A deep reading of your Vedic birth chart, numerological blueprint, current Dasha, and active transits. We identify the precise source and nature of your misalignment — not a generic assessment, but a specific map of your energy.'
    },
    {
      stage: 'Stage 2',
      title: 'Clearing',
      desc: 'Targeted release of the energetic, emotional, and karmic patterns blocking your alignment. Using mantras, breathwork, sound healing, and Vedic clearing rituals — we dissolve what no longer belongs in your energy field.'
    },
    {
      stage: 'Stage 3',
      title: 'Calibration',
      desc: 'Once the old patterns are cleared, we calibrate your energy to your true frequency — using your numerological vibration, planetary strengths, and soul purpose as the reference points for realignment.'
    },
    {
      stage: 'Stage 4',
      title: 'Anchoring',
      desc: 'Alignment without anchoring does not last. We give you a precise daily practice — tailored to your chart, your numbers, and your current life phase — that maintains and deepens your alignment long after the session ends.'
    }
  ];

  const modalities: Modality[] = [
    { name: 'Vedic Astrology', role: 'Cosmic blueprint & timing', icon: '🪐' },
    { name: 'Numerology', role: 'Vibrational frequency calibration', icon: '🔢' },
    { name: 'Chakra Balancing', role: 'Energy centre restoration', icon: '☸️' },
    { name: 'Aura Cleansing', role: 'Field purification & protection', icon: '✨' },
    { name: 'Mantra Science', role: 'Vibrational reprogramming', icon: '🕉️' },
    { name: 'Pranayama', role: 'Breath as an alignment tool', icon: '🌬️' },
    { name: 'Sound Healing', role: 'Breaking karmic & emotional density', icon: '🥣' },
    { name: 'Yantra & Sacred Geometry', role: 'Anchoring aligned energy in space', icon: '📐' }
  ];

  const dashaPeriods: DashaPeriod[] = [
    {
      name: 'Ketu Dasha',
      character: 'Spiritual Surrender & Karmic Release',
      effect: 'A profound invitation for spiritual surrender and karmic release. Resistance during this period creates enormous suffering. Alignment work here accelerates liberation.'
    },
    {
      name: 'Rahu Dasha',
      character: 'Illusion to Transformation',
      effect: 'A period of intense worldly pull and identity confusion. Without alignment, Rahu amplifies illusion. With it, Rahu becomes the engine of extraordinary transformation.'
    },
    {
      name: 'Saturn Dasha',
      character: 'The Great Restructuring',
      effect: 'Saturn dismantles what is not real. Alignment during Saturn periods builds foundations that last a lifetime.'
    },
    {
      name: 'Jupiter Dasha',
      character: 'Spiritual Expansion',
      effect: 'The most fertile ground for spiritual expansion. Alignment work during Jupiter periods produces wisdom, grace, and accelerated soul growth.'
    }
  ];

  const readiness = [
    "You have tried therapy, healing, and self-help — and still feel something is missing",
    "You are at a crossroads and need clarity about your true direction",
    "You are entering or in the middle of a major life transition",
    "You sense a spiritual purpose but cannot access or articulate it",
    "You want to move from surviving to genuinely thriving",
    "You are committed to doing the inner work — not just the outer"
  ];

  const whatIncludes = [
    "Full Vedic birth chart and soul purpose reading",
    "Numerological blueprint — Life Path, Soul Urge, Destiny number analysis",
    "Current Dasha and transit mapping",
    "Karmic pattern identification and clearing",
    "Chakra and aura assessment integrated into alignment",
    "Personalised alignment protocol — mantras, practices, and daily rituals",
    "Written report with your complete alignment map",
    "30-day follow-up to review shifts and deepen the work"
  ];

  const scrollToSteps = () => {
    stepsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Spiritual Science · Energy Alignment"
        title="You Are Not Broken. You Are Misaligned."
        description="When your inner energy does not match the life you are trying to build — nothing works the way it should. Spiritual Energy Alignment brings you back to your original frequency."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-white font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book a Spiritual Alignment Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <button 
            onClick={scrollToSteps}
            className="inline-flex justify-center px-8 py-3.5 bg-white/60 hover:bg-white text-[#1C3557] border border-[#1C3557]/10 font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            Discover Your Alignment
          </button>
        </div>

        {/* SECTION 1 — What Is Spiritual Energy Alignment */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Compass className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">A Return to Source</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">More Than Healing. A Return to Self.</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Spiritual Energy Alignment is the process of bringing your mind, body, soul, and cosmic blueprint into coherence. It is not a single technique — it is a precise, layered practice that identifies where your personal energy has drifted from its original design and systematically restores it.
              </p>
              <p>
                Most people live in a state of chronic misalignment without realising it. They work hard, make reasonable decisions, and still find themselves exhausted, unfulfilled, or repeatedly hitting the same invisible walls. This is not bad luck. It is misalignment — between who you are at your core and how you are living, thinking, and spending your energy.
              </p>
            </div>

            <div className="mt-8 p-6 bg-[#0D1B3E] text-white border-l-4 border-[#C9A84C] rounded-r-xl shadow-md">
              <p className="font-display font-medium text-lg italic tracking-wide text-center">
                "When you are aligned — the right people find you, the right doors open, and effort finally feels like flow."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Four Dimensions of Alignment */}
        <section ref={stepsSectionRef} className="scroll-mt-24 space-y-8 mb-16">
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Channels of Flow</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1">Where the Drift Happens</h2>
            <p className="text-xs text-[#1C3557]/70 mt-2 max-w-xl mx-auto">
              Our alignment drifts along four key planes of reality. Explore where your stagnation holds root.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {dimensions.map((dim, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white border border-[#1C3557]/10 rounded-2xl hover:border-[#C9A84C]/40 hover:shadow-md transition-all relative overflow-hidden group"
              >
                <div className="absolute top-4 right-6 text-4xl font-black font-display text-[#1C3557]/5 select-none">{dim.num}</div>
                <div className="space-y-3 relative z-10">
                  <h4 className="font-display font-medium text-lg text-[#1C3557] italic group-hover:text-[#C9A84C] transition-colors">{dim.title}</h4>
                  <p className="text-xs text-[#1C3557]/80 leading-relaxed font-light font-sans">{dim.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Signs You Are Misaligned */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Diagnostic Checklist</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Recognise Any of These?</h2>
            
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
                "Misalignment is not a character flaw. It is a signal. And every signal has a source."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — The DestinyNumbers Approach */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Primary Anchoring</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Cosmic Blueprint First. Everything Else Follows.</h2>
            
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
              At Destiny Numbers, Spiritual Energy Alignment begins where most healing practices do not — with your cosmic blueprint.
            </p>

            <div className="space-y-4 pt-4 font-sans">
              {approaches.map((app, idx) => (
                <div key={idx} className="p-5 bg-white/60 border border-[#1C3557]/5 rounded-xl">
                  <h4 className="text-base font-semibold text-[#1C3557] mb-2">{app.title}</h4>
                  <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — The Alignment Process */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Our Protocol</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white">Four Stages. One Complete Shift.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
              {stages.map((stg, idx) => (
                <div key={idx} className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#C9A84C]/30 transition-all">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#C9A84C] block mb-1">{stg.stage}</span>
                  <h4 className="font-display font-medium mb-2 text-white italic text-base">{stg.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    {stg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — Tools & Modalities */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Our Toolset</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] mt-1">Ancient Precision. Modern Clarity.</h2>
              <p className="text-xs text-[#1C3557]/70 mt-2 max-w-xl mx-auto">
                Discover the dimensions of cosmic and energetic therapies aligned to identify and release your mental and spiritual blocks.
              </p>
            </div>

            <div className="overflow-hidden border border-[#1C3557]/10 rounded-xl bg-white shadow-sm mt-6 font-sans">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1C3557] text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="p-4 pl-6 font-display">Modality</th>
                    <th className="p-4 pr-6 font-display">Role in Alignment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C3557]/10 text-sm">
                  {modalities.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F5ECD7]/20 transition-all">
                      <td className="p-4 pl-6 font-medium flex items-center gap-3">
                        <span className="text-lg shrink-0">{item.icon}</span>
                        <span className="font-display font-medium text-[#1C3557]">{item.name}</span>
                      </td>
                      <td className="p-4 pr-6 text-xs text-[#1C3557]/75 font-light leading-relaxed">{item.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 7 — Spiritual Alignment & Your Dasha */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Cosmic Timing</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Timing Is Everything in Alignment Work</h2>
            
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
              Not all moments are equal for spiritual work. Your Vedic Dasha reveals the cosmic window you are currently moving through — and some windows are far more powerful for deep alignment than others.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans">
              {dashaPeriods.map((dp, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#1C3557]/10 rounded-xl hover:border-[#C9A84C]/30 transition-all">
                  <h4 className="font-display font-medium text-[#1C3557] text-base italic">{dp.name}</h4>
                  <span className="text-[10px] text-[#A6883F] font-bold uppercase tracking-widest block mb-2">{dp.character}</span>
                  <p className="text-xs text-[#1C3557]/80 leading-relaxed font-light">{dp.effect}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-center text-[#C9A84C] italic font-semibold border-t border-[#1C3557]/5 pt-6 mt-4">
              Knowing your Dasha tells us exactly what kind of alignment work will produce the greatest result right now.
            </p>
          </div>
        </section>

        {/* SECTION 8 — Who This Is For */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Target Resonance</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">You Are Ready for This If —</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 font-sans">
              {readiness.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-white/60 border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                  <div className="p-1 rounded-full bg-[#1C3557]/5 mt-0.5 shrink-0 text-[#C9A84C]">
                    <Star className="w-4 h-4 shrink-0 fill-current" />
                  </div>
                  <p className="text-sm text-[#1C3557]/90 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — What Your Session Includes */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1 font-serif">A Complete Spiritual Alignment Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {whatIncludes.map((feat, idx) => (
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

        {/* SECTION 10 — Online & In-Person */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-sans">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Flexible Channels</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] leading-tight">Available Wherever You Are</h2>
              <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light">
                Spiritual alignment transcends geography. Online sessions are conducted via video with full pre-session assessment, real-time energy work, and a detailed written report delivered after the session.
              </p>
            </div>
            <div className="space-y-4 bg-white/60 p-6 border border-[#1C3557]/10 rounded-xl relative overflow-hidden">
              <div className="flex gap-4 items-center">
                <div className="p-2.5 rounded-full bg-[#1C3557]/5 text-[#C9A84C]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1C3557]">Online Sessions</h4>
                  <p className="text-xs text-[#1C3557]/60">Conducted via high-definition video consultation + comprehensive written report</p>
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

        {/* FINAL SEAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">You Were Designed for a Specific Life. Let's Find It.</h2>
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              The distance between where you are and where you are meant to be is not as far as it feels. It is the distance between misalignment and alignment — and that distance can shift in a single session.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/consultation" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Spiritual Alignment Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
