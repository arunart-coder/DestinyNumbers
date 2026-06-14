import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Image as ImageIcon, Settings, 
  Plus, Edit2, Trash2, Eye, 
  BarChart3, MessageSquare, Tag,
  LogOut, ArrowRight, Search, ChevronDown,
  Download, Upload, Copy, Check, Filter,
  SortAsc, SortDesc, MoreHorizontal, Maximize2,
  Calendar, User, Globe
} from 'lucide-react';
import { blogService } from '../../lib/blogService';
import { BlogPost, Category, Comment, MediaItem, BlogSettings } from '../../types/blog';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../lib/utils';
import { StandardInput, StandardTextArea, StandardSelect } from '../../components/StandardFormFields';

export default function AdminDashboard() {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [settings, setSettings] = useState<BlogSettings | null>(null);
  
  const [activeTab, setActiveTab] = useState<'dashboard' | 'posts' | 'media' | 'categories' | 'comments' | 'settings'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'published' | 'draft'>('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortKey, setSortKey] = useState<'date' | 'title' | 'views'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
      return;
    }
    if (user && isAdmin) {
      loadData();
    }
  }, [user, isAdmin, authLoading, navigate]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [p, cat, m, c, s] = await Promise.all([
        blogService.getPosts(true),
        blogService.getCategories(),
        blogService.getMedia(),
        blogService.getComments(),
        blogService.getSettings()
      ]);
      setPosts(p);
      setCategories(cat);
      setMedia(m);
      setComments(c);
      setSettings(s);
    } catch (e) {
      console.error('Failed to load dashboard data:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (searchQuery) {
      result = result.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (statusFilter !== 'All') {
      result = result.filter(p => p.status === statusFilter);
    }
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    result = [...result].sort((a, b) => {
      if (sortKey === 'date') {
        const dateA = new Date(a.publishDate || a.createdAt).getTime();
        const dateB = new Date(b.publishDate || b.createdAt).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
      if (sortKey === 'title') {
        return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      }
      if (sortKey === 'views') {
        return sortOrder === 'asc' ? a.views - b.views : b.views - a.views;
      }
      return 0;
    });
    
    return result;
  }, [posts, searchQuery, statusFilter, categoryFilter, sortKey, sortOrder]);

  const stats = useMemo(() => {
    return {
      total: posts.length,
      published: posts.filter(p => p.status === 'published').length,
      drafts: posts.filter(p => p.status === 'draft').length,
      pendingComments: comments.filter(c => c.status === 'pending').length
    };
  }, [posts, comments]);

  const handleDeletePost = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this article? This action cannot be undone.')) {
      await blogService.deletePost(id);
      loadData();
      showToast('Article deleted successfully', 'success');
    }
  };

  const handleBulkAction = async (action: string) => {
    if (selectedPosts.length === 0) return;
    
    setLoading(true);
    if (action === 'delete') {
      if (window.confirm(`Delete ${selectedPosts.length} selected articles?`)) {
        await Promise.all(selectedPosts.map(id => blogService.deletePost(id)));
        showToast('Bulk delete completed', 'success');
      }
    } else if (action === 'publish') {
      await Promise.all(selectedPosts.map(async id => {
        const post = posts.find(p => p.id === id);
        if (post) await blogService.savePost({ ...post, status: 'published' });
      }));
      showToast('Bulk publish completed', 'success');
    } else if (action === 'draft') {
      await Promise.all(selectedPosts.map(async id => {
        const post = posts.find(p => p.id === id);
        if (post) await blogService.savePost({ ...post, status: 'draft' });
      }));
      showToast('Bulk move to draft completed', 'success');
    }
    
    setSelectedPosts([]);
    await loadData();
  };

  const handleExport = () => {
    const data = {
      exported: new Date().toISOString(),
      total: posts.length,
      articles: posts
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `destiny-numbers-blog-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Blog data exported successfully', 'info');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.articles && Array.isArray(data.articles)) {
          // In a real app we'd handle conflicts, here we'll just merge
          data.articles.forEach((p: any) => blogService.savePost(p));
          loadData();
          showToast(`Successfully imported ${data.articles.length} articles`, 'success');
        }
      } catch (err) {
        showToast('Invalid JSON file', 'error');
      }
    };
    reader.readAsText(file);
  };

  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' | 'info' | 'warning' } | null>(null);
  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0D1128] text-[#FAF7F0] flex font-sans overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className={cn(
              "fixed bottom-8 right-8 z-[100] px-6 py-4 rounded-none shadow-2xl border-l-[6px] min-w-[300px] flex items-center justify-between",
              toast.type === 'success' ? "bg-[#1A1A2E] border-green-500" :
              toast.type === 'error' ? "bg-[#1A1A2E] border-red-500" :
              toast.type === 'warning' ? "bg-[#1A1A2E] border-gold" : "bg-[#1A1A2E] border-blue-500"
            )}
          >
            <span className="text-sm font-semibold">{toast.message}</span>
            <button onClick={() => setToast(null)} className="text-white/40 hover:text-white ml-4">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className="w-80 bg-[#12173D] border-r border-[#C9A84C]/15 flex flex-col fixed h-screen z-50">
        <div className="p-10 border-b border-[#C9A84C]/10">
           <h2 className="text-2xl font-display text-[#C9A84C] tracking-widest italic">✦ Destiny Admin</h2>
        </div>
        
        <nav className="flex-grow p-6 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'posts', label: 'All Articles', icon: FileText },
            { id: 'media', label: 'Media Library', icon: ImageIcon },
            { id: 'categories', label: 'Categories', icon: Tag },
            { id: 'comments', label: 'Comments', icon: MessageSquare, badge: stats.pendingComments },
            { id: 'settings', label: 'Blog Settings', icon: Settings },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={cn(
                "w-full flex items-center justify-between px-6 py-4 rounded-none text-xs tracking-widest font-bold transition-all group",
                activeTab === item.id 
                  ? "bg-[#C9A84C] text-[#0D1128] shadow-[0_10px_20px_rgba(201,168,76,0.1)]" 
                  : "text-[#FAF7F0]/40 hover:text-[#FAF7F0] hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon className="w-4 h-4" /> {item.label}
              </div>
              {item.badge !== undefined && item.badge > 0 && (
                <span className={cn(
                  "px-2 py-0.5 rounded-none text-[10px] font-black",
                  activeTab === item.id ? "bg-[#0D1128] text-[#C9A84C]" : "bg-red-500 text-white"
                )}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-[#C9A84C]/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-none text-xs tracking-widest font-black text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-4 h-4" /> Shutdown Access
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-80 flex-grow h-screen overflow-y-auto bg-[#0D1128]">
        {/* Render Tabs */}
        <div className="p-12 pb-24">
          <header className="flex justify-between items-end mb-16">
            <div>
              <h1 className="text-4xl font-display font-medium text-[#C9A84C] italic mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h1>
              <p className="text-white/40 text-[10px] tracking-[0.2em] font-black">Manage your cosmic digital frequency</p>
            </div>
            
            {activeTab === 'posts' && (
              <div className="flex gap-4">
                <label className="px-6 py-3 border border-[#C9A84C]/30 text-[#C9A84C] rounded-none text-[10px] tracking-widest font-black flex items-center gap-3 hover:bg-[#C9A84C]/10 transition-all cursor-pointer">
                  <Upload className="w-4 h-4" /> Import JSON
                  <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                </label>
                <button 
                  onClick={handleExport}
                  className="px-6 py-3 border border-[#C9A84C]/30 text-[#C9A84C] rounded-none text-[10px] tracking-widest font-black flex items-center gap-3 hover:bg-[#C9A84C]/10 transition-all"
                >
                  <Download className="w-4 h-4" /> Export All
                </button>
                <Link 
                  to="/admin/blog/new"
                  className="px-8 py-3 bg-[#C9A84C] text-[#0D1128] rounded-none text-[10px] tracking-[0.2em] font-black flex items-center gap-3 hover:brightness-110 transition-all shadow-[0_15px_30px_rgba(201,168,76,0.2)]"
                >
                  <Plus className="w-4 h-4" /> New Article
                </Link>
              </div>
            )}
          </header>

          {activeTab === 'dashboard' && <DashboardTab stats={stats} posts={posts} navigate={navigate} />}
          {activeTab === 'posts' && (
            <PostsTab 
              posts={filteredPosts} 
              selected={selectedPosts}
              setSelected={setSelectedPosts}
              filters={{ status: statusFilter, setStatus: setStatusFilter, category: categoryFilter, setCategory: setCategoryFilter, query: searchQuery, setQuery: setSearchQuery }}
              sort={{ key: sortKey, setKey: setSortKey, order: sortOrder, setOrder: setSortOrder }}
              onBulkAction={handleBulkAction}
              onDelete={handleDeletePost}
              categories={categories}
            />
          )}
          {activeTab === 'media' && <MediaTab media={media} loadData={loadData} showToast={showToast} />}
          {activeTab === 'categories' && <CategoriesTab categories={categories} loadData={loadData} showToast={showToast} />}
          {activeTab === 'comments' && <CommentsTab comments={comments} loadData={loadData} showToast={showToast} />}
          {activeTab === 'settings' && settings && <SettingsTab settings={settings} onSave={async (s) => { await blogService.saveSettings(s); await loadData(); showToast('Settings saved successfully', 'success'); }} />}
        </div>
      </main>
    </div>
  );
}

// Sub-components for Tabs

function DashboardTab({ stats, posts, navigate }: { stats: any, posts: BlogPost[], navigate: any }) {
  const recentPosts = [...posts].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5);

  return (
    <div className="space-y-16">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Total Posts', value: stats.total, color: 'border-blue-500' },
          { label: 'Published', value: stats.published, color: 'border-green-500' },
          { label: 'Drafts', value: stats.drafts, color: 'border-white/20' }
        ].map((stat, i) => (
          <div key={i} className={cn("bg-[#12173D] p-10 rounded-none border border-[#C9A84C]/10 border-t-4", stat.color)}>
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 mb-4">{stat.label}</p>
            <p className="text-6xl font-display font-medium text-[#C9A84C]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Posts Table */}
      <div>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-display italic text-[#C9A84C]">Recently Updated Insights</h3>
          <button onClick={() => {/* Set active tab to posts */}} className="text-[#C9A84C] text-[10px] font-black tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
            See all posts <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="bg-[#12173D] rounded-none border border-[#C9A84C]/10 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0B0F2A] border-b border-[#C9A84C]/10">
                <th className="px-8 py-5 text-[10px] tracking-widest text-white/40 font-black">Article</th>
                <th className="px-8 py-5 text-[10px] tracking-widest text-white/40 font-black">Category</th>
                <th className="px-8 py-5 text-[10px] tracking-widest text-white/40 font-black">Status</th>
                <th className="px-8 py-5 text-[10px] tracking-widest text-white/40 font-black text-right">Views</th>
              </tr>
            </thead>
            <tbody>
              {recentPosts.map((post) => (
                <tr key={post.id} className="border-b border-[#C9A84C]/5 hover:bg-white/5 transition-colors cursor-pointer" onClick={() => navigate(`/admin/blog/edit/${post.id}`)}>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-5">
                      <img src={post.thumbnail} className="w-12 h-12 rounded-none object-cover bg-white/5" alt="" />
                      <div>
                        <p className="font-semibold text-sm mb-1">{post.title}</p>
                        <p className="text-[10px] text-white/30 tracking-widest font-bold">Modified {new Date(post.updatedAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-none text-[9px] font-black tracking-widest text-[#C9A84C]">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-none text-[9px] font-black tracking-widest",
                      post.status === 'published' ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-white/5 text-white/40 border border-white/10"
                    )}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right font-display text-lg text-[#C9A84C]">{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PostsTab({ posts, selected, setSelected, filters, sort, onBulkAction, onDelete, categories }: any) {
  return (
    <div className="space-y-8">
      {/* Filters & Controls */}
      <div className="bg-white p-8 rounded-[12px] border border-[#E0D5C0] flex flex-wrap gap-6 items-end shadow-sm">
        <StandardInput
          label="Search Articles"
          placeholder="Filter by title..."
          value={filters.query}
          onChange={filters.setQuery}
          icon={<Search />}
          className="flex-grow min-w-[300px]"
        />
        
        <div className="flex gap-4 items-end flex-wrap">
          <StandardSelect
            label="Status"
            value={filters.status} 
            onChange={filters.setStatus}
            options={[
              { value: 'All', label: 'All Status' },
              { value: 'published', label: 'Published' },
              { value: 'draft', label: 'Draft Mode' }
            ]}
            className="w-48"
          />
          
          <StandardSelect
            label="Category"
            value={filters.category} 
            onChange={filters.setCategory}
            options={[
              { value: 'All', label: 'All Categories' },
              ...categories.map((c: any) => ({ value: c.name, label: c.name }))
            ]}
            className="w-64"
          />

          <button 
            onClick={() => sort.setOrder(sort.order === 'asc' ? 'desc' : 'asc')}
            className="h-[52px] px-6 bg-white border border-[#E0D5C0] rounded-[6px] text-mystic-navy hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all flex items-center gap-2"
          >
            {sort.order === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
            <span className="text-[10px] font-black tracking-widest uppercase">Sort</span>
          </button>
        </div>
      </div>

      {/* Bulk Actions Header */}
      {selected.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-6 bg-[#C9A84C]/10 border border-[#C9A84C]/30 p-4 rounded-none"
        >
          <span className="text-[10px] font-black ml-4">{selected.length} items selected</span>
          <div className="w-px h-6 bg-[#C9A84C]/20" />
          <div className="flex gap-3">
            <button onClick={() => onBulkAction('publish')} className="px-4 py-2 bg-[#C9A84C] text-[#0D1128] text-[9px] font-black rounded-none shadow-lg">Publish</button>
            <button onClick={() => onBulkAction('draft')} className="px-4 py-2 bg-white/10 text-white text-[9px] font-black rounded-none">Move to draft</button>
            <button onClick={() => onBulkAction('delete')} className="px-4 py-2 bg-red-500 text-white text-[9px] font-black rounded-none">Delete</button>
          </div>
        </motion.div>
      )}

      {/* Posts Table */}
      <div className="bg-[#12173D] rounded-none border border-[#C9A84C]/10 overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0B0F2A] border-b border-[#C9A84C]/10">
              <th className="p-6 w-12 text-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded-none border-[#C9A84C]/50" 
                  checked={selected.length === posts.length && posts.length > 0}
                  onChange={(e) => setSelected(e.target.checked ? posts.map((p: any) => p.id) : [])}
                />
              </th>
              <th className="p-6 text-[10px] tracking-widest text-white/40 font-black">Thumbnail</th>
              <th className="p-6 text-[10px] tracking-widest text-white/40 font-black">Post Details</th>
              <th className="p-6 text-[10px] tracking-widest text-white/40 font-black">Status</th>
              <th className="p-6 text-[10px] tracking-widest text-white/40 font-black text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: BlogPost) => (
              <tr key={post.id} className={cn("border-b border-[#C9A84C]/5 hover:bg-white/5 transition-colors", selected.includes(post.id) && "bg-[#C9A84C]/5")}>
                <td className="p-6 text-center">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded-none border-[#C9A84C]/50"
                    checked={selected.includes(post.id)}
                    onChange={(e) => {
                      if (e.target.checked) setSelected([...selected, post.id]);
                      else setSelected(selected.filter((id: string) => id !== post.id));
                    }}
                  />
                </td>
                <td className="p-6">
                  <img src={post.thumbnail} className="w-20 aspect-video rounded-none object-cover bg-black/20 border border-white/5 shadow-2xl" alt="" />
                </td>
                <td className="p-6">
                  <p className="font-semibold text-[15px] mb-2">{post.title}</p>
                  <div className="flex items-center gap-6 text-[9px] tracking-[0.2em] text-white/30 font-black">
                    <span className="flex items-center gap-2"><Tag className="w-3 h-3 text-[#C9A84C]" /> {post.category}</span>
                    <span className="flex items-center gap-2"><Eye className="w-3 h-3 text-[#C9A84C]" /> {post.views} views</span>
                    <span className="flex items-center gap-2 font-display italic group-hover:text-[#C9A84C]">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                </td>
                <td className="p-6">
                  <span className={cn(
                    "px-4 py-1.5 rounded-none text-[9px] font-black tracking-widest",
                    post.status === 'published' ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-white/5 text-white/40 border border-white/10"
                  )}>
                    {post.status}
                  </span>
                </td>
                <td className="p-6">
                  <div className="flex gap-2 justify-end">
                    <Link to={`/admin/blog/edit/${post.id}`} className="p-3 bg-white/5 rounded-none border border-white/10 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"><Edit2 className="w-4 h-4" /></Link>
                    <button className="p-3 bg-white/5 rounded-none border border-white/10 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"><Copy className="w-4 h-4" /></button>
                    <button onClick={() => onDelete(post.id)} className="p-3 bg-white/5 rounded-none border border-white/10 hover:bg-red-500/10 hover:text-red-500 transition-all"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {posts.length === 0 && (
          <div className="p-24 text-center">
            <p className="text-white/20 font-display italic text-xl">No articles found in this grid...</p>
          </div>
        )}
      </div>
    </div>
  );
}

function MediaTab({ media, loadData, showToast }: any) {
  const [dragActive, setDragActive] = useState(false);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    
    // Compress and save
    const compressed = await compressImage(file, 1200, 0.8);
    await blogService.saveMedia({
      id: Date.now().toString(),
      url: compressed,
      filename: file.name,
      date: new Date().toISOString(),
    });
    await loadData();
    showToast('Media uploaded and compressed', 'success');
  };

  const compressImage = (file: File, maxWidth: number, quality: number): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          if (width > maxWidth) {
            height = (maxWidth / width) * height;
            width = maxWidth;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="space-y-12">
      <div 
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
        className={cn(
          "h-64 border-2 border-dashed rounded-none flex flex-col items-center justify-center transition-all group cursor-pointer overflow-hidden relative",
          dragActive ? "border-[#C9A84C] bg-[#C9A84C]/10" : "border-[#C9A84C]/20 bg-white/5 hover:border-[#C9A84C]/40"
        )}
      >
        <input 
          type="file" 
          accept="image/*" 
          className="absolute inset-0 opacity-0 cursor-pointer" 
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
        <Plus className="w-12 h-12 text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform" />
        <p className="text-sm font-bold tracking-widest text-[#C9A84C]">Drag or Drop Wisdom Visuals</p>
        <p className="text-[10px] text-white/30 tracking-widest mt-2">Max width 2000px · JPEG optimized</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {media.map((item: any) => (
          <div key={item.id} className="group relative aspect-square rounded-none overflow-hidden border border-white/5 shadow-2xl">
            <img src={item.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
            <div className="absolute inset-0 bg-[#0D1128]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
              <p className="text-[9px] font-black text-center truncate w-full">{item.filename}</p>
              <div className="flex gap-2">
                  <button 
                    onClick={() => { navigator.clipboard.writeText(item.url); showToast('URL copied to clipboard', 'info'); }}
                    className="p-2 bg-white/10 rounded-none hover:text-[#C9A84C] transition-all"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={async () => { if (window.confirm('Delete this media?')) { await blogService.deleteMedia(item.id); await loadData(); } }}
                    className="p-2 bg-white/10 rounded-none hover:text-red-500 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoriesTab({ categories, loadData, showToast }: any) {
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState('#C9A84C');

  const handleAdd = async () => {
    if (!newName) return;
    await blogService.saveCategory({ name: newName, color: newColor, postCount: 0 });
    setNewName('');
    await loadData();
    showToast('Category added', 'success');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16">
      <div className="bg-white p-10 rounded-[12px] border border-[#E0D5C0] h-fit space-y-8 shadow-sm">
        <h3 className="text-xl font-display font-black text-mystic-navy uppercase tracking-widest">New Category Node</h3>
        <div className="flex flex-col gap-5">
          <StandardInput
            label="Node Name"
            value={newName}
            onChange={setNewName}
            placeholder="Enter category name"
            icon={<Tag />}
          />
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-[#C9A84C]">Node Color</label>
            <div className="flex gap-4">
              <input 
                type="color" 
                value={newColor}
                onChange={e => setNewColor(e.target.value)}
                className="w-[52px] h-[52px] bg-white border border-[#E0D5C0] rounded-[6px] p-1 cursor-pointer"
              />
              <input 
                type="text" 
                value={newColor}
                onChange={e => setNewColor(e.target.value)}
                className="flex-grow h-[52px] bg-white border border-[#E0D5C0] rounded-[6px] px-4 font-mono text-base text-mystic-navy outline-none focus:border-[#C9A84C] transition-all"
              />
            </div>
          </div>
          <button 
            onClick={handleAdd}
            className="w-full h-[52px] bg-[#C9A84C] text-white rounded-[6px] text-[11px] font-black tracking-widest uppercase hover:shadow-xl transition-all mt-2"
          >
            Synthesize Node
          </button>
        </div>
      </div>

      <div className="bg-[#12173D] rounded-none border border-[#C9A84C]/10 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0B0F2A] border-b border-[#C9A84C]/10">
              <th className="p-8 text-[10px] tracking-widest text-white/40 font-black">Category Node</th>
              <th className="p-8 text-[10px] tracking-widest text-white/40 font-black">Assigned Posts</th>
              <th className="p-8 text-[10px] tracking-widest text-white/40 font-black text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat: any) => (
              <tr key={cat.name} className="border-b border-[#C9A84C]/5">
                <td className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-none" style={{ backgroundColor: cat.color }} />
                    <span className="font-semibold">{cat.name}</span>
                  </div>
                </td>
                <td className="p-8 font-display text-xl text-[#C9A84C]">{cat.postCount}</td>
                <td className="p-8 text-right">
                  <button 
                    onClick={async () => { if(window.confirm(`Delete ${cat.name}? Posts will be set to Uncategorized.`)) { await blogService.deleteCategory(cat.name); await loadData(); } }}
                    className="p-3 bg-red-500/5 text-red-400 hover:bg-red-500 hover:text-white rounded-none transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CommentsTab({ comments, loadData, showToast }: any) {
  const handleStatusChange = async (id: string, status: string) => {
    const comm = comments.find((c: any) => c.id === id);
    if (comm) {
      await blogService.saveComment({ ...comm, status });
      await loadData();
      showToast(`Comment ${status}`, 'success');
    }
  };

  return (
    <div className="bg-[#12173D] rounded-none border border-[#C9A84C]/10 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#0B0F2A] border-b border-[#C9A84C]/10">
            <th className="p-8 text-[10px] tracking-widest text-white/40 font-black">Author</th>
            <th className="p-8 text-[10px] tracking-widest text-white/40 font-black">Wisdom Comment</th>
            <th className="p-8 text-[10px] tracking-widest text-white/40 font-black">Article</th>
            <th className="p-8 text-[10px] tracking-widest text-white/40 font-black text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comm: any) => (
            <tr key={comm.id} className="border-b border-[#C9A84C]/5">
              <td className="p-8">
                <p className="font-bold mb-1">{comm.name}</p>
                <p className="text-[10px] text-white/30">{comm.email}</p>
              </td>
              <td className="p-8">
                <div className="max-w-md">
                  <p className="text-white/70 italic text-sm line-clamp-2">"{comm.content}"</p>
                  <p className="text-[10px] font-black tracking-widest text-[#C9A84C] mt-3">Received {new Date(comm.date).toLocaleDateString()}</p>
                </div>
              </td>
              <td className="p-8 font-display text-[#C9A84C] italic text-xs">{comm.articleSlug}</td>
              <td className="p-8">
                <div className="flex gap-2 justify-end">
                  {comm.status === 'pending' && (
                    <button onClick={() => handleStatusChange(comm.id, 'approved')} className="p-3 bg-green-500/10 text-green-500 rounded-none hover:bg-green-500 hover:text-white transition-all"><Check className="w-4 h-4" /></button>
                  )}
                  <button onClick={async () => { if(window.confirm('Delete this comment?')) { await blogService.deleteComment(comm.id); await loadData(); } }} className="p-3 bg-red-500/5 text-red-400 rounded-none hover:bg-red-500 hover:text-white transition-all"><Trash2 className="w-4 h-4" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {comments.length === 0 && (
         <div className="p-24 text-center">
            <p className="text-white/20 font-display italic text-xl">No cosmic echoes found yet...</p>
         </div>
      )}
    </div>
  );
}

function SettingsTab({ settings, onSave }: { settings: BlogSettings, onSave: (s: BlogSettings) => void }) {
  const [localSettings, setLocalSettings] = useState(settings);

  return (
    <div className="max-w-3xl space-y-12">
      <div className="bg-white p-12 rounded-[12px] border border-[#E0D5C0] shadow-2xl space-y-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C9A84C]"></div>
        <section className="space-y-8">
          <h3 className="text-2xl font-display font-black text-mystic-navy uppercase tracking-widest">Global Portal Identity</h3>
          <div className="flex flex-col gap-6">
            <StandardInput
              label="Portal Title"
              value={localSettings.blogTitle}
              onChange={val => setLocalSettings({...localSettings, blogTitle: val})}
              placeholder="Enter blog title"
              icon={<Globe />}
            />
            <StandardTextArea
              label="Meta Description"
              value={localSettings.blogDescription}
              onChange={val => setLocalSettings({...localSettings, blogDescription: val})}
              placeholder="Portal summary for the cosmic search"
              rows={4}
            />
          </div>
        </section>

        <section className="space-y-8">
          <h3 className="text-2xl font-display font-black text-mystic-navy uppercase tracking-widest">Reading Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'featuredPostEnabled', label: 'Featured Article Projection' },
              { id: 'commentsEnabled', label: 'Wisdom Comments Protocol' },
              { id: 'relatedPostsEnabled', label: 'Relational Node Mapping' },
              { id: 'readingProgressBar', label: 'Cognitive Progress Tracker' },
            ].map(toggle => (
              <div key={toggle.id} className="flex items-center justify-between p-6 bg-warm-off-white rounded-[8px] border border-[#E0D5C0]">
                <span className="text-[11px] font-black tracking-widest text-mystic-navy/60 uppercase">{toggle.label}</span>
                <button 
                  onClick={() => setLocalSettings({...localSettings, [toggle.id]: !localSettings[toggle.id as keyof BlogSettings]})}
                  className={cn(
                    "w-12 h-6 rounded-full relative transition-colors duration-300",
                    localSettings[toggle.id as keyof BlogSettings] ? "bg-[#C9A84C]" : "bg-mystic-navy/10"
                  )}
                >
                  <motion.div 
                    animate={{ x: localSettings[toggle.id as keyof BlogSettings] ? 24 : 4 }}
                    className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow-md"
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        <button 
          onClick={() => onSave(localSettings)}
          className="w-full h-[60px] bg-[#C9A84C] text-white rounded-[6px] text-[12px] font-black tracking-[0.3em] uppercase hover:shadow-2xl transition-all mt-10"
        >
          Synchronize Realm Settings
        </button>
      </div>
    </div>
  );
}
