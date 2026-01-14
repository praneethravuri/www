"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WorkExperience } from '@/components/WorkExperience';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { ViewModeProvider, useViewMode } from '@/components/providers/view-mode-provider';
import { MachineView } from '@/components/MachineView';
import { FloatingToggle } from '@/components/FloatingToggle';


function MainContent() {
  const { mode } = useViewMode();

  return (
    <main className={cn(
      "flex flex-col min-h-screen text-foreground selection:bg-brand/15 selection:text-brand",
      mode === 'human'
    )}>
      {mode === 'human' && <Navbar />}

      {mode === 'human' ? (
        <>
          <Hero />
          <About />
          <WorkExperience />
          <Projects />
          <Footer />
        </>
      ) : (
        <MachineView />
      )}
    </main>
  );
}

export default function Home() {
  return (
    <ViewModeProvider>
      <MainContent />
      <FloatingToggle />
    </ViewModeProvider>
  );
}