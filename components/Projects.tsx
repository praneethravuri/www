
"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof data.projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">
          Selected Work
        </h2>
        <span className="text-muted-foreground hidden md:block font-mono text-sm tracking-widest uppercase mb-2">
          Full Stack & AI Engineering
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            layoutId={`card - ${project.name} -${index} `}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer"
          >
            {/* Project Card - Typography Based */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted/30 border border-white/5 mb-6 transition-all duration-500 hover:border-white/20 flex flex-col justify-between p-8 sm:p-12 hover:bg-muted/50">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-8 h-8 text-foreground" />
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-bold text-foreground mb-3">{project.name}</h3>
                <p className="text-muted-foreground text-lg line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Decorative Gradient Blob */}
              <div className={cn(
                "absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700",
                index % 2 === 0 ? "bg-purple-500" : "bg-blue-500"
              )} />
            </div>

            <div className="flex flex-wrap gap-2 px-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm font-medium text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
            />
            <div className="fixed inset-0 z-[151] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                // layoutId={`card - ${ selectedProject.name } `} // Removed layoutId from modal as per instruction's clarification
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal
                className="bg-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl pointer-events-auto"
              >
                <div className="p-8 sm:p-12">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-4xl font-bold text-foreground mb-2">{selectedProject.name}</h3>
                      <div className="flex gap-3 text-sm text-muted-foreground font-mono">
                        {selectedProject.tags.join("  •  ")}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <X className="w-6 h-6 text-foreground" />
                    </button>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">The Problem</h4>
                      <p className="text-lg text-foreground leading-relaxed">
                        {selectedProject.problem || "No problem Statement defined."}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">The Solution</h4>
                      <p className="text-lg text-foreground leading-relaxed">
                        {selectedProject.solution || "No solution defined."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Outcome</h4>
                        <p className="text-foreground leading-relaxed">
                          {selectedProject.outcome || "Pending results."}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack?.map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-muted text-sm text-foreground font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                      <Link
                        href={selectedProject.url}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity"
                      >
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}