import AuthInput from "@/components/input/AuthInput";
import Link from "next/link";

export default function Home() {
    return(
        <div className="min-h-screen flex justify-center items-center px-4 py-10 bg-zinc-900">
            <div className="w-full max-w-xl">
                <header>
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-1">Get started with Confessly</h1>
                    <p className="mb-2 text-gray-300 font-medium text-sm sm:text-base">Some thoughts deserve a safe place.</p>
                    <p className="font-medium text-lg sm:text-xl md:text-2xl">Create your account and confess freely</p>
                </header>

                <main>
                    <div className="mt-6">
                        <p className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Email address</p>

                        <AuthInput type="text" name="email" lable="Email address"/>

                        <p className="font-semibold text-sm sm:text-base text-gray-300 mt-1">You may receive a notification from us. <span className="text-orange-400 hover:text-orange-300"><Link href="/">Learn why we ask for verification</Link></span></p>
                    </div>
                    
                    <div className="mt-6">
                        <p className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Password</p>
                        <AuthInput type="password" name="password" lable="Password"/>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Name</p>
                        <AuthInput type="text" name="fullname" lable="Full name"/>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Username</p>
                        <AuthInput type="text" name="username" lable="Username"/>
                        <p className="font-semibold text-base text-gray-300 mt-1">Username can contain only lowercase letters (a–z), numbers (0–9), and underscores (_).</p>
                    </div>

                    <div>
                        <p className="mt-7 font-semibold text-sm sm:text-base leading-relaxed">By tapping Submit, you agree to create an account and to Confessly's <span className="text-orange-400 hover:text-orange-300"><Link href="/">Terms</Link></span>, <span className="text-orange-400 hover:text-orange-300"><Link href="/">Privacy Policy</Link></span>  and <span className="text-orange-400 hover:text-orange-300"><Link href="/"> Cookies Policy</Link></span>.</p>

                        <p className="mt-5 font-semibold">We use your details only to create, verify, and secure your account.</p>
                    </div>

                    <div className="mt-6">
                        <button className="w-full border border-orange-400 text-black bg-orange-400 hover:bg-orange-300 hover:border-orange-300 text-base sm:text-lg font-semibold py-2 sm:py-3 rounded-full hover:cursor-pointer">Submit</button>
                    </div>
                </main>

                <section>
                    <div className="flex justify-center mt-10">
                        <Link href="/accounts/signin" className="inline-block w-full text-center font-semibold border border-white/70 py-3 sm:py-4 rounded-full hover:cursor-pointer hover:bg-zinc-950 text-sm sm:text-base">I already have an account</Link>
                    </div>
                </section>
            </div>
        </div>
    );
}