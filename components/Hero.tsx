"use client";




import { CustomLink } from "@/components/ui/custom-link";
import { data } from "@/app/data/resume";


import Image from "next/image";

export function Hero() {
  return (
    <section className="md:min-h-screen w-full mx-auto relative overflow-hidden">
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      /> */}

      <div className="w-full h-32 md:h-64 relative mb-6">
        <Image
          src="/hero-image.jpg"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
          <h2 className="text-white text-4xl md:text-7xl font-bold tracking-tighter italic">
            ship fast.
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-6 z-10 text-left relative px-6">
        {/* Main Heading */}
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[7rem] tracking-tighter font-medium">
            <div className="text-foreground">
              Agentic AI
            </div>
            <div className="text-foreground">
              <span className="text-muted-foreground font-light mr-4">&</span>
              Scalable Systems.
            </div>
          </h1>
        </div>

        <div className="w-full flex flex-col items-start gap-6">
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed font-medium">
            {data.tagline}
          </p>
          <div className="flex items-center gap-6">
            {Object.values(data.contact.social).map((social) => (
              <CustomLink
                key={social.name}
                href={social.url}
                className="text-foreground transition-colors uppercase text-sm md:text-lg tracking-widest font-medium"
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