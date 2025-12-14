import React from 'react';
import { Navbar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-foreground selection:bg-brand/15 selection:text-brand">
      <Navbar />

      <Hero />

      <Experience />

      <Education />

      <Footer />
    </main>
  );
}