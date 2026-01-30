"use client";

import { signinUser } from "@/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthInput from "@/components/Input/AuthInput";
import { toast } from "sonner";

export default function Signin() {
  const router = useRouter();
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signinHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signinUser(form);
      toast.success("Welcome back.");
      console.log("Pre router push");
      router.push("/me");
      console.log("Post router push");
      setForm({ identifier: "", password: "" });
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong")
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col lg:flex-row bg-black overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-full bg-orange-500/[0.04] blur-[120px]" />
      </div>

      {/* LEFT: FORM */}
      <section className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-20 lg:border-r lg:border-white/[0.05]">
        <div className="w-full max-w-sm space-y-12">
          
          {/* Header */}
          <header className="space-y-3">
            <div className="flex items-center gap-3">
               <div className="w-px h-4 bg-orange-500/40" />
               <span className="text-orange-500/60 text-[10px] uppercase tracking-[0.4em] font-black">
                 The Return
               </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter text-white">
              Welcome <span className="text-stone-400 font-medium">back</span>
            </h1>
            <p className="text-stone-500 text-sm font-light">
              A quiet place to come back to what you’ve shared.
            </p>
          </header>

          {/* Form */}
          <form onSubmit={signinHandler} className="space-y-6">
            <AuthInput
              type="text"
              name="identifier"
              lable="Username or email"
              value={form.identifier}
              onChange={changeHandler}
            />

            <div className="space-y-2">
              <AuthInput
                type="password"
                name="password"
                lable="Password"
                value={form.password}
                onChange={changeHandler}
              />
              {/* <div className="flex justify-end">
                <Link
                  href="/accounts/reset"
                  className="text-[10px] uppercase tracking-widest text-stone-600 hover:text-orange-400 transition-colors font-bold"
                >
                  Forgot?
                </Link>
              </div> */}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-full
                  bg-white
                  text-black
                  text-sm font-medium
                  transition-all duration-300
                  hover:bg-stone-200
                  active:scale-[0.98]
                  disabled:opacity-30
                  cursor-pointer
                "
              >
                {loading ? "Verifying..." : "Continue"}
              </button>
            </div>
          </form>

          {/* Signup Link - Changed from a box to a clean text link */}
          <footer className="text-center pt-6">
             <p className="text-stone-500 text-sm">
                Need a fresh start?{" "}
                <Link href="/accounts/signup" className="text-white hover:text-orange-400 transition-colors font-semibold">
                  Create account
                </Link>
             </p>
          </footer>
        </div>
      </section>

      {/* RIGHT: IMAGE - Updated with a cleaner overlay */}
      <aside className="hidden lg:block lg:w-1/2 relative min-h-screen bg-[url('/login.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      </aside>
    </main>
  );
}