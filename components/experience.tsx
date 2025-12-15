"use client";
import { data } from "@/app/data/resume";
import * as motion from "motion/react-client";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Experience() {
    return (
        <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter"
            >
                Experience
            </motion.h2>

            <div className="flex flex-col">
                {data.work.map((role, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 border-t group"
                    >
                        {/* Left Column: Date & Company */}
                        <div className="md:col-span-3 flex flex-col pt-1">
                            <span className="text-xs font-mono tracking-widest uppercase mb-2 text-brand/80 font-semibold">
                                {role.startDate} — {role.endDate}
                            </span>
                            <h3 className="text-xl font-medium text-foreground">
                                <Link href={role.companyUrl} target="_blank" className="hover:underline decoration-1 underline-offset-4">
                                    {role.company}
                                </Link>
                            </h3>
                        </div>

                        {/* Right Column: Role & Description */}
                        <div className="md:col-span-9 flex flex-col gap-4">
                            <h4 className="text-2xl md:text-3xl font-medium text-foreground">
                                {role.title}
                            </h4>
                            <div className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                                {role.description}
                                <Accordion type="single" collapsible className="w-full mt-4">
                                    <AccordionItem value="item-1" className="border-none">
                                        <AccordionTrigger className="py-2 text-sm text-brand hover:underline hover:no-underline">
                                            View More
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {role.deepInsight}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
