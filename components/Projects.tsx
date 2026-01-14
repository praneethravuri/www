"use client";
import { data } from "@/app/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/components/ui/custom-link";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24 w-full">
            <div className="px-6 mx-auto">
                <div className="flex items-center justify-between mb-10 md:mb-16">
                    <h2 className="text-brand font-bold tracking-widest uppercase text-xl md:text-3xl">
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

                <div className="flex flex-col">
                    {data.projects.map((project, index) => (
                        <Fragment key={index}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                        <CustomLink href={project.url} className="text-foreground hover:text-brand inline-flex items-center gap-2">
                                            {project.name}
                                        </CustomLink>
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                    {project.description}
                                </div>

                                <div className="max-w-2xl mt-4 md:mt-6">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value={`item-${index}`} className="border-none text-base md:text-lg">
                                            <AccordionTrigger className="py-0 text-base text-foreground hover:text-brand hover:underline hover:no-underline justify-start gap-2">
                                                View Case Study
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-6 pt-4 text-muted-foreground leading-relaxed">
                                                <div className="space-y-1">
                                                    <h5 className="font-semibold text-foreground text-lg">Problem</h5>
                                                    <p className="text-base md:text-lg">
                                                        {project.problem}
                                                    </p>
                                                </div>
                                                <div className="space-y-1">
                                                    <h5 className="font-semibold text-foreground text-lg">Solution</h5>
                                                    <p className="text-base md:text-lg">
                                                        {project.solution}
                                                    </p>
                                                </div>
                                                <div className="space-y-1">
                                                    <h5 className="font-semibold text-foreground text-lg">Outcome</h5>
                                                    <p className="text-base md:text-lg">
                                                        {project.outcome}
                                                    </p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                            {index < data.projects.length - 1 && (
                                <Separator className="my-12" />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
