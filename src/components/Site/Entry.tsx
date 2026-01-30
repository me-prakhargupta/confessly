import Link from "next/link";

export default function Entry() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-start lg:justify-center py-5 sm:py-0">
      
      {/* Background elements */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(251,146,60,0.08),transparent_70%)] pointer-events-none" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      {/* Main container aligned with navbar width */}
      <div
        className="
          relative z-10 w-full max-w-5xl mx-auto
          px-4 sm:px-6
          pt-24 sm:pt-28 lg:pt-32   /* always below fixed navbar */
          pb-16 sm:pb-20
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          {/* Left content */}
          <div className="flex flex-col">
            
            <h1 className="text-white font-extrabold tracking-tighter leading-[0.95] text-5xl sm:text-7xl lg:text-8xl">
              Not{" "}
              <span className="text-orange-500 italic font-serif font-normal tracking-normal">
                everything
              </span>{" "}
              needs to
              <br />
              be carried.
            </h1>

            {/* Taglines */}
            <div className="mt-10 space-y-6 max-w-xl">
              <h2 className="text-white/90 font-medium tracking-tight leading-tight text-xl sm:text-2xl md:text-3xl">
                Some thoughts were never meant to be{" "}
                <span className="text-orange-100 italic font-serif">kept.</span>
              </h2>

              <p className="text-stone-500 text-sm md:text-base font-light leading-relaxed tracking-wide">
                This is a final destination for the words you've been repeating in your head.
                Put them down here, and{" "}
                <span className="text-stone-400 italic">
                  leave the room a little lighter.
                </span>
              </p>

              {/* extra philosophical line */}
              <p className="text-stone-600 text-xs md:text-sm italic">
                What is released no longer asks to be remembered.
              </p>
            </div>

            {/* CTA area */}
            <div
              className="
                mt-12
                flex flex-col gap-8
                lg:flex-row lg:items-center lg:gap-12
              "
            >
              {/* Button */}
              <Link
                href="/choose"
                className="
                  inline-flex items-center justify-center
                  px-12 py-5 rounded-full
                  bg-white text-black font-bold text-lg
                  transition-all duration-500
                  hover:scale-105 active:scale-95
                  shadow-[0_0_40px_rgba(251,146,60,0.15)]
                "
              >
                Begin
              </Link>

              {/* Small parallel note */}
              <div className="lg:border-l border-stone-800 lg:pl-8 space-y-1">
                <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                  Presence
                </p>
                <p className="text-orange-500/80 text-xs font-medium italic font-serif">
                  The air is clear for you.
                </p>
              </div>
            </div>
          </div>

          {/* Right column branding (desktop only) */}
          <div className="hidden lg:flex flex-col items-end relative min-h-[400px]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10 opacity-15">
              <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
              <p className="[writing-mode:vertical-rl] text-stone-300 tracking-[1em] text-[10px] uppercase font-black">
                THE UNBURDENING
              </p>
              <div className="w-[1px] h-32 bg-gradient-to-t from-transparent via-orange-500 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
