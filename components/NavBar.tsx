"use client";
import Link from "next/link";
import { data } from "@/app/data/resume";
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