"use client";

import { useRef, useEffect, useState } from "react";

const COMMANDS = [
  { cmd: "help", desc: "Show available commands" },
  { cmd: "about", desc: "Go to About section" },
  { cmd: "projects", desc: "Go to Projects section" },
  { cmd: "testimonials", desc: "Go to Testimonials section" },
  { cmd: "contact", desc: "Go to Contact section" },
  { cmd: "skills", desc: "Go to Skills section" },
  { cmd: "hero", desc: "Go to Hero section" },
  { cmd: "footer", desc: "Go to Footer section" },
  { cmd: "navigate", desc: "Navigate to a section (usage: navigate <section>)" },
  { cmd: "exit", desc: "Exit coder experience" },
];

const SECTION_IDS = {
  hero: "hero",
  about: "about",
  projects: "projects",
  testimonials: "testimonials",
  contact: "contact",
  skills: "skills", 
  footer: "footer",
};

export default function TerminalOverlay({ open, onClose, onLockSection }: { open: boolean; onClose: () => void; onLockSection?: (section: string|null) => void }) {
  const [lines, setLines] = useState<string[]>([
    "Welcome besties! Are you ready for a coder experience?",
    "Type 'help' to see available commands."
  ]);
  const [input, setInput] = useState("");
  const [locked, setLocked] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Handle viewport height changes (especially for mobile)
  useEffect(() => {
    const updateVH = () => {
      setViewportHeight(window.innerHeight);
    };
    updateVH();
    window.addEventListener('resize', updateVH);
    window.addEventListener('orientationchange', updateVH);
    return () => {
      window.removeEventListener('resize', updateVH);
      window.removeEventListener('orientationchange', updateVH);
    };
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const commandFull = cmd.trim().toLowerCase();
    const [command, ...args] = commandFull.split(' ');
    
    if (command === "help") {
      setLines((prev) => [
        ...prev,
        "Available commands:",
        ...COMMANDS.map(c => `  ${c.cmd.padEnd(14)} - ${c.desc}`)
      ]);
    } else if (command in SECTION_IDS) {
      navigateToSection(SECTION_IDS[command as keyof typeof SECTION_IDS]);
    } else if (command === "navigate") {
      const section = args[0]?.toLowerCase();
      if (section && section in SECTION_IDS) {
        navigateToSection(section);
      } else {
        setLines((prev) => [...prev, `Invalid section. Available sections: ${Object.keys(SECTION_IDS).join(', ')}`]);
      }
    } else if (command === "exit") {
      setLines((prev) => [...prev, "Exiting coder experience..."]);
      setLocked(true);
      setTimeout(() => {
        setLocked(false);
        if (onLockSection) onLockSection(null);
        onClose();
        setLines([
          "Welcome besties! Are you ready for a coder experience?",
          "Type 'help' to see available commands."
        ]);
      }, 700);
    } else if (command) {
      setLines((prev) => [...prev, `Unknown command: ${command}`]);
    }
  };

  const navigateToSection = (section: string) => {
    setLines((prev) => [...prev, `Navigating to ${section}...`]);
    
    // Call onLockSection immediately so the section is shown
    if (onLockSection) onLockSection(section);
    
    // Keep the terminal open for navigation in coder mode
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (locked) return;
    
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    
    setLines((prev) => [...prev, `> ${trimmedInput}`]);
    handleCommand(trimmedInput);
    setInput("");
    
    // Ensure input is focused after command (for mobile)
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/95 flex items-start md:items-center justify-center" 
      style={{ height: `${viewportHeight}px` }}
    >
      <div className="w-full h-full md:h-auto max-w-2xl mx-auto rounded-lg shadow-2xl border border-silver-700 bg-black p-4 md:p-6 relative flex flex-col">
        <div 
          ref={terminalRef}
          className="font-mono text-green-400 text-sm md:text-base flex-1 overflow-y-auto mb-4 whitespace-pre-line"
          style={{ 
            minHeight: '200px',
            maxHeight: 'calc(100vh - 160px)',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
        <form onSubmit={handleInput} className="flex items-center sticky bottom-0 bg-black p-2">
          <span className="text-green-500 font-mono mr-2">&gt;</span>
          <input
            ref={inputRef}
            className="flex-1 bg-transparent border-none outline-none text-green-300 font-mono text-sm md:text-base w-full"
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={locked}
            autoComplete="off"
            spellCheck={false}
            type="text"
            enterKeyHint="send"
          />
        </form>
        <button
          className="absolute top-2 right-2 text-silver-400 hover:text-white text-xl p-2"
          onClick={onClose}
          aria-label="Close terminal"
        >
          ×
        </button>
      </div>
      <div className="fixed inset-0 bg-black/80 z-[-1]" />
    </div>
  );
}
