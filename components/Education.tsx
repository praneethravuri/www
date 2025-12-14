import { data } from "@/app/data/resume";

export function Education() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-bold border-b pb-2">Education</h2>
      <div className="flex flex-col gap-6">
        {data.education.map((edu) => (
          <div key={edu.institution} className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <a href={edu.institutionUrl} target="_blank" className="font-semibold hover:underline">
                {edu.institution}
              </a>
              <span className="text-sm font-mono text-muted-foreground tabular-nums">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <p className="text-sm text-muted-foreground">
                {edu.degree}
              </p>
              <p className="text-sm text-muted-foreground">
                {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}