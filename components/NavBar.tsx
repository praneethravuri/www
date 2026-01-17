"use client";

import { data } from "@/app/data/resume";
import { useViewMode } from "@/components/providers/view-mode-provider";
import { Button } from "@/components/ui/button";
import { CustomLink } from './ui/custom-link';
import { Separator } from "./ui/separator";

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
                    <CustomLink href="/" enabled={false} className="text-[clamp(1.25rem,5vw,1.5rem)] font-bold tracking-tight hover:text-brand transition-colors no-underline hover:no-underline">
                        {data.firstName[0]}{data.lastName[0].toLowerCase()}.
                    </CustomLink>
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
                        className="text-[clamp(0.875rem,2vw,1rem)] tracking-tight hover:text-brand transition-colors no-underline hover:no-underline font-source-code"
                    >
                        {mode === 'human' ? (
                            <>
                                <span className="inline">MACHINE</span>
                            </>
                        ) : (
                            <>
                                <span className="inline">HUMAN</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </nav>
    );
}
