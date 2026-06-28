import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCMS } from '../context/CMSContext';
import { 
  Sparkles,
  TrendingUp,
  Search,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_DATA, SERVICES } from '../lib/constants';
import { cn, formatImageUrl } from '../lib/utils';
import { 
  calculateNameNumber, 
  calculateBhagyank, 
  calculateMoolank, 
  getCompatibilityScore, 
  getZodiacInfo,
  CHALDEAN_CHART 
} from '../lib/numerology';

const TESTIMONIALS = [
  {
    name: "Priyanka Prasaath",
    role: "Psychologist",
    quote: "I'd like to swear by his work , his astrological predictions are on point and without thinking twice I'd turn towards him for advice at any point in my life when the need be . He not only tells you things you want to hear but also things we have to work on to better ourselves .   It's been wonderful so far , thank you 🙏.",
    image: "https://lh3.googleusercontent.com/d/1a2fidCSDP-jV0LpI-GkWfHUQkolV6LDt"
  },
  {
    name: "Linda Ibañez",
    role: "Chile-Argentina",
    quote: "Recomiendo en un 100%. La experiencia promete ser muy mística, pero no solo eso, descubres que dentro de tu vida hay situaciones que son muy marcadas por los designios con los que Dios te mandó y parte de eso es tu fecha de nacimiento lo cual es con los números que Dios decidió. Propongo descubran ustedes mísmos y se sorprenderán 🙂",
    image: "https://lh3.googleusercontent.com/d/1AZkUG4DJP-jMMe030aaaCTGIrjj-vGIZ"
  },
  {
    name: "Nidhi Shetty",
    role: "Educationist",
    quote: "Extremely knowledgeable! He has an explanation for everything. At times when I feel stuck Mr. Poovaiah is my goto person to contact for some clarity and solutions. His remedies work like magic.",
    image: "https://lh3.googleusercontent.com/d/1nFq_hPmoknps0hid4h6H6HMlLzggkkFd"
  },
  {
    name: "Deepa S",
    role: "Engineer",
    quote: "My son's numerology number was given by him. I am satisfied with his calculation and prediction. and Life Prediction is very difficult, especially about the future but he predicted accurately and give me a solution too.",
    image: "https://lh3.googleusercontent.com/d/10DCjcfIr6KWa9JNmw9UuwyECnOkNrV5G"
  },
  {
    name: "Pramita",
    role: "Entrepreneur",
    quote: "You are blessing of God in my life. I would like to tell you sir you are mismerising by your words and action. I appreciate you getting in touch with me and helping me out. I think that was necessary. I ll be able to understand the situation more clearly as a result of this. I m glad I have this knowledge. Thank you sir for your wisdom, generous, overwhelming behavior. I would love to give 10 star.....",
    image: "https://lh3.googleusercontent.com/d/1z1IU8P88ZUvP6oUBfO84ETLLbFT5Z6bO"
  },
  {
    name: "Surabhi",
    role: "Home Maker",
    quote: "He was the best astrologer I have spoken with; he was so perfect with my analysis. Thankful to you, sir. Definitely, I suggest everyone reach out to him.",
    image: "https://lh3.googleusercontent.com/d/1h7J_NOi3Erg3nSM4osxabSd_SnDURuCF"
  },
  {
    name: "Dr. Dhanya",
    role: "Doctor",
    quote: "Very knowledgeable. Answering to the point, not beating around the bush, easy remedies, highly recommended",
    image: "https://lh3.googleusercontent.com/d/1es1UfeSFgc7YM1QijM0rZTpabHvpFs3j"
  },
  {
    name: "Rashmika A",
    role: "IT Manager",
    quote: "Thank you so much sir for the wonderful session regarding my marriage and love relationship.superbbb accuracy of my present life Thank you so very much",
    image: "https://lh3.googleusercontent.com/d/1M6MF3t1Y5C16GsoRyxLxaqQJCVQjSeWU"
  }
];

