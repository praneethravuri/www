import Image from "next/image";
import heroBanner from "@/public/images/hero-banner.jpg";
import { data } from "@/app/data/resume";

export default function Hero() {
  return (
    <section
      className="mt-[60px]"
      id="top"
      aria-label="Introduction"
    >
      {/* Identity row */}
      <div className="flex items-center gap-[15px] mb-[26px]">
        <Image
          src="/images/profile/hero.webp"
          alt="Praneeth Ravuri"
          width={56}
          height={56}
          priority
          sizes="56px"
          className="size-[56px] flex-none object-cover"
        />
        <div>
          <h1 className="text-[19px] font-[600] text-ink tracking-[-0.02em] leading-[1.2]">
            {data.firstName} {data.lastName}
          </h1>
          <div className="text-[15px] text-muted-foreground font-[460] mt-px">
            {data.title}
          </div>
        </div>
      </div>

      {/* Lead visual — image with overlaid headline */}
      <div className="relative overflow-hidden mb-[18px]">
        <Image
          src={heroBanner}
          alt="Mountain valley viewed through a window"
          priority
          placeholder="blur"
          quality={100}
          sizes="(max-width: 640px) 100vw, 640px"
          fetchPriority="high"
          className="w-full h-auto object-cover"
        />

        {/* Scrim for text legibility */}
        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" /> */}

        {/* Overlaid headline — vertically centered, fluid type */}
        <div className="absolute inset-0 flex items-center p-[5%]">
          <p className="text-[clamp(18px,5.5vw,38px)] leading-[1.22] font-[640] tracking-[-0.025em] text-white text-balance max-w-[28ch] drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
            {data.heroHeadline}
          </p>
        </div>
      </div>

      {/* Socials row */}
      <div className="flex flex-wrap gap-[22px] mt-[30px]">
        {Object.values(data.contact.social).map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-ink font-[500] transition-colors duration-200 hover:text-muted-foreground"
          >
            {item.name}
          </a>
        ))}
        <a
          href={`mailto:${data.contact.email}`}
          className="text-[15px] text-ink font-[500] transition-colors duration-200 hover:text-muted-foreground"
        >
          Email
        </a>
      </div>
    </section>
  );
}
