import { data } from "@/app/data/resume";

export function Experience() {
    return (
        <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground tracking-tighter">Experience</h2>

            <div className="flex flex-col">
                {data.work.map((role, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 py-12 border-t border-foreground/10 group">
                        {/* Left Column: Date & Company */}
                        <div className="md:col-span-1 flex flex-col pt-1">
                            <span className="text-xs font-mono tracking-widest uppercase mb-2">
                                {role.startDate} — {role.endDate}
                            </span>
                            <h3 className="text-xl font-medium text-foreground">
                                {role.company}
                            </h3>
                        </div>

                        {/* Right Column: Role & Description */}
                        <div className="md:col-span-3 flex flex-col gap-4">
                            <h4 className="text-2xl md:text-3xl font-medium text-foreground">
                                {role.title}
                            </h4>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                                {role.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Education Section - keeping it consistent but simpler */}
            <div className="mt-24 pt-24 border-t border-foreground/20">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground tracking-tighter">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {data.education.map((edu, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                                {edu.startDate} — {edu.endDate}
                            </span>
                            <h3 className="text-2xl font-medium text-foreground">{edu.institution}</h3>
                            <p className="text-lg text-muted-foreground">{edu.degree}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
