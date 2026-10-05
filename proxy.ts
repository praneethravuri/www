import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";
import { data, getSitePage } from "@/app/data/resume";
import {
  markdownResponse,
  portfolioMarkdown,
  recoveryMarkdown,
  sitePageMarkdown,
} from "@/lib/portfolio-markdown";

export function proxy(request: NextRequest) {
  const next = () => NextResponse.next({ headers: { Vary: "Accept, Accept-Encoding" } });
  if (!["GET", "HEAD"].includes(request.method) || request.headers.get("rsc") === "1")
    return next();
  const path = request.nextUrl.pathname;
  const slug = path.slice(1);
  // Explicit Markdown URLs are stable alternatives and do not negotiate.
  if (path.endsWith("/index.md") && getSitePage(slug.slice(0, -9))) return next();
  const representation = new Negotiator({
    headers: { accept: request.headers.get("accept") ?? "*/*" },
  }).mediaType(["text/html", "text/markdown"]);
  if (representation === "text/html") return next();
  if (!representation) {
    const exists = path === "/" || Boolean(getSitePage(slug));
    return new Response(
      request.method === "HEAD"
        ? null
        : exists
          ? "Not acceptable. Available representations: text/html, text/markdown.\n"
          : recoveryMarkdown,
      {
        status: exists ? 406 : 404,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          Vary: "Accept, Accept-Encoding, RSC",
          "Cache-Control": "no-store",
        },
      }
    );
  }
  const body = path === "/" ? portfolioMarkdown() : sitePageMarkdown(slug);
  const response = markdownResponse(
    body ?? recoveryMarkdown,
    body ? 200 : 404,
    body ? `${data.url}${path === "/" ? "" : path}` : undefined
  );
  // The negotiated URL is indexable; only explicit .md duplicates use noindex.
  if (body) response.headers.delete("X-Robots-Tag");
  return request.method === "HEAD" ? new Response(null, response) : response;
}

export const config = {
  matcher: [
    "/((?!_next/|_vercel/|icons/|favicon\\.ico$|opengraph-image$|twitter-image$|robots\\.txt$|sitemap\\.xml$|manifest\\.webmanifest$|llms\\.txt$|index\\.md$).*)",
  ],
};
