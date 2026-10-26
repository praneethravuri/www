import { data } from "@/app/data/resume";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="mt-20 scroll-mt-8">
      <h2 className="mb-2.5 flex items-center gap-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-muted-foreground after:h-px after:flex-1 after:bg-line after:content-['']">
        Projects
      </h2>

      <div className="flex flex-col">
        {data.projects.map((project, index) => (
          <div key={project.url} className={`group py-7.5 ${index === 0 ? "pt-5" : ""}`}>
            {/* Top row */}
            <div className="flex items-center gap-3.5">
              <div>
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <h3 className="text-[18px] font-semibold text-ink tracking-[-0.02em]">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="inline-flex items-center gap-2 group-hover:text-accent group-focus-visible:text-accent"
                    >
                      {project.name}
                      <ArrowUpRightIcon size={17} aria-hidden="true" />
                    </a>
                  </h3>
                  <span className="text-[15px] text-muted-foreground font-medium">
                    {project.tags.join(" · ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[16px] text-body mt-3.5 font-normal text-pretty">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
