import React from 'react';
import { Navbar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />

      <Hero />

      <Experience />

      <Projects />

      <Footer />
    </main>
  );
}