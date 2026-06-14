import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Star, 
  Heart, 
  User,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function GeminiSutras() {
  const scienceCards = [
    {
      title: "Atma Karaka — The Soul Planet",
      desc: "The planet with the highest degree in your chart becomes your Atma Karaka — the significator of your soul's deepest desire and its karmic mission in this lifetime. Every major life event traces back to this single planet.",
      icon: Star,
      type: "karaka"
    },
    {
      title: "Upapad Lagna — The Marriage Axis",
      desc: "The most precise marriage indicator in Vedic astrology. Upapad Lagna reveals the true nature of your spouse, the quality of your marital bond, and the karmic purpose of your primary relationship — far beyond what the 7th house alone can show.",
      icon: Heart,
      type: "lagna"
    },
    {
      title: "Arudha Lagna — Your Public Image",
      desc: "The difference between who you are and how the world perceives you. Arudha Lagna reveals your social reality — wealth visible to others, reputation, and how Maya (illusion) shapes your external life.",
      icon: User,
      type: "lagna"
    }
  ];

  const charaKarakas = [
    { role: "Atma Karaka", meaning: "Soul purpose" },
    { role: "Amatya Karaka", meaning: "Career and intellect" },
    { role: "Bhratru Karaka", meaning: "Siblings and courage" },
    { role: "Matru Karaka", meaning: "Mother and mental peace" },
    { role: "Putra Karaka", meaning: "Children and creativity" },
    { role: "Gnati Karaka", meaning: "Obstacles and competition" },
    { role: "Dara Karaka", meaning: "Spouse and partnerships" }
  ];

  const hiddenLayers = [
    {
      title: "Navamsa (D9) — The Soul Chart",
      desc: "Reveals true dharma and marriage destiny. It shows the strength of planets in their internal essence, acting as the final word on standard natal chart placements."
    },
    {
      title: "Dasamsa (D10) — The Career Chart",
      desc: "Reveals professional peak periods, career turns, and professional reputation with microscopic precision."
    }
  ];

  const readingCovers = [
    "Atma Karaka identification and soul mission decoding",
    "Upapad Lagna — spouse nature, marriage timing, karmic purpose",
    "Arudha Lagna — wealth perception and public destiny",
    "Chara Karaka mapping across all seven soul roles",
    "Navamsa and Dasamsa deep reading",
    "Argala analysis — what is helping and blocking you right now",
    "Dasha timing through Jaimini Chara Dasha",
    "Classical sutra application to your specific chart"
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      {/* Hero Header component styled like other service pages */}
      <HeroHeader 
        eyebrow="Advanced Vedic Astrology · Jaimini · Parashari"
        title="Beyond Sun Signs. Beyond Basic Charts. This Is Where Astrology Gets Deep."
        description="Gemini Sutras unlocks the advanced layers of your birth chart — Upapad Lagna, Atma Karaka, Arudha Padas, and the ancient aphorisms that reveal what ordinary astrology never reaches."
      />

      {/* SECTION 1 — What Are Gemini Sutras */}
      <section className="py-20 bg-white/40 border-y border-[#C9A84C]/10 mb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">THE ESOTERIC THREAD</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium italic leading-tight text-[#1C3557]">
                Ancient Aphorisms.<br />Surgical Precision.
              </h2>
              <div className="w-16 h-1 bg-[#C9A84C] mt-4"></div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <p className="text-base md:text-lg text-[#1C3557]/85 font-light leading-relaxed italic border-l-2 border-[#C9A84C] pl-6 py-1">
                A Sutra is a condensed thread of cosmic truth — one line that unlocks an entire lifetime of meaning. Gemini Sutras applies the advanced principles of both Parashari and Jaimini systems to decode the layers of your chart that most astrologers never study.
              </p>
              
              <div className="space-y-3 pt-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1C3557]/60">What makes this different:</h3>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Goes beyond Lagna, Moon, and basic Dasha reading",
                    "Applies classical sutras to your exact planetary configuration",
                    "Reads the chart from multiple Lagna points simultaneously",
                    "Integrates Jaimini Karakas with Parashari Dasha timing"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <Sparkles className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-[#1C3557]/90 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Book Your Consultation CTA section immediately following Section 1 */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20 relative z-20">
        <Link 
          to="/consultation" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#1C3557] text-[#F5ECD7] font-display font-black tracking-widest text-[11px] uppercase hover:bg-[#C9A84C] hover:text-[#1C3557] transition-all duration-300 shadow-xl"
        >
          Book Your Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* SECTION 2 — The Deep Science */}
      <section className="py-20 mb-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">THE STRUCTURAL MECHANICS</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">
            The Advanced Principles We Work With
          </h2>
          <div className="w-20 h-1 bg-[#C9A84C] mx-auto"></div>
        </div>

        {/* Major Deep Science Blocks */}
        <div className="grid md:grid-cols-3 gap-8">
          {scienceCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#1C3557]/5 p-8 flex flex-col justify-between hover:border-[#C9A84C]/40 transition-all shadow-md relative group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#F5ECD7] flex items-center justify-center group-hover:bg-[#1C3557] transition-all rounded-none">
                  <card.icon className="w-5 h-5 text-[#1C3557] group-hover:text-[#F5ECD7] transition-colors" />
                </div>
                <h3 className="text-lg font-display font-medium italic text-[#1C3557]">{card.title}</h3>
                <p className="text-xs text-[#1C3557]/70 font-light leading-relaxed italic">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chara Karakas System & Hidden Chart Layers */}
        <div className="grid md:grid-cols-2 gap-10 mt-16 pb-12 border-b border-[#C9A84C]/20">
          
          <div className="bg-[#1C3557] text-[#F5ECD7] p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C9A84C]" />
            <h3 className="text-xl font-display font-medium text-white mb-6 italic border-b border-[#F5ECD7]/10 pb-4">
              Chara Karakas — The Seven Soul Roles
            </h3>
            <div className="space-y-4">
              {charaKarakas.map((karaka, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs pb-2 border-b border-white/5 last:border-b-0">
                  <span className="font-display font-bold text-[#C9A84C]">{karaka.role}</span>
                  <span className="text-[#F5ECD7]/80 font-light italic">{karaka.meaning}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-white/50 border border-[#1C3557]/5 p-8 shadow-sm">
              <h3 className="text-lg font-display font-medium italic text-[#1C3557] mb-4">
                Navamsa & Dasamsa — Hidden Chart Layers
              </h3>
              <div className="space-y-4">
                {hiddenLayers.map((layer, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-black text-[#1C3557] uppercase tracking-wider">{layer.title}</h4>
                    <p className="text-xs text-[#1C3557]/75 font-light leading-relaxed italic">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/50 border border-[#1C3557]/5 p-8 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A84C]" />
              <h3 className="text-base font-display font-bold text-[#1C3557] mb-2">
                Argala & Virodha Argala
              </h3>
              <p className="text-xs text-[#1C3557]/80 font-light leading-relaxed italic">
                Planetary interventions — which planets are actively supporting or blocking specific houses in your chart right now, helping navigate choices with utmost clarity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — What a Gemini Sutras Reading Covers */}
      <section className="py-20 bg-[#1C3557] text-[#F5ECD7] border-y border-[#C9A84C]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A84C]/5 skew-y-1 translate-y-12" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">THE COMPREHENSIVE MAPPING</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-white leading-tight">
              One Reading. Every Layer.
            </h2>
            <p className="text-[#F5ECD7]/70 text-xs font-light max-w-sm mx-auto leading-relaxed">
              Our advanced reading is built to cover everything required for an absolute strategic mapping of your lifetime.
            </p>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {readingCovers.map((point, index) => (
              <div key={index} className="flex gap-4 items-center p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-6 h-6 rounded-none bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#C9A84C] text-[10px] font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <span className="text-xs font-display italic font-medium leading-relaxed text-[#F5ECD7]/90">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 bg-white/30 border border-[#C9A84C]/20 p-12 md:p-20 relative"
        >
          <div className="absolute inset-0 border border-white/60 m-1.5 pointer-events-none" />
          
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">THE NEXT LEVEL</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium italic text-[#1C3557] leading-tight max-w-2xl mx-auto">
              Most People Never Know This Layer of Their Chart Exists.
            </h2>
            <p className="text-sm md:text-base text-[#1C3557]/80 font-light max-w-md mx-auto italic leading-relaxed">
              One Gemini Sutras reading and you will never look at your chart the same way again.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link 
              to="/consultation" 
              className="w-full sm:w-auto px-10 py-5 bg-[#1C3557] text-[#F5ECD7] font-display font-black tracking-widest text-[11px] uppercase hover:bg-[#C9A84C] hover:text-[#1C3557] transition-all duration-300 shadow-lg text-center"
            >
              Book Your Reading
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-5 border border-[#1C3557] text-[#1C3557] font-display font-black tracking-widest text-[11px] uppercase hover:bg-[#1C3557]/5 transition-all text-center"
            >
              Ask Dr. Arun a Question
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
