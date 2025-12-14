import { data } from "@/app/data/resume";

export function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-bold border-b pb-2">Selected Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.projects.map((project) => (
          <a 
            key={project.name} 
            href={project.url} 
            target="_blank"
            className="group block border rounded-lg p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div>
                <h3 className="font-semibold group-hover:underline decoration-1 underline-offset-4 mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-foreground text-background rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}