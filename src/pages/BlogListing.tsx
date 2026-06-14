import { useCMS } from '../context/CMSContext';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { cn, formatImageUrl } from '../lib/utils';
import { BRAND_DATA } from '../lib/constants';
import { HeroHeader } from '../components/HeroHeader';

export default function BlogListing() {
  const { posts, loading } = useCMS();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Numerology', 'Astrology', 'Vastu', 'Tarot', 'Wisdom', 'Remedies'];
  
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const isPublished = post.status === 'published';
      return matchesSearch && matchesCategory && isPublished;
    });
  }, [posts, activeCategory, searchQuery]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-bg flex items-center justify-center">
        <Sparkles className="w-8 h-8 animate-spin text-warm-accent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-bg">
      <HeroHeader 
        eyebrow="Wisdom Library"
        title="Insights & Cycles"
        description="Exploring the intersections of cosmic geometry and the modern soul."
      />

      {/* Search & Header Strip */}
      <section className="bg-warm-bg-warm border-b border-warm-border py-8">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-text-muted" />
              <input 
                type="text" 
                placeholder="Search the archives..."
                className="w-full bg-white border border-warm-border rounded-full py-3 pl-12 pr-6 text-sm outline-none focus:border-warm-accent transition-all"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap",
                  activeCategory === cat 
                    ? "bg-warm-accent text-white" 
                    : "bg-white text-warm-text-secondary border border-warm-border hover:border-warm-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="site-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-20">
          
          <div className="flex flex-col gap-16">
            {/* Featured Post in Listing */}
            {featuredPost && !searchQuery && activeCategory === 'All' && (
               <article className="group">
                <Link to={`/blog/${featuredPost.slug}`} className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10">
                  <div className="self-start aspect-[16/9] rounded-xl overflow-hidden bg-warm-bg-warm">
                    <img 
                      src={formatImageUrl(featuredPost.thumbnail)} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt={featuredPost.title} 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-2">
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#C9A84C] mb-5 leading-tight hover:brightness-110 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-sm text-warm-text-secondary leading-relaxed mb-6 line-clamp-3 italic">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-warm-text-muted">
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>·</span>
                      <span className="text-warm-accent uppercase tracking-widest">{featuredPost.category}</span>
                    </div>
                  </div>
                </Link>
                <div className="h-px bg-warm-border-light w-full mt-16"></div>
              </article>
            )}

            {/* Grid for other posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {filteredPosts
                .filter(p => searchQuery || activeCategory !== 'All' || p.id !== (featuredPost?.id || ''))
                .map((post) => (
                <article key={post.id} className="group flex flex-col">
                  <Link to={`/blog/${post.slug}`} className="block aspect-[4/3] rounded-lg overflow-hidden bg-warm-bg-warm mb-6">
                    <img 
                      src={formatImageUrl(post.thumbnail)} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-warm-accent uppercase tracking-widest mb-3">
                      <span>{post.category}</span>
                      <span className="text-warm-border">·</span>
                      <span className="text-warm-text-muted">{new Date(post.publishDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl text-[#C9A84C] leading-normal mb-3 transition-colors">
                      <Link to={`/blog/${post.slug}`} className="hover:brightness-110">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-warm-text-secondary leading-relaxed line-clamp-3 mb-5">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.slug}`} className="text-xs font-black uppercase tracking-widest text-[#C9A84C] hover:underline inline-flex items-center gap-1">
                      READ MORE
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-32 bg-warm-bg-warm rounded-xl border border-dashed border-warm-border">
                <Sparkles className="w-12 h-12 text-warm-accent/20 mx-auto mb-6" />
                <p className="text-warm-text-muted italic mb-8">No wisdom resonance found for this frequency...</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="btn btn-outline btn-sm"
                >
                  Clear searches
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-12 sticky top-[112px] self-start">
             {/* Newsletter Widget */}
             <div className="bg-warm-accent p-8 rounded-lg text-white">
              <h3 className="font-heading text-lg font-bold text-white border-b border-white/20 pb-3 mb-4">
                Weekly Wisdom
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                One insight every Sunday. No noise. Just clarity.
              </p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-sm outline-none focus:border-white/40 placeholder:text-white/50"
                />
                <button className="bg-white text-warm-accent font-bold py-2.5 rounded-md hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* About Dr. Arun Widget */}
            <div className="bg-white border border-warm-border p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 rounded-full border-2 border-warm-accent overflow-hidden flex-shrink-0">
                  <img src={BRAND_DATA.profilePhoto} className="w-full h-full object-cover" alt="Dr. Arun" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-sm font-bold text-warm-text-primary mb-1">Dr. Arun Poovaiah</p>
                  <p className="text-xs text-warm-text-secondary leading-relaxed mb-3 italic">
                    Scientific Numerologist & Life Path Specialist.
                  </p>
                  <Link to="/about" className="text-xs font-bold text-warm-accent hover:underline">
                    Full Bio →
                  </Link>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
