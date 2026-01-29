import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-black overflow-hidden">

      {/* Base ambient warmth */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_25%_20%,rgba(251,146,60,0.10),transparent_65%)]
          pointer-events-none
        "
      />

      {/* Chair image layer (atmosphere, not content) */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-no-repeat
          bg-right
          bg-contain
          opacity-35
          blur-[2px]
          pointer-events-none
        "
      />

      {/* Dark fade to protect text */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black via-black/90 to-black/40
          pointer-events-none
        "
      />

      {/* Subtle texture (kept very light) */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.10)_1px,transparent_0)]
          [background-size:24px_24px]
          opacity-20
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[85vh]">
        <div className="mx-auto max-w-6xl w-full px-6 sm:px-10 grid grid-cols-1 md:grid-cols-[65%_35%] gap-14 items-center">

          <div>
            <h1 className="text-white font-extrabold tracking-tight leading-[1.15] text-4xl sm:text-5xl md:text-6xl">
              Not{" "}
              <span className="relative inline-block">
                <span className="relative z-10">everything</span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-2 h-[0.55em] bg-orange-400/80 rounded-full blur-[1px]"
                />
              </span>{" "}
              needs to
              <br />
              be carried.
            </h1>

            <h2 className="mt-6 sm:mt-10 text-white font-bold tracking-tight leading-[1.15] text-2xl sm:text-3xl md:text-4xl">
              You don’t have to hold this by{" "}
              <span className="relative inline-block">
                <span className="relative z-10">yourself</span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-2 h-[0.55em] bg-orange-300/70 rounded-full blur-[2px]"
                />
              </span>.
            </h2>

            <div className="mt-12 flex items-center gap-6">
              <Link
                href="/choose"
                className="
                  relative
                  inline-flex
                  items-center
                  justify-center
                  px-10
                  py-5
                  rounded-full
                  bg-zinc-950
                  text-white
                  font-bold
                  text-sm sm:text-base
                  overflow-hidden
                  transition-colors
                  hover:bg-zinc-900
                "
              >
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-full
                    bg-[radial-gradient(120%_80%_at_100%_0%,rgba(251,146,60,0.35),transparent_60%)]
                  "
                />
                <span className="relative z-10">Begin</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom warmth */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute right-[-20%] bottom-[-30%]
          w-[600px] h-[600px]
          rounded-full
          bg-orange-400/10
          blur-[120px]
        "
      />
    </section>
  );
}
