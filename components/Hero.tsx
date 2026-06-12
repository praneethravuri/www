"use client";

import { data } from "@/app/data/resume";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ContactLinks } from "@/components/ContactLinks";
import { Button } from "@/components/ui/button";

const tagline = data.taglines.heroTagline;

export function Hero() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 py-12 md:py-20 px-5 animate-in fade-in slide-in-from-bottom-2 duration-500">

      {/* Content Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div
            className="size-20 shrink-0 rounded-lg overflow-hidden relative shadow-border"
          >
            <Image
              src="/images/profile/hero.webp"
              alt={`${data.firstName} ${data.lastName} - ${data.title}`}
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl text-balance font-semibold leading-tight tracking-display">
              {data.firstName} {data.lastName}
            </h1>
            <span
              role="status"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-xs text-secondary-foreground shadow-border-light"
            >
              <span className="size-2 rounded-full bg-green-600 animate-pulse motion-reduce:animate-none" aria-hidden="true" />
              Open to opportunities
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold leading-relaxed tracking-tight-custom">
              {tagline.role} <span className="text-secondary-foreground font-normal">at</span>
            </h2>
            <span className="inline-flex items-center gap-2 whitespace-nowrap text-xl font-semibold">
              <Image
                src={tagline.logoUrl}
                alt={`${tagline.company} logo`}
                width={24}
                height={24}
                loading="lazy"
              />
              {tagline.company}
            </span>
          </div>

          <div>
            <p className="text-base text-secondary-foreground leading-relaxed">
              {tagline.description}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <ContactLinks />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={`mailto:${data.contact.email}`}>Email Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={data.contact.social.Resume.url} target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>

          <div>
            <p className="text-base text-secondary-foreground leading-relaxed">
              {data.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
