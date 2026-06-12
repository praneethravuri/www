import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { data } from "@/app/data/resume";

function SubParagraph({ text }: { text: string }) {
  const parts = text.split("Tuskira");
  return (
    <p className="text-[17px] text-body max-w-[52ch] text-pretty">
      {parts[0]}
      <strong className="text-ink font-[600]">Tuskira</strong>
      {parts[1]}
    </p>
  );
}

export default function Hero() {
  const sub = data.taglines.heroTagline.sub;

  return (
    <section
      className="mt-[60px]"
      id="top"
      aria-label="Introduction"
    >
      {/* Identity row */}
      <BlurFade inView direction="up" offset={14} duration={0.7} blur="0px" inViewMargin="-8%" delay={0.044}>
        <div className="flex items-center gap-[15px] mb-[26px]">
          <Image
            src="/images/profile/hero.webp"
            alt="Praneeth Ravuri"
            width={56}
            height={56}
            priority
            sizes="56px"
            className="size-[56px] flex-none object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.14)]"
          />
          <div>
            <h1 className="text-[19px] font-[680] text-ink tracking-[-0.02em] leading-[1.2]">
              {data.firstName} {data.lastName}
            </h1>
            <div className="text-[15px] text-muted-foreground font-[440] mt-px">
              {data.title}
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Lead paragraph */}
      <BlurFade inView direction="up" offset={14} duration={0.7} blur="0px" inViewMargin="-8%" delay={0.066}>
        <p className="text-[27px] max-[600px]:text-[23px] leading-[1.38] text-ink font-[560] tracking-[-0.025em] mb-[18px] max-w-[38ch] text-pretty">
          Building{" "}
          <span className="font-bold">autonomous agents</span>{" "}
          and{" "}
          <span className="font-bold">distributed systems</span>{" "}
          for the real world.
        </p>
      </BlurFade>

      {/* Sub paragraph */}
      <BlurFade inView direction="up" offset={14} duration={0.7} blur="0px" inViewMargin="-8%" delay={0.088}>
        <SubParagraph text={sub} />
      </BlurFade>

      {/* Socials row */}
      <BlurFade inView direction="up" offset={14} duration={0.7} blur="0px" inViewMargin="-8%" delay={0.11}>
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
      </BlurFade>
    </section>
  );
}
