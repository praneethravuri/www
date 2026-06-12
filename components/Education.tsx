import { data } from "@/app/data/resume";
import Image from "next/image";
export function Education() {
    return (
        <section id="education" className="py-12 md:py-20 w-full px-5 animate-in fade-in slide-in-from-bottom-2 duration-500 border-t border-border scroll-mt-16">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <div>
                        <span className="block h-1 w-8 rounded-full bg-accent mb-4" aria-hidden="true" />
                        <h2 className="text-foreground text-3xl font-semibold tracking-heading">
                            Education
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                    {data.education.map((edu, index) => (
                        <article
                            key={index}
                            className="flex gap-4 items-center animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-backwards"
                            style={{ animationDelay: `${Math.min(index * 100, 400)}ms` }}
                        >
                            {edu.logoUrl && (
                                <div className="shrink-0 text-muted-foreground">
                                    <Image
                                        src={edu.logoUrl}
                                        alt={`${edu.institution} logo`}
                                        width={48}
                                        height={48}
                                        loading="lazy"
                                        className="rounded-md object-cover shadow-border"
                                    />
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold tracking-tight-custom">
                                    {edu.institution}
                                </h3>
                                <p className="text-base text-secondary-foreground leading-relaxed">
                                    {edu.degree}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
