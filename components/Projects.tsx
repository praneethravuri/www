"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/components/ui/custom-link";


export function Projects() {
    return (
        <section id="projects" className="py-8 md:py-12 w-full px-5">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-4 md:mb-8">
                    <h2 className="text-foreground text-xl md:text-2xl font-semibold">
                        Projects
                    </h2>
                    <div>
                        <Link href={data.contact.social.GitHub.url} target="_blank">
                            <Button variant="outline" className="rounded-md border-none">
                                View Github
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                    {data.projects.map((project, index) => (
                        <article key={index} className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <h3 className="text-lg font-semibold text-foreground">
                                    <CustomLink href={project.url} className="text-foreground inline-flex items-center gap-1 text-lg font-semibold">
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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
