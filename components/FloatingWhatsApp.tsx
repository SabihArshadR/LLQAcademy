import { socialLinks, whatsappLink } from "@/lib/data";

export default function FloatingSocialLinks() {

  const directWhatsapp =
  "https://wa.me/923092910019?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20know%20more%20about%20your%20Quran%20classes.";

  return (
    <>

    <div className="fixed bottom-5 left-5 z-50 md:bottom-8 md:left-8">
      <a
        href={directWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2Zm0 18.15c-1.6 0-3.09-.43-4.38-1.19l-.31-.18-3 .79.8-2.93-.2-.3A8.15 8.15 0 1 1 20.15 12c0 4.5-3.65 8.15-8.14 8.15Zm4.47-6.11c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
        </svg>

        {/* Tooltip */}
        <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </div>

    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on WhatsApp"
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2Zm0 18.15c-1.6 0-3.09-.43-4.38-1.19l-.31-.18-3 .79.8-2.93-.2-.3A8.15 8.15 0 1 1 20.15 12c0 4.5-3.65 8.15-8.14 8.15Zm4.47-6.11c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
      <a
        href={socialLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on YouTube"
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-soft transition-transform hover:scale-105"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Facebook"
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-soft transition-transform hover:scale-105"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-soft transition-transform hover:scale-105"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
    </div>
    </>
  );
}
