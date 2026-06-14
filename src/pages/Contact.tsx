import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, Send, User, Briefcase } from 'lucide-react';
import { SOCIAL_LINKS } from '../lib/constants';
import { StandardNameInput, StandardEmailInput, StandardSelect, StandardTextArea } from '../components/StandardFormFields';
import { HeroHeader } from '../components/HeroHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Commercial Brand Naming',
    message: ''
  });

  return (
    <div className="bg-warm-off-white min-h-screen">
      <HeroHeader 
        eyebrow="Private Concierge"
        title="Connect With The Matrix"
        description="Looking to align your commercial brand or personal vibration with universal logic? Our private concierge team is at your disposal."
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="space-y-8 mb-20">
               {[
                 { icon: Mail, label: 'Secure Email', value: 'contact@destinynumbers.in' },
                 { icon: Phone, label: 'Direct WhatsApp', value: '+91 74063 57511' },
                 { icon: MapPin, label: 'Global Hub', value: 'Bangalore • Virtual Consultancy' }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-6 group">
                   <div className="w-14 h-14 rounded-none bg-white border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] group-hover:bg-mystic-navy group-hover:text-white transition-all duration-500 shadow-xl">
                      <item.icon className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-[10px] text-[#C9A84C]/80 tracking-widest font-black mb-1 uppercase">{item.label}</p>
                      <p className="text-mystic-navy font-bold text-lg tracking-wide group-hover:text-[#C9A84C] transition-colors duration-300">{item.value}</p>
                   </div>
                 </div>
               ))}
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.label} 
                  href={social.url}
                  className="w-12 h-12 rounded-none border border-[#C9A84C]/20 flex items-center justify-center text-mystic-navy hover:border-[#C9A84C] hover:text-[#C9A84C] hover:shadow-lg transition-all bg-white shadow-sm"
                  target={social.url === '#' ? undefined : '_blank'}
                  rel={social.url === '#' ? undefined : 'noopener noreferrer'}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass-card p-8 md:p-12 rounded-none border border-[#E0D5C0] shadow-2xl bg-white relative"
          >
             <h3 className="text-2xl font-display font-black text-mystic-navy mb-10 tracking-widest uppercase">Strategic Inquiry</h3>
             <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StandardNameInput
                    label="First Name"
                    value={formData.firstName}
                    onChange={(val) => setFormData({...formData, firstName: val})}
                    placeholder="Enter first name"
                    error={!formData.firstName && formData.firstName !== undefined ? "Required" : ""}
                  />
                  <StandardNameInput
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(val) => setFormData({...formData, lastName: val})}
                    placeholder="Enter last name"
                  />
                </div>
                <StandardEmailInput
                  label="Email Address"
                  value={formData.email}
                  onChange={(val) => setFormData({...formData, email: val})}
                  placeholder="name@organization.com"
                  error={formData.email && !formData.email.includes('@') ? "Valid email required" : ""}
                />
                <StandardSelect
                  label="Service Category"
                  value={formData.service}
                  onChange={(val) => setFormData({...formData, service: val})}
                  icon={<Briefcase />}
                  options={[
                    { value: 'Commercial Brand Naming', label: 'Commercial Brand Naming' },
                    { value: 'Personal Vibration Mapping', label: 'Personal Vibration Mapping' },
                    { value: 'Elite Vastu Architecture', label: 'Elite Vastu Architecture' },
                    { value: 'Stellar Matrix Analysis', label: 'Stellar Matrix Analysis' },
                    { value: 'Learning Academy Enrollment', label: 'Learning Academy Enrollment' }
                  ]}
                />
                <StandardTextArea
                  label="Message Details"
                  value={formData.message}
                  onChange={(val) => setFormData({...formData, message: val})}
                  placeholder="Brief description of your intent"
                  rows={4}
                />
                <button className="w-full h-[52px] bg-[#C9A84C] text-white font-black tracking-widest text-[11px] rounded-[6px] flex items-center justify-center gap-4 hover:shadow-2xl hover:scale-[1.01] transition-all uppercase mt-4">
                   Submit Request <Send className="w-5 h-5" />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
