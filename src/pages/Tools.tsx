import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Scan, Smartphone, X, Heart, Palette, Briefcase, Calendar, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NumerologyCalculator } from '../components/NumerologyCalculator';
import { NameNumerologyCalculator } from '../components/NameNumerologyCalculator';
import PythagoreanCalculator from '../components/PythagoreanCalculator';
import { EntrancesVastuCalculator } from '../components/EntrancesVastuCalculator';
import { PersonalYearCalculator } from '../components/PersonalYearCalculator';

const tools = [
  { 
    id: 'destiny',
    icon: Calculator, 
    title: 'Decode Your Date of Birth', 
    desc: 'Calculate your core Birth and Destiny numbers based on precise matrix reduction.' 
  },
  { 
    id: 'compatibility', 
    icon: Heart, 
    title: 'Compatibility', 
    desc: 'Decode energetic harmony between two souls using Birth and Life Path sync.',
    path: '/compatibility'
  },
  { 
    id: 'pythagorean',
    icon: Sparkles, 
    title: "Decode Your Heart's Secret", 
    desc: 'The modern western system. Calculate Expression, Soul Urge, and Personality numbers.' 
  },
  { 
    id: 'name',
    icon: Scan, 
    title: 'Decode Your Name', 
    desc: 'Analyze the vibration of your identity using the ancient Chaldean frequency matrix.' 
  },
  { 
    id: 'mobile', 
    icon: Smartphone, 
    title: "Decode Your Mobile's Vibration", 
    desc: 'Verify if your mobile digital frequency aligns with your professional and personal ambitions.',
    path: '/analyser/mobile'
  },
  {
    id: 'free-tarot',
    icon: Sparkles,
    title: 'Free Tarot Reading',
    desc: 'Instant Yes/No guidance using the original Rider-Waite cards. Focus, draw, and receive.',
    path: '/services/free-tarot-reading'
  },
  { 
    id: 'vastu-checker',
    icon: Compass, 
    title: 'Main Door Vastu Checker', 
    desc: 'Know If Your Entrance Is Lucky or Harmful'
  },
  {
    id: 'personal-year',
    icon: Calendar,
    title: 'Personal Year Roadmap',
    desc: 'Calculate your current 9-year cycle vibration, lucky elements, and month-by-month path.'
  },
  { 
    id: 'business', 
    icon: Briefcase, 
    title: 'Brand Auditor', 
    desc: 'Audit your business identity for commercial prosperity.',
    path: '/brand-auditor'
  }
];

export default function ToolsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTool, setActiveTool] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryToolId = params.get('tool');
    const toolId = (location.state && location.state.toolId) || queryToolId;

    if (toolId) {
      if (['compatibility', 'mobile', 'business'].includes(toolId)) {
        const tool = tools.find(t => t.id === toolId);
        if (tool?.path) {
          if (tool.path.startsWith('http')) {
            window.location.href = tool.path;
          } else {
            navigate(tool.path);
          }
        }
      } else {
        setActiveTool(toolId);
      }
    } else {
      setActiveTool(null);
    }
  }, [location.state, location.search, navigate]);

  const renderTool = () => {
    const handleBack = () => {
      setActiveTool(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    switch (activeTool) {
      case 'destiny':
        return <NumerologyCalculator />;
      case 'name':
        return <NameNumerologyCalculator onBack={handleBack} />;
      case 'pythagorean':
        return <PythagoreanCalculator onBack={handleBack} />;
      case 'personal-year':
        return <PersonalYearCalculator onBack={handleBack} />;
      case 'vastu-checker':
        return (
          <div className="pt-0 pb-12">
            <EntrancesVastuCalculator />
          </div>
        );
      default:
        return null;
    }
  };

  const handleToolClick = (tool: any) => {
    if (tool.id === 'destiny') {
       navigate('/calculator');
       return;
     }
    if (tool.path) {
      if (tool.path.startsWith('http')) {
        window.open(tool.path, '_blank', 'noopener,noreferrer');
      } else {
        navigate(tool.path);
      }
    } else if (['name', 'pythagorean', 'vastu-checker', 'personal-year'].includes(tool.id)) {
      setActiveTool(tool.id);
    }
  };

  return (
    <div className="pb-32 bg-[#F5ECD7] min-h-screen pt-0">
      <AnimatePresence mode="wait">
        {!activeTool ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <header 
              className="relative w-full overflow-hidden flex items-center justify-center text-center bg-cover bg-center shadow-md mb-8 px-4 pt-[95px] lg:pt-[135px] pb-5"
              style={{ 
                backgroundImage: `linear-gradient(rgba(13, 27, 62, 0.72), rgba(13, 27, 62, 0.72)), url('https://lh3.googleusercontent.com/d/1m1FHAYOnDvmI9-tZysju3-BMS1Z9zy8C')`
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl -mt-1"
              >
                <div className="mb-2">
                  <h2 style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: '26px',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    margin: '0 0 2px 0',
                    color: '#ffffff',
                    letterSpacing: '0',
                    textAlign: 'center'
                  }}>
                    The Esoteric <span style={{ color: '#C9A84C' }}>Analytical Hub</span>
                  </h2>
                  <div style={{ width: '50px', height: '1px', background: '#C9A84C', margin: '2px auto 0' }}></div>
                </div>
                <p className="max-w-xl mx-auto text-[#F5ECD7]/90 text-[12px] font-normal leading-snug italic">
                  Practical analyzers designed to provide data-driven insights into your cosmic alignment before your bespoke consultation.
                </p>
              </motion.div>
            </header>

            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, idx) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    onClick={() => handleToolClick(tool)}
                    className="cursor-pointer tool-card group !p-6 md:!p-7"
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="tool-icon-box mb-5">
                        <tool.icon className="tool-icon" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-display italic tool-title mb-3">{tool.title}</h3>
                      <p className="text-xs md:text-sm font-normal tool-desc mb-6 max-w-[300px] leading-relaxed">
                        {tool.desc}
                      </p>
                      <button className="mt-auto flex items-center gap-3 tool-footer-link group/btn w-full text-left uppercase text-[9px] md:text-[10px] tracking-widest font-black !pt-4">
                        {['destiny', 'name', 'pythagorean', 'compatibility', 'mobile', 'business', 'free-tarot', 'vastu-checker', 'personal-year'].includes(tool.id) ? 'Launch analyzer' : 'Available soon'}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="calculator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={activeTool === 'pythagorean' ? "w-full" : "relative max-w-7xl mx-auto px-6"}
          >
            {renderTool()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
