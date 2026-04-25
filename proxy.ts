import { NextRequest, NextResponse } from "next/server";

const BASE_DOMAIN = process.env.BASE_DOMAIN ?? "kisusu.dev";
const ROOT_REDIRECT_SLUG = "intro";

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const hostname = host.split(":")[0];

  if (hostname.endsWith(".localtest.me")) {
    const slug = hostname.replace(".localtest.me", "");
    const url = req.nextUrl.clone();
    url.pathname = `/${slug}${req.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return NextResponse.next();
  }

  if (hostname.endsWith(".vercel.app")) {
    return NextResponse.next();
  }

  if (hostname === BASE_DOMAIN || hostname === `www.${BASE_DOMAIN}`) {
    if (req.nextUrl.pathname === "/") {
      const url = req.nextUrl.clone();
      url.pathname = `/${ROOT_REDIRECT_SLUG}`;
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  if (hostname.endsWith(`.${BASE_DOMAIN}`)) {
    const slug = hostname.slice(0, -1 * (BASE_DOMAIN.length + 1));
    const url = req.nextUrl.clone();
    url.pathname = `/${slug}${req.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
