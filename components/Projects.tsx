"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/components/ui/custom-link";
import { Fragment } from "react";

const tagline = data.taglines.projectsTagline;

export function Projects() {
    return (
        <section id="projects" className="py-8 md:py-12 w-full">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-4 md:mb-8">
                    <h2 className="text-foreground text-xl md:text-2xl font-semibold">
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

                <div className="text-base text-muted-foreground mb-4 md:mb-8">
                    {tagline.tagline}
                </div>

                <div className="flex flex-col gap-12 md:gap-16">
                    {data.projects.map((project, index) => (
                        <Fragment key={index}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        <CustomLink href={project.url} className="text-foreground inline-flex items-center gap-2">
                                            {project.name}
                                        </CustomLink>
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-base text-muted-foreground">
                                    {project.description}
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
