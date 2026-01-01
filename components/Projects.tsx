"use client";
import { data } from "@/app/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Projects() {
    return (
        <section id="projects" className="py-16 max-w-4xl px-6 border-t">
            <div className="flex items-center justify-between mb-16">
                <h2 className="text-brand font-bold tracking-widest uppercase text-sm md:text-base">
                    Projects
                </h2>
                <div>
                    <Link href={data.contact.social.GitHub.url} target="_blank">
                        <Button variant="secondary" className="rounded-md bg-secondary/50 hover:bg-secondary/80 text-foreground/80 hover:text-foreground">
                            View Github
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-12">
                {data.projects.map((project, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <h3 className="text-xl font-bold text-foreground">
                                <Link href={project.url} target="_blank" className="text-foreground hover:text-brand hover:underline decoration-1 underline-offset-4 inline-flex items-center gap-2">
                                    {project.name}
                                </Link>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="secondary" className="text-xs font-mono font-normal bg-secondary/50 text-muted-foreground/80 hover:bg-secondary/80">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                            {project.description}
                        </div>

                        <div className="max-w-2xl">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${index}`} className="border-none">
                                    <AccordionTrigger className="py-0 text-sm text-foreground hover:text-brand hover:underline hover:no-underline justify-start gap-2">
                                        View Case Study
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-6 pt-4 text-muted-foreground leading-relaxed">
                                        <div className="space-y-1">
                                            <h5 className="font-semibold text-foreground text-sm">Problem</h5>
                                            <p>
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <h5 className="font-semibold text-foreground text-sm">Solution</h5>
                                            <p>
                                                {project.solution}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <h5 className="font-semibold text-foreground text-sm">Outcome</h5>
                                            <p>
                                                {project.outcome}
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
