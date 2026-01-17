"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WorkExperience } from '@/components/WorkExperience';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { ViewModeProvider, useViewMode } from '@/components/providers/view-mode-provider';
import { MachineView } from '@/components/MachineView';
import { NavBar } from '@/components/NavBar';


import { Separator } from '@/components/ui/separator';

function MainContent() {
  const { mode } = useViewMode();

  return (
    <main className={cn(
      "flex flex-col min-h-screen text-foreground selection:bg-brand/15 selection:text-brand",
      mode === 'human'
    )}>
      <NavBar />
      <div className="w-full mt-6">
        {mode === 'human' ? (
          <>
            <Hero />
            {/* <Separator className="my-12 md:my-16" /> */}
            {/* <About /> */}
            {/* <Separator className="my-12 md:my-16" /> */}
            <WorkExperience />
            {/* <Separator className="my-12 md:my-16" /> */}
            <Projects />
            {/* <Separator className="my-12 md:my-16" /> */}
            <Footer />
          </>
        ) : (
          <MachineView />
        )}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <ViewModeProvider>
      <MainContent />
    </ViewModeProvider>
  );
}