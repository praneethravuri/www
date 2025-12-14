import { data } from "@/app/data/resume";

export function Education() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-bold border-b pb-2">Education</h2>
      <div className="flex flex-col gap-6">
        {data.education.map((edu) => (
          <div key={edu.institution} className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-semibold">{edu.institution}</h3>
              <span className="text-sm font-mono text-muted-foreground tabular-nums">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {edu.degree}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}