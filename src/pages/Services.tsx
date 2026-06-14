import { motion } from 'motion/react';
import { SERVICE_CATEGORIES, SERVICES } from '../lib/constants';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

export default function ServicesPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5ECD7] min-h-screen">
      {/* Header */}
      <HeroHeader 
        eyebrow="Consultancy & Guidance"
        title="Divine Sciences for Modern Life"
        description="We read, decode, and give you the roadmap you were always meant to have."
      />

      {/* Main Content */}
      <main className="py-12">
        <div className="site-container">
          <div className="flex flex-col gap-16">
            {SERVICE_CATEGORIES.map((category, catIdx) => (
              <section key={catIdx}>
                <div className="flex items-center gap-4 mb-6 border-b border-warm-border pb-2">
                  <h2 className="font-heading text-2xl text-warm-text-primary">{category.title}</h2>
                  <div className="h-px flex-grow bg-warm-border-light"></div>
                  <span className="text-[10px] font-bold text-warm-accent uppercase tracking-widest leading-none">
                    {category.services.length} Specialities
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.services.map((serviceName, sIdx) => {
                    const fallbackService = {
                      icon: Sparkles,
                      category: category.title.split(' & ')[0],
                      description: 'Precision matrix integrated analysis for deep cosmic alignment.',
                      path: '/consultation'
                    };
                    const serviceData = SERVICES.find(s => s.title === serviceName) || fallbackService;
                    const Icon = serviceData.icon;

                    return (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: sIdx * 0.05 }}
                        className="h-full"
                      >
                        <Link 
                          to={serviceData.path || "/services"}
                          className="service-card group !p-5 md:!p-6 w-full flex flex-col h-full hover:shadow-md hover:border-[#C9A84C]/40 transition-all cursor-pointer bg-white"
                        >
                          <div className="service-icon-box mb-4">
                            <Icon className="service-icon" />
                          </div>
                          
                          <h3 className="font-heading text-lg md:text-xl mb-2.5 leading-tight service-title">
                            {serviceName}
                          </h3>
                          
                          <p className="text-xs md:text-sm leading-relaxed mb-5 flex-grow italic service-desc">
                            {serviceData.description}
                          </p>
                          
                          <div className="w-full pt-4 border-t border-[#C9A84C]/15 group-hover:border-[#C9A84C]/45 transition-colors flex justify-between items-center mt-auto">
                            <span className="text-xs font-bold flex items-center gap-1 service-footer-link">
                              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                navigate('/consultation');
                              }}
                              className="text-[10px] font-bold text-[#1C3557]/50 group-hover:text-[#1C3557]/80 hover:text-[#C9A84C] transition-colors uppercase tracking-widest cursor-pointer"
                            >
                              Get Expert Insight
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-warm-accent py-24 mb-24 overflow-hidden relative">
        {/* Background Sparkles */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           <Sparkles className="absolute top-10 left-10 w-24 h-24" />
           <Sparkles className="absolute bottom-10 right-10 w-32 h-32" />
        </div>

        <div className="site-container relative z-10 text-center max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-8">Ready for your <em className="italic">Alignment?</em></h2>
          <p className="text-white/80 text-lg mb-12">Experience a transformation used by global seekers to align their personal vibration with absolute universal timing.</p>
          <Link 
            to="/consultation"
            className="inline-flex items-center gap-4 bg-white text-warm-accent font-bold px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all"
          >
             Book Private Session <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
