import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      
      {/* Soft, low-intensity glow at the bottom center */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/5 blur-[100px] rounded-full"
      />

      {/* Narrower container to match navbar */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center">
          
          {/* 1. Main Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10">
            {[
              "About",
              "Contact",
              "Privacy",
              "Terms",
              "Report",
              "Safety",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[11px] tracking-[0.2em] text-stone-500 hover:text-stone-200 transition-colors duration-500"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* 2. Brand Identity */}
          <div className="flex flex-col items-center space-y-3">
            <Link href="/" className="group">
              <span className="text-white font-extrabold text-lg sm:text-xl tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                Quietism
              </span>
            </Link>

            <div className="h-8 w-px bg-gradient-to-b from-stone-800 to-transparent" />
          </div>

          {/* 3. Secondary Info */}
          <div className="mt-8 w-full flex flex-col md:flex-row items-center justify-between text-[10px] text-stone-600 tracking-widest">
            <p className="order-2 md:order-1 mt-4 md:mt-0 text-center md:text-left">
              © 2026 — All rights reserved
            </p>

            <div className="order-1 md:order-2 flex items-center gap-2">
              <span className="opacity-50">Presence</span>
              <Link
                href="https://instagram.com/emptied.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-orange-400/70 transition-colors"
              >
                @quietism.in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
