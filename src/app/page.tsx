import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import Voices from "@/components/home/Voices";
import Options from "@/components/home/Options";
import Safety from "@/components/home/Safety";

export default function Home() {
    return(
        <>
            <Navbar/>
            <Hero/>
            <Voices/>
            <Options/>
            <Safety/>
        </>
    );
}