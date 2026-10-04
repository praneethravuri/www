import { data } from "@/app/data/resume";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line pt-8">
      <p className="text-lg font-medium text-ink">{data.taglines.footerTagline.tagline}</p>
      <a
        href={`mailto:${data.contact.email}`}
        className="mt-2 inline-block py-2 text-sm text-muted-foreground hover:text-ink"
      >
        {data.contact.email}
      </a>
      <p className="mt-8 text-xs text-faint">
        &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}
      </p>
    </footer>
  );
}
