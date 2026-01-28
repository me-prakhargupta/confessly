import Link from "next/link";
import Image from "next/image";

type PrivateProfileProps = {
  username: string;
  src: string;
};

export default function PrivateProfilePage({ username, src }: PrivateProfileProps) {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 text-white overflow-hidden bg-black">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,186,116,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(251,146,60,0.08),transparent_70%)]" />
      </div>

      <section className="relative z-10 w-full max-w-md text-center space-y-6">
        
        <div className="mx-auto h-20 w-20 rounded-full overflow-hidden bg-white/5">
          <Image
            src={src}
            alt={`${username}'s profile photo`}
            width={80}
            height={80}
            className="h-full w-full object-cover opacity-90"
            priority
          />
        </div>

        <p className="text-xs text-white/45 tracking-wide">
          @{username}
        </p>

        <h1 className="text-lg font-medium tracking-tight text-white/85">
          This space is quiet for now
        </h1>

        <p className="text-sm text-white/55 leading-relaxed max-w-sm mx-auto">
          Some thoughts take time.
          <br />
          When they’re ready, this space will open.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="text-xs text-white/30 hover:text-orange-400/60 transition"
          >
            You’re welcome anytime
          </Link>
        </div>
      </section>
    </main>
  );
}
