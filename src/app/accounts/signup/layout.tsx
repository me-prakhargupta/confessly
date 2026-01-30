import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Beginning - Quietism",
  description: "A place to begin, so you have somewhere to return to.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}