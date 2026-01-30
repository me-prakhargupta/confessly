import { items } from "@/feedback"; // Assuming this is your data source

export default function TheField() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-white font-extrabold tracking-tight text-4xl sm:text-5xl leading-[1.1]">
            The <span className="text-orange-400/80 italic font-serif">Communal Silence.</span>
          </h2>
          <p className="mt-6 text-stone-500 text-lg">
            A collective of weightless words. Read them as they are—without the need to respond.
          </p>
        </div>

        {/* Masonry Grid - Stillness */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.slice(0, 9).map((item, idx) => (
            <div
              key={idx}
              className="
                break-inside-avoid
                rounded-3xl
                bg-zinc-900/10
                backdrop-blur-sm
                border border-white/[0.03]
                p-8
                transition-all
                duration-700
                hover:border-orange-500/20
                hover:bg-zinc-900/30
                group
              "
            >
              <p className="text-stone-300 text-sm leading-relaxed italic font-serif opacity-80 group-hover:opacity-100 transition-opacity">
                "{item.quote}"
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-600 font-bold">
                  Released
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500/20 group-hover:bg-orange-500/50 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}