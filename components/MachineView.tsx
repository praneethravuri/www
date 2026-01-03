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
[Email](mailto:${data.contact.email})
[Website](${data.url})
${Object.values(data.contact.social).map((social) => `[${social.name}](${social.url})`).join('\n')}

## Work Experience
${data.work.map((job) => `
### ${job.title} @ ${job.company}
[${job.startDate} - ${job.endDate}]
${job.description}
[Link](${job.companyUrl})
`).join('')}

## Projects
${data.projects.map((project) => `
### ${project.name}
${project.description}

- Tech Stack: ${project.techStack.join(', ')}
- Problem: ${project.problem}
- Solution: ${project.solution}
- Outcome: ${project.outcome}
[Link](${project.url})
`).join('')}

## Education
${data.education.map((edu) => `
### ${edu.degree}
[${edu.institution}](${edu.institutionUrl})
`).join('')}
`.trim();

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative mx-auto p-4 md:p-6 my-8">
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 z-10 h-8 w-8 hover:bg-transparent text-muted-foreground"
                onClick={handleCopy}
            >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <pre className="whitespace-pre-wrap font-source-code text-sm leading-relaxed overflow-x-auto rounded-md text-foreground/80">
                {content}
            </pre>
        </div>
    );
}
