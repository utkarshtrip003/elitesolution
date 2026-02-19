import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Portfolio - Elite Solutions",
  description:
    "Explore our portfolio of successful web development and digital marketing projects. See how we've helped businesses grow online.",
  openGraph: {
    title: "Our Portfolio - Elite Solutions",
    description: "Successful projects and case studies from Elite Solutions",
    type: "website",
  },
};

const projects = [
  {
    id: "1",
    title: "YourField Sports",
    description:
      "A comprehensive sports platform featuring event management, team registration, and live updates. Built with modern web technologies for optimal performance.",
    url: "https://www.yourfieldsports.com",
    image: "/next.svg", // You can replace this with actual project image
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    featured: true,
  },
  {
    id: "2",
    title: "LL Fitness",
    description:
      "A premium fitness center website for Gurugram's premier gym. Features facility gallery, class schedules, membership information, and seamless contact integration.",
    url: "https://llfitness-six.vercel.app",
    image: "/next.svg", // You can replace this with actual project image
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    featured: true,
  },
  // Add more projects here as needed
];

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Elite Solutions Portfolio",
    description: "Portfolio of web development and digital marketing projects",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/portfolio`,
  };

  return (
    <>
      <StructuredData data={portfolioSchema} />

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
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Services
              </Link>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-float" />

            <div className="relative text-center">
              <span className="badge badge-primary">Our Work</span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                Explore our successful projects and see how we&apos;ve helped
                businesses achieve their digital goals.
              </p>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="absolute inset-0 bg-dots opacity-10" />

            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="card-hover shine group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1F35] via-[#141829] to-[#0F1421]"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="badge badge-success">Featured</span>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-900/20 to-blue-800/20">
                    <div className="flex h-full items-center justify-center p-8">
                      <div className="text-center">
                        <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                          <svg
                            className="h-12 w-12 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-400">Project Preview</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 sm:p-8">
                    <div className="mb-4">
                      <span className="badge badge-primary">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mb-6 text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="relative z-10 mt-6">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative z-20 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:from-blue-500 hover:to-blue-400 hover:scale-105 hover:shadow-xl"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <span>View Live Project</span>
                        <svg
                          className="h-5 w-5 transition-transform group-hover/link:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 via-blue-600/5 to-blue-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                </article>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-16 text-center">
              <p className="text-gray-400">
                More projects coming soon! Check back regularly for updates.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 p-12 shadow-2xl animate-gradient sm:p-16 lg:p-20">
              <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl animate-float" />

              <div className="relative text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to Start Your Project?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
                  Let&apos;s create something amazing together. Get in touch
                  with us today!
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                  <a
                    href="https://wa.me/917739100259?text=Hi%20Elite%20Solutions!%20I%20would%20like%20to%20discuss%20a%20project.%20Let's%20talk!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative overflow-hidden rounded-full bg-white px-10 py-4 font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Get Started
                    </span>
                  </a>
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
              </div>
              <p className="text-center text-xs text-gray-400 sm:text-sm">
                © {new Date().getFullYear()} Elite Solutions Agency. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
