import { data } from "@/app/data/resume";

import { ContactLinks } from "@/components/ContactLinks";
import { Button } from "@/components/ui/button";

const tagline = data.taglines.footerTagline.tagline;

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full mx-auto flex flex-col gap-8 py-12 md:py-20 px-5 border-t border-border animate-in fade-in duration-500"
    >

      <p className="text-foreground text-2xl font-semibold tracking-subheading">{tagline}</p>

      <div>
        <Button asChild>
          <a href={`mailto:${data.contact.email}`}>Email Me</a>
        </Button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col items-start gap-6">
          <div>
            <div className="flex items-center gap-4">
              <ContactLinks />
            </div>
          </div>

          <div className="flex flex-col gap-1 text-xs text-secondary-foreground mt-2">
            <p>
              &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}
            </p>
            <p>
              Built with Next.js, React, Tailwind CSS, and Shadcn UI. Deployed on Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
