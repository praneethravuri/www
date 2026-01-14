"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useViewMode } from "@/components/providers/view-mode-provider";

export function FloatingToggle() {
    const { mode, setMode } = useViewMode();

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
            <div className="bg-muted/80 backdrop-blur-md shadow-2xl p-0.5 rounded-md">
                <Tabs value={mode} onValueChange={(v) => setMode(v as "human" | "machine")}>
                    <TabsList className="bg-transparent border-0 h-auto p-0 gap-0 rounded-md">
                        <TabsTrigger
                            value="human"
                            className="rounded-md px-2.5 py-1.5 text-sm border-none hover:bg-background/50 gap-1.5 transition-all duration-300"
                        >
                            <div className="relative flex items-center justify-center w-2.5 h-2.5 rounded-full border border-current">
                                {mode === 'human' && <div className="absolute w-1.5 h-1.5 rounded-full bg-current" />}
                            </div>
                            <span className="font-medium tracking-wide font-source-code">HUMAN</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="machine"
                            className="rounded-md px-2.5 py-1.5 text-sm border-none hover:bg-background/50 gap-1.5 transition-all duration-300"
                        >
                            <div className="relative flex items-center justify-center w-2.5 h-2.5 rounded-full border border-current">
                                {mode === 'machine' && <div className="absolute w-1.5 h-1.5 rounded-full bg-current" />}
                            </div>
                            <span className="font-medium tracking-wide font-source-code">MACHINE</span>
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
