import Link from "next/link";

export default function ConfesslyDock() {
  return (
    <nav className="relative bg-zinc-950 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.10),transparent_70%)]"/>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 py-4 flex items-center justify-between">
        <div className="text-white font-semibold tracking-tight">Emptied</div>
        <Link href="/accounts/signin" className="relative inline-flex items-center justify-center px-7 py-2 rounded-full bg-zinc-950 text-white font-semibold  text-sm sm:text-base overflow-hidden transition-colors hover:bg-zinc-900">
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_80%_at_100%_0%,rgba(251,146,60,0.35),transparent_60%)]"/>

          <span className="relative z-10">Sign in</span>
        </Link>
      </div>
    </nav>
  );
}
