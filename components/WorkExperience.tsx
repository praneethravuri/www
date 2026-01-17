"use client";
import { data } from "@/app/data/resume";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tagline = data.taglines.experienceTagline;


export function WorkExperience() {
    return (
        <section id="work-experience" className="py-8 md:py-12 w-full">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-4 md:mb-8">
                    <h2 className="text-foreground text-base">
                        Experience
                    </h2>
                    <div>
                        <Link href={data.contact.social.Resume.url} target="_blank">
                            <Button variant="secondary" className="rounded-md bg-secondary/50 hover:bg-secondary/80 text-foreground/80 hover:text-foreground">
                                Download Resume
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="text-base text-muted-foreground mb-4 md:mb-8">
                    {tagline.tagline}
                </div>

                <div className="space-y-8 md:space-y-12">
                    {data.work.map((job, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
                            <div className="text-muted-foreground text-[clamp(0.5rem,2vw,0.875rem)]">
                                {job.startDate} - {job.endDate}
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-base">
                                        {job.title} at
                                    </h3>
                                    <Link
                                        href={job.companyUrl}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity no-underline"
                                    >
                                        <Image
                                            src={job.logoUrl}
                                            alt={`${job.company} logo`}
                                            width={24}
                                            height={24}
                                            className=""
                                        />
                                        <span className="text-base">
                                            {job.company}
                                        </span>
                                    </Link>
                                </div>

                                <p className="text-muted-foreground text-base">
                                    {job.description}
                                </p>

                                {job.deepInsight && (
                                    <p className="text-muted-foreground text-base">
                                        {job.deepInsight}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {job.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
