"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { data } from "@/app/data/resume";
import { ModeToggle } from "@/components/mode-toggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const initials = `${data.firstName[0]}${data.lastName[0]}.`;

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <FaGithub className="w-4 h-4" />,
    LinkedIn: <FaLinkedin className="w-4 h-4" />,
    X: <FaXTwitter className="w-4 h-4" />,
  };

  return (
    <nav className="relative z-[100] bg-background border-b border-border transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground hover:text-brand hover:underline transition-all"
        >
          {initials}
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {Object.entries(data.contact.social).map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                className="flex items-center gap-1 text-muted-foreground hover:text-brand transition-colors"
              >
                {socialIcons[name]}
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}