import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Zap, 
  Compass, 
  Layers, 
  Eye, 
  Clock, 
  Calendar, 
  CircleHelp,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function Tarot() {
  const benefits = [
    { title: 'Clarity in confusion', desc: "Get clear answers when you're feeling lost in life's complex transitions.", icon: Eye },
    { title: 'Love & relationships', desc: 'Understand emotions, timing, and deep soul connections with clarity.', icon: Heart },
    { title: 'Life direction', desc: 'Discover your true path, purpose, and the immediate next steps to take.', icon: Compass }
  ];

  const readings = [
    { 
      title: 'One Question Reading', 
      desc: 'Focused and direct answer to your most important question.',
      icon: CircleHelp,
      path: '/consultation?service=tarot-guidance'
    },
    { 
      title: 'Celtic Cross Spread', 
      desc: 'In-depth 10-card reading covering past, present, and future possibilities.',
      icon: Layers,
      path: '/consultation?service=tarot-guidance'
    },
    { 
      title: 'Love & Relationship Tarot', 
      desc: 'Understand your love life, soulmate energy, and romantic future.',
      icon: Flame,
      path: '/consultation?service=tarot-guidance'
    },
    { 
      title: 'Career & Life Path', 
      desc: 'Expert guidance on career moves, purpose, and success timing.',
      icon: Zap,
      path: '/consultation?service=tarot-guidance'
    },
    { 
      title: 'Yearly Forecast', 
      desc: 'What the next 12 months hold for you across all areas of life.',
      icon: Calendar,
      path: '/consultation?service=tarot-guidance'
    },
    { 
      title: 'Personal Tarot Guidance', 
      desc: 'Full intuitive reading tailored to your specific life situation.',
      icon: Sparkles,
      path: '/consultation?service=tarot-guidance'
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] selection:bg-[#C9A84C]/30">
      <HeroHeader 
        eyebrow="Sacred Intuition"
        title="Unlock the Wisdom of the Cards"
        description="Clear guidance, deep insights, and answers from the universe to guide your path."
      />

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <div className="mb-12">
          <Link 
            to="/consultation?service=tarot-guidance" 
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#C9A84C] hover:bg-[#C9A84C]/90 text-[#1C3557] font-display font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Get Your Tarot Guidance <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 italic">What is <span className="text-[#C9A84C]">Tarot?</span></h2>
            <p className="text-lg md:text-xl text-[#1C3557]/70 leading-relaxed font-display italic">
              Tarot is a powerful ancient tool that uses 78 symbolic cards to reveal hidden truths, 
              current energies, and future possibilities. It connects you with your intuition and 
              offers honest guidance for love, career, and personal growth.
            </p>
            <div className="mt-12 w-20 h-1 bg-[#C9A84C] mx-auto" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#F5ECD7] border-y border-[#1C3557]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-center mb-16 italic">What Tarot <span className="text-[#C9A84C]">Can Reveal</span></h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border border-[#1C3557]/5 shadow-sm text-center group hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-[#F5ECD7] text-[#C9A84C] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display italic font-medium mb-4">{benefit.title}</h4>
                <p className="text-[#1C3557]/60 font-display text-sm leading-relaxed italic">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-4 italic">Our Tarot <span className="text-[#C9A84C]">Guidance</span></h2>
            <p className="text-[#1C3557]/60 font-display italic text-lg">Choose the guidance you need at this moment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {readings.map((reading, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-[#F5ECD7]/20 border border-[#1C3557]/5 hover:border-[#C9A84C]/40 transition-all flex flex-col h-full"
              >
                <div className="mb-8 p-3 bg-white w-fit border border-[#1C3557]/5 group-hover:bg-[#C9A84C] transition-colors">
                  <reading.icon className="w-6 h-6 text-[#C9A84C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display italic font-medium mb-4">{reading.title}</h3>
                <p className="text-[#1C3557]/60 mb-8 font-display italic text-sm leading-relaxed flex-grow">{reading.desc}</p>
                <Link 
                  to={reading.path}
                  className="inline-flex items-center gap-2 text-[#1C3557] font-display font-black text-[10px] uppercase tracking-widest group-hover:text-[#C9A84C] transition-colors"
                >
                  Begin Guidance <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#1C3557] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-tight italic">
              The cards are <span className="text-[#C9A84C]">ready to speak</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-display italic opacity-80 max-w-xl mx-auto">
              Are you ready to listen to the messages the universe has for you?
            </p>
            <Link 
              to="/consultation?service=tarot-guidance" 
              className="inline-block px-14 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-all"
            >
              Start Your Guidance Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C3557] text-[#F5ECD7]/40 py-12 border-t border-white/5 font-display italic text-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 Tarot Insights | Sacred guidance with clarity & compassion</p>
        </div>
      </footer>
    </div>
  );
}
