import Link from "next/link";

export default function Safety() {
  return (
    <section className="relative w-full bg-zinc-950 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(251,146,60,0.08),transparent_60%)]"/>
      <div className="relative z-10">
        <section className="w-full py-28 flex justify-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white mb-6">A safe place to say what you can’t say out loud</h2>
            <p className="text-white/60 leading-relaxed">Confessly is built for moments when honesty feels heavy. No profiles. No pressure. Just a quiet space to speak — anonymously and without judgment.</p>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <section className="w-full py-24 flex justify-center">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-orange-400 font-semibold mb-2">01</p>
              <p className="text-white font-medium">Write freely</p>
              <p className="text-white/50 text-sm mt-2">Share what’s on your mind without filters.</p>
            </div>

            <div>
              <p className="text-orange-400 font-semibold mb-2">02</p>
              <p className="text-white font-medium">Stay anonymous</p>
              <p className="text-white/50 text-sm mt-2">No names, no profiles, no identity.</p>
            </div>

            <div>
              <p className="text-orange-400 font-semibold mb-2">03</p>
              <p className="text-white font-medium">Let it go</p>
              <p className="text-white/50 text-sm mt-2">Some thoughts just need to be said.</p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <section className="w-full py-24 flex justify-center">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-white font-medium">No accounts required</p>
              <p className="text-white/50 text-sm mt-2">
                You don’t need to sign up to speak.</p>
            </div>

            <div>
              <p className="text-white font-medium">No identity stored</p>
              <p className="text-white/50 text-sm mt-2">Messages aren’t tied to personal data.</p>
            </div>

            <div>
              <p className="text-white font-medium">Designed for privacy</p>
              <p className="text-white/50 text-sm mt-2">
                Built with anonymity as the default.</p>
            </div>
          </div>
        </section>

        <section className="w-full py-32 flex justify-center text-center">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">Ready when you are</h2>
            <p className="text-white/60 mb-8">Say what you’ve been holding in.</p>
            <Link href="choose" className="inline-block rounded-xl bg-orange-400 text-black px-8 py-3 font-medium hover:opacity-90 transition">Start confessing</Link>
          </div>
        </section>
      </div>
    </section>
  );
}