export default function Home() {
  const { posts, loading } = useCMS();
  const [calcName, setCalcName] = useState('');
  const [calcDob, setCalcDob] = useState('');
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);
  const [calcResult, setCalcResult] = useState<{
    total: number;
    compound: number;
    psychic: number;
    destiny: number;
    score: number;
    zodiac: string;
    planet: string;
    verdict: string;
    verdictDesc: string;
  } | null>(null);

  const heroSlides = [
    {
      title: "Decode Your Destiny",
      desc: "Expert Numerology, Astrology & Vastu Consultations trusted by 5,000+ global seekers.",
      bgImage: "https://lh3.googleusercontent.com/d/1SqXM-UhFWzmPiSLOBaVAuKABHa-HkvlI",
      buttons: [
        { text: "Unlock Your Destiny", path: "/consultation", primary: true },
        { text: "Find your destiny number", path: "/calculator", primary: false }
      ]
    },
    {
      title: "Align with the Stars",
      desc: "Discover how celestial movements shape your personal and professional journey.",
      bgImage: "https://lh3.googleusercontent.com/d/1wDEAUYgLjDFdG7Mvyag-9KZG-hPW7Fxc",
      buttons: [
        { text: "Discover Your Insight", path: "/tools", primary: true },
        { text: "Speak to an Expert", path: "/consultation", primary: false }
      ]
    },
    {
      title: "Harmonize Your Space",
      desc: "Transform your environment into a sanctuary of energy, prosperity, and peace.",
      bgImage: "https://lh3.googleusercontent.com/d/1ue_4vsaU6aoWRnOXxjq3rYp_FoTYzuUd",
      buttons: [
        { text: "Get Expert Insight", path: "/consultation", primary: true }
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleCalculate = () => {
    if (!calcName || !calcDob) return;
    
    const nameRes = calculateNameNumber(calcName, CHALDEAN_CHART);
    const psychic = calculateMoolank(calcDob);
    const destiny = calculateBhagyank(calcDob);
    const zodiacData = getZodiacInfo(calcDob);
    
    // Detailed verdict based on multi-factor compatibility
    const dScore = getCompatibilityScore(nameRes.single, destiny);
    const pScore = getCompatibilityScore(nameRes.single, psychic);
    const totalScore = dScore + pScore;
    
    let verdict = "Neutral";
    let verdictDesc = "The alignment is stable but requires consistent effort to manifest its potential.";
    
    if (totalScore >= 4) {
      verdict = "Excellent";
      verdictDesc = "Outstanding! Your name vibration is perfectly synchronized with your life path and moolank.";
    } else if (totalScore >= 2) {
      verdict = "Good";
      verdictDesc = "Your name frequency aligns well with your birth blueprint, supporting growth and harmony.";
    } else if (totalScore < 0) {
      verdict = "Conflicting";
      verdictDesc = "This frequency creates inner friction. A name correction might unlock smoother manifestation.";
    }

    setCalcResult({
      total: nameRes.single,
      compound: nameRes.compound,
      psychic,
      destiny,
      score: totalScore,
      zodiac: zodiacData.sign,
      planet: zodiacData.planet,
      verdict,
      verdictDesc
    });
  };

  const latestPosts = posts
    .filter(p => p.status === 'published')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-bg flex items-center justify-center">
        <Sparkles className="w-8 h-8 animate-spin text-warm-accent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-bg flex flex-col">
      {/* 1. Hero Section */}
      <section 
        className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center bg-[#1C3557] border-b border-warm-border py-20 px-4 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${heroSlides[currentSlide].bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Semi-transparent dark luxury overlay to ensure legibility */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        {/* Grid pattern overlay or decorative golden dust layout */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/85 pointer-events-none z-0"></div>

        <div className="site-container max-w-4xl mx-auto text-center relative z-10 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles className="w-3 h-3 text-[#C9A84C] animate-pulse" />
                Vedic &amp; Cosmic Alignment
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl text-white font-medium mb-6 leading-tight tracking-tight">
                {heroSlides[currentSlide].title}
              </h1>
              
              <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 font-normal">
                {heroSlides[currentSlide].desc}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {heroSlides[currentSlide].buttons.map((btn, bIdx) => (
                  <Link
                    key={bIdx}
                    to={btn.path}
                    className={cn(
                      "px-8 py-4 font-display font-black tracking-widest text-[11px] transition-all duration-300 hover:scale-105 shadow-lg",
                      btn.primary 
                        ? "bg-[#C9A84C] text-[#1C3557]" 
                        : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                    )}
                  >
                    {btn.text}
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation indicator */}
          <div className="flex justify-center gap-3 mt-16 z-20">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  idx === currentSlide ? "bg-[#C9A84C] w-8" : "bg-white/25 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Slider Prev & Next arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 md:flex hidden items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/30 hover:bg-[#C9A84C] text-white hover:text-[#1C3557] hover:border-transparent transition-all z-20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 md:flex hidden items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/30 hover:bg-[#C9A84C] text-white hover:text-[#1C3557] hover:border-transparent transition-all z-20"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 2. Divine Sciences */}
      <section className="py-24 bg-[#F5ECD7]">
        <div className="site-container text-center mb-16">
          <span className="section-eyebrow uppercase text-[#5C4013]">Ancient Knowledge</span>
          <h2 className="section-title text-[#2C2C2C]">Divine Sciences</h2>
          <div className="w-12 h-1 bg-[#C8913A] mx-auto mt-4"></div>
          <p className="mt-8 text-[#2C2C2C] max-w-2xl mx-auto italic font-medium">
            Explore the intersection of frequency, planetary nodes, and spatial energy to decode the hidden patterns of your existence.
          </p>
        </div>
        <div className="site-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Numerology', desc: 'The science of number frequency and vibration.', icon: Sparkles, path: '/services/numerology' },
            { title: 'Vedic Astrology', desc: 'Precision mapping of planetary nodes and timing.', icon: TrendingUp, path: '/services/horoscope' },
            { title: 'Vastu Shastra', desc: 'The architectural law of element and orientation.', icon: Search, path: '/services/vastu' },
            { title: 'Energy Healing', desc: 'Restoring the balance of the subtle body.', icon: Sparkles, path: '/services/reiki-master' }
          ].map((item, idx) => (
            <Link key={idx} to={item.path} className="service-card group">
              <div className="service-icon-box mb-6">
                <item.icon className="service-icon" />
              </div>
              <h3 className="text-xl mb-3 font-heading service-title">{item.title}</h3>
              <p className="text-sm leading-relaxed service-desc">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. 6 Service Boxes */}
      <section className="py-24 bg-warm-bg-warm border-y border-warm-border">
        <div className="site-container text-center mb-16">
          <span className="section-eyebrow">Precision Consultancy</span>
          <h2 className="section-title">Specialized Services</h2>
          <div className="w-12 h-1 bg-warm-accent mx-auto mt-4"></div>
        </div>
        <div className="site-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, idx) => (
            <Link key={idx} to={service.path || '/services'} className="service-card group">
              <div className="service-icon-box mb-6">
                <service.icon className="service-icon" />
              </div>
              <p className="service-category">{service.category}</p>
              <h3 className="text-xl mb-4 font-heading service-title">{service.title}</h3>
              <p className="text-sm leading-relaxed mb-6 service-desc">{service.description}</p>
              <span className="text-xs font-bold service-footer-link">Learn more →</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-outline">Explore All Services</Link>
        </div>
      </section>

      {/* 4. Dr. Arun Poovaiah Profile */}
      <section className="py-24 bg-warm-bg">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden warm-shadow border border-warm-border">
                <img src={BRAND_DATA.profilePhoto} className="w-full h-full object-cover" alt="Dr. Arun" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-warm-accent text-white p-8 rounded-lg warm-shadow max-w-[240px]">
                <Sparkles className="w-8 h-8 mb-4" />
                <p className="text-sm font-medium italic">"My mission is to replace superstition with scientific clarity."</p>
              </div>
            </div>
            <div>
              <span className="section-eyebrow">The Visionary</span>
              <h2 className="section-title">Dr. Arun Poovaiah</h2>
              <div className="w-12 h-1 bg-warm-accent mb-8"></div>
              <div className="prose-warm">
                <p className="text-lg">
                  With over a decade of research into sacred geometries and Vedic algorithms, 
                  Dr. Arun Poovaiah has helped thousands of individuals and global brands 
                  align their physical reality with their cosmic blueprint.
                </p>
                <p className="text-lg">
                  His methodology is strictly analytical, focusing on the degree-based positioning 
                  of planetary nodes and the numerical frequency of identity signals.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-heading text-warm-accent">15+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-warm-text-muted">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-heading text-warm-accent">10k+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-warm-text-muted">Sessions Delivered</span>
                </div>
              </div>
              <div className="mt-12">
                <Link to="/about" className="btn btn-primary">Read the Full Journey</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Chaldean Calculator */}
      <section className="py-24 bg-warm-bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Search className="w-[600px] h-[600px] text-white" />
        </div>
        <div className="site-container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-warm-accent uppercase tracking-[0.4em] mb-4 block">Interactive Tool</span>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-white">Decode Your Name</h2>
            <p className="text-warm-on-dark-muted leading-relaxed">
              Every letter carries a number. Every number carries a vibration. <br />
              Enter your name to see how the universe identifies you.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">
             <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold mb-3 block">Full Name</label>
                    <input 
                      type="text" 
                      value={calcName}
                      onChange={(e) => setCalcName(e.target.value)}
                      placeholder="Enter legal name..."
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-warm-accent outline-none transition-all placeholder:text-white/20 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold mb-3 block">Date of Birth</label>
                    <input 
                      type="date" 
                      value={calcDob}
                      onChange={(e) => setCalcDob(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-warm-accent outline-none transition-all placeholder:text-white/20 text-sm"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleCalculate}
                  className="w-full btn btn-primary py-3 justify-center text-sm font-bold tracking-widest"
                >
                   ANALYZE VIBRATION
                </button>

                <AnimatePresence>
                  {calcResult && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-6 border-t border-white/10 bg-white/5 rounded-xl"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1 font-bold">Name Total</p>
                          <p className="text-xl font-heading text-warm-accent">{calcResult.compound}/{calcResult.total}</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1 font-bold">Psychic No.</p>
                          <p className="text-xl font-heading text-white">{calcResult.psychic}</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1 font-bold">Destiny No.</p>
                          <p className="text-xl font-heading text-white">{calcResult.destiny}</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1 font-bold">Zodiac Sign</p>
                          <p className="text-xl font-heading text-warm-accent text-sm truncate">{calcResult.zodiac}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1",
                          calcResult.score >= 2 ? "bg-green-500/20 text-green-400" : 
                          calcResult.score === 1 ? "bg-yellow-500/20 text-yellow-400" : 
                          "bg-red-500/20 text-red-400"
                        )}>
                          {calcResult.score >= 2 ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                        </div>
                        <div className="flex-grow">
                          <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1 font-bold">Frequency Status</p>
                          <p className="text-sm font-bold text-white mb-1">
                             Result: {calcResult.verdict}
                          </p>
                          <p className="text-xs text-white/60 leading-relaxed font-medium">
                            {calcResult.verdictDesc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-center">
                  <Link to="/calculator" className="text-xs text-warm-accent font-bold hover:underline">
                    Access Detailed Case Analysis →
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Cosmic Insights (Blog) */}
      <section className="py-24 bg-warm-bg">
        <div className="site-container flex items-baseline justify-between mb-16 border-b border-warm-border pb-6">
          <div>
            <span className="section-eyebrow">Cosmic Insights</span>
            <h2 className="section-title mb-0">Latest Articles</h2>
          </div>
          <Link to="/blog" className="text-sm font-bold text-warm-accent hover:underline">
            All Insights →
          </Link>
        </div>
        
        <div className="site-container grid grid-cols-1 md:grid-cols-3 gap-12">
          {latestPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/blog/${post.slug}`} className="block aspect-[4/3] rounded-lg overflow-hidden bg-warm-bg-warm mb-6">
                <img 
                  src={formatImageUrl(post.thumbnail)} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt={post.title} 
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="flex items-center gap-3 text-[10px] font-bold text-warm-accent uppercase tracking-widest mb-3">
                <span>{post.category}</span>
                <span className="text-warm-border">|</span>
                <span className="text-warm-text-muted">{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <h3 className="font-heading text-xl text-warm-text-primary group-hover:text-warm-accent transition-colors leading-tight mb-4">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm text-warm-text-secondary line-clamp-2 mb-6">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="text-xs font-black text-warm-accent uppercase tracking-widest hover:underline">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 7. Stories of Resonance (Testimonials) */}
      <section className="py-24 bg-warm-bg-warm overflow-hidden">
        <div className="site-container text-center mb-8">
          <span className="section-eyebrow">Echoes of Clarity</span>
          <h2 className="section-title">Stories of Resonance</h2>
          <div className="w-12 h-1 bg-warm-accent mx-auto mt-4"></div>
        </div>

        {/* Brand quote icon */}
        <div className="flex justify-center mb-8">
          <svg className="w-12 h-12 text-warm-accent/25 fill-current" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-4.854 2.82-7.79 7.397-8.609l.983 1.761c-2.409.796-3.584 2.181-3.524 4.152H22v10.087h-7.983zm-12 0v-7.391c0-4.854 2.82-7.79 7.397-8.609l.983 1.761c-2.409.796-3.584 2.181-3.524 4.152H10v10.087H2.017z" />
          </svg>
        </div>

        {/* 3D-Like Focused Sliding Deck */}
        <div className="relative w-full max-w-6xl mx-auto px-4">
          <div className="relative flex items-center justify-center h-[520px] sm:h-[440px] md:h-[380px] w-full overflow-visible py-8">
            {TESTIMONIALS.map((t, idx) => {
              const total = TESTIMONIALS.length;
              const diff = (idx - activeTestimonialIdx + total) % total;
              
              let position = 'hidden';
              if (idx === activeTestimonialIdx) {
                position = 'active';
              } else if (diff === 1) {
                position = 'right';
              } else if (diff === total - 1) {
                position = 'left';
              }

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (position === 'left') {
                      setActiveTestimonialIdx((prev) => (prev - 1 + total) % total);
                    } else if (position === 'right') {
                      setActiveTestimonialIdx((prev) => (prev + 1) % total);
                    }
                  }}
                  className={cn(
                    "absolute transition-all duration-700 ease-in-out rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none border border-neutral-200/50 bg-white",
                    // Center Focused Card
                    position === 'active' && [
                      "z-25 scale-100 opacity-100 shadow-2xl",
                      "w-full max-w-[92%] sm:max-w-[34rem] md:max-w-[42rem]",
                      "translate-x-0 cursor-default"
                    ],
                    // Left Slide Card
                    position === 'left' && [
                      "z-10 scale-85 opacity-30 shadow-md cursor-pointer",
                      "w-[80%] max-w-[28rem]",
                      "-translate-x-[45%] md:-translate-x-[65%] lg:-translate-x-[85%]",
                      "hidden md:flex"
                    ],
                    // Right Slide Card
                    position === 'right' && [
                      "z-10 scale-85 opacity-30 shadow-md cursor-pointer",
                      "w-[80%] max-w-[28rem]",
                      "translate-x-[45%] md:translate-x-[65%] lg:translate-x-[85%]",
                      "hidden md:flex"
                    ],
                    // Out-of-bounds Cards
                    position === 'hidden' && "opacity-0 scale-75 pointer-events-none translate-y-4"
                  )}
                >
                  {/* Rating indicator stars */}
                  <div className="flex justify-center space-x-1 mb-4 select-none">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <svg key={starIdx} className="w-4 h-4 fill-warm-accent" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Body Quote block */}
                  <p className="text-sm sm:text-base md:text-lg italic font-heading text-warm-text-primary px-2 sm:px-4 mb-6 leading-relaxed select-text">
                    "{t.quote}"
                  </p>

                  {/* Author Avatar & details */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-3 border-2 border-warm-accent shadow bg-neutral-100 flex items-center justify-center">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop";
                        }}
                      />
                    </div>
                    <h4 className="text-sm font-bold text-warm-accent uppercase tracking-widest">{t.name}</h4>
                    <p className="text-[10px] font-semibold text-warm-text-muted mt-1 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Underlay Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-neutral-200/50 mt-8 pt-6 gap-4">
            {/* Dots */}
            <div className="flex items-center space-x-2 order-2 sm:order-1">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonialIdx(i)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    i === activeTestimonialIdx 
                      ? "bg-warm-accent scale-110 w-6" 
                      : "bg-warm-accent/20 hover:bg-warm-accent/50"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center space-x-4 order-1 sm:order-2">
              <button
                onClick={() => setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="bg-white hover:bg-warm-accent/10 border border-neutral-200 text-warm-text-primary rounded-full w-10 h-10 flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-warm-accent active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-warm-text-primary" />
              </button>
              <button
                onClick={() => setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="bg-white hover:bg-warm-accent/10 border border-neutral-200 text-warm-text-primary rounded-full w-10 h-10 flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-warm-accent active:scale-95"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5 text-warm-text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
