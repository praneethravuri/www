import React from 'react';
import { Navbar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-foreground selection:bg-brand/15 selection:text-brand border-l border-r border-t">
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <Footer />
    </main>
  );
}