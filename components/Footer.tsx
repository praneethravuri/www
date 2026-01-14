import { data } from "@/app/data/resume";
import Link from "next/link";
import { DotPattern } from "@/components/ui/dot-pattern";
import { CustomLink } from "@/components/ui/custom-link";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-20 border-t mt-12 md:mt-20 relative overflow-hidden">
      <DotPattern
       className={cn(
          "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-8 text-brand">
          Let&apos;s put AI to <br /> <span className="text-foreground">work.</span>
        </h2>

        <div className="flex justify-center gap-6 mb-12">
          {Object.entries(data.contact.social).map(([name, social]) => (
            <CustomLink
              key={name}
              href={social.url}
              className="text-foreground hover:text-brand transition-colors uppercase text-lg tracking-widest font-medium"
            >
              {social.name}
            </CustomLink>
          ))}

        </div>

        <p className="text-muted-foreground text-base">
          &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}