import Confessions from "@/app/thoughts/page";
import PrivateProfilePage from "@/components/profile/Private";
import PublicProfilePage from "@/components/profile/Public";

type Confessions = {
    id: number;
    content: string;
};

confessions: [
      {
        id: "1",
        content:
          "Some days I feel fine, and some days I don’t know why I’m tired.",
      },
      {
        id: "2",
        content:
          "I wish it was easier to talk about things without explaining myself.",
      },
    ]

export default function UserPage() {
    return(
        <>
            {/* <PublicProfilePage username="meprakhargupta"/> */}
            <PrivateProfilePage username="meprakhargupta" src="/login.jpg"/>
        </>
    );
}