"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import Image from "next/image";
import { CustomLink } from "@/components/ui/custom-link";

export function Education() {
    return (
        <section id="education" className="py-8 md:py-12 w-full">
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
                        <div key={index} className="flex gap-4 items-center">
                            {edu.logoUrl && (
                                <Link
                                    href={edu.institutionUrl}
                                    target="_blank"
                                    className="shrink-0 text-muted-foreground hover:text-foreground"
                                >
                                    <Image
                                        src={edu.logoUrl}
                                        alt={`${edu.institution} logo`}
                                        width={48}
                                        height={48}
                                        className="rounded-md object-cover border"
                                    />
                                </Link>
                            )}

                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold">
                                    <CustomLink
                                        href={edu.institutionUrl}
                                        className="font-semibold text-lg"
                                    >
                                        {edu.institution}
                                    </CustomLink>
                                </h3>
                                <p className="text-base text-muted-foreground">
                                    {edu.degree}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
