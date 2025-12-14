import { data } from "@/app/data/resume";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Selected Work</h2>
        <span className="text-muted-foreground hidden md:block">
          Full Stack & AI Engineering
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {data.projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            className="group block"
          >
            {/* Project Card */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-6 transition-all duration-500 group-hover:border-white/20">
              {/* Gradient or Image Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? "from-purple-900/40 to-blue-900/40" : "from-blue-900/40 to-teal-900/40"
                } group-hover:scale-105 transition-transform duration-700`} />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-4 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-sm text-white/70">
                  View Project
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-white group-hover:underline decoration-1 underline-offset-4 decoration-white/40">
                  {project.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>

              <p className="text-lg text-muted-foreground line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full border border-white/10 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}