import React from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Calculator, 
  ArrowRight,
  ArrowLeft,
  Sun,
  Moon,
  Star,
  Users,
  Compass,
  Briefcase,
  Plane,
  Heart,
  Search,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { HeroHeader } from '../components/HeroHeader';

export default function MobileNumerologyLanding() {
  const calculationSteps = [
    {
      id: 1,
      title: "Write your full 10-digit mobile number",
      desc: "Use just the 10 digits — skip the country code (+91) unless you regularly dial internationally with it"
    },
    {
      id: 2,
      title: "Add all digits together",
      desc: "Sum every single digit in your number"
    },
    {
      id: 3,
      title: "Reduce to a single digit",
      desc: "If the sum is two digits, add those together. Repeat until you reach 1–9"
    },
    {
      id: 4,
      title: "Check for master numbers",
      desc: "If your sum is 11, 22, or 33 — stop. Do not reduce further. These are special"
    }
  ];

  const rootNumbers = [
    { id: 1, title: 'Leadership', desc: 'Ambition, independence, drive. Best for entrepreneurs and self-starters.', planet: 'Ruled by the Sun', icon: Sun, color: 'bg-blue-50 text-blue-900' },
    { id: 2, title: 'Cooperation', desc: 'Sensitivity, diplomacy, partnerships. Ideal for counsellors and mediators.', planet: 'Ruled by the Moon', icon: Moon, color: 'bg-pink-50 text-pink-900' },
    { id: 3, title: 'Creativity', desc: 'Expression, optimism, communication. Great for artists and speakers.', planet: 'Ruled by Jupiter', icon: Star, color: 'bg-green-50 text-green-900' },
    { id: 4, title: 'Stability', desc: 'Discipline, hard work, structure. Suits real estate, law, and science.', planet: 'Ruled by Rahu / Mercury', icon: Compass, color: 'bg-stone-100 text-stone-900' },
    { id: 5, title: 'Freedom', desc: 'Adventure, change, versatility. Perfect for travellers and salespeople.', planet: 'Ruled by Mercury', icon: Plane, color: 'bg-orange-50 text-orange-900' },
    { id: 6, title: 'Harmony', desc: 'Nurturing, responsibility, beauty. Ideal for healers and home-makers.', planet: 'Ruled by Venus', icon: Heart, color: 'bg-emerald-50 text-emerald-900' },
    { id: 7, title: 'Wisdom', desc: 'Spirituality, introspection, research. Suited for thinkers and analysts.', planet: 'Ruled by Ketu', icon: Search, color: 'bg-indigo-50 text-indigo-900' },
    { id: 8, title: 'Power', desc: 'Authority, material success, ambition. Strong for finance and business.', planet: 'Ruled by Saturn', icon: Briefcase, color: 'bg-red-50 text-red-900' },
    { id: 9, title: 'Compassion', desc: 'Humanitarianism, idealism, completion. Best for service and leadership.', planet: 'Ruled by Mars', icon: Users, color: 'bg-orange-50 text-orange-900' }
  ];

  const luckySeries = ['786', '369', '108', '111', '888', '999', '159', '123'];



  const faqs = [
    { q: 'Should I include the country code in my calculation?', a: 'For personal use within India, use just the 10-digit number. If you operate internationally and share your number with the +91 prefix, include the country code for a more complete reading.' },
    { q: 'My number doesn\'t match my psychic number — should I change it?', a: 'Not necessarily. A mismatch is a starting point, not a verdict. You can consult a numerologist for remedies — adjusting your caller name ID with lucky digits, using numerology-aligned wallpapers, or simply being mindful of the imbalance.' },
    { q: 'What if I get a total of 10?', a: 'Reduce it further: 1 + 0 = 1. The only numbers you don\'t reduce are the master numbers 11, 22, and 33.' },
    { q: 'Is numerology scientifically proven?', a: 'No — numerology is a belief system rooted in ancient tradition, not empirical science. It\'s best approached as a tool for reflection and intention-setting rather than a predictive science. Use it alongside your own judgment.' },
    { q: 'Can my business number have different rules?', a: 'Yes. For business numbers, prioritise alignment with your professional goals over personal psychic number compatibility. Number 1 suits leadership-driven brands; 8 suits finance; 6 suits service industries; 3 suits creative businesses.' }
  ];

  return (
    <div className="bg-[#F5ECD7] font-sans scroll-smooth min-h-screen text-[#1C3557]">
      <HeroHeader 
        eyebrow="Numerology Excellence"
        title="Mobile Number Numerology"
        description="Your phone number carries a vibration that shapes how you communicate and attract opportunities."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <Link 
            to="/tools" 
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1C3557]/40 hover:text-[#C9A84C] transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> Back to Tools
          </Link>
          
          <Link 
            to="/analyser/mobile" 
            className="px-8 py-3.5 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[11px] uppercase shadow-md hover:scale-105 transition-all flex items-center gap-3"
          >
            Analyze Your Number Now <Smartphone className="w-4 h-4" />
          </Link>
        </div>



        <section className="mb-20">
          <h2 className="text-2xl font-display font-medium mb-6 border-b border-[#C9A84C]/20 pb-4">What is mobile number numerology?</h2>
          <div className="space-y-4 text-[#1C3557]/80 leading-relaxed italic">
            <p>Numerology is an ancient belief system that assigns meaning and energy to numbers. Mobile number numerology applies this to your phone number — the digits you dial and receive calls on every single day. Since your mobile number is in constant use, its vibrational frequency is considered to be one of the most active influences on your day-to-day life.</p>
            <p>By reducing your full phone number to a single root digit, you can understand the dominant energy it carries — and whether that energy aligns with your personal numerology profile.</p>
          </div>
        </section>

        {/* Calculation Steps */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-medium mb-10 border-b border-[#C9A84C]/20 pb-4">How to calculate your mobile numerology number</h2>
          <div className="space-y-8">
            {calculationSteps.map((step) => (
              <div key={step.id} className="flex gap-6 group">
                <div className="w-10 h-10 shrink-0 bg-white border border-[#C9A84C]/30 flex items-center justify-center font-display font-black text-[#1C3557] group-hover:bg-[#C9A84C] group-hover:text-white transition-all">
                  {step.id}
                </div>
                <div>
                  <h3 className="font-display font-black text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-[#1C3557]/60 italic font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#1C3557] p-8 md:p-12 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Calculator className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="text-xs font-black tracking-widest text-[#C9A84C] mb-6 uppercase">Calculation Example</div>
              <div className="space-y-2 font-mono text-sm opacity-60 mb-6">
                <div>Example Number: 9876543210</div>
                <div>9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 = 45</div>
                <div>4 + 5 = <span className="text-white font-black">9</span></div>
              </div>
              <div className="text-2xl font-display italic font-light border-l-2 border-[#C9A84C] pl-6 py-2">
                Your mobile numerology number is 9 — the number of compassion and completion
              </div>
            </div>
          </div>
        </section>

        {/* Root Numbers Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-medium mb-10 border-b border-[#C9A84C]/20 pb-4">What each root number means</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rootNumbers.map((num) => (
              <div key={num.id} className="p-8 bg-white border border-[#1C3557]/5 shadow-sm hover:shadow-xl transition-all group">
                <div className={cn("w-12 h-12 flex items-center justify-center mb-6 rounded-none", num.color)}>
                  <num.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium mb-2 group-hover:text-[#C9A84C] transition-colors">{num.title}</h3>
                <p className="text-sm text-[#1C3557]/70 mb-4 leading-relaxed italic">{num.desc}</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C]/60 pt-4 border-t border-[#1C3557]/5">
                  {num.planet}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compatibility Matrix Placeholder or Simplified */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-medium mb-6 border-b border-[#C9A84C]/20 pb-4">Compatibility Guide</h2>
          <p className="text-sm text-[#1C3557]/60 mb-8 italic">Match your psychic number (birth date total) with a compatible mobile number.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
             {[
               { id: 1, ruler: 'Sun', lucky: '1, 2, 3, 4, 5, 7, 9', avoid: '6, 8' },
               { id: 2, ruler: 'Moon', lucky: '1, 2, 3, 4, 7, 9', avoid: '5, 6, 8' },
               { id: 3, ruler: 'Jupiter', lucky: '1, 2, 3, 5, 6, 9', avoid: '4, 8' },
               { id: 4, ruler: 'Rahu', lucky: '1, 2, 4, 7, 8', avoid: '3, 5, 9' },
               { id: 5, ruler: 'Mercury', lucky: '1, 3, 5, 6, 9', avoid: '2, 4' },
               { id: 6, ruler: 'Venus', lucky: '3, 5, 6, 8, 9', avoid: '1, 4' },
               { id: 7, ruler: 'Ketu', lucky: '1, 2, 3, 4, 7', avoid: '5, 6, 8' },
               { id: 8, ruler: 'Saturn', lucky: '1, 4, 5, 6, 8', avoid: 'Caution' },
               { id: 9, ruler: 'Mars', lucky: '1, 2, 3, 4, 5, 6, 9', avoid: '7, 8' },
             ].map((item) => (
               <div key={item.id} className="p-3 bg-white/40 border border-[#1C3557]/5 rounded-none flex flex-col justify-between h-full">
                 <div>
                   <div className="text-[8px] font-black uppercase tracking-wider text-[#C9A84C] mb-1 leading-none">Psychic {item.id}</div>
                   <div className="text-[9px] font-semibold text-[#1C3557]/50 uppercase mb-1 leading-none">({item.ruler})</div>
                   <div className="text-xs font-bold text-[#1C3557] mb-2 leading-tight tracking-tight">{item.lucky}</div>
                 </div>
                 <div className="text-xs font-bold text-red-600/70 uppercase tracking-tight leading-none pt-1.5 border-t border-[#1C3557]/5">Avoid: {item.avoid}</div>
               </div>
             ))}
          </div>
        </section>

        {/* Lucky Series */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-medium mb-10 border-b border-[#C9A84C]/20 pb-4">Lucky series to look for</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            {luckySeries.map(s => (
              <span key={s} className="px-6 py-2 bg-[#1C3557] text-[#C9A84C] font-display font-black tracking-widest text-lg">
                {s}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#1C3557]/50 italic leading-relaxed">
            Repeating digits amplify the base number's energy. 786 holds special significance in Islamic numerology. 369 is rooted in sacred geometry.
          </p>
        </section>

        {/* Strategic Tips */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-medium mb-10 border-b border-[#C9A84C]/20 pb-4">Tips for choosing a lucky mobile number</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Numbers 1, 3, 5, 6, and 9 are generally favourable across most professions.",
              "Having 6 and 8 together is auspicious for financial gains and material prosperity.",
              "Match your mobile root number with your psychic number for best daily harmony.",
              "If your psychic number is odd, a mobile number ending in an odd digit tends to suit you better.",
              "Avoid mobile numbers that total 4 or 8 unless specifically recommended.",
              "Minimise zeros in your number — they dilute the influence of digits around them.",
              "Avoid excessive repetition of a single digit for balanced combinations."
            ].map((tip, i) => (
              <div key={i} className="flex gap-4 items-start">
                {i < 4 ? <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> : <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
                <p className="text-sm text-[#1C3557]/80 leading-relaxed italic">{tip}</p>
              </div>
            ))}
          </div>
        </section>



        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-medium mb-10 border-b border-[#C9A84C]/20 pb-4">Frequently asked questions</h2>
          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-display font-black text-[#1C3557] mb-4 border-l-2 border-[#C9A84C] pl-6">{faq.q}</h3>
                <p className="text-sm text-[#1C3557]/70 italic leading-loose pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1C3557] p-12 md:p-20 text-center relative overflow-hidden group shadow-3xl text-white"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display mb-8 italic text-white"><span className="text-white">Check your</span> <span className="text-[#C9A84C]">number now</span></h2>
            <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto font-light italic leading-loose">
              Don't leave your digital vibration to chance. Enter your mobile number and find out if it's working for you.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link 
                to="/analyser/mobile" 
                className="px-12 py-6 bg-[#C9A84C] text-[#1C3557] font-display font-black tracking-widest text-[12px] uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4"
              >
                Launch Tool Analyser <Smartphone className="w-5 h-5" />
              </Link>
              <Link to="/consultation" className="px-12 py-6 bg-white/5 border border-white/20 text-white font-display font-black tracking-widest text-[12px] uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                Expert Consultation <ArrowRight className="w-5 h-5 text-[#C9A84C]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
