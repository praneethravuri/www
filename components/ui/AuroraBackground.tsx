"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Aurora from "./Aurora";

export function AuroraBackground() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <div className="fixed inset-0 -z-50">
            <div className="absolute inset-0 bg-background transition-colors duration-300" />
            <div className="absolute inset-0 opacity-50">
                <Aurora
                    colorStops={
                        isDark
                            ? ["#0062ff", "#1a237e", "#4a148c"] // Black, Deep Blue, Deep Purple (Space-like)
                            : ["#60a5fa", "#2563eb", "#1e40af"] // Blue 400, Blue 600, Blue 800 (Stronger visibility)
                    }
                    blend={0.1}
                    amplitude={1.0}
                    speed={1}
                />
            </div>
        </div>
    );
}
