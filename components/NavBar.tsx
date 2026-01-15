"use client";
import Link from "next/link";
import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";
export function Navbar() {




  return (
    <nav className="hidden md:block border-b border-border transition-colors duration-300">
      <div className="mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground no-underline hover:no-underline"
        >
          {data.firstName}&nbsp;{data.lastName}
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            <CustomLink href="#about" enabled={false} className="text-sm md:text-base font-medium text-foreground hover:text-brand transition-colors">
              About
            </CustomLink>
            <CustomLink href="#work-experience" enabled={false} className="text-sm md:text-base font-medium text-foreground hover:text-brand transition-colors">
              Experience
            </CustomLink>
            <CustomLink href="#projects" enabled={false} className="text-sm md:text-base font-medium text-foreground hover:text-brand transition-colors">
              Projects
            </CustomLink>
          </div>

          <div className="flex items-center gap-4">
            {/* ModeToggle removed for dark mode only */}
          </div>
        </div>
      </div>
    </nav>
  );
}