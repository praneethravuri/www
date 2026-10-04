import { data } from "@/app/data/resume";

export const dynamic = "force-static";

export function GET() {
  const markdown = `# ${data.firstName} ${data.lastName}

> ${data.summary}

Personal portfolio of ${data.firstName} ${data.lastName}, an ${data.title} based in ${data.location}. Updated ${data.lastUpdated}. The Markdown portfolio contains current experience, project descriptions, technologies, education, and contact details, generated from the same content as the website.

## Portfolio

- [Full portfolio in Markdown](${data.url}/index.md): Experience at Tuskira, Lumen, and ADP; projects; education; skills; and contact information.
- [Portfolio website](${data.url}): The human-readable version.

## Projects

${data.projects.map((project) => `- [${project.name}](${project.url}): ${project.description}`).join("\n")}

## Optional

${Object.values(data.contact.social)
  .map(
    (social) =>
      `- [${social.name}](${social.url}): ${data.firstName} ${data.lastName}'s ${social.name} profile.`
  )
  .join("\n")}
`;
  return new Response(markdown, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
