"use client";

export default function EmailButton() {
  const email = "utkarsh@chatbay.in";
  const emailUrl = `mailto:${email}?subject=Inquiry%20from%20Elite%20Solutions%20Website&body=Hi%20Elite%20Solutions,%0D%0A%0D%0AI%20am%20interested%20in%20your%20services.%20Please%20contact%20me%20at%20your%20earliest%20convenience.%0D%0A%0D%0AThank%20you!`;

  return (
    <a
      href={emailUrl}
      className="fixed bottom-44 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 animate-float"
      style={{ animationDelay: "1s" }}
      aria-label="Send us an email"
      title="Email: utkarsh@chatbay.in"
    >
      <svg
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>

      {/* Pulse ring effect */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
    </a>
  );
}
