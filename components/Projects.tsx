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
      </motion.div>

      <div className="flex flex-col">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 py-12 border-t border-foreground/10 group"
          >
            <div className="md:col-span-1 flex flex-col pt-1">
              <span className="text-xs font-mono tracking-widest uppercase mb-2 text-muted-foreground">
                {project.tags.join(" • ")}
              </span>
            </div>

            <div className="md:col-span-3 flex flex-col gap-4">
              <Link
                href={project.url}
                target="_blank"
                className="text-2xl md:text-3xl font-medium text-foreground hover:underline w-fit"
              >
                {project.name}
              </Link>
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
      </div>
    </section>
  );
}