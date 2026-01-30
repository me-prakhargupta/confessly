import Link from "next/link";
import AuthInput from "@/components/Input/AuthInput";

export default function Reset() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden">

      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-orange-300/8 blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-md p-8 sm:p-10">

        {/* Back */}
        <Link
          href="/accounts/signin"
          className="inline-block mb-6 text-xs text-white/30 hover:text-white/50 transition"
        >
          ← Back to sign in
        </Link>

        {/* Header */}
        <header className="mb-10 text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-medium text-white">
            Find your account
          </h1>
          <p className="text-sm text-white/55 max-w-sm mx-auto">
            Enter your username or email.
            <br />
            We’ll help you take the next step.
          </p>
        </header>

        {/* Form */}
        <div className="space-y-6">
          <AuthInput
            type="text"
            name="userEmail"
            lable="Username or email"
          />

          <p className="text-xs text-white/35 text-center leading-relaxed">
            We may send security-related notifications
            <br />
            to help you regain access.
          </p>

          <button
            className="
              w-full
              rounded-xl
              bg-orange-400/90
              text-black
              font-medium
              py-3
              hover:bg-orange-400
              transition
            "
          >
            Continue
          </button>
        </div>

      </div>
    </section>
  );
}
