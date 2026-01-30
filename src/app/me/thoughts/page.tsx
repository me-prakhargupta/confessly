"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { shareThought } from "@/services/auth";

const thoughts = [
  {
    id: "1",
    content:
      "Some days I feel fine, and some days I don’t know why I’m tired.",
    visibility: "Public",
    createdAt: "2 days ago",
    reactions: { heart: 3, hug: 1, seed: 2 },
    comments: [
      {
        id: "c1",
        text: "This feels very familiar. You’re not alone.",
        time: "1 day ago",
      },
    ],
  },
  {
    id: "2",
    content:
      "I wish it was easier to talk about things without explaining myself.",
    visibility: "Private",
    createdAt: "5 days ago",
    reactions: { heart: 0, hug: 0, seed: 1 },
    comments: [],
  },
];

export default function ThoughtsPage() {
  const [open, setOpen] = useState(false);
  const [openComments, setOpenComments] = useState<string | null>(null);

  const [thought, setThought] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThought(e.target.value);
  }

  const [sharing, setSharing] = useState(false);


  const shareHandler = async () => {
    if(!thought.trim()) {
      return toast.error("Thought cannot be empty or contain only whitespace.");
    }

    setSharing(true);

    try {
      await shareThought(thought);
      toast.success("Your thought has been shared.");
      setThought("");
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to share thought");
    } finally {
      setSharing(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 sm:py-14">
      <section className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-xl sm:text-3xl font-bold">Your <span className="text-orange-400 font-serif italic font-bold">thoughts</span></h1>
            <p className="text-sm text-white/40">
              What you’ve written, held here.
            </p>
          </div>

          {/* Explore prompt */}
          <section
            className="
              mt-6
              rounded-xl
              bg-gradient-to-r from-white/6 to-white/2
              border border-white/5
              px-6 py-5
              flex items-center justify-between
            "
          >
            <p className="text-sm text-white/70">
              Some thoughts are meant to be seen.
            </p>

            <Link
              href="/me/thoughts/explore"
              className="
                text-xs
                text-white/60
                hover:text-white/90
                transition
                flex items-center gap-1
                hover:cursor-pointer
              "
            >
              Explore
            </Link>
          </section>
        </header>

        {/* Share your thought */}
        {/* <section
          className="
            rounded-2xl
            bg-white/5
            backdrop-blur-md
            px-6 py-5
            space-y-4
          "
        >
          <p className="text-sm text-white/60">
            Share your thought
          </p>

          <textarea
            value={thought}
            onChange={changeHandler}
            placeholder="Write something you want to put down…"
            rows={3}
            className="
              w-full rounded-xl bg-white/5 px-4 py-3 text-sm
              text-white/80 placeholder:text-white/30
              outline-none focus:bg-white/8 transition resize-none
            "
          />

          <div className="flex justify-end">
            <button
              onClick={shareHandler}
              disabled={sharing || !thought.trim()}
              className="
                text-xs px-4 py-2 rounded-lg
                bg-orange-500/20 text-orange-300
                hover:bg-orange-500/30
                disabled:opacity-40 disabled:cursor-not-allowed
                transition
              "
            >
              {sharing ? "Sharing…" : "Share quietly"}
            </button>
          </div>
        </section> */}

        <section className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4">

  <button
    onClick={() => setOpen((p) => !p)}
    className="text-sm text-white/60 flex items-start w-full"
  >
    Share your thought
  </button>

  {open && (
    <>
      <textarea
        value={thought}
        onChange={changeHandler}
        onFocus={() => setOpen(true)}
        placeholder="Write something you want to put down…"
        rows={4}
        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm
                   text-white/80 placeholder:text-white/30
                   outline-none focus:bg-white/8 transition resize-none"
      />

      <div className="flex justify-end">
        <button
          onClick={shareHandler}
          disabled={sharing || !thought.trim()}
          className="text-xs px-4 py-2 rounded-lg
                     bg-orange-500/20 text-orange-300
                     hover:bg-orange-500/30
                     disabled:opacity-40 disabled:cursor-not-allowed
                     transition"
        >
          {sharing ? "Sharing…" : "Share quietly"}
        </button>
      </div>
    </>
  )}
</section>


        {/* Thoughts list */}
        <div className="space-y-6">
          {thoughts.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4"
            >
              {/* Content */}
              <p className="text-white/80 leading-relaxed">
                {t.content}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-white/40">
                <span>
                  {t.visibility} · {t.createdAt}
                </span>

                <div className="flex gap-4">
                  <button className="hover:text-white/70 transition hover:cursor-pointer">
                    Edit
                  </button>
                  <button className="hover:text-white/70 transition hover:cursor-pointer">
                    {t.visibility === "Public" ? "Hide" : "Make public"}
                  </button>
                  <button className="hover:text-red-400 transition hover:cursor-pointer">
                    Delete
                  </button>
                </div>
              </div>

              {/* Reactions */}
              <div className="flex items-center gap-4 pt-2 text-sm text-white/50">
                <button className="hover:text-white transition hover:cursor-pointer">
                  🧡 {t.reactions.heart || ""}
                </button>
                <button className="hover:text-white transition hover:cursor-pointer">
                  🫂 {t.reactions.hug || ""}
                </button>
                <button className="hover:text-white transition hover:cursor-pointer">
                  🌱 {t.reactions.seed || ""}
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6 text-xs text-white/40">
                <button
                  onClick={() =>
                    setOpenComments(openComments === t.id ? null : t.id)
                  }
                  className="hover:text-white/70 transition hover:cursor-pointer"
                >
                  {openComments === t.id
                    ? "Hide responses"
                    : "View responses"}
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
                      <div key={c.id} className="text-sm text-white/70">
                        <p>{c.text}</p>
                        <p className="text-xs text-white/30 mt-1">
                          {c.time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-white/30">
                      No one has responded yet.
                    </p>
                  )}

                  {/* Add comment */}
                  <input
                    type="text"
                    placeholder="Leave a gentle response…"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm
                      text-white/80 placeholder:text-white/30
                      outline-none focus:bg-white/8 transition"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}