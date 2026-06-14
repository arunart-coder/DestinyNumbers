import React from 'react';
import { motion } from 'motion/react';
import { 
  PenTool, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Fingerprint, 
  Clock, 
  Briefcase, 
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function SignatureAnalysis() {
  const shifts = [
    {
      title: 'A renewed sense of confidence and personal authority',
      desc: 'Reclaim your personal space and establish strong energetic boundaries in your life.'
    },
    {
      title: 'Improved clarity in decision-making',
      desc: 'Eliminate confusion loops in your written expression to clear up your thoughts.'
    },
    {
      title: 'More positive responses from others',
      desc: 'Notice a shift in perception during business meetings, intense negotiations, and interviews.'
    },
    {
      title: 'A tangible shift in financial conversations',
      desc: 'Align your money vibration and authority projections in critical documentation.'
    },
    {
      title: 'Stronger sense of identity and direction',
      desc: 'Command your path with a clean, dynamic, and forward-slanted execution of your name.'
    }
  ];

  const sessionIncludes = [
    {
      icon: FileText,
      title: 'Detailed Signature Report',
      desc: 'A comprehensive written breakdown of every element of your current signature — what it reveals, what it is projecting, and where it is misaligned with your life goals.'
    },
    {
      icon: Layers,
      title: 'Numerology Cross-Analysis',
      desc: 'Your signature is cross-evaluated against your full birth chart and birth name numerology profile to identify gaps and opportunities specific to your unique numbers.'
    },
    {
      icon: PenTool,
      title: 'Personalised New Signature Design',
      desc: 'Our expert works with you step-by-step to craft a corrected or entirely new signature — one that is natural to write, aligned with your energy, and powerfully representative of who you are becoming.'
    },
    {
      icon: Briefcase,
      title: 'Practice & Transition Guidance',
      desc: 'Changing your professional identity marker takes intentional practice. We guide you step-by-step on how to adopt your new signature smoothly, so it becomes second nature within weeks.'
    },
    {
      icon: Clock,
      title: 'Follow-up Support',
      desc: 'A dedicated follow-up check-in with our practitioner to ensure the new signature flow feels completely natural and is being activated consistently in your daily life.'
    }
  ];

  const targetUsers = [
    'You feel your career or finances have been stagnant despite genuine effort and talent.',
    'You are about to start a new business venture, sign major contracts, or step into a major new chapter of life.',
    'You sense a deep disconnect between who you truly are and how others perceive you in professional settings.',
    'You have changed significantly as a person, but your signature still reflects an older, less developed version of you.',
    'You simply want every energetic and subconscious tool available working powerfully in your favour.'
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Identity Alignment"
        title="Signature Analysis"
        description="Your name has power. Your signature is a neural frequency that compounds daily. A balanced graphology shift can unlock dormant potential."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-base text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto">
            Your signature is a projection of how you view yourself and how you want the world to perceive you. A Vastu-aligned and numerologically balanced graphology shift can unlock dormant potential.
          </p>
          <div className="mt-8 flex justify-center">
            <Link 
              to="/contact" 
              className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
            >
              Book a Consultation <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>
        </div>

        {/* Section 1: What Changes When You Fix Your Signature? */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Fingerprint className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-medium italic">What Changes When You Fix Your Signature?</h2>
            <p className="text-[#1C3557]/80 leading-relaxed font-light">
              Clients who adopt a Vastu-aligned, numerologically tuned signature often report shifts within weeks:
            </p>
            <div className="space-y-4 pt-2">
              {shifts.map((s, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/60 border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-medium text-[#1C3557] italic text-base">{s.title}</h4>
                    <p className="text-sm text-[#1C3557]/70 mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base text-[#1C3557]/80 italic font-medium border-l-2 border-[#C9A84C]/50 pl-4 py-1 mt-6">
              Your signature is something you repeat every single day. Even a small correction compounds into significant change over time.
            </p>
          </div>
        </section>

        {/* Section 2: What Your Session Includes */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Comprehensive Experience</div>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">What Your Session Includes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sessionIncludes.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="p-6 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/30 transition-all rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 bg-[#F5ECD7] flex items-center justify-center rounded-lg mb-4 text-[#1C3557]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-display font-medium text-[#1C3557] mb-2 italic">{item.title}</h4>
                    <p className="text-sm text-[#1C3557]/70 leading-relaxed font-light italic">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Who Should Book a Signature Analysis? */}
        <section className="mb-20 bg-[#1C3557] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">Diagnostic Checklist</span>
              <h2 className="text-2xl md:text-3xl font-display italic text-white mt-1 mb-8">Who Should Book a Signature Analysis?</h2>
            </div>
            <div className="space-y-4 text-left">
              {targetUsers.map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-[#C9A84C] font-bold text-base shrink-0">0{i+1}.</span>
                  <span className="text-base text-white/90 font-light leading-relaxed italic">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Why Destiny Numbers? */}
        <section className="mb-20 text-center space-y-6">
          <div className="w-12 h-1 bg-[#C9A84C] mx-auto mb-4"></div>
          <h2 className="text-3xl font-display font-medium italic text-[#1C3557]">Why Destiny Numbers?</h2>
          <p className="text-[#1C3557]/85 text-base leading-relaxed font-light italic max-w-2xl mx-auto">
            We are not a generic online service. We are a Bengaluru-based team of expert practitioners who combine decades of experience in numerology, graphology, Vastu, and energy science into every consultation.
          </p>
          <p className="text-[#1C3557]/85 text-base leading-relaxed font-light italic max-w-2xl mx-auto">
            Every analysis is personal. Every recommendation is tested. Every session is a genuine investment in your life's trajectory.
          </p>
          <p className="text-[#1C3557]/85 text-base leading-relaxed font-light italic max-w-2xl mx-auto">
            Our clients come to us when they are serious about change — and they leave with clarity, direction, and a custom-tailored signature that finally operates in synchrony with their higher path.
          </p>
        </section>

        {/* CTA Footer Form Container */}
        <footer className="text-center bg-[#1C3557]/5 p-12 md:p-20 border border-[#C9A84C]/20 rounded-2xl relative">
          <Sparkles className="w-12 h-12 text-[#C9A84C] mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-display mb-8 italic">Ready to Redesign Your <span className="text-[#C9A84C]">Signature?</span></h2>
          <p className="text-lg text-[#1C3557]/70 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            Book a Signature Analysis session today and take one of the most personal, precise steps you can toward the life you are building.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all gap-4"
          >
            Book a session now <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-8 text-[12px] font-black uppercase tracking-[0.4em] text-[#C9A84C]">Command Your Trajectory with Absolute Precision.</div>
        </footer>
      </div>
    </div>
  );
}
