import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-zinc-950 overflow-hidden">
      <div aria-hidden className=" absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_70%)]pointer-events-none"/>

      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)][background-size:24px_24px] opacity-30 pointer-events-none"/>

      <div className="relative z-10 flex items-center min-h-[85vh]">
        <div className="mx-auto max-w-6xl w-full px-6 sm:px-10 grid grid-cols-1 md:grid-cols-[70%_30%] gap-14 items-center">

          <div>
            <h1 className="text-white font-extrabold tracking-tight leading-[1.15] text-4xl sm:text-5xl md:text-6xl">“Some{" "}
              <span className="relative inline-block">
                <span className="relative z-10">thoughts</span>
                <span aria-hidden className="absolute left-0 right-0 -bottom-2 h-[0.55em] bg-orange-400/80 rounded-full blur-[1px]"/></span>{" "}deserve a<br />safe place.”
            </h1>

            <h1 className="mt-4 text-white font-extrabold tracking-tight leading-[1.15] text-4xl sm:text-5xl md:text-6xl">
              Confess them{" "}<span className="relative inline-block"><span className="relative z-10">here</span><span aria-hidden className="absolute left-0 right-0 -bottom-2 h-[0.55em] bg-orange-300/70 rounded-full blur-[2px]"/></span>
            </h1>

            <p className="mt-8 text-white/60 text-lg max-w-xl">
              Share what you can’t say out loud — anonymously and safely.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <Link href="/choose" className="relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-zinc-950 text-white font-bold border border-orange-400/40 text-sm sm:text-base overflow-hidden transition-colors hover:bg-zinc-900"><span aria-hidden className=" pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_80%_at_100%_0%,rgba(251,146,60,0.35),transparent_60%)]"/><span className="relative z-10">Start confessing</span></Link>
              <span className="text-white/50 text-sm">No account required</span>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute right-[-20%] bottom-[-30%] w-[600px] h-[600px] rounded-full bg-orange-400/10 blur-[120px]"/>
    </section>
  );
}
