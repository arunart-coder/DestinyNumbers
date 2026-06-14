import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Check, 
  Watch, 
  Moon, 
  Star, 
  ShieldCheck, 
  Users, 
  History, 
  BookOpen, 
  ChevronRight,
  Sparkles,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';

interface Module {
  title: string;
  count: string;
  topics: string[];
}

interface CourseData {
  id: string;
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  includes: string[];
  suitable: string;
  curriculum: Module[];
  ctaText: string;
  ctaSub: string;
  uniqueAngles?: { title: string; desc: string }[];
}

const ACADEMY_DATA: Record<string, CourseData> = {
  numerology: {
    id: 'numerology',
    badge: 'Core Foundation',
    title: 'The Science of Numbers',
    description: 'Unlock the secrets of the universe and delve into the mystical art of numerology. Whether you\'re a novice seeking foundational principles or an enthusiast eager to practice — our course offers comprehensive knowledge spanning Pythagorean, Chaldean, and Lo Shu Grid systems.',
    benefits: [
      'Become a certified Numerologist',
      'Transform your life and others around you',
      'Understand personal strengths, weaknesses, and balance',
      'Achieve financial freedom through practice',
      'Earn recognition, name, and prosperity'
    ],
    includes: [
      'Pythagorean System',
      'Chaldean System',
      'Lo Shu Grid',
      'Name Analysis',
      'Mobile Number Reading',
      'Marriage Compatibility',
      'Relationship Analysis',
      'Remedies & Solutions'
    ],
    suitable: 'All genders, ages, backgrounds — no prior knowledge needed',
    ctaText: 'Begin Your Numerology Journey',
    ctaSub: 'Comprehensive • Scientific • Transformative',
    curriculum: [
      {
        title: 'Pythagorean Numerology',
        count: '8 Topics',
        topics: [
          'Introduction to Numerology',
          'Pythagorean System foundations',
          'Single digit & Double digit Numbers',
          'Calculation & Significance of Core Numbers',
          'Karmic Debt Number',
          'Challenge Number',
          'Pinnacle Number',
          'Personal Year, Month & Day Numbers'
        ]
      },
      {
        title: 'Chaldean Numerology',
        count: '12 Topics',
        topics: [
          'Single Digit Number significance',
          'Compound Number analysis',
          'How to prepare a Numerology Chart',
          'Number combinations & significance',
          'Sun sign — Zodiac & significance',
          'Name analysis in detail',
          'Health Analysis & basics of Ayurveda',
          'Love & Relationship analysis',
          'Marriage Timing',
          'Child Born Timings',
          'Good year for Career, Finance & life aspects',
          'Chart analysis & Prediction'
        ]
      },
      {
        title: 'Lo Shu Grid',
        count: '4 Topics',
        topics: [
          'Birthday and Life Path conjunction',
          '6 Master Yogas that impact personal life',
          'How Missing Numbers impact our life',
          'What number repetition indicates'
        ]
      },
      {
        title: 'Applied Numerology',
        count: '7 Topics',
        topics: [
          'Name Numerology',
          'Mobile Number Analysis',
          'Marriage Compatibility',
          'Relationship Analysis',
          'Love and Arranged Marriage',
          'Fixing important event dates and days',
          'Remedies'
        ]
      }
    ]
  },
  wristwatch: {
    id: 'wristwatch',
    badge: 'Temporal Science',
    title: 'The Art of Wrist-Watch Analysis',
    description: 'Wristwatches are more than instruments for telling time — they are works of art, engineering marvels, and symbols of personal energy. Analyzing a wristwatch reveals personality, preferences, lifestyle, and the flow of cosmic energy through the wearer.',
    benefits: [
      'Understand the energy a watch radiates',
      'Read personality and lifestyle through watch choice',
      'Align watch selection with chakra energy',
      'Advise clients on ideal watch colors, dials and bands',
      'Add a unique skill to any consultation practice'
    ],
    includes: [
      'Energy Flow & Introduction',
      'Watch–Chakra Connection',
      'Wrist Importance',
      'Brain Impact Analysis',
      'Dial Types & Shapes',
      'Color Psychology',
      'Pattern & Digit Reading',
      'Missing Digits',
      'Hand Movements',
      'Wall Clocks',
      'Animal/Photo Dials',
      'Belt & Chain Analysis'
    ],
    suitable: 'Designers, entrepreneurs, and anyone interested in human psychology',
    ctaText: 'Read the Time. Read the Person.',
    ctaSub: 'Unique • Scientific • Practical',
    uniqueAngles: [
      { 
        title: 'Only Course of its Kind', 
        desc: 'The only structured scientific course on Wrist-Watch Analysis available in India, pioneered by Dr. Arun Poovaiah.' 
      },
      { 
        title: 'Instantly Applicable', 
        desc: 'Begin reading watches for yourself and clients from the very first module.' 
      },
      { 
        title: 'Cross-discipline Insight', 
        desc: 'Combines numerology, chakra science and color psychology in a single framework.' 
      }
    ],
    curriculum: [
      {
        title: 'Wrist-Watch Analysis Masterclass',
        count: '15 Topics',
        topics: [
          'Introduction and Energy flow',
          'Watch relation with Chakras',
          'Importance of wearing on wrist',
          'Wristwatch impact on the Brain',
          'What is a Dial?',
          'Watch Size',
          'Colours and their meaning',
          'Dial Shape',
          'Pattern in Dial',
          'Digits on the dial',
          'Missing Digits — significance',
          'Hands — type and movement',
          'Wall Clocks — energy impact',
          'Animals and photos in dials',
          'Belt and Chain — material and color'
        ]
      }
    ]
  },
  bnnnadi: {
    id: 'bnnnadi',
    badge: 'Advanced Astrology',
    title: 'Bhrigu Nakshatra Nadi',
    description: 'BNN Nadi is among the most precise predictive systems in Vedic astrology — combining Bhrigu principles with Nakshatra degree analysis and Nadi techniques. Dr. Arun Poovaiah\'s proprietary method integrates Dasha synchronisation for surgical-level timing accuracy.',
    benefits: [
      'Master degree-based Nakshatra prediction',
      'Understand Bhrigu principles and their application',
      'Combine Nadi techniques with modern chart reading',
      'Achieve precise timing of life events',
      'Deliver high-accuracy consultations'
    ],
    includes: [
      'Bhrigu Principles',
      '9 Planets Analysis',
      'House Karaktvas',
      'Planet Results (Good/Bad/Mix)',
      'Planet Dristy (Aspects)',
      'Planet Hit & Strength',
      'Combination of Planets',
      'Yoga Formations',
      'House & Health Organs',
      'Health Astrology',
      'Remedial Measures'
    ],
    suitable: 'Practicing astrologers seeking higher accuracy in timing',
    ctaText: 'Precision Astrology at the Degree Level',
    ctaSub: 'Advanced • Vedic • Scientific',
    curriculum: [
      {
        title: 'Foundations of BNN Nadi',
        count: '4 Topics',
        topics: [
          'Core Bhrigu principles and history',
          'The 9 Planets and their cosmic roles',
          'Houses and their deeper Karaktvas',
          'Bhrigu-Nadi degree analysis introduction'
        ]
      },
      {
        title: 'Predictive Techniques',
        count: '5 Topics',
        topics: [
          'Planet Results: Good, Bad and Mix',
          'Planet Dristy (Aspects) in Nadi',
          'Planet Hit & Strength calculation',
          'Combinations of Planets (Yogas)',
          'Syncing BNN with local Dasha'
        ]
      },
      {
        title: 'Advanced Applications',
        count: '3 Topics',
        topics: [
          'House and Health Organs correlation',
          'Professional Health Astrology',
          'Bespoke Remedial Measures'
        ]
      }
    ]
  },
  tarot: {
    id: 'tarot',
    badge: 'Sacred Arts',
    title: 'Tarot — The Mirror of the Soul',
    description: 'The 78-card Rider-Waite Tarot deck is one of humanity\'s oldest systems for inner guidance. Our course teaches you to read Tarot with clarity, intuition and precision — from single-card pulls to full Celtic Cross spreads — bridging ancient symbolism with contemporary psychological insight.',
    benefits: [
      'Master all 78 Rider-Waite card meanings',
      'Read Major and Minor Arcana with confidence',
      'Perform professional spreads for clients',
      'Develop intuitive and analytical reading skills',
      'Integrate Tarot with numerology and astrology'
    ],
    includes: [
      'History & Origins of Tarot',
      'Major Arcana (22 cards)',
      'Minor Arcana (56 cards)',
      'The 4 Suits: Wands, Cups, Swords, Pentacles',
      'Court Cards — Reading People',
      'Reversed Card Meanings',
      'Spread Techniques',
      'Yes / No Readings',
      'Celtic Cross Mastery',
      'Numerology in Tarot',
      'Intuitive Reading Skills',
      'Professional Client Sessions'
    ],
    suitable: 'Spiritual seekers, counsellors, and intuitive practitioners',
    ctaText: '78 Cards. Infinite Wisdom.',
    ctaSub: 'Symbolic • Intuitive • Transformative',
    curriculum: [
      {
        title: 'Foundations of Tarot',
        count: '6 Topics',
        topics: [
          'History and lineage of Tarot',
          'The structure of the 78-card deck',
          'The Major Arcana — journey of the Fool',
          'Understanding archetypes',
          'Card handling, care and cleansing rituals',
          'Developing intuitive sensitivity'
        ]
      },
      {
        title: 'Major Arcana Mastery',
        count: '5 Topics',
        topics: [
          'Cards 0–VII: The Fool through The Chariot',
          'Cards VIII–XIV: Strength through Temperance',
          'Cards XV–XXI: The Devil through The World',
          'Reversed Major Arcana meanings',
          'Major Arcana in spreads'
        ]
      },
      {
        title: 'Minor Arcana & Court Cards',
        count: '6 Topics',
        topics: [
          'Suit of Wands — fire energy',
          'Suit of Cups — emotional water',
          'Suit of Swords — mental air',
          'Suit of Pentacles — material earth',
          'Court Cards — Page, Knight, Queen, King',
          'Reversed Minor Arcana'
        ]
      },
      {
        title: 'Spreads & Professional Reading',
        count: '7 Topics',
        topics: [
          'Single card daily pulls',
          'Three-card spreads — Past, Present, Future',
          'Celtic Cross spread — full 10-card reading',
          'Yes/No Tarot methodology',
          'Love & relationship spreads',
          'Career and finance spreads',
          'Running a professional Tarot session'
        ]
      }
    ]
  }
};

const Academy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('numerology');
  const [openModule, setOpenModule] = useState<number | null>(0);

  const course = ACADEMY_DATA[activeTab];

  return (
    <div className="min-h-screen bg-[#f5f0e8] overflow-x-hidden">
      {/* ── HERO BANNER ── */}
      <HeroHeader 
        eyebrow="Sacred Academy"
        title="Master the Ancient Sciences"
        description="Four transformative courses spanning numerology, temporal science, Nadi astrology and the sacred tarot — each taught with scientific precision by Dr. Arun Poovaiah."
      />

      <section className="bg-[#0D1B3E] pb-6 pt-2 border-b border-white/5">
        <div className="max-w-[1100px] mx-auto text-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-12 md:gap-24"
          >
            {[
              { label: 'Courses', val: '4', icon: BookOpen },
              { label: 'Students', val: '500+', icon: Users },
              { label: 'Years', val: '15+', icon: Award }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[#C8A84B] text-2xl md:text-3xl font-display font-semibold mb-1">{stat.val}</div>
                <div className="text-white/40 text-[10px] tracking-widest uppercase font-black">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COURSE TABS NAV ── */}
      <nav className="sticky top-[74px] md:top-[84px] z-40 bg-white border-b-2 border-[#f0ebe0] overflow-x-auto">
        <div className="max-w-[1100px] mx-auto px-6 h-full">
          <div className="flex whitespace-nowrap min-w-max md:min-w-0">
            {[
              { id: 'numerology', label: 'Numerology' },
              { id: 'wristwatch', label: 'Wrist-Watch Analysis' },
              { id: 'bnnnadi', label: 'BNN Nadi' },
              { id: 'tarot', label: 'Tarot' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenModule(0);
                }}
                className={`px-6 md:px-10 py-5 text-[12px] md:text-[13px] font-display transition-all border-b-4 ${
                  activeTab === tab.id 
                    ? 'text-[#1a1a2e] border-[#C8A84B] font-black' 
                    : 'text-[#5a5a6a] border-transparent font-medium hover:text-[#1a1a2e]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── COURSE PANEL ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-[1100px] mx-auto px-6 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">
            {/* LEFT: Course Info */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <span className="inline-block bg-[#C8A84B1a] border border-[#C8A84B66] text-[#C8A84B] text-[10px] md:text-[11px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full">
                  {course.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-normal text-[#1a1a2e]">
                  {course.title}
                </h2>
                <p className="text-[14px] md:text-[15px] text-[#4a4a5a] leading-relaxed italic font-display italic">
                  {course.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] tracking-[0.1em] text-[#C8A84B] font-black uppercase">Core Benefits</h4>
                <div className="space-y-4">
                  {course.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-[13px] md:text-[14px] text-[#3a3a4a] leading-relaxed">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="w-4 h-4 text-[#C8A84B]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to="/contact"
                className="inline-block bg-[#C8A84B] text-white px-10 py-4 font-display font-semibold transition-transform hover:scale-105"
              >
                Enroll in {activeTab === 'wristwatch' ? 'Watch Analysis' : course.id === 'numerology' ? 'Numerology' : tabToName(activeTab)}
              </Link>
            </div>

            {/* RIGHT: Info Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-[160px]">
              <div className="bg-[#1E2D4A] p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-16 -translate-y-16" />
                
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-[#C8A84B] flex items-center justify-center text-white">
                    {activeTab === 'numerology' && <Target className="w-8 h-8" />}
                    {activeTab === 'wristwatch' && <Watch className="w-8 h-8" />}
                    {activeTab === 'bnnnadi' && <Moon className="w-8 h-8" />}
                    {activeTab === 'tarot' && <Sparkles className="w-8 h-8" />}
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-normal text-white">
                    {course.id === 'bnnnadi' ? 'BNN Nadi Astrology' : course.id === 'wristwatch' ? 'Wrist-Watch Analysis' : course.title.split('Mastery')[0]}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] tracking-widest text-[#C8A84B] font-black uppercase block mb-4">Course Includes</span>
                      <div className="space-y-3">
                        {course.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-[12px] md:text-[13px] text-white/70 border-b border-white/5 pb-2 last:border-0">
                            <Zap className="w-3 h-3 text-[#C8A84B] flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-widest text-[#C8A84B] font-black uppercase block mb-3">Suitable For</span>
                      <p className="text-[12px] md:text-[13px] text-white/50 italic leading-relaxed">
                        {course.suitable}
                      </p>
                    </div>

                    <button className="w-full py-4 border border-[#C8A84B] text-[#C8A84B] font-display text-[12px] md:text-[13px] font-black tracking-widest uppercase transition-all hover:bg-[#C8A84B] hover:text-[#1a1a2e]">
                      Get Syllabus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CURRICULUM ACCORDION */}
          <div className="mt-24 space-y-8">
            <div className="flex items-center gap-6">
               <h3 className="text-2xl font-display text-[#1a1a2e]">Complete Curriculum</h3>
               <div className="flex-grow h-px bg-[#e8e2d8]" />
            </div>

            <div className="space-y-4">
              {course.curriculum.map((module, mIdx) => (
                <div key={mIdx} className={`bg-white border transition-all duration-500 ${openModule === mIdx ? 'border-[#C8A84B] shadow-xl' : 'border-[#e8e2d8]'}`}>
                  <button 
                    onClick={() => setOpenModule(openModule === mIdx ? null : mIdx)}
                    className="w-full flex justify-between items-center px-6 md:px-8 py-5 md:py-6 text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[11px] font-black tracking-widest text-[#C8A84B] font-display">0{mIdx + 1}</span>
                      <h4 className="text-[15px] md:text-[16px] font-display font-medium text-[#1a1a2e] group-hover:text-[#C8A84B] transition-colors uppercase tracking-wide">
                        {module.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-6">
                       <span className="hidden md:block text-[11px] font-black tracking-widest text-[#C8A84B] uppercase">{module.count}</span>
                       <ChevronDown className={`w-5 h-5 text-[#C8A84B] transition-transform duration-500 ${openModule === mIdx ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openModule === mIdx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 md:pb-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {module.topics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-center gap-4 bg-[#faf7f0] p-4 border-l-4 border-[#C8A84B]">
                                <span className="text-[13px] md:text-[14px] text-[#4a4a5a] font-normal leading-relaxed">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* UNIQUE ANGLES / FOR WHOM */}
          {course.uniqueAngles ? (
              <div className="mt-32 space-y-12">
                 <div className="text-center">
                    <h3 className="text-3xl font-display text-[#1a1a2e] mb-2 italic">Why This Course is Unique</h3>
                    <div className="w-20 h-1 bg-[#C8A84B] mx-auto" />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {course.uniqueAngles.map((angle, idx) => (
                        <div key={idx} className="p-8 md:p-10 bg-white border border-[#e8e2d8] shadow-sm hover:shadow-2xl transition-all">
                             <h5 className="text-[16px] font-display font-medium text-[#1a1a2e] mb-4 uppercase tracking-tighter">{angle.title}</h5>
                             <p className="text-[13px] md:text-[14px] text-[#4a4a5a] leading-relaxed italic">{angle.desc}</p>
                        </div>
                    ))}
                 </div>
              </div>
          ) : (
            <div className="mt-32 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Beginners', icon: ShieldCheck, desc: 'Anyone curious about numbers and their deeper meaning in life' },
                  { title: 'Practitioners', icon: Users, desc: 'Astrologers, counsellors and coaches wanting to add this wisdom to their practice' },
                  { title: 'Entrepreneurs', icon: Target, desc: 'Business owners wanting to align names, dates and decisions for maximum resonance' }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 md:p-10 bg-white border border-[#e8e2d8] shadow-sm hover:shadow-2xl transition-all text-center">
                    <div className="w-12 h-12 bg-[#faf7f0] flex items-center justify-center mx-auto mb-6 text-[#C8A84B]">
                       <item.icon className="w-6 h-6" />
                    </div>
                    <h5 className="text-[17px] font-display font-medium text-[#1a1a2e] mb-4 uppercase tracking-tight">{item.title}</h5>
                    <p className="text-[13px] md:text-[14px] text-[#4a4a5a] leading-relaxed italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA STRIP */}
          <div className="mt-32">
            <div className="bg-[#0d1b3e] px-10 py-16 md:py-20 text-center relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(200,168,75,0.1),transparent)]" />
               <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4 relative z-10">
                 {course.ctaText}
               </h2>
               <div className="text-[11px] md:text-[12px] tracking-[0.2em] text-[#C8A84B] font-black uppercase mb-10 relative z-10 group-hover:tracking-[0.3em] transition-all duration-700">
                 {course.ctaSub}
               </div>
               <Link 
                 to="/contact"
                 className="relative z-10 inline-block bg-[#C8A84B] text-white px-12 py-5 font-display font-semibold transition-all hover:bg-[#b8963e] hover:scale-105"
               >
                 Enroll Now — Contact Us
               </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const tabToName = (tab: string) => {
    if (tab === 'bnnnadi') return 'BNN Nadi';
    if (tab === 'tarot') return 'Tarot';
    return tab;
}

export default Academy;
