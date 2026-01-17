"use client";


import { cn } from '@/lib/utils';
import { Hero } from '@/components/Hero';
import { WorkExperience } from '@/components/WorkExperience';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { ViewModeProvider, useViewMode } from '@/components/providers/view-mode-provider';
import { MachineView } from '@/components/MachineView';
import { NavBar } from '@/components/NavBar';


function MainContent() {
  const { mode } = useViewMode();

  return (
    <main className={cn(
      "flex flex-col min-h-screen text-foreground selection:bg-brand/15 selection:text-brand border border-dashed",
      mode === 'human'
    )}>
      <NavBar />
      <div className="w-full mt-6">
        {mode === 'human' ? (
          <>
            <Hero />
            <WorkExperience />
            <Projects />
            <Education />
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