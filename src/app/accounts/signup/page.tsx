"use client";

import { signupUser } from "@/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthInput from "@/components/input/AuthInput";
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
  const [error, setError] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signupHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signupUser(form);

      if (res.statusCode === 200) {
        router.push("/me");
      } else {
        setError(res.message || "Signup failed");
        toast.error(error);
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong");
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-14 bg-zinc-950 overflow-hidden">

      {/* subtle ambient warmth */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_70%)]
          pointer-events-none
        "
      />

      <div className="relative z-10 w-full max-w-xl">

        {/* HEADER */}
        <header className="mb-10 px-2 sm:text-center">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl">
            A place to begin
          </h1>

          <p className="mt-3 text-white/60 text-sm sm:text-base">
            So you have somewhere to return to.
          </p>
        </header>

        {/* FORM */}
        <form onSubmit={signupHandler} className="space-y-6">
          <div>
            <AuthInput
              type="text"
              name="email"
              lable="Email"
              value={form.email}
              onChange={changeHandler}
            />
            <p className="mt-1 text-sm text-white/50">
              We’ll only use this to help you sign in
            </p>
          </div>

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

          <div>
            <AuthInput
              type="text"
              name="username"
              lable="Username"
              value={form.username}
              onChange={changeHandler}
            />
            <p className="mt-1 text-sm text-white/50">
              Lowercase letters, numbers, and underscores only.
            </p>
          </div>

          {/* TERMS */}
          <p className="text-sm text-white/50 leading-relaxed">
            By creating an account, you agree to Confessly’s{" "}
            <Link href="/" className="text-orange-400 hover:text-orange-300">
              Terms
            </Link>
            ,{" "}
            <Link href="/" className="text-orange-400 hover:text-orange-300">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/" className="text-orange-400 hover:text-orange-300">
              Cookies Policy
            </Link>
            .
          </p>

          {/* SUBMIT */}
          <button
  type="submit"
  disabled={loading}
  className="
    w-full
    relative
    rounded-full
    bg-orange-400
    border border-orange-400
    text-black
    font-medium
    text-base sm:text-lg
    py-3 sm:py-3.5
    transition-all
    hover:bg-orange-300
    hover:shadow-[0_0_20px_rgba(251,146,60,0.35)]
    active:scale-[0.99]
    disabled:opacity-70
    hover:cursor-pointer
    disabled:cursor-not-allowed
  "
>
  {loading ? "Creating account…" : "Continue"}
</button>

        </form>

        {/* SIGN IN LINK */}
        <div className="mt-10">
          <Link
  href="/accounts/signin"
  className="
    inline-flex
    w-full
    justify-center
    text-center
    font-medium
    border border-white/10
    py-3 sm:py-4
    rounded-full
    text-sm sm:text-base
    text-white/60
    transition-all
    hover:text-white
    hover:border-white/20
    hover:bg-zinc-900/40
  "
>
  Sign in instead
</Link>

        </div>
      </div>
    </div>
  );
}
