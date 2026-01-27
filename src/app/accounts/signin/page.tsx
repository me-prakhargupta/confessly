"use client";

import { signinUser } from "@/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthInput from "@/components/input/AuthInput";

export default function Signin() {
  const router = useRouter();
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signinHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signinUser(form);

      if (res.statusCode === 200) {
        router.push("/");
      } else {
        setError(res.message || "Signin failed");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row bg-zinc-950 overflow-hidden">

      {/* subtle ambient warmth */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_70%)]
          pointer-events-none
        "
      />

      {/* LEFT: FORM */}
      <main className="relative z-10 w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-10 lg:border-r lg:border-white/10">
        <div className="w-full max-w-md">

          {/* Hero line */}
          <h1 className="text-orange-400 text-2xl sm:text-3xl font-bold leading-snug mb-7">
            Say, what{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              you can’t say
            </span>
            .
          </h1>

          {/* Heading */}
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-1">
            Log in to Confessly
          </h2>
          <p className="mb-4 text-white/60 font-medium text-sm sm:text-base">
            To keep and track your confessions.
          </p>

          {/* Error */}
          {error && (
            <p className="mb-4 text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Form */}
          <form onSubmit={signinHandler}>
            <div className="mt-4 sm:mt-6">
              <AuthInput
                type="text"
                name="identifier"
                lable="Username or email"
                value={form.identifier}
                onChange={changeHandler}
              />
            </div>

            <div className="mt-4 sm:mt-6">
              <AuthInput
                type="password"
                name="password"
                lable="Password"
                value={form.password}
                onChange={changeHandler}
              />
            </div>

            <div className="mt-6">
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
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>

          {/* Forgot password */}
          <div className="flex justify-center">
            <Link
              href="/accounts/reset"
              className="inline-block mt-5 text-sm text-white/60 hover:text-white transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Signup */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <Link
              href="/accounts/signup"
              className="
                inline-block w-full
                text-orange-400 text-center font-semibold
                border border-orange-400
                py-3 sm:py-4
                rounded-full
                hover:bg-zinc-900
                transition
                text-sm sm:text-base
              "
            >
              Create new account
            </Link>
          </div>
        </div>
      </main>

      {/* RIGHT: IMAGE */}
      <aside className="hidden lg:block lg:w-1/2 relative min-h-screen bg-[url('/login.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
      </aside>
    </div>
  );
}
