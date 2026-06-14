import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Coins, 
  Users, 
  Compass, 
  Calendar, 
  Plus, 
  Minus, 
  Briefcase, 
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function BusinessNameNumerology() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const factors = [
    {
      icon: Compass,
      title: "The Founder's Birth Chart",
      desc: "Your personal numbers — Life Path, Destiny, and Soul Urge — form the foundation. Your business name must harmonise with who you are at your core, or the misalignment will surface as friction over time."
    },
    {
      icon: Users,
      title: "Partner & Key Stakeholder Compatibility",
      desc: "If you are building with co-founders or key partners, their numbers matter too. We ensure the business name creates a numerologically compatible field for all key players — not just one."
    },
    {
      icon: Coins,
      title: "Planetary Wealth Indicators",
      desc: "Wealth-amplifying planets like Jupiter and Venus, and their placements in your birth chart, directly influence which numbers and letter combinations will attract financial growth into your business."
    },
    {
      icon: Briefcase,
      title: "The Nature of Your Business",
      desc: "A technology startup, a luxury brand, a healthcare company, and a creative agency each operate in energetically distinct spaces. The right name for one will be wrong for another."
    },
    {
      icon: Calendar,
      title: "Current Planetary Transits",
      desc: "The timing of a business launch matters. We consider the transits you are currently experiencing to ensure you are naming and launching in a window that supports momentum, not resistance."
    }
  ];

  const situations = [
    {
      num: "01",
      title: "You are starting a new business",
      desc: "This is the most powerful moment to act. The name has not yet been activated — you have complete freedom to get it right from day one. Do not leave one of your most important business decisions to chance or aesthetics alone."
    },
    {
      num: "02",
      title: "Your existing business has been struggling",
      desc: "If growth has plateaued, cash flow feels tight, or the business does not seem to gain the traction it deserves despite genuine effort — the name may be the silent culprit. A numerological review often reveals misalignments which, once corrected, unlock surprising shifts."
    },
    {
      num: "03",
      title: "You are rebranding or expanding",
      desc: "A new chapter deserves a name that supports the next level — not the last one. Whether you are entering a new market, pivoting your model, or scaling operations, a name audit and realignment ensures the new phase starts on the strongest possible footing."
    }
  ];

  const takeaways = [
    {
      title: "Full Numerological Audit",
      desc: "Every letter, every number, and every planetary association — analysed in the context of your goals, birth chart, and business domain."
    },
    {
      title: "Shortlisted Name Options",
      desc: "We do not hand you a list of random suggestions. We present a curated set of names that are numerologically strong, energetically aligned, and commercially viable."
    },
    {
      title: "Founder & Partner Compatibility Report",
      desc: "A clear picture of how the proposed name interacts with each key person in the business, and whether it creates harmony or tension in the founding team's energy field."
    },
    {
      title: "Planetary Wealth Alignment",
      desc: "Which numbers activate your wealth-attracting planets and how the recommended name positions your business in that energy field."
    },
    {
      title: "Launch Timing Guidance",
      desc: "Our team identifies auspicious dates to officially register or launch your business under the new name — so the activation happens at the perfect cosmic moment."
    },
    {
      title: "One-on-One Consultation",
      desc: "Every report is accompanied by a personal session where our expert walks you through the findings, answers every question, and ensures complete clarity."
    }
  ];

  const faqs = [
    {
      q: "Can I keep my existing business name and just make small changes?",
      a: "Yes. Sometimes a minor spelling adjustment — adding or removing a letter, changing a suffix — is enough to shift the vibrational frequency significantly. We explore all options before recommending a full rebrand."
    },
    {
      q: "Does the registered name or the trading name matter more?",
      a: "Both matter, but in different ways. We analyse both and advise on which one needs to carry the primary numerological alignment for maximum impact."
    },
    {
      q: "What if my business has multiple co-founders with conflicting numbers?",
      a: "This is common, and it is precisely why our analysis covers all key stakeholders. We find a name that sits in a harmonious zone for the collective, not just one individual."
    },
    {
      q: "How soon can I see results after changing my business name?",
      a: "Many clients report noticeable shifts — new inquiries, improved team dynamics, unexpected opportunities — within the first few weeks of activating a corrected name. Sustained growth typically builds over the following months as the new vibration compounds."
    },
    {
      q: "Is this only for new businesses?",
      a: "Not at all. Some of our most impactful consultations have been with established businesses that hit a ceiling and needed to understand why. A name audit at any stage can open doors that have been quietly closed."
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Commercial Prosperity"
        title="Business Name Numerology"
        description="The Name You Choose for Your Business Will Either Open Doors or Close Them. Ensure its numerical vibration works powerfully in your favour."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-base text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto">
            Most entrepreneurs spend months perfecting their product, obsessing over branding, design, pricing, and marketing. But they name their business in an afternoon — and never think about it again. 
          </p>
          <p className="text-base text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto mt-4">
            That name goes on every invoice, every agreement, every pitch deck, and every customer's lips. It carries a frequency. A numerical vibration. And that vibration is either working powerfully in your favour — or silently draining the momentum you are working so hard to build.
          </p>
          <div className="mt-8 flex justify-center">
            <Link 
              to="/contact" 
              className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
            >
              Book Your Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>
        </div>

        {/* Intro Section: Invisible Architecture */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Building2 className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">The Invisible Architecture of Every Successful Business</h2>
            <p className="text-[#1C3557]/80 leading-relaxed font-light">
              Every letter in your business name has a numerical value. Every numerical value carries a planetary energy — the disciplined drive of Saturn, the expansive abundance of Jupiter, the magnetic charm of Venus, the bold leadership of the Sun.
            </p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light">
              When these energies align with the birth charts of the business founders and the nature of the venture itself, something powerful happens. Growth feels less forced. The right clients find you. Partnerships form naturally. Revenue compounds.
            </p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light">
              When they do not align, you will feel it — in the constant uphill effort, in deals that fall apart at the last moment, in the sense that you are working twice as hard as competitors for half the results.
            </p>
            <p className="text-sm text-[#1C3557]/80 italic font-medium border-l-2 border-[#C9A84C]/50 pl-4 py-1 mt-6">
              The difference, very often, is not strategy. It is vibration. Business Name Numerology at Destiny Numbers helps you ensure it is the former.
            </p>
          </div>
        </section>

        {/* Brand Auditor CTA Block */}
        <div className="mb-20 text-center bg-white/60 p-8 rounded-2xl border border-[#C9A84C]/20 relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="text-lg font-display font-medium italic text-[#1C3557]">Analyze Your Current Brand Vibration</h3>
            <p className="text-xs text-[#1C3557]/70 font-light italic">
              Want to see how your existing business name stands? Use our complimentary Brand Auditor tool to instantly check the vibrational alignment of your brand.
            </p>
            <div className="pt-2">
              <Link 
                to="/brand-auditor" 
                className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
              >
                Access Brand Auditor <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </div>

        {/* What Business Name Numerology Actually Does */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Scientific Alignment Protocol</div>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">What Business Name Numerology Actually Does</h2>
          </div>
          <p className="text-sm text-[#1C3557]/70 leading-relaxed font-light italic text-center max-w-2xl mx-auto mb-10">
            This is not about picking a "lucky sounding" name. It is a structured, multi-layered analysis that considers:
          </p>

          <div className="space-y-6">
            {factors.map((f, i) => {
              const IconComp = f.icon;
              return (
                <div key={i} className="flex gap-5 p-6 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#F5ECD7] flex items-center justify-center rounded-lg text-[#1C3557] shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-medium text-[#1C3557] mb-2 italic">{f.title}</h4>
                    <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Three Situations Where This Changes Everything */}
        <section className="mb-20 bg-[#1C3557] text-white rounded-2xl p-8 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Strategic Milestones</span>
              <h2 className="text-2xl md:text-3xl font-display italic text-white mt-1">Three Situations Where This Changes Everything</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {situations.map((sit, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                  <div className="text-2xl font-display text-[#C9A84C]/40 font-bold italic">{sit.num}</div>
                  <h4 className="font-display font-medium text-[#C9A84C] italic text-sm">{sit.title}</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed italic">{sit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Walk Away With */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Consultation Outputs</div>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">What You Walk Away With</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {takeaways.map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-display font-medium text-[#1C3557] italic">{item.title}</h4>
                  <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Iconic Success */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <Lightbulb className="w-10 h-10 text-[#C9A84C] mx-auto mb-2" />
            <h2 className="text-2xl font-display font-medium italic text-[#1C3557]">The Numbers Behind Iconic Business Success</h2>
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light italic">
              History's most enduring brands share a rarely discussed trait — their names carry numerological frequencies aligned with expansion, trust, and wealth generation. This is not coincidence. Many of the world's most successful entrepreneurs — from ancient trading dynasties to modern tech founders — have consulted numerologists at pivotal moments in their business journey.
            </p>
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light italic pt-2">
              The difference today is access. What was once reserved for the elite is now available to any entrepreneur serious about building something that lasts.
            </p>
          </div>
        </section>

        {/* Why Destiny Numbers? */}
        <section className="mb-20 text-center space-y-6">
          <div className="w-12 h-1 bg-[#C9A84C] mx-auto mb-4"></div>
          <h2 className="text-3xl font-display font-medium italic text-[#1C3557]">Why Destiny Numbers?</h2>
          <p className="text-[#1C3557]/85 text-base leading-relaxed font-light italic max-w-2xl mx-auto">
            We are Bengaluru's most trusted numerology and astrology practice — combining classical Vedic principles with rigorous research and real-world application.
          </p>
          <p className="text-[#1C3557]/85 text-base leading-relaxed font-light italic max-w-2xl mx-auto">
            We do not offer generic online reports. Every Business Name Numerology consultation is personal, detailed, and deeply considered. Our practitioners have guided hundreds of entrepreneurs, startups, family businesses, and corporate teams toward names that genuinely perform — names that attract, names that endure, names that grow.
          </p>
          <p className="text-[#1C3557]/85 text-base leading-relaxed font-light italic max-w-2xl mx-auto">
            We operate at the intersection of ancient science and modern ambition. And we believe that when your business name is right, everything else gets a little easier.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-20 bg-white/20 border border-[#1C3557]/5 p-8 md:p-12 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#1C3557]/10 pb-4">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-left py-2 font-display font-medium text-[#1C3557] hover:text-[#C9A84C] transition-colors focus:outline-none"
                >
                  <span className="text-sm italic">{faq.q}</span>
                  {openFaq === idx ? <Minus className="w-4 h-4 text-[#C9A84C] shrink-0 ml-2" /> : <Plus className="w-4 h-4 text-[#C9A84C] shrink-0 ml-2" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic pt-2 pl-1">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center bg-[#1C3557]/5 p-12 md:p-20 border border-[#C9A84C]/20 rounded-2xl relative">
          <Sparkles className="w-12 h-12 text-[#C9A84C] mx-auto mb-8 animate-pulse" />
          <h2 className="text-2xl md:text-5xl font-display mb-8 italic">Your Business Deserves a Name That <span className="text-[#C9A84C]">Works as Hard as You Do</span></h2>
          <p className="text-lg text-[#1C3557]/70 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            You have invested your time, your money, and your belief into building something meaningful. Give it a name that honours that investment — a name that carries the right energy into every room it enters, every deal it touches, and every customer it reaches.
          </p>
          <div className="space-y-4">
            <Link 
              to="/contact" 
              className="inline-flex px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all gap-4 animate-bounce"
            >
              Book Your Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="pt-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#C9A84C]">The consultation takes a few hours. The impact lasts the life of your business.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
