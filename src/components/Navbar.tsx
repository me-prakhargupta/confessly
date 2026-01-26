import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex justify-between w-[80%] m-auto bg-red-600 py-5">
            <div className="font-bold text-2xl">Confessly</div>

            <div>
                <ul className="flex items-center gap-[4vw]">
                    <li><Link href="/features">Features</Link></li>                    
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/profile">Profile</Link></li>                    
                    <li><Link href="/features">Features</Link></li>                    
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/profile">Profile</Link></li> 
                </ul>
            </div>

            <div>
                <button>Signup</button>
            </div>
        </nav>
    );
}