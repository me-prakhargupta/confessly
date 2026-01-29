import Link from "next/link";

export default function ConfesslyDock() {
  return (
    <nav className="relative bg-zinc-950 overflow-hidden">
      {/* warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.10),transparent_70%)]"
      />

      {/* bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-10 py-3 sm:py-4 flex items-center justify-between">

        {/* Left: text logo */}
        <Link href="/" className="group flex items-center">
          <span className="
            text-white 
            text-lg sm:text-xl 
            font-bold 
            tracking-[0.08em] sm:tracking-[0.1em] 
            transition-colors duration-200 
            group-hover:text-orange-400
          ">
            Emptied
          </span>
        </Link>

        {/* Right: actions */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Sign in - primary */}
          <Link
            href="/accounts/signin"
            className="
              relative inline-flex items-center justify-center
              px-4 sm:px-7 py-2
              min-w-[84px] sm:min-w-[110px]
              rounded-full
              bg-zinc-950 text-white
              font-semibold text-sm
              overflow-hidden
              transition-all hover:bg-zinc-900
              border border-white/10
            "
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_80%_at_100%_0%,rgba(251,146,60,0.35),transparent_60%)] opacity-70"
            />
            <span className="relative z-10">Sign in</span>
          </Link>

          {/* Sign up - secondary */}
          <Link
            href="/accounts/signup"
            className="
              inline-flex items-center justify-center
              px-4 sm:px-6 py-2
              min-w-[84px] sm:min-w-[100px]
              rounded-full
              text-sm font-medium
              text-white/80
              border border-white/10
              bg-white/5
              hover:bg-white/10 hover:text-white
              transition
            "
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
