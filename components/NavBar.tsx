"use client";

import { data } from "@/app/data/resume";
import { useViewMode } from "@/components/providers/view-mode-provider";
import { Button } from "@/components/ui/button";
import { CustomLink } from './ui/custom-link';

export function NavBar() {
    const { mode, setMode } = useViewMode();

    const toggleMode = () => {
        setMode(mode === 'human' ? 'machine' : 'human');
    };

    return (
        <nav className="w-full">
            <div className="flex h-16 items-center w-full mx-auto justify-between">
                {/* Left: Name */}
                <div className="flex items-center">
                    <CustomLink href="/" enabled={false} className="text-[clamp(1.25rem,5vw,1.5rem)] font-bold tracking-tight hover:text-brand transition-colors no-underline hover:no-underline">
                        {data.firstName[0]}{data.lastName[0].toLowerCase()}.
                    </CustomLink>
                </div>

                {/* Right: Machine/Human Toggle */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMode}
                        className="text-sm sm:text-base tracking-tight hover:text-brand transition-colors no-underline hover:no-underline font-source-code"
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
