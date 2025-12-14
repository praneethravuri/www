"use client";
import { data } from "@/app/data/resume";
import * as motion from "motion/react-client"

export function About() {
    return (
        <section id="about" className="py-32 max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-10">
                    <span className="h-[1px] w-12 bg-foreground/20"></span>
                    <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground">About Me</span>
                </div>

                <div className="prose prose-invert prose-2xl text-muted-foreground max-w-none font-light leading-relaxed">
                    <p>
                        I'm not just an engineer; I'm a <span className="text-foreground font-medium">system thinker</span>.
                        While my resume lists languages and frameworks, my real passion lies in the <span className="text-foreground font-medium">architecture of problem-solving</span>.
                    </p>
                    <p className="mt-8">
                        I spent years understanding how data flows through massive distributed systems at Lumen, optimizing for milliseconds that save millions.
                        Now, I'm obsessed with the intersection of <span className="text-foreground font-medium">Agentic AI</span> and human workflow—building tools like <em>Gary</em> and <em>Pitstop</em> that don't just automate tasks but augment human capability.
                    </p>
                    <p className="mt-8">
                        When I'm not debugging race conditions or fine-tuning prompt chains, you'll find me analyzing F1 telemetry or exploring the nuances of generative design.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
