"use client";
import { data } from "@/app/data/resume";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Badge } from "./ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Projects() {
    return (
        <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter"
            >
                Selected Projects
            </motion.h2>

            <div className="flex flex-col">
                {data.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 border-t group"
                    >
                        {/* Left Column: Date & Company */}


                        {/* Right Column: Role & Description */}
                        <div className="md:col-span-9 flex flex-col gap-4">
                            <Link href={project.url} target="_blank" className="hover:underline decoration-1 underline-offset-4 text-2xl md:text-3xl font-medium text-brand">
                                {project.name}
                            </Link>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {project.tags.map((tag, index) => (
                                    <Badge key={index} className="bg-brand/10 text-brand hover:bg-brand/20">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${index}`} className="border-none">
                                    <AccordionTrigger className="py-2 text-sm text-brand hover:underline hover:no-underline">
                                        View Case Study
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-6 pt-4">
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-foreground text-lg">Problem</h5>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-foreground text-lg">Solution</h5>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {project.solution}
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-foreground text-lg">Outcome</h5>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {project.outcome}
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
