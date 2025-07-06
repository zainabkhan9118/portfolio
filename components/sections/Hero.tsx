"use client";


import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Download, Code2, Server } from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { Typewriter } from "@/components/shared/Typewriter";
import TerminalOverlay from "@/components/shared/TerminalOverlay";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

export default function Hero() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-6 z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <HoverCard openDelay={300} closeDelay={200}>
            <HoverCardTrigger asChild>
              <div className="relative group cursor-pointer">
                {/* Silvery glow effect with moving gradients */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white via-silver-400 to-silver-600 rounded-full opacity-80 blur-xl group-hover:opacity-100 transition-all duration-700 animate-gradient-shift"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white via-silver-300 to-silver-500 rounded-full opacity-50 blur-md group-hover:opacity-70 transition-all duration-1000 animate-pulse"></div>
                <div className="absolute inset-0 bg-black rounded-full"></div>
                <div className="relative">
                  <Image 
                    src="/me.png" 
                    alt="Zainab Iqbal" 
                    width={380} 
                    height={380} 
                    className="rounded-full border-2 border-white/30 object-cover shadow-2xl p-1"
                    style={{ filter: "contrast(1.1) brightness(1.1)" }}
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-silver-300 to-white rounded-full flex items-center justify-center animate-float shadow-lg shadow-white/20">
                    <Code2 className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-silver-500 to-white rounded-full flex items-center justify-center animate-float-delayed shadow-lg shadow-white/20">
                    <Server className="w-4 h-4 text-gray-900" />
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-black/95 border border-white/20 text-white p-5 backdrop-blur-xl shadow-2xl shadow-purple-500/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <Image 
                      src="/me.png" 
                      alt="Zainab Iqbal" 
                      width={48} 
                      height={48} 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Zainab Iqbal</h3>
                    <p className="text-silver-400 text-xs">Full-Stack Developer</p>
                  </div>
                </div>
                
                <div className="space-y-2 border-t border-white/10 pt-3">
                  <p className="text-sm text-silver-300">
                    "I think in code and dream in designs. When I'm not building websites, you might find me solving puzzles or exploring new tech."
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 rounded-full px-2 py-0.5">React</span>
                    <span className="text-xs bg-purple-500/20 text-purple-300 rounded-full px-2 py-0.5">Next.js</span>
                    <span className="text-xs bg-teal-500/20 text-teal-300 rounded-full px-2 py-0.5">Full-Stack</span>
                  </div>
                </div>
                
                <div className="text-xs text-silver-400 border-t border-white/10 pt-3">
                  <span className="block mb-1">Fun fact: I wrote my first line of code when I was 12 years old!</span>
                  <span className="block">Daily coffee intake: ☕☕☕</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <div className="flex-1">
            <div className="mb-6 relative">
              <div className="absolute -inset-2 bg-white/5 blur-xl rounded-lg"></div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                <span className="relative text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white">
                    <Typewriter text="Zainab Iqbal" delay={80} />
                  </span>
                </span>
              </h1>
              <h2 className="text-xl md:text-3xl font-bold mb-4 relative">
                <span className="relative z-10 text-silver-200">Senior Frontend Developer & UI Specialist</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
              </h2>
              <p className="text-white text-lg mb-4 max-w-xl leading-relaxed">
                I craft exceptional digital experiences with React, Next.js, and modern web technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="mailto:zainabkhan3473@gmail.com">
                <button className="btn-shine flex items-center px-8 py-4 bg-white text-black rounded-md font-medium shadow-lg hover:bg-silver-100 transition-colors">
                  <Mail className="w-5 h-5 mr-2" /> Contact Me
                </button>
              </a>
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <button className="btn-shine flex items-center px-8 py-4 bg-black text-white border border-white/30 rounded-md font-medium hover:bg-gray-900 transition-colors">
                  <Download className="w-5 h-5 mr-2" /> View & Download Resume
                </button>
              </a>
              <button
                className="btn-shine flex items-center px-8 py-4 bg-gradient-to-r from-silver-700 to-silver-400 text-white rounded-md font-medium border border-white/30 hover:bg-silver-500 transition-colors"
                style={{ minWidth: 180 }}
                type="button"
                onClick={() => setTerminalOpen(true)}
              >
                <span className="mr-2">Coder Experience</span>
                <Code2 className="w-5 h-5" />
              </button>
              <TerminalOverlay open={terminalOpen} onClose={() => setTerminalOpen(false)} />
            </div>
            
            <div className="flex gap-4 mt-8">
              {[
                { icon: Github, url: "https://github.com/zainabkhan9118" },
                { icon: Linkedin, url: "https://www.linkedin.com/in/zainab-iqbal-3a0216241" },
                { icon: Instagram, url: "https://www.instagram.com/zainabkhan9118" }
              ].map((social) => (
                <a 
                  key={social.url}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-silver-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
