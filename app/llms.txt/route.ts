import { data } from "@/app/data/resume";

export const dynamic = "force-static";

export function GET() {
  const social = Object.values(data.contact.social)
    .map((s) => `- [${s.name}](${s.url})`)
    .join("\n");

  const work = data.work
    .map(
      (job) => `### ${job.title} at ${job.company}

${job.startDate} – ${job.endDate} · ${job.location}

${job.description}

Technologies: ${job.technologies.join(", ")}`
    )
    .join("\n\n");

  const projects = data.projects
    .map(
      (project) => `### [${project.name}](${project.url})

${project.tags.join(" · ")}

${project.description}

Tech stack: ${project.techStack.join(", ")}`
    )
    .join("\n\n");

  const education = data.education.map((edu) => `- ${edu.degree}, ${edu.institution}`).join("\n");

  const currentRole = data.work[0];

  const markdown = `# ${data.firstName} ${data.lastName}

> ${data.summary}

${data.title} at ${currentRole.company}. ${data.heroHeadline} Based in ${data.location}.

## Contact

- [Email](mailto:${data.contact.email})
- [Website](${data.url})
${social}

## Experience

${work}

## Projects

${projects}

## Education

${education}

## Skills

${data.skills.join(", ")}

## License & Attribution

Content available for AI and search indexing, discovery, research, and conversational use. Please link back to ${data.url}.
`;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
