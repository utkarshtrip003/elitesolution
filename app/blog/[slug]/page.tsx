import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';

// This would typically come from a CMS or database
const blogPosts: Record<string, any> = {
  'nextjs-seo-tips-2026': {
    title: '10 Essential SEO Tips for Next.js Websites in 2026',
    description: 'Learn how to optimize your Next.js website for search engines with these proven strategies.',
    content: `
      <p>Search engine optimization (SEO) is crucial for any website's success. With Next.js, you have powerful tools at your disposal to create highly optimized websites.</p>
      
      <h2>1. Use the App Router for Better SEO</h2>
      <p>The Next.js App Router provides built-in support for metadata, making it easier to manage SEO.</p>
      
      <h2>2. Implement Structured Data</h2>
      <p>Use JSON-LD to help search engines understand your content better.</p>
      
      <h2>3. Optimize Images with next/image</h2>
      <p>The Image component automatically optimizes images for better performance.</p>
      
      <h2>4. Generate Dynamic Sitemaps</h2>
      <p>Create dynamic sitemaps that update automatically as you add content.</p>
      
      <h2>5. Configure robots.txt Properly</h2>
      <p>Ensure search engines can crawl your site effectively.</p>
      
      <p>These are just a few of the many ways to optimize your Next.js site for search engines. Stay tuned for more tips!</p>
    `,
    date: '2026-01-18',
    author: 'Elite Solutions Team',
    authorRole: 'Web Development Team',
    image: '/next.svg',
    category: 'SEO',
    tags: ['Next.js', 'SEO', 'Web Development', 'Performance'],
    readTime: '8 min read',
  },
  'high-performance-react-apps': {
    title: 'Building High-Performance Web Apps with React',
    description: 'Discover best practices for creating fast, scalable web applications using React and modern tools.',
    content: '<p>Content for high-performance React apps...</p>',
    date: '2026-01-15',
    author: 'Elite Solutions Team',
    authorRole: 'Development Team',
    image: '/next.svg',
    category: 'Development',
    tags: ['React', 'Performance', 'Web Development'],
    readTime: '12 min read',
  },
  'google-ads-strategies': {
    title: 'Google Ads Strategies That Actually Work',
    description: 'Maximize your ROI with these proven Google Ads strategies for small and medium businesses.',
    content: '<p>Content for Google Ads strategies...</p>',
    date: '2026-01-10',
    author: 'Elite Solutions Team',
    authorRole: 'Marketing Team',
    image: '/next.svg',
    category: 'Marketing',
    tags: ['Google Ads', 'PPC', 'Marketing', 'ROI'],
    readTime: '10 min read',
  },
};

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || ''}${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Elite Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || ''}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${slug}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category,
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      
      <div className="min-h-screen bg-[#0A0F1E]">
        {/* Header */}
        <header className="w-full border-b border-white/10">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2">
              <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-lg font-bold text-white">Elite Solutions</span>
            </Link>
          </nav>
        </header>

        <main className="mx-auto max-w-4xl px-6 py-12">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${slug}` },
            ]}
          />

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm font-semibold text-blue-400">
                  {post.category}
                </span>
                <time
                  dateTime={post.date}
                  className="text-sm text-gray-400"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-sm text-gray-400">
                  • {post.readTime}
                </span>
              </div>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-400">
                {post.description}
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                  <div>
                    <p className="font-medium text-white">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {post.authorRole}
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div
              className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-gray-400 prose-p:leading-relaxed prose-a:text-blue-400 hover:prose-a:text-blue-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <footer className="mt-12 border-t border-white/10 pt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </footer>
          </article>

          {/* Back to Blog */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to all posts
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

