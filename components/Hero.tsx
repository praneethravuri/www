"use client";

import { motion } from "motion/react";


export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 max-w-7xl mx-auto pt-20">
      <div className="flex flex-col gap-6 z-10 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-[6rem] lg:text-[8rem] leading-[0.9] tracking-tighter">
            <div className="font-bold text-foreground">
              Agentic AI
            </div>
            <div className="font-serif italic text-brand">
              <span className="text-muted-foreground/40 font-light mr-4">&</span>
              Scalable Systems.
            </div>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I build intelligent, scalable systems that bridge the gap between complex AI research and reliable production engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}