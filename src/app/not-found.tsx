"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden flex flex-col items-center justify-center px-6">
      
      {/* ATMOSPHERIC GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[500px] w-full bg-orange-500/[0.06] blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[300px] w-[300px] bg-white/[0.02] blur-[100px] rounded-full" />
      </div>

      <section className="relative z-10 max-w-xl w-full text-center space-y-8">
        
        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-orange-500/50 text-[10px] uppercase tracking-[0.5em] font-black">
              Error 404
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-orange-500/40 to-transparent" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white">
            This place is <span className="text-stone-400 italic font-serif font-medium">empty.</span>
          </h1>
        </header>

        {/* Messaging */}
        <div className="space-y-2">
          <p className="text-stone-400 text-lg sm:text-xl italic font-serif leading-relaxed">
            &ldquo;Whatever you were looking for isn’t here — and that’s okay.&rdquo;
          </p>
          <p className="text-stone-600 text-xs tracking-wide pt-4">
            You didn’t do anything wrong.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="
              group relative inline-flex items-center justify-center
              px-10 py-4 rounded-full
              bg-orange-500 text-black
              text-sm font-medium tracking-wide
              transition-all duration-300 hover:scale-105 active:scale-95
              hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]
            "
          >
            Begin again
          </Link>

          <Link
            href="/accounts/signup"
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              border border-white/10
              text-stone-400 text-sm font-medium tracking-wide
              transition-all duration-300
              hover:bg-white/[0.03] hover:text-white hover:border-white/20
            "
          >
            Start fresh
          </Link>
        </div>

        {/* GENTLE CONTACT REDIRECT */}
        <div className="pt-12">
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-2.5 text-stone-600 hover:text-stone-400 transition-colors duration-500"
          >
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.2em]">Still feeling lost? Reach out.</span>
          </Link>
        </div>
      </section>

      {/* BRANDING */}
      <div className="fixed left-8 bottom-12 opacity-5 hidden xl:block pointer-events-none">
         <p className="[writing-mode:vertical-rl] text-white tracking-[1.2em] text-[10px] uppercase font-black">
            LOST IN THE FIELD
         </p>
      </div>

    </main>
  );
}