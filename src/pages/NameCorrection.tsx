import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  Minus, 
  FileText, 
  Fingerprint, 
  TrendingUp, 
  Heart, 
  Award,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function NameCorrection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const analysisLayers = [
    {
      title: 'The Full Name Calculation',
      desc: 'Every letter is assigned its Chaldean or Pythagorean numerical value. The total is broken down into its root number and cross-referenced against your birth chart numbers for compatibility.'
    },
    {
      title: 'The Spoken Name vs the Written Name',
      desc: 'How your name is pronounced and how it is written can carry different energies. We examine both to ensure alignment across the way you present yourself in the world.'
    },
    {
      title: 'The First Name, Middle Name & Surname',
      desc: 'Each component of your name carries distinct weight. Your first name governs your daily personal energy. Your surname carries ancestral and social vibrations. We analyse each separately and together.'
    },
    {
      title: 'Vowel & Consonant Mapping',
      desc: 'Vowels reveal your inner world — your motivations, passions, and emotional drivers. Consonants reflect your outer world — how others experience and remember you. The balance between them matters deeply.'
    },
    {
      title: 'Alignment with Your Dominant Planets',
      desc: 'Your birth chart highlights planets that are particularly strong or challenged in your life. We ensure your name\'s numerical value activates supportive planetary energies and does not amplify challenging ones.'
    }
  ];

  const lifeChanges = [
    {
      icon: TrendingUp,
      title: 'In Your Career & Financial Life',
      desc: 'Your name is on every CV, every proposal, every LinkedIn connection request. It is the first energetic impression you make — before anyone reads a single word below it. A name aligned with wealth-attracting numbers like 6 (Venus) or 3 (Jupiter) creates a subtle but powerful pull toward opportunity, recognition, and financial growth.'
    },
    {
      icon: Heart,
      title: 'In Your Relationships',
      desc: 'Names carry social energy. Some names draw people in — they feel warm, trustworthy, magnetic. Others, despite the person behind them being wonderful, create an invisible wall. Numerological alignment ensures the energy of your name invites the kinds of connections and relationships that truly serve your life.'
    },
    {
      icon: Award,
      title: 'In Your Personal Power & Confidence',
      desc: 'There is something deeply grounding about having a name that fits. Clients who adopt a numerologically aligned name frequently describe feeling more like themselves — more confident in introductions, more comfortable claiming their identity, more at ease stepping into rooms and opportunities that previously felt beyond reach.'
    }
  ];

  const outcomes = [
    {
      title: 'A Corrected or Alternative Name',
      desc: 'Carefully crafted to carry the right vibration while staying true to your identity and practical for daily use — on official documents, social profiles, email signatures, and professional materials.'
    },
    {
      title: 'The Full Numerological Reasoning',
      desc: 'Not just a recommendation but a complete explanation of why this name works for you — which numbers are activated, which planets are engaged, and how it aligns with your life path.'
    },
    {
      title: 'Usage Guidance',
      desc: 'Your new name needs to be activated consistently to take effect. We guide you on how to introduce and integrate it into your daily life — from social media and professional platforms to personal introductions — so the shift builds real momentum.'
    }
  ];

  const targetAudience = [
    'Stepping into a new chapter — a new city, a new career, a new relationship, a new version of yourself.',
    'Struggling with how others perceive you versus who you know yourself to be.',
    'Preparing for a major life event — marriage, career change, or launching a business.',
    'Simply curious about the deeper layers of your identity and what your name is broadcasting to the world.'
  ];

  const faqs = [
    {
      q: 'Do I have to legally change my name?',
      a: 'No. The energetic benefit comes from consistently using the corrected or alternative name — in your professional life, social media, email, and daily introductions. Legal updates are optional and entirely your choice.'
    },
    {
      q: 'What if I love my current name?',
      a: `That is completely understandable — and you never have to change a name you love.

However, if your name's total numerical vibration is not aligned with your date of birth, that misalignment silently creates friction — in health, relationships, and career — regardless of how much you love the name itself.

The concern deepens when your partner's date of birth and your date of birth carry an anti-combination — opposing numerical energies that conflict rather than complement. In such cases, aligning your name vibration becomes not just beneficial but essential — it acts as the bridge that brings harmony between two opposing frequencies.

The good news: in most cases this does not require changing your name entirely. A small correction in spelling — one or two letters — is often all it takes to shift the vibration into alignment.`
    },
    {
      q: 'Can a name correction really change my life?',
      a: `Yes — and here is the science behind why.

Your name is not just an identity. It is a vibrational frequency you repeat, hear, write, and receive thousands of times every year. Every time your name is spoken or written, that frequency is activated — compounding its energetic impact on your health, relationships, career, and opportunities over months and years.

There are two levels of name correction — and understanding the difference is critical:

Spelling Adjustment — Partial Alignment
Adding or removing a letter brings your name into numerical alignment with your date of birth. This is a valid correction and does create a positive shift. However, because the core sound and identity of the name remains largely unchanged, the vibrational impact — while real — is gradual and moderate.

Full Name Correction — Complete Alignment
When the name itself is corrected to fully align with your date of birth vibration, the impact is significantly deeper. The frequency you carry, respond to, and project into the world changes at its root — and so do the opportunities, people, and circumstances that are drawn toward you.

Think of it this way — a spelling adjustment tunes the instrument. A full name correction changes the entire frequency it plays in.

The honest answer: Both work. But the depth of your transformation is directly proportional to the depth of the correction you are willing to make.`
    },
    {
      q: 'How long does the consultation take?',
      a: 'A full Name Numerology session typically runs 60–90 minutes, followed by a written report and any subsequent follow-up questions you may have.'
    },
    {
      q: 'Is this different from Baby Name Numerology?',
      a: `Yes — they share the same science but serve two very different purposes.

Baby Name Numerology — A Foundation For Life
Baby Name Numerology is the art of giving a newborn the most powerful vibrational start possible. A name chosen at birth — before any life patterns have formed — becomes the frequency the child grows into, responds to, and carries through every chapter of their life.

It is arguably the most meaningful gift a parent can give. Not a toy. Not a tradition. A lifelong vibrational blueprint that silently shapes the child's health, character, relationships, and destiny from their very first day.

At Destiny Numbers, Baby Name Numerology goes one layer deeper — integrating the child's Nakshatra vibration into the name selection. A name aligned with both the birth date and the birth Nakshatra creates a rare triple harmony — numerological, phonetic, and cosmic — that amplifies the child's natural strengths and provides energetic protection through life's most challenging phases.

Name Numerology for Adults — Correction and Realignment
Adult Name Numerology addresses a different reality. You have been carrying your name for years — perhaps decades. Life patterns, recurring challenges, and relationship dynamics have already formed around its vibration. The work here is analytical and corrective — studying the name you have lived with, identifying where its frequency conflicts with your date of birth, and realigning it to restore harmony and open what has been blocked.`
    }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans text-[#1C3557] min-h-screen">
      <HeroHeader 
        eyebrow="Identity Alignment"
        title="Name Correction"
        description="Your name carries a numerical frequency that either amplifies your potential or quietly suppresses it. Name Numerology is the science of understanding and correcting that frequency."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-base text-[#1C3557]/70 leading-relaxed font-light italic max-w-2xl mx-auto">
            You just never knew that the name you go by every single day — the one on your ID, your email signature, your social profiles, your lips — carries a numerical frequency that either amplifies your potential or quietly suppresses it.
          </p>
          <div className="mt-8 flex justify-center">
            <Link 
              to="/contact" 
              className="inline-flex px-8 py-3.5 bg-[#1C3557] text-white font-display font-bold tracking-widest text-[11px] uppercase shadow-lg hover:scale-105 transition-all gap-3 items-center"
            >
              Discover Your Name's Vibration <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>
        </div>

        {/* Section 1: Your Name Is Not Just What People Call You */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Fingerprint className="w-40 h-40 text-[#1C3557]" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557]">Your Name Is Not Just What People Call You</h2>
            <p className="text-lg font-display text-[#C9A84C] italic font-medium">It is what the universe responds to.</p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light">
              Every letter in every language maps to a number. Every number carries a planetary vibration — Mercury's quick intelligence, Jupiter's generous abundance, Saturn's disciplined endurance, Venus's magnetic charm. When the letters in your name add up to numbers that harmonise with your birth chart, life moves with you. Opportunities land. Relationships deepen. Effort converts to results.
            </p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light">
              When they do not harmonise, you feel it as invisible resistance. You work hard and things almost work out. You are talented but somehow overlooked. You try and try and cannot understand why the results never quite match the input.
            </p>
            <p className="text-[#C9A84C] text-sm font-medium italic">
              The answer, more often than you would think, is in the name.
            </p>
          </div>
        </section>

        {/* Section 2: The Problem with how most names are chosen */}
        <section className="mb-20 space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-medium italic text-[#1C3557] text-center">The Problem With How Most Names Are Chosen</h2>
          <div className="p-6 bg-white border border-[#1C3557]/5 rounded-xl space-y-4 shadow-sm">
            <p className="text-[#1C3557]/80 leading-relaxed font-light italic text-sm">
              Most names are chosen from tradition, family legacy, religious custom, or simply because they sound beautiful. None of these are bad reasons. But none of them account for <strong>you</strong> — your specific birth date, your personal numeroscope, your life path number, and the planetary configuration you arrived with.
            </p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light italic text-sm">
              A name chosen based on birth Nakshatra alone, or given in honour of a deity or ancestor, may carry beautiful sentiment — but that does not mean it is numerologically aligned with the individual who must carry it through decades of decisions, relationships, and ambitions.
            </p>
            <p className="text-[#1C3557]/80 leading-relaxed font-light italic text-sm">
              At Destiny Numbers, we analyse your existing name against your personal numeroscope and identify, with precision, where it is working for you and where it is creating drag.
            </p>
          </div>
        </section>

        {/* Section 4: What We Analyse in Your Name */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Microscopic Technical Audit</div>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">What We Analyse in Your Name</h2>
          </div>
          <div className="space-y-4">
            {analysisLayers.map((layer, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white border border-[#1C3557]/5 hover:border-[#C9A84C]/20 transition-all rounded-xl shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#F5ECD7] text-[#1C3557] font-display font-bold text-xs flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-sm font-display font-medium text-[#1C3557] mb-1 italic">{layer.title}</h4>
                  <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Three Ways Name Numerology Changes Your Life */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-2">Compounding Shifts</div>
            <h2 className="text-3xl md:text-4xl font-display font-medium italic text-[#1C3557]">Three Ways Name Numerology Changes Your Life</h2>
          </div>
          
          <div className="space-y-6">
            {lifeChanges.map((change, i) => {
              const IconComp = change.icon;
              return (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-[#1C3557]/5 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#F5ECD7] flex items-center justify-center rounded-lg text-[#1C3557] shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-medium text-[#1C3557] mb-2 italic">
                      {i + 1}. {change.title}
                    </h4>
                    <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic">
                      {change.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: What Happens After the Analysis */}
        <section className="bg-white/40 border border-[#1C3557]/5 p-8 md:p-12 mb-20 rounded-2xl">
          <div className="space-y-6 max-w-2xl mx-auto text-center">
            <Sparkles className="w-10 h-10 text-[#C9A84C] mx-auto mb-2" />
            <h2 className="text-2xl font-display font-medium italic text-[#1C3557]">What Happens After the Analysis</h2>
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light italic">
              If your current name is aligned — we will tell you so, clearly, with the full reasoning behind that assessment. 
            </p>
            <p className="text-sm text-[#1C3557]/80 leading-relaxed font-light italic">
              If your name needs correction, we do not ask you to become someone else. We work with what is already there — sometimes a single letter change, a slight spelling variation, or a new way of writing your name is all it takes to shift the frequency significantly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {outcomes.map((item, i) => (
              <div key={i} className="p-5 bg-white border border-[#1C3557]/5 rounded-xl space-y-3">
                <FileText className="w-5 h-5 text-[#C9A84C]" />
                <h4 className="font-display font-medium text-[#1C3557] italic text-xs">{item.title}</h4>
                <p className="text-[11px] text-[#1C3557]/70 leading-relaxed font-light italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Who Is This For? */}
        <section className="mb-20 bg-[#1C3557] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">AUDIENCE MATCH</span>
              <h2 className="text-2xl md:text-3xl font-display italic text-white mt-1 mb-6">Who Is This For?</h2>
              <p className="text-white/80 text-xs font-light leading-relaxed mb-8">
                Name Numerology is for anyone who feels a gap between their effort and their outcomes — and is open to exploring whether something as fundamental as the name they carry might be part of the equation.
              </p>
            </div>
            <div className="space-y-4 text-left">
              {targetAudience.map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-white/5 border border-white/10 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span className="text-xs text-white/90 font-light leading-relaxed italic">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: A Note on Tradition */}
        <section className="mb-20 text-center space-y-4 max-w-2xl mx-auto border-t border-[#1C3557]/10 pt-10">
          <BookOpen className="w-8 h-8 text-[#C9A84C] mx-auto mb-2" />
          <h2 className="text-2xl font-display font-medium italic text-[#1C3557]">A Note on Tradition</h2>
          <p className="text-xs text-[#1C3557]/80 leading-relaxed font-light italic">
            We deeply respect naming traditions rooted in Nakshatra, religious custom, and family heritage. Name Numerology does not ask you to abandon any of these. In most cases, a small, subtle variation is enough to bring a traditional name into full vibrational alignment — honouring both your roots and your future.
          </p>
          <p className="text-xs text-[#1C3557]/80 leading-relaxed font-light italic font-medium text-[#C9A84C]">
            Real Alignment. Real Results. Spanning students, professionals, entrepreneurs, and seekers.
          </p>
        </section>

        {/* FAQs Section */}
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
                      <p className="text-xs text-[#1C3557]/70 leading-relaxed font-light italic pt-2 pl-1 whitespace-pre-line">
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
          <h2 className="text-2xl md:text-5xl font-display mb-8 italic">Your Name Has Been Speaking <span className="text-[#C9A84C]">for You Every Day</span></h2>
          <p className="text-lg text-[#1C3557]/70 mb-12 max-w-xl mx-auto font-light italic leading-loose">
            Make sure it has been saying the right things. A single consultation with Destiny Numbers can clarify years of quiet confusion — and set you on a path where the name you carry and the life you are building finally speak the same language.
          </p>
          <div className="space-y-4">
            <Link 
              to="/contact" 
              className="inline-flex px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all gap-4 animate-bounce"
            >
              Book Your Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="pt-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#C9A84C]">Discover Your Name's Vibration Today.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
