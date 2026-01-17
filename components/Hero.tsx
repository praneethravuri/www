"use client";

import { CustomLink } from "@/components/ui/custom-link";
import { data } from "@/app/data/resume";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 py-1 md:py-3">
      {/* Image Section */}

      <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden shadow-sm">
        <Image
          src="/san-francisco.png"
          alt="Hero Banner"
          fill={true}
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] tracking-tighter font-medium leading-[0.9] text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)] italic text-center">
            ship fast.
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed font-medium max-w-xl">
            Hey, I&apos;m {data.firstName}.
          </p>
          <p className="text-[clamp(0.875rem,1.8vw,1.1rem)] text-muted-foreground font-medium">
            {data.location}
          </p>
        </div>
        <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] tracking-tighter font-medium leading-none text-foreground">
          Agentic AI <span className="text-muted-foreground font-light">&</span> Scalable Systems.
        </h1>

        <div className="w-full flex flex-col items-start gap-6">
          <p className="text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground leading-relaxed font-medium max-w-xl">
            {data.tagline}
          </p>
          <div className="flex items-center gap-6">
            {Object.values(data.contact.social).map((social) => (
              <CustomLink
                key={social.name}
                href={social.url}
                className="text-foreground transition-colors uppercase text-[clamp(0.75rem,1.5vw,1rem)] tracking-widest font-medium"
              >
                {social.name}
              </CustomLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}