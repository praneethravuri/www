import { data } from "@/app/data/resume";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const tagline = data.taglines.footerTagline.tagline;

export function Footer() {
  return (
    <footer id="contact" className="w-full mx-auto flex flex-col gap-8 py-12 md:py-20 mt-12 md:mt-20 border-t">

      <p>{tagline}</p>

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col items-start gap-6">
        <div>
          <div className="flex items-center gap-4">
            {Object.values(data.contact.social).map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="flex items-center gap-1 transition-colors text-base text-muted-foreground hover:text-foreground no-underline"
              >
                {social.name}
                <ArrowUpRight className="size-3" />
              </Link>
            ))}
          </div>
        </div>

          <div className="flex flex-col gap-2 text-base text-muted-foreground mt-2">
            <p>
              &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}. All rights reserved.
            </p>
            <p className="text-base text-muted-foreground">
              Built with React, Next.js, Shadcn UI, Magic UI, Tailwind CSS, TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}