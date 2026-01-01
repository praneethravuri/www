"use client";

import { data } from "@/app/data/resume";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function MachineView() {
    const [copied, setCopied] = useState(false);

    // Generate markdown content
    const content = `# ${data.firstName} ${data.lastName}
> ${data.title}

${data.about}

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
- **Problem**: ${project.problem}
- **Solution**: ${project.solution}
- **Outcome**: ${project.outcome}
- **Link**: ${project.url}
`).join('')}

## Education
${data.education.map((edu) => `
### ${edu.degree}
- **Institution**: ${edu.institution}
- **Link**: ${edu.institutionUrl}
`).join('')}
`.trim();

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative max-w-3xl mx-auto p-6 my-8 rounded-lg border bg-background shadow-sm">
            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-4 z-10 h-8 w-8"
                onClick={handleCopy}
            >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed overflow-x-auto p-4 rounded-md">
                {content}
            </pre>
        </div>
    );
}
