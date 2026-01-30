"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [openId, setOpenId] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);

  const [username, setUsername] = useState("");

  const goToSendPage = () => {
    if (!username.trim()) return;
    router.push(`/me/send/${username.trim()}`);
  };


  const handleSend = async () => {
    if (!newMessage.trim()) return;

    try {
      setSending(true);

      // later connect this to your real API
      await new Promise((r) => setTimeout(r, 600));

      setNewMessage("");
    } finally {
      setSending(false);
    }
  };

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

        {/* Send a quiet message */}
        {/* <section className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4">
          <p className="text-sm text-white/60">
            Send a quiet message
          </p>

          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write something gently…"
            rows={3}
            className="
              w-full rounded-xl bg-white/5 px-4 py-3 text-sm
              text-white/80 placeholder:text-white/30
              outline-none focus:bg-white/8 transition resize-none
            "
          />

          <div className="flex justify-end">
            <button
              onClick={handleSend}
              disabled={sending || !newMessage.trim()}
              className="
                text-xs px-4 py-2 rounded-lg
                bg-orange-500/20 text-orange-300
                hover:bg-orange-500/30
                disabled:opacity-40 disabled:cursor-not-allowed
                transition
              "
            >
              {sending ? "Sending…" : "Send quietly"}
            </button>
          </div>
        </section> */}

        {/* Write to someone directly */}
<section className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4">
  <p className="text-sm text-white/60">
    Write to someone directly
  </p>

  <input
    type="text"
    placeholder="Enter username…"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="
      w-full rounded-xl bg-white/5 px-4 py-3 text-sm
      text-white/80 placeholder:text-white/30
      outline-none focus:bg-white/8 transition
    "
  />

  <div className="flex justify-end">
    <button
      onClick={goToSendPage}
      disabled={!username.trim()}
      className="
        text-xs px-4 py-2 rounded-lg
        bg-orange-500/20 text-orange-300
        hover:bg-orange-500/30
        disabled:opacity-40 disabled:cursor-not-allowed
        transition
      "
    >
      Send quietly
    </button>
  </div>
</section>


        {/* Inbox list */}
        <div className="space-y-6">
          {inboxItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4"
            >
              {/* Message preview / toggle */}
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full text-left"
              >
                <p
                  className={`text-sm leading-relaxed transition
                    ${item.unread ? "text-white/90" : "text-white/70"}
                  `}
                >
                  {item.content}
                </p>
              </button>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-white/35">
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
                <div className="pt-3 space-y-4 border-t border-white/10">
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

        {/* Empty state */}
        {inboxItems.length === 0 && (
          <p className="text-sm text-white/30">
            Nothing has reached you yet.
          </p>
        )}

      </section>
    </main>
  );
}