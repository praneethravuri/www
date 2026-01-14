"use client";


import { DotPattern } from "@/components/ui/dot-pattern";
import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center w-full mx-auto relative overflow-hidden">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="flex flex-col gap-6 z-10 text-center relative px-6">
        {/* Main Heading */}
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[8rem] leading-[0.9] tracking-tighter">
            <div className="font-serif italic text-foreground">
              Agentic AI
            </div>
            <div className="font-serif italic text-brand">
              <span className="text-muted-foreground font-light mr-4">&</span>
              Scalable Systems.
            </div>
          </h1>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            {data.tagline}
          </p>
          <div className="flex items-center gap-6">
            {Object.values(data.contact.social).map((social) => (
              <CustomLink
                key={social.name}
                href={social.url}
                className="text-foreground hover:text-brand transition-colors uppercase text-lg tracking-widest font-medium"
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