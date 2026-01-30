import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center sm:py-15">
      
      {/* Ambient warm gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[130%] h-[55%] bg-orange-500/[0.08] blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[55%] h-[45%] bg-orange-400/[0.05] blur-[130px] rounded-full" />
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-white/[0.03] blur-[100px] rounded-full" />
      </div>

      {/* Centered content column */}
      <section
        className="
          relative z-10
          w-full max-w-xl px-6 pb-16
          pt-28 sm:pt-0            /* top space only for small screens (toast) */
          flex-1
          flex flex-col
          justify-start sm:justify-center
          space-y-10
        "
      >
        {/* Intro */}
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-500/60 font-black">
            Correspondence
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Speak{" "}
            <span className="text-orange-400/80 italic font-serif">
              openly.
            </span>
          </h1>

          <p className="text-sm text-white/50 leading-relaxed max-w-md mx-auto">
            A quiet channel for questions, reflections, or words that don’t
            belong anywhere else.
          </p>
        </header>

        {/* Form */}
        <form className="space-y-8">
          
          {/* Identity */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.4em] text-white/40">
              Identity
            </label>
            <input
              type="text"
              placeholder="Mobile number or email"
              className="
                w-full
                rounded-xl
                bg-white/[0.05]
                border border-white/[0.08]
                px-5 py-3.5
                text-sm
                text-white/90
                placeholder:text-white/35
                outline-none
                focus:border-orange-400/40
                focus:bg-white/[0.07]
                transition
              "
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.4em] text-white/40">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write what you need to say…"
              className="
                w-full
                rounded-2xl
                bg-white/[0.05]
                border border-white/[0.08]
                px-5 py-4
                text-sm
                text-white/90
                placeholder:text-white/35
                outline-none
                resize-none
                focus:border-orange-400/40
                focus:bg-white/[0.07]
                transition
              "
            />
            <p className="text-xs text-white/30">
              This arrives quietly, without echo.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-white/30 text-center sm:text-left">
              Take your time. Nothing here is rushed.
            </span>

            <button
              type="submit"
              className="
                w-full sm:w-auto
                rounded-full
                px-8 py-3
                text-sm font-semibold
                bg-orange-400 text-black
                hover:bg-orange-300
                hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]
                transition
                active:scale-[0.98]
                cursor-pointer
              "
            >
              Send letter
            </button>
          </div>
        </form>

        {/* Quiet contact line */}
        <div className="pt-6 border-t border-white/5 text-center text-xs text-white/30">
          Or reach directly at{" "}
          <a
            href="mailto:founder@emptied.in"
            className="text-white/60 hover:text-orange-400 transition"
          >
            founder@emptied.in
          </a>{" "}
          ·{" "}
          <Link
            href="https://instagram.com/emptied.in"
            className="text-white/60 hover:text-orange-400 transition"
          >
            Instagram
          </Link>
        </div>
      </section>
    </main>
  );
}
