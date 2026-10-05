import { data } from "@/app/data/resume";

export const dynamic = "force-static";

export function GET() {
  const markdown = `# ${data.firstName} ${data.lastName}

> ${data.summary}

Personal portfolio of ${data.firstName} ${data.lastName}, an ${data.title} based in ${data.location}. Updated ${data.lastUpdated}. The Markdown portfolio contains current experience, project descriptions, technologies, education, and contact details, generated from the same content as the website.

Read-only personal portfolio; there is no hosted API or MCP endpoint. Employer names describe work experience, not the publisher of this site.

## When to use this

- [Agent instructions](${data.url}/agent-instructions/index.md): Use this site to understand Praneeth Ravuri’s experience with security investigation agents, agent memory, MCP integrations, and Go backend systems; compare project implementations; and find professional contact details. Read with GET and Accept: text/markdown, or follow the explicit Markdown links. Project execution instructions live in the repositories.

## Portfolio

- [Full portfolio in Markdown](${data.url}/index.md): Experience at Tuskira, Lumen, and ADP; projects; education; skills; and contact information.
- [Portfolio website](${data.url}): The human-readable version.
- [About Praneeth Ravuri](${data.url}/about/index.md): Engineering background, education, and the scope of this personal portfolio.
- [Contact Praneeth Ravuri](${data.url}/contact/index.md): Professional inquiries and project questions.
- [Privacy notice](${data.url}/privacy/index.md): Hosting, analytics, performance measurement, email, and external links.

## Projects

- [praneethravuri developer resources](${data.url}/projects): Praneeth Ravuri publishes these projects under the GitHub handle praneethravuri. Find repository source code, README setup instructions, and project technologies here.
- [Developer project resources](${data.url}/projects/index.md): Source code and README setup links for Tether, Gary, Pitstop, Smart Traffic, and Notstuck.
${data.projects.map((project) => `- [${project.name}](${project.url}): ${project.description}`).join("\n")}

## Website source

- [Portfolio source code](https://github.com/praneethravuri/www): The Next.js implementation of this website, including Markdown routes, crawler files, and verification scripts.
- [Portfolio development instructions](https://github.com/praneethravuri/www/blob/main/AGENTS.md): Repository-specific commands, content architecture, design constraints, and checks for agents contributing to the website.

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
