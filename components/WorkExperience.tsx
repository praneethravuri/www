import { data } from "@/app/data/resume";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function WorkExperience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="mt-22 max-[600px]:mt-17.5 scroll-mt-8"
    >
      <h2 className="mb-2.5 flex items-center gap-3.5 text-[12.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground after:h-px after:flex-1 after:bg-line after:content-['']">
        Experience
      </h2>

      <div className="flex flex-col">
        {data.work.map((job, index) => (
          <div
            key={index}
            className={`py-7.5 ${
              index === 0
                ? "border-t-0 pt-5"
                : "border-t border-line"
            }`}
          >
            {/* Top row */}
            <div className="flex items-center gap-3.5">
              <Image
                src={job.logoUrl}
                alt={`${job.company} logo`}
                width={46}
                height={46}
                className="border border-line-strong bg-card object-cover flex-none"
              />
              <div>
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <h3 className="text-[18px] font-semibold text-ink tracking-[-0.02em]">
                    {job.company}
                  </h3>
                  <span className="text-[15px] text-muted-foreground font-[460]">
                    {job.title}
                  </span>
                </div>
                <p className="text-[13px] text-faint mt-0.5 uppercase tracking-[0.04em] font-medium tabular-nums">
                  {job.startDate} – {job.endDate} · {job.location}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[16px] text-body mt-3.5 font-[420] text-pretty">
              {job.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {job.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
