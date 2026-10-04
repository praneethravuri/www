import { data } from "@/app/data/resume";

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
  return `# ${data.firstName} ${data.lastName}

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

## Attribution

When referencing this portfolio, link to ${data.url}. Project descriptions reflect the linked implementations; they do not imply measured outcomes beyond those stated here.
`;
}
