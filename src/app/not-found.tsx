"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-950 px-6">
      <div className="max-w-xl w-full text-center">

        {/* Soft glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(251,146,60,0.08),transparent_60%)]"
        />

        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          This place is empty.
        </h1>

        <p className="text-white/60 mb-2">
          Whatever you were looking for isn’t here —
          and that’s okay.
        </p>

        <p className="text-white/40 text-sm mb-10">
          You didn’t do anything wrong.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary */}
          <Link
            href="/"
            className="
              relative inline-flex items-center justify-center
              px-8 py-4 rounded-full
              bg-zinc-950 text-white/90
              font-medium text-sm sm:text-base
              overflow-hidden
              transition
              hover:bg-zinc-900
            "
          >
            <span
              aria-hidden
              className="
                pointer-events-none absolute inset-0 rounded-full
                bg-[radial-gradient(120%_80%_at_100%_0%,rgba(251,146,60,0.25),transparent_65%)]
              "
            />
            <span className="relative z-10">Go back home</span>
          </Link>

          {/* Secondary */}
          <Link
            href="/accounts/signup"
            className="
              inline-flex items-center justify-center
              px-8 py-4 rounded-full
              border border-white/20
              text-white/70
              text-sm sm:text-base
              transition
              hover:bg-zinc-900
            "
          >
            Start fresh
          </Link>
        </div>
      </div>
    </section>
  );
}
