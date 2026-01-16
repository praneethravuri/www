
import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="min-h-svh md:min-h-[85vh] w-full mx-auto relative overflow-hidden grid md:grid-cols-2 border-t mt-8 md:mt-12">
      {/* Left Column: Content */}
      <div className="flex flex-col justify-center px-6 py-12 md:py-0 order-2 md:order-1 gap-8 z-10">
        <div className="w-full flex flex-col items-start gap-6">
          <div className="flex items-center gap-6">
            {Object.entries(data.contact.social).map(([name, social]) => (
              <CustomLink
                key={name}
                href={social.url}
                className="text-foreground transition-colors uppercase text-sm md:text-lg tracking-widest font-medium"
              >
                {social.name}
              </CustomLink>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-muted-foreground text-base mt-2">
            <p>
              &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}. All rights reserved.
            </p>
            <p className="text-sm">
              Built with React, Next.js, Shadcn UI, Magic UI, Tailwind CSS, TypeScript
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="relative w-full order-1 md:order-2">
        <Image
          src="/hyderabad.png"
          alt="Hyderabad"
          fill
          className="object-cover"
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] tracking-tighter font-medium leading-[0.9] text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)] italic">
            <div>
              let&apos;s put AI
            </div>
            <div>
              to work.
            </div>
          </h1>
        </div>
      </div>
    </footer>
  );
}