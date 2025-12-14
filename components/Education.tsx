"use client";
import { data } from "@/app/data/resume";
import * as motion from "motion/react-client";
import Link from "next/link";

export function Education() {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter"
      >
        Education
      </motion.h2>

      <div className="flex flex-col">
        {data.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 border-t border-brand/10 group"
          >
            {/* Left Column: Date & Institution */}
            <div className="md:col-span-3 flex flex-col pt-1">
              <span className="text-xs font-mono tracking-widest uppercase mb-2 text-brand/80 font-semibold">
                {edu.startDate} — {edu.endDate}
              </span>
              <h3 className="text-xl font-medium text-foreground">
                <Link href={edu.institutionUrl} target="_blank" className="hover:underline decoration-1 underline-offset-4">
                  {edu.institution}
                </Link>
              </h3>
            </div>

            {/* Right Column: Degree & Location */}
            <div className="md:col-span-9 flex flex-col gap-4">
              <h4 className="text-2xl md:text-3xl font-medium text-foreground">
                {edu.degree}
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {edu.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}