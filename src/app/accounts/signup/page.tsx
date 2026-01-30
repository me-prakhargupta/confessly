"use client";

import { signupUser } from "@/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthInput from "@/components/Input/AuthInput";
import Link from "next/link";
import { toast } from "sonner";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signupHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signupUser(form);
      toast.success("Account created successfully.");
      router.push("/me");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-zinc-950 overflow-x-hidden relative">
      
      {/* Image / Atmosphere Layer */}
      <aside className="absolute inset-0 lg:relative lg:inset-auto lg:w-[40%] h-full overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1718049411547-fb7fbb7a8e68?q=80&w=327&auto=format&fit=crop"
          alt="Atmospheric backdrop"
          className="w-full h-full object-cover object-[center_80%] grayscale-[0.4] brightness-[0.75] lg:brightness-[0.85]"
        />

        {/* Mobile fade to dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-zinc-950 lg:hidden" />

        {/* Desktop blend into content */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950" />
      </aside>

      {/* Content Layer */}
      <section
        className="
          relative flex-1 flex items-start justify-center z-10
          px-6
          pt-24 pb-16
          sm:pt-28 sm:pb-20
          lg:pt-20 lg:pb-10
        "
      >
        {/* Desktop ambient glows */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-orange-500/[0.04] blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-white/[0.02] blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-md space-y-6 lg:space-y-8">
          
          {/* Header */}
          <header className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-px h-4 bg-orange-500/40" />
              <span className="text-orange-500/60 text-[10px] uppercase tracking-[0.4em] font-black">
                The Beginning
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white">
              Create <span className="text-stone-400 font-medium">account</span>
            </h1>

            <p className="text-zinc-300 lg:text-zinc-500 text-sm font-normal">
              A place to begin, so you have somewhere to return to.
            </p>
          </header>

          {/* Form */}
          <form onSubmit={signupHandler} className="space-y-4 lg:space-y-5">
            <AuthInput
              type="email"
              name="email"
              lable="Email Address"
              value={form.email}
              onChange={changeHandler}
            />

            <AuthInput
              type="password"
              name="password"
              lable="Password"
              value={form.password}
              onChange={changeHandler}
            />

            <AuthInput
              type="text"
              name="fullname"
              lable="Full Name"
              value={form.fullname}
              onChange={changeHandler}
            />

            <AuthInput
              type="text"
              name="username"
              lable="Username"
              value={form.username}
              onChange={changeHandler}
            />

            <p className="text-xs text-zinc-400 lg:text-zinc-500 leading-relaxed font-normal">
              By continuing, you agree to our{" "}
              <Link
                href="/"
                className="text-zinc-300 lg:text-zinc-400 hover:text-orange-400 underline decoration-zinc-800 transition-colors"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/"
                className="text-zinc-300 lg:text-zinc-400 hover:text-orange-400 underline decoration-zinc-800 transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <button
              type="submit"
              disabled={loading}
              className="
                group relative w-full py-3.5 rounded-xl
                bg-orange-500 text-black
                font-bold text-sm
                transition-all duration-300
                hover:bg-orange-400
                hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]
                active:scale-[0.98]
                disabled:opacity-50
                cursor-pointer
              "
            >
              {loading ? "Creating..." : "Continue"}
            </button>
          </form>

          {/* Footer */}
          <footer className="pt-4 border-t border-white/5 text-center">
            <p className="text-zinc-300 lg:text-zinc-500 text-sm font-normal">
              Already have an account?{" "}
              <Link
                href="/accounts/signin"
                className="text-white hover:text-orange-500 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}