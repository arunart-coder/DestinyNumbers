import { motion } from 'motion/react';

interface HeroHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function HeroHeader({ eyebrow, title, description }: HeroHeaderProps) {
  return (
    <section 
      className="relative w-full overflow-hidden flex items-center justify-center text-center bg-[#0D1B3E] shadow-md px-4 pt-[95px] md:pt-[105px] pb-4"
      style={{ 
        height: '190px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] mx-auto relative z-10 w-full -mt-[38px]"
      >
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#C9A84C] opacity-80 block mb-2">
          {eyebrow}
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-[#C9A84C] leading-tight mb-3 font-normal italic">
          {title}
        </h1>
        {description && (
          <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed max-w-xl mx-auto font-sans font-light">
             {description.startsWith('"') ? description : `"${description}"`}
          </p>
        )}
      </motion.div>
    </section>
  );
}
