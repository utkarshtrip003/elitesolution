import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE_LEGAL_NAME,
  SITE_OWNER_EMAIL,
  SITE_OWNER_NAME,
  SITE_OWNER_PHONE_E164,
  SITE_OWNER_PHONE_LOCAL,
  siteCopyrightNotice,
} from "@/lib/site-owner";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_LEGAL_NAME} — operated by ${SITE_OWNER_NAME}.`,
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service",
    description: `Terms of Service for ${SITE_LEGAL_NAME}.`,
    url: "/terms-of-service",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-cream text-[#1A1A1A]">
      <nav className="sticky top-0 z-50 border-b-2 border-black bg-cream">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-[10px] font-black uppercase tracking-widest text-black/70 hover:text-black"
          >
            ← Back Home
          </Link>
          <span className="text-xs font-black uppercase tracking-wider">
            Legal
          </span>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-16 pb-24">
        <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-black md:text-5xl">
          Terms of Service
        </h1>
        <p className="mb-4 text-sm font-bold text-black/60">
          Last updated: May 10, 2026
        </p>
        <p className="mb-10 rounded-2xl border-2 border-black bg-white p-6 text-sm font-black uppercase tracking-wide text-black">
          {siteCopyrightNotice(year)}
        </p>

        <div className="space-y-6 text-base font-medium leading-relaxed text-black/80">
          <h2 className="mb-4 mt-12 border-b-2 border-black pb-2 text-2xl font-black uppercase text-black">
            Agreement
          </h2>
          <p>
            By accessing or using the website and services offered by{" "}
            <strong className="text-black">{SITE_LEGAL_NAME}</strong> (the
            &quot;Service&quot;), you agree to be bound by these Terms of
            Service. If you do not agree, do not use the Service.
          </p>

          <h2 className="mb-4 mt-12 border-b-2 border-black pb-2 text-2xl font-black uppercase text-black">
            Operator
          </h2>
          <p>
            The Service is owned and operated by{" "}
            <strong className="font-black text-black">{SITE_OWNER_NAME}</strong>
            .
          </p>

          <h2 className="mb-4 mt-12 border-b-2 border-black pb-2 text-2xl font-black uppercase text-black">
            Services
          </h2>
          <p>
            {SITE_LEGAL_NAME} provides digital marketing, web development, and
            related consulting services as described on this site. Specific
            deliverables, timelines, and fees are defined in a separate
            statement of work or contract where applicable.
          </p>

          <h2 className="mb-4 mt-12 border-b-2 border-black pb-2 text-2xl font-black uppercase text-black">
            Use of the Service
          </h2>
          <p>
            You agree to use the Service only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use of
            the Service. We may suspend or terminate access if we reasonably
            believe these terms have been violated.
          </p>

          <h2 className="mb-4 mt-12 border-b-2 border-black pb-2 text-2xl font-black uppercase text-black">
            Intellectual Property
          </h2>
          <p>
            Unless otherwise agreed in writing, materials, branding, and
            content on this site remain the property of {SITE_LEGAL_NAME} or
            its licensors. Client-specific deliverables are governed by the
            applicable project agreement.
          </p>

          <h2 className="mb-4 mt-12 border-b-2 border-black pb-2 text-2xl font-black uppercase text-black">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, {SITE_LEGAL_NAME} and{" "}
            {SITE_OWNER_NAME} shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use
            of the Service. Our total liability for any claim relating to the
            Service shall not exceed the amount you paid us for the specific
            service giving rise to the claim in the three months preceding the
            claim, or one hundred dollars (USD $100), whichever is greater.
          </p>

          <h2 className="mb-4 mt-12 border-b-2 border-black pb-2 text-2xl font-black uppercase text-black">
            Changes
          </h2>
          <p>
            We may update these Terms from time to time. The &quot;Last
            updated&quot; date will be revised when changes are posted.
            Continued use of the Service after changes constitutes acceptance of
            the revised Terms.
          </p>

          <h2 className="mb-4 mt-12 border-b-2 border-black pb-2 text-2xl font-black uppercase text-black">
            Contact
          </h2>
          <p>For questions about these Terms, contact:</p>
          <ul className="list-disc pl-6 font-bold text-black">
            <li>
              <span className="font-black">{SITE_OWNER_NAME}</span>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${SITE_OWNER_EMAIL}`}
                className="font-black underline decoration-2 underline-offset-2 hover:text-accent"
              >
                {SITE_OWNER_EMAIL}
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href={`tel:+${SITE_OWNER_PHONE_E164}`}
                className="font-black underline decoration-2 underline-offset-2 hover:text-accent"
              >
                +91 {SITE_OWNER_PHONE_LOCAL}
              </a>
            </li>
          </ul>

          <p className="pt-8 text-center text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
            <Link href="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </Link>
            <span className="mx-4">·</span>
            <span>{siteCopyrightNotice(year)}</span>
          </p>
        </div>
      </article>
    </div>
  );
}
