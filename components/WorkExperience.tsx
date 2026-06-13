import { data } from "@/app/data/resume";
import Image from "next/image";

export function WorkExperience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="mt-[88px] max-[600px]:mt-[70px] scroll-mt-8"
    >
      <h2 className="mb-[10px] flex items-center gap-3.5 text-[12.5px] font-[480] uppercase tracking-[0.18em] text-muted-foreground after:h-px after:flex-1 after:bg-line after:content-['']">
        Experience
      </h2>

      <div className="flex flex-col">
        {data.work.map((job, index) => (
          <div
            key={index}
            className={`py-[30px] ${
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
                  <h3 className="text-[18px] font-[680] text-ink tracking-[-0.02em]">
                    {job.company}
                  </h3>
                  <span className="text-[15px] text-muted-foreground">
                    {job.title}
                  </span>
                </div>
                <p className="text-[13px] text-faint mt-0.5 uppercase tracking-[0.04em]">
                  {job.startDate} — {job.endDate} · {job.location}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[16px] text-body mt-3.5 font-[440] text-pretty">
              {job.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {job.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-[12.5px] tracking-[0.01em] text-muted-foreground px-2.5 py-1 rounded-[6px] border border-line whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
