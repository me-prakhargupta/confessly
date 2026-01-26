import Link from "next/link";
import AuthInput from "@/components/input/AuthInput";

export default function Signin() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-zinc-900">
      <main className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-10 lg:border-r lg:border-zinc-400/50">
        <div className="w-full max-w-md">
            <div>
                <h1 className="text-orange-400 text-2xl sm:text-3xl font-bold leading-snug mb-7">Say, what <span className="bg-gradient-to-r from-[#FB923C] to-[#FDBA74] bg-clip-text text-transparent">you can't say.</span>.</h1>
            </div>
            <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-1">Log in to Confessly</h2>
                <p className="mb-2 text-gray-300/60 font-medium text-sm sm:text-base">To keep and track your confessions.</p>
            </div>

            <div className="mt-4 sm:mt-6">
                <AuthInput type="text" name="userEmail" lable="Username or email" />
            </div>

            <div className="mt-4 sm:mt-6">
                <AuthInput type="password" name="password" lable="Password" />
            </div>

            <div className="mt-4 sm:mt-6">
                <button className="w-full border border-orange-400 text-black bg-orange-400 hover:bg-orange-300 hover:border-orange-300 text-base sm:text-lg font-semibold py-3 sm:py-3.5 rounded-full hover:cursor-pointer">Log in</button>
            </div>

            <div className="flex justify-center">
                <Link href="/accounts/reset" className="inline-block mt-5 text-center font-semibold">Forgot password?</Link>
            </div>

            <div className="flex justify-center mt-8 sm:mt-10">
                <Link href="/accounts/signup" className="inline-block w-full text-orange-400 text-center font-semibold border border-orange-400 py-3 sm:py-4 rounded-full hover:cursor-pointer hover:bg-zinc-950 text-sm sm:text-base">Create new account</Link>
            </div>
        </div>
      </main>

      <aside className="hidden lg:block lg:w-1/2 relative min-h-screen bg-[url('/login.jpg')] bg-cover bg-center">
        
        <div className="absolute inset-0 bg-black/60" />

      </aside>
    </div>
  );
}
