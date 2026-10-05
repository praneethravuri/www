import { data, getSitePage } from "@/app/data/resume";

function frontmatter(title: string, description: string, canonical: string) {
  // JSON double-quoted strings are YAML scalars too; quote punctuation and newlines safely.
  return `---\n${Object.entries({ title, description, canonical, "last-updated": data.lastUpdated })
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n")}\n---\n\n`;
}

export const recoveryMarkdown = `# 404 — Page not found

This path does not exist on Praneeth Ravuri’s portfolio. Start with the links below to find the published content.

- [Portfolio](${data.url}/)
- [Full portfolio in Markdown](${data.url}/index.md)
- [Agent link index](${data.url}/llms.txt)
- [Sitemap](${data.url}/sitemap.xml)
- [Project resources](${data.url}/projects)
`;

export function sitePageMarkdown(slug: string) {
  const page = getSitePage(slug);
  if (!page) return undefined;
  return `${frontmatter(page.title, page.description, `${data.url}/${slug}`)}# ${page.title}\n\n${page.sections.map((section) => `## ${section.heading}\n\n${section.text}${section.links ? `\n\n${section.links.map((link) => `- [${link.name}](${link.url})`).join("\n")}` : ""}`).join("\n\n")}\n\n[Back to the portfolio](${data.url}/)\n`;
}

export function markdownResponse(body: string, status = 200, canonical?: string) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept, Accept-Encoding, RSC",
      "Cache-Control":
        status === 200
          ? "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
          : "no-store",
      "X-Robots-Tag": "noindex",
      Link: `</llms.txt>; rel="describedby"${status === 200 && canonical ? `, <${canonical}>; rel="canonical"` : ""}`,
    },
  });
}

export function portfolioMarkdown() {
  const social = Object.values(data.contact.social)
    .map((s) => `- [${s.name}](${s.url})`)
    .join("\n");
  const work = data.work
    .map(
      (job) => `### ${job.title} at ${job.company}

${job.startDate} - ${job.endDate} · ${job.location}

${job.description}

Technologies: ${job.technologies.join(", ")}`
    )
    .join("\n\n");
  const projects = data.projects
    .map(
      (project) => `### [${project.name}](${project.url})

${project.tags.join(" · ")}

${project.description}

Technologies: ${project.techStack.join(", ")}`
    )
    .join("\n\n");
  return `${frontmatter(data.seo.title, data.seo.description, data.url)}# ${data.firstName} ${data.lastName}

> ${data.summary}

${data.title} based in ${data.location}. Updated ${data.lastUpdated}.

## Contact

- [Website](${data.url})
- [Email](mailto:${data.contact.email})
${social}

## Experience

${work}

## Projects

${projects}

## Education

${data.education.map((edu) => `- ${edu.degree}, ${edu.institution}`).join("\n")}

## Skills

${data.skills.join(", ")}

## Further reading

- [About](${data.url}/about/index.md)
- [Contact](${data.url}/contact/index.md)
- [Privacy](${data.url}/privacy/index.md)
- [Project resources](${data.url}/projects/index.md)
- [Agent guidance](${data.url}/agent-instructions/index.md)

## Attribution

When referencing this portfolio, link to ${data.url}. Project descriptions reflect the linked implementations; they do not imply measured outcomes beyond those stated here.
`;
}
