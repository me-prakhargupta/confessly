"use client";

import Link from "next/link";
import { useState } from "react";

const publicThoughts = [
  {
    id: "p1",
    content:
      "Some days I feel fine, and some days I don’t know why I’m tired.",
    createdAt: "2 days ago",
    reactions: {
      felt: 12,
      holding: 4,
      letting: 3,
    },
    comments: [
      {
        id: "c1",
        text: "This made me pause. Thank you for sharing it.",
        time: "1 day ago",
      },
    ],
  },
  {
    id: "p2",
    content:
      "I wish rest didn’t feel like something I have to earn.",
    createdAt: "4 days ago",
    reactions: {
      felt: 9,
      holding: 2,
      letting: 1,
    },
    comments: [],
  },
];

export default function PublicThoughtsPage() {
  const [openComments, setOpenComments] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <section className="max-w-3xl mx-auto space-y-14">
        {/* Header */}
        <header className="space-y-3">
          {/* <Link
            href="/me"
            className="text-xs text-white/40 hover:text-white/60 transition"
          >
            ← Back to your space
          </Link> */}

          <h1 className="text-2xl font-medium">
            Explore thoughts
          </h1>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            Things people chose to leave in the open.  
            You don’t need to respond to everything.
          </p>
        </header>

        {/* Feed */}
        <div className="space-y-12">
          {publicThoughts.map((t) => (
            <article
              key={t.id}
              className="
                rounded-xl
                bg-white/3
                border border-white/5
                px-6 py-6
                space-y-5
              "
            >
              {/* Content */}
              <p className="text-white/85 leading-relaxed text-[15px]">
                {t.content}
              </p>

              {/* Meta */}
              <p className="text-xs text-white/35">
                Left here · {t.createdAt}
              </p>

              {/* Reactions (Explore-specific) */}
              {/* <div className="flex items-center gap-6 text-xs text-white/45">
                <button className="hover:text-white/70 transition hover:cursor-pointer">
                  I felt this {t.reactions.felt > 0 && `· ${t.reactions.felt}`}
                </button>
                <button className="hover:text-white/70 transition hover:cursor-pointer">
                  Holding this{" "}
                  {t.reactions.holding > 0 && `· ${t.reactions.holding}`}
                </button>
                <button className="hover:text-white/70 transition hover:cursor-pointer">
                  Let it be{" "}
                  {t.reactions.letting > 0 && `· ${t.reactions.letting}`}
                </button>
              </div> */}

<div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
  {/* Felt */}
  <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition">
    <span>💛</span>
    <span className="hidden sm:inline">I felt this</span>
    {t.reactions.felt > 0 && (
      <span className="text-white/40">· {t.reactions.felt}</span>
    )}
  </button>

  {/* Holding */}
  <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition">
    <span>🫂</span>
    <span className="hidden sm:inline">Holding this</span>
    {t.reactions.holding > 0 && (
      <span className="text-white/40">· {t.reactions.holding}</span>
    )}
  </button>

  {/* Let it be */}
  <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition">
    <span>🌿</span>
    <span className="hidden sm:inline">Let it be</span>
    {t.reactions.letting > 0 && (
      <span className="text-white/40">· {t.reactions.letting}</span>
    )}
  </button>
</div>


              {/* Actions */}
              <div className="flex items-center gap-6 text-xs text-white/40">
                <button
                  onClick={() =>
                    setOpenComments(
                      openComments === t.id ? null : t.id
                    )
                  }
                  className="hover:text-white/70 transition hover:cursor-pointer"
                >
                  {openComments === t.id
                    ? "Hide responses"
                    : "Read how this landed"}
                </button>

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `${window.location.origin}/thought/${t.id}`
                    )
                  }
                  className="hover:text-white/70 transition hover:cursor-pointer"
                >
                  Share quietly
                </button>
              </div>

              {/* Comments */}
              {openComments === t.id && (
                <div className="pt-4 space-y-4 border-t border-white/10">
                  {t.comments.length > 0 ? (
                    t.comments.map((c) => (
                      <div
                        key={c.id}
                        className="text-sm text-white/70"
                      >
                        <p>{c.text}</p>
                        <p className="text-xs text-white/30 mt-1">
                          {c.time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-white/30">
                      No one responded yet.
                    </p>
                  )}

                  <input
                    type="text"
                    placeholder="Leave a gentle note…"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm
                      text-white/80 placeholder:text-white/30
                      outline-none focus:bg-white/8 transition"
                  />
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-12 text-center">
          <p className="text-xs text-white/30">
            You don’t have to carry everything you read.
          </p>
        </footer>
      </section>
    </main>
  );
}
