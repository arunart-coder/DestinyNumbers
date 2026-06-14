import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NumerologyMatrix } from '../components/NumerologyMatrix';
import { 
  Building2, 
  User, 
  Globe, 
  ArrowRight, 
  ArrowLeft,
  Palette,
  Target,
  BarChart3,
  Search,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  DollarSign,
  Briefcase
} from 'lucide-react';
import { cn } from '../lib/utils';
import { StandardInput, StandardNameInput, StandardDateInput, StandardMobileInput, StandardSelect, StandardTextArea } from '../components/StandardFormFields';
import { 
  CHALDEAN_CHART, 
  calculateNameNumber, 
  calculateSoulNumber, 
  calculatePersonalityNumber,
  getSingleDigit,
  getCompatibilityScore
} from '../lib/numerology';
import { COLORS, INDUSTRIES, BUSINESS_TYPES, LUCKY_COLORS_MAP } from '../lib/brand-constants';
import { Link } from 'react-router-dom';

interface BrandData {
  brandName: string;
  tagline: string;
  industry: string;
  launchDate: string;
  founderName: string;
  mobile: string;
  website: string;
  logoColors: string[];
  businessType: string;
  targetAudience: string;
  country: string;
}

const STEPS = [
  { id: 'details', title: 'Business Matrix', icon: Building2 },
  { id: 'logo', title: 'Energy Palette', icon: Palette },
  { id: 'context', title: 'Market Context', icon: Target }
];

