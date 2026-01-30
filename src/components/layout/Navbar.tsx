import Link from "next/link";

export default function ConfesslyDock() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-md border-b border-white/[0.05]">
      
      {/* Subtle warm radial glow concentrated at the center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.08),transparent_75%)]"
      />

      {/* Narrower container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Left: Text Logo */}
        <Link href="/" className="group flex items-center">
          <span className="
            text-white 
            text-lg sm:text-xl
            font-extrabold 
            tracking-tighter
            transition-all duration-300 
            group-hover:tracking-normal
            group-hover:text-orange-400
          ">
            Quietism
          </span>
          <span className="ml-1 w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Sign in */}
          <Link
            href="/accounts/signin"
            className="
              inline-flex items-center justify-center
              px-4 sm:px-5 py-2
              rounded-full
              text-stone-300
              font-semibold text-sm
              transition-all duration-300
              hover:text-white
              hover:bg-white/5
            "
          >
            Sign in
          </Link>

          {/* Sign up */}
          <Link
            href="/accounts/signup"
            className="
              inline-flex items-center justify-center
              px-4 sm:px-6 py-2
              rounded-full
              text-sm font-bold
              text-white
              bg-zinc-900
              border border-white/10
              hover:border-orange-500/50
              hover:bg-zinc-800
              transition-all duration-500
              shadow-[0_0_20px_rgba(0,0,0,0.5)]
            "
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
