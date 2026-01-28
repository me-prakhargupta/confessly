import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Choices from "@/components/home/Choices";
import Safety from "@/components/home/Safety";

export default function Home() {
    return(
        <>
            <Navbar/>
            <Hero/>
            <Choices/>
            <Safety/>
        </>
    );
}