"use client";
import Link from "next/link";
import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";
import { ModeToggle } from "@/components/mode-toggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export function Navbar() {


  const initials = `${data.firstName[0]}${data.lastName[0]}.`;

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <FaGithub className="w-5 h-5" />,
    LinkedIn: <FaLinkedin className="w-5 h-5" />,
    X: <FaXTwitter className="w-5 h-5" />,
  };

  return (
    <nav className="bg-background border-b border-border transition-colors duration-300">
      <div className="mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground no-underline hover:no-underline"
        >
          {data.firstName}&nbsp;{data.lastName}
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            <CustomLink href="#about" enabled={false} className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">
              About
            </CustomLink>
            <CustomLink href="#work-experience" enabled={false} className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">
              Experience
            </CustomLink>
            <CustomLink href="#projects" enabled={false} className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">
              Projects
            </CustomLink>
            <CustomLink href="#contact" enabled={false} className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">
              Contact
            </CustomLink>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}