










"use client";

import Link from "next/link";
import { useState } from "react";

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
  const [openComments, setOpenComments] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <section className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <header className="space-y-4">
  {/* <Link
    href="/me/thoughts"
    className="text-xs text-white/40 hover:text-white/60 transition"
  >
    ← Back to your space
  </Link> */}

  <div className="space-y-1">
    <h1 className="text-2xl font-medium">Your thoughts</h1>
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
      {/* <span aria-hidden>→</span> */}
    </Link>
  </section>
</header>


        {/* Thoughts */}
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
                    setOpenComments(
                      openComments === t.id ? null : t.id
                    )
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































// import Link from "next/link";

// type Confession = {
//   id: string;
//   content: string;
//   isPublic: boolean;
//   createdAt: string;
// };

// export default async function MyConfessionsPage() {
//   const confessions: Confession[] = [
//     {
//       id: "2",
//       content:
//         "I wish it was easier to talk about things without explaining myself.",
//       isPublic: false,
//       createdAt: "5 days ago",
//     },
//     {
//       id: "1",
//       content:
//         "Some days I feel fine, and some days I don’t know why I’m tired.",
//       isPublic: true,
//       createdAt: "2 days ago",
//     },
//   ];

//   const ordered = [...confessions].reverse();

//   return (
//     <main className="relative min-h-screen px-6 py-14 md:py-20 text-white bg-black overflow-hidden">

//       {/* Ambient warmth */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-orange-300/8 blur-[120px]" />
//         <div className="absolute top-0 right-0 h-[240px] w-[240px] rounded-full bg-orange-400/6 blur-[140px]" />
//       </div>

//       <section className="relative z-10 max-w-3xl mx-auto space-y-12">

//         {/* Header */}
//         <header className="space-y-3">
//           <Link
//             href="/me"
//             className="text-xs text-white/40 hover:text-white/60 transition"
//           >
//             ← Back to your space
//           </Link>

//           <h1 className="text-xl font-medium tracking-tight">
//             Your confessions
//           </h1>

//           <p className="text-sm text-white/55 max-w-xl">
//             What you’ve written, held here.
//           </p>
//         </header>

//         {/* 🌍 Public confessions redirect */}
//         <section className="rounded-xl bg-white/4 backdrop-blur-md px-6 py-5">
//           <p className="text-sm text-white/70">
//             Some thoughts are meant to be seen.
//           </p>

//           <Link
//             href="/thoughts/public"
//             className="inline-block mt-2 text-xs text-white/40 hover:text-white/70 transition"
//           >
//             Read public confessions →
//           </Link>
//         </section>

//         {/* Confessions list */}
//         <section className="space-y-6">

//           {ordered.length === 0 ? (
//             <div className="rounded-xl bg-white/4 px-6 py-6 text-sm text-white/45">
//               You haven’t written anything yet.
//               <br />
//               When you do, it will live here.
//             </div>
//           ) : (
//             ordered.map((confession) => (
//               <article
//                 key={confession.id}
//                 className="rounded-xl bg-white/6 backdrop-blur-md px-6 py-5 space-y-4"
//               >
//                 {/* Content */}
//                 <p className="text-sm text-white/80 leading-relaxed">
//                   {confession.content}
//                 </p>

//                 {/* Meta + actions */}
//                 <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/45">
//                   <span>
//                     {confession.isPublic ? "Public" : "Private"} ·{" "}
//                     {confession.createdAt}
//                   </span>

//                   <div className="flex gap-4">
//                     <button className="hover:text-white transition">
//                       Edit
//                     </button>
//                     <button className="hover:text-white transition">
//                       {confession.isPublic ? "Hide" : "Make public"}
//                     </button>
//                     <button className="hover:text-red-400 transition">
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))
//           )}

//         </section>

//         {/* Footer */}
//         <footer className="pt-6">
//           <p className="text-xs text-white/30">
//             This is your record — not a feed, not a performance.
//           </p>
//         </footer>

//       </section>
//     </main>
//   );
// }
