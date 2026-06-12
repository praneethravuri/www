import { data } from "@/app/data/resume";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/components/ui/custom-link";

export function Projects() {
    return (
        <section id="projects" className="py-12 md:py-20 w-full px-5 animate-in fade-in slide-in-from-bottom-2 duration-500 border-t border-border scroll-mt-16">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <div>
                        <span className="block h-1 w-8 rounded-full bg-accent mb-4" aria-hidden="true" />
                        <h2 className="text-foreground text-3xl font-semibold tracking-heading">
                            Projects
                        </h2>
                    </div>
                    <div>
                        <Button variant="default" asChild>
                            <Link href={data.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer">
                                View GitHub
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-10 md:gap-14">
                    {data.projects.map((project, index) => (
                        <article
                            key={index}
                            className="flex flex-col gap-4 rounded-lg -mx-3 px-3 py-2 transition-colors duration-300 hover:bg-card/60 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-backwards"
                            style={{ animationDelay: `${Math.min(index * 100, 400)}ms` }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <h3 className="text-xl font-semibold tracking-tight-custom">
                                    <CustomLink href={project.url} className="inline-flex items-center gap-1 text-xl font-semibold">
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

                            <div className="text-base text-secondary-foreground leading-relaxed">
                                {project.description}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
