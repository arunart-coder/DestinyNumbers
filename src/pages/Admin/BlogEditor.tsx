import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { blogService } from '../../lib/blogService';
import { BlogPost, PostStatus, Visibility, Category, Author, Revision, BlogSettings } from '../../types/blog';
import { useAuth } from '../../context/AuthContext';
import { 
  ArrowLeft, Save, Sparkles, Image as ImageIcon, 
  Send, Clock, Eye, ChevronDown, ChevronRight, User,
  Settings, Search, Globe, Lock, Calendar,
  Tag, Layers, Type, History, Info,
  AlertCircle, CheckCircle2, Maximize2, Share2,
  Cpu, Layout, Smartphone
} from 'lucide-react';
import { cn } from '../../lib/utils';
import RichTextEditor from '../../components/Admin/RichTextEditor';
import { StandardInput, StandardTextArea, StandardSelect } from '../../components/StandardFormFields';

export default function BlogEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [activePanel, setActivePanel] = useState<string | null>('publish');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  
  // States for Preview, Revisions etc
  const [showPreview, setShowPreview] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [cats, auths] = await Promise.all([
        blogService.getCategories(),
        blogService.getAuthors()
      ]);
      setCategories(cats);
      setAuthors(auths);
      
      if (id && id !== 'new') {
        const posts = await blogService.getPosts();
        const existing = posts.find(p => p.id === id);
        if (existing) {
          setPost(existing);
        } else {
          await initNewPost(auths);
        }
      } else {
        await initNewPost(auths);
      }
    } catch (e) {
      console.error('Failed to load editor data:', e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const initNewPost = async (availableAuthors: Author[]) => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Uncategorized',
      tags: [],
      author: availableAuthors[0] || { name: 'Admin', role: 'Editor', avatar: '' },
      status: 'draft',
      visibility: 'public',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishDate: new Date().toISOString(),
      scheduledDate: null,
      thumbnail: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200',
      thumbnailAlt: '',
      thumbnailPosition: 'center',
      views: 0,
      readTime: '0 min read',
      wordCount: 0,
      seoTitle: '',
      metaDesc: '',
      focusKeyword: '',
      revisions: [],
      commentsEnabled: true,
      useHeaderBgImage: false,
      headerBgImageUrl: ''
    };
    setPost(newPost);
  };

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
      return;
    }
    if (user && isAdmin) {
      loadData();
    }
  }, [user, isAdmin, authLoading, navigate, loadData]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setShowPreview(true);
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') {
        e.preventDefault();
        setIsFocusMode(!isFocusMode);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [post, isFocusMode]);

  // Autosave - using async saveAutosave which might still use localStorage but we'll await it for consistency
  useEffect(() => {
    const timer = setInterval(async () => {
      if (post && !isSaving) {
        await blogService.saveAutosave(post);
        console.log('Autosaved to cache');
      }
    }, 30000);
    return () => clearInterval(timer);
  }, [post, isSaving]);

  const handleSave = async (statusOverride?: PostStatus) => {
    if (!post) return;
    setIsSaving(true);
    
    try {
      const updatedPost = { 
        ...post, 
        status: statusOverride || post.status,
        updatedAt: new Date().toISOString(),
        wordCount: post.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length,
        readTime: `${Math.ceil(post.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length / 200)} min read`
      };
      
      // Generate slug if none
      if (!updatedPost.slug) {
        updatedPost.slug = updatedPost.title.toLowerCase()
          .replace(/_/g, '-') // Convert underscores to hyphens first
          .replace(/ /g, '-') // Convert spaces to hyphens
          .replace(/[^a-z0-9-]+/g, ''); // Keep only lowercase letters, numbers, and hyphens in accordance with strict Firestore rules
      }

      await blogService.savePost(updatedPost);
      setPost(updatedPost);
      setLastSaved(new Date());
      
      // Update dashboard state if needed by reloading or event
      window.dispatchEvent(new CustomEvent('blog-updated'));
      
      if (statusOverride === 'published') {
        navigate('/admin/dashboard');
      } else {
        showToast('Draft preserved in the digital archives');
      }
    } catch (e) {
      console.error('Failed to save post:', e);
      showToast('Error: Failed to sync with the cosmic core');
    } finally {
      setIsSaving(false);
    }
  };

  const togglePanel = (panel: string) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const [toast, setToast] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  if (!post) return <div className="min-h-screen bg-[#0D1128] flex items-center justify-center font-display italic text-[#C9A84C]">Loading Cosmic Matrix...</div>;

  return (
    <div className={cn(
      "min-h-screen bg-[#0D1128] text-[#FAF7F0] flex flex-col font-sans transition-all duration-700",
      isFocusMode && "overflow-hidden"
    )}>
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: 50, opacity: 0}} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-[#C9A84C] text-[#0D1128] px-8 py-4 rounded-none font-black text-[10px] tracking-widest shadow-2xl">
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className={cn(
        "bg-[#12173D]/80 backdrop-blur-2xl border-b border-[#C9A84C]/10 px-12 py-6 flex justify-between items-center sticky top-0 z-[60] transition-all",
        isFocusMode && "opacity-0 -translate-y-full"
      )}>
        <div className="flex items-center gap-8">
          <Link to="/admin/dashboard" className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#C9A84C] text-[#C9A84C] transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center gap-3">
               <h1 className="text-sm font-display italic text-[#C9A84C] mb-0.5">{post.title || 'Untitled wisdom'}</h1>
               <span className={cn(
                 "text-[8px] tracking-widest px-2 py-0.5 rounded-none border font-black",
                 post.status === 'published' ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-white/5 text-white/40 border-white/10"
               )}>
                 {post.status}
               </span>
            </div>
            <p className="text-[10px] tracking-[0.2em] font-black text-white/20">
               {lastSaved ? `Last aligned at ${lastSaved.toLocaleTimeString()}` : 'Editing cosmic transmission...'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setShowPreview(true)}
            className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white/40 hover:text-white transition-all"
          >
            <Eye size={14} className="text-[#C9A84C]" /> Preview (Ctrl+Shift+P)
          </button>
          
          <div className="w-px h-6 bg-white/10" />
          
          <button 
            onClick={() => handleSave()}
            disabled={isSaving}
            className="px-8 py-3 rounded-none border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] tracking-widest font-black hover:bg-[#C9A84C]/10 transition-all disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Draft"}
          </button>
          
          <button 
            onClick={() => handleSave('published')}
            className="px-8 py-3 bg-[#C9A84C] text-[#0D1128] rounded-none text-[10px] tracking-widest font-black shadow-[0_15px_30px_rgba(201,168,76,0.3)] hover:brightness-110 transition-all flex items-center gap-2"
          >
            <Send size={14} /> Manifest
          </button>
        </div>
      </header>

      {/* Editor Body */}
      <main className={cn(
        "flex-grow flex transition-all duration-700",
        isFocusMode ? "bg-[#0D1128]" : "p-12 gap-12"
      )}>
        {/* Rich Text Editor Section */}
        <section className={cn(
          "flex-grow flex flex-col min-w-0 transition-all",
          isFocusMode && "w-full max-w-none p-0"
        )}>
          {!isFocusMode && (
            <div className="mb-8 space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.4em] font-black text-[#C9A84C] uppercase">Article Title</label>
                <input 
                  type="text" 
                  value={post.title}
                  onChange={e => setPost({...post, title: e.target.value})}
                  placeholder="Enter Title of Wisdom..."
                  className="w-full h-auto bg-white border border-[#E0D5C0] rounded-[6px] p-6 text-4xl font-display italic text-[#C9A84C] outline-none focus:border-[#C9A84C] transition-all placeholder:text-[#C9A84C]/10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.4em] font-black text-[#C9A84C] uppercase">Lead Synthesis / Excerpt</label>
                <textarea 
                  value={post.excerpt}
                  onChange={e => setPost({...post, excerpt: e.target.value})}
                  placeholder="Brief synthesis for the seeker..."
                  rows={2}
                  className="w-full bg-white border border-[#E0D5C0] rounded-[6px] p-6 text-xl font-light text-mystic-navy italic outline-none focus:border-[#C9A84C] transition-all placeholder:text-mystic-navy/20"
                />
              </div>
            </div>
          )}

          <RichTextEditor 
            content={post.content}
            onChange={(html) => setPost({...post, content: html})}
            onFocusMode={() => setIsFocusMode(!isFocusMode)}
            isFocusMode={isFocusMode}
          />
        </section>

        {/* Sidebar Panel */}
        {!isFocusMode && (
          <aside className="w-[380px] shrink-0 h-[calc(100vh-10rem)] sticky top-36">
            <div className="h-full bg-[#12173D] border border-[#C9A84C]/10 rounded-none overflow-y-auto custom-scrollbar shadow-2xl">
              
              {/* 1. PUBLISH PANEL */}
              <CollapsiblePanel 
                id="publish" 
                title="Publishing Logic" 
                icon={Globe}
                activePanel={activePanel} 
                onToggle={togglePanel}
              >
                <div className="space-y-6">
                  <StandardSelect
                    label="Publication Status"
                    value={post.status}
                    onChange={val => setPost({...post, status: val as PostStatus})}
                    options={[
                      { value: 'draft', label: 'Draft Mode' },
                      { value: 'published', label: 'Published' },
                      { value: 'scheduled', label: 'Scheduled' }
                    ]}
                  />
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-base font-medium text-[#C9A84C]">Visibility</label>
                    <div className="flex bg-[#0B0F2A] rounded-[6px] p-1.5 gap-2 border border-[#E0D5C0]">
                      {['Public', 'Private'].map(v => (
                        <button 
                          key={v}
                          onClick={() => setPost({...post, visibility: v as Visibility})}
                          className={cn(
                            "flex-1 py-3 rounded-[4px] text-[10px] font-black tracking-widest uppercase transition-all",
                            post.visibility === v ? "bg-[#C9A84C] text-[#0B0F2A]" : "text-white/40 hover:text-white"
                          )}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <StandardInput
                    label="Publish Date"
                    type="datetime-local"
                    value={post.publishDate?.split('.')[0]}
                    onChange={val => setPost({...post, publishDate: new Date(val).toISOString()})}
                    icon={<Calendar />}
                    inputClassName="[color-scheme:dark]"
                  />
                </div>
              </CollapsiblePanel>

              {/* 2. POST DETAILS */}
              <CollapsiblePanel 
                id="details" 
                title="Node Details" 
                icon={Tag}
                activePanel={activePanel} 
                onToggle={togglePanel}
              >
                <div className="space-y-6">
                  <StandardSelect
                    label="Category"
                    value={post.category}
                    onChange={val => setPost({...post, category: val})}
                    options={categories.map(c => ({ value: c.name, label: c.name }))}
                    icon={<Layers />}
                  />
                  <StandardInput
                    label="Tags (Comma separated)"
                    value={post.tags?.join(', ')}
                    onChange={val => setPost({...post, tags: val.split(',').map(t => t.trim())})}
                    placeholder="lucky-dates, vibrations"
                    icon={<Tag />}
                  />
                  <StandardInput
                    label="Series Node"
                    value={post.series || ''}
                    onChange={val => setPost({...post, series: val})}
                    placeholder="Cosmic Alignment Series"
                    icon={<Type />}
                  />
                </div>
              </CollapsiblePanel>

              {/* 3. FEATURED IMAGE */}
              <CollapsiblePanel 
                id="thumbnail" 
                title="Visual Projection" 
                icon={ImageIcon}
                activePanel={activePanel} 
                onToggle={togglePanel}
              >
                <div className="space-y-6">
                  <div className="aspect-video w-full rounded-[8px] bg-[#0B0F2A] overflow-hidden border border-[#E0D5C0] group relative shadow-inner">
                    <img src={post.thumbnail} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-mystic-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                       <button className="px-6 py-3 bg-[#C9A84C] text-white text-[10px] font-black rounded-none shadow-2xl uppercase tracking-widest">Change Image</button>
                    </div>
                  </div>
                  <StandardInput
                    label="Alt Text"
                    value={post.thumbnailAlt}
                    onChange={val => setPost({...post, thumbnailAlt: val})}
                    icon={<Info />}
                  />

                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={!!post.useHeaderBgImage}
                        onChange={e => setPost({...post, useHeaderBgImage: e.target.checked})}
                        className="w-4 h-4 text-[#C9A84C] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#C9A84C]"
                      />
                      <span className="text-[10px] tracking-widest font-black text-[#C9A84C] uppercase select-none group-hover:text-white transition-colors">
                        Use Header BG Image (200px Article Header)
                      </span>
                    </label>
                    
                    {post.useHeaderBgImage && (
                      <StandardInput
                        label="Header BG Image URL"
                        value={post.headerBgImageUrl || ''}
                        onChange={val => setPost({...post, headerBgImageUrl: val})}
                        placeholder="Leave empty to use main thumbnail"
                        icon={<ImageIcon />}
                      />
                    )}
                  </div>
                </div>
              </CollapsiblePanel>

              {/* 4. AUTHOR PANEL */}
              <CollapsiblePanel 
                id="author" 
                title="Author Frequency" 
                icon={User}
                activePanel={activePanel} 
                onToggle={togglePanel}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border border-[#E0D5C0] shadow-sm">
                    <img src={post.author.avatar || '/default-avatar.png'} className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A84C]/20" />
                    <div>
                      <p className="text-sm font-black text-mystic-navy">{post.author.name}</p>
                      <p className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-wider">{post.author.role}</p>
                    </div>
                  </div>
                  <StandardSelect
                    label="Selected Author"
                    value={post.author.name}
                    onChange={val => {
                      const selected = authors.find(a => a.name === val);
                      if (selected) setPost({...post, author: selected});
                    }}
                    options={authors.map(a => ({ value: a.name, label: a.name }))}
                    icon={<User />}
                  />
                </div>
              </CollapsiblePanel>

              {/* 5. SEO MASTER */}
              <CollapsiblePanel 
                id="seo" 
                title="Search Resonance" 
                icon={Search}
                activePanel={activePanel} 
                onToggle={togglePanel}
              >
                <div className="space-y-6">
                  <StandardInput
                    label="SEO Title"
                    value={post.seoTitle}
                    onChange={val => setPost({...post, seoTitle: val})}
                    icon={<Search />}
                  />
                  <StandardTextArea
                    label="Meta Description"
                    value={post.metaDesc}
                    onChange={val => setPost({...post, metaDesc: val})}
                    rows={4}
                  />
                </div>
              </CollapsiblePanel>

              {/* 6. SOCIAL EDGE */}
              <CollapsiblePanel 
                id="social" 
                title="Social Vibration" 
                icon={Share2}
                activePanel={activePanel} 
                onToggle={togglePanel}
              >
                <div className="space-y-6">
                   <div className="bg-[#08091A] border border-white/5 rounded-none p-6 space-y-4">
                      <p className="text-[10px] font-bold text-blue-400">facebook.com/destinynumbers</p>
                      <div className="aspect-[1.91/1] w-full bg-white/5 rounded-none overflow-hidden">
                        <img src={post.ogImage || post.thumbnail} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold truncate">{post.seoTitle || post.title}</p>
                        <p className="text-[10px] text-white/40 line-clamp-1">{post.metaDesc || post.excerpt}</p>
                      </div>
                   </div>
                   <button className="w-full py-3 border border-[#C9A84C]/20 rounded-none text-[9px] font-black tracking-widest text-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all">Custom social visual</button>
                </div>
              </CollapsiblePanel>

              {/* 7. REVISION VAULT */}
              <CollapsiblePanel 
                id="revisions" 
                title="Revision Matrix" 
                icon={History}
                activePanel={activePanel} 
                onToggle={togglePanel}
              >
                <div className="space-y-4 p-1">
                  {post.revisions?.length === 0 && <p className="text-[10px] italic text-white/20 text-center py-4">No shadows found in the matrix yet.</p>}
                  {post.revisions?.map((rev, i) => (
                    <div 
                      key={i} 
                      className="bg-[#08091A] p-4 rounded-none border border-white/5 group hover:border-[#C9A84C]/30 transition-all cursor-pointer"
                      onClick={() => {
                        if (window.confirm('Restore this revision? Your current unsaved changes elsewhere will be preserved if you save after, but content will be replaced.')) {
                          setPost({ ...post, content: rev.content, wordCount: rev.wordCount });
                          showToast('Revision restored to editor');
                          setActivePanel(null);
                        }
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-bold text-[#C9A84C]">Version {post.revisions!.length - i}</span>
                        <span className="text-[8px] text-white/20">{new Date(rev.date).toLocaleTimeString()}</span>
                      </div>
                      <p className="text-[10px] text-white/60 mb-3 truncate">{rev.content.replace(/<[^>]*>/g, '').slice(0, 50)}...</p>
                      <button className="w-full py-2 bg-white/5 rounded-none text-[8px] font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C9A84C] hover:text-[#0D1128]">Restore</button>
                    </div>
                  ))}
                </div>
              </CollapsiblePanel>
            </div>
          </aside>
        )}
      </main>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#0D1128] flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#12173D]">
              <div className="flex gap-4">
                 <button onClick={() => setPreviewDevice('desktop')} className={cn("p-2 rounded-none", previewDevice === 'desktop' ? "bg-[#C9A84C] text-[#0D1128]" : "text-white/40")}><Layout size={18} /></button>
                 <button onClick={() => setPreviewDevice('mobile')} className={cn("p-2 rounded-none", previewDevice === 'mobile' ? "bg-[#C9A84C] text-[#0D1128]" : "text-white/40")}><Smartphone size={18} /></button>
              </div>
              <p className="text-[10px] font-black tracking-widest">Article Preview Paradigm</p>
              <button 
                onClick={() => setShowPreview(false)}
                className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-none text-[10px] font-black tracking-widest"
              >
                Close view
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-12 bg-[#FAF7F0] text-[#0D1128]">
              <div className={cn(
                "mx-auto bg-white shadow-2xl transition-all duration-700",
                previewDevice === 'desktop' ? "max-w-4xl p-20" : "max-w-[400px] p-8"
              )}>
                <p className="text-[10px] font-black tracking-[0.3em] text-[#C9A84C] mb-4">{post.category}</p>
                <h1 className="text-5xl font-display italic mb-8">{post.title || "The Unspoken Insight"}</h1>
                <div className="flex items-center gap-4 mb-12 py-6 border-y border-black/5">
                  <img src={post.author.avatar || '/default-avatar.png'} className="w-12 h-12 rounded-none" />
                  <div>
                    <p className="text-xs font-bold">{post.author.name}</p>
                    <p className="text-[10px] text-black/40 font-black">{new Date().toLocaleDateString()} · {post.readTime}</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none prose-stone" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CollapsiblePanel({ id, title, icon: Icon, children, activePanel, onToggle }: any) {
  const isActive = activePanel === id;
  return (
    <div className="border-b border-[#C9A84C]/10 last:border-b-0">
      <button 
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between p-8 hover:bg-white/5 transition-colors group"
      >
        <div className="flex items-center gap-4">
          <div className={cn("p-2 rounded-none bg-[#C9A84C]/5 text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#0D1128] transition-all", isActive && "bg-[#C9A84C] text-[#0D1128]")}>
            <Icon size={16} />
          </div>
          <span className="text-[10px] font-black tracking-widest">{title}</span>
        </div>
        {isActive ? <ChevronDown size={14} className="text-[#C9A84C]" /> : <ChevronRight size={14} className="text-white/20" />}
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[#0D1128]/50"
          >
            <div className="p-8 pt-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
