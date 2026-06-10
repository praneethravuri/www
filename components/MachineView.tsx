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


${data.work.map((job) => `
### ${job.title} @ ${job.company}
[${job.startDate} - ${job.endDate}]
${job.description}
`).join('')}

---

## Projects


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


`.trim();

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative mx-auto animate-in fade-in duration-500">
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 -top-2 z-10 h-8 w-8 hover:bg-transparent text-muted-foreground"
                onClick={handleCopy}
                aria-label={copied ? "Copied" : "Copy resume as Markdown"}
            >
                {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            </Button>
            <span aria-live="polite" className="sr-only">
                {copied ? "Resume copied to clipboard" : ""}
            </span>

            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed overflow-x-auto rounded-md bg-card text-foreground/80 px-5 py-4 shadow-border-light" style={{ fontFeatureSettings: '"liga" 1' }}>
                {content}
            </pre>
        </div>
    );
}