export default function BrandAuditor() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BrandData>({
    brandName: '',
    tagline: '',
    industry: INDUSTRIES[0].name,
    launchDate: '',
    founderName: '',
    mobile: '',
    website: '',
    logoColors: [],
    businessType: BUSINESS_TYPES[0],
    targetAudience: '',
    country: ''
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const calculateResults = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      // Step 1: Numerology
      const chaldean = calculateNameNumber(data.brandName, CHALDEAN_CHART);
      const soul = calculateSoulNumber(data.brandName, CHALDEAN_CHART);
      const personality = calculatePersonalityNumber(data.brandName, CHALDEAN_CHART);

      // Step 2: Founder Compatibility
      const dateParts = data.launchDate.split(/[/-]|\s\/\s/).filter(Boolean).map(p => p.trim());
      const day = parseInt(dateParts[0] || '1');
      const month = parseInt(dateParts[1] || '1');
      const year = parseInt(dateParts[2] || '2000');
      
      const birthNumber = getSingleDigit(day);
      const lifePath = getSingleDigit(day + month + year);
      
      const dScore = getCompatibilityScore(chaldean.single, lifePath);
      const pScore = getCompatibilityScore(chaldean.single, birthNumber);
      const totalCompScore = dScore + pScore;

      const founderComp = Math.min(100, Math.max(0, (totalCompScore + 2) * 20 + 20));

      // Step 3: Industry Alignment
      const selectedInd = INDUSTRIES.find(i => i.name === data.industry);
      const industryVibe = selectedInd?.vibration || 1;
      const industryScore = (getCompatibilityScore(chaldean.single, industryVibe) + 1) * 30 + 20;

      // Step 4: Color Analysis
      const luckyColors = [...new Set([...LUCKY_COLORS_MAP[birthNumber], ...LUCKY_COLORS_MAP[lifePath]])];
      const matchingColor = data.logoColors.some(c => luckyColors.some(lc => lc.toLowerCase().includes(c.toLowerCase())));
      const colorScore = matchingColor ? 95 : data.logoColors.length > 0 ? 75 : 50;
      
      const overallScore = Math.min(100, Math.round((founderComp + industryScore + colorScore) / 2.7));

      let compatibilityVerdict = "Neutral";
      let compatibilityDesc = "The brand frequency is stable with the founder.";
      if (totalCompScore >= 4) {
        compatibilityVerdict = "Excellent";
        compatibilityDesc = "Perfect synchronization! This name will amplify the founder's natural luck.";
      } else if (totalCompScore >= 2) {
        compatibilityVerdict = "Good";
        compatibilityDesc = "Supportive alignment that favors commercial success.";
      } else if (totalCompScore < 0) {
        compatibilityVerdict = "Conflicting";
        compatibilityDesc = "Vibrational friction. The name may create obstacles for the founder.";
      }

      setResults({
        overallScore,
        brandNum: chaldean.single,
        compound: chaldean.compound,
        soul,
        personality,
        birthNumber,
        lifePath,
        luckyColors,
        founderComp: Math.round(founderComp),
        industryScore: Math.round(industryScore),
        colorScore: Math.round(colorScore),
        compatibilityVerdict,
        compatibilityDesc,
        growthPotential: Math.round(overallScore * 0.9 + 10),
        trustScore: Math.round(overallScore * 0.85 + 15),
        visibilityScore: Math.round(overallScore * 0.95 + 5),
        frequencyRating: overallScore > 85 ? 'Excellent' : overallScore > 70 ? 'Optimal' : 'Needs Correction'
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  const nextStep = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else calculateResults();
  };

  const prevStep = () => setStep(step - 1);

  const toggleColor = (name: string) => {
    setData(prev => ({
      ...prev,
      logoColors: prev.logoColors.includes(name) 
        ? prev.logoColors.filter(c => c !== name)
        : [...prev.logoColors, name]
    }));
  };

  if (results) {
    return (
      <div className="min-h-screen bg-warm-off-white text-mystic-navy pt-20 pb-40 px-6 font-sans">
        <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div>
              <span className="text-royal-gold text-[10px] tracking-widest font-bold mb-6 block">Analysis complete</span>
              <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none">
                Brand energy <span className="text-royal-gold">intelligence</span>
              </h1>
            </div>
            <div className="flex items-center gap-8 bg-mystic-navy/5 border border-royal-gold/20 p-8 rounded-none backdrop-blur-md">
              <div className="text-right">
                <span className="section-eyebrow text-mystic-navy/60 block mb-2">Overall Alignment</span>
                <span className="text-6xl font-display font-black text-royal-gold">{results.overallScore}%</span>
              </div>
              <div className="w-px h-16 bg-royal-gold/20" />
              <div>
                <span className="section-eyebrow text-mystic-navy/60 block mb-2">Vibration Status</span>
                <span className="text-2xl font-display font-bold block text-mystic-navy">{results.frequencyRating}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="glass-card p-10 rounded-none bg-gold-pale/30 border-royal-gold/20 shadow-xl tool-card"
            >
              <span className="section-eyebrow text-mystic-purple mb-6 block">Step 1 — Brand Matrix</span>
              <div className="flex items-end gap-6 mb-10">
                <h2 className="text-9xl font-display font-black text-mystic-navy italic leading-none">{results.brandNum}</h2>
                <div className="pb-4">
                  <div className="section-eyebrow text-mystic-navy/60 mb-1">Compound</div>
                  <div className="text-2xl font-display font-bold text-royal-gold">{results.compound}</div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[11px] tracking-wider mb-3 text-mystic-navy font-bold">
                    <span>Soul vibration</span>
                    <span>{results.soul}</span>
                  </div>
                  <div className="h-2 bg-mystic-navy/5 rounded-none overflow-hidden border border-royal-gold/10">
                    <motion.div initial={{ width: 0 }} animate={{ width: results.soul * 11 + '%' }} className="h-full bg-royal-gold" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] tracking-wider mb-3 text-mystic-navy font-bold">
                    <span>Personality energy</span>
                    <span>{results.personality}</span>
                  </div>
                  <div className="h-2 bg-mystic-navy/5 rounded-none overflow-hidden border border-royal-gold/10">
                    <motion.div initial={{ width: 0 }} animate={{ width: results.personality * 11 + '%' }} className="h-full bg-celestial-blue" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="glass-card p-10 rounded-none bg-celestial-blue/[0.03] border-royal-gold/20 shadow-xl tool-card"
            >
              <span className="section-eyebrow text-celestial-blue mb-6 block">Step 2 — Strategic Alignment</span>
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-none bg-white border border-royal-gold/10 flex items-center justify-center shadow-sm relative group/comp">
                    <User className="w-8 h-8 text-royal-gold" />
                    {/* Tooltip for verdict */}
                    <div className="absolute top-full left-0 mt-4 p-4 bg-white border border-royal-gold/20 rounded-none shadow-xl opacity-0 invisible group-hover/comp:opacity-100 group-hover/comp:visible transition-all z-20 w-64 text-mystic-navy text-[10px] font-bold leading-relaxed">
                       <span className="text-royal-gold block mb-1 uppercase tracking-widest">{results.compatibilityVerdict} ALIGNMENT</span>
                       {results.compatibilityDesc}
                    </div>
                  </div>
                  <div>
                    <div className="section-eyebrow text-mystic-navy/60">Founder Compatibility</div>
                    <div className="text-3xl font-display font-black text-mystic-navy">{results.founderComp}%</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-none bg-white border border-royal-gold/10 flex items-center justify-center shadow-sm">
                    <Building2 className="w-8 h-8 text-celestial-blue" />
                  </div>
                  <div>
                    <div className="section-eyebrow text-mystic-navy/60">Industry Suitability</div>
                    <div className="text-3xl font-display font-black text-mystic-navy">{results.industryScore}%</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-none bg-white border border-royal-gold/10 flex items-center justify-center shadow-sm">
                    <Palette className="w-8 h-8 text-mystic-purple" />
                  </div>
                  <div>
                    <div className="section-eyebrow text-mystic-navy/60">Color Energy Score</div>
                    <div className="text-3xl font-display font-black text-mystic-navy">{results.colorScore}%</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="glass-card p-10 rounded-none bg-mystic-navy/5 border-royal-gold/20 shadow-xl tool-card"
            >
              <span className="section-eyebrow text-royal-gold mb-6 block">Step 3 — Performance Metrics</span>
              <div className="grid grid-cols-1 gap-6">
                { [
                  { label: 'Financial Potential', val: results.growthPotential, icon: DollarSign, color: 'text-royal-gold' },
                  { label: 'Public Trust Energy', val: results.trustScore, icon: ShieldCheck, color: 'text-celestial-blue' },
                  { label: 'Visibility Score', val: results.visibilityScore, icon: Zap, color: 'text-mystic-purple' }
                ].map((m, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/50 backdrop-blur-sm p-5 rounded-none border border-royal-gold/10 hover:border-royal-gold transition-colors">
                    <div className="flex items-center gap-4">
                      <m.icon className={cn("w-5 h-5", m.color)} />
                      <span className="section-eyebrow text-mystic-navy">{m.label}</span>
                    </div>
                    <span className="text-xl font-display font-black text-mystic-navy">{m.val}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-12 rounded-none bg-mystic-navy text-warm-off-white border-royal-gold/20 shadow-2xl relative overflow-hidden tool-card">
               <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/5 blur-[100px]" />
               <h3 className="tool-title text-royal-gold flex items-center gap-4 mb-10 relative z-10">
                <Search className="w-6 h-6" /> Executive Synthesis
              </h3>
              <div className="space-y-8 tool-description text-warm-off-white/90 relative z-10 pr-10">
                <p>
                  "Your brand <span className="text-royal-gold font-black not-italic">{data.brandName}</span> carries a masterful <span className="italic font-display text-royal-gold font-black not-italic">number {results.brandNum}</span> vibration. {results.overallScore > 80 ? 'This frequency is architected for market dominance and profound legacy.' : 'Adjusting the nomenclature could further amplify your strategic resonance.'}"
                </p>
                <p>
                  "The alignment with <span className="text-royal-gold font-black not-italic">{data.industry}</span> is {results.industryScore > 75 ? 'exceptionally harmonious' : 'well-synchronized'}, indicating that your commercial signal is naturally tuned to sectoral growth cycles."
                </p>
              </div>
            </div>

            <div className="glass-card p-12 rounded-none bg-white border border-royal-gold/20 shadow-xl relative overflow-hidden tool-card">
              <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/5 blur-[100px]" />
              <h3 className="tool-title text-mystic-navy flex items-center gap-4 mb-10">
                <Sparkles className="w-6 h-6 text-royal-gold" /> Critical Path
              </h3>
              
              <div className="mb-10 flex justify-center scale-75 origin-center bg-mystic-navy/[0.02] p-6 border border-royal-gold/10">
                <NumerologyMatrix gridData={{ [results.birthNumber]: 1, [results.lifePath]: 1 }} />
              </div>

              <ul className="space-y-6">
                 {[
                   { t: 'Founder Resonance', d: `Birth Number: ${results.birthNumber} | Life Path: ${results.lifePath}` },
                   { t: 'Strategic Palette', d: results.luckyColors.join(', ') },
                   { t: 'Growth Anchor', d: `Mobile Sync to Total ${results.birthNumber}` },
                   { t: 'Market Outlook', d: 'Focus on high-value penetration to leverage frequency.' },
                 ].map((r, i) => (
                   <li key={i} className="flex gap-6 items-start group">
                     <span className="w-2.5 h-2.5 rounded-full bg-royal-gold mt-2 shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_15px_#c9a84c]" />
                     <div>
                       <span className="section-eyebrow text-royal-gold block mb-1">{r.t}</span>
                       <p className="text-mystic-navy font-bold leading-relaxed">{r.d}</p>
                     </div>
                   </li>
                 ))}
              </ul>
              
              <div className="mt-12 pt-12 border-t border-mystic-navy/10 text-center">
                 <Link to="/consultation" className="inline-flex items-center gap-4 px-10 py-5 bg-mystic-navy text-warm-off-white rounded-none font-black tracking-widest text-[11px] hover:scale-105 transition-all shadow-2xl group">
                   Master brand audit <ArrowRight className="w-5 h-5 text-royal-gold group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
             <button 
               onClick={() => setResults(null)}
               className="text-[10px] tracking-widest font-black text-mystic-navy hover:text-royal-gold transition-opacity"
             >
               Perform new brand audit
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5ECD7] text-[#1C3557] pt-12 pb-20 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4">
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: 1.3,
              margin: '0 0 4px 0',
              color: '#1C3557',
              letterSpacing: '0',
              textAlign: 'center'
            }}>
              Brand <span style={{ color: '#C9A84C' }}>Auditor</span>
            </h2>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '4px auto 0' }}></div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[15px] md:text-[16px] text-[#1C3557]/80 max-w-2xl mx-auto font-normal italic leading-relaxed"
          >
            A futuristic luxury intelligence system designed to evaluate your business vibration through ancient algorithms and modern brand logic.
          </motion.p>
        </div>

        {/* Progress Tracker */}
        <div className="max-w-4xl mx-auto mb-20 px-4">
          <div className="relative flex justify-between items-center">
            {/* Connection Line */}
            <div className="absolute h-[1px] bg-royal-gold/20 w-full top-1/2 -translate-y-1/2 -z-10" />
            
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex flex-col items-center gap-4 group">
                <div className={cn(
                  "w-16 h-16 rounded-none flex items-center justify-center transition-all duration-500 border backdrop-blur-xl",
                  step >= i 
                    ? "bg-mystic-navy border-royal-gold shadow-[0_0_30px_rgba(201,168,76,0.3)] text-royal-gold scale-110" 
                    : "bg-white border-royal-gold/20 text-mystic-navy/40 group-hover:border-royal-gold group-hover:text-royal-gold"
                )}>
                  <s.icon className="w-6 h-6" />
                </div>
                <span className={cn(
                  "text-[10px] font-black tracking-widest transition-opacity duration-500",
                  step >= i ? "opacity-100 text-royal-gold" : "text-mystic-navy/30"
                )}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form area */}
        <div className="max-w-[800px] mx-auto">
          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div 
                key="analyzing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="glass-card p-12 md:p-20 rounded-[12px] text-center bg-white border border-[#E0D5C0] shadow-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/5 via-transparent to-mystic-purple/5" />
                <div className="relative z-10">
                   <div className="w-24 h-24 mx-auto relative mb-8">
                      <div className="absolute inset-0 border-2 border-royal-gold/10 rounded-none" />
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-royal-gold border-t-transparent rounded-none shadow-[0_0_20px_rgba(201,168,76,0.3)]" 
                      />
                      <div className="absolute inset-3 rounded-none bg-royal-gold/5 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-royal-gold animate-pulse" />
                      </div>
                   </div>
                   <h2 className="text-3xl font-display font-medium text-mystic-navy mb-4 italic tracking-tight">Syncing Digital Matrix</h2>
                   <p className="text-[#C9A84C] tracking-widest text-[10px] font-black uppercase animate-pulse">Running Chaldean Algorithms...</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card p-8 md:p-12 rounded-[12px] bg-white border border-[#E0D5C0] shadow-2xl relative"
              >
                {step === 0 && (
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <StandardInput
                        label="Brand Name"
                        value={data.brandName}
                        onChange={val => setData({...data, brandName: val})}
                        placeholder="e.g. Luxor Digital"
                        icon={<Building2 />}
                        error={!data.brandName && data.brandName !== undefined ? "Brand name is required" : ""}
                      />
                      <StandardNameInput
                        label="Founder Name"
                        value={data.founderName}
                        onChange={val => setData({...data, founderName: val})}
                        placeholder="Enter founder's full name"
                        error={!data.founderName && data.founderName !== undefined ? "Founder name is required" : ""}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <StandardSelect
                        label="Industry Matrix"
                        value={data.industry}
                        onChange={val => setData({...data, industry: val})}
                        options={INDUSTRIES.map(i => ({ value: i.name, label: i.name }))}
                        icon={<Briefcase />}
                      />
                      <StandardDateInput
                        label="Launch Date / DOB"
                        value={data.launchDate}
                        onChange={val => setData({...data, launchDate: val})}
                        error={data.launchDate && data.launchDate.length < 10 ? "Valid date required" : ""}
                      />
                    </div>
                    <StandardInput
                      label="Brand Tagline"
                      value={data.tagline}
                      onChange={val => setData({...data, tagline: val})}
                      placeholder="The core frequency of your slogan"
                      icon={<TrendingUp />}
                    />
                  </div>
                )/* step 0 end */}

                {step === 1 && (
                  <div className="space-y-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-display font-black text-mystic-navy">Logo Color Energy</h3>
                      <p className="text-[#C9A84C] text-[12px] font-medium tracking-wide">Select the primary frequencies active in your brand identity.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                      {COLORS.map(c => (
                        <button
                          key={c.name}
                          onClick={() => toggleColor(c.name)}
                          className={cn(
                            "group p-4 rounded-[8px] border transition-all duration-300 flex flex-col items-center gap-3",
                            data.logoColors.includes(c.name)
                              ? "bg-royal-gold/10 border-royal-gold shadow-md"
                              : "bg-white border-[#E0D5C0] hover:border-royal-gold"
                          )}
                        >
                          <div 
                            className="w-10 h-10 rounded-full shadow-inner border border-mystic-navy/5"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className={cn(
                            "text-[10px] font-black tracking-widest transition-colors uppercase",
                            data.logoColors.includes(c.name) ? "text-mystic-navy" : "text-mystic-navy/40 group-hover:text-royal-gold"
                          )}>
                            {c.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <StandardSelect
                        label="Business Type"
                        value={data.businessType}
                        onChange={val => setData({...data, businessType: val})}
                        options={BUSINESS_TYPES.map(t => ({ value: t, label: t }))}
                      />
                      <StandardInput
                        label="Operating Country"
                        value={data.country}
                        onChange={val => setData({...data, country: val})}
                        placeholder="e.g. United Kingdom"
                        icon={<Globe />}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <StandardMobileInput
                        label="Mobile (Business Line)"
                        value={data.mobile}
                        onChange={val => setData({...data, mobile: val})}
                        placeholder="+XX XXXXXXXXXX"
                        error={data.mobile && data.mobile.length < 10 ? "Valid mobile required" : ""}
                      />
                      <StandardInput
                        label="Website URL"
                        value={data.website}
                        onChange={val => setData({...data, website: val})}
                        placeholder="www.yourbrand.com"
                        icon={<Globe />}
                      />
                    </div>
                    <StandardTextArea
                      label="Target Audience Persona"
                      value={data.targetAudience}
                      onChange={val => setData({...data, targetAudience: val})}
                      placeholder="High-net worth individuals, tech-startup founders, Gen-Z creators..."
                    />
                  </div>
                )/* step 2 end */}

                <div className="mt-12 flex justify-between items-center">
                  <button
                    onClick={prevStep}
                    disabled={step === 0}
                    className={cn(
                      "flex items-center gap-2 text-[10px] font-black tracking-widest transition-opacity uppercase",
                      step === 0 ? "opacity-0 invisible" : "text-mystic-navy/40 hover:text-mystic-navy"
                    )}
                  >
                    <ArrowLeft className="w-4 h-4" /> Go Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={step === 0 && (!data.brandName || !data.founderName || data.launchDate.length < 10)}
                    className="flex items-center gap-3 px-8 h-[52px] bg-mystic-navy text-warm-off-white rounded-[6px] font-black tracking-widest text-[11px] hover:shadow-xl transition-all disabled:opacity-50 group uppercase"
                  >
                    {step === STEPS.length - 1 ? 'Analyze Brand Matrix' : 'Proceed Further'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-royal-gold" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 max-w-5xl mx-auto flex flex-col md:flex-row gap-20 items-center border-t border-royal-gold/10 pt-20"
        >
          <div className="flex-1">
             <span className="text-royal-gold text-[10px] tracking-widest font-black mb-8 block">Brand intelligence</span>
             <h2 className="text-3xl md:text-4xl font-display font-medium text-mystic-navy mb-10 italic leading-tight">
               Align your <br/> <span className="not-italic font-black text-royal-gold">commercial logic.</span>
             </h2>
             <p className="text-lg text-mystic-navy/70 leading-relaxed font-light mb-10">
                A brand is not just a logo or a name—it is a vibrational frequency. When the nomenclature, color palette, and founder alignment are in absolute synchronization, the brand experiences frictionless growth and market dominance.
             </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8">
            {[
              { l: 'Pythagorean system', d: 'Mathematical harmony' },
              { l: 'Chaldean system', d: 'Ancient frequency matrix' },
              { l: 'Color psychology', d: 'Emotional resonance' },
              { l: 'Industry alignment', d: 'Sectoral synchronization' }
            ].map((i, idx) => (
              <div key={idx} className="glass-card p-8 rounded-none bg-white border border-royal-gold/10 shadow-lg">
                <span className="text-royal-gold text-[12px] font-black block mb-2 tracking-wider">{i.l}</span>
                <p className="text-[14px] text-mystic-navy font-medium">{i.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
