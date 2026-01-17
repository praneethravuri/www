import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="w-full mx-auto flex flex-col gap-8 py-12 md:py-20 mt-12 md:mt-20">
      {/* Image Section */}
      <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden shadow-sm bg-muted/20">
        <Image
          src="/hyderabad.png"
          alt="Hyderabad"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] tracking-tighter font-medium leading-[0.9] text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)] italic">
            let&apos;s put AI
            <br />
            to work.
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col items-start gap-6">
          <div className="flex items-center gap-6">
            {Object.entries(data.contact.social).map(([name, social]) => (
              <CustomLink
                key={name}
                href={social.url}
                className="text-foreground transition-colors uppercase text-[clamp(0.75rem,1.5vw,1rem)] tracking-widest font-medium"
              >
                {social.name}
              </CustomLink>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-muted-foreground text-sm mt-2">
            <p>
              &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}. All rights reserved.
            </p>
            <p className="text-xs opacity-70">
              Built with React, Next.js, Shadcn UI, Magic UI, Tailwind CSS, TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}