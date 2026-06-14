import { BlogPost, HeroBanner, Category, MediaItem, Comment, BlogSettings, Revision, Author } from '../types/blog';
import { INITIAL_BLOG_POSTS } from './initialArticles';
import { db } from './firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  deleteDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  limit 
} from 'firebase/firestore';
import { handleFirestoreError, OperationType } from './firestoreUtils';

const POSTS_COLLECTION = 'posts';
const CATEGORIES_COLLECTION = 'categories';
const MEDIA_COLLECTION = 'media';
const COMMENTS_COLLECTION = 'comments';
const SETTINGS_DOC = 'settings/blog';

const DEFAULT_SETTINGS: BlogSettings = {
  blogTitle: "Destiny Numbers — Insights",
  blogDescription: "Expert insights into the mystical world of Numerology, Astrology, and Vastu.",
  postsPerPage: 6,
  featuredPostEnabled: true,
  commentsEnabled: true,
  relatedPostsEnabled: true,
  readingProgressBar: true,
  socialSharing: {
    whatsapp: true,
    twitter: true,
    linkedin: true,
    copyLink: true
  }
};

const DEFAULT_CATEGORIES: Category[] = [
  { name: 'Numerology', color: '#C9A84C', postCount: 0 },
  { name: 'Astrology', color: '#4C63C9', postCount: 0 },
  { name: 'Vastu', color: '#4CC9A8', postCount: 0 },
  { name: 'Tarot', color: '#C94C63', postCount: 0 },
  { name: 'Remedies', color: '#9B4CC9', postCount: 0 },
  { name: 'Lifestyle', color: '#C99B4C', postCount: 0 }
];

// Helper for UUID
const generateUUID = () => Date.now() + Math.random().toString(36).substr(2, 9);

export const blogService = {
  getPosts: async (forceAll = false): Promise<BlogPost[]> => {
    try {
      let q;
      if (forceAll) {
        q = query(collection(db, POSTS_COLLECTION));
      } else {
        // Query using equality constraints only to prevent composite index requirement
        q = query(
          collection(db, POSTS_COLLECTION), 
          where('status', '==', 'published'),
          where('visibility', '==', 'public')
        );
      }
      const snapshot = await getDocs(q);
      let posts = snapshot.docs.map(doc => doc.data() as BlogPost);
      
      // Merge in initial static posts that do not already exist in Firestore by id/slug
      const dbPostIds = new Set(posts.map(p => p.id));
      const dbPostSlugs = new Set(posts.map(p => p.slug));

      const mergedPosts = [...posts];
      for (const initialPost of INITIAL_BLOG_POSTS) {
        if (!dbPostIds.has(initialPost.id) && !dbPostSlugs.has(initialPost.slug)) {
          if (forceAll || (initialPost.status === 'published' && initialPost.visibility === 'public')) {
            mergedPosts.push(initialPost);
          }
        }
      }

      // Sort in-memory by publication/created date
      mergedPosts.sort((a, b) => {
        const dateA = new Date(a.createdAt || a.publishDate || 0).getTime();
        const dateB = new Date(b.createdAt || b.publishDate || 0).getTime();
        return dateB - dateA;
      });
      
      return mergedPosts;
    } catch (e) {
      console.warn("Firestore collection list failed or pending. Falling back to local/initial data:", e);
      // Fail gracefully: NEVER crash the site/context loader for normal visits
      const localData = localStorage.getItem('dn_blog_posts');
      if (localData) {
        try {
          return JSON.parse(localData);
        } catch {
          return INITIAL_BLOG_POSTS;
        }
      }
      return INITIAL_BLOG_POSTS;
    }
  },

  getPostBySlug: async (slug: string): Promise<BlogPost | undefined> => {
    try {
      const q = query(collection(db, POSTS_COLLECTION), where('slug', '==', slug), limit(1));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        return INITIAL_BLOG_POSTS.find(p => p.slug === slug);
      }
      return snapshot.docs[0].data() as BlogPost;
    } catch (e) {
      console.warn("Firestore getPostBySlug failed, falling back to initial data:", e);
      return INITIAL_BLOG_POSTS.find(p => p.slug === slug);
    }
  },

  getPostById: async (id: string): Promise<BlogPost | undefined> => {
    try {
      const docRef = doc(db, POSTS_COLLECTION, id);
      const snapshot = await getDoc(docRef);
      if (!snapshot.exists()) {
        return INITIAL_BLOG_POSTS.find(p => p.id === id);
      }
      return snapshot.data() as BlogPost;
    } catch (e) {
      console.warn("Firestore getPostById failed, falling back to initial data:", e);
      return INITIAL_BLOG_POSTS.find(p => p.id === id);
    }
  },

  savePost: async (post: BlogPost): Promise<void> => {
    try {
      const id = post.id || generateUUID();
      const docRef = doc(db, POSTS_COLLECTION, id);
      const snapshot = await getDoc(docRef);
      
      const updatedPost = { ...post, id, updatedAt: new Date().toISOString() };
      
      if (snapshot.exists()) {
        const oldPost = snapshot.data() as BlogPost;
        const revision: Revision = {
          date: oldPost.updatedAt,
          content: oldPost.content,
          wordCount: oldPost.wordCount
        };
        updatedPost.revisions = [revision, ...(oldPost.revisions || [])].slice(0, 5);
      } else {
        updatedPost.createdAt = post.createdAt || new Date().toISOString();
        updatedPost.revisions = [];
      }
      
      await setDoc(docRef, updatedPost);
      await blogService.updateCategoryCounts();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('cms-update'));
      }
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, POSTS_COLLECTION);
    }
  },

  deletePost: async (id: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, POSTS_COLLECTION, id));
      await blogService.updateCategoryCounts();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('cms-update'));
      }
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, `${POSTS_COLLECTION}/${id}`);
    }
  },

  incrementViews: async (slug: string): Promise<void> => {
    try {
      const q = query(collection(db, POSTS_COLLECTION), where('slug', '==', slug), limit(1));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const postDoc = snapshot.docs[0];
        const postData = postDoc.data() as BlogPost;
        await updateDoc(postDoc.ref, { views: (postData.views || 0) + 1 });
      }
    } catch (e) {
      handleFirestoreError(e, OperationType.UPDATE, POSTS_COLLECTION);
    }
  },

  // Categories
  getCategories: async (): Promise<Category[]> => {
    try {
      const snapshot = await getDocs(collection(db, CATEGORIES_COLLECTION));
      const categories = snapshot.docs.map(doc => doc.data() as Category);
      if (categories.length === 0) {
        return DEFAULT_CATEGORIES;
      }
      return categories;
    } catch (e) {
      console.warn("Firestore getCategories failed, falling back to default:", e);
      return DEFAULT_CATEGORIES;
    }
  },

  saveCategory: async (category: Category): Promise<void> => {
    try {
      await setDoc(doc(db, CATEGORIES_COLLECTION, category.name), category);
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, CATEGORIES_COLLECTION);
    }
  },

  deleteCategory: async (name: string, fallbackCategory?: string): Promise<void> => {
    try {
      const posts = await blogService.getPosts();
      for (const p of posts) {
        if (p.category === name) {
          p.category = fallbackCategory || 'Uncategorized';
          await blogService.savePost(p);
        }
      }
      await deleteDoc(doc(db, CATEGORIES_COLLECTION, name));
      await blogService.updateCategoryCounts();
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, `${CATEGORIES_COLLECTION}/${name}`);
    }
  },

  updateCategoryCounts: async (): Promise<void> => {
    try {
      const posts = await blogService.getPosts();
      let categories = await blogService.getCategories();
      
      const counts: { [key: string]: number } = {};
      posts.forEach(p => {
        counts[p.category] = (counts[p.category] || 0) + 1;
      });

      for (const cat of categories) {
        cat.postCount = counts[cat.name] || 0;
        await blogService.saveCategory(cat);
      }
    } catch (e) {
      console.error('Error updating category counts:', e);
    }
  },

  // Media
  getMedia: async (): Promise<MediaItem[]> => {
    try {
      const snapshot = await getDocs(query(collection(db, MEDIA_COLLECTION), orderBy('date', 'desc')));
      return snapshot.docs.map(doc => doc.data() as MediaItem);
    } catch (e) {
      try {
        handleFirestoreError(e, OperationType.LIST, MEDIA_COLLECTION);
      } catch (logError) {
        console.warn("Failed to retrieve media list from Firestore:", logError);
      }
      return [];
    }
  },

  saveMedia: async (item: MediaItem): Promise<void> => {
    try {
      await setDoc(doc(db, MEDIA_COLLECTION, item.id), item);
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, MEDIA_COLLECTION);
    }
  },

  deleteMedia: async (id: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, MEDIA_COLLECTION, id));
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, `${MEDIA_COLLECTION}/${id}`);
    }
  },

  // Comments
  getComments: async (): Promise<Comment[]> => {
    try {
      const snapshot = await getDocs(collection(db, COMMENTS_COLLECTION));
      return snapshot.docs.map(doc => doc.data() as Comment);
    } catch (e) {
      console.warn("Firestore getComments failed, returning empty list:", e);
      return [];
    }
  },

  getCommentsBySlug: async (slug: string): Promise<Comment[]> => {
    try {
      const q = query(collection(db, COMMENTS_COLLECTION), where('articleSlug', '==', slug), where('status', '==', 'approved'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => doc.data() as Comment);
    } catch (e) {
      console.warn("Firestore getCommentsBySlug failed, returning empty list:", e);
      return [];
    }
  },

  saveComment: async (comment: Comment): Promise<void> => {
    try {
      const id = comment.id || generateUUID();
      await setDoc(doc(db, COMMENTS_COLLECTION, id), { ...comment, id, date: comment.date || new Date().toISOString() });
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, COMMENTS_COLLECTION);
    }
  },

  deleteComment: async (id: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, COMMENTS_COLLECTION, id));
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, `${COMMENTS_COLLECTION}/${id}`);
    }
  },

  // Settings
  getSettings: async (): Promise<BlogSettings> => {
    try {
      const docRef = doc(db, SETTINGS_DOC);
      const snapshot = await getDoc(docRef);
      return snapshot.exists() ? snapshot.data() as BlogSettings : DEFAULT_SETTINGS;
    } catch (e) {
      console.warn("Firestore getSettings failed, returning default settings:", e);
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings: async (settings: BlogSettings): Promise<void> => {
    try {
      await setDoc(doc(db, SETTINGS_DOC), settings);
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, SETTINGS_DOC);
    }
  },

  getAuthors: (): Author[] => {
    return [
      { name: 'Arun Poovaiah', role: 'Master Numerologist', avatar: 'https://lh3.googleusercontent.com/d/1uId_ZFDkU3pMdt7twbLd_brhx-GxL5Di', bio: 'Expert with 15+ years experience in Cosmic Vibrations.' },
      { name: 'Destiny Team', role: 'Content Editors', avatar: '', bio: 'Curating wisdom for the global soul.' }
    ];
  },

  // Autosave (keep in localStorage as it's temporary/local)
  saveAutosave: (post: Partial<BlogPost>): void => {
    localStorage.setItem('dn_autosave', JSON.stringify({
      post,
      timestamp: Date.now()
    }));
  },

  getAutosave: (): { post: Partial<BlogPost>, timestamp: number } | null => {
    const data = localStorage.getItem('dn_autosave');
    return data ? JSON.parse(data) : null;
  },

  clearAutosave: (): void => {
    localStorage.removeItem('dn_autosave');
  }
};

