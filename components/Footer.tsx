import { data } from "@/app/data/resume";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 pt-8">
      <p className="text-lg font-medium text-ink">{data.taglines.footerTagline.tagline}</p>
      <a
        href={`mailto:${data.contact.email}`}
        className="mt-2 inline-block py-2 text-sm text-muted-foreground hover:text-ink"
      >
        {data.contact.email}
      </a>
      <div className="mt-4 flex flex-wrap gap-x-5 text-xs text-muted-foreground">
        {[
          ["about", "About"],
          ["contact", "Contact"],
          ["privacy", "Privacy"],
          ["projects", "Project resources"],
        ].map(([slug, label]) => (
          <Link key={slug} href={`/${slug}`} className="inline-block py-2 hover:text-ink">
            {label}
          </Link>
        ))}
      </div>
      <p className="mt-8 text-xs text-faint">
        &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}
      </p>
    </footer>
  );
}
