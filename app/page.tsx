import StructuredData from "@/components/StructuredData";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import Link from "next/link";

function Icon({
  name,
  className,
}: {
  name:
    | "rocket"
    | "arrowRight"
    | "lightbulb"
    | "trendingUp"
    | "code"
    | "pie"
    | "zap"
    | "users"
    | "quote"
    | "mail"
    | "phone"
    | "circleDot"
    | "mousePointer"
    | "star";
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case "trendingUp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      );
    case "pie":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M21 12a9 9 0 1 1-9-9v9z" />
          <path d="M12 3a9 9 0 0 1 9 9h-9z" />
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "quote":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M10 11H6a3 3 0 0 0-3 3v4h7V11z" />
          <path d="M21 11h-4a3 3 0 0 0-3 3v4h7V11z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M4 4h16v16H4z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "circleDot":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    case "mousePointer":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" />
          <circle cx="16" cy="16" r="6" />
          <path d="m11.8 11.8 8.4 8.4" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M12 17.3l-5.5 3 1-6.1L3 9.7l6.2-.9L12 3l2.8 5.8 6.2.9-4.5 4.5 1 6.1z" />
        </svg>
      );
    default:
      return null;
  }
}

const portfolioItems = [
  {
    id: "gofitz",
    title: "GOFITZ Dance & Fitness Academy",
    tag: "Fitness Website",
    tagStyle: "bg-accent text-black",
    href: "https://www.gofitzglobal.com/",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "2.4k+", label: "Members" },
      { value: "4.9★", label: "Rating" },
    ],
  },
  {
    id: "bharatfa",
    title: "Bharat Football Academy",
    tag: "Academy Website",
    tagStyle: "bg-accent text-black",
    href: "https://www.bharatfa.com/",
    imageUrl:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "500+", label: "Players" },
      { value: "FREE", label: "Trial" },
    ],
  },
];

