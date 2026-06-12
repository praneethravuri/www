import { data } from "@/app/data/resume";

export const dynamic = "force-static";

export function GET() {
    const social = Object.values(data.contact.social)
        .map((s) => `- [${s.name}](${s.url})`)
        .join("\n");

    const work = data.work
        .map(
            (job) => `### ${job.title} — ${job.company}

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

    const education = data.education
        .map((edu) => `- ${edu.degree}, ${edu.institution}`)
        .join("\n");

    const markdown = `# ${data.firstName} ${data.lastName}

> ${data.summary}

${data.taglines.heroTagline.role} at ${data.taglines.heroTagline.company} — ${data.taglines.heroTagline.description} Based in ${data.location}.

## Contact

- Email: ${data.contact.email}
- Website: ${data.url}
${social}

## Experience

${work}

## Projects

${projects}

## Education

${education}

## Skills

${data.skills.join(", ")}
`;

    return new Response(markdown, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
    });
}
