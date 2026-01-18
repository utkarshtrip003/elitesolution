import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Our Services - Digital Excellence Delivered',
  description: 'Comprehensive digital services including web development, Google Ads, and social media marketing to elevate your business.',
  openGraph: {
    title: 'Our Services - Elite Solutions',
    description: 'Digital excellence delivered through expert web development, Google Ads, and social media marketing.',
    type: 'website',
  },
};

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Elite Solutions"
    },
    "areaServed": "Worldwide"
  };

  return (
    <>
      <StructuredData data={servicesSchema} />
      
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
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <span className="text-lg font-semibold text-white">Our Services</span>
              <Link href="#contact" className="text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1929] via-[#0A0F1E] to-[#0A0F1E] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)]" />
            </div>
            <div className="relative mx-auto max-w-7xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 sm:text-sm">
                Elite Solutions
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Digital Excellence<br />Delivered
              </h1>
            </div>
          </section>

          {/* Web Development Section */}
          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 mb-6">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">Web Development</h2>
              </div>

              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A2332] to-[#0F1421]">
                <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-32 w-32 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1F35] to-[#0F1421] p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white sm:text-2xl">Modern Frameworks & Tech</h3>
                <p className="mt-3 text-gray-400 sm:text-lg">
                  We build high-performance web applications using React, Next.js, and Node.js for ultimate scalability and lightning-fast speed.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">React</span>
                  <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">Next.js</span>
                  <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">Tailwind</span>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Mobile-First Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">SEO & Performance Optimized</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Secure Cloud Infrastructure</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-all sm:w-auto">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Google Ads Section */}
          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 mb-6">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">Google Search Ads</h2>
              </div>

              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-teal-900/20 to-teal-800/20">
                <div className="aspect-video w-full bg-gradient-to-br from-teal-700 to-teal-600 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-md">
                    <svg className="w-full text-white" viewBox="0 0 400 250" fill="none" stroke="currentColor">
                      <path d="M50 200 L80 180 L110 190 L140 160 L170 170 L200 130 L230 140 L260 100 L290 110 L320 60 L350 70" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="350" cy="70" r="6" fill="currentColor" />
                    </svg>
                    <div className="absolute bottom-4 left-4 text-xl font-bold">ROI ↗</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1F35] to-[#0F1421] p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white sm:text-2xl">Data-Driven ROI Growth</h3>
                <p className="mt-3 text-gray-400 sm:text-lg">
                  Maximize your ad spend with precision targeting and continuous optimization. We turn clicks into high-value customers.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Keyword Intent Research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Conversion Tracking & Reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Dynamic Ad Copywriting</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-all sm:w-auto">
                    Calculate Potential ROI
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Section */}
          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 mb-6">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">Social Media Marketing</h2>
              </div>

              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-orange-200 to-pink-200">
                <div className="aspect-video w-full flex items-center justify-center p-8">
                  <div className="relative h-64 w-44 rounded-3xl border-8 border-black bg-white shadow-2xl">
                    <div className="flex flex-col gap-3 p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                        <div className="flex-1">
                          <div className="h-2 w-20 rounded bg-gray-300" />
                          <div className="mt-1 h-2 w-16 rounded bg-gray-200" />
                        </div>
                      </div>
                      <div className="h-32 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500" />
                      <div className="flex gap-4">
                        <div className="h-2 w-8 rounded bg-gray-300" />
                        <div className="h-2 w-8 rounded bg-gray-300" />
                        <div className="h-2 w-8 rounded bg-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1F35] to-[#0F1421] p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white sm:text-2xl">Visual Storytelling & Growth</h3>
                <p className="mt-3 text-gray-400 sm:text-lg">
                  We craft thumb-stopping content that builds community and drives sales across Meta&apos;s powerful advertising platforms.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Custom Content Production</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Advanced Lookalike Audiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Retargeting Campaigns</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-all sm:w-auto">
                    Explore Strategy
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Trusted By Section */}
          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 sm:text-sm">
                  Trusted by Industry Leaders
                </span>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8 opacity-40 grayscale">
                <div className="h-12 w-12 rounded-full bg-gray-600" />
                <div className="h-12 w-12 rounded-full bg-gray-600" />
                <div className="h-12 w-12 rounded-full bg-gray-600" />
                <div className="h-12 w-12 rounded-full bg-gray-600" />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 p-8 text-center shadow-2xl sm:p-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Book Free Consult
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100 sm:text-base">
                  Schedule a free consultation with our experts to discuss your project goals and discover how we can help.
                </p>
                <div className="mt-8">
                  <button className="inline-block rounded-full bg-white px-10 py-4 font-bold text-blue-600 shadow-lg hover:bg-gray-100 transition-all">
                    📅 BOOK FREE CONSULT
                  </button>
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
              <p className="text-center text-xs text-gray-400 sm:text-sm">
                © {new Date().getFullYear()} Elite Solutions Agency. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

