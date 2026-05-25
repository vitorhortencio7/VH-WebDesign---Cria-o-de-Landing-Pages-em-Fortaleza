import React from 'react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Hero } from '@/src/components/sections/Hero';
import { Proposito } from '@/src/components/sections/Proposito';
import { Metodo } from '@/src/components/sections/Metodo';
import { Portfolio } from '@/src/components/sections/Portfolio';
import { AboutMe } from '@/src/components/sections/AboutMe';
import { Pricing } from '@/src/components/sections/Pricing';
import { Depoimentos } from '@/src/components/sections/Depoimentos';
import { Faq } from '@/src/components/sections/Faq';
import { Cta } from '@/src/components/sections/Cta';
import { FloatingZap } from '@/src/components/ui/FloatingZap';
import { ThemeProvider } from '@/src/context/ThemeContext';
import { BackgroundBlobs } from '@/src/components/ui/BackgroundBlobs';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-[var(--text-primary)] transition-colors duration-500 font-sans relative selection:bg-vh-cyan selection:text-white">
        <BackgroundBlobs />
        <div className="fixed inset-0 bg-noise pointer-events-none z-0" />
        <Navbar />

        <main className="relative z-10 overflow-x-clip">
          <Hero />
          <Proposito />
          <Portfolio />
          <Metodo />
          <AboutMe />
          <Pricing />
          <Depoimentos />
          <Faq />
          <Cta />
        </main>

        <Footer />
        <FloatingZap />
      </div>
    </ThemeProvider>
  );
}
