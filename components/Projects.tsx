import Image from "next/image";
import { data } from "@/app/data/resume";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="mt-[88px] max-[600px]:mt-[70px] scroll-mt-8"
    >
      <h2 className="mb-6 flex items-center gap-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-muted-foreground after:h-px after:flex-1 after:bg-line after:content-['']">
        Projects
      </h2>
      <div className="grid gap-6">
        {data.projects.map((project) => (
          <Card
            key={project.url}
            className="group gap-0 overflow-hidden rounded-lg border-line bg-background py-0 shadow-none transition-colors hover:border-line-strong"
          >
            <div className="relative aspect-[2/1] overflow-hidden border-b border-line bg-background">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                unoptimized={project.image.endsWith(".svg")}
                sizes="(max-width: 768px) calc(100vw - 42px), 720px"
                className="object-contain"
              />
            </div>
            <CardHeader className="gap-2 px-6 pt-6">
              <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  {project.name}
                  <ArrowUpRightIcon size={17} aria-hidden="true" />
                </a>
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
                {project.tags.join(" · ")}
              </p>
            </CardHeader>
            <CardContent className="px-6 pt-4">
              <p className="text-[16px] font-normal text-body text-pretty">{project.description}</p>
            </CardContent>
            <CardFooter className="flex-wrap gap-1.5 px-6 pt-5 pb-6">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
