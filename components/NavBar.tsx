"use client";

import { useViewMode } from "@/components/providers/view-mode-provider";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export function NavBar() {
    const { mode, setMode } = useViewMode();

    const toggleMode = () => {
        setMode(mode === 'human' ? 'machine' : 'human');
    };

    return (
        <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="flex h-14 items-center w-full mx-auto justify-between gap-4 px-5">
                {/* Left: Name */}
                <div className="flex items-center">
                    <Link href="/" className="text-[15px] font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-300 ease-out no-underline hover:no-underline">
                        ప్రణీత్
                    </Link>
                </div>

                {/* Right: View Mode Toggle */}
                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleMode}
                        className="text-sm font-medium text-accent hover:text-accent hover:bg-accent/10"
                        aria-label={`Switch to ${mode === 'human' ? 'machine' : 'human'} readable view`}
                        aria-pressed={mode === 'machine'}
                    >
                        {mode === 'human' ? (
                            <>
                                <span className="inline">Machine</span>
                            </>
                        ) : (
                            <>
                                <span className="inline">Human</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </nav>
    );
}
