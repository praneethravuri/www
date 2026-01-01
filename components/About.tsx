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
                </Link>{" "}
                in India, but I moved to{" "}
                <Link
                    href="https://www2.gmu.edu"
                    target="_blank"
                    className="text-foreground hover:text-brand inline-flex items-center gap-1 hover:underline underline-offset-4 decoration-1"
                >
                    George Mason University
                </Link>
                {" "}because I wanted to get my hands dirty. I didn't just want to study code; I wanted to collaborate on systems that actually moved. The turning point was a Machine Learning course where I built a traffic congestion model using SARSA. Watching that simulation learn to clear an intersection was the moment I realized I didn't just want to build UIs—I wanted to build intelligence. Outside of code, my brain works the same way. Whether I'm reverse-engineering a recipe to improve the texture or analyzing F1 pit strategies, I’m obsessed with optimization. My goal now is simple: automate boredom. I build agents so humans can do the interesting stuff.
            </div>
        </section>
    );
}
