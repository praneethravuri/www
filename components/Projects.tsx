"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import { Github } from "lucide-react";
import * as motion from "motion/react-client";

export function Projects() {
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
        <span className="text-muted-foreground hidden md:block font-mono text-xs tracking-widest uppercase mb-2">
          Full Stack & AI Engineering
        </span>
      </motion.div>

      <div className="flex flex-col">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
              <div className="md:col-span-1 flex flex-col pt-1">
                <Link
                  href={project.url}
                  target="_blank"
                  className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 w-fit"
                >
                  {project.name}
                </Link>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      /{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col gap-6">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  className="flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group/link w-fit"
                >
                  <Github className="mr-2 w-4 h-4 group-hover/link:text-primary transition-colors" />
                  View on GitHub
                </Link>
              </div>
          </motion.div>
        ))}
        {/* Bottom border for the last item */}
        <div className="w-full h-[1px] bg-foreground/10" />
      </div>
    </section>
  );
}