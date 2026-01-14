import Link from "next/link";
import { data } from "@/app/data/resume";
import { Badge } from "@/components/ui/badge";
import { CustomLink } from "@/components/ui/custom-link";

export function About() {
    return (
        <section id="about" className="py-16 md:py-24 w-full">
            <div className="px-6 mx-auto">
                <div className="flex items-center justify-between mb-10 md:mb-16">
                    <h2 className="text-brand font-bold tracking-widest uppercase text-xl md:text-3xl">
                        About Me
                    </h2>
                </div>

                <div className="max-w-4xl text-base md:text-lg text-muted-foreground leading-relaxed">
                    AI engineer focused on building systems that reason, adapt, and operate with minimal human oversight. I started my computer science journey at{" "}
                    <CustomLink
                        href="http://www.griet.ac.in"
                        className="text-foreground"
                    >
                        GRIET
                    </CustomLink>{" "}
                    in India, where I built a strong foundation in software engineering, and later continued at{" "}
                    <CustomLink
                        href="https://www2.gmu.edu"
                        className="text-foreground"
                    >
                        George Mason University
                    </CustomLink>
                    {" "}to push deeper into distributed systems and machine learning. Along the way, a reinforcement learning project—training an agent to manage traffic signals using SARSA—shifted how I thought about software. I stopped seeing systems as static pipelines and started treating them as decision-makers. Since then, my work has centered on autonomous agents that sift through noisy data, retain useful context, and act with intent. I enjoy tightening feedback loops, cutting wasted computation, and designing memory systems that help models stay grounded over time. Outside of work, I apply the same thinking to anything that can be optimized—whether that&apos;s a recipe, a workflow, or a race strategy. My goal is simple: reduce busywork so people can focus on problems that actually require human judgment.
                </div>
                <div className="mt-6 flex flex-wrap gap-2 max-w-4xl">
                    {data.keywords.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
}
