"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme } from "next-themes";

type ViewMode = "human" | "machine";

interface ViewModeContextType {
    mode: ViewMode;
    setMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<ViewMode>("human");
    const { setTheme } = useTheme();

    useEffect(() => {
        if (mode === "machine") {
            setTheme("dark");
        }
    }, [mode, setTheme]);

    return (
        <ViewModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ViewModeContext.Provider>
    );
}

export function useViewMode() {
    const context = useContext(ViewModeContext);
    if (context === undefined) {
        throw new Error("useViewMode must be used within a ViewModeProvider");
    }
    return context;
}
