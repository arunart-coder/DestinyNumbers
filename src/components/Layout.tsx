import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, MapPin, Clock, ChevronDown, ChevronRight } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { SOCIAL_LINKS, BRAND_DATA } from '../lib/constants';
import { cn } from '../lib/utils';

function TopBand() {
  return (
    <div className="bg-[#12284c] text-white py-2.5 text-xs border-b border-white/5 hidden lg:block">
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-warm-accent" />
            <a href={`tel:${BRAND_DATA.phone}`} className="hover:text-warm-accent transition-colors font-medium">{BRAND_DATA.phone}</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-warm-accent" />
            <span className="font-medium whitespace-nowrap">{BRAND_DATA.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-warm-accent" />
            <span className="font-medium whitespace-nowrap">Mon - Sat: 10am - 7pm</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
             <Link to="/calculator" className="bg-[#c8913a] text-white px-4 py-1.5 font-bold hover:bg-warm-accent-hover transition-all leading-none" style={{ borderRadius: '2px' }}>
               Free calculator
             </Link>
             <Link to="/consultation" className="border border-warm-accent text-warm-accent px-4 py-1.5 font-bold hover:bg-warm-accent hover:text-white transition-all leading-none" style={{ borderRadius: '2px' }}>
               Consultation plans
             </Link>
          </div>
          <div className="flex items-center gap-3 pr-2">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.label} 
                href={social.url} 
                className="text-white/60 hover:text-warm-accent transition-colors"
                target={social.url === '#' ? undefined : '_blank'}
                rel={social.url === '#' ? undefined : 'noopener noreferrer'}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const SERVICES_DROPDOWN = [
  {
    category: "Numerology & Identity",
    items: [
      { label: "Personal Numerology", desc: "Decode Chaldean & Lo Shu Destiny.", path: "/services/numerology" },
      { label: "Name correction", desc: "Correct name vibrations for success.", path: "/services/name-correction" },
      { label: "Brand Auditor", desc: "Fortune align your business title codes.", path: "/brand-auditor" },
      { label: "Career Guidance", desc: "Birth-chart matched professional maps.", path: "/services/career-guidance" }
    ]
  },
  {
    category: "Vedic Astrology",
    items: [
      { label: "Horoscope Analysis", desc: "Deep natal Nakshatra alignment blueprint.", path: "/services/horoscope" },
      { label: "Dasha & Transit", desc: "Surgical timing of planetary shifts.", path: "/services/dasha-transit" },
      { label: "Soul Compatibility", desc: "Measure synastry sync of two souls.", path: "/services/relationship-compatibility" },
      { label: "Gemstone Consultation", desc: "Certified and energized custom minerals.", path: "/services/gemstone-consultation" }
    ]
  },
  {
    category: "Vastu & Space Healing",
    items: [
      { label: "Space Vastu Shastra", desc: "Home map elements balanced properly.", path: "/services/vastu" },
      { label: "Office & Industrial Vastu", desc: "Workspace alignments for commercial flow.", path: "/services/office-vastu" },
      { label: "Reiki Master Therapy", desc: "Direct energetic chakra healing loops.", path: "/services/reiki-master" },
      { label: "Aura Cleansing & Map", desc: "Identify and heal auric tears safely.", path: "/services/aura-cleansing" }
    ]
  }
];

const PRODUCTS_DROPDOWN = [
  { label: "Sacred Yantras", desc: "Surgically-energized gold geometric plates.", path: "/products?category=Yantras" },
  { label: "Aura Bracelets", desc: "Tuned natural element beads.", path: "/products?category=Bracelets" },
  { label: "Vastu Pyramids", desc: "Environmental frequency anchors.", path: "/products?category=Vastu" },
  { label: "Crystals & Geodes", desc: "Nakshatra charged crystal blocks.", path: "/products?category=Crystals" },
  { label: "See Entire Shop", desc: "Visit our energized catalog.", path: "/products", highlight: true }
];

const ACADEMY_DROPDOWN = [
  { label: "Science of Numbers", desc: "Core Numerology certification course.", path: "/academy" },
  { label: "Wrist-Watch Analysis", desc: "Temporal energy wristwatch reading.", path: "/academy" },
  { label: "Bhrigu Nakshatra Nadi", desc: "Predictive Nadi astrology masterclass.", path: "/academy" },
  { label: "Explore Curriculum", desc: "Browse academy batches and enroll.", path: "/academy", highlight: true }
];

const BLOG_DROPDOWN = [
  { label: "Latest Insights", desc: "Read recent articles & case studies.", path: "/blog" },
  { label: "Astrological Shifts", desc: "Planetary cycles and Vedic transits.", path: "/blog" },
  { label: "Vastu Guidelines", desc: "Simple tips to balance your spaces.", path: "/blog" },
  { label: "Numerology Codes", desc: "Decode numbers in everyday patterns.", path: "/blog" }
];

const TOOLS_DROPDOWN = [
  { label: "Vedic Lo Shu Grid", desc: "Calculate Birth & Destiny charts.", path: "/calculator" },
  { label: "Name Vibrator", desc: "Ancient Chaldean identity auditor.", path: "/tools?tool=name" },
  { label: "Mobile Auditor", desc: "Smartphone frequency check.", path: "/analyser/mobile" },
  { label: "Relation Sync", desc: "Check compatibility scores.", path: "/compatibility" },
  { label: "Entrance Vastu", desc: "Main door lucky placement analyzer.", path: "/tools?tool=vastu-checker" },
  { label: "Free Tarot Reading", desc: "Instant Yes/No tarot guidance.", path: "/services/free-tarot-reading" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { data } = useCMS();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
      <TopBand />
      <div className="bg-white border-b border-warm-border h-[80px]">
        <div className="max-w-[1140px] mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center justify-center group h-full py-1">
            <img 
              src="https://lh3.googleusercontent.com/d/1atXDC8DTkr-j6O_TPKReGttfWN1kvcjW" 
              alt="Destiny Numbers Logo" 
              className="h-[52px] md:h-[60px] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 h-full">
            {/* Home */}
            <Link
              to="/"
              className={cn(
                "text-[14px] font-semibold transition-colors py-2 border-b-2 h-[80px] flex items-center",
                location.pathname === "/"
                  ? "text-warm-accent border-warm-accent"
                  : "text-warm-text-secondary border-transparent hover:text-warm-accent"
              )}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={cn(
                "text-[14px] font-semibold transition-colors py-2 border-b-2 h-[80px] flex items-center",
                location.pathname === "/about"
                  ? "text-warm-accent border-warm-accent"
                  : "text-warm-text-secondary border-transparent hover:text-warm-accent"
              )}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                onClick={() => setActiveDropdown(null)}
                className={cn(
                  "text-[14px] font-semibold transition-colors py-2 border-b-2 h-[80px] flex items-center gap-1 cursor-pointer outline-none bg-transparent",
                  location.pathname.startsWith("/services")
                    ? "text-warm-accent border-warm-accent"
                    : "text-warm-text-secondary border-transparent hover:text-warm-accent"
                )}
              >
                Services
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === 'services' && "rotate-180 text-warm-accent")} />
              </Link>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-[45%] top-[80px] w-[750px] bg-white border border-[#E0D5C0] shadow-2xl p-6 z-50 grid grid-cols-3 gap-6 text-left"
                  >
                    {SERVICES_DROPDOWN.map((cat, catIdx) => (
                      <div key={catIdx} className="space-y-3">
                        <h5 className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C] border-b border-[#F5ECD7] pb-1">
                          {cat.category}
                        </h5>
                        <div className="flex flex-col gap-2">
                          {cat.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className="group block rounded-none p-1.5 -mx-1.5 hover:bg-[#F5ECD7]/30 transition-all"
                            >
                              <div className="text-[13px] font-semibold text-[#1C3557] group-hover:text-warm-accent flex items-center gap-1">
                                {item.label}
                                <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C9A84C]" />
                              </div>
                              <p className="text-[11px] text-warm-text-secondary font-normal mt-0.5 leading-normal">
                                {item.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/products"
                onClick={() => setActiveDropdown(null)}
                className={cn(
                  "text-[14px] font-semibold transition-colors py-2 border-b-2 h-[80px] flex items-center gap-1 cursor-pointer outline-none bg-transparent",
                  location.pathname === "/products"
                    ? "text-warm-accent border-warm-accent"
                    : "text-warm-text-secondary border-transparent hover:text-warm-accent"
                )}
              >
                Products
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === 'products' && "rotate-180 text-warm-accent")} />
              </Link>
              
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-[80px] w-[280px] bg-white border border-[#E0D5C0] shadow-2xl p-4 z-50 flex flex-col gap-1 text-left"
                  >
                    {PRODUCTS_DROPDOWN.map((item, id) => (
                      <Link
                        key={id}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className={cn(
                          "group block p-2.5 hover:bg-[#F5ECD7]/30 transition-all border-b border-gray-50 last:border-0",
                          item.highlight && "bg-[#F5ECD7]/15 border-[#E0D5C0]/20"
                        )}
                      >
                        <div className={cn(
                          "text-[13px] font-semibold flex items-center justify-between",
                          item.highlight ? "text-[#C9A84C]" : "text-[#1C3557] group-hover:text-warm-accent"
                        )}>
                          <span>{item.label}</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1 bg-royal-gold/10 text-[#C9A84C] hidden group-hover:inline-block">Shop</span>
                        </div>
                        <p className="text-[11px] text-warm-text-secondary mt-0.5 leading-normal font-normal">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Academy Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('academy')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/academy"
                onClick={() => setActiveDropdown(null)}
                className={cn(
                  "text-[14px] font-semibold transition-colors py-2 border-b-2 h-[80px] flex items-center gap-1 cursor-pointer outline-none bg-transparent",
                  location.pathname === "/academy"
                    ? "text-warm-accent border-warm-accent"
                    : "text-warm-text-secondary border-transparent hover:text-warm-accent"
                )}
              >
                Academy
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === 'academy' && "rotate-180 text-warm-accent")} />
              </Link>
              
              <AnimatePresence>
                {activeDropdown === 'academy' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-[80px] w-[320px] bg-white border border-[#E0D5C0] shadow-2xl p-4 z-50 flex flex-col gap-1 text-left"
                  >
                    {ACADEMY_DROPDOWN.map((item, id) => (
                      <Link
                        key={id}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className={cn(
                          "group block p-2.5 hover:bg-[#F5ECD7]/30 transition-all border-b border-gray-50 last:border-0",
                          item.highlight && "bg-[#F5ECD7]/15 border-[#E0D5C0]/20"
                        )}
                      >
                        <div className={cn(
                          "text-[13px] font-semibold flex items-center justify-between",
                          item.highlight ? "text-[#C9A84C]" : "text-[#1C3557] group-hover:text-warm-accent"
                        )}>
                          <span>{item.label}</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1 bg-royal-gold/10 text-[#C9A84C] hidden group-hover:inline-block">Join</span>
                        </div>
                        <p className="text-[11px] text-warm-text-secondary mt-0.5 leading-normal font-normal">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Blog Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('blog')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/blog"
                onClick={() => setActiveDropdown(null)}
                className={cn(
                  "text-[14px] font-semibold transition-colors py-2 border-b-2 h-[80px] flex items-center gap-1 cursor-pointer outline-none bg-transparent",
                  location.pathname.startsWith("/blog")
                    ? "text-warm-accent border-warm-accent"
                    : "text-warm-text-secondary border-transparent hover:text-warm-accent"
                )}
              >
                Blog
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === 'blog' && "rotate-180 text-warm-accent")} />
              </Link>
              
              <AnimatePresence>
                {activeDropdown === 'blog' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-[80px] w-[260px] bg-white border border-[#E0D5C0] shadow-2xl p-4 z-50 flex flex-col gap-1 text-left"
                  >
                    {BLOG_DROPDOWN.map((item, id) => (
                      <Link
                        key={id}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="group block p-2.5 hover:bg-[#F5ECD7]/30 transition-all border-b border-gray-50 last:border-0"
                      >
                        <p className="text-[13px] font-semibold text-[#1C3557] group-hover:text-warm-accent">
                          {item.label}
                        </p>
                        <p className="text-[11px] text-warm-text-secondary mt-0.5 leading-normal font-normal">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FREE Tools Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('tools')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/tools"
                onClick={() => setActiveDropdown(null)}
                className={cn(
                  "text-[14px] font-semibold transition-colors py-2 border-b-2 h-[80px] flex items-center gap-1 cursor-pointer outline-none text-[#c8913a] bg-transparent",
                  location.pathname === "/tools"
                    ? "text-warm-accent border-warm-accent"
                    : "border-transparent hover:text-warm-accent"
                )}
              >
                FREE Tools
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === 'tools' && "rotate-180 text-warm-accent")} />
              </Link>
              
              <AnimatePresence>
                {activeDropdown === 'tools' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-[80px] w-[340px] bg-white border border-[#E0D5C0] shadow-2xl p-4 z-50 flex flex-col gap-1 text-left"
                  >
                    {TOOLS_DROPDOWN.map((item, id) => (
                      <Link
                        key={id}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="group block p-2.5 hover:bg-[#F5ECD7]/30 transition-all border-b border-gray-50 last:border-0"
                      >
                        <div className="text-[13px] font-semibold text-[#1C3557] group-hover:text-warm-accent flex items-center gap-1.5">
                          {item.label}
                          <span className="text-[9px] uppercase font-bold tracking-wider px-1 py-0.5 bg-green-50 text-green-600 rounded-none border border-green-100">Free</span>
                        </div>
                        <p className="text-[11px] text-warm-text-secondary mt-0.5 leading-normal font-normal">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/consultation" 
              className="btn btn-primary"
            >
              Explore Destiny
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-warm-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-warm-border shadow-xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6 flex flex-col gap-4">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[#1C3557] py-1 border-b border-[#F5ECD7]/40"
              >
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[#1C3557] py-1 border-b border-[#F5ECD7]/40"
              >
                About
              </Link>

              {/* Mobile Services Collapsible */}
              <div className="border-b border-[#F5ECD7]/40 pb-2">
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between text-base font-semibold text-[#1C3557]"
                >
                  <span>Services</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === 'services' && "rotate-180 text-warm-accent")} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'services' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pr-1 pt-2 flex flex-col gap-2 border-l-2 border-[#C9A84C]/30 mt-1"
                    >
                      {SERVICES_DROPDOWN.flatMap(c => c.items).map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                          className="text-[14px] font-medium text-warm-text-secondary hover:text-warm-accent flex items-center justify-between py-1"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-warm-text-secondary/50" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Products Collapsible */}
              <div className="border-b border-[#F5ECD7]/40 pb-2">
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
                  className="w-full flex items-center justify-between text-base font-semibold text-[#1C3557]"
                >
                  <span>Products</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === 'products' && "rotate-180 text-warm-accent")} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'products' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pr-1 pt-2 flex flex-col gap-2 border-l-2 border-[#C9A84C]/30 mt-1"
                    >
                      {PRODUCTS_DROPDOWN.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                          className="text-[14px] font-medium text-warm-text-secondary hover:text-warm-accent flex items-center justify-between py-1"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-warm-text-secondary/50" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Academy Collapsible */}
              <div className="border-b border-[#F5ECD7]/40 pb-2">
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === 'academy' ? null : 'academy')}
                  className="w-full flex items-center justify-between text-base font-semibold text-[#1C3557]"
                >
                  <span>Academy</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === 'academy' && "rotate-180 text-warm-accent")} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'academy' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pr-1 pt-2 flex flex-col gap-2 border-l-2 border-[#C9A84C]/30 mt-1"
                    >
                      {ACADEMY_DROPDOWN.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                          className="text-[14px] font-medium text-warm-text-secondary hover:text-warm-accent flex items-center justify-between py-1"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-warm-text-secondary/50" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Blog Collapsible */}
              <div className="border-b border-[#F5ECD7]/40 pb-2">
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === 'blog' ? null : 'blog')}
                  className="w-full flex items-center justify-between text-base font-semibold text-[#1C3557]"
                >
                  <span>Blog</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === 'blog' && "rotate-180 text-warm-accent")} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'blog' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pr-1 pt-2 flex flex-col gap-2 border-l-2 border-[#C9A84C]/30 mt-1"
                    >
                      {BLOG_DROPDOWN.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                          className="text-[14px] font-medium text-warm-text-secondary hover:text-warm-accent flex items-center justify-between py-1"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-warm-text-secondary/50" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Tools Collapsible */}
              <div className="border-b border-[#F5ECD7]/40 pb-2">
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === 'tools' ? null : 'tools')}
                  className="w-full flex items-center justify-between text-base font-semibold text-[#c8913a]"
                >
                  <span>FREE Tools</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === 'tools' && "rotate-180 text-warm-accent")} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'tools' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pr-1 pt-2 flex flex-col gap-2 border-l-2 border-[#C9A84C]/30 mt-1 animate-fadeIn"
                    >
                      {TOOLS_DROPDOWN.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                          className="text-[14px] font-medium text-warm-text-secondary hover:text-warm-accent flex items-center justify-between py-1"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-warm-text-secondary/50" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/consultation"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary justify-center mt-2"
              >
                Explore Destiny
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-warm-bg-dark text-white pt-24 pb-12">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading text-2xl font-bold text-white leading-none">
                Destiny<span className="text-warm-accent">Numbers</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm italic mb-4">
              Simple wisdom for a complex life
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Dr. Arun Poovaiah's life work — bridging ancient sacred science with modern clarity.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.label} 
                  href={social.url}
                  className="text-warm-accent border border-warm-accent/30 w-8 h-8 rounded-full flex items-center justify-center hover:bg-warm-accent hover:text-white hover:border-warm-accent transition-all"
                  aria-label={social.label}
                  target={social.url === '#' ? undefined : '_blank'}
                  rel={social.url === '#' ? undefined : 'noopener noreferrer'}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li><Link to="/blog" className="hover:text-warm-accent transition-colors">Insights & Blog</Link></li>
              <li><Link to="/tools" className="hover:text-warm-accent transition-colors">Free Wisdom Tools</Link></li>
              <li><Link to="/services" className="hover:text-warm-accent transition-colors">Guidance Services</Link></li>
              <li><Link to="/academy" className="hover:text-warm-accent transition-colors">Vedic Academy</Link></li>
              <li><Link to="/about" className="hover:text-warm-accent transition-colors">About Dr. Arun Poovaiah</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Learn</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li><Link to="/services/numerology" className="hover:text-warm-accent transition-colors">Numerology</Link></li>
              <li><Link to="/services/horoscope" className="hover:text-warm-accent transition-colors">Astrology</Link></li>
              <li><Link to="/services/tarot" className="hover:text-warm-accent transition-colors">Sacred Tarot</Link></li>
              <li><Link to="/services/vastu" className="hover:text-warm-accent transition-colors">Vastu Shastra</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Weekly Wisdom</h4>
            <p className="text-white/70 text-sm mb-6">One insight every Sunday. No noise. Just clarity.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-sm outline-none focus:border-warm-accent text-white"
              />
              <button className="bg-white text-warm-accent font-bold py-2.5 rounded-md hover:bg-warm-bg-warm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Destiny Numbers. Dr. Arun Poovaiah. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-warm-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-warm-accent">Terms of Use</Link>
            <Link to="/refund" className="hover:text-warm-accent">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppCTA() {
  const whatsappNumber = BRAND_DATA.phone.replace(/[^0-9]/g, '');
  return (
    <a 
      href={`https://wa.me/${whatsappNumber}`} 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#25D366] rounded-none flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white/20" />
      <span className="absolute right-full mr-4 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
}
