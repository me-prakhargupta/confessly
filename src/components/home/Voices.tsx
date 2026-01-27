import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { items } from "@/feedback";
import Link from "next/link";

export default function Voices() {
  return (
    <main className="relative bg-zinc-950">
      <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-24 pb-16 text-center">
        <h2 className="text-white font-extrabold tracking-tight text-2xl sm:text-3xl md:text-5xl">Honest thoughts, shared{" "}<span className="relative inline-block"><span className="relative z-10">anonymously</span><span aria-hidden className="absolute left-0 right-0 -bottom-2 h-[0.45em] bg-orange-400/80 rounded-full blur-[1px]"/></span>
        </h2>

        <p className="mt-6 text-white/60 max-w-2xl mx-auto">Real confessions shared without names or profiles.</p>
      </section>

      <section className="pb-20">
        <InfiniteMovingCards items={items} speed="normal" />
      </section>

      <section className="pb-24 opacity-80">
        <InfiniteMovingCards items={items} direction="right" speed="slow" />
      </section>

      <section className="pb-28 flex flex-col items-center gap-4">
        <Link href="/choose" className="relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-zinc-950 text-white font-bold border border-orange-400/40 text-sm sm:text-base overflow-hidden transition-colors hover:bg-zinc-900"><span aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_80%_at_100%_0%,rgba(251,146,60,0.35),transparent_60%)]"/><span className="relative z-10">Confess safely</span></Link><span className="text-white/40 text-sm">No account required</span>
      </section>
    </main>
  );
}
