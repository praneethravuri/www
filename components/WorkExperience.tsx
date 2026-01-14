"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomLink } from "@/components/ui/custom-link";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function WorkExperience() {
    return (
        <section id="work-experience" className="py-12 md:py-16 w-full">
            <div className="px-6 mx-auto">
                <div className="flex items-center justify-between mb-10 md:mb-16">
                    <h2 className="text-brand font-bold tracking-widest uppercase text-lg md:text-2xl">
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

                <div className="flex flex-col">
                    {data.work.map((role, index) => (
                        <Fragment key={index}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-xl font-bold text-foreground">
                                        <CustomLink href={role.companyUrl} className="text-foreground hover:text-brand">
                                            {role.company}
                                        </CustomLink>
                                        <span className="text-muted-foreground font-normal mx-2">
                                            —
                                        </span>
                                        <span className="text-muted-foreground font-medium">
                                            {role.title}
                                        </span>
                                    </h3>
                                    <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground/60">
                                        {role.startDate} — {role.endDate}
                                    </span>
                                </div>

                                <div className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                    {role.description}
                                </div>

                                <div className="flex flex-wrap gap-2 max-w-2xl">
                                    {role.technologies?.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="max-w-2xl">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1" className="border-none">
                                            <AccordionTrigger className="py-0 text-base text-foreground hover:text-brand hover:underline hover:no-underline justify-start gap-2">
                                                View More
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-lg pt-4 leading-relaxed">
                                                {role.deepInsight}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                            {index < data.work.length - 1 && (
                                <Separator className="my-12" />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
