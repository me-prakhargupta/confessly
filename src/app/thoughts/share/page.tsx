"use client";

import { useState } from "react";
import Link from "next/link";
import { shareThought } from "@/services/auth";
import { toast } from "sonner";

export default function ThoughtPage() {
  const [thought, setThought] = useState("");
  const [sharing, setSharing] = useState(false);

  const changeHandler = (value : string) => {
    setThought(value);
  }

  const shareHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!thought.trim()) {
      toast.error("Thought cannot be empty or contain only whitespace.");
      return;
    }

    setSharing(true);

    try {
      await shareThought(thought.trim());
      toast.success("Your thought has been shared. Thank you for sharing.");
      setThought("");
    } catch(err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setSharing(false);
    }
  };

  return (
    <main className="relative min-h-screen px-6 py-20 text-white bg-black overflow-hidden">

      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 h-[360px] w-[360px] rounded-full bg-orange-400/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-orange-300/8 blur-[140px]" />
      </div>

      <section className="relative z-10 max-w-xl mx-auto space-y-12">

        {/* Back */}
        <Link
          href="/choose"
          className="text-xs text-white/30 hover:text-white/50 transition"
        >
          ← Back
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-xl font-medium">
            Share it here
          </h1>

          <p className="text-sm text-white/55 leading-relaxed max-w-md">
            Sometimes it helps to put something down
            <br />
            where others might understand.
          </p>
        </header>

        <form onSubmit={shareHandler}>
        {/* Writing space */}
        <section className="space-y-4">
            <textarea
              name="thought"
              value={thought}
              onChange={(e) => changeHandler(e.target.value)}
              placeholder="Write what you want to leave behind…"
              rows={7}
              className="
                w-full
                rounded-2xl
                bg-white/5
                backdrop-blur-md
                px-6
                py-5
                text-sm
                text-white/80
                placeholder:text-white/30
                outline-none
                resize-none
                focus:bg-white/8
                transition"/>

            <p className="text-xs text-white/30">
              This will be shared without your name.
            </p>
          </section>

          {/* Action */}
          <section className="flex items-center justify-between pt-2">
            <span className="text-xs text-white/30">
              There’s no right way to write this.
            </span>

            <button type="submit"
              disabled={sharing || !thought.trim()}
              className="
                rounded-full
                px-7
                py-2.5
                text-sm
                bg-orange-400/90
                text-black
                hover:bg-orange-400
                disabled:opacity-40
                transition
                hover:cursor-pointer">
                {sharing ? "Sharing…" : "Share it here"}
            </button>
        </section>
        </form>
      </section>
    </main>
  );
}
