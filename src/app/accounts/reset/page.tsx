import Link from "next/link";
import AuthInput from "@/components/input/AuthInput";

export default function Reset() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 sm:p-10">
        <header className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Find your account</h1>
          <p className="text-white/60">Enter your username or email to continue.</p>
        </header>
        <div className="space-y-6">
            <AuthInput type="text" name="userEmail" lable="Username or email"/>
            
            <p className="text-xs text-white/40 text-center">We may send security-related notifications to help you regain access.</p>

            <button className="w-full rounded-xl bg-gradient-to-r from-orange-400 to-amber-500 text-black font-semibold py-3 hover:opacity-90 transition">Continue</button>
        </div>
      </div>
    </section>
  );
}
