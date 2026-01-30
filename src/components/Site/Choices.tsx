import Link from "next/link";

export default function Choices() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      
      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-orange-400/5 blur-[120px]" />
      </div>

      {/* Main container aligned with navbar/footer */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16">
        <div className="flex flex-col gap-12">

          {/* Header - wider so headline doesn’t compress */}
          <header className="max-w-2xl space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              How people{" "}
              <span className="text-orange-400/80 italic font-serif">
                put things down
              </span>
            </h2>
            <p className="text-stone-500 text-base sm:text-lg font-medium leading-relaxed">
              There’s no right way. Just what feels right in this moment.
            </p>
          </header>

          {/* Choices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* Card 1 */}
            <Link
              href="/thoughts/share"
              className="
                group relative rounded-3xl
                bg-zinc-900/20 backdrop-blur-sm
                border border-white/[0.05]
                p-8 sm:p-10
                transition-all duration-700
                hover:bg-zinc-900/40
                hover:border-orange-500/30
                flex flex-col justify-between
                min-h-[260px] sm:min-h-[300px]
              "
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  Leave it here
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed max-w-[260px]">
                  Release a thought into the collective silence where others might understand, without needing to respond.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-600 group-hover:text-white transition-colors">
                <span>Write</span>
                <div className="w-8 h-px bg-stone-800 group-hover:bg-orange-500 transition-all duration-700" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/to/send"
              className="
                group relative rounded-3xl
                bg-zinc-900/20 backdrop-blur-sm
                border border-white/[0.05]
                p-8 sm:p-10
                transition-all duration-700
                hover:bg-zinc-900/40
                hover:border-orange-500/30
                flex flex-col justify-between
                min-h-[260px] sm:min-h-[300px]
              "
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  Say it to one person
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed max-w-[260px]">
                  Sometimes a message is meant for specific eyes only — a direct release without the noise of conversation.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-600 group-hover:text-white transition-colors">
                <span>Send</span>
                <div className="w-8 h-px bg-stone-800 group-hover:bg-orange-500 transition-all duration-700" />
              </div>
            </Link>

          </div>

          {/* Bottom balance */}
          <div className="flex flex-col items-center pt-6 opacity-20">
            <p className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-4">
              Choose your path
            </p>
            <div className="w-px h-20 bg-gradient-to-b from-orange-500 to-transparent" />
          </div>

        </div>
      </section>
    </main>
  );
}
