import { data } from "@/app/data/resume";

import { CustomLink } from "@/components/ui/custom-link";

const tagline = data.taglines.footerTagline.tagline;

export function Footer() {
  return (
    <footer id="contact" className="py-8 md:py-12 w-full px-5 border-b border-dashed">

      <p className="text-foreground text-xl md:text-2xl font-semibold">{tagline}</p>

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col items-start gap-6">
          <div>
            <div className="flex items-center gap-4">
              {Object.values(data.contact.social).map((social) => (
                <CustomLink
                  key={social.name}
                  href={social.url}
                  className="text-base text-muted-foreground hover:text-brand"
                >
                  {social.name}
                </CustomLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2">
            <p>
              &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}