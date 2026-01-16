"use client";

import React from 'react';
import { data } from "@/app/data/resume";
import { useViewMode } from "@/components/providers/view-mode-provider";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { CustomLink } from './ui/custom-link';

export function NavBar() {
    const { mode, setMode } = useViewMode();

    const toggleMode = () => {
        setMode(mode === 'human' ? 'machine' : 'human');
    };

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#work-experience" },
        { name: "Projects", href: "#projects" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center w-full mx-auto justify-between">
                {/* Left: Name */}
                <div className="flex items-center">
                    <CustomLink href="/" enabled={false} className="text-lg font-bold tracking-tight hover:text-brand transition-colors no-underline hover:no-underline">
                        {data.firstName} {data.lastName}
                    </CustomLink>
                </div>




                {/* Center: Navigation Menu */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent no-underline hover:no-underline")}
                                        >
                                            {item.name}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right: Machine/Human Toggle */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMode}
                        className="gap-2 transition-all duration-300 font-source-code"
                    >
                        {mode === 'human' ? (
                            <>
                                <span className="hidden sm:inline">MACHINE</span>
                            </>
                        ) : (
                            <>
                                <span className="hidden sm:inline">HUMAN</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </nav>
    );
}
