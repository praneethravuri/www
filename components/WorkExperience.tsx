"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomLink } from "@/components/ui/custom-link";
import { Fragment } from "react";

export function WorkExperience() {
    return (
        <section id="work-experience" className="py-8 md:py-12 w-full">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-5 md:mb-8">
                    <h2 className="text-foreground font-bold tracking-widest uppercase text-[clamp(1.25rem,5vw,1.5rem)]">
                        Work Experience
                    </h2>
                    <div>
                        <Link href={data.contact.social.Resume.url} target="_blank">
                            <Button variant="secondary" className="rounded-md bg-secondary/50 hover:bg-secondary/80 text-foreground/80 hover:text-foreground">
                                Download Resume
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-12 md:gap-16">
                    {data.work.map((role, index) => (
                        <Fragment key={index}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-bold text-foreground">
                                        <CustomLink href={role.companyUrl} className="text-foreground text-[clamp(1rem,2vw,1.125rem)]">
                                            {role.company}
                                        </CustomLink>
                                        <span className="text-foreground font-normal mx-2">
                                            —
                                        </span>
                                        <span className="text-foreground font-medium">
                                            {role.title}
                                        </span>
                                    </h3>
                                    <span className="text-base font-normal tracking-wide text-muted-foreground/80">
                                        {role.startDate} — {role.endDate}
                                    </span>
                                </div>

                                <div className="text-[clamp(0.875rem,2vw,1rem)] text-foreground leading-relaxed max-w-2xl">
                                    {role.description}
                                </div>

                                <div className="flex flex-wrap gap-2 max-w-2xl">
                                    {role.technologies?.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
