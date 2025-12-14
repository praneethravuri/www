"use client";

import { data } from "@/app/data/resume";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
      <div className="flex flex-col gap-6 z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tighter">
            <div className="font-bold text-foreground">
              Agentic AI
            </div>
            <div className="font-serif italic text-foreground/90">
              <span className="text-muted-foreground/40 font-light mr-4">&</span>
              Scalable Systems.
            </div>
          </h1>
        </motion.div>

        {/* Bio & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }} // Added delay for stagger effect
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-8 items-end"
        >
          <p className="text-lg sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            I bridge the gap between complex AI models and intuitive modern experiences.
            Building <span className="text-foreground font-medium">fault-tolerant microservices</span> and <span className="text-foreground font-medium">optimizing performance</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:justify-end">
            <a
              href={`mailto:${data.contact.email}`}
              className="group px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg hover:bg-neutral-200 dark:hover:bg-neutral-300 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Contact Me
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={data.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-foreground/20 text-foreground font-medium text-lg hover:bg-foreground hover:text-background transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}