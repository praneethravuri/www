"use client";

import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { Hero } from '@/components/Hero';
import { ViewModeProvider, useViewMode } from '@/components/providers/view-mode-provider';
import { NavBar } from '@/components/NavBar';

// Lazy load below-fold components for better performance
const WorkExperience = dynamic(
  () => import('@/components/WorkExperience').then(mod => ({ default: mod.WorkExperience })),
  { loading: () => <div className="py-8 md:py-12 w-full px-5 border-b border-dashed animate-pulse h-64" /> }
);

const Projects = dynamic(
  () => import('@/components/Projects').then(mod => ({ default: mod.Projects })),
  { loading: () => <div className="py-8 md:py-12 w-full px-5 border-b border-dashed animate-pulse h-64" /> }
);

const Education = dynamic(
  () => import('@/components/Education').then(mod => ({ default: mod.Education })),
  { loading: () => <div className="py-8 md:py-12 w-full px-5 border-b border-dashed animate-pulse h-64" /> }
);

const MachineView = dynamic(
  () => import('@/components/MachineView').then(mod => ({ default: mod.MachineView })),
  { loading: () => <div className="py-8 md:py-12 w-full px-5 border-b border-dashed animate-pulse h-64" /> }
);

const Footer = dynamic(
  () => import('@/components/Footer').then(mod => ({ default: mod.Footer })),
  { loading: () => <div className="py-8 w-full px-5" /> }
);

function Content() {
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

export function MainContent() {
  return (
    <ViewModeProvider>
      <Content />
    </ViewModeProvider>
  );
}
