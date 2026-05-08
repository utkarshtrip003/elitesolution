import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Elite Solution | Growth Partners",
  description:
    "Scale your business with expert Meta Ads, Instagram growth, and conversion-first web development.",
  openGraph: {
    title: "Elite Solution | Growth Partners",
    description: "Proven growth strategies and performance case studies.",
    type: "website",
  },
};

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
          <path d="M5 13c4 0 9-7 9-7s3 5 3 9-4 7-7 7-5-2-5-5z" />
          <path d="M9 17l-2 2" />
          <path d="M13 7l4-4" />
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
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M8 14a6 6 0 1 1 8 0c-1.3 1.1-2 2.2-2 4H10c0-1.8-.7-2.9-2-4z" />
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
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mousePointer":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M4 4l8.5 16 2.5-6 6-2.5L4 4z" />
          <path d="M13.5 13.5l5 5" />
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

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Elite Solution | Growth Partners",
    description:
      "Proven growth strategies for Meta Ads, Instagram, and conversion-first web development.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/portfolio`,
  };

  return (
    <>
      <StructuredData data={portfolioSchema} />

      <div className="min-h-screen bg-cream text-[#1A1A1A] relative overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-cream border-b-2 border-black">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="inline-flex h-10 w-10 items-center justify-center text-black">
                <Icon name="rocket" className="h-8 w-8" />
              </span>
              <span className="text-2xl font-extrabold tracking-tighter text-black uppercase">
                Elite Solution
              </span>
            </Link>

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
                    Precision targeting and psychological copy that converts
                    cold traffic into loyal customers.
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
                    Visual storytelling through Reels and high-impact creatives
                    designed for peak engagement.
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
                    Custom high-speed websites engineered for conversions, SEO,
                    and ultimate user experience.
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
                  href="#"
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
                    <h4 className="text-3xl font-black mb-6 uppercase leading-tight">
                      FitLife Scaling
                    </h4>
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
                    <h4 className="text-3xl font-black mb-6 uppercase leading-tight">
                      SecurePay Launch
                    </h4>
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
                <h2 className="text-4xl font-black uppercase">
                  The Elite Standard
                </h2>
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
                      Reach out for a free audit of your current ad spend or
                      site performance.
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
                          <p className="text-xl font-black">
                            7394840630
                          </p>
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
        </main>

        {/* Footer */}
        <footer className="pt-24 pb-12 px-6 border-t-2 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-16 mb-20">
              <div className="lg:col-span-1">
                <a href="#" className="flex items-center gap-2 mb-8 group">
                  <span className="inline-flex h-10 w-10 items-center justify-center text-black">
                    <Icon name="rocket" className="h-9 w-9" />
                  </span>
                  <span className="text-3xl font-black tracking-tighter text-black uppercase">
                    Elite Solution
                  </span>
                </a>
                <p className="text-black/70 font-bold mb-8">
                  We help ambitious startups dominate their market with proven
                  advertising and high-performance engineering.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 border-bold bg-white flex items-center justify-center rounded-lg hover:bg-accent transition-colors font-black"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border-bold bg-white flex items-center justify-center rounded-lg hover:bg-accent transition-colors font-black"
                    aria-label="Instagram"
                  >
                    ig
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border-bold bg-white flex items-center justify-center rounded-lg hover:bg-accent transition-colors font-black"
                    aria-label="Twitter"
                  >
                    x
                  </a>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-black uppercase tracking-[0.2em] mb-8">
                  Quick Links
                </h5>
                <ul className="space-y-4 text-sm font-bold uppercase text-black/60">
                  <li>
                    <a
                      href="#services"
                      className="hover:text-black transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="hover:text-black transition-colors"
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#results"
                      className="hover:text-black transition-colors"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#reviews"
                      className="hover:text-black transition-colors"
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-black transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-black uppercase tracking-[0.2em] mb-8">
                  Our Team
                </h5>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
                      alt="Marcus Vane"
                      className="w-10 h-10 rounded-full border-2 border-black bg-accent"
                    />
                    <div>
                      <p className="text-sm font-black">Marcus Vane</p>
                      <p className="text-[10px] font-bold text-black/40 uppercase">
                        Founder & Ads Lead
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"
                      alt="Sara Chen"
                      className="w-10 h-10 rounded-full border-2 border-black bg-white"
                    />
                    <div>
                      <p className="text-sm font-black">Sara Chen</p>
                      <p className="text-[10px] font-bold text-black/40 uppercase">
                        Head of Engineering
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-black uppercase tracking-[0.2em] mb-8">
                  Stay Updated
                </h5>
                <p className="text-xs font-bold text-black/60 mb-6">
                  Join 5k+ marketers getting our weekly growth insights.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-cream border-2 border-black rounded-lg px-4 py-3 text-sm font-black uppercase focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white font-black py-3 rounded-lg border-2 border-black hover:bg-accent hover:text-black transition-all uppercase text-xs"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t-2 border-black/10">
              <p className="text-[10px] font-black uppercase text-black/40 tracking-[0.2em]">
                © {new Date().getFullYear()} ELITE PERFORMANCE GROUP. ALL RIGHTS
                RESERVED.
              </p>
              <div className="flex gap-8 text-[10px] font-black uppercase text-black/40 tracking-[0.2em]">
                <Link href="/privacy-policy" className="hover:text-black">
                  Privacy Policy
                </Link>
                <a href="#" className="hover:text-black">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
