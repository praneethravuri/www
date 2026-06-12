import { data } from "@/app/data/resume";
import { BlurFade } from "@/components/ui/blur-fade";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/ssr";

export function Footer() {
  return (
    <footer className="mt-[120px] text-center">
      {/* Wordmark */}
      <BlurFade inView direction="up" offset={14} duration={0.7} blur="0px" inViewMargin="-8%" delay={0.05}>
        <div className="text-[clamp(38px,9vw,60px)] font-bold tracking-[-0.045em] leading-none text-ink">
          {data.taglines.footerTagline.tagline}
        </div>
      </BlurFade>

      {/* CTA */}
      <BlurFade inView direction="up" offset={14} duration={0.7} blur="0px" inViewMargin="-8%" delay={0.09}>
        <a
          href={`mailto:${data.contact.email}`}
          className="inline-flex items-center gap-2.5 mt-[30px] bg-primary text-primary-foreground text-[16px] font-[620] tracking-[-0.01em] px-7 py-3.5 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
        >
          <EnvelopeSimpleIcon size={16} />
          {data.contact.email}
        </a>
      </BlurFade>

      {/* Socials */}
      <BlurFade inView direction="up" offset={14} duration={0.7} blur="0px" inViewMargin="-8%" delay={0.13}>
        <div className="flex justify-center gap-[18px] mt-[30px]">
          {Object.values(data.contact.social).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-muted-foreground transition-colors duration-200 hover:text-ink"
            >
              {link.name}
            </a>
          ))}
        </div>
      </BlurFade>

      {/* Meta row */}
      <BlurFade inView direction="up" offset={14} duration={0.7} blur="0px" inViewMargin="-8%" delay={0.17}>
        <div className="flex justify-between items-center gap-4 mt-[52px] pt-[22px] border-t border-line text-[12.5px] tracking-[0.06em] text-faint uppercase max-[600px]:flex-wrap max-[600px]:justify-center">
          <span>{data.location.toUpperCase()}</span>
          <span className="normal-case tracking-[0.01em]">
            &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}
          </span>
        </div>
      </BlurFade>
    </footer>
  );
}
