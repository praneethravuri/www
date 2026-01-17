import { data } from "@/app/data/resume";

export function GET() {
    const markdown = `
# ${data.firstName} ${data.lastName}
> ${data.location}
> ${data.taglines.heroTagline.role} at ${data.taglines.heroTagline.company}
> ${data.taglines.heroTagline.description}

## Skills
- ${data.keywords.join(', ')}



## Contact
- Email: ${data.contact.email}
- Website: ${data.url}
${Object.values(data.contact.social).map((social) => `- ${social.name}: ${social.url}`).join('\n')}

## Work Experience
${data.work.map((job) => `
### ${job.title} at ${job.company}
- **Period**: ${job.startDate} - ${job.endDate}
- **Location**: ${job.location}
- **Description**: ${job.description}
- **Link**: ${job.companyUrl}
`).join('')}

## Projects
${data.projects.map((project) => `
### ${project.name}
- **Description**: ${project.description}
- **Tech Stack**: ${project.techStack.join(', ')}

- **Link**: ${project.url}
`).join('')}

## Education
${data.education.map((edu) => `
### ${edu.degree}
- **Institution**: ${edu.institution}
- **Link**: ${edu.institutionUrl}
`).join('')}
  `.trim();

    return new Response(markdown, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
