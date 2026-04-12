"use client";

import { data } from "@/app/data/resume";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ContactLinks } from "@/components/ContactLinks";

const tagline = data.taglines.heroTagline;

export function Hero() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 py-12 md:py-20 px-5">

      {/* Content Section */}
      <div className="flex flex-col gap-4">
        <div className="relative w-fit">
          <div
            className="size-20 rounded-lg overflow-hidden relative shadow-border"
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
          <span
            className="absolute bottom-[-4px] right-[-4px] size-4 rounded-full bg-green-600 border-2 border-background shadow-sm"
            aria-label="Available for opportunities"
            role="status"
          ></span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[48px] font-semibold leading-tight tracking-display">
            {data.firstName} {data.lastName}
          </h1>
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

          <div>
            <p className="text-base text-secondary-foreground">
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