export default function Home() {
  return <NewHome />;

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
              <Link href="/portfolio" className="hidden text-sm font-medium text-gray-300 hover:text-white transition-colors sm:block">
                Portfolio
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
                  href="/portfolio"
                  className="btn-secondary group"
                >
                  <span className="flex items-center gap-2">
                    View Portfolio
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

          {/* Pricing Section */}
          <section id="pricing" className="relative py-16 sm:py-24" aria-labelledby="pricing-heading">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <span className="badge badge-primary">Transparent Pricing</span>
                <h2 id="pricing-heading" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Simple <span className="gradient-text">Pricing</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                  Get started with clear, upfront pricing. No hidden fees.
                </p>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
                <article className="card-hover shine group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1F35] via-[#141829] to-[#0F1421] p-8">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 via-blue-600/5 to-blue-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative mb-4 inline-flex rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-600/10 p-4 ring-1 ring-blue-500/20">
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="relative text-xl font-bold text-white">Website Development</h3>
                  <p className="relative mt-2 text-gray-400 text-sm">Custom, fast websites built for your business</p>
                  <div className="relative mt-6 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">₹9,999</span>
                    <span className="text-gray-400 text-sm"> onwards</span>
                  </div>
                  <a
                    href="https://wa.me/917739100259?text=Hi%20Elite%20Solutions!%20I'm%20interested%20in%20Website%20Development%20(starting%20from%20₹9,999).%20Let's%20discuss!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Get a quote
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </article>
                <article className="card-hover shine group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1F35] via-[#141829] to-[#0F1421] p-8">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-600/0 via-green-600/5 to-green-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative mb-4 inline-flex rounded-2xl bg-gradient-to-br from-green-600/30 to-green-600/10 p-4 ring-1 ring-green-500/20">
                    <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="relative text-xl font-bold text-white">Google Ads</h3>
                  <p className="relative mt-2 text-gray-400 text-sm">ROI-focused paid search campaigns</p>
                  <div className="relative mt-6 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">₹3,999</span>
                    <span className="text-gray-400 text-sm"> onwards</span>
                  </div>
                  <a
                    href="https://wa.me/917739100259?text=Hi%20Elite%20Solutions!%20I'm%20interested%20in%20Google%20Ads%20(starting%20from%20₹3,999).%20Let's%20discuss!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
                  >
                    Get a quote
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </article>
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
                  <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/20 pt-8">
                    <a href="mailto:utkarsh@chatbay.in?subject=Inquiry%20from%20Elite%20Solutions%20Website" className="flex items-center gap-3 text-white/90 hover:text-purple-400 transition-colors">
                      <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Email: utkarsh@chatbay.in</span>
                    </a>
                    <a href="tel:+917394840630" className="flex items-center gap-3 text-white/90 hover:text-blue-400 transition-colors">
                      <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Call: +91 7394840630</span>
                    </a>
                    <a href="https://wa.me/917739100259" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 hover:text-green-400 transition-colors">
                      <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">WhatsApp: +91 77391 00259</span>
                    </a>
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

              {/* Contact Info */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <a href="mailto:utkarsh@chatbay.in?subject=Inquiry%20from%20Elite%20Solutions%20Website" className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">utkarsh@chatbay.in</span>
                </a>
                <span className="hidden text-gray-600 sm:block">|</span>
                <a href="tel:+917394840630" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">+91 7394840630</span>
                </a>
                <span className="hidden text-gray-600 sm:block">|</span>
                <a href="https://wa.me/917739100259" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="font-medium">+91 77391 00259</span>
                </a>
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

function NewHome() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />

      <div className="min-h-screen bg-cream text-[#1A1A1A] relative overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-cream border-b-2 border-black">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <span className="inline-flex h-10 w-10 items-center justify-center text-black">
                <Icon name="rocket" className="h-8 w-8" />
              </span>
              <span className="text-2xl font-extrabold tracking-tighter text-black uppercase">
                Elite Solution
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-wider text-black/70">
              <a href="#services" className="hover:text-black transition-colors">
                Our Services
              </a>
              <a
                href="#portfolio"
                className="hover:text-black transition-colors"
              >
                Portfolio
              </a>
              <a href="#results" className="hover:text-black transition-colors">
                Case Studies
              </a>
              <a href="#reviews" className="hover:text-black transition-colors">
                Reviews
              </a>
            </div>

            <a
              href="#contact"
              className="bg-accent text-black px-6 py-2.5 rounded-lg border-bold shadow-bold shadow-bold-hover text-sm font-extrabold uppercase transition-all"
            >
              Book a Call
            </a>
          </div>
        </nav>

        <main>
          {/* Hero */}
          <section className="pt-44 pb-24 px-6 relative">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-black bg-white mb-8">
                  <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">
                    Proven Growth Strategies
                  </span>
                </div>

                <h1 className="text-6xl lg:text-8xl font-black text-black mb-8 leading-[0.9] uppercase">
                  Boost <br />
                  <span className="text-white [-webkit-text-stroke:2px_#1A1A1A]">
                    Your Brand
                  </span>
                  <br />
                  To New Heights
                </h1>

                <p className="max-w-lg text-xl text-black/80 font-medium mb-10 leading-relaxed">
                  Scale your business with expert Facebook Ads, Instagram
                  strategy, and conversion-first website development.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto px-10 py-5 bg-accent text-black font-black rounded-xl border-bold shadow-bold shadow-bold-hover transition-all text-center uppercase"
                  >
                    Work With Us
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"
                        alt="Happy client avatar"
                        className="w-12 h-12 rounded-full border-2 border-black bg-white shadow-sm"
                      />
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=2"
                        alt="Happy client avatar"
                        className="w-12 h-12 rounded-full border-2 border-black bg-white shadow-sm"
                      />
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=3"
                        alt="Happy client avatar"
                        className="w-12 h-12 rounded-full border-2 border-black bg-white shadow-sm"
                      />
                    </div>
                    <div>
                      <p className="text-2xl font-black leading-none">102+</p>
                      <p className="text-xs font-bold uppercase text-black/60">
                        Happy Brand Owners
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-black uppercase text-black/40 tracking-widest italic">
                  #GrowthPartners
                </p>
              </div>

              <div className="order-1 lg:order-2 relative flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center animate-float">
                    <div className="relative">
                      <span className="text-accent block">
                        <Icon name="lightbulb" className="h-[180px] w-[180px]" />
                      </span>
                      <div className="absolute -top-10 -right-10 text-black drop-shadow-[4px_4px_0px_#F4C430]">
                        <Icon name="rocket" className="h-[120px] w-[120px]" />
                      </div>
                      <div className="absolute -bottom-10 -left-10 bg-white border-bold p-4 rounded-2xl shadow-bold text-black">
                        <Icon name="trendingUp" className="h-10 w-10" />
                      </div>
                      <div className="absolute top-1/2 -right-20 bg-black text-white px-4 py-2 rounded-lg font-black text-sm uppercase rotate-12">
                        +350% Growth
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-10 opacity-20 text-black">
                    <Icon name="circleDot" className="h-16 w-16" />
                  </div>
                  <div className="absolute bottom-10 left-0 opacity-20 text-black">
                    <Icon name="mousePointer" className="h-16 w-16" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section
            id="services"
            className="py-24 px-6 bg-white border-y-2 border-black"
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-black mb-4 uppercase">
                  Our Expertise
                </h2>
                <p className="text-xl font-bold text-black/60">
                  Specialized strategies for market dominance.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-cream p-10 rounded-3xl border-bold shadow-bold hover:shadow-bold-hover transition-all group">
                  <div className="w-16 h-16 bg-white border-bold rounded-2xl flex items-center justify-center mb-8 text-black">
                    <span className="text-2xl font-black">f</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase">
                    Facebook Ads
                  </h3>
                  <p className="text-black/70 font-medium leading-relaxed mb-8">
                    Precision targeting and psychological copy that converts cold
                    traffic into loyal customers.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-black uppercase">
                    <span>View Strategy</span>
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </div>
                </div>

                <div className="bg-accent p-10 rounded-3xl border-bold shadow-bold hover:shadow-bold-hover transition-all group">
                  <div className="w-16 h-16 bg-white border-bold rounded-2xl flex items-center justify-center mb-8 text-black">
                    <span className="text-xl font-black">IG</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase">
                    Instagram Growth
                  </h3>
                  <p className="text-black/70 font-medium leading-relaxed mb-8">
                    Visual storytelling through Reels and high-impact creatives designed
                    for peak engagement.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-black uppercase">
                    <span>View Strategy</span>
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </div>
                </div>

                <div className="bg-cream p-10 rounded-3xl border-bold shadow-bold hover:shadow-bold-hover transition-all group">
                  <div className="w-16 h-16 bg-white border-bold rounded-2xl flex items-center justify-center mb-8 text-black">
                    <Icon name="code" className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase">
                    Web Development
                  </h3>
                  <p className="text-black/70 font-medium leading-relaxed mb-8">
                    Custom high-speed websites engineered for conversions, SEO, and ultimate user experience.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-black uppercase">
                    <span>View Strategy</span>
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section id="portfolio" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black text-black mb-4 uppercase">
                    Websites Built
                  </h2>
                  <p className="text-black/60 font-bold uppercase tracking-widest">
                    Recent client launches
                  </p>
                </div>
                <a
                  href="/portfolio"
                  className="text-black font-black uppercase border-b-2 border-black"
                >
                  View All Projects
                </a>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-[2rem] border-bold overflow-hidden shadow-bold group"
                  >
                    <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden border-b-2 border-black">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-black uppercase">
                          {item.title}
                        </h4>
                        <span
                          className={`${item.tagStyle} px-3 py-1 rounded-full border-bold text-[10px] font-black uppercase tracking-widest`}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 border-t-2 border-black pt-6">
                        {item.stats.map((stat) => (
                          <div key={stat.label}>
                            <span className="text-2xl font-black block">
                              {stat.value}
                            </span>
                            <span className="text-[10px] font-bold uppercase text-black/50">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section
            id="results"
            className="py-24 px-6 bg-accent border-y-2 border-black"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-black mb-4 uppercase">
                  Performance Reports
                </h2>
                <p className="text-black font-bold uppercase tracking-widest">
                  Facebook & Instagram Results
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white border-bold p-10 rounded-[2.5rem] shadow-bold flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <span className="text-xs font-black uppercase text-accent mb-2">
                      Fitness Brand
                    </span>
                    <h3 className="text-3xl font-black mb-6 uppercase leading-tight">
                      FitLife Scaling
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-black">
                        <Icon name="pie" className="h-6 w-6" />
                        <span className="font-bold">8.2x Lifetime ROAS</span>
                      </div>
                      <div className="flex items-center gap-3 text-black">
                        <Icon name="zap" className="h-6 w-6" />
                        <span className="font-bold">$1.4M Managed Spend</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-cream border-bold rounded-2xl p-6 flex items-center justify-center">
                    <div className="w-full space-y-4">
                      <div className="h-4 bg-accent border-bold w-full rounded-full" />
                      <div className="h-4 bg-accent border-bold w-[75%] rounded-full" />
                      <div className="h-4 bg-accent border-bold w-[90%] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="bg-white border-bold p-10 rounded-[2.5rem] shadow-bold flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <span className="text-xs font-black uppercase text-accent mb-2">
                      FinTech Startup
                    </span>
                    <h3 className="text-3xl font-black mb-6 uppercase leading-tight">
                      SecurePay Launch
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-black">
                        <Icon name="users" className="h-6 w-6" />
                        <span className="font-bold">15k+ Qualified Leads</span>
                      </div>
                      <div className="flex items-center gap-3 text-black">
                        <Icon name="trendingUp" className="h-6 w-6" />
                        <span className="font-bold">$0.85 Cost Per Lead</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-cream border-bold rounded-2xl p-6 flex items-center justify-center">
                    <div className="flex items-baseline gap-2">
                      <div className="w-4 h-24 bg-black rounded-t-lg" />
                      <div className="w-4 h-16 bg-accent border-bold rounded-t-lg" />
                      <div className="w-4 h-32 bg-black rounded-t-lg" />
                      <div className="w-4 h-20 bg-accent border-bold rounded-t-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section id="reviews" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-3 mb-6">
                  <span className="w-10 h-10 border-bold rounded-xl bg-white flex items-center justify-center font-black">
                    G
                  </span>
                  <div className="flex text-accent">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Icon key={idx} name="star" className="h-6 w-6" />
                    ))}
                  </div>
                </div>
                <h2 className="text-4xl font-black uppercase">The Elite Standard</h2>
                <p className="text-black/60 font-bold tracking-widest uppercase mt-2">
                  4.9/5 Trusted Global Rating
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    quote:
                      "Elite Solution is easily the best agency we've worked with. Their responsiveness and expertise are miles ahead of the competition.",
                    name: "Alex Kessler",
                    title: "Director, Peak Performance",
                    seed: "Alex",
                  },
                  {
                    quote:
                      "I was skeptical about finding a developer who understood conversion, but Elite delivered a site that looks amazing and actually converts.",
                    name: "Maria Jenson",
                    title: "Founder, SkinCare Co.",
                    seed: "Maria",
                  },
                  {
                    quote:
                      "The ROI on our Instagram campaigns went up by 300% within the first two months. These guys are the real deal.",
                    name: "Tom Hardy",
                    title: "Marketing Mgr, Volt Energy",
                    seed: "Tom",
                  },
                ].map((review) => (
                  <div
                    key={review.seed}
                    className="bg-white p-10 rounded-[2.5rem] border-bold shadow-bold relative"
                  >
                    <div className="text-accent absolute -top-4 -left-4 bg-white rounded-full p-2 border-bold">
                      <Icon name="quote" className="h-8 w-8" />
                    </div>
                    <p className="text-black font-bold italic mb-8 leading-relaxed">
                      &quot;{review.quote}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.seed}`}
                        alt={review.name}
                        className="w-14 h-14 rounded-full border-2 border-black bg-white shadow-sm"
                      />
                      <div>
                        <p className="font-black text-black">{review.name}</p>
                        <p className="text-[10px] font-black uppercase text-accent">
                          {review.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-[3rem] border-bold shadow-bold overflow-hidden flex flex-col lg:flex-row">
                <div className="lg:w-[40%] bg-black p-12 lg:p-20 text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-8 uppercase leading-[0.9]">
                      Let&apos;s <br />
                      Connect.
                    </h2>
                    <p className="text-white/60 text-lg mb-12 font-medium">
                      Reach out for a free audit of your current ad spend or site performance.
                    </p>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center border-2 border-white text-black">
                          <Icon name="mail" className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">
                            Email Us
                          </p>
                          <p className="text-xl font-black">
                            utkarsh@chatbay.in
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border-2 border-black text-black">
                          <Icon name="phone" className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">
                            Call Us
                          </p>
                          <p className="text-xl font-black">+1 (555) 234-5678</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[60%] p-12 lg:p-20">
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-black/40 uppercase tracking-widest">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Julian Thorne"
                          className="w-full bg-cream border-2 border-black rounded-xl px-6 py-4 focus:outline-none focus:ring-0 text-black font-black uppercase text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-black/40 uppercase tracking-widest">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="hello@brand.co"
                          className="w-full bg-cream border-2 border-black rounded-xl px-6 py-4 focus:outline-none focus:ring-0 text-black font-black uppercase text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-black/40 uppercase tracking-widest">
                        Select Service
                      </label>
                      <select className="w-full bg-cream border-2 border-black rounded-xl px-6 py-4 focus:outline-none focus:ring-0 text-black font-black uppercase text-sm appearance-none cursor-pointer">
                        <option>Facebook & Instagram Growth</option>
                        <option>Conversion Website Development</option>
                        <option>Full Scale Branding Package</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-black/40 uppercase tracking-widest">
                        Goals
                      </label>
                      <textarea
                        rows={4}
                        placeholder="What is your current ad spend?"
                        className="w-full bg-cream border-2 border-black rounded-xl px-6 py-4 focus:outline-none focus:ring-0 text-black font-black uppercase text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent text-black font-black py-5 rounded-2xl border-bold shadow-bold shadow-bold-hover transition-all uppercase tracking-widest"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-24 pb-12 px-6 border-t-2 border-black">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t-2 border-black/10">
                <p className="text-[10px] font-black uppercase text-black/40 tracking-[0.2em]">
                  © {new Date().getFullYear()} ELITE PERFORMANCE GROUP. ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-8 text-[10px] font-black uppercase text-black/40 tracking-[0.2em]">
                  <a href="#" className="hover:text-black">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-black">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
