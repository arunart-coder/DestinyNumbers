import { motion } from 'motion/react';
import { Shield, Zap, Sparkles } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export default function AboutPage() {
  const { data, loading } = useCMS();
  const { bio } = data;

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-bg flex items-center justify-center">
        <Sparkles className="w-8 h-8 animate-spin text-warm-accent" />
      </div>
    );
  }

  return (
    <div className="bg-warm-bg min-h-screen">
      {/* Editorial Header */}
      <section 
        className="relative w-full overflow-hidden flex items-center justify-center text-center bg-[#0D1B3E] shadow-md px-4 pt-[95px] md:pt-[105px] pb-4"
        style={{ 
          height: '190px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mx-auto relative z-10 w-full -mt-[38px]"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-warm-accent block mb-1">The Journey of Resonance</span>
          <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white leading-none mb-2">
            Pioneering Analytical <em className="text-warm-accent italic">Occultism</em>
          </h1>
          <p className="text-[12px] md:text-[13px] text-[#FAF7F0] opacity-90 leading-tight italic max-w-xl mx-auto">
             "{bio.description}"
          </p>
        </motion.div>
      </section>

      {/* Main Story Section */}
      <main className="py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl border-8 border-white group">
                <img 
                  src={bio.image} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  alt={bio.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-warm-accent text-white p-8 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-heading font-bold mb-1 italic">15+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Years of Wisdom</p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-10">
              <h2 className="font-heading text-3xl text-warm-text-primary">Our Philosophy</h2>
              <div className="space-y-6 text-warm-text-secondary leading-relaxed">
                <p>
                  At Destiny Numbers, we believe destiny is pre-defined through cosmic patterns, planetary movements, and numerical vibrations. While life follows a destined path, awareness helps us recognize the right timing, make better decisions, and align ourselves with opportunities.
                </p>
                <p>
                  Our approach combines Numerology, Astrology, Nakshatra Nadi, Bhrigu Nandi Nadi, and Vastu principles to identify these patterns with precision. Rather than changing destiny, we help individuals understand their karmic cycles.
                </p>
                <p>
                  We view occult sciences as structured systems of energy, timing, and vibration — where every name, number, planet, and direction carries influence. By understanding these hidden patterns, individuals can align with their natural potential.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-warm-border">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-warm-accent shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-warm-text-primary mb-1">Precision</h4>
                    <p className="text-xs text-warm-text-secondary leading-relaxed">Degree-based analysis that removes the guesswork from forecasting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-warm-accent shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-warm-text-primary mb-1">Modern</h4>
                    <p className="text-xs text-warm-text-secondary leading-relaxed">Applying ancient laws to 21st-century commercial challenges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="bg-warm-bg-warm py-24 border-y border-warm-border">
        <div className="site-container grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="font-heading text-5xl text-warm-accent mb-2">15k+</p>
            <p className="text-[10px] font-bold text-warm-text-muted uppercase tracking-widest leading-relaxed">Alignments Performed</p>
          </div>
          <div>
            <p className="font-heading text-5xl text-warm-accent mb-2">20+</p>
            <p className="text-[10px] font-bold text-warm-text-muted uppercase tracking-widest leading-relaxed">Global Cities Served</p>
          </div>
          <div>
            <p className="font-heading text-5xl text-warm-accent mb-2">500+</p>
            <p className="text-[10px] font-bold text-warm-text-muted uppercase tracking-widest leading-relaxed">Corporate Brands Audited</p>
          </div>
          <div>
            <p className="font-heading text-5xl text-warm-accent mb-2">100%</p>
            <p className="text-[10px] font-bold text-warm-text-muted uppercase tracking-widest leading-relaxed">Logic & Science Based</p>
          </div>
        </div>
      </section>

      {/* Secondary Story Section */}
      <section className="py-24">
        <div className="site-container max-w-[800px]">
          <h2 className="font-heading text-3xl text-warm-text-primary mb-12 text-center">A Modern Approach to Ancient Insight</h2>
          <div className="prose-warm">
            <p>
              Dr. Arun Poovaiah's journey into the divine sciences began with a simple question: 
              <em> "Why do some people succeed effortlessly while others struggle despite having the same talent?"</em>
            </p>
            <p>
              The answer led him to the hidden world of vibrations — the subtle frequencies emitted by numbers, planets, and even the names of companies. He realized that when a person's personal data is in sync with their environmental data, success is not just possible; it is inevitable.
            </p>
            <p>
              Today, Arun works with international clients ranging from celebrity entrepreneurs to established family businesses, helping them "retune" their brand and personal frequencies for maximum resonance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
