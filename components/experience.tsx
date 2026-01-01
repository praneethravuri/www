"use client";
import { data } from "@/app/data/resume";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Experience() {
    return (
        <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-between mb-16">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-brand font-bold tracking-widest uppercase text-sm md:text-base"
                >
                    Experience
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Link href={data.resumeUrl} target="_blank">
                        <Button variant="secondary" className="rounded-md bg-secondary/50 hover:bg-secondary/80 text-foreground/80 hover:text-foreground">
                            Download Resume
                        </Button>
                    </Link>
                </motion.div>
            </div>

            <div className="flex flex-col gap-12">
                {data.work.map((role, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col gap-2"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <h3 className="text-xl font-bold text-foreground">
                                <Link href={role.companyUrl} target="_blank" className="text-foreground hover:text-brand hover:underline decoration-1 underline-offset-4">
                                    {role.company}
                                </Link>
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
                                    <AccordionContent className="text-muted-foreground pt-4 leading-relaxed">
                                        {role.deepInsight}
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
