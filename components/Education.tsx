"use client";
import { data } from "@/app/data/resume";

import Image from "next/image";
export function Education() {
    return (
        <section id="education" className="py-8 md:py-12 w-full px-5 border-b border-dashed">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-4 md:mb-8">
                    <h2 className="text-foreground text-xl md:text-2xl font-semibold">
                        Education
                    </h2>
                </div>

                <div className="text-base text-muted-foreground mb-4 md:mb-8">
                    {data.taglines.educationTagline.tagline}
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                    {data.education.map((edu, index) => (
                        <article key={index} className="flex gap-4 items-center">
                            {edu.logoUrl && (
                                <div className="shrink-0 text-muted-foreground">
                                    <Image
                                        src={edu.logoUrl}
                                        alt={`${edu.institution} logo`}
                                        width={48}
                                        height={48}
                                        loading="lazy"
                                        className="rounded-md object-cover border"
                                    />
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold">
                                    <span className="font-semibold text-lg">
                                        {edu.institution}
                                    </span>
                                </h3>
                                <p className="text-base text-muted-foreground">
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
