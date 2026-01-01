import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-16 max-w-4xl mx-auto px-6 border-t">
            <div className="flex items-center justify-between mb-16">
                <h2 className="text-brand font-bold tracking-widest uppercase text-sm md:text-base">
                    About Me
                </h2>
            </div>

            <div className="max-w-4xl text-base text-muted-foreground leading-relaxed">
                My journey in tech began at{" "}
                <Link
                    href="http://www.griet.ac.in"
                    target="_blank"
                    className="text-foreground hover:text-brand inline-flex items-center gap-1 hover:underline underline-offset-4 decoration-1"
                >
                    GRIET
                    <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>{" "}
                in India, where I laid the groundwork for my career in Computer Science. Driven by a desire to deepen my expertise, I moved to the United States to pursue my Master’s at{" "}
                <Link
                    href="https://www2.gmu.edu"
                    target="_blank"
                    className="text-foreground hover:text-brand inline-flex items-center gap-1 hover:underline underline-offset-4 decoration-1"
                >
                    George Mason University
                    <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
                . This academic foundation paved the way for my evolution from a Full Stack Engineer at ADP to an AI Engineer building intelligent systems. Today, I combine my rigorous academic background with hands-on experience in building scalable, real-time data systems and agentic workflows to solve complex challenges.
            </div>
        </section>
    );
}
