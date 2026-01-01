"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useViewMode } from "@/components/providers/view-mode-provider";

export function FloatingToggle() {
    const { mode, setMode } = useViewMode();

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
            <div className="bg-background/80 backdrop-blur-md border border-border shadow-2xl p-1 rounded-none">
                <Tabs value={mode} onValueChange={(v) => setMode(v as "human" | "machine")}>
                    <TabsList className="bg-transparent border-0 h-auto p-0 gap-0 rounded-none">
                        <TabsTrigger
                            value="human"
                            className="rounded-none px-4 py-2 text-sm border-none hover:bg-muted/50 gap-2 transition-all duration-300"
                        >
                            <div className="relative flex items-center justify-center w-3 h-3 rounded-full border border-current">
                                {mode === 'human' && <div className="absolute w-1.5 h-1.5 rounded-full bg-current" />}
                            </div>
                            <span className="font-medium tracking-wide">HUMAN</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="machine"
                            className="rounded-none px-4 py-2 text-sm border-none hover:bg-muted/50 gap-2 transition-all duration-300"
                        >
                            <div className="relative flex items-center justify-center w-3 h-3 rounded-full border border-current">
                                {mode === 'machine' && <div className="absolute w-1.5 h-1.5 rounded-full bg-current" />}
                            </div>
                            <span className="font-medium tracking-wide">MACHINE</span>
                        </TabsTrigger>
                    </TabsList>
                    <div className="hidden">
                        <TabsContent value="human">Human Mode</TabsContent>
                        <TabsContent value="machine">Machine Mode</TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
