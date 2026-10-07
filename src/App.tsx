import React, {
  Suspense,
  useEffect,
} from 'react';

import Navbar from './components/Navbar';
import ParticleCursor from './components/ParticleCursor';
import MusicPlayer from './components/MusicPlayer';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubSection from './components/GitHubSection';
import TerminalSection from './components/Terminal';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import Scene3D from './components/Scene3D';

import { ThemeProvider } from './context/ThemeContext';

import './i18n';

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#050505] text-white transition-colors duration-300">

        {/* =========================================
            PARTICLE CURSOR
        ========================================== */}

        <ParticleCursor />

        {/* =========================================
            3D BACKGROUND SCENE
        ========================================== */}

        <Suspense
          fallback={
            <div className="fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center text-white">
              Loading Experience...
            </div>
          }
        >
          <Scene3D />
        </Suspense>

        {/* =========================================
            NAVIGATION
        ========================================== */}

        <Navbar />

        {/* =========================================
            MUSIC PLAYER
        ========================================== */}

        <MusicPlayer />

        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <main className="relative">

          {/* Hero */}
          <Hero />

          {/* About */}
          <About />

          {/* Skills */}
          <Skills />

          {/* Projects */}
          <Projects />

          {/* Experience */}
          <Experience />

          {/* GitHub */}
          <GitHubSection />

          {/* Interactive Terminal */}
          <TerminalSection />

          {/* Contact Form */}
          <ContactForm />

          {/* Contact */}
          <Contact />

        </main>

        {/* =========================================
            FOOTER
        ========================================== */}

        <Footer />

      </div>
    </ThemeProvider>
  );
}