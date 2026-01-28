"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MePage() {
  const router = useRouter();

  const user = {
    username: "meprakhargupta",
    avatar: "/login.jpg",
    confessionCount: 2,
    receivedCount: 1,
    today: "Feeling a little tired, but still showing up.",
  };

  const receivedConfessions = [
    {
      id: "r1",
      content: "I don’t know you, but I hope today feels a little lighter.",
    },
  ];

  // 🔍 Search state
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // ✍️ Direct send state
  const [username, setUsername] = useState("");

  const searchUsers = async (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/user/search?q=${value}`,
        { credentials: "include" }
      );
      const data = await res.json();
      setResults(data.users || []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const goToSendPage = () => {
    if (!username.trim()) return;
    router.push(`/to/send/${username.trim()}`);
  };

  return (
    <main className="relative min-h-screen px-6 py-14 md:py-20 text-white bg-black overflow-hidden">

      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-[280px] w-[280px] rounded-full bg-orange-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-orange-300/8 blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto space-y-10">

        {/* Header */}
        <header className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-white/5">
            <Image
              src={user.avatar}
              alt="Your profile photo"
              width={48}
              height={48}
              className="h-full w-full object-cover opacity-90"
            />
          </div>
          <div>
            <h1 className="text-lg font-medium">Your space</h1>
            <p className="text-xs text-white/50">
              Private • Only you can see this
            </p>
          </div>
        </header>

        {/* Reflection */}
        <section className="rounded-xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-2">
          <p className="text-xs text-white/40">
            What are you holding today?
          </p>
          <p className="text-sm text-white/75 leading-relaxed">
            {user.today}
          </p>
        </section>

        {/* Sent to you */}
        <section className="space-y-3">
          <p className="text-xs text-white/40">
            Sent to you
          </p>

          {receivedConfessions.length > 0 ? (
            receivedConfessions.map((c) => (
              <div
                key={c.id}
                className="rounded-xl bg-white/5 backdrop-blur-md px-6 py-4 text-sm text-white/75"
              >
                {c.content}
              </div>
            ))
          ) : (
            <div className="rounded-xl bg-white/4 px-6 py-4 text-sm text-white/40">
              Nothing has reached you yet.
            </div>
          )}
        </section>


        {/* ✍️ Send directly by username */}
        <section className="space-y-3">
          <p className="text-xs text-white/40">
            Want to write to someone directly?
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter username…"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 rounded-xl bg-white/5 backdrop-blur-md px-5 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:bg-white/8 transition"
            />

            <button
              onClick={goToSendPage}
              className="rounded-xl bg-white/10 px-5 py-3 text-sm text-white/80 hover:bg-white/20 transition"
            >
              Send
            </button>
          </div>
        </section>

        {/* 🔍 Search people */}
        <section className="space-y-3">
          <p className="text-xs text-white/40">
            Or look for someone
          </p>

          <input
            type="text"
            placeholder="Search by name or username…"
            value={query}
            onChange={(e) => searchUsers(e.target.value)}
            className="w-full rounded-xl bg-white/5 backdrop-blur-md px-5 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:bg-white/8 transition"
          />

          {loading && (
            <p className="text-xs text-white/30">
              Searching…
            </p>
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-2">
              {results.map((u) => (
                <Link
                  key={u._id}
                  href={`/send/${u.username}`}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 hover:bg-white/8 transition"
                >
                  <div className="h-9 w-9 rounded-full overflow-hidden bg-white/10">
                    <Image
                      src={u.profileImage || "/login.jpg"}
                      alt={u.username}
                      width={36}
                      height={36}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-white/80">
                      {u.username}
                    </p>
                    <p className="text-xs text-white/40">
                      {u.fullname}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <p className="text-xs text-white/30">
              No one matched that name.
            </p>
          )}
        </section>

        {/* Your confessions */}
        <Link
          href="/me/confessions"
          className="block rounded-xl bg-white/6 backdrop-blur-md px-6 py-5 hover:bg-white/8 transition"
        >
          <p className="text-sm font-medium">
            Your confessions
          </p>
          <p className="text-xs text-white/50 mt-1">
            You’ve written {user.confessionCount} thoughts
          </p>
        </Link>

        {/* Footer */}
        <footer className="pt-6">
          <p className="text-xs text-white/30">
            This space moves at your pace.
          </p>
        </footer>

      </section>
    </main>
  );
}
