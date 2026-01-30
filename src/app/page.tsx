import Navbar from "@/components/Layout/Navbar";
import Entry from "@/components/Site/Entry";
import Philosophy from "@/components/Site/Philosophy";
import Choices from "@/components/Site/Choices";
import Field from "@/components/Site/Field";
import Final from "@/components/Site/Final";

export default function Home() {
    return(
        <>  
            <Navbar/>
            <Entry/>
            <Philosophy/>
            <Choices/>
            <Field/>
            <Final/>
        </>
    );
}