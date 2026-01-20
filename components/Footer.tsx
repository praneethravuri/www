import { data } from "@/app/data/resume";

import { ContactLinks } from "@/components/ContactLinks";

const tagline = data.taglines.footerTagline.tagline;

export function Footer() {
  return (
    <footer id="footer" className="w-full mx-auto flex flex-col gap-8 py-8 md:py-12 px-5 border-b border-dashed">

      <p className="text-foreground text-xl md:text-2xl font-semibold">{tagline}</p>

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col items-start gap-6">
          <div>
            <div className="flex items-center gap-4">
              <ContactLinks />
            </div>
          </div>

          <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2">
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