"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { data } from "@/app/data/resume";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "WORK", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  const initials = `${data.firstName[0]}${data.lastName[0]}.`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          {initials}
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs font-medium tracking-widest hover:text-white transition-colors uppercase",
                  pathname === item.href
                    ? "text-white"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <a
            href={`mailto:${data.contact.email}`}
            className="px-6 py-2.5 rounded-full border border-white/20 text-white text-xs font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}