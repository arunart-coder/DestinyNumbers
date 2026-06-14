
import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Scale, AlertTriangle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalPageProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, subtitle, icon: Icon, children }: LegalPageProps) {
  return (
    <div className="pt-32 pb-40 min-h-screen bg-warm-off-white font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="w-20 h-20 bg-mystic-navy rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl relative">
            <Icon className="w-10 h-10 text-royal-gold" />
            <div className="absolute -inset-2 border border-royal-gold/20 rounded-[2rem] animate-pulse-slow" />
          </div>
          <span className="text-royal-gold text-[10px] tracking-[0.5em] font-black mb-6 block">Destiny Numbers • Legal Matrix</span>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-mystic-navy mb-8 leading-tight">
            {title.split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 ? <span className="text-royal-gold italic font-sans font-black">{word}</span> : word + ' '}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-mystic-navy/50 max-w-2xl mx-auto leading-relaxed font-sans font-bold text-xs tracking-widest italic">
            {subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 md:p-16 rounded-[3.5rem] bg-white border border-royal-gold/10 shadow-2xl relative overflow-hidden"
        >
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-mystic-navy prose-p:text-mystic-navy/70 prose-p:leading-relaxed prose-strong:text-mystic-navy prose-li:text-mystic-navy/70">
            {children}
          </div>
          
          <div className="mt-20 pt-10 border-t border-royal-gold/10 flex flex-col items-center">
            <p className="text-[10px] text-mystic-navy/30 font-black tracking-widest mb-8">Need further clarification?</p>
            <Link 
              to="/contact" 
              className="px-12 py-5 bg-mystic-navy text-warm-off-white rounded-full font-display font-black tracking-widest text-[10px] hover:bg-royal-gold hover:text-mystic-navy transition-all flex items-center gap-3 group"
            >
              Contact legal desk <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-royal-gold" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
