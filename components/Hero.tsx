import { data } from "@/app/data/resume";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8 sm:gap-12 z-10 w-full">
        {/* Intro Line */}
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-8 sm:w-12 bg-white/50"></div>
          <span className="text-xs sm:text-sm font-medium tracking-widest text-muted-foreground uppercase">
            {data.firstName} {data.lastName}, {data.title}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tighter">
          <div className="font-bold text-white">
            Agentic AI
          </div>
          <div className="font-serif italic text-white/90">
            <span className="text-muted-foreground/40 font-light mr-4">&</span>
            Scalable Systems.
          </div>
        </h1>

        {/* Bio & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-8 items-end">
          <p className="text-lg sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            I bridge the gap between complex AI models and intuitive modern experiences.
            Building <span className="text-white font-medium">fault-tolerant microservices</span> and <span className="text-white font-medium">optimizing performance</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:justify-end">
            <Link
              href="#projects"
              className="group px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={data.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white hover:text-black transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}