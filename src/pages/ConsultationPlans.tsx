import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Award, 
  X, 
  Sparkles, 
  Send,
  MessageCircle,
  Phone,
  Video,
  ArrowRight,
  Gem,
  User,
  Calendar,
  MapPin
} from 'lucide-react';
import { cn } from '../lib/utils';
import { StandardNameInput, StandardDateInput, StandardMobileInput, StandardEmailInput, StandardTextArea } from '../components/StandardFormFields';
import { useCMS } from '../context/CMSContext';

interface Plan {
  id: string;
  name: string;
  price: string;
  badge: string;
  valid: string;
  consultations: string;
  features: string[];
  cta: string;
  theme: 'silver' | 'gold' | 'diamond' | 'platinum';
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'silver',
    name: 'Silver Moon',
    price: '3,333',
    badge: 'Begin Your Journey',
    valid: '3 Months',
    consultations: '3 Consultations',
    features: [
      'Date of Birth Analysis',
      'Name Numerology Analysis',
      'Mobile Number Analysis',
      'Rin (Debt) Analysis',
      'Lucky Numbers & Colors',
      'Health, Marriage & Career guidance',
      'Effective Remedies'
    ],
    cta: 'Start with Silver',
    theme: 'silver'
  },
  {
    id: 'gold',
    name: 'Golden Star',
    price: '5,100',
    badge: 'Best Value',
    valid: '5 Months',
    consultations: '4 Consultations',
    features: [
      'Everything in Silver Moon',
      'Destiny Number Deep Analysis',
      'Kundali (Birth Chart) Analysis',
      'Rin & Dosha Remedies',
      'Job / Business & Finance Guidance',
      'Mobile Number Compatibility',
      'Effective Remedies'
    ],
    cta: 'Choose Golden Star',
    theme: 'gold',
    popular: true
  },
  {
    id: 'diamond',
    name: 'Diamond Galaxy',
    price: '8,100',
    badge: 'Complete Transformation',
    valid: '12 Months',
    consultations: '6 Consultations',
    features: [
      'Everything in Golden Star',
      'Dasha & Cups System Analysis',
      'Chakra Analysis',
      'Vastu Analysis',
      'Business Logo & Name Analysis',
      'Wrist Watch Analysis',
      'Aura Reading',
      'Priority Support'
    ],
    cta: 'Go Diamond',
    theme: 'diamond'
  },
  {
    id: 'platinum',
    name: 'Platinum Cosmos',
    price: '12,000',
    badge: 'VIP & Unlimited',
    valid: '12 Months',
    consultations: 'Unlimited Consultations',
    features: [
      'Everything in Diamond Galaxy',
      'Unlimited Consultation Sessions',
      'Personal WhatsApp Access',
      'Monthly Follow-up Reports',
      'Tarot Card Reading (Full Spread)',
      'Baby / Business Name Suggestion',
      'Marriage Compatibility Report',
      'Exclusive Remedy Kit Guidance'
    ],
    cta: 'Join Platinum',
    theme: 'platinum'
  }
];

export function ConsultationPlans() {
  const { data } = useCMS();
  const [searchParams] = useSearchParams();
  const PLANS = data.pricing;
  
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    birthTime: '',
    birthTimePeriod: 'AM' as 'AM' | 'PM',
    birthPlace: '',
    gender: 'Male',
    mobile: '',
    email: '',
    mode: 'Phone Call',
    dateTime: '',
    message: ''
  });

  useEffect(() => {
    const bookingParam = searchParams.get('appParams');
    const serviceParam = searchParams.get('service');
    
    if (bookingParam === 'booking-form' && PLANS.length > 0) {
      setSelectedPlan(PLANS[1] || PLANS[0]); // Default to popular or first
    } else if (serviceParam && PLANS.length > 0) {
      // If a service is specified, maybe they just want to see plans
      // but if we want to auto-open the form, we could.
      // For now, let's just ensure we have data.
    }
  }, [searchParams, PLANS]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate
    if (!formData.name || !formData.dob || !formData.mobile || !formData.email || !formData.dateTime || !formData.birthPlace || !formData.birthTime) {
      alert("Please fill all required fields");
      return;
    }

    const submission = {
      plan: selectedPlan?.name,
      price: selectedPlan?.price,
      ...formData,
      fullBirthTime: `${formData.birthTime} ${formData.birthTimePeriod}`,
      timestamp: new Date().toISOString()
    };

    console.log("Captured Booking Data:", JSON.stringify(submission, null, 2));
    
    // Redirect to payment link as requested (referencing live site pattern)
    window.location.href = `https://www.destinynumbers.in/appointment?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&mobile=${encodeURIComponent(formData.mobile)}&plan=${encodeURIComponent(selectedPlan?.name)}`;
    
    setIsSuccess(true);
  };

  const closeOverlay = () => {
    setSelectedPlan(null);
    setIsSuccess(false);
    setFormData({
      name: '',
      dob: '',
      birthTime: '',
      birthTimePeriod: 'AM',
      birthPlace: '',
      mobile: '',
      email: '',
      mode: 'Phone Call',
      gender: 'Male',
      dateTime: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#F5ECD7] text-[#1C3557] font-sans selection:bg-[#C9A84C] selection:text-white pb-20">
      {/* Hero Section */}
      <section 
        className="relative w-full overflow-hidden flex items-center justify-center text-center bg-cover bg-center shadow-md px-4 pt-[95px] md:pt-[105px] pb-4 mb-4"
        style={{ 
          backgroundColor: '#0d1b3e',
          height: '190px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10 w-full -mt-2"
        >
          <div className="mb-2">
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: '26px',
              fontWeight: 400,
              lineHeight: 1.0,
              margin: '0 0 2px 0',
              color: '#ffffff',
              letterSpacing: '0',
              textAlign: 'center'
            }}>
              Choose Your Path <span style={{ color: '#C9A84C' }}>to Clarity</span>
            </h2>
            <div style={{ width: '50px', height: '1px', background: '#C9A84C', margin: '2px auto 0' }}></div>
          </div>
          
          <p className="mb-2 text-[13px] leading-tight max-w-2xl mx-auto opacity-95 text-[#FAF7F0] italic font-normal" style={{ lineHeight: '1.2' }}>
            Expert guidance in Numerology, Astrology & Vastu — 
            trusted by 5,000+ souls across India
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-90 text-white">
            <div className="flex items-center gap-1">
              <span className="text-base">⭐</span>
              <span className="text-[10px] tracking-widest font-bold uppercase">4.9 rating</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-base">👥</span>
              <span className="text-[10px] tracking-widest font-bold uppercase">5000+ clients</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-base">🏆</span>
              <span className="text-[10px] tracking-widest font-bold uppercase">15+ years exp.</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Grids */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-4">
            <motion.div 
              key="online"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {PLANS.map((plan, idx) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={cn(
                    "relative p-5 lg:p-6 rounded-none bg-[#12173A] border border-white/5 transition-all duration-500 hover:border-[#C9A84C]/50 group flex flex-col h-full",
                    plan.popular && "scale-105 border-[#C9A84C] shadow-[0_0_30px_rgba(201,168,76,0.12)] ring-1 ring-[#C9A84C]"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0B0F2A] px-3 py-1 rounded-none text-[10px] font-black tracking-widest most-popular-badge">
                      Most popular
                    </div>
                  )}

                  <div className="mb-4">
                    <span className={cn(
                      "text-[10px] tracking-widest font-black px-2.5 py-0.5 rounded-none bg-white/5 pricing-badge",
                      plan.theme === 'silver' && "text-slate-300",
                      plan.theme === 'gold' && "text-[#C9A84C]",
                      plan.theme === 'diamond' && "text-cyan-400",
                      plan.theme === 'platinum' && "text-[#6B4FA0]"
                    )}>
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-display font-medium mt-2 text-[#FAF7F0] pricing-tier-name">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline gap-1.5 pricing-price">
                       <span className="currency text-xl text-white/50">₹</span>
                       <span className="text-3xl font-bold text-white">{plan.price}</span>
                    </div>
                    <div className="mt-3 text-[11px] text-white/40 tracking-widest flex flex-col gap-1.5">
                      <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-none border border-white/5">
                        <Clock className="w-3.5 h-3.5 text-[#C9A84C]" /> 
                        <span className="text-white font-black">{plan.valid}</span> service period
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-none border border-white/5">
                        <Award className="w-3.5 h-3.5 text-[#C9A84C]" /> 
                        <span className="text-white font-black">{plan.consultations}</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 group/item pricing-feature">
                        <Check className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                        <span className="text-[13px] text-white/70 leading-tight group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedPlan(plan)}
                    className={cn(
                      "w-full py-3 rounded-none text-[12px] tracking-widest font-black transition-all pricing-cta",
                      plan.popular 
                        ? "bg-[#C9A84C] text-[#0B0F2A] hover:bg-[#FAF7F0] shadow-md shadow-[#C9A84C10]" 
                        : "bg-white/5 text-white hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] border border-white/10"
                    )}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </motion.div>
      </div>

      {/* Trust Strip */}
      <section className="bg-[#12173A]/50 border-y border-white/5 mt-20 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-12">
          {[
            { icon: ShieldCheck, text: "100% Secure Payment" },
            { icon: Clock, text: "24hr Confirmation" },
            { icon: Award, text: "Satisfaction Guaranteed" },
            { icon: Zap, text: "Expert Astrologers" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <item.icon className="w-6 h-6 text-[#C9A84C] group-hover:scale-110 transition-transform" />
              <span className="text-[12px] font-black tracking-widest text-[#FAF7F0]/60 group-hover:text-[#FAF7F0] transition-colors">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mt-32 relative z-10">
        <h2 className="text-4xl font-display text-center mb-16 italic text-[#0d1b3e]">Common Clarifications</h2>
        <div className="space-y-6">
          {[
            { q: "How will the consultation happen?", a: "Phone, Video or WhatsApp as per your choice" },
            { q: "When will I receive my booking confirmation?", a: "Within 24 hours of booking" },
            { q: "Can I upgrade my plan later?", a: "Yes, contact us on WhatsApp" }
          ].map((faq, idx) => (
            <div key={idx} className="p-8 rounded-none bg-white border border-[#0d1b3e]/10 text-left group hover:border-[#C9A84C]/30 transition-all">
              <h4 className="text-xl font-display text-[#C9A84C] mb-4">{faq.q}</h4>
              <p className="text-[#0d1b3e]/80 text-[16px] italic leading-relaxed"> {faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Location Details */}
      <section className="mt-16 pt-12 pb-12 border-t border-[#0d1b3e]/15 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
             <h3 className="text-xl font-display text-[#0d1b3e] mb-4 tracking-widest italic">✦ Destiny Numbers</h3>
             <p className="text-[#0d1b3e]/70 leading-relaxed font-sans text-sm italic pr-8">
                Providing specialized guidance for cosmic navigation. We decode the complex algorithms of destiny to find your path to prosperity.
             </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-widest font-black text-[#C9A84C] uppercase">Connect with us</h4>
            <div className="flex items-center gap-4 text-[#0d1b3e]/80 hover:text-[#0d1b3e] transition-colors">
              <Phone className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[15px] font-bold">+91 74063 57511</span>
            </div>
            <div className="flex items-center gap-4 text-[#0d1b3e]/80 hover:text-[#0d1b3e] transition-colors">
              <Send className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[15px] font-bold">support@destinynumber.in</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-widest font-black text-[#C9A84C] uppercase">Registered sanctuary</h4>
            <p className="text-[#0d1b3e]/80 text-[15px] leading-relaxed italic">
              No 11, 5th Main Rd, Palace Guttahalli,<br />
              Bengaluru, Karnataka 560003
            </p>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto py-10">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={closeOverlay}
               className="fixed inset-0 bg-[#0B0F2A]/90 backdrop-blur-xl"
             />

             <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               className="relative w-full max-w-2xl bg-[#F5ECD7] rounded-none p-8 md:p-12 border border-[#C9A84C]/20 shadow-[0_0_80px_rgba(0,0,0,0.2)]"
             >
                <button 
                  onClick={closeOverlay}
                  className="absolute right-8 top-8 text-[#0d1b3e]/20 hover:text-[#0d1b3e] transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                 {!isSuccess ? (
                  <>
                    <div className="text-center mb-10">
                      <span className="text-[#C9A84C] text-[10px] tracking-widest font-black mb-4 block uppercase font-display">Secure Reservation</span>
                      <h2 className="text-3xl md:text-5xl font-display font-black text-[#0d1b3e] mb-4 italic">Book Your {selectedPlan.name}</h2>
                      <p className="text-[#0d1b3e] text-[16px] tracking-widest font-medium uppercase font-display opacity-80">Confirmation within 24 hours</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StandardNameInput
                          label="Full Name *"
                          value={formData.name}
                          onChange={val => setFormData({...formData, name: val})}
                          placeholder="Arun Poovaiah"
                          error={formData.name === '' && formData.name !== undefined ? "Required" : ""}
                        />
                        <StandardDateInput
                          label="Date of Birth *"
                          value={formData.dob}
                          onChange={val => setFormData({...formData, dob: val})}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <label className="text-[12px] tracking-widest text-[#C9A84C] font-black uppercase font-display block">Time of Birth *</label>
                          <div className="flex gap-2">
                            <input 
                              type="text"
                              placeholder="HH:MM"
                              value={formData.birthTime}
                              onChange={e => setFormData({...formData, birthTime: e.target.value})}
                              className="flex-grow bg-white border border-[#0d1b3e]/10 rounded-none h-[52px] px-4 text-[#0d1b3e] outline-none focus:border-[#C9A84C] transition-all font-sans"
                            />
                            <div className="flex border border-[#0d1b3e]/10 rounded-none overflow-hidden">
                              {(['AM', 'PM'] as const).map(p => (
                                <button
                                  key={p}
                                  type="button"
                                  onClick={() => setFormData({...formData, birthTimePeriod: p})}
                                  className={cn(
                                    "px-4 h-[52px] text-[10px] font-black tracking-widest transition-all",
                                    formData.birthTimePeriod === p ? "bg-[#C9A84C] text-[#0d1b3e]" : "bg-white text-[#0d1b3e]/40 hover:text-[#0d1b3e]"
                                  )}
                                >
                                  {p}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <StandardNameInput
                          label="Place of Birth *"
                          value={formData.birthPlace}
                          onChange={val => setFormData({...formData, birthPlace: val})}
                          placeholder="City, State, Country"
                          icon={<MapPin className="w-5 h-5" />}
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[12px] tracking-widest text-[#C9A84C] font-black uppercase font-display block">Gender *</label>
                        <div className="grid grid-cols-3 gap-4">
                          {['Male', 'Female', 'Other'].map(g => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => setFormData({...formData, gender: g})}
                              className={cn(
                                "h-[52px] text-[10px] font-black tracking-widest uppercase transition-all",
                                formData.gender === g 
                                ? "bg-[#C9A84C] text-[#0d1b3e]" 
                                : "bg-white border border-[#0d1b3e]/10 text-[#0d1b3e]/40 hover:text-[#0d1b3e]"
                          )}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StandardMobileInput
                      label="Mobile Number *"
                      value={formData.mobile}
                      onChange={val => setFormData({...formData, mobile: val})}
                      placeholder="74063 57511"
                      error={formData.mobile && formData.mobile.length < 10 ? "Valid mobile required" : ""}
                    />
                    <StandardEmailInput
                      label="Email Address *"
                      value={formData.email}
                      onChange={val => setFormData({...formData, email: val})}
                      placeholder="hello@destinynumber.in"
                      error={formData.email && !formData.email.includes('@') ? "Valid email required" : ""}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[12px] tracking-widest text-[#C9A84C] font-black uppercase font-display block">Preferred Mode</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Phone, label: 'Phone Call' },
                        { icon: Video, label: 'Video Call' },
                        { icon: MessageCircle, label: 'WhatsApp' }
                      ].map(m => (
                        <button
                          key={m.label}
                          type="button"
                          onClick={() => setFormData({...formData, mode: m.label})}
                          className={cn(
                            "flex flex-col items-center gap-2 p-4 rounded-none border transition-all h-[100px] justify-center",
                            formData.mode === m.label 
                              ? "bg-[#C9A84C] border-[#C9A84C] text-[#0d1b3e]" 
                              : "bg-white border-[#0d1b3e]/10 text-[#0d1b3e]/40 hover:text-[#0d1b3e]"
                          )}
                        >
                              <m.icon className="w-6 h-6" />
                              <span className="text-[10px] font-black tracking-widest uppercase">{m.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[12px] tracking-widest text-[#C9A84C] font-black uppercase font-display block">Appointment Time *</label>
                        <div className="relative">
                           <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A84C]" />
                           <input 
                              required
                              type="datetime-local" 
                              value={formData.dateTime}
                              onChange={e => setFormData({...formData, dateTime: e.target.value})}
                              className="w-full bg-white border border-[#0d1b3e]/10 rounded-none h-[52px] pl-[44px] pr-[16px] text-[#0d1b3e] outline-none focus:border-[#C9A84C] transition-all font-sans text-[16px] [color-scheme:light]"
                           />
                        </div>
                      </div>

                      <StandardTextArea
                        label="Message (Optional)"
                        value={formData.message}
                        onChange={val => setFormData({...formData, message: val})}
                        placeholder="Tell us what you'd like to discuss..."
                        rows={3}
                      />

                      <div className="pt-6">
                        <button 
                          type="submit"
                          className="w-full h-[60px] rounded-none bg-[#C9A84C] text-[#0B0F2A] text-[14px] font-black tracking-widest flex items-center justify-center gap-4 hover:shadow-2xl transition-all uppercase"
                        >
                          Proceed to Payment — ₹{selectedPlan.price}
                        </button>
                        <p className="text-center text-[10px] text-white/20 tracking-widest mt-6 uppercase font-display">
                           🔒 Your details are protected by our cosmic matrix.
                        </p>
                      </div>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-[#C9A84C1a] rounded-none flex items-center justify-center mx-auto mb-10 border border-[#C9A84Ccc] animate-pulse">
                      <Sparkles className="w-12 h-12 text-[#C9A84C]" />
                    </div>
                    <h2 className="text-5xl font-display text-[#0d1b3e] mb-6 italic modal-success-title">Thank you, {formData.name}!</h2>
                    <p className="text-xl text-[#0d1b3e]/60 mb-10 max-w-sm mx-auto italic font-display modal-success-message">
                      Your {selectedPlan.name} consultation is booked. 
                      We'll contact you on {formData.mobile} within 24 hours.
                    </p>
                    <div className="inline-flex items-center gap-4 px-8 py-5 rounded-none bg-[#C9A84C] text-[#0d1b3e] font-black tracking-widest text-[13px] mb-12">
                      <MessageCircle className="w-5 h-5" />
                      Follow us on WhatsApp: +91 74063 57511
                    </div>
                    <div>
                       <button 
                         onClick={closeOverlay}
                         className="px-10 py-4 rounded-none border border-[#0d1b3e]/10 text-[#0d1b3e]/40 hover:text-[#0d1b3e] text-[11px] font-black tracking-widest transition-all"
                       >
                         Close sanctuary
                       </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
    </div>
  );
}

function HeartIcon(props: any) {
  return <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>;
}
