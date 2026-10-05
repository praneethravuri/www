import { data } from "@/app/data/resume";
import { markdownResponse, portfolioMarkdown } from "@/lib/portfolio-markdown";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(portfolioMarkdown(), 200, data.url);
}
