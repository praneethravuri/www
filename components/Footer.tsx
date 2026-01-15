
import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="py-8 md:py-12 border-t mt-8 md:mt-12 relative overflow-hidden">
      <div className="mx-auto px-6 text-center relative z-10">
        <div className="w-full h-64 md:h-96 relative mb-12 rounded-lg overflow-hidden">
          <Image
            src="/hyderabad.png"
            alt="Hyderabad"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[7rem] leading-[0.9] tracking-tighter text-white drop-shadow-lg">
              <div className="font-medium">
                Let&apos;s put AI to work.
              </div>
            </h2>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-12 mt-6 md:mt-8">
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

        <p className="text-muted-foreground text-base">
          &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with React, Next.js, Shadcn UI, Magic UI, Tailwind CSS, TypeScript
        </p>
      </div>
    </footer>
  );
}