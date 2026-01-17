import { data } from "@/app/data/resume";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function MachineView() {
    const [copied, setCopied] = useState(false);

    // Generate markdown content
    const content = `# ${data.firstName} ${data.lastName}
> ${data.location}
> ${data.taglines.heroTagline.role} at ${data.taglines.heroTagline.company}
> ${data.taglines.heroTagline.description}

## Skills
${data.skills.join(', ')}

---

## Contact
[Email](mailto:${data.contact.email})
[Website](${data.url})
${Object.values(data.contact.social).map((social) => `[${social.name}](${social.url})`).join('\n')}

---

## Work Experience
${data.taglines.experienceTagline.tagline}

${data.work.map((job) => `
### ${job.title} @ ${job.company}
[${job.startDate} - ${job.endDate}]
${job.description}
`).join('')}

---

## Projects
${data.taglines.projectsTagline.tagline}

${data.projects.map((project) => `
### ${project.name}
${project.description}

- Tech Stack: ${project.techStack.join(', ')}

[Link](${project.url})
`).join('')}

---

## Education
${data.education.map((edu) => `
### ${edu.degree}
${edu.institution}
`).join('')}

---

${data.taglines.footerTagline.tagline}
`.trim();

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative mx-auto">
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 -top-2 z-10 h-8 w-8 hover:bg-transparent text-muted-foreground"
                onClick={handleCopy}
            >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>

            <pre className="whitespace-pre-wrap font-source-code text-sm leading-relaxed overflow-x-auto rounded-md text-foreground/80 px-5">
                {content}
            </pre>
        </div>
    );
}
