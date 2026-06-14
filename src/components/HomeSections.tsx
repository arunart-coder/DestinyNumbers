import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Award, 
  Users, 
  Target, 
  Globe,
  Calculator,
  Scan,
  Smartphone,
  Heart,
  Binary,
  Sparkles,
  RefreshCw,
  BookOpen,
  Briefcase,
  ChevronLeft
} from 'lucide-react';
import { 
  SERVICES, COURSES, TESTIMONIALS, FAQ, BRAND_DATA, HERO_SLIDES 
} from '../lib/constants';
import { useBrand } from '../lib/BrandContext';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mystic-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Cinematic Background */}
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
            src={HERO_SLIDES[currentSlide].image} 
            alt={HERO_SLIDES[currentSlide].title}
            className="w-full h-full object-cover opacity-60 font-sans brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mystic-navy/80 via-mystic-navy/40 to-mystic-navy z-10" />
          
          {/* Sacred Geometry Overlays */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="w-[1000px] h-[1000px] border border-royal-gold/10 rounded-none animate-spin-slow" />
              <div className="absolute w-[800px] h-[800px] border border-royal-gold/5 rotate-45 animate-spin-slow-reverse" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
             key={currentSlide}
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -30 }}
             transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="hero-title mb-10 text-white">
              {HERO_SLIDES[currentSlide].title.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {(i >= arr.length - 2) ? <span className="text-royal-gold">{word} </span> : word + ' '}
                </React.Fragment>
              ))}
              <br className="hidden md:block" /> 
              <span className="text-royal-gold font-medium italic text-[0.4em] md:text-[0.4em] block mt-4 tracking-[0.2em]">
                {HERO_SLIDES[currentSlide].subtitle}
              </span>
            </h1>
            <p className="body-text max-w-3xl mx-auto mb-16 text-white/80 h-[80px] md:h-[120px]">
              {HERO_SLIDES[currentSlide].description}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link 
                to={HERO_SLIDES[currentSlide].link} 
                className="px-14 py-6 bg-royal-gold text-white font-sans font-black tracking-[0.3em] text-[11px] rounded-none hover:scale-105 transition-all shadow-[0_0_50px_rgba(201,168,76,0.4)] flex items-center gap-3 group"
              >
                {HERO_SLIDES[currentSlide].cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="px-14 py-6 border border-royal-gold/20 text-warm-off-white font-sans font-black tracking-[0.3em] text-[11px] rounded-none hover:bg-royal-gold hover:text-mystic-navy hover:border-royal-gold transition-all backdrop-blur-md"
              >
                Explore services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 px-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-none border border-royal-gold/20 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-mystic-navy transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-none border border-royal-gold/20 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-mystic-navy transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "h-1.5 transition-all duration-500 rounded-none",
                currentSlide === i ? "w-12 bg-royal-gold" : "w-6 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

export function AboutSection() {
  const { brandData } = useBrand();

  return (
    <section className="py-40 relative overflow-hidden bg-warm-off-white font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group px-4 md:px-0"
        >
          <div className="relative z-10 rounded-none overflow-hidden aspect-[4/5] shadow-[0_20px_50px_rgba(13,27,62,0.3)] border border-white/20 ring-1 ring-royal-gold/20 bg-white/10 backdrop-blur-md hover:ring-royal-gold/40 transition-all duration-700">
             <img 
               src={brandData.profilePhoto} 
               alt={brandData.name}
               className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
               onError={(e) => {
                 const target = e.target as HTMLImageElement;
                 if (!target.src.includes('unsplash')) {
                   target.src = brandData.fallbackPhoto;
                 }
               }}
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-mystic-navy/60 via-transparent to-transparent opacity-60 pointer-events-none" />
             
             {/* Glass Accent Overlays */}
             <div className="absolute top-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
          
          {/* Decorative Elements - Refined */}
          <div className="absolute -top-4 -left-4 w-40 h-40 border-t border-l border-royal-gold/40 z-0 rounded-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -bottom-4 -right-4 w-40 h-40 border-b border-r border-royal-gold/40 z-0 rounded-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-1/4 z-20 bg-white/80 backdrop-blur-xl border border-royal-gold/20 p-4 rounded-none shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-none bg-royal-gold flex items-center justify-center text-mystic-navy">
                <Award className="w-5 h-5" />
              </div>
              <div className="font-sans">
                <p className="text-[10px] tracking-tighter text-mystic-navy/50 font-black">Certified</p>
                <p className="text-[12px] font-bold text-mystic-navy">Scientific Numerologist</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-royal-gold text-[10px] tracking-[0.6em] font-black mb-8 block">Digital Impact Specialist</span>
          <h2 className="section-title mb-10 text-mystic-navy">
            Arun <span className="text-royal-gold">Poovaiah</span>
          </h2>
          <p className="body-text mb-10 leading-relaxed text-mystic-navy/70">
             Dr. Arun Poovaiah, founder of Destiny Numbers, applies the science of Numerology and Nakshatra Nadi to help people across the world find clarity, direction, and purpose.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="p-6 rounded-none border border-royal-gold/10 bg-white/50 backdrop-blur-sm shadow-lg">
               <h4 className="text-royal-gold font-sans font-bold mb-3 flex items-center gap-3 tracking-widest text-[11px]">
                 <Target className="w-5 h-5 text-royal-gold" />
                 Precision Analysis
               </h4>
               <p className="text-sm text-mystic-navy/70 leading-relaxed font-sans">Advanced degree-based Dasha and Nakshatra alignment for accurate forecasting.</p>
            </div>
            <div className="p-6 rounded-none border border-royal-gold/10 bg-white/50 backdrop-blur-sm shadow-lg">
               <h4 className="text-royal-gold font-sans font-bold mb-3 flex items-center gap-3 tracking-widest text-[11px]">
                 <Globe className="w-5 h-5 text-royal-gold" />
                 Global Authority
               </h4>
               <p className="text-sm text-mystic-navy/70 leading-relaxed font-sans">Strategic consulting for high-net-worth individuals and corporate brand identity.</p>
            </div>
          </div>
          <button className="flex items-center gap-6 text-mystic-navy tracking-[0.3em] text-[11px] font-black group">
            <span className="border-b border-royal-gold/40 pb-3 group-hover:border-royal-gold transition-all duration-500">Explore The Full Journey</span>
            <ChevronRight className="w-6 h-6 text-royal-gold group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="py-40 bg-warm-off-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-royal-gold text-[10px] tracking-[0.6em] font-black mb-8 block">Occult Expertise</span>
          <h2 className="section-title mb-8 text-mystic-navy">Precision <span className="text-royal-gold">Consultancy</span></h2>
          <p className="body-text max-w-3xl mx-auto text-mystic-navy/70 font-bold">A strategic suite of analytical services designed for high-achievers who demand clarity in time, space, and identity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.slice(0, 6).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-card p-12 rounded-none group hover:bg-mystic-navy transition-all duration-500 overflow-hidden relative border border-royal-gold/10 flex flex-col h-full bg-white"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 bg-mystic-navy rounded-none flex items-center justify-center mb-12 shadow-2xl group-hover:bg-royal-gold transition-all duration-700">
                  <service.icon className="w-10 h-10 text-royal-gold group-hover:text-mystic-navy transition-colors duration-500" />
                </div>
                <span className="text-[10px] text-royal-gold tracking-[0.4em] font-black mb-6 block">{service.category}</span>
                <h3 className="text-3xl font-display font-medium text-mystic-navy mb-8 group-hover:text-white transition-colors duration-500 tracking-tight">{service.title}</h3>
                <p className="text-mystic-navy/70 text-[16px] leading-relaxed mb-12 font-sans italic group-hover:text-white/80 transition-colors duration-500"> {service.description}</p>
                <div className="mt-auto w-full pt-8 border-t border-royal-gold/10 flex items-center justify-between gap-4">
                  <Link 
                    to={service.path || "/services"}
                    className="flex items-center gap-2 text-royal-gold text-[10px] font-black tracking-widest hover:text-mystic-navy hover:bg-royal-gold px-4 py-2 rounded-none transition-all group/more"
                  >
                    More <ChevronRight className="w-4 h-4 group-hover/more:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/consultation"
                    className="flex items-center gap-2 text-royal-gold text-[10.5px] tracking-[0.2em] font-black group/btn hover:brightness-125 transition-all"
                  >
                    Inquire <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-24">
           <Link to="/services" className="px-14 py-6 bg-mystic-navy text-warm-off-white rounded-none text-[11px] font-sans font-black tracking-[0.3em] hover:bg-royal-gold hover:text-mystic-navy transition-all shadow-xl">
             View All 17 Specializations
           </Link>
        </div>
      </div>
    </section>
  );
}


const CHALDEAN_CHART: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

const NUMBER_MEANINGS: Record<number, string> = {
  1: "Natural leader, independent, and creative. Ambition and strong willpower guide you toward new beginnings.",
  2: "Diplomatic, sensitive, and cooperative. You thrive in partnerships and radiate intuitive harmony.",
  3: "Expressive, joyful, and creative communicator. You carry an inspiring and optimistic frequency.",
  4: "Practical, disciplined, and reliable. You are a builder of stability, order, and lasting foundations.",
  5: "Adaptable, intelligent, and freedom-loving. You thrive in dynamic, fast-paced environments and travel.",
  6: "Nurturing, responsible, and harmonious. You seek beauty, service, and balance in all aspects of life.",
  7: "Analytical, introspective, and a spiritual seeker. Your strength lies in intuition and inner truth.",
  8: "Authoritative, efficient, and ambitious. You are wired for material success and spiritual mastery.",
  9: "Compassionate, idealistic, and humanitarian. You seek a global impact and selfless contribution."
};

const getCompoundInsight = (compound: number): string => {
  if (compound < 20) return "A strong individual foundation with high potential for early success.";
  if (compound < 40) return "A balanced vibration indicating successful social and business interactions.";
  if (compound < 60) return "Powerful visionary energy that requires focus to avoid scattered efforts.";
  return "Master level vibration indicating significant worldly responsibility and reach.";
};

export function ToolsSection() {
  const [activeTool, setActiveTool] = useState<'name' | 'mobile'>('name');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<{
    type: 'name' | 'mobile';
    breakdown: { char: string; val: number }[];
    compound: number;
    single: number;
    pyramid: number[][];
    grid: Record<number, number>;
  } | null>(null);

  const getSingleDigit = (n: number): number => {
    let sum = n;
    while (sum > 9) {
      sum = String(sum).split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return sum;
  };

  const calculateNameNumerology = () => {
    if (!name.trim()) return;
    setIsCalculating(true);
    setResults(null);

    setTimeout(() => {
      const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
      const breakdown = cleanName.split('').map(char => ({
        char,
        val: CHALDEAN_CHART[char] || 0
      }));

      const compound = breakdown.reduce((acc, curr) => acc + curr.val, 0);
      
      let currentLayer = breakdown.map(b => b.val);
      const pyramid: number[][] = [currentLayer];
      while (currentLayer.length > 1) {
        const nextLayer: number[] = [];
        for (let i = 0; i < currentLayer.length - 1; i++) {
          nextLayer.push(getSingleDigit(currentLayer[i] + currentLayer[i+1]));
        }
        pyramid.push(nextLayer);
        currentLayer = nextLayer;
      }

      const grid: Record<number, number> = {};
      breakdown.forEach(b => { grid[b.val] = (grid[b.val] || 0) + 1; });

      setResults({
        type: 'name',
        breakdown,
        compound,
        single: getSingleDigit(compound),
        pyramid,
        grid
      });
      setIsCalculating(false);
    }, 1200);
  };

  const calculateMobileNumerology = () => {
    if (!mobile.trim() || mobile.length < 5) return;
    setIsCalculating(true);
    setResults(null);

    setTimeout(() => {
      const digits = mobile.replace(/[^0-9]/g, '').split('');
      const breakdown = digits.map(d => ({ char: d, val: parseInt(d) }));
      const compound = breakdown.reduce((acc, curr) => acc + curr.val, 0);

      const grid: Record<number, number> = {};
      breakdown.forEach(b => { grid[b.val] = (grid[b.val] || 0) + 1; });

      setResults({
        type: 'mobile',
        breakdown,
        compound,
        single: getSingleDigit(compound),
        pyramid: [], // Mobile typically doesn't use name pyramids
        grid
      });
      setIsCalculating(false);
    }, 1200);
  };

  return (
    <section className="py-40 bg-mystic-navy relative overflow-hidden">
       {/* Background Image Overlay */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://lh3.googleusercontent.com/d/1uId_ZFDkU3pMdt7twbLd_brhx-GxL5Di" 
            className="w-full h-full object-cover grayscale brightness-[0.2]"
            alt="Arun Poovaiah"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?auto=format&fit=crop&q=80&w=1920";
            }}
            referrerPolicy="no-referrer"
          />
       </div>

       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-royal-gold text-[10px] tracking-[0.6em] font-black mb-8 block">Interactive Hub</span>
            <h2 className="section-title mb-10 text-warm-off-white leading-tight font-display font-medium">Discover Your <br/> <span className="text-royal-gold font-sans font-black italic">{activeTool === 'name' ? 'Name Vibration' : 'Digital Signal'}</span></h2>
            <p className="body-text mb-12 leading-relaxed text-warm-off-white/70">
               Experience the precision-driven logic of Arun Poovaiah with our interactive tools. 
               Get instant data insights before your tailored deep-dive session.
            </p>
            
            <div className="flex flex-col gap-6">
                {[
                  { id: 'destiny', icon: Calculator, label: 'Decode Your Date of Birth', desc: 'Reveal your core numerical alignment.', type: 'link', path: '/calculator' },
                  { id: 'compatibility', icon: Heart, label: 'Compatibility', desc: 'Decode the energetic algorithms between two souls.', type: 'link', path: '/compatibility' },
                  { id: 'business', icon: Briefcase, label: 'Brand Auditor', desc: 'Audit your business identity for commercial prosperity.', type: 'link', path: '/brand-auditor' },
                  { id: 'name', icon: Scan, label: 'Name Vibration', desc: 'Analyze the frequency of your personal brand.', type: 'interactive' },
                  { id: 'mobile', icon: Smartphone, label: 'Mobile Calculator', desc: 'Analyze your digital frequency alignment.', type: 'link', path: '/analyser/mobile' },
                ].map((tool, idx) => (
                    tool.type === 'link' && tool.path?.startsWith('http') ? (
                      <a 
                        key={idx} 
                        href={tool.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-8 p-8 border-b border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer group rounded-none"
                      >
                        <div className="w-14 h-14 rounded-none border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-mystic-navy transition-all duration-1000">
                           <tool.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-warm-off-white font-sans font-black text-xs tracking-[0.2em] mb-1">{tool.label}</h4>
                            <p className="text-[11px] text-warm-off-white/50 tracking-widest">{tool.desc}</p>
                        </div>
                      </a>
                    ) : tool.type === 'link' ? (
                      <Link 
                        key={idx} 
                        to={tool.path || '#'} 
                        className="flex items-center gap-8 p-8 border-b border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer group rounded-none"
                      >
                        <div className="w-14 h-14 rounded-none border border-royal-gold/10 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-mystic-navy transition-all duration-1000">
                           <tool.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-warm-off-white font-sans font-black text-xs tracking-[0.2em] mb-1">{tool.label}</h4>
                            <p className="text-[11px] text-warm-off-white/50 tracking-widest">{tool.desc}</p>
                        </div>
                      </Link>
                    ) : (
                      <button 
                        key={idx} 
                        onClick={() => {
                          setActiveTool(tool.id as 'name' | 'mobile');
                          setResults(null);
                        }}
                        className={cn(
                          "flex items-center gap-8 p-8 border-b transition-all cursor-pointer group rounded-none w-full text-left bg-white/5",
                          activeTool === tool.id ? "bg-white/10 border-royal-gold" : "hover:bg-white/10 border-white/5"
                        )}
                      >
                        <div className={cn(
                          "w-14 h-14 rounded-none border flex items-center justify-center transition-all duration-500",
                          activeTool === tool.id ? "bg-royal-gold text-mystic-navy border-royal-gold" : "border-royal-gold/10 text-royal-gold group-hover:bg-royal-gold group-hover:text-mystic-navy"
                        )}>
                           <tool.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-warm-off-white font-sans font-black text-xs tracking-[0.2em] mb-1">{tool.label}</h4>
                            <p className="text-[11px] text-warm-off-white/50 tracking-widest">{tool.desc}</p>
                        </div>
                      </button>
                    )
                  ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card p-12 md:p-16 rounded-none border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          >
             <div className="mb-12 text-center">
                <h3 className="text-3xl font-display font-medium text-warm-off-white mb-3 italic">
                  {activeTool === 'name' ? 'Decode Your Name' : "Decode Your Mobile's Vibration"}
                </h3>
                <p className="text-[10px] text-royal-gold tracking-[0.4em] font-black opacity-60">Instant Analytical Teaser</p>
             </div>
             <div className="space-y-10">
                <div>
                   <label className="text-[11px] text-warm-off-white/70 tracking-[0.4em] font-black mb-4 block">
                     {activeTool === 'name' ? 'Enter Full Name' : 'Enter Mobile Number'}
                   </label>
                   {activeTool === 'name' ? (
                     <input 
                       type="text" 
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       placeholder="FULL NAME"
                       className="w-full bg-white/10 border-2 border-white/10 rounded-2xl p-6 text-warm-off-white font-sans font-black text-sm tracking-[0.2em] focus:border-royal-gold focus:ring-4 focus:ring-royal-gold/10 outline-none transition-all placeholder:text-warm-off-white/20"
                     />
                   ) : (
                     <input 
                       type="tel" 
                       value={mobile}
                       onChange={(e) => setMobile(e.target.value)}
                       placeholder="MOBILE NUMBER"
                       className="w-full bg-white/10 border-2 border-white/10 rounded-2xl p-6 text-warm-off-white font-sans font-black text-sm tracking-[0.2em] focus:border-royal-gold focus:ring-4 focus:ring-royal-gold/10 outline-none transition-all placeholder:text-warm-off-white/20"
                     />
                   )}
                </div>
                <button 
                  onClick={activeTool === 'name' ? calculateNameNumerology : calculateMobileNumerology}
                  disabled={isCalculating || (activeTool === 'name' ? !name.trim() : !mobile.trim())}
                  className="w-full py-6 bg-royal-gold text-mystic-navy font-sans font-black tracking-[0.3em] text-[11px] rounded-none hover:shadow-[0_0_50px_rgba(201,168,76,0.3)] hover:scale-[1.02] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                   {isCalculating ? (
                     <>
                       <RefreshCw className="w-5 h-5 animate-spin mr-3" />
                       Analyzing Matrix...
                     </>
                   ) : (
                     "Execute Analysis"
                   )}
                </button>

                <AnimatePresence>
                  {results && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="pt-10 border-t border-white/5 space-y-10"
                    >
                      {/* Breakdown */}
                      <div className="flex flex-wrap justify-center gap-3">
                        {results.breakdown.map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <span className="text-xl font-serif font-bold text-beige">{item.char}</span>
                            <span className="text-[8px] bg-gold/10 text-gold px-1.5 rounded-none">{item.val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Charts for Name, or Simple result for Mobile */}
                      {results.type === 'name' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
                          <div className="space-y-4">
                            <span className="text-[10px] tracking-widest text-gold font-black text-center block opacity-60">Chaldean Grid</span>
                            <div className="grid grid-cols-3 gap-2 aspect-square max-w-[200px] mx-auto">
                              {[3, 6, 9, 2, 5, 8, 1, 4, 7].map((num) => (
                                <div key={num} className={cn(
                                  "flex items-center justify-center rounded-none border text-sm font-black transition-all",
                                  results.grid[num] ? "bg-gold text-premium-dark border-gold scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]" : "border-white/10 text-white/30"
                                )}>
                                  {num}
                                  {results.grid[num] > 1 && <span className="absolute -top-1 -right-1 text-[10px] bg-white text-premium-dark px-1.5 rounded-none font-black">{results.grid[num]}</span>}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <span className="text-[10px] tracking-widest text-gold font-black text-center block opacity-60">Energy Pyramid</span>
                            <div className="flex flex-col items-center gap-1.5">
                              {results.pyramid.slice(-5).map((layer, lIdx) => (
                                <div key={lIdx} className="flex gap-1.5 justify-center">
                                  {layer.map((val, vIdx) => (
                                    <div key={vIdx} className="w-8 h-8 rounded-none bg-white/10 border border-white/20 flex items-center justify-center text-[12px] font-black text-white">
                                      {val}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-6 py-4">
                           <div className="w-32 h-32 rounded-none border-4 border-gold flex flex-col items-center justify-center animate-pulse-slow">
                              <span className="text-[10px] tracking-widest text-gold font-black opacity-60">Signal Value</span>
                              <span className="text-5xl font-display font-black text-white">{results.single}</span>
                           </div>
                           <p className="text-center text-white/80 text-sm italic font-medium max-w-xs">{NUMBER_MEANINGS[results.single]}</p>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 bg-white/10 rounded-none border border-white/20 text-center">
                          <span className="text-[9px] tracking-widest text-gold font-black block mb-2">Total Vibration</span>
                          <span className="text-4xl font-display font-black text-white">{results.compound}</span>
                        </div>
                        <div className="p-6 bg-gold text-premium-dark rounded-none text-center shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                          <span className="text-[9px] tracking-widest opacity-70 block mb-2 font-black">Core Destiny</span>
                          <span className="text-4xl font-display font-black">{results.single}</span>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-[10px] text-center text-white/60 italic tracking-widest leading-loose font-medium">
                     * This teaser uses standard Chaldean logic. <br />
                     Our deep-dive service includes Degree Mapping & Dasha Sync.
                  </p>
                </div>
             </div>
          </motion.div>
       </div>
    </section>
  );
}

export function AcademySection() {
  return (
    <section className="py-40 relative bg-warm-off-white overflow-hidden">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-royal-gold/10 pb-12">
             <div>
                <span className="text-royal-gold text-[10px] tracking-[0.6em] font-black mb-6 block">Education & Impact</span>
                <h2 className="section-title text-mystic-navy">
                   <span className="text-royal-gold">Destiny</span> Numbers Academy
                </h2>
             </div>
             <p className="text-mystic-navy/70 max-w-md text-[15px] leading-relaxed font-sans font-medium italic">
                Empowering the next generation of practitioners with precise analytical occult techniques used by Arun Poovaiah himself.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {COURSES.map((course, idx) => {
                const courseImages = [
                  "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
                  "https://images.unsplash.com/photo-1446064429943-23f9a07a8535?auto=format&fit=crop&q=80&w=800", 
                  "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800"
                ];
                return (
                   <div key={course.id} className="relative group overflow-hidden rounded-[2rem] bg-white border border-royal-gold/10 shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-mystic-navy via-mystic-navy/20 to-transparent z-10" />
                      <img 
                       src={courseImages[idx % courseImages.length]} 
                       className="w-full h-[450px] object-cover grayscale opacity-40 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                       onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800&sig=${idx}`;
                       }}
                       referrerPolicy="no-referrer"
                       alt={course.title}
                      />
                       <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                         <span className="text-[9px] bg-royal-gold text-mystic-navy px-3 py-1 rounded-none inline-block w-fit font-black mb-6 tracking-widest">{course.level}</span>
                 <h3 className="text-3xl font-display font-medium text-warm-off-white mb-4 leading-tight group-hover:text-royal-gold transition-colors">{course.title}</h3>
                         <p className="text-warm-off-white/80 text-sm mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 leading-relaxed font-sans italic">{course.description}</p>
                         <button className="flex items-center gap-3 text-royal-gold font-sans font-black tracking-[0.3em] text-[10px] group/btn">
                            Explore Curriculum <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                         </button>
                      </div>
                   </div>
                );
             })}
          </div>
       </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-40 bg-warm-off-white relative">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-royal-gold text-[10px] tracking-[0.6em] font-black mb-8 block">Global Authority</span>
             <h2 className="section-title leading-tight text-mystic-navy">Client <span className="text-royal-gold">Transformations</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {TESTIMONIALS.map((t, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-12 rounded-none relative bg-white border border-royal-gold/10 flex flex-col shadow-xl"
                >
                   <div className="text-royal-gold/20 mb-10">
                      <svg width="50" height="40" viewBox="0 0 50 40" fill="currentColor">
                         <path d="M15 0H0V20H15V30H5V40H20V0H15Z" />
                         <path d="M45 0H30V20H45V30H35V40H50V0H45Z" />
                      </svg>
                   </div>
                   <p className="text-mystic-navy/80 italic mb-12 leading-relaxed font-display text-xl font-medium">"{t.content}"</p>
                   <div className="mt-auto flex items-center gap-5">
                      <div className="relative">
                        <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border border-royal-gold/40 relative z-10" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-royal-gold/30 blur-lg rounded-full" />
                      </div>
                      <div>
                         <h4 className="text-mystic-navy font-sans font-black text-xs tracking-[0.2em] mb-1">{t.name}</h4>
                         <p className="text-royal-gold text-[10px] font-black tracking-widest opacity-80">{t.role}</p>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-40 relative overflow-hidden bg-mystic-navy border-t border-royal-gold/10">
       {/* Cinematic Overlays */}
       <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-20">
           <div className="w-[1200px] h-[1200px] border-[1px] border-royal-gold/20 rounded-none animate-pulse-slow perspective-1000 rotate-12" />
           <div className="absolute w-[800px] h-[800px] border-[1px] border-royal-gold/10 rounded-none animate-pulse-slow perspective-1000 -rotate-12" />
       </div>
       
       <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-[100px] font-display font-medium text-warm-off-white mb-12 leading-[0.9] tracking-tighter">
               Align <br/> <span className="text-royal-gold font-sans font-black italic">Your Logic.</span>
            </h2>
             <p className="text-warm-off-white/80 text-lg md:text-xl font-black tracking-[0.4em] mb-16 font-sans">
               Secure Your Premium Digital Alignment Session
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
               <Link 
                 to="/consultation" 
                 className="px-16 py-7 bg-royal-gold text-mystic-navy font-sans font-black tracking-[0.3em] text-[12px] rounded-none hover:scale-105 hover:shadow-[0_0_70px_rgba(201,168,76,0.5)] transition-all flex items-center gap-4 group"
               >
                  Schedule Appointment
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
               </Link>
               <a 
                 href="tel:+917406357511" 
                 className="px-16 py-7 border border-royal-gold/20 bg-white/5 text-warm-off-white font-sans font-black tracking-[0.3em] text-[12px] rounded-none hover:bg-royal-gold hover:text-mystic-navy transition-all backdrop-blur-md"
               >
                  Direct Concierge
               </a>
            </div>
            <p className="mt-20 text-warm-off-white/30 text-[10px] font-black tracking-[0.5em] font-sans">
               Global Virtual Consultancy • Exclusive Private Sessions
            </p>
          </motion.div>
       </div>
    </section>
  );
}
