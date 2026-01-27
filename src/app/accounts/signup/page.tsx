"use client";

import { signupUser } from "@/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthInput from "@/components/input/AuthInput";
import Link from "next/link";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signupUser(form);

      if (res.statusCode === 200) {
        router.push("/");
      } else {
        setError(res.message || "Signup failed");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong");
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
        <header className="mb-10 text-center">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl">
            Get started with Confessly
          </h1>

          <p className="mt-3 text-white/60 text-sm sm:text-base">
            Some thoughts deserve a safe place.
          </p>

          <p className="mt-2 text-white/80 text-lg sm:text-xl">
            Create your account and confess freely.
          </p>
        </header>

        {/* FORM */}
        <form onSubmit={handleSignup} className="space-y-6">

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <div>
            <AuthInput
              type="text"
              name="email"
              lable="Email address"
              value={form.email}
              onChange={handleChange}
            />
            <p className="mt-1 text-sm text-white/50">
              We may send verification emails to keep your account secure.
            </p>
          </div>

          <AuthInput
            type="password"
            name="password"
            lable="Password"
            value={form.password}
            onChange={handleChange}
          />

          <AuthInput
            type="text"
            name="fullname"
            lable="Full name"
            value={form.fullname}
            onChange={handleChange}
          />

          <div>
            <AuthInput
              type="text"
              name="username"
              lable="Username"
              value={form.username}
              onChange={handleChange}
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

          <p className="text-sm text-white/50">
            We use your details only to secure your account.
          </p>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-full
              bg-orange-400
              border border-orange-400
              text-black font-semibold
              text-base sm:text-lg
              py-3 sm:py-3.5
              transition
              hover:bg-orange-300
              disabled:opacity-70
            "
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {/* SIGN IN LINK */}
        <div className="mt-10">
          <Link
            href="/accounts/signin"
            className="
              inline-block w-full
              text-center font-semibold
              border border-white/20
              py-3 sm:py-4
              rounded-full
              hover:bg-zinc-900
              transition
              text-sm sm:text-base
              text-white/80
            "
          >
            I already have an account
          </Link>
        </div>
      </div>
    </div>
  );
}
