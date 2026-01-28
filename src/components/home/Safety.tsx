import Link from "next/link";

export default function Safety() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-orange-300/8 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-24 py-24">

        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-medium">
            When something feels hard to hold
          </h2>

          <p className="text-sm text-white/55 leading-relaxed">
            Sometimes you just need somewhere to put what you’ve been carrying.
          </p>
        </section>

        {/* Core truths */}
        <section
          className="
            grid grid-cols-1 md:grid-cols-3
            gap-10
            rounded-3xl
            bg-gradient-to-br
            from-white/[0.05]
            to-white/[0.015]
            backdrop-blur-xl
            border border-white/[0.08]
            px-8 py-10
            text-center
          "
        >
          <div className="space-y-2">
            <p className="text-white font-medium">Say it as it is</p>
            <p className="text-sm text-white/45">
              However it comes out is okay.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white font-medium">No one is watching</p>
            <p className="text-sm text-white/45">
              This stays between you and the page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white font-medium">Leave it here</p>
            <p className="text-sm text-white/45">
              You don’t have to take it back with you.
            </p>
          </div>
        </section>

        {/* Quiet reassurances */}
        <section
          className="
            grid grid-cols-1 md:grid-cols-3
            gap-10
            text-center
          "
        >
          <div className="space-y-2">
            <p className="text-white/70 font-medium">
              No sign-up needed
            </p>
            <p className="text-sm text-white/40">
              You can begin without creating anything.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white/70 font-medium">
              Nothing tied to you
            </p>
            <p className="text-sm text-white/40">
              What you write isn’t connected to an identity.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white/70 font-medium">
              Built to be quiet
            </p>
            <p className="text-sm text-white/40">
              No prompts, no pressure, no expectations.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-medium">
            Ready when you are
          </h2>

          <p className="text-sm text-white/55">
            You can take as long as you need.
          </p>

          <Link
            href="/choose"
            className="
              inline-flex items-center justify-center
              rounded-full
              px-9 py-3.5
              text-sm
              bg-orange-400/90
              text-black
              hover:bg-orange-400
              transition
            "
          >
            Let it out
          </Link>
        </section>

      </div>
    </main>
  );
}
