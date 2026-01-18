// SEO Configuration and Utilities

export const siteConfig = {
  name: "Elite Solutions",
  title: "Elite Solutions - Creative Digital Agency",
  description: "We build high-performance web experiences and drive growth through strategic social media advertising. Expert web development, Google Ads, and social media marketing services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://elitesolutions.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "web development",
    "digital marketing",
    "Google Ads",
    "social media marketing",
    "creative agency",
    "SEO optimization",
    "Next.js development",
    "React development",
    "performance marketing"
  ],
  author: "Elite Solutions",
  creator: "Elite Solutions Agency",
  publisher: "Elite Solutions",
  locale: "en_US",
  type: "website",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "US"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: "English"
  },
  sameAs: [
    "https://facebook.com/elitesolutions",
    "https://twitter.com/elitesolutions",
    "https://linkedin.com/company/elitesolutions",
    "https://instagram.com/elitesolutions"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name
  }
};

export function generateStructuredData(type: "organization" | "website" | "article", customData?: any) {
  const baseSchema = type === "organization" ? organizationSchema : websiteSchema;
  
  return {
    ...baseSchema,
    ...customData
  };
}

