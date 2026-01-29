"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SendToUserPage() {
  const { username } = useParams<{ username: string }>();
  const router = useRouter();

  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  const sendMessage = async () => {
    if (!content.trim()) return;

    setSending(true);

    // 🔒 Backend call comes later
    // await fetch(`/api/message/${username}`, { ... })

    setTimeout(() => {
      setSending(false);
      router.push("/me");
    }, 800);
  };

  return (
    <main className="relative min-h-screen px-6 py-16 text-white bg-black overflow-hidden">

      {/* Ambient calm */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-[320px] w-[320px] rounded-full bg-orange-400/8 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-orange-300/6 blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-xl mx-auto space-y-10">

        {/* Back */}
        {/* <Link
          href="/me"
          className="text-xs text-white/30 hover:text-white/50 transition"
        >
          ← Back to your space
        </Link> */}

        {/* Context */}
        <header className="space-y-3">
          <h1 className="text-lg font-medium">
            Write to <span className="text-white/80"><Link href={`/u/${username}`}>@{username}</Link></span>
          </h1>

          <p className="text-sm text-white/50 leading-relaxed">
            This will be sent without your name.
            <br />
            Say only what feels safe to release.
          </p>
        </header>

        {/* Textarea */}
        <section className="space-y-3">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type what you want to say…"
            rows={6}
            className="
              w-full
              rounded-xl
              bg-white/5
              backdrop-blur-md
              px-5
              py-4
              text-sm
              text-white/80
              placeholder:text-white/30
              outline-none
              resize-none
              focus:bg-white/8
              transition
            "
          />

          <p className="text-xs text-white/30">
            There’s no right way to write this.
          </p>
        </section>

        {/* Action */}
        <section className="flex items-center justify-between pt-4">
          <span className="text-xs text-white/30">
            Take your time.
          </span>

          <button
            onClick={sendMessage}
            disabled={sending || !content.trim()}
            className="
              rounded-full
              px-6
              py-2.5
              text-sm
              bg-white/10
              text-white/80
              hover:bg-white/20
              disabled:opacity-40
              transition
              hover:cursor-pointer
            "
          >
            {sending ? "Sending…" : "Send"}
          </button>
        </section>

      </section>
    </main>
  );
}
