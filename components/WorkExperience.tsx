"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function WorkExperience() {
    return (
        <section id="work-experience" className="py-16 max-w-4xl px-6 border-t">
            <div className="flex items-center justify-between mb-16">
                <h2 className="text-brand font-bold tracking-widest uppercase text-sm md:text-base">
                    Work Experience
                </h2>
                <div>
                    <Link href={data.resumeUrl} target="_blank">
                        <Button variant="secondary" className="rounded-md bg-secondary/50 hover:bg-secondary/80 text-foreground/80 hover:text-foreground">
                            Download Resume
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-12">
                {data.work.map((role, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <h3 className="text-xl font-bold text-foreground">
                                <Link href={role.companyUrl} target="_blank" className="text-foreground hover:text-brand hover:underline decoration-1 underline-offset-4">
                                    {role.company}
                                </Link>
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

                        <div className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                            {role.description}
                        </div>

                        <div className="max-w-2xl">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className="border-none">
                                    <AccordionTrigger className="py-0 text-sm text-foreground hover:text-brand hover:underline hover:no-underline justify-start gap-2">
                                        View More
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base pt-4 leading-relaxed">
                                        {role.deepInsight}
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
