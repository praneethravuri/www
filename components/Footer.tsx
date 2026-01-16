
import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="py-8 md:py-12 border-t mt-8 md:mt-12 relative overflow-hidden">
      <div className="w-full h-32 md:h-64 relative mb-6">
        <Image
          src="/hyderabad.png"
          alt="Hyderabad"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right">
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

      <div className="flex flex-col gap-6 z-10 text-left relative px-6">

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
    </footer>
  );
}