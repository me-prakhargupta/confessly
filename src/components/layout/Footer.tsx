import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/10">
      {/* glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.06),transparent_70%)] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Brand */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-white/60">
              Copyright © 2026{" "}
              <Link
                href="/"
                className="text-white font-extrabold tracking-[0.05em] transition-colors duration-300"
              >
                Emptied
              </Link>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-sm lg:justify-start">
            {[
              "About",
              "Contact",
              "Safety",
              "Privacy",
              "Terms",
              "Report",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white/50 hover:text-white transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="text-center lg:text-right">
            <span className="text-sm text-white/40">Building </span>
            <Link
              href="https://instagram.com/emptied.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white/70 transition"
            >
              @emptied.in
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
