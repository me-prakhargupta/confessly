import Link from "next/link";

export default function Options() {
    return(
        <section className="relative w-full min-h-screen py-32 flex justify-center bg-zinc-950 overflow-hidden">

          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(251,146,60,0.08),transparent_60%)]"/>
          
          <div className="relative z-10 w-full max-w-5xl px-4">
            <div className="w-full flex justify-center mb-16">
              <div className="max-w-3xl text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">How you can use Confessly</h2>
                <p className="text-white/60">Choose how you want to share — with everyone, or with someone specific.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className=" rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-[2px] p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Share with everyone</h3>
                <p className="text-white/60 mb-6">Post a confession, thought, or feeling anonymously. No profile. No identity. Just honesty.</p>
                <Link href="/confess" className="inline-block text-orange-400 hover:underline">Write a confession →</Link>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-[2px] p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Say it to someone specific</h3>
                <p className="text-white/60 mb-6">If you know their username, send a private message anonymously — they’ll never know it’s you.</p>
                <Link href="/messages/send" className="inline-block text-orange-400 hover:underline">Send a private message →</Link>
              </div>
            </div>
          </div>
        </section>
    );
}