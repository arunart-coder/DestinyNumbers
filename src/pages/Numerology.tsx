import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Users, 
  Star,
  Heart,
  Briefcase,
  Smartphone,
  Check,
  Zap,
  AlignLeft,
  CircleCheck,
  Scale,
  Type
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function Numerology() {
  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557]">
      <HeroHeader 
        eyebrow="Stellar Frequencies"
        title="Discover the Power of Numbers"
        description="Vedic • Pythagorean • Lo Shu Numerology. Unlock your destiny, success, and hidden potential."
      />

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <div className="mb-12">
          <a 
            href="#services" 
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#C9A84C] hover:bg-[#C9A84C]/90 text-[#1C3557] font-display font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Explore Our Calculators <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 italic">What is <span className="text-[#C9A84C]">Numerology?</span></h2>
            <p className="text-lg md:text-xl text-[#1C3557]/70 leading-relaxed font-display italic">
              Numerology is the ancient science that reveals how numbers influence your life, personality, 
              career, relationships, and destiny. We combine powerful systems from India, Greece, and China 
              to give you deep, accurate, and practical guidance.
            </p>
            <div className="mt-12 w-20 h-1 bg-[#C9A84C] mx-auto" />
          </div>
        </div>
      </section>

      {/* Three Things Section (ONLY PART KEPT FROM OLD PAGE AS REQUESTED) */}
      <section className="py-16 bg-[#1C3557] text-[#F5ECD7] border-y border-[#C9A84C]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A84C]/5 skew-y-3 translate-y-20" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mb-10 mx-auto">
            <div className="mb-4">
              <h2 className="text-2xl md:text-4xl font-display font-medium mb-4 italic leading-tight text-white">
                Three things your numbers reveal <span className="text-[#C9A84C]">that nothing else can</span>
              </h2>
              <div className="w-16 h-1 bg-[#C9A84C] mx-auto"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center text-left max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-base font-display italic text-[#F5ECD7]/70 leading-relaxed"
            >
              <p>Your birth date holds your life path — the purpose you came here to fulfil and the career direction that truly fits you.</p>
              <p>Your name carries a vibration that either amplifies your potential or quietly suppresses it every single day.</p>
              <p>And the numbers between you and the people closest to you explain more about your relationships than years of conversation ever could.</p>
            </motion.div>
            <div className="flex flex-col gap-4 max-w-xs w-full mx-auto md:mr-0">
              <Link 
                to="/contact"
                className="w-full py-4 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-[0.2em] text-[10px] text-center hover:brightness-110 transition-all uppercase shadow-md"
              >
                Talk to an expert
              </Link>
              <Link 
                to="/consultation"
                className="w-full py-4 border border-[#C9A84C] text-[#C9A84C] font-display font-black tracking-[0.2em] text-[10px] text-center hover:bg-[#C9A84C]/10 transition-all uppercase"
              >
                Book your session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Systems */}
      <section className="py-24 bg-[#F5ECD7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-center mb-16 italic">Our Three Powerful <span className="text-[#C9A84C]">Systems</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vedic */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 border border-[#1C3557]/5 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-[#F5ECD7] text-[#C9A84C] flex items-center justify-center mb-8">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display italic font-medium mb-4">Vedic Numerology</h3>
              <p className="text-[#1C3557]/60 leading-relaxed font-display italic">Ancient Indian system connected to planets and karma. Ideal for life path, lucky numbers, and spiritual growth.</p>
            </motion.div>

            {/* Pythagorean */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 border border-[#1C3557]/5 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-[#F5ECD7] text-[#C9A84C] flex items-center justify-center mb-8">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display italic font-medium mb-4">Pythagorean</h3>
              <p className="text-[#1C3557]/60 leading-relaxed font-display italic">Western system focused on name and birth date vibrations. Excellent for personality and life purpose analysis.</p>
            </motion.div>

            {/* Lo Shu */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 border border-[#1C3557]/5 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-[#F5ECD7] text-[#C9A84C] flex items-center justify-center mb-8">
                <AlignLeft className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display italic font-medium mb-4">Lo Shu Grid</h3>
              <p className="text-[#1C3557]/60 leading-relaxed font-display italic">Chinese magic square system. Powerful for luck cycles, missing numbers, and practical remedies.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services / Calculators */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-4 italic">Our Numerology <span className="text-[#C9A84C]">Calculators</span></h2>
            <p className="text-[#1C3557]/60 font-display italic text-lg">Choose the tool that resonates with your current needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Decode Your Date of Birth', 
                desc: 'Get your complete numeric blueprint — Life Path, Destiny, Soul Urge, & more.',
                icon: Star,
                path: '/calculator'
              },
              { 
                title: 'Compatibility Analysis', 
                desc: 'Check harmony in love, marriage, business partnerships & friendships through numbers.',
                icon: Heart,
                path: '/compatibility'
              },
              { 
                title: "Decode Your Heart's Secret", 
                desc: 'Detailed analysis of your name vibrations and how they shape your life.',
                icon: Type,
                path: '/calculator'
              },
              { 
                title: 'Decode Your Name', 
                desc: 'Ancient Babylonian system known for its accuracy in name energy analysis.',
                icon: AlignLeft,
                path: '/calculator'
              },
              { 
                title: "Decode Your Mobile's Vibration", 
                desc: 'Find out if your phone number brings luck, success, and positive opportunities.',
                icon: Smartphone,
                path: '/analyser/mobile'
              },
              { 
                title: 'Brand Auditor', 
                desc: 'Check the numerology strength of your brand, company, or product name.',
                icon: Briefcase,
                path: '/brand-auditor'
              }
            ].map((tool, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-[#F5ECD7]/20 border border-[#1C3557]/5 hover:border-[#C9A84C]/40 transition-all flex flex-col h-full"
              >
                <tool.icon className="w-10 h-10 text-[#C9A84C] mb-8" />
                <h3 className="text-2xl font-display italic font-medium mb-4">{tool.title}</h3>
                <p className="text-[#1C3557]/60 mb-8 font-display italic text-sm leading-relaxed flex-grow">{tool.desc}</p>
                {tool.path.startsWith('http') ? (
                  <a 
                    href={tool.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1C3557] font-display font-black text-[10px] uppercase tracking-widest group-hover:text-[#C9A84C] transition-colors"
                  >
                    Calculate Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                ) : (
                  <Link 
                    to={tool.path} 
                    className="inline-flex items-center gap-2 text-[#1C3557] font-display font-black text-[10px] uppercase tracking-widest group-hover:text-[#C9A84C] transition-colors"
                  >
                    Calculate Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#1C3557] text-[#F5ECD7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-16 italic text-white">Why People Trust Our <span className="text-[#C9A84C]">Numerology</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center mx-auto mb-6 text-[#C9A84C]">
                <CircleCheck className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display italic mb-4 text-white">Accurate & Multi-System</h4>
              <p className="text-[#F5ECD7]/40 font-display text-sm leading-relaxed italic">Vedic + Pythagorean + Lo Shu + Chaldean integration for 360° precision.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center mx-auto mb-6 text-[#C9A84C]">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display italic mb-4 text-white">Practical Guidance</h4>
              <p className="text-[#F5ECD7]/40 font-display text-sm leading-relaxed italic">Lucky numbers, specific remedies, and actionable advice that fits modern life.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center mx-auto mb-6 text-[#C9A84C]">
                <Users className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display italic mb-4 text-white">Personalized Reports</h4>
              <p className="text-[#F5ECD7]/40 font-display text-sm leading-relaxed italic">Clear, detailed, and easy to understand reports built around your unique energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#C9A84C] text-[#1C3557]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-tight italic">Ready to Decode Your <span className="text-white">Numbers?</span></h2>
          <p className="text-xl md:text-2xl mb-12 font-display italic opacity-80">Get personalized insights that can transform your life</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/consultation" 
              className="inline-block px-14 py-6 bg-[#1C3557] text-white font-display font-black text-xs uppercase tracking-[0.3em] shadow-2xl"
            >
              Get Your Full Numerology Reading
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Simplified Footer Placeholder as requested */}
      <footer className="bg-[#1C3557] text-[#F5ECD7]/40 py-12 border-t border-white/5 font-display italic text-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4">© 2026 Destiny Numbers | Ancient Wisdom • Modern Clarity</p>
          <p className="text-xs opacity-50">For educational and guidance purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
