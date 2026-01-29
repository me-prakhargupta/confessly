"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signoutUser } from "@/services/auth";
import { toast } from "sonner";

export default function MePage() {
  const router = useRouter();

  const user = {
    fullName: "Prakhar Gupta",
    username: "meprakhargupta",
    bio: "Trying to put things down, gently.",
    avatar: "/login.jpg",
    confessionCount: 2,
    receivedCount: 1,
    today: "Feeling a little tired, but still showing up.",
  };

  const signoutHandler = async () => {
    try {
      await signoutUser();
      router.push("/accounts/signin");
      toast("You’ve been logged out. We’ll be here when you return.");
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <main className="relative min-h-screen px-6 py-16 text-white bg-black overflow-hidden">
      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-[260px] w-[260px] rounded-full bg-orange-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-orange-300/8 blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto space-y-14">

        {/* Top profile header */}
        <header className="flex items-start gap-5">
          <div className="h-20 w-20 rounded-full overflow-hidden bg-white/5 shrink-0">
            <Image
              src={user.avatar}
              alt="Your profile photo"
              width={80}
              height={80}
              className="h-full w-full object-cover opacity-90"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-lg font-medium">
              {user.fullName}
            </h1>
            <p className="text-sm text-white/45">
              @{user.username}
            </p>
            <p className="text-sm text-white/60 mt-2 max-w-md leading-relaxed">
              {user.bio}
            </p>
          </div>
        </header>

        {/* Reflection */}
        <section className="rounded-2xl bg-white/6 backdrop-blur-md px-6 py-6 space-y-2">
          <p className="text-xs text-white/40">
            What are you holding today?
          </p>
          <p className="text-sm text-white/85 leading-relaxed">
            {user.today}
          </p>
        </section>

        {/* Inbox */}
        <Link
          href="/me/inbox"
          className="flex items-center justify-between border-b border-white/10 pb-3
            hover:border-white/25 transition"
        >
          <div>
            <p className="text-sm text-white/80">Inbox</p>
            <p className="text-xs text-white/45">
              Things that reached you quietly
            </p>
          </div>

          {user.receivedCount > 0 && (
            <p className="text-xs text-white/40">
              {user.receivedCount} waiting
            </p>
          )}
        </Link>

        {/* Direct send */}
        {/* <section className="space-y-3">
          <p className="text-xs text-white/40">
            Want to write to someone directly?
          </p>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter username…"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 bg-transparent border-b border-white/15 px-1 py-2
                text-sm text-white/80 placeholder:text-white/30
                outline-none focus:border-white/40 transition"
            />

            <button
              onClick={goToSendPage}
              className="text-sm text-white/50 bg-white/10 px-6 py-2.5
                rounded-full hover:text-white/85 transition"
            >
              Send →
            </button>
          </div>
        </section> */}

        {/* Your thoughts */}
        <Link
          href="/me/thoughts"
          className="block rounded-2xl bg-gradient-to-r from-white/7 to-white/2
            border border-white/5 px-6 py-5 hover:from-white/9 hover:to-white/4 transition"
        >
          <p className="text-sm font-medium">
            Your thoughts
          </p>
          <p className="text-xs text-white/50 mt-1">
            You’ve written {user.confessionCount} reflections
          </p>
        </Link>

        {/* Footer */}
        <footer className="pt-10 flex items-center justify-between">
          <p className="text-xs text-white/30">
            This space moves at your pace.
          </p>

          <button
            onClick={signoutHandler}
            className="text-xs text-white/35 hover:text-white/60 transition"
          >
            Sign out
          </button>
        </footer>

      </section>
    </main>
  );
}
