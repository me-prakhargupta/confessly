import { notFound } from "next/navigation";
import Image from "next/image";

type Confession = {
  id: string;
  content: string;
};

type UserProfile = {
  username: string;
  status?: string;
  confessions: Confession[];
};

async function getUser(username: string): Promise<UserProfile | null> {
  return {
    username,
    status: "Trying to be kinder to myself.",
    confessions: [
      {
        id: "1",
        content:
          "Some days I feel fine, and some days I don’t know why I’m tired.",
      },
      {
        id: "2",
        content:
          "I wish it was easier to talk about things without explaining myself.",
      },
    ],
  };
}

export default async function PublicProfilePage({params}: {params: { username: string };
}) {
  const user = await getUser(params.username);
  if (!user) notFound();

  return (
    <main className="relative min-h-screen flex justify-center px-6 py-24 text-white overflow-hidden bg-black">
      
      {/* Public profile warmth (subtle, wider than private) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(253,186,116,0.10),transparent_70%)]" />

      <section className="relative z-10 w-full max-w-xl space-y-14">
        
        {/* Profile Header */}
        <header className="text-center space-y-4">
          
          {/* User image (public = slightly clearer than private) */}
          <div className="mx-auto h-20 w-20 rounded-full overflow-hidden bg-white/5">
            <Image
              src="/login.jpg"
              alt={`${user.username}'s profile photo`}
              width={80}
              height={80}
              className="h-full w-full object-cover opacity-95"
              priority
            />
          </div>

          {/* Username */}
          <h1 className="text-2xl font-semibold tracking-tight text-white/90">
            @{user.username}
          </h1>

          {user.status && (
            <p className="text-white/60 text-sm max-w-sm mx-auto">
              {user.status}
            </p>
          )}
        </header>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Confessions */}
        <section className="space-y-6">
          {user.confessions.map((confession) => (
            <article
              key={confession.id}
              className="
                rounded-xl
                bg-white/6
                backdrop-blur-md
                p-6
                text-white/80
                leading-relaxed
                shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
              "
            >
              {confession.content}
            </article>
          ))}
        </section>

        {/* Soft Action */}
        <div className="pt-6 text-center">
          <button className="text-sm text-orange-400/80 hover:text-orange-400 transition">
            Send quiet support
          </button>
        </div>
      </section>
    </main>
  );
}