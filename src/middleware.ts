import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies?.get("accessToken")?.value;
    const { pathname } = req.nextUrl;

    const unfinishedRoutes = [
        "/accounts/reset",
    ];

    const isUnfinished = unfinishedRoutes.some(route => pathname.startsWith(route));

    if(isUnfinished) {
        return NextResponse.redirect(new URL("/hold-on", req.url));
    }

    if(pathname.startsWith("/me") && !token) {
        return NextResponse.redirect(new URL("/accounts/signin", req.url));
    }

    return NextResponse.next();
};

export const config = {
  matcher: ["/me/:path*",
    "/accounts/reset/:path*"
  ],
};