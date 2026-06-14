import React from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Target, 
  Users, 
  Heart, 
  Briefcase,
  Star,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function AncientWisdom() {
  const systems = [
    {
      title: 'Maharishi Parashara',
      subtitle: 'The Father of Vedic Astrology',
      desc: 'Maharishi Parashara, one of the greatest sages of ancient India, gave us the foundational text of Vedic Astrology — Brihat Parashara Hora Shastra (BPHS).',
      points: [
        'The 12 houses and their meanings',
        'Planetary friendships, strengths, and dignities',
        'Yogas (special planetary combinations)',
        'Dashas and the divine timing of events'
      ],
      conclusion: 'Parashara’s approach helps you understand the big picture of your life — your personality, karma, strengths, and life purpose.'
    },
    {
      title: 'Nakshatra Nadi Astrology',
      subtitle: 'The Stellar Precision System',
      desc: 'While Parashara gives the broad framework, Nakshatra Nadi brings remarkable accuracy and detail by diving deep into the 27 Nakshatras (lunar mansions).',
      points: [
        'Nakshatra Lords and Sub-Lords',
        'Stellar (star-based) predictions',
        'Micro-timing of events',
        'Karmic patterns hidden in your chart'
      ],
      conclusion: 'Nakshatra Nadi is loved for its clarity, excelling in answering specific questions with high accuracy.'
    }
  ];

  const services = [
    { title: 'Horoscope Analysis', path: '/services/horoscope', icon: Star },
    { title: 'Dasha & Transit Analysis', path: '/services/dasha-transit', icon: Calendar },
    { title: 'Career Guidance', path: '/services/career-guidance', icon: Briefcase },
    { title: 'Relationship Compatibility', path: '/services/relationship-compatibility', icon: Heart },
    { title: 'Marriage Matching', path: '/services/marriage-matching', icon: Users }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Ancient Foundations"
        title="Ancient Wisdom for Modern Life"
        description="Vedic Astrology is built on the timeless teachings of ancient sages. Discover the dual pillars of power and precision."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Core Systems */}
        <div className="space-y-24 mb-24">
          {systems.map((sys, i) => (
            <section key={i} className="relative">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3">
                  <div className="sticky top-32">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-4">System {i + 1}</div>
                    <h2 className="text-3xl font-display font-medium mb-4 italic leading-tight">{sys.title}</h2>
                    <p className="text-[#C9A84C] text-sm font-black uppercase tracking-widest mb-8">{sys.subtitle}</p>
                    <BookOpen className="w-12 h-12 text-[#1C3557]/10" />
                  </div>
                </div>
                <div className="md:w-2/3 space-y-8">
                  <p className="text-lg text-[#1C3557]/80 italic leading-relaxed font-light">{sys.desc}</p>
                  <div className="grid grid-cols-1 gap-4">
                    {sys.points.map((pt, j) => (
                      <div key={j} className="flex gap-4 items-center p-4 bg-white/40 border border-[#1C3557]/5 group hover:bg-[#1C3557] transition-all">
                        <Zap className="w-4 h-4 text-[#C9A84C] group-hover:scale-110 transition-transform" />
                        <span className="text-sm italic font-medium group-hover:text-white transition-colors">{pt}</span>
                      </div>
                    ))}
                  </div>
                  <p className="p-8 border-l-2 border-[#C9A84C] bg-white/20 text-[#1C3557]/70 italic text-sm leading-relaxed">
                    {sys.conclusion}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Benefits Section */}
        <section className="mb-24 py-20 bg-[#1C3557] text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display italic text-center mb-16 text-white">The Power of Both <span className="text-[#C9A84C]">Systems</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: 'Global Vision', desc: 'Clear understanding of your life path and core purpose.' },
                { title: 'Surgical Precision', desc: 'Accurate timing of major and minor life events.' },
                { title: 'Strategic Action', desc: 'Practical guidance for career, relationships, and decisions.' },
                { title: 'Karmic Clarity', desc: 'Identification of hidden strengths, challenges, and remedies.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A84C] shrink-0" />
                  <div className="space-y-2">
                    <h4 className="text-xl font-display font-medium text-[#C9A84C]">{benefit.title}</h4>
                    <p className="text-white/60 text-sm italic font-light leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services explored */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-medium mb-12 text-center italic">Apply Ancient <span className="text-[#C9A84C]">Knowledge</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <Link 
                key={i} 
                to={service.path} 
                className="group flex items-center justify-between p-6 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F5ECD7] flex items-center justify-center group-hover:bg-[#C9A84C] transition-all">
                    <service.icon className="w-5 h-5 text-[#1C3557] group-hover:text-white" />
                  </div>
                  <span className="font-display font-medium italic">{service.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-2 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center bg-[#1C3557]/5 p-12 md:p-20 border border-[#C9A84C]/20">
          <Sparkles className="w-12 h-12 text-[#C9A84C] mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-display mb-8 italic">Ready to discover your <span className="text-[#C9A84C]">destiny?</span></h2>
          <p className="text-lg text-[#1C3557]/60 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            "Vedic knowledge isn't just about reading the stars; it's about aligning your actions with the cosmic rhythm."
          </p>
          <Link to="/contact" className="inline-flex px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all gap-4">
            Consult our expert astrologer <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-[#C9A84C]">Ancient Knowledge. Modern Clarity.</div>
        </footer>
      </div>
    </div>
  );
}
