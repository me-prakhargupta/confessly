import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center md:justify-center gap-4 lg:border-t lg:border-zinc-400/50 bg-zinc-900">
      
      <div className="text-sm text-center md:text-left">
        <p className="text-sm text-white font-medium">&copy; 2026 Confessly</p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm ext-white font-medium">
        <Link href="/about" className="text-white/50 hover:text-white py-1.5 px-3">
          About
        </Link>
        <Link href="/blog" className="text-white/50 hover:text-white py-1.5 px-3">
          Blogs
        </Link>
        <Link href="/privacy" className="text-white/50 hover:text-white py-1.5 px-3">
          Privacy
        </Link>
        <Link href="/terms" className="text-white/50 hover:text-white py-1.5 px-3">
          Terms
        </Link>
        <Link href="/report" className="text-white/50 hover:text-white py-1.5 px-3">
          Report
        </Link>
      </div>

    </footer>
  );
}
