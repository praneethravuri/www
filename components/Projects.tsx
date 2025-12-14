"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import { Github, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "motion/react";

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter">
          Selected Work
        </h2>
      </motion.div>

      <div className="flex flex-col">
        {data.projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-foreground/10 group"
            >
              {/* Mobile: Tech Stack Top */}
              <div className="md:col-span-3 flex flex-col pt-1">
                <span className="text-xs font-mono tracking-widest uppercase mb-4 text-muted-foreground/60">
                  {project.name}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-foreground/5 text-foreground/70 text-[10px] uppercase tracking-wider font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-9 flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="text-3xl md:text-4xl font-medium text-foreground hover:text-foreground/70 transition-colors w-fit flex items-center gap-3"
                    >
                      {project.name}
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-y-2 translate-x-[-10px] group-hover:translate-x-0" />
                    </Link>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Expandable Case Study Details */}
                <div className="mt-4">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group/btn"
                  >
                    {isExpanded ? "Hide Details" : "View Case Study"}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 pb-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-bold text-foreground">Problem</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-bold text-foreground">Solution</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-bold text-foreground">Outcome</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>


                <div className="flex items-center gap-6 pt-2">
                  <Link
                    href={project.url}
                    target="_blank"
                    className="flex items-center text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group/link"
                  >
                    <Github className="mr-2 w-4 h-4 group-hover/link:text-foreground transition-colors" />
                    View Source
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}