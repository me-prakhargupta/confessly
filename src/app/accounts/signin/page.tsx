import Image from "next/image";
import Link from "next/link";
// import LoginAuthForm from "../../components/input/LoginAuthForm";

export default function LoginPage() {
    return(
        <div className="flex">
                <main className="bg-[url('/shadow.jpg')] min-h-screen w-230 bg-cover flex items-end bg-center"></main>
                <div className="bg-white justify-items-start px-5">
                    <div className=""><Link href="/"><Image className="mt-10" src="/brand-logo.png" alt="Trusto" width={200} height={200}/></Link></div>
                    <div className="justify-items-start mt-3">
                        <p className="text-3xl py-2 font-extrabold text-[#028174] ">Log in to your account</p>
                        <p className="">Don't have an account? <Link href="/signup" className="font-medium  text-base hover:underline">Sign up</Link></p>
                    </div>

                    <div >
                        <Link href="#" className="flex items-center justify-center gap-3 rounded border border-2 border-gray-400 mt-6 mb-8 w-90 py-3 hover:cursor-pointer transition-all shadow-sm hover:shadow hover:rounded-4xl">
                            <Image src="/google.png" alt="Trusto" width={25} height={25} className="rounded-lg"/>
                            <p className="px-1.5">Signup with Google</p>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center my-6 w-full">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-3 text-gray-600 text-sm whitespace-nowrap">Or with email and password</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    <div className="w-90">
                        {/* <LoginAuthForm type="text" name="name" lable="Email address*"/> */}
                        {/* <LoginAuthForm type="password" name="password" lable="Password*"/> */}
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-[#0AB68B] text-white hover:bg-[#028174] font-bold py-3 px-4 rounded hover:cursor-pointer transition-all shadow-sm hover:shadow hover:rounded-4xl w-90">Log in</button>
                        <br/>
                    </div>
                </div>
            </div>
    );
};