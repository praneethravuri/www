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
        <nav className="w-full">
            <div className="flex h-16 items-center w-full mx-auto justify-between gap-4 px-5">
                {/* Left: Name */}
                <div className="flex items-center">
                    <Link href="/" className="text-base font-bold tracking-tight hover:text-muted-foreground transition-colors no-underline hover:no-underline">
                        ప్రణీత్
                    </Link>
                </div>

                {/* <div className="flex-1 px-4">
                    <Separator />
                </div> */}

                {/* Right: View Mode Toggle */}
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMode}
                        className="text-sm"
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
