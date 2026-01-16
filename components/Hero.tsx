"use client";






import { CustomLink } from "@/components/ui/custom-link";
import { data } from "@/app/data/resume";


import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full mx-auto relative overflow-hidden grid md:grid-cols-2 md:min-h-[85vh]">
      {/* Left Column: Content */}
      <div className="flex flex-col justify-center py-6 md:py-0 order-2 md:order-1 gap-8 z-10">
        <div>
          <span className="text-muted-foreground text-[clamp(1rem,2vw,1.25rem)] font-medium tracking-wide">
            San Francisco, USA
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {/* Main Heading */}
          <div>
            <h1 className="text-[clamp(3rem,11vw,7rem)] tracking-tighter font-medium leading-none">
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
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-muted-foreground leading-relaxed font-medium max-w-xl">
              {data.tagline}
            </p>
            <div className="flex items-center gap-6">
              {Object.values(data.contact.social).map((social) => (
                <CustomLink
                  key={social.name}
                  href={social.url}
                  className="text-foreground transition-colors uppercase text-[clamp(0.875rem,1.5vw,1.125rem)] tracking-widest font-medium"
                >
                  {social.name}
                </CustomLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="relative w-full order-1 md:order-2 h-[50vh] md:h-full">
        <Image
          src="/san-francisco.png"
          alt="Hero Banner"
          fill={true}
          className="object-cover"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[clamp(2.25rem,6vw,6rem)] tracking-tighter font-medium leading-[0.9] text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)] italic text-center">
            ship fast.
          </h2>
        </div>
      </div>
    </section>

  );
}