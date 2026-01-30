import Link from "next/link";

export default function FinalThreshold() {
  return (
    <section className="relative bg-black pt-32 pb-48 overflow-hidden">
      {/* Decorative vertical line leading into the footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-orange-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 flex flex-col items-center text-center">
        
        <div className="space-y-6 max-w-xl">
          <h2 className="text-white font-extrabold tracking-tight text-4xl sm:text-6xl">
            Ready to <span className="text-orange-400/80 italic font-serif">exhale?</span>
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-medium leading-relaxed">
            You’ve carried these words long enough. <br />
            Leave them here and walk away a bit lighter.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Link
            href="/choose"
            className="
              group relative px-16 py-6 rounded-full bg-white text-black font-black text-xl
              transition-all duration-500 hover:scale-105 active:scale-95
              shadow-[0_0_50px_rgba(251,146,60,0.2)]
            "
          >
            Begin the Release
            <div className="absolute inset-0 rounded-full bg-orange-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />
          </Link>
          
          <p className="text-stone-600 text-xs uppercase tracking-[0.5em] font-bold">
            No registration. No trace.
          </p>
        </div>

        {/* Ambient background glow for the exit */}
        <div 
          aria-hidden 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/5 blur-[120px] rounded-[100%] pointer-events-none" 
        />
      </div>
    </section>
  );
}