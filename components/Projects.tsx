import { data } from "@/app/data/resume";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="mt-[88px] max-[600px]:mt-[70px] scroll-mt-8"
    >
      <h2 className="mb-[10px] flex items-center gap-3.5 text-[12.5px] font-[500] uppercase tracking-[0.18em] text-muted-foreground after:h-px after:flex-1 after:bg-line after:content-['']">
        Projects
      </h2>

      <div className="flex flex-col">
        {data.projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block py-[30px] ${
              index === 0
                ? "border-t-0 pt-5"
                : "border-t border-line"
            }`}
          >
            {/* Head */}
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <h3 className="inline-flex items-center gap-2 text-[18px] font-[600] tracking-[-0.02em] text-ink leading-[1.2]">
                {project.name}
                <ArrowUpRightIcon
                  size={15}
                  className="text-faint transition-all duration-200 group-hover:text-ink group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                />
              </h3>
              <span className="text-[15px] text-muted-foreground font-[460]">
                {project.tags.join(" · ")}
              </span>
            </div>

            {/* Description */}
            <p className="text-[16px] text-body mt-3.5 font-[420] text-pretty">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {project.techStack.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
