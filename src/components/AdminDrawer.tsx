import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Settings, X, Lock, Save, Plus, Trash2, 
  Image as ImageIcon, Layout, FileText, 
  Users, BarChart3, LogOut, CreditCard,
  Star, Loader2
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { useAuth } from '../context/AuthContext';
import { cmsService } from '../lib/cmsService';
import { blogService } from '../lib/blogService';
import { cn } from '../lib/utils';

export function AdminDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const { data, posts, refresh: refreshCMS, loading: cmsLoading } = useCMS();
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const [localData, setLocalData] = useState(data);
  const [isSaving, setIsSaving] = useState(false);

  // Synchronize localData when data from CMSContext changes
  useEffect(() => {
    if (data) {
      setLocalData(data);
    }
  }, [data]);

  const saveAll = async () => {
    setIsSaving(true);
    try {
      await cmsService.saveData(localData);
      alert('Changes synchronized live to cosmic vault!');
      await refreshCMS();
    } catch (error) {
      console.error('Save failed:', error);
      alert('Failed to sync changes. Check console for details.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = async (file: File, type: string, id?: string) => {
    const base64 = await cmsService.uploadImage(file);
    if (type === 'hero') {
      setLocalData({ ...localData, hero: { ...localData.hero, image: base64 } });
    } else if (type === 'bio') {
      setLocalData({ ...localData, bio: { ...localData.bio, image: base64 } });
    } else if (type === 'slide' && id) {
      const slides = localData.slides.map(s => s.id === id ? { ...s, image: base64 } : s);
      setLocalData({ ...localData, slides });
    } else if (type === 'service' && id) {
      const services = localData.services.map(s => s.id === id ? { ...s, image: base64 } : s);
      setLocalData({ ...localData, services });
    }
  };

  const handleDeletePost = async (id: string) => {
    if (confirm('Banish this insight to the void?')) {
      await blogService.deletePost(id);
      refreshCMS();
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-royal-gold text-mystic-navy rounded-full flex items-center justify-center shadow-2xl z-[200] hover:scale-110 transition-all border-4 border-[#0B0F2A]"
      >
        <Settings className="w-6 h-6 animate-spin-slow" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#0B0F2A]/60 backdrop-blur-sm pointer-events-auto"
        onClick={() => setIsOpen(false)}
      />

      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        className="absolute top-0 right-0 h-full w-full max-w-lg bg-[#FAF7F0] shadow-[-20px_0_60px_rgba(0,0,0,0.3)] pointer-events-auto flex flex-col"
      >
        <div className="flex items-center justify-between p-8 border-b border-mystic-navy/5 bg-mystic-navy text-warm-off-white">
          <div className="flex items-center gap-4">
            <Settings className="w-5 h-5 text-royal-gold" />
            <h2 className="text-sm font-black tracking-[0.3em]">Destiny Admin</h2>
          </div>
          <div className="flex items-center gap-4">
            {user && (
              <button 
                onClick={() => { signOut(); setIsOpen(false); }}
                className="p-2 text-warm-off-white/40 hover:text-royal-gold transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}
            <button onClick={() => setIsOpen(false)}><X className="w-6 h-6" /></button>
          </div>
        </div>

        {authLoading || cmsLoading ? (
          <div className="flex-grow flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-royal-gold" />
          </div>
        ) : !isAdmin ? (
          <div className="flex-grow flex flex-col items-center justify-center p-12 text-center">
            <Lock className="w-12 h-12 text-mystic-navy/20 mb-8" />
            <h3 className="text-2xl font-display font-medium text-mystic-navy italic mb-4">Access Restricted</h3>
            <p className="text-mystic-navy/60 text-sm mb-8">
              Only authorized administrators can access the cosmic controls.
            </p>
            <Link 
              to="/admin/login" 
              onClick={() => setIsOpen(false)}
              className="px-8 py-4 bg-mystic-navy text-white rounded-2xl text-[10px] font-black tracking-widest hover:bg-mystic-navy/90 transition-all uppercase"
            >
              Sign In to Sanctuary
            </Link>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex overflow-x-auto bg-mystic-navy/5 p-2 gap-1 border-b border-mystic-navy/10 scrollbar-none">
              {[
                { id: 'slides', label: 'Slider', icon: Layout },
                { id: 'profile', label: 'Arun Bio', icon: Users },
                { id: 'menu', label: 'Menu', icon: Layout },
                { id: 'services', label: 'Services', icon: BarChart3 },
                { id: 'blog', label: 'Blog', icon: FileText },
                { id: 'pricing', label: 'Pricing', icon: CreditCard },
                { id: 'testimonials', label: 'Quotes', icon: Star },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-[9px] font-black tracking-widest transition-all",
                    activeTab === tab.id ? "bg-mystic-navy text-white shadow-lg" : "text-mystic-navy/40 hover:text-mystic-navy"
                  )}
                >
                  <tab.icon className="w-3.5 h-3.5" /> {tab.label}
                </button>
              ))}
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-10 custom-scrollbar">
              {activeTab === 'slides' && (
                <div className="space-y-12">
                  <div className="p-8 bg-royal-gold/5 rounded-[2.5rem] border border-royal-gold/10 space-y-4">
                    <label className="text-[10px] font-black tracking-widest text-royal-gold">Site Tagline (Hero Badge)</label>
                    <input 
                      type="text" 
                      value={localData.siteTagline}
                      onChange={e => setLocalData({ ...localData, siteTagline: e.target.value })}
                      className="w-full p-5 bg-white rounded-2xl outline-none border border-royal-gold/10 text-mystic-navy font-bold text-sm"
                    />
                  </div>
                  {localData.slides.map((slide, idx) => (
                    <div key={slide.id} className="p-8 bg-white rounded-[2.5rem] border border-mystic-navy/5 shadow-sm space-y-6">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black tracking-widest text-mystic-navy/30">Slide #{idx + 1}</span>
                         <button 
                            onClick={() => setLocalData({ ...localData, slides: localData.slides.filter(s => s.id !== slide.id) })}
                            className="p-2 text-red-400 hover:bg-red-50 rounded-lg"
                          >
                           <Trash2 className="w-4 h-4" />
                         </button>
                      </div>
                      <div className="relative group aspect-video rounded-2xl overflow-hidden bg-black/5 border border-black/5">
                        <img src={slide.image} className="w-full h-full object-cover" />
                        <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                          <ImageIcon className="w-6 h-6 text-white" />
                          <input type="file" className="hidden" onChange={e => {
                            if (e.target.files?.[0]) handleImageUpload(e.target.files[0], 'slide', slide.id);
                          }} />
                        </label>
                      </div>
                      <input 
                        type="text" 
                        value={slide.title}
                        placeholder="Slide Title"
                        onChange={e => {
                          const slides = [...localData.slides];
                          slides[idx].title = e.target.value;
                          setLocalData({ ...localData, slides });
                        }}
                        className="w-full p-4 bg-mystic-navy/5 rounded-xl text-mystic-navy font-display italic text-lg outline-none"
                      />
                      <textarea 
                        rows={2} 
                        value={slide.subtitle}
                        placeholder="Slide Subtitle"
                        onChange={e => {
                          const slides = [...localData.slides];
                          slides[idx].subtitle = e.target.value;
                          setLocalData({ ...localData, slides });
                        }}
                        className="w-full p-4 bg-mystic-navy/5 rounded-xl text-xs text-mystic-navy/60 outline-none"
                      />
                    </div>
                  ))}
                  <button 
                    onClick={() => setLocalData({ 
                      ...localData, 
                      slides: [...localData.slides, { id: Date.now().toString(), title: 'New Slide', subtitle: 'Description', image: localData.slides[0].image }] 
                    })}
                    className="w-full py-8 border-2 border-dashed border-mystic-navy/10 text-mystic-navy/40 rounded-[2.5rem] text-[10px] font-black tracking-widest hover:border-royal-gold/30 hover:text-royal-gold transition-all"
                  >
                    + Append New Slide
                  </button>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="space-y-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-mystic-navy/40 ml-2">Profile Image</label>
                      <div className="relative group aspect-[4/5] rounded-[3rem] overflow-hidden bg-black/5 border border-black/5 w-48 mx-auto">
                        <img src={localData.bio.image} className="w-full h-full object-cover" />
                        <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                          <ImageIcon className="w-8 h-8 text-white" />
                          <input type="file" className="hidden" onChange={e => {
                            if (e.target.files?.[0]) handleImageUpload(e.target.files[0], 'bio');
                          }} />
                        </label>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-mystic-navy/30 ml-2">First Name</label>
                        <input 
                          type="text" 
                          value={localData.bio.name}
                          onChange={e => setLocalData({ ...localData, bio: { ...localData.bio, name: e.target.value } })}
                          className="w-full p-4 bg-white border border-black/5 rounded-xl text-sm font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-mystic-navy/30 ml-2">Surname</label>
                        <input 
                          type="text" 
                          value={localData.bio.surname}
                          onChange={e => setLocalData({ ...localData, bio: { ...localData.bio, surname: e.target.value } })}
                          className="w-full p-4 bg-white border border-black/5 rounded-xl text-sm font-bold"
                        />
                      </div>
                   </div>
                   <div className="space-y-2">
                    <label className="text-[9px] font-black text-mystic-navy/30 ml-2">Tagline</label>
                    <input 
                      type="text" 
                      value={localData.bio.tagline}
                      onChange={e => setLocalData({ ...localData, bio: { ...localData.bio, tagline: e.target.value } })}
                      className="w-full p-4 bg-white border border-black/5 rounded-xl text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-mystic-navy/30 ml-2">Biography</label>
                    <textarea 
                      rows={4} 
                      value={localData.bio.description}
                      onChange={e => setLocalData({ ...localData, bio: { ...localData.bio, description: e.target.value } })}
                      className="w-full p-4 bg-white border border-black/5 rounded-xl text-xs font-light leading-relaxed"
                    />
                  </div>
                  
                  <div className="pt-6 space-y-4">
                    <label className="text-[9px] font-black text-mystic-navy/30 ml-2">Mini Stats / Highlights</label>
                    {localData.bio.stats.map((stat, idx) => (
                      <div key={idx} className="p-5 bg-white border border-black/5 rounded-2xl space-y-3 shadow-sm">
                         <input 
                          type="text" 
                          value={stat.label}
                          onChange={e => {
                            const stats = [...localData.bio.stats];
                            stats[idx].label = e.target.value;
                            setLocalData({ ...localData, bio: { ...localData.bio, stats } });
                          }}
                          className="w-full text-[10px] font-black tracking-widest text-royal-gold outline-none"
                         />
                         <textarea 
                          rows={2} 
                          value={stat.value}
                          onChange={e => {
                            const stats = [...localData.bio.stats];
                            stats[idx].value = e.target.value;
                            setLocalData({ ...localData, bio: { ...localData.bio, stats } });
                          }}
                          className="w-full text-xs text-mystic-navy/60 font-light italic outline-none bg-transparent"
                         />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'menu' && (
                <div className="space-y-6">
                  <div className="p-4 bg-royal-gold/10 rounded-2xl mb-8">
                    <p className="text-[10px] text-royal-gold font-bold tracking-widest text-center">Main Navigation Links</p>
                  </div>
                  {localData.navLinks.map((link, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-black/5 shadow-sm">
                      <div className="flex-grow space-y-2">
                        <input 
                          type="text" 
                          value={link.label}
                          placeholder="Link Label"
                          onChange={e => {
                            const navLinks = [...localData.navLinks];
                            navLinks[idx].label = e.target.value;
                            setLocalData({ ...localData, navLinks });
                          }}
                          className="w-full text-xs font-bold text-mystic-navy outline-none"
                        />
                        <input 
                          type="text" 
                          value={link.path}
                          placeholder="Link Path"
                          onChange={e => {
                            const navLinks = [...localData.navLinks];
                            navLinks[idx].path = e.target.value;
                            setLocalData({ ...localData, navLinks });
                          }}
                          className="w-full text-[10px] text-mystic-navy/40 outline-none"
                        />
                      </div>
                      <button 
                        onClick={() => setLocalData({ ...localData, navLinks: localData.navLinks.filter((_, i) => i !== idx) })}
                        className="p-2 text-red-400 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => setLocalData({ 
                      ...localData, 
                      navLinks: [...localData.navLinks, { label: 'New Link', path: '#' }] 
                    })}
                    className="w-full py-4 border-2 border-dashed border-mystic-navy/10 text-mystic-navy/40 rounded-2xl text-[10px] font-black tracking-widest"
                  >
                    + Add Menu Item
                  </button>
                </div>
              )}

              {activeTab === 'services' && (
                <div className="space-y-8">
                  {localData.services.map((service, idx) => (
                    <div key={service.id} className="p-6 bg-white rounded-[2rem] border border-mystic-navy/5 shadow-sm space-y-4">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-black/5 overflow-hidden border shrink-0">
                          <img src={service.image} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <input 
                            type="text" 
                            value={service.title}
                            onChange={e => {
                              const services = [...localData.services];
                              services[idx].title = e.target.value;
                              setLocalData({ ...localData, services });
                            }}
                            className="w-full font-bold text-mystic-navy outline-none"
                          />
                          <input 
                            type="file" 
                            className="text-[9px] mt-2 text-mystic-navy/40" 
                            onChange={e => {
                              if (e.target.files?.[0]) handleImageUpload(e.target.files[0], 'service', service.id);
                            }}
                          />
                        </div>
                        <button 
                          onClick={() => setLocalData({ ...localData, services: localData.services.filter(s => s.id !== service.id) })}
                          className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <textarea 
                        rows={2} 
                        value={service.description}
                        onChange={e => {
                          const services = [...localData.services];
                          services[idx].description = e.target.value;
                          setLocalData({ ...localData, services });
                        }}
                        className="w-full p-4 bg-mystic-navy/5 rounded-xl text-xs text-mystic-navy/60 outline-none focus:bg-white transition-all"
                      />
                    </div>
                  ))}
                  <button 
                    onClick={() => setLocalData({ 
                      ...localData, 
                      services: [...localData.services, { id: Date.now().toString(), title: 'New Service', description: 'Description', image: localData.services[0].image }] 
                    })}
                    className="w-full py-5 border-2 border-dashed border-mystic-navy/10 text-mystic-navy/40 rounded-[2rem] text-[10px] font-black tracking-widest hover:border-royal-gold/30 hover:text-royal-gold transition-all"
                  >
                    + Add New Service
                  </button>
                </div>
              )}
              
              {activeTab === 'pricing' && (
                <div className="space-y-8">
                  {localData.pricing.map((tier, idx) => (
                    <div key={tier.id} className="p-8 bg-white rounded-[2.5rem] border border-mystic-navy/5 shadow-sm space-y-6">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black tracking-widest text-mystic-navy/30">{tier.name}</span>
                         <div className="flex gap-2">
                           <input 
                             type="checkbox" 
                             checked={tier.popular} 
                             onChange={e => {
                               const pricing = [...localData.pricing];
                               pricing[idx].popular = e.target.checked;
                               setLocalData({ ...localData, pricing });
                             }}
                             className="w-4 h-4"
                           />
                           <span className="text-[9px] font-black text-mystic-navy/40">Popular</span>
                         </div>
                      </div>
                      <input 
                        type="text" 
                        value={tier.price}
                        placeholder="Price"
                        onChange={e => {
                          const pricing = [...localData.pricing];
                          pricing[idx].price = e.target.value;
                          setLocalData({ ...localData, pricing });
                        }}
                        className="w-full p-4 bg-mystic-navy/5 rounded-xl text-mystic-navy font-black text-xl outline-none"
                      />
                      <input 
                        type="text" 
                        value={tier.badge}
                        placeholder="Badge"
                        onChange={e => {
                          const pricing = [...localData.pricing];
                          pricing[idx].badge = e.target.value;
                          setLocalData({ ...localData, pricing });
                        }}
                        className="w-full p-4 bg-mystic-navy/5 rounded-xl text-[10px] text-royal-gold font-black tracking-widest outline-none"
                      />
                      <div className="space-y-3">
                        <label className="text-[9px] font-black text-mystic-navy/30 ml-2">Features (one per line)</label>
                        <textarea 
                          rows={4} 
                          value={tier.features.join('\n')}
                          onChange={e => {
                            const pricing = [...localData.pricing];
                            pricing[idx].features = e.target.value.split('\n');
                            setLocalData({ ...localData, pricing });
                          }}
                          className="w-full p-4 bg-mystic-navy/5 rounded-xl text-xs text-mystic-navy outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div className="space-y-8">
                  {localData.testimonials.map((t, idx) => (
                    <div key={t.id} className="p-8 bg-white rounded-[2.5rem] border border-mystic-navy/5 shadow-sm space-y-4">
                      <div className="flex items-center justify-between">
                         <div className="flex gap-1">
                           {[1, 2, 3, 4, 5].map(star => (
                             <Star 
                               key={star} 
                               className={cn("w-3 h-3 cursor-pointer", star <= t.rating ? "fill-royal-gold text-royal-gold" : "text-mystic-navy/10")} 
                               onClick={() => {
                                 const testimonials = [...localData.testimonials];
                                 testimonials[idx].rating = star;
                                 setLocalData({ ...localData, testimonials });
                               }}
                             />
                           ))}
                         </div>
                         <button 
                            onClick={() => setLocalData({ ...localData, testimonials: localData.testimonials.filter(item => item.id !== t.id) })}
                            className="p-2 text-red-400 hover:bg-red-50 rounded-lg"
                          >
                           <Trash2 className="w-4 h-4" />
                         </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          value={t.name}
                          placeholder="Name"
                          onChange={e => {
                            const testimonials = [...localData.testimonials];
                            testimonials[idx].name = e.target.value;
                            setLocalData({ ...localData, testimonials });
                          }}
                          className="w-full p-3 bg-mystic-navy/5 rounded-xl text-xs font-bold"
                        />
                        <input 
                          type="text" 
                          value={t.city}
                          placeholder="City"
                          onChange={e => {
                            const testimonials = [...localData.testimonials];
                            testimonials[idx].city = e.target.value;
                            setLocalData({ ...localData, testimonials });
                          }}
                          className="w-full p-3 bg-mystic-navy/5 rounded-xl text-xs"
                        />
                      </div>
                      <input 
                        type="text" 
                        value={t.image || ''}
                        placeholder="Image URL (Unsplash or direct link)"
                        onChange={e => {
                          const testimonials = [...localData.testimonials];
                          testimonials[idx].image = e.target.value;
                          setLocalData({ ...localData, testimonials });
                        }}
                        className="w-full p-3 bg-mystic-navy/5 rounded-xl text-[10px] outline-none"
                      />
                      <textarea 
                        rows={3} 
                        value={t.quote}
                        placeholder="Review/Quote"
                        onChange={e => {
                          const testimonials = [...localData.testimonials];
                          testimonials[idx].quote = e.target.value;
                          setLocalData({ ...localData, testimonials });
                        }}
                        className="w-full p-4 bg-mystic-navy/5 rounded-xl text-xs text-mystic-navy/60 outline-none"
                      />
                    </div>
                  ))}
                  <button 
                    onClick={() => setLocalData({ 
                      ...localData, 
                      testimonials: [...localData.testimonials, { id: Date.now().toString(), name: 'Client Name', city: 'City', quote: 'Experience...', rating: 5 }] 
                    })}
                    className="w-full py-5 border-2 border-dashed border-mystic-navy/10 text-mystic-navy/40 rounded-[2rem] text-[10px] font-black tracking-widest hover:border-royal-gold/30 hover:text-royal-gold transition-all"
                  >
                    + Add New Testimonial
                  </button>
                </div>
              )}
              
              {activeTab === 'blog' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="text-sm font-black tracking-widest text-mystic-navy/40">Latest Posts</h3>
                    <Link 
                      to="/admin/blog/new" 
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-royal-gold text-mystic-navy text-[9px] font-black tracking-widest rounded-lg flex items-center gap-2"
                    >
                      <Plus className="w-3 h-3" /> New Entry
                    </Link>
                  </div>
                  {posts.map((post) => (
                    <div key={post.id} className="p-6 bg-white rounded-3xl border border-mystic-navy/5 shadow-sm space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/5 border shrink-0">
                          <img src={post.thumbnail} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-sm font-bold text-mystic-navy line-clamp-1">{post.title}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className={cn(
                              "text-[8px] font-black px-2 py-0.5 rounded",
                              post.status === 'published' ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                            )}>
                              {post.status}
                            </span>
                            <span className="text-[9px] text-mystic-navy/30">{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link 
                            to={`/admin/blog/edit/${post.id}`}
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-mystic-navy/40 hover:text-royal-gold transition-colors"
                          >
                            <Settings className="w-4 h-4" />
                          </Link>
                          <button 
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 text-red-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

            <div className="p-8 border-t border-mystic-navy/5 bg-white">
              <button 
                onClick={saveAll}
                disabled={isSaving}
                className="w-full py-6 bg-royal-gold text-mystic-navy rounded-2xl text-[11px] font-black tracking-[0.4em] shadow-xl hover:shadow-royal-gold/20 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Sync All Changes
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

