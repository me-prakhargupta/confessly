import Link from "next/link";

type Confession = {
  id: string;
  content: string;
  isPublic: boolean;
  createdAt: string;
};

export default async function MyConfessionsPage() {
  const confessions: Confession[] = [
    {
      id: "2",
      content:
        "I wish it was easier to talk about things without explaining myself.",
      isPublic: false,
      createdAt: "5 days ago",
    },
    {
      id: "1",
      content:
        "Some days I feel fine, and some days I don’t know why I’m tired.",
      isPublic: true,
      createdAt: "2 days ago",
    },
  ];

  const ordered = [...confessions].reverse();

  return (
    <main className="relative min-h-screen px-6 py-14 md:py-20 text-white bg-black overflow-hidden">

      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-orange-300/8 blur-[120px]" />
        <div className="absolute top-0 right-0 h-[240px] w-[240px] rounded-full bg-orange-400/6 blur-[140px]" />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto space-y-12">

        {/* Header */}
        <header className="space-y-3">
          <Link
            href="/me"
            className="text-xs text-white/40 hover:text-white/60 transition"
          >
            ← Back to your space
          </Link>

          <h1 className="text-xl font-medium tracking-tight">
            Your confessions
          </h1>

          <p className="text-sm text-white/55 max-w-xl">
            What you’ve written, held here.
          </p>
        </header>

        {/* 🌍 Public confessions redirect */}
        <section className="rounded-xl bg-white/4 backdrop-blur-md px-6 py-5">
          <p className="text-sm text-white/70">
            Some thoughts are meant to be seen.
          </p>

          <Link
            href="/confessions/public"
            className="inline-block mt-2 text-xs text-white/40 hover:text-white/70 transition"
          >
            Read public confessions →
          </Link>
        </section>

        {/* Confessions list */}
        <section className="space-y-6">

          {ordered.length === 0 ? (
            <div className="rounded-xl bg-white/4 px-6 py-6 text-sm text-white/45">
              You haven’t written anything yet.
              <br />
              When you do, it will live here.
            </div>
          ) : (
            ordered.map((confession) => (
              <article
                key={confession.id}
                className="rounded-xl bg-white/6 backdrop-blur-md px-6 py-5 space-y-4"
              >
                {/* Content */}
                <p className="text-sm text-white/80 leading-relaxed">
                  {confession.content}
                </p>

                {/* Meta + actions */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/45">
                  <span>
                    {confession.isPublic ? "Public" : "Private"} ·{" "}
                    {confession.createdAt}
                  </span>

                  <div className="flex gap-4">
                    <button className="hover:text-white transition">
                      Edit
                    </button>
                    <button className="hover:text-white transition">
                      {confession.isPublic ? "Hide" : "Make public"}
                    </button>
                    <button className="hover:text-red-400 transition">
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}

        </section>

        {/* Footer */}
        <footer className="pt-6">
          <p className="text-xs text-white/30">
            This is your record — not a feed, not a performance.
          </p>
        </footer>

      </section>
    </main>
  );
}
