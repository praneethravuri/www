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
                "group inline-flex items-center gap-0.5 text-foreground transition-colors hover:text-brand no-underline",
                className
            )}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            {...props}
        >
            <span>{children}</span>
            {enabled && (
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 text-muted-foreground group-hover:text-brand" />
            )}
        </Link>
    );
}
