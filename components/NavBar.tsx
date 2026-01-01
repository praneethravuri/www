"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { data } from "@/app/data/resume";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

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
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground hover:text-brand hover:underline transition-all"
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
                  "text-xs font-medium tracking-widest hover:text-brand hover:underline transition-all uppercase",
                  pathname === item.href
                    ? "text-brand"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button
              asChild
              variant="outline"
              shape="pill"
              className="hidden sm:flex border-muted-foreground/40 hover:border-brand/50 text-xs tracking-wide h-auto py-2.5 px-6"
            >
              <Link href={`mailto:${data.contact.email}`}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}