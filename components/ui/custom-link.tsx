"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    enabled?: boolean;
}

export function CustomLink({
    href,
    children,
    className,
    enabled = true,
    ...props
}: CustomLinkProps) {
    const isExternal = href.startsWith("http");

    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex items-center gap-0.5 text-foreground transition-colors duration-300 ease-out hover:text-accent no-underline hover:no-underline text-[clamp(0.875rem,2vw,1rem)]",
                className
            )}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={isExternal ? `${children} (opens in new tab)` : undefined}
            {...props}
        >
            <span>{children}</span>
            {enabled && (
                <ArrowUpRight className="h-4 w-4 transition-[transform,color] duration-500 ease-out group-hover:rotate-45 text-secondary-foreground group-hover:text-accent text-[clamp(0.875rem,2vw,1rem)]" />
            )}
        </Link>
    );
}
