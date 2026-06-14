import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CMSData, cmsService, DEFAULT_CMS } from '../lib/cmsService';
import { blogService } from '../lib/blogService';
import { BlogPost } from '../types/blog';

interface CMSContextType {
  data: CMSData;
  posts: BlogPost[];
  refresh: () => void;
  loading: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<CMSData>(DEFAULT_CMS);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const [cmsData, blogPosts] = await Promise.all([
        cmsService.getData(),
        blogService.getPosts()
      ]);
      setData(cmsData);
      setPosts(blogPosts);
    } catch (error) {
      console.error('Failed to refresh CMS data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener('cms-update', refresh);
    return () => window.removeEventListener('cms-update', refresh);
  }, [refresh]);

  return (
    <CMSContext.Provider value={{ data, posts, refresh, loading }}>
      {children}
    </CMSContext.Provider>
  );
}

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useCMS must be used within a CMSProvider');
  return context;
};

