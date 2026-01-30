import Image from "next/image";

// Mock Data
const MOCK_USER = {
  username: "Aris",
  fullName: "Aris L. Rowan",
  status: "Trying to be kinder to myself.",
  confessions: [
    { id: "1", content: "Some days I feel fine, and some days I don’t know why I’m tired." },
    { id: "2", content: "I wish it was easier to talk about things without explaining myself." },
    { id: "3", content: "The silence here feels like a conversation I've been needing to have." },
    { id: "4", content: "Learning that it's okay to let go of things that weren't mine to carry in the first place." },
  ],
};

export default function PublicProfilePage() {
  const user = MOCK_USER;

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      
      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-orange-500/5 blur-[140px]" />
      </div>

      {/* Main container (same width as private profile) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-32">
        
        {/* Profile Header */}
        <header className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-16">
          
          {/* Avatar */}
          <div className="relative h-28 w-28 rounded-full p-[1px] bg-gradient-to-b from-orange-500/30 to-transparent">
            <div className="h-full w-full rounded-full overflow-hidden bg-stone-900 shadow-2xl">
              <Image
                src="/login.jpg"
                alt={user.username}
                width={112}
                height={112}
                className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
            </div>
          </div>

          {/* Names + status */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <span className="text-orange-500/60 text-[10px] uppercase tracking-[0.5em] font-black">
              Public Record
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
              {user.username}
            </h1>

            {/* Full name (new) */}
            <p className="text-stone-500 text-sm uppercase tracking-[0.3em]">
              {user.fullName}
            </p>

            {user.status && (
              <p className="text-stone-400 italic font-serif text-lg sm:text-xl opacity-80 mt-2">
                "{user.status}"
              </p>
            )}
          </div>
        </header>

        {/* Confessions grid */}
        <section className="columns-1 md:columns-2 gap-8 space-y-8">
          {user.confessions.map((confession) => (
            <article
              key={confession.id}
              className="
                break-inside-avoid
                rounded-[2rem]
                bg-zinc-900/10
                backdrop-blur-sm
                border border-white/[0.04]
                p-10
                hover:border-orange-500/20
                hover:bg-zinc-900/20
                transition-all duration-700
                group
              "
            >
              <p className="text-stone-300 text-lg leading-relaxed font-light tracking-tight">
                {confession.content}
              </p>
              <div className="mt-8 flex items-center gap-4 opacity-20 group-hover:opacity-50 transition-opacity">
                <div className="h-px w-8 bg-stone-500" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold">
                  Released Fragment
                </span>
              </div>
            </article>
          ))}
        </section>

        {/* Footer Action */}
        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-10">
          <button className="group flex flex-col items-center gap-6 text-stone-500 hover:text-orange-400 transition-all">
            <span className="text-xs uppercase tracking-[0.5em] font-bold">
              Send quiet support
            </span>
            <div className="relative w-px h-16 bg-gradient-to-b from-orange-500/40 to-transparent group-hover:h-24 transition-all duration-700">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-400 blur-sm animate-bounce opacity-0 group-hover:opacity-100" />
            </div>
          </button>
        </footer>

      </div>

      {/* Fixed vertical branding */}
      <div className="fixed left-8 bottom-12 opacity-5 hidden xl:block pointer-events-none">
        <p className="[writing-mode:vertical-rl] text-white tracking-[1.2em] text-[10px] uppercase font-black">
          THE OPEN ARCHIVE
        </p>
      </div>
    </main>
  );
}
