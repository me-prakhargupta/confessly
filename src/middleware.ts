import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    
    const token = req.cookies?.get("accessToken")?.value;

    if(!token) {
        return NextResponse.redirect(new URL("/accounts/signin", req.url));
    }

    return NextResponse.next();
};

export const config = {
  matcher: ["/me/:path*"],
};
