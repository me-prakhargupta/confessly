import Link from "next/link";
import Image from "next/image";

type PrivateProfileProps = {
  username: string;
  src: string;
};

export default function PrivateProfilePage({ username, src }: PrivateProfileProps) {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      
      {/* Navbar Spacer */}
      <div className="h-32 sm:h-40 w-full shrink-0" />

      {/* Deep Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <section className="relative z-10 w-full px-6 sm:px-10 flex-grow flex items-center">
        <div className="mx-auto max-w-5xl w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr] gap-16 md:gap-24 items-center">
            
            {/* Left: The Fading Artifact */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative h-48 w-48 md:h-64 md:w-64">
                {/* Decorative "Aura" */}
                <div className="absolute -inset-4 border border-white/5 rounded-full animate-[pulse_8s_infinite]" />
                <div className="absolute -inset-8 border border-white/[0.02] rounded-full animate-[pulse_12s_infinite]" />
                
                <div className="h-full w-full rounded-full overflow-hidden grayscale contrast-125 opacity-40 mix-blend-screen transition-opacity duration-1000 hover:opacity-60">
                  <Image
                    src={src}
                    alt={username}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: The Message */}
            <div className="flex flex-col space-y-8 text-center md:text-left">
              <div className="space-y-2">
                <span className="text-orange-500/60 text-[10px] uppercase tracking-[0.5em] font-black">
                  Inner Sanctum
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                  {username}
                </h1>
              </div>

              <div className="max-w-md space-y-6">
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                  This space is <span className="text-orange-400 italic font-serif">present</span>, but not yet <span className="text-orange-400 italic font-serif">open.</span>
                </h2>
                <p className="text-stone-500 text-lg leading-relaxed font-light">
                  Some thoughts require a deeper silence before they can be released to the field. 
                  Return when the air feels different.
                </p>
              </div>

              <div className="pt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-4 group"
                >
                  <div className="w-12 h-px bg-stone-800 group-hover:w-20 group-hover:bg-orange-500 transition-all duration-700" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-stone-600 group-hover:text-white transition-colors">
                    Back to the collective
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <div className="p-10 opacity-20">
        <p className="text-[10px] tracking-[1em] uppercase text-stone-500">
          Private Correspondence
        </p>
      </div>

    </main>
  );
}