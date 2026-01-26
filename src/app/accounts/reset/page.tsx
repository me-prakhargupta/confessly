import Link from "next/link";
import AuthInput from "@/components/input/AuthInput";

export default function Reset() {
    return(
        <div>
            <main>
                <div className="min-h-screen flex justify-center sm:items-center px-4 py-15 bg-zinc-900">
                    <div className="w-full max-w-xl">
                        <header>
                            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-1">Find your account</h1>
                            <p className="font-medium text-lg sm:text-xl md:text-2xl">Enter your username or email.</p>
                        </header>

                        <main>
                            <div className="mt-3">
                                <AuthInput type="text" name="userEmail" lable="Username or email"/>
                            </div>

                            <div>
                                <p className="mt-5 font-semibold">You may receive notifications from us for security and login purposes.</p>
                            </div>

                            <div className="mt-6">
                                <button className="w-full border border-orange-400 text-black bg-orange-400 hover:bg-orange-300 hover:border-orange-300 text-base sm:text-lg font-semibold py-2 sm:py-3 rounded-full hover:cursor-pointer">Continue</button>
                            </div>
                        </main>
                    </div>
                </div>
            </main>
        </div>
    );
}