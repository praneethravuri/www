import { data } from "@/app/data/resume";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/ssr";

export function Footer() {
  return (
    <footer className="mt-[120px] text-center">
      {/* Wordmark */}
      <div className="text-[clamp(38px,9vw,60px)] font-bold tracking-[-0.045em] leading-none text-ink text-balance">
        {data.taglines.footerTagline.tagline}
      </div>

      {/* CTA */}
      <div>
        <a
          href={`mailto:${data.contact.email}`}
          className="inline-flex items-center gap-2.5 mt-[30px] bg-primary text-primary-foreground text-[16px] font-[600] tracking-[-0.01em] px-7 py-3.5 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
        >
          <EnvelopeSimpleIcon size={16} />
          {data.contact.email}
        </a>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-[18px] mt-[30px]">
        {Object.values(data.contact.social).map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-muted-foreground font-[460] transition-colors duration-200 hover:text-ink"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Meta row */}
      <div className="flex justify-center items-center gap-4 mt-[52px] pt-[22px] border-t border-line text-[12.5px] font-[500] tracking-[0.06em] text-faint uppercase">
        <span className="normal-case tracking-[0.01em] tabular-nums">
          &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}
        </span>
      </div>
    </footer>
  );
}
