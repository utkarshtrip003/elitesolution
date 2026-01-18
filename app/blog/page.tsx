import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";

// Metadata for the blog listing page
export const metadata: Metadata = {
  title: "Blog - Latest Articles & Insights",
  description:
    "Read our latest articles on web development, digital marketing, SEO, and industry trends.",
  openGraph: {
    title: "Blog - Elite Solutions",
    description: "Latest articles and insights from Elite Solutions",
    type: "website",
  },
};

// Sample blog posts (in production, fetch from CMS or database)
const blogPosts = [
  {
    id: "1",
    title: "10 Essential SEO Tips for Next.js Websites in 2026",
    description:
      "Learn how to optimize your Next.js website for search engines with these proven strategies.",
    slug: "nextjs-seo-tips-2026",
    date: "2026-01-18",
    author: "Elite Solutions Team",
    image: "/next.svg",
    category: "SEO",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Building High-Performance Web Apps with React",
    description:
      "Discover best practices for creating fast, scalable web applications using React and modern tools.",
    slug: "high-performance-react-apps",
    date: "2026-01-15",
    author: "Elite Solutions Team",
    image: "/next.svg",
    category: "Development",
    readTime: "12 min read",
  },
  {
    id: "3",
    title: "Google Ads Strategies That Actually Work",
    description:
      "Maximize your ROI with these proven Google Ads strategies for small and medium businesses.",
    slug: "google-ads-strategies",
    date: "2026-01-10",
    author: "Elite Solutions Team",
    image: "/next.svg",
    category: "Marketing",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  // Blog list schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Elite Solutions Blog",
    description:
      "Latest articles on web development, SEO, and digital marketing",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/blog`,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <StructuredData data={blogSchema} />

      <div className="min-h-screen bg-[#0A0F1E]">
        {/* Header */}
        <header className="w-full border-b border-white/10">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-lg font-bold text-white">
                Elite Solutions
              </span>
            </Link>
          </nav>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-24">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 sm:text-sm">
              Resources
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Expert insights on web development, SEO, and digital marketing
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="card-hover group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1F35] to-[#0F1421] transition-all"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-900/20 to-blue-800/20">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover opacity-60 transition-transform group-hover:scale-105 invert"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-sm text-gray-400">
                      <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-400">
                        {post.category}
                      </span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="mb-2 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-gray-400">{post.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{post.readTime}</span>
                      <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
