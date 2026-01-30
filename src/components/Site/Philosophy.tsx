import Link from "next/link";

export default function Philosophy() {
  return (
    <section className="relative bg-black overflow-hidden">
      
      {/* Main aligned container (same as navbar & hero) */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-24 sm:pt-28 pb-24 sm:pb-28">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-stone-500 text-[10px] uppercase tracking-[0.5em] font-bold mb-6">
            The Philosophy
          </h2>
          <h3 className="text-white font-extrabold tracking-tight text-4xl sm:text-5xl leading-[1.1]">
            A space built for <br />
            <span className="text-orange-400/80 italic font-serif">
              internal release.
            </span>
          </h3>
          <p className="mt-6 text-stone-400 text-base sm:text-lg leading-relaxed">
            Quietism isn't a social network. It's a final destination for the things you've been carrying. No profiles, no likes, no noise.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {[
            { 
              title: "Say it as it is", 
              desc: "Don't worry about grammar or sense. Just let the words fall onto the screen exactly as they are in your head." 
            },
            { 
              title: "No one is watching", 
              desc: "There is no 'audience' here. Your thoughts aren't tied to your identity. They are just words in the wind." 
            },
            { 
              title: "Leave it here", 
              desc: "The goal isn't to start a conversation. The goal is to finish one you've been having with yourself." 
            }
          ].map((pillar, i) => (
            <div key={i} className="group space-y-4">
              <div className="w-8 h-[1px] bg-orange-500/40 group-hover:w-16 transition-all duration-700" />
              <h4 className="text-white font-bold text-xl">
                {pillar.title}
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quiet Reassurances box */}
        <div className="p-8 sm:p-14 rounded-[36px] bg-zinc-900/10 border border-white/[0.05] backdrop-blur-sm relative overflow-hidden">
          
          {/* Inner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-5">
              <h4 className="text-white font-bold text-xl sm:text-2xl tracking-tight">
                Designed to be invisible.
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                We stripped away everything that causes digital anxiety. There are no notifications to pull you back in, and no sign-ups required to begin.
              </p>
            </div>
            
            <div className="flex flex-col justify-end">
              <ul className="space-y-4">
                {[
                  "No persistent identity",
                  "No feedback loops",
                  "No digital footprint"
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-stone-500 text-xs uppercase tracking-widest font-bold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Large background word (purely decorative, viewport-centered) */}
<div className="absolute left-1/2 -translate-x-1/2 bottom-20 opacity-[0.03] select-none pointer-events-none">
  <span className="text-[20vw] font-black tracking-tighter text-white">
    RELEASE
  </span>
</div>


    </section>
  );
}
