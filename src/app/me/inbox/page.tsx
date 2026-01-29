"use client";

import { useState } from "react";
import Link from "next/link";

const inboxItems = [
  {
    id: "i1",
    content:
      "I don’t know who you are, but I hope today feels a little lighter.",
    receivedAt: "Today",
    from: "anonymous",
    unread: true,
  },
  {
    id: "i2",
    content:
      "Your words helped me more than you probably realize.",
    receivedAt: "2 days ago",
    from: "someone",
    unread: false,
  },
  {
    id: "i3",
    content:
      "I come back to your thought about rest sometimes.",
    receivedAt: "1 week ago",
    from: "anonymous",
    unread: false,
  },
];

export default function InboxPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-3xl mx-auto space-y-14">

        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-xl font-medium">Inbox</h1>
          <p className="text-sm text-white/40 max-w-md">
            What reached you. You can open things when you’re ready.
          </p>
        </header>

        {/* Inbox list */}
        <div className="space-y-10">
          {inboxItems.map((item) => (
            <article
              key={item.id}
              className="space-y-3"
            >
              {/* Message preview */}
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full text-left group"
              >
                <p
                  className={`text-sm leading-relaxed transition
                    ${
                      item.unread
                        ? "text-white/90"
                        : "text-white/70"
                    }
                  `}
                >
                  {item.content}
                </p>
              </button>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-white/35 pl-1">
                <span>
                  {item.from === "anonymous"
                    ? "Anonymous"
                    : "From someone"}{" "}
                  · {item.receivedAt}
                </span>

                {item.unread && (
                  <span className="text-white/40">
                    unread
                  </span>
                )}
              </div>

              {/* Expanded actions */}
              {openId === item.id && (
                <div className="pt-4 space-y-4 border-t border-white/10">
                  <div className="flex items-center gap-6 text-xs text-white/40">
                    <button className="hover:text-white/70 transition">
                      Reply quietly
                    </button>
                    <button className="hover:text-white/70 transition">
                      Save
                    </button>
                    <button className="hover:text-white/70 transition">
                      Mark unread
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Empty state (optional) */}
        {inboxItems.length === 0 && (
          <p className="text-sm text-white/30">
            Nothing has reached you yet.
          </p>
        )}

        {/* Footer */}
        {/* <footer className="pt-12">
          <Link
            href="/me"
            className="text-xs text-white/30 hover:text-white/60 transition"
          >
            Return to your space
          </Link>
        </footer> */}

      </section>
    </main>
  );
}
