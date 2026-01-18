import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { organizationSchema, websiteSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      
      <div className="flex min-h-screen flex-col bg-[#0A0F1E] dark:bg-[#0A0F1E]">
        {/* Header */}
        <header className="w-full border-b border-white/10">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Global navigation">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-lg font-bold text-white">Elite Solutions</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#services" className="hidden text-sm font-medium text-gray-300 hover:text-white transition-colors sm:block">
                Services
              </Link>
              <Link href="/services" className="text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-all">
                Menu
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-40 overflow-hidden" aria-labelledby="hero-heading">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-float" />
            <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-float" style={{animationDelay: '1s'}} />
            
            <div className="relative text-center">
              <div className="animate-fade-in-down">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-400 ring-1 ring-blue-500/30 sm:text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                  Creative Agency
                </span>
              </div>
              
              <h1 
                id="hero-heading"
                className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up"
              >
                Elevate Your{" "}
                <span className="gradient-text inline-block">
                  Digital
                </span>
                <br />
                <span className="gradient-text inline-block">
                  Presence
                </span>
              </h1>
              
              <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:text-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                We build high-performance web experiences and drive growth through strategic social media advertising.
              </p>
              
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <a
                  href="https://wa.me/917739100259?text=Hi%20Elite%20Solutions!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shine group relative"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#services"
                  className="btn-secondary group"
                >
                  <span className="flex items-center gap-2">
                    View Services
                    <svg className="h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Stats or trust indicators */}
              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="hover-lift">
                  <div className="text-3xl font-bold text-white sm:text-4xl gradient-text">500+</div>
                  <div className="mt-2 text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="hover-lift">
                  <div className="text-3xl font-bold text-white sm:text-4xl gradient-text">98%</div>
                  <div className="mt-2 text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="hover-lift">
                  <div className="text-3xl font-bold text-white sm:text-4xl gradient-text">24/7</div>
                  <div className="mt-2 text-sm text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="relative py-20 sm:py-32" aria-labelledby="services-heading">
            <div className="absolute inset-0 bg-dots opacity-10" />
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <span className="badge badge-primary">
                  Our Expertise
                </span>
                <h2 
                  id="services-heading"
                  className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Solutions for{" "}
                  <span className="gradient-text">Growth</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                  Comprehensive digital services to elevate your business
                </p>
              </div>

              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {/* Web Development Card */}
                <article className="card-hover shine group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1F35] via-[#141829] to-[#0F1421] p-8">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 via-blue-600/5 to-blue-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Icon with glow */}
                  <div className="relative mb-6 inline-flex">
                    <div className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-xl group-hover:bg-blue-600/40 transition-all duration-500" />
                    <div className="relative rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-600/10 p-4 ring-1 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all">
                      <svg className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="relative text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Web Development
                  </h3>
                  <p className="relative mt-4 text-base leading-relaxed text-gray-400">
                    Bespoke, lightning-fast web applications designed to convert visitors into loyal customers.
                  </p>
                  
                  {/* Tech badges */}
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20">React</span>
                    <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20">Next.js</span>
                    <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20">Node.js</span>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="relative mt-6 flex items-center text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </article>

                {/* Google Ads Card */}
                <article className="card-hover shine group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1F35] via-[#141829] to-[#0F1421] p-8">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-600/0 via-green-600/5 to-green-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative mb-6 inline-flex">
                    <div className="absolute inset-0 rounded-2xl bg-green-600/20 blur-xl group-hover:bg-green-600/40 transition-all duration-500" />
                    <div className="relative rounded-2xl bg-gradient-to-br from-green-600/30 to-green-600/10 p-4 ring-1 ring-green-500/20 group-hover:ring-green-500/40 transition-all">
                      <svg className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="relative text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    Google Ads
                  </h3>
                  <p className="relative mt-4 text-base leading-relaxed text-gray-400">
                    ROI-focused search engine marketing that puts your brand in front of high-intent buyers.
                  </p>
                  
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-green-500/20">PPC</span>
                    <span className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-green-500/20">SEM</span>
                    <span className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-green-500/20">Analytics</span>
                  </div>
                  
                  <div className="relative mt-6 flex items-center text-sm font-semibold text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </article>

                {/* Social Media Card */}
                <article className="card-hover shine group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1F35] via-[#141829] to-[#0F1421] p-8">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/0 via-purple-600/5 to-purple-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative mb-6 inline-flex">
                    <div className="absolute inset-0 rounded-2xl bg-purple-600/20 blur-xl group-hover:bg-purple-600/40 transition-all duration-500" />
                    <div className="relative rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-600/10 p-4 ring-1 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all">
                      <svg className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="relative text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    Social Media
                  </h3>
                  <p className="relative mt-4 text-base leading-relaxed text-gray-400">
                    Strategic growth campaigns across Facebook and Instagram to scale your community.
                  </p>
                  
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-600/10 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-500/20">Facebook</span>
                    <span className="rounded-full bg-purple-600/10 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-500/20">Instagram</span>
                    <span className="rounded-full bg-purple-600/10 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-500/20">TikTok</span>
                  </div>
                  
                  <div className="relative mt-6 flex items-center text-sm font-semibold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="relative py-20 sm:py-32" aria-labelledby="social-proof-heading">
            <div className="absolute inset-0 bg-gradient-radial opacity-50" />
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <span className="badge badge-primary">
                  Social Proof
                </span>
                <h2 
                  id="social-proof-heading"
                  className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Trusted by{" "}
                  <span className="gradient-text">Innovators</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                  Join hundreds of companies growing with our solutions
                </p>
              </div>

              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
                {/* Testimonial 1 */}
                <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1F35] via-[#141829] to-[#0F1421] p-8 hover-lift">
                  {/* Quote icon background */}
                  <div className="absolute right-4 top-4 opacity-5 transition-opacity group-hover:opacity-10">
                    <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* Stars */}
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="relative text-lg leading-relaxed text-gray-300">
                    &ldquo;Elite Solutions transformed our online presence. Our conversion rate increased by <span className="font-bold text-blue-400">40%</span> in just three months.&rdquo;
                  </blockquote>
                  
                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-md" />
                      <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 ring-2 ring-blue-500/30" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Alex Rivera</p>
                      <p className="text-sm text-gray-400">CEO, Nexus Tech</p>
                    </div>
                  </div>
                </article>

                {/* Testimonial 2 */}
                <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1F35] via-[#141829] to-[#0F1421] p-8 hover-lift">
                  <div className="absolute right-4 top-4 opacity-5 transition-opacity group-hover:opacity-10">
                    <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="relative text-lg leading-relaxed text-gray-300">
                    &ldquo;The Google Ads campaigns they managed for us saw an immediate <span className="font-bold text-green-400">3x</span> return on spend. Highly recommended!&rdquo;
                  </blockquote>
                  
                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md" />
                      <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 ring-2 ring-purple-500/30" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Sarah Jenkins</p>
                      <p className="text-sm text-gray-400">Marketing Director, Bloom Co.</p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-12">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>500+ Projects</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="relative py-20 sm:py-32" aria-labelledby="cta-heading">
            <div className="absolute inset-0 bg-grid opacity-10" />
            
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 p-12 shadow-2xl animate-gradient sm:p-16 lg:p-20">
                {/* Animated background elements */}
                <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl animate-float" />
                <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl animate-float" style={{animationDelay: '1s'}} />
                
                {/* Content */}
                <div className="relative text-center">
                  {/* Icon */}
                  <div className="mx-auto mb-8 inline-flex">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-white/30 blur-xl" />
                      <div className="relative rounded-2xl bg-white/20 p-4 backdrop-blur-sm ring-1 ring-white/30">
                        <svg className="h-10 w-10 text-white sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Ready to start your
                    <br />
                    <span className="text-white drop-shadow-lg">project?</span>
                  </h2>
                  
                  <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
                    Let&apos;s build something extraordinary together. Our team is ready to scale your brand.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                    <a
                      href="https://wa.me/917739100259?text=Hi%20Elite%20Solutions!%20I'm%20ready%20to%20start%20my%20project.%20Let's%20discuss!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden rounded-full bg-white px-10 py-4 font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        CHAT WITH US NOW
                        <svg className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-50 to-white opacity-0 transition-opacity group-hover/btn:opacity-100" />
                    </a>
                    
                    <a
                      href="#services"
                      className="group/btn rounded-full border-2 border-white/30 bg-white/10 px-10 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    >
                      <span className="flex items-center gap-2">
                        View Services
                        <svg className="h-5 w-5 transition-transform group-hover/btn:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </a>
                  </div>
                  
                  {/* Contact options */}
                  <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/20 pt-8">
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">WhatsApp Chat</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Quick Response</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Free Consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0A0F1E]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-lg font-bold text-white">Elite Solutions</span>
              </div>
              
              <div className="flex gap-6">
                <a href="https://facebook.com" className="rounded-full bg-white/10 p-2 text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="rounded-full bg-white/10 p-2 text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="rounded-full bg-white/10 p-2 text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              
              <p className="text-center text-xs text-gray-400 sm:text-sm">
                © {new Date().getFullYear()} Elite Solutions Agency. All rights reserved.<br className="sm:hidden" /> Crafting digital excellence globally.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
