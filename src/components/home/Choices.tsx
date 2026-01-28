import Link from "next/link";

export default function Choices() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center px-6">
{/* <p className="font-extrabold text-xl">Prakhar</p> */}
      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 h-[380px] w-[380px] rounded-full bg-orange-400/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-orange-300/8 blur-[140px]" />
      </div>

      <section className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-16 py-16">

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-medium">
            How people put things down
          </h2>
          <p className="text-sm text-white/55">
            There’s no right way. Just what feels right.
          </p>
        </header>

        {/* Choices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div
            className="
              group
              rounded-3xl
              bg-gradient-to-br
              from-white/[0.06]
              to-white/[0.015]
              backdrop-blur-xl
              border border-white/[0.08]
              p-8 sm:p-10
              transition
              hover:border-orange-400/30
              hover:translate-y-[-2px]
            "
          >
            <h3 className="text-lg sm:text-xl font-medium mb-3">
              Leave it here
            </h3>

            <p className="text-sm text-white/55 mb-6 leading-relaxed">
              Sometimes it helps to put something down where others might understand.
            </p>

            <Link
              href="/thoughts/share"
              className="text-sm text-orange-400 hover:underline"
            >
              Write →
            </Link>
          </div>

          {/* Card 2 */}
          <div
            className="
              group
              rounded-3xl
              bg-gradient-to-br
              from-white/[0.06]
              to-white/[0.015]
              backdrop-blur-xl
              border border-white/[0.08]
              p-8 sm:p-10
              transition
              hover:border-orange-400/30
              hover:translate-y-[-2px]
            "
          >
            <h3 className="text-lg sm:text-xl font-medium mb-3">
              Say it to one person
            </h3>

            <p className="text-sm text-white/55 mb-6 leading-relaxed">
              Sometimes it’s meant for someone specific — without starting a conversation.
            </p>

            <Link
              href="/to/send"
              className="text-sm text-orange-400 hover:underline"
            >
              Send →
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
