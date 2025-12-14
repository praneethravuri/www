"use client";
import { data } from "@/app/data/resume";
import * as motion from "motion/react-client";

export function Experience() {
    return (
        <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 text-foreground tracking-tighter"
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
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 py-12 border-t border-foreground/10 group"
                    >
                        {/* Left Column: Date & Company */}
                        <div className="md:col-span-1 flex flex-col pt-1">
                            <span className="text-xs font-mono tracking-widest uppercase mb-2">
                                {role.startDate} — {role.endDate}
                            </span>
                            <h3 className="text-xl font-medium text-foreground">
                                {role.company}
                            </h3>
                        </div>

                        {/* Right Column: Role & Description */}
                        <div className="md:col-span-3 flex flex-col gap-4">
                            <h4 className="text-2xl md:text-3xl font-medium text-foreground">
                                {role.title}
                            </h4>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                                {role.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Education Section - keeping it consistent but simpler */}
            <div className="mt-24 pt-24 border-t border-foreground/20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-foreground tracking-tighter"
                >
                    Education
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {data.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col gap-2"
                        >
                            <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                                {edu.startDate} — {edu.endDate}
                            </span>
                            <h3 className="text-2xl font-medium text-foreground">{edu.institution}</h3>
                            <p className="text-lg text-muted-foreground">{edu.degree}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
