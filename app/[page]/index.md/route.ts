import { data, sitePages } from "@/app/data/resume";
import { markdownResponse, recoveryMarkdown, sitePageMarkdown } from "@/lib/portfolio-markdown";

export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(sitePages).map((page) => ({ page }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const body = sitePageMarkdown(page);
  return markdownResponse(
    body ?? recoveryMarkdown,
    body ? 200 : 404,
    body ? `${data.url}/${page}` : undefined
  );
}
