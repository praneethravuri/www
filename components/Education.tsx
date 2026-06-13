import { data } from "@/app/data/resume";
import Image from "next/image";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="mt-[88px] max-[600px]:mt-[70px] scroll-mt-8"
    >
      <h2 className="mb-[10px] flex items-center gap-3.5 text-[12.5px] font-[500] uppercase tracking-[0.18em] text-muted-foreground after:h-px after:flex-1 after:bg-line after:content-['']">
        Education
      </h2>

      {data.education.map((edu, index) => (
        <div
          key={edu.institution}
          className={`flex items-center gap-4 py-5 border-t border-line ${index === 0 ? "border-t-0 pt-5" : ""}`}
        >
          <Image
            src={edu.logoUrl}
            alt={`${edu.institution} logo`}
            width={44}
            height={44}
            className="border border-line-strong bg-card object-cover flex-none"
          />
          <div>
            <p className="text-[17px] text-ink font-[600]">{edu.degree}</p>
            <p className="text-[14px] text-muted-foreground mt-px font-[460]">{edu.institution}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
