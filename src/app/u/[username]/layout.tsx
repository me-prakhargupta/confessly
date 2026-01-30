import { Metadata } from "next";
import { getUser } from "@/services/auth";

const fullname = "Prakhar Gupta";

type Props = {
    params: Promise<{username: string}>;
};

export async function generateMetadata({params} : Props) : Promise<Metadata> {
    const { username } = await params;

    const user = await getUser(username);

    return {
        title: `${user?.fullname || "Profile"} - Quietism`,
        description: `View ${user?.fullName}'s reflections in the sanctuary.`
    };
};