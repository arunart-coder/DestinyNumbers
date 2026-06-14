import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Gem, 
  Sparkles,
  Info,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

interface CrystalRow {
  crystal: string;
  planet: string;
  heals: string;
  icon: string;
}

export default function CrystalReiki() {
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const crystalRows: CrystalRow[] = [
    { crystal: 'Ruby', planet: 'Sun', heals: 'Vitality, confidence, identity', icon: '🔴' },
    { crystal: 'Moonstone', planet: 'Moon', heals: 'Anxiety, emotions, sleep', icon: '⚪' },
    { crystal: 'Red Coral', planet: 'Mars', heals: 'Energy, courage, inflammation', icon: '🔺' },
    { crystal: 'Emerald', planet: 'Mercury', heals: 'Mental clarity, stress, nervous system', icon: '💚' },
    { crystal: 'Yellow Sapphire', planet: 'Jupiter', heals: 'Abundance, wisdom, liver health', icon: '💛' },
    { crystal: 'Clear Quartz', planet: 'Venus', heals: 'Relationships, creativity, balance', icon: '💎' },
    { crystal: 'Amethyst', planet: 'Saturn', heals: 'Karmic fatigue, chronic pain, boundaries', icon: '💜' },
    { crystal: 'Smoky Quartz', planet: 'Rahu', heals: 'Confusion, obsession, unexplained illness', icon: '🤎' },
    { crystal: 'Black Tourmaline', planet: 'Ketu', heals: 'Spiritual blocks, past life pain', icon: '🖤' }
  ];

  const sessionIncludes = [
    "Vedic birth chart and Dasha analysis before session begins",
    "Personalised crystal selection based on your planetary blueprint",
    "Full Reiki channelling across all seven chakras",
    "Sacred geometric crystal layout tailored to your chart",
    "Chakra clearing, balancing, and protective sealing",
    "Crystal recommendations to continue healing at home",
    "Written post-session report within 24 hours",
    "21-day integration follow-up check-in"
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long is a Crystal Reiki session?",
      a: "A full session takes approximately 60 to 75 minutes. This includes a pre-session review of your Vedic birth chart and current Dasha period, the custom laying of the crystals, a deep hands-on or distance Reiki channelling, and a brief grounding period of integration afterwards."
    },
    {
      q: "What should I wear to the session?",
      a: "We recommend wearing loose-fitting, comfortable clothing, ideally in light or neutral colors and made from natural fibers like cotton or linen. Since crystals are physically placed on top of your clothing along your main chakra path, bulky items, tight synthetic fits, or elaborate jewelry should be avoided."
    },
    {
      q: "How should I prepare energetically before my arrival?",
      a: "To prepare your energetic body, try to avoid heavy meals, alcohol, and caffeine for at least 3 to 4 hours before your session. Drink plenty of water to stay hydrated. We also recommend arriving 10 minutes early so you can sit in quiet reflection and set a clear, positive intention for what you wish to release and receive."
    },
    {
      q: "Do I need to do anything specific during a Distance session?",
      a: "If you are receiving Crystal Reiki from a distance, you will lie down undisturbed in a quiet, peaceful space in your home. You do not need to look at a screen; simply resting in a receptive state allows the master-level channelling and mineral frequency to align your body's subtle channels."
    },
    {
      q: "Is there any post-session care?",
      a: "Yes. After the session, we recommend drinking ample water to continue flushing physical and energetic toxins. Be gentle with yourself and allow a quiet evening if possible, as shifts in your chakras will continue to integrate and settle over the next 24 to 72 hours."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Crystal Healing · Reiki Fusion"
        title="Where Ancient Stone Meets Universal Energy"
        description="Crystals amplify. Reiki directs. Together they reach what nothing else can."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 font-display">
          <Link 
            to="/consultation" 
            className="inline-flex justify-center px-8 py-3.5 bg-[#1C3557] text-[#FFFFFF] font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
          >
            Book a Crystal Reiki Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
          </Link>
          <button 
            onClick={scrollToHowItWorks}
            className="inline-flex justify-center px-8 py-3.5 bg-white/60 hover:bg-white text-[#1C3557] border border-[#1C3557]/10 font-bold tracking-widest text-[11px] uppercase shadow-sm transition-all gap-2 items-center cursor-pointer"
          >
            How It Works
          </button>
        </div>

        {/* SECTION 1 — What Is Crystal Reiki */}
        <section ref={howItWorksRef} className="scroll-mt-24 bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Gem className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Synergy of Light</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Double the Frequency. Deeper the Healing.</h2>
            
            <div className="space-y-4 text-base text-[#1C3557]/80 leading-relaxed font-light">
              <p>
                Crystal Reiki Therapy is the fusion of two powerful healing sciences. Reiki channels universal life force energy through the practitioner into your energy body. Crystals — each carrying a specific planetary frequency — are placed on your chakra points to amplify, anchor, and extend that healing far beyond what Reiki alone can achieve.
              </p>
              <p>
                Think of Reiki as the current and crystals as the conductor. Together they clear blockages, restore depleted energy centres, and hold the healing in place long after the session ends.
              </p>
              <p>
                Every session at Destiny Numbers begins with your Vedic birth chart. Your active Dasha identifies which planetary pathways are disrupted — and which crystals carry the exact frequency needed to restore them.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Planetary Crystals & What They Heal */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-16 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Mineral Resonance Grid</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Every Stone Has a Frequency. Every Frequency Has a Purpose.</h2>
            
            <div className="overflow-hidden border border-[#1C3557]/10 rounded-xl bg-white shadow-sm mt-6 font-sans">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1C3557] text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="p-4 pl-6 font-display">Crystal</th>
                    <th className="p-4 font-display">Planet</th>
                    <th className="p-4 pr-6 font-display">Heals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C3557]/10 text-sm">
                  {crystalRows.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F5ECD7]/20 transition-all">
                      <td className="p-4 pl-6 font-semibold flex items-center gap-2">
                        <span className="text-sm shrink-0">{item.icon}</span>
                        <span className="font-display font-medium text-[#1C3557]">{item.crystal}</span>
                      </td>
                      <td className="p-4 text-xs text-[#1C3557]/90 font-medium font-display">{item.planet}</td>
                      <td className="p-4 pr-6 text-xs text-[#1C3557]/75 font-light leading-relaxed">{item.heals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex gap-3 items-center p-4 bg-[#1C3557]/5 border border-[#1C3557]/10 rounded-xl mt-4">
              <Info className="w-4 h-4 text-[#C9A84C] shrink-0" />
              <p className="text-xs text-[#1C3557]/90 italic font-medium">
                Your Dasha lord determines which crystals are activated in your session.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — The Session Experience */}
        <section className="bg-[#0D1B3E] text-white p-8 md:p-12 mb-16 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Sacred Ritual</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white">Sacred. Precise. Transformative.</h2>
            
            <div className="space-y-5 text-sm md:text-base text-white/80 leading-relaxed font-light">
              <p>
                Crystals are placed on each chakra point in a sacred geometric layout built around your birth chart. Reiki energy is then channelled through the practitioner — activating every crystal simultaneously and directing amplified healing into each layer of your energy body.
              </p>
              
              <div className="border-l-2 border-[#C9A84C] pl-4 italic">
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-black mb-1">During the session</p>
                <p className="text-xs text-white/90">
                  Most clients experience deep warmth where crystals rest, spontaneous emotional release, vivid colours behind closed eyes, and a profound heaviness gradually lifting.
                </p>
              </div>

              <div className="border-l-2 border-[#C9A84C] pl-4 italic">
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-black mb-1">After the session</p>
                <p className="text-xs text-white/90">
                  Unusual mental clarity, emotional calm, physical ease, and a quality of rest that feels genuinely restorative rather than temporary.
                </p>
              </div>

              <p className="text-xs text-white/70 pt-2">
                Some shifts arrive immediately. Others unfold quietly over the following 72 hours as your energy body integrates the healing.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — What Your Session Includes */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">The Sacred Delivery</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1 font-serif">Complete Healing. Nothing Left Out.</h2>
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

        {/* SECTION 5 — Frequently Asked Questions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Clarity & Guidance</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557] mt-1 font-serif">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#1C3557]/10 rounded-2xl overflow-hidden shadow-sm hover:border-[#C9A84C]/30 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-medium text-base md:text-lg text-[#1C3557] italic">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#1C3557]/80 font-light leading-relaxed border-t border-[#1C3557]/5 pt-4 bg-[#F5ECD7]/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL SEAL CTA */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl text-center shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <span className="inline-block p-1.5 rounded-full bg-[#1C3557]/5 text-[#C9A84C] mb-2">
              <Sparkles className="w-8 h-8 shrink-0" />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">The Right Crystal. The Right Energy. The Right Moment.</h2>
            <p className="text-base text-[#1C3557]/80 leading-relaxed font-light">
              Healing becomes exponential when two precise forces work in the same direction. Your birth chart tells us exactly what those forces are — and when to use them.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/consultation" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Book Your Crystal Reiki Session <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
