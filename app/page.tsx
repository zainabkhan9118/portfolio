"use client";

import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useState, useEffect, JSX } from "react";
import TerminalOverlay from "@/components/shared/TerminalOverlay";
import Background from "@/components/shared/Background";
import GlobalStyles from "@/components/shared/GlobalStyles";

export default function Home() {
  const [lockedSection, setLockedSection] = useState<string|null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  // Keep terminal open while lockedSection is set
  const coderMode = !!lockedSection;

  // If locked, prevent default scroll behavior but allow programmatic scrolling
  useEffect(() => {
    if (lockedSection) {
      document.body.style.overflow = "hidden";
      // Scroll to the selected section
      const sectionElement = document.getElementById(lockedSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lockedSection]);

  // Listen for scroll attempts and re-show terminal if user tries to scroll
  useEffect(() => {
    if (!lockedSection) return;
    const onScroll = (e: Event) => {
      // We still want to prevent default scroll behavior
      e.preventDefault();
      // Keep terminal open
      setTerminalOpen(true);
      // But we don't force scroll back to top anymore
    };
    window.addEventListener("scroll", onScroll, { passive: false });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lockedSection]);

  // Section map
  const sectionMap: Record<string, JSX.Element> = {
    hero: <Hero />,
    skills: <Skills />,
    about: <About />,
    projects: <Projects />,
    testimonials: <Testimonials />,
    contact: <Contact />,
    footer: <Footer />,
  };

  return (
    <div className="min-h-screen bg-black text-silver-100 font-mono snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen">
      <Background />
      <GlobalStyles />
      <TerminalOverlay
        open={terminalOpen || coderMode}
        onClose={() => {
          if (coderMode) return; // Don't close if in coder mode
          setTerminalOpen(false);
        }}
        onLockSection={section => {
          setLockedSection(section);
          if (section) setTerminalOpen(true); // Keep terminal open in coder mode
        }}
      />
      {lockedSection
        ? (
            <div
              className="min-h-screen w-full flex flex-col bg-black overflow-x-hidden"
              style={{ overflowY: "hidden" }} // Hide scrollbar but allow programmatic scrolling
            >
              {/* Render all sections in coder mode */}
              <section className="snap-start min-h-screen" id="hero"><Hero /></section>
              <section className="snap-start min-h-screen" id="skills"><Skills /></section>
              <section className="snap-start min-h-screen" id="about"><About /></section>
              <section className="snap-start min-h-screen" id="projects"><Projects /></section>
              <section className="snap-start min-h-screen" id="testimonials"><Testimonials /></section>
              <section className="snap-start min-h-screen" id="contact"><Contact /></section>
              <section className="snap-start min-h-screen" id="footer"><Footer /></section>
            </div>
          )
        : <>
            <section className="snap-start" id="hero"><Hero /></section>
            <section className="snap-start" id="skills"><Skills /></section>
            <section className="snap-start" id="about"><About /></section>
            <section className="snap-start" id="projects"><Projects /></section>
            <section className="snap-start" id="testimonials"><Testimonials /></section>
            <section className="snap-start" id="contact"><Contact /></section>
            <section className="snap-start" id="footer"><Footer /></section>
          </>
      }
    </div>
  );
}