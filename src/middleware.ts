import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const allowedOrigins = [
  "https://miaad.vercel.app",
];

export async function middleware(request: NextRequest) {
  const sessionCookie = await getSessionCookie(request);
  const url = new URL(request.url);
  const origin = request.headers.get("origin") || "";

  if (request.method === "OPTIONS") {
    if (allowedOrigins.includes(origin)) {
      return new NextResponse(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
          "Vary": "Origin",
        },
      });
    } else {
      return new NextResponse("Error: Origin not allowed", { status: 403 });
    }
  }

  if (!sessionCookie) {
    if (url.pathname.startsWith("/api")) {
      return new NextResponse(
        JSON.stringify({ error: "Unauthorized" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
            ...(allowedOrigins.includes(origin) && {
              "Access-Control-Allow-Origin": origin,
              "Access-Control-Allow-Credentials": "true",
              "Vary": "Origin",
            }),
          },
        }
      );
    } else if (url.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (url.pathname.startsWith("/api")) {
    if (!allowedOrigins.includes(origin)) {
      return new NextResponse(
        JSON.stringify({ error: "Forbidden: Origin not allowed" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Vary", "Origin");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/:path*",
  ],
};
