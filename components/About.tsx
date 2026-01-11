import Link from "next/link";
import { data } from "@/app/data/resume";
import { Badge } from "@/components/ui/badge";
import { CustomLink } from "@/components/ui/custom-link";

export function About() {
    return (
        <section id="about" className="py-12 md:py-16 w-full border-t">
            <div className="px-6 mx-auto">
                <div className="flex items-center justify-between mb-10 md:mb-16">
                    <h2 className="text-brand font-bold tracking-widest uppercase text-sm md:text-base">
                        About Me
                    </h2>
                </div>

                <div className="max-w-4xl text-base text-muted-foreground leading-relaxed">
                    My journey in tech began at{" "}
                    <CustomLink
                        href="http://www.griet.ac.in"
                        className="text-foreground"
                    >
                        GRIET
                    </CustomLink>{" "}
                    in India, but I moved to{" "}
                    <CustomLink
                        href="https://www2.gmu.edu"
                        className="text-foreground"
                    >
                        George Mason University
                    </CustomLink>
                    {" "}because I wanted to get my hands dirty. I didn&apos;t just want to study code; I wanted to collaborate on systems that actually moved. The turning point was a Machine Learning course where I built a traffic congestion model using SARSA. Watching that simulation learn to clear an intersection was the moment I realized I didn&apos;t just want to build UIs—I wanted to build intelligence. Outside of code, my brain works the same way. Whether I&apos;m reverse-engineering a recipe to improve the texture or analyzing F1 pit strategies, I&rsquo;m obsessed with optimization. My goal now is simple: automate boredom. I build agents so humans can do the interesting stuff.
                </div>
                <div className="mt-6 flex flex-wrap gap-2 max-w-4xl">
                    {data.keywords.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs font-mono font-normal bg-secondary/50 text-muted-foreground/80 hover:bg-secondary/80">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
}
