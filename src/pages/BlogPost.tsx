import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogService } from '../lib/blogService';
import { BlogPost, BlogSettings } from '../types/blog';
import { ArrowLeft, Facebook, Twitter, Linkedin, Sparkles } from 'lucide-react';
import { formatImageUrl, cn } from '../lib/utils';
import { INITIAL_BLOG_POSTS } from '../lib/initialArticles';
import { EntrancesVastuCalculator } from '../components/EntrancesVastuCalculator';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const navigate = useNavigate();

  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [settings, setSettings] = useState<BlogSettings | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        let data = await blogService.getPostBySlug(slug);
        if (!data) {
          data = INITIAL_BLOG_POSTS.find(p => p.slug === slug);
        }
        if (data) {
          setPost(data);

          try {
            const sets = await blogService.getSettings();
            if (sets) {
              setSettings(sets);
            }
          } catch (setsErr) {
            console.warn('Failed to load settings non-destructively:', setsErr);
          }

          try {
            await blogService.incrementViews(slug);
          } catch (viewErr) {
            console.warn('Failed to increment views non-destructively:', viewErr);
          }

          // Fetch other posts to suggest
          try {
            const allPosts = await blogService.getPosts();
            const others = allPosts.filter(p => p.slug !== slug);
            setRelatedPosts(others.slice(0, 4));
          } catch (postsErr) {
            console.warn('Failed to load other posts:', postsErr);
            const fallbackOthers = INITIAL_BLOG_POSTS.filter(p => p.slug !== slug);
            setRelatedPosts(fallbackOthers.slice(0, 4));
          }
        } else {
          navigate('/blog');
        }
      } catch (e) {
        console.error('Failed to fetch blog post:', e);
        const fallback = INITIAL_BLOG_POSTS.find(p => p.slug === slug);
        if (fallback) {
          setPost(fallback);
          const fallbackOthers = INITIAL_BLOG_POSTS.filter(p => p.slug !== slug);
          setRelatedPosts(fallbackOthers.slice(0, 4));
        } else {
          navigate('/blog');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-bg flex items-center justify-center">
        <Sparkles className="w-8 h-8 animate-spin text-warm-accent" />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Reading Progress */}
      {settings?.readingProgressBar && (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-warm-border/20">
          <motion.div 
            className="h-full bg-warm-accent"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Post Header */}
      <header 
        className={cn(
          "border-b border-warm-border h-[200px] flex items-center relative overflow-hidden",
          post.useHeaderBgImage ? "text-white" : "bg-warm-bg-warm"
        )}
        style={post.useHeaderBgImage ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${formatImageUrl(post.headerBgImageUrl || post.thumbnail)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : undefined}
      >
        <div className="site-container max-w-[800px] w-full flex flex-col justify-center h-full px-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/blog"
              className={cn(
                "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest hover:underline",
                post.useHeaderBgImage ? "text-white/80" : "text-warm-accent"
              )}
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </Link>
            <div className={cn(
              "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em]",
              post.useHeaderBgImage ? "text-white/60" : "text-warm-accent"
            )}>
              <span>{post.category}</span>
              <span>✦</span>
              <span>{post.readTime} read</span>
            </div>
          </div>

          <h1 className={cn(
            "font-heading text-[42px] leading-[1.1] tracking-tight mt-3 mb-1 line-clamp-2",
            post.useHeaderBgImage ? "text-white" : "text-warm-text-primary"
          )}>
            {post.title}
          </h1>

          <div className="flex items-center gap-2 mt-1.5 pt-2 border-t border-warm-border/30">
            <p className="text-xs font-semibold">
              <span className={post.useHeaderBgImage ? "text-white/70" : "text-warm-text-muted"}>By</span>{" "}
              <span className={post.useHeaderBgImage ? "text-white font-bold" : "text-warm-text-primary font-bold"}>
                {post.author.name}
              </span>
              <span className={post.useHeaderBgImage ? "text-white/40 mx-2" : "text-warm-text-muted/60 mx-2"}>•</span>
              <span className={post.useHeaderBgImage ? "text-white/70" : "text-warm-text-muted"}>
                {new Date(post.publishDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-24">
        <div className="site-container">
          <div className="max-w-[720px] mx-auto relative px-6 md:px-0">
            
            {post.thumbnail && (
              <div className="mb-16 rounded-2xl overflow-hidden bg-[#FAF7F0] border border-warm-border/60 shadow-md flex justify-center">
                <img 
                  src={formatImageUrl(post.thumbnail)} 
                  alt={post.thumbnailAlt || post.title} 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* Social Share Stickies */}
            <div className="hidden xl:flex flex-col gap-4 absolute -left-24 top-0">
               <button className="w-10 h-10 rounded-full border border-warm-border flex items-center justify-center hover:bg-warm-accent hover:text-white transition-all text-warm-text-muted"><Facebook className="w-4 h-4" /></button>
               <button className="w-10 h-10 rounded-full border border-warm-border flex items-center justify-center hover:bg-warm-accent hover:text-white transition-all text-warm-text-muted"><Twitter className="w-4 h-4" /></button>
               <button className="w-10 h-10 rounded-full border border-warm-border flex items-center justify-center hover:bg-warm-accent hover:text-white transition-all text-warm-text-muted"><Linkedin className="w-4 h-4" /></button>
            </div>

            <div 
              className="prose-warm text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {post.slug === 'secret-vibration-mobile-number' && (
              <div id="check-mobile-section" className="mt-16 p-8 md:p-12 bg-warm-bg-warm border border-warm-border rounded-xl text-center relative overflow-hidden shadow-warm">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-warm-accent rounded-b-full" />
                
                <h3 className="font-heading text-3xl text-warm-text-primary mb-4">
                  Check Your Mobile Number ⚡
                </h3>
                
                <p className="text-sm text-warm-text-secondary leading-relaxed mb-8 max-w-lg mx-auto italic">
                  Is your mobile number vibration working for you, or creating delays in success? Check it with our advanced companion mobile analysis tool right now!
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Link 
                    to="/analyser/mobile"
                    id="btn-check-mobile-vibration"
                    className="w-full sm:w-auto px-8 py-4 bg-warm-accent text-white font-bold text-xs uppercase tracking-widest rounded-none shadow-md hover:bg-warm-accent-hover transition-all inline-flex items-center justify-center gap-2"
                  >
                    Check Mobile Number Now →
                  </Link>
                  <Link 
                    to="/mobile-numerology"
                    id="btn-learn-more-mobile"
                    className="w-full sm:w-auto px-8 py-4 border border-warm-border text-warm-text-primary font-bold text-xs uppercase tracking-widest rounded-none hover:bg-warm-border-light transition-all inline-flex items-center justify-center"
                  >
                    Vibration Guide Matrix
                  </Link>
                </div>
              </div>
            )}

            {post.slug === 'secrets-home-32-main-entrances-vastu' && (
              <EntrancesVastuCalculator />
            )}

            {/* Author Section */}
            <div className="mt-32 pt-16 border-t border-warm-border flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-warm-accent p-1">
                <img 
                  src={post.author.avatar || "https://lh3.googleusercontent.com/d/1uId_ZFDkU3pMdt7twbLd_brhx-GxL5Di"} 
                  alt={post.author.name} 
                  className="w-full h-full object-cover rounded-full" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold text-warm-accent uppercase tracking-widest mb-2 block">About the Author</span>
                <h4 className="font-heading text-2xl text-warm-text-primary mb-2">{post.author.name}</h4>
                <p className="text-sm text-warm-text-secondary leading-relaxed mb-4 italic">
                  {post.author.bio || "A cosmic guide dedicated to helping souls find their path to prosperity through numerical vibrations."}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-xs font-bold text-warm-accent hover:underline">Instagram</a>
                  <a 
                    href="https://www.youtube.com/@destinynumbers5076" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-bold text-warm-accent hover:underline"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Related Insights Grid */}
            {relatedPosts.length > 0 && (
              <section className="mt-32">
                <div className="flex items-center justify-between border-b border-warm-border pb-4 mb-12">
                  <h3 className="font-heading text-2xl text-warm-text-primary uppercase tracking-wider">More Wisdom Insights ✦</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      id={`related-post-card-${relatedPost.slug}`}
                      className="group flex flex-col h-full bg-warm-bg-warm border border-warm-border/60 hover:border-warm-accent rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-black/5 relative">
                        <img 
                          src={formatImageUrl(relatedPost.thumbnail)} 
                          alt={relatedPost.thumbnailAlt || relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 backdrop-blur-sm shadow-sm rounded-md text-[9px] font-bold text-warm-accent uppercase tracking-widest">
                          {relatedPost.category}
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-[10px] text-warm-text-muted font-bold tracking-wider mb-2 block uppercase">
                          {relatedPost.readTime} Read
                        </span>
                        <h4 className="font-heading text-base md:text-lg text-warm-text-primary group-hover:text-warm-accent line-clamp-2 leading-snug mb-3">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-warm-text-secondary line-clamp-2 leading-relaxed italic mb-4 flex-grow">
                          {relatedPost.excerpt}
                        </p>
                        <span className="text-xs font-bold text-warm-accent uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read Full Post →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-32 text-center">
               <Link to="/blog" className="btn btn-outline">
                 Return to Wisdom Library
               </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
