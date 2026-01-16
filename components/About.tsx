import Link from "next/link";
import { data } from "@/app/data/resume";
import { Badge } from "@/components/ui/badge";


export function About() {
    return (
        <section id="about" className="py-8 md:py-12 w-full">
            <div className="px-6 mx-auto">
                <div className="flex items-center justify-between mb-10 md:mb-16">
                    <h2 className="text-foreground font-bold tracking-widest uppercase text-[clamp(1.25rem,3vw,1.875rem)]">
                        About Me
                    </h2>
                </div>

                <div className="text-[clamp(1rem,1.5vw,1.125rem)] text-foreground leading-relaxed">
                    {data.about}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
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
