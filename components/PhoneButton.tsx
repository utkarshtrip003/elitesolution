"use client";

export default function PhoneButton() {
  const phoneNumber = "7394840630";
  const phoneUrl = `tel:+91${phoneNumber}`;

  return (
    <a
      href={phoneUrl}
      className="fixed bottom-28 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 animate-float"
      style={{ animationDelay: "0.5s" }}
      aria-label="Call us"
      title="Call: 7394840630"
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
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>

      {/* Pulse ring effect */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
    </a>
  );
}
