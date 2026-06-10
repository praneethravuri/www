import { data } from "@/app/data/resume";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function WorkExperience() {
    return (
        <section id="work-experience" className="py-12 md:py-20 w-full px-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="mx-auto">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <h2 className="text-foreground text-3xl font-semibold tracking-heading">
                        Experience
                    </h2>
                    <div>
                        <Button variant="default" asChild>
                            <Link href={data.contact.social.Resume.url} target="_blank" rel="noopener noreferrer">
                                Download Resume
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="space-y-10 md:space-y-14">
                    {data.work.map((job, index) => (
                        <article key={index} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
                            <time className="font-mono text-sm font-bold uppercase tracking-wide text-secondary-foreground">
                                {job.startDate} - {job.endDate}
                            </time>

                            <div className="space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-xl font-semibold tracking-tight-custom">
                                        {job.title} <span className="text-secondary-foreground font-normal">at</span>
                                    </h3>
                                    <div className="inline-flex items-center gap-2 whitespace-nowrap">
                                        <Image
                                            src={job.logoUrl}
                                            alt={`${job.company} logo`}
                                            width={24}
                                            height={24}
                                            loading="lazy"
                                        />
                                        <span className="text-xl font-semibold">
                                            {job.company}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-secondary-foreground text-base leading-relaxed">
                                    {job.description}
                                </p>

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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
