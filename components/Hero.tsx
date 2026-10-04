import { data } from "@/app/data/resume";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-16 sm:pt-24" id="top" aria-label="Introduction">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink">
            {data.firstName} {data.lastName}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {data.title} · {data.location}
          </p>
        </div>
        <AvatarCircles names={[data.avatarName]} />
      </div>
      <h2 className="mt-9 max-w-[30ch] text-[27px] text-balance leading-[1.35] font-semibold tracking-[-0.025em] text-ink sm:text-[32px]">
        {data.heroHeadline}
      </h2>
      <p className="mt-5 text-body">{data.summary}</p>
      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button asChild>
          <a href={`mailto:${data.contact.email}`}>Get in touch</a>
        </Button>
        {Object.values(data.contact.social).map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center py-2 text-sm text-muted-foreground hover:text-ink"
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  );
}
