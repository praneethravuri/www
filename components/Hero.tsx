"use client";
import { ArrowUpRight } from "lucide-react";


import { data } from "@/app/data/resume";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const tagline = data.taglines.heroTagline;

export function Hero() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 py-1 md:py-3">

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <div className="relative w-fit">
          <Avatar className="size-20 rounded-xl">
            <AvatarImage src="/hero.jpeg" alt={data.firstName} className="object-cover" />
            <AvatarFallback>{data.firstName[0]}</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-[-4px] right-[-4px] size-4 rounded-full bg-green-600 border-2 border-background shadow-sm"></span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-base leading-relaxed max-w-xl">
            {data.firstName} {data.lastName}
          </p>
          <p className="text-base text-muted-foreground">
            {data.location}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1 text-muted-foreground text-base">
            <p>{tagline.role}</p>at<Link href={tagline.companyUrl} target="_blank" className="company flex items-center gap-1 text-foreground no-underline hover:opacity-80 transition-opacity" >
              <Image src={tagline.logoUrl} alt={tagline.company} width={24} height={24} />
              {tagline.company}
            </Link>
          </div>
          <div className="text-base text-muted-foreground">
            {tagline.description}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4">
            {Object.values(data.contact.social).map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="flex items-center gap-1 transition-colors text-base text-muted-foreground hover:text-foreground no-underline"
              >
                {social.name}
                <ArrowUpRight className="size-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}