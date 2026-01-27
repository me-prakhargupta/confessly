import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/10">

      
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.06),transparent_70%)]
          pointer-events-none
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">


        <p className="text-sm text-white/60">
          © 2026 <span className="text-white font-medium"><Link href="/">Confessly</Link></span>
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            { href: "/about", label: "About" },
            { href: "/blog", label: "Blogs" },
            { href: "/safety", label: "Safety" },
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
            { href: "/report", label: "Report" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                text-white/50
                hover:text-white
                transition-colors
                px-2 py-1
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
