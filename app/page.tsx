import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh space-y-20 mb-20">
      <NavBar />
      
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>
      
      <section id="work" className="scroll-mt-20">
        <Work />
      </section>
      
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="education" className="scroll-mt-20">
        <Education />
      </section>

      <Footer />
    </main>
  );
}