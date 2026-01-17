"use client";

import { data } from "@/app/data/resume";
import { useViewMode } from "@/components/providers/view-mode-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";

export function NavBar() {
    const { mode, setMode } = useViewMode();

    const toggleMode = () => {
        setMode(mode === 'human' ? 'machine' : 'human');
    };

    return (
        <nav className="w-full">
            <div className="flex h-16 items-center w-full mx-auto justify-between gap-4">
                {/* Left: Name */}
                <div className="flex items-center">
                    <Link href="/" className="text-base font-bold tracking-tight hover:text-muted-foreground transition-colors no-underline hover:no-underline">
                        {data.firstName[0]}{data.lastName[0].toLowerCase()}.
                    </Link>
                </div>

                <div className="flex-1 px-4">
                    <Separator />
                </div>

                {/* Right: Machine/Human Toggle */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMode}
                        className="font-source-code"
                    >
                        {mode === 'human' ? (
                            <>
                                <span className="inline font-source-code">MACHINE</span>
                            </>
                        ) : (
                            <>
                                <span className="inline font-source-code">HUMAN</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </nav>
    );
}
