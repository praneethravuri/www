
import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";

export function Footer() {
  return (
    <footer id="contact" className="py-8 md:py-12 border-t mt-8 md:mt-12 relative overflow-hidden">

      <div className="mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[8rem] leading-[0.9] tracking-tighter">
          <div className="font-medium">
            Let&apos;s put AI to work.
          </div>
        </h2>

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