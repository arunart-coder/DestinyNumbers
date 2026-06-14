export type PostStatus = 'draft' | 'published' | 'scheduled' | 'pending';
export type Visibility = 'public' | 'private';

export interface Author {
  name: string;
  avatar?: string;
  role: string;
  bio?: string;
}

export interface Comment {
  id: string;
  articleSlug: string;
  name: string;
  email: string;
  content: string;
  date: string;
  status: 'pending' | 'approved' | 'spam';
}

export interface Revision {
  date: string;
  content: string;
  wordCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  status: PostStatus;
  visibility: Visibility;
  content: string;
  excerpt: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailPosition: 'top' | 'hero' | 'card' | 'center';
  author: Author;
  publishDate: string;
  scheduledDate: string | null;
  readTime: string;
  wordCount: number;
  views: number;
  seoTitle: string;
  metaDesc: string;
  focusKeyword: string;
  ogImage?: string;
  commentsEnabled: boolean;
  series?: string;
  seriesPart?: number | null;
  revisions: Revision[];
  createdAt: string;
  updatedAt: string;
  useHeaderBgImage?: boolean;
  headerBgImageUrl?: string;
}

export interface Category {
  name: string;
  color: string;
  postCount: number;
}

export interface MediaItem {
  id: string;
  url: string;
  filename: string;
  date: string;
  size?: string;
}

export interface BlogSettings {
  blogTitle: string;
  blogDescription: string;
  postsPerPage: number;
  featuredPostEnabled: boolean;
  commentsEnabled: boolean;
  relatedPostsEnabled: boolean;
  readingProgressBar: boolean;
  socialSharing: {
    whatsapp: boolean;
    twitter: boolean;
    linkedin: boolean;
    copyLink: boolean;
  };
}

export interface HeroBanner {
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}
