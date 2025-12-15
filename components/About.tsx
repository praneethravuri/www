"use client";
import { data } from "@/app/data/resume";
import * as motion from "motion/react-client";

export function About() {
    return (
        <section id="about" className="py-24 max-w-7xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter"
            >
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
                {data.about}
            </motion.div>
        </section>
    );
}
