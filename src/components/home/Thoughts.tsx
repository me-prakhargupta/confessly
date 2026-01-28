import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { items } from "@/feedback";
import Link from "next/link";

export default function Thoughts() {
  return (
    <main className="relative bg-black overflow-hidden">

      {/* Ambient warmth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-orange-300/8 blur-[160px]" />
      </div>

      {/* Heading */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 pt-24 pb-12 text-center">
        <h2 className="text-white font-medium tracking-tight text-2xl sm:text-3xl md:text-4xl">
          Others have put things down here
        </h2>

        <p className="mt-4 text-white/45 text-sm max-w-2xl mx-auto">
          Words left behind, without names or expectations.
        </p>
      </section>

      {/* Moving thoughts (grounded field) */}
      <section className="relative z-10 py-16">
        <div
          className="
            absolute inset-0 mx-6 sm:mx-10
            rounded-3xl
            bg-gradient-to-br
            from-white/[0.04]
            to-white/[0.01]
            backdrop-blur-xl
            border border-white/[0.06]
          "
        />

        <div className="relative space-y-10">
          <InfiniteMovingCards
            items={items.slice(0, 6)}
            speed="slow"
          />

          <InfiniteMovingCards
            items={items.slice(6)}
            direction="right"
            speed="slow"
            className="opacity-70"
          />
        </div>
      </section>

      {/* Reflection block — THE connector */}
      <section className="relative z-10 py-16 text-center">
        <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">
          If any of these feel close to home,
          <br />
          you’re not alone.
        </p>
      </section>



      {/* Invitation + CTA */}
      <section className="relative z-10 pb-28 flex flex-col items-center gap-4">
        <p className="text-white/40 text-sm">
          When you’re ready, there’s space for you too.
        </p>

        <Link
          href="/choose"
          className="
            inline-flex items-center justify-center
            rounded-full px-9 py-3.5
            text-sm
            bg-orange-400/90
            text-black
            hover:bg-orange-400
            transition
          "
        >
          Let it out
        </Link>

        <span className="text-white/30 text-xs">
          Take your time
        </span>
      </section>
    </main>
  );
}
