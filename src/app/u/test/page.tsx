import Image from "next/image";

type Thought = {
  id: string;
  content: string;
};

export default function PublicProfilePage() {
  // mocked user
  const fullName = "Prakhar Gupta";
  const username = "meprakhargupta";
  const avatar = "/login.jpg";

  // mocked thoughts from backend
  const thoughts: Thought[] = [
    { id: "1", content: "Some days I feel fine, and some days I don’t know why I’m tired." },
    { id: "2", content: "I wish rest didn’t feel like something I have to earn." },
    { id: "3", content: "Sometimes I just want someone to listen without fixing me." },
    { id: "4", content: "I act strong in front of everyone but overthink a lot at night." },
  ];

  const visibleThoughts = thoughts.slice(0, 3);
  const hasMore = thoughts.length > 3;

  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-[#070707]">
      
      {/* warm orange ambient like private profile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0
          bg-[radial-gradient(circle_at_50%_15%,rgba(251,146,60,0.18),transparent_40%)]" />
        <div className="absolute inset-0
          bg-[radial-gradient(circle_at_10%_90%,rgba(251,146,60,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 py-15">
        
        {/* identity block */}
        <div className="flex sm:items-center gap-5 mb-16">
          <div className="h-20 w-20 rounded-full overflow-hidden ring-2 ring-orange-400/50 shadow-[0_0_40px_rgba(251,146,60,0.15)]">
            <Image
              src={avatar}
              alt={fullName}
              width={80}
              height={80}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl font-semibold text-white/95">
              {fullName}
            </h1>
            <p className="text-sm text-white/50">@{username}</p>
          </div>
        </div>

        {/* thoughts */}
        {visibleThoughts.length > 0 ? (
          <div className="space-y-8">
            {visibleThoughts.map((t) => (
              <div
                key={t.id}
                className="
                  rounded-2xl
                  p-8
                  text-[15px] leading-relaxed
                  text-white/85
                  bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                  border border-white/10
                  backdrop-blur-xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                "
              >
                {t.content}
              </div>
            ))}

            {hasMore && (
              <div className="text-center pt-6">
                <button className="
                  text-sm
                  px-5 py-2.5
                  rounded-full
                  text-orange-200
                  bg-orange-400/10
                  border border-orange-400/30
                  hover:bg-orange-400/20
                  transition
                ">
                  Login to view all thoughts
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="
            rounded-2xl
            p-10
            text-center
            text-white/40
            bg-white/[0.03]
            border border-white/10
            backdrop-blur-md
          ">
            This user hasn’t shared anything here yet.
          </div>
        )}
      </div>
    </main>
  );
}
