import PrivateProfilePage from "@/components/Profile/Private";
import PublicProfilePage from "@/components/Profile/Public";
import { getUser } from "@/services/auth";

export default function UserPage() {
    return(
        <>
            {/* <PublicProfilePage username="meprakhargupta"/> */}
            <PrivateProfilePage username="meprakhargupta" src="/login.jpg"/>
        </>
    );
}