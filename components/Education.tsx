"use client";
import { data } from "@/app/data/resume";

import Image from "next/image";
export function Education() {
    return (
        <section id="education" className="py-12 md:py-20 w-full px-5">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <h2 className="text-foreground text-[32px] font-semibold tracking-heading">
                        Education
                    </h2>
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
                                        className="rounded-md object-cover shadow-border"
                                    />
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold">
                                    <span className="font-semibold text-lg">
                                        {edu.institution}
                                    </span>
                                </h3>
                                <p className="text-base text-secondary-foreground">
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
