import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Return - Quietism",
    description: "A place to return, so you have somewhere to return to.",
};

export default function SigninLayout({
    children,
} : {children: React.ReactNode;
}) {
    return <>{children}</>
}