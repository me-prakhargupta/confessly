// "use client";
// import { usePathname } from "next/navigation";
// import Footer from "@/components/common/Footer";
// export default function ClientLayout({
//     children,
// } : {
//     children: React.ReactNode;
// }) {

//     const pathname = usePathname();

//     const authRoutes = ["/accounts/signin", "/accounts/signup"];
//     const hideLayout = authRoutes.includes(pathname);

//     return(
//         <>
//             {children}
//             {!hideLayout && <Footer />}
//         </>
//     );
// };