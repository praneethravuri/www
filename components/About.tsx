import { data } from "@/app/data/resume";
import { Badge } from "@/components/ui/badge";


export function About() {
    return (
        <section id="about" className="py-8 md:py-12 w-full">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-5 md:mb-8">
                    <h2 className="text-foreground font-bold tracking-widest uppercase text-[clamp(1.25rem,5vw,1.5rem)]">
                        About Me
                    </h2>
                </div>

                <div className="text-[clamp(0.875rem,2vw,1rem)] text-foreground leading-relaxed">
                    {data.about}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
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
