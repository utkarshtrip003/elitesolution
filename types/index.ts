// Global type definitions

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export interface StructuredDataProps {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  author: string;
  creator: string;
  publisher: string;
  locale: string;
  type: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image?: string;
  tags: string[];
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

