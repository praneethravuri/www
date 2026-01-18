"use client";

import { CustomLink } from "@/components/ui/custom-link";

import { data } from "@/app/data/resume";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const tagline = data.taglines.heroTagline;

export function Hero() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 py-1 md:py-3 px-5 border-b border-dashed">

      {/* Content Section */}
      <div className="flex flex-col gap-3">
        <div className="relative w-fit">
          <div className="size-20 rounded-xl overflow-hidden relative">
            <Image
              src="/hero.webp"
              alt={data.firstName}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="absolute bottom-[-4px] right-[-4px] size-4 rounded-full bg-green-600 border-2 border-background shadow-sm"></span>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed">
            {data.firstName} {data.lastName}
          </h1>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-semibold flex items-center gap-1">
              <span className="">{tagline.role}</span> at
              <span className="inline-flex items-center gap-1">
                <Image
                  src={tagline.logoUrl}
                  alt={`${tagline.company} logo`}
                  width={24}
                  height={24}
                  className=""
                />
                <span className="text-lg font-semibold">
                  {tagline.company}
                </span>
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base text-muted-foreground">
              {tagline.description}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4">
              {Object.values(data.contact.social).map((social) => (
                <CustomLink
                  key={social.name}
                  href={social.url}
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  {social.name}
                </CustomLink>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base text-muted-foreground">
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