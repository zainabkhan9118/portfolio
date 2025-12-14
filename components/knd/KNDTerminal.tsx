"use client";

import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { ExternalLink, Github, Mail, Linkedin, Phone, Download, Terminal, Send } from "lucide-react";
import MatrixRain from "./MatrixRain";
import { useTerminalSound } from "@/hooks/useTerminalSound";

type TerminalState = "BOOT" | "LOGIN" | "MENU" | "CONTENT";
type ContentSection = "HERO" | "ABOUT" | "PROJECTS" | "SKILLS" | "CONTACT" | "TESTIMONIALS";

const TESTIMONIALS = [
    {
        name: "COMMANDER SARAH",
        role: "PROJECT LEAD",
        text: "OPERATIVE ZAINAB EXECUTED THE MIGRATION PROTOCOL WITH 100% EFFICIENCY. SYSTEM INTEGRITY WAS MAINTAINED THROUGHOUT THE OPERATION.",
        status: "DECRYPTED"
    },
    {
        name: "AGENT MIKE",
        role: "SENIOR ENGINEER",
        text: "CODE QUALITY EXCEEDED HQ STANDARDS. THE IMPLEMENTATION OF THE NEURAL NETWORK MODULE WAS FLAWLESS.",
        status: "VERIFIED"
    },
    {
        name: "DIRECTOR CHEN",
        role: "TECH INNOVATION",
        text: "EXCEPTIONAL PROBLEM-SOLVING CAPABILITIES DETECTED. THIS OPERATIVE IS A VITAL ASSET TO THE GLOBAL NETWORK.",
        status: "HIGH PRIORITY"
    }
];

export default function KNDTerminal() {
    const [state, setState] = useState<TerminalState>("BOOT");
    const [activeContent, setActiveContent] = useState<ContentSection>("HERO");
    const [bootLines, setBootLines] = useState<string[]>([]);
    const [typedText, setTypedText] = useState("");
    const [commandInput, setCommandInput] = useState("");
    const [commandOutput, setCommandOutput] = useState<string[]>([]);

    // Audio Hook
    const { playHover, playClick, playType, playError, playSuccess } = useTerminalSound();

    // Auto-scroll for CLI
    const cliEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        cliEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [commandOutput]);

    // Boot Sequence
    useEffect(() => {
        if (state !== "BOOT") return;

        const sequence = [
            "INITIALIZING PORTFOLIO SYSTEM...",
            "ESTABLISHING SECURE CONNECTION...",
            "LOADING OPERATIVE ZAINAB PROFILE...",
            "DECRYPTING FILES... [SUCCESS]",
            "ACCESS GRANTED."
        ];

        let delay = 0;
        sequence.forEach((line, index) => {
            delay += 600 + Math.random() * 400;
            setTimeout(() => {
                setBootLines(prev => [...prev, line]);
                playType(); // Sound per line
                if (index === sequence.length - 1) {
                    setTimeout(() => {
                        playSuccess();
                        setState("LOGIN");
                    }, 1000);
                }
            }, delay);
        });
    }, [state]); // remove playType, playSuccess from dependency array to avoid re-trigger issues if using memoized hook

    // Typewriter effect for Login
    useEffect(() => {
        if (state !== "LOGIN") return;

        // Updated text as requested
        const text = "HELLO VISITOR! WELCOME TO OPERATIVE ZAINAB'S NETWORK. I AM A SENIOR FRONTEND DEVELOPER SPECIALIZING IN REACT, NEXT.JS, AND FULL-STACK SYSTEMS. ACCESSING MY FILES WILL REVEAL CLASSIFIED INFORMATION ABOUT MY SKILLS AND MISSIONS. CHOOSE YOUR DESTINATION.";
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(text.slice(0, i));
            if (i % 3 === 0) playType(); // Sound every few chars
            i++;
            if (i > text.length) {
                clearInterval(interval);
                setTimeout(() => setState("MENU"), 1500);
            }
        }, 25);

        return () => clearInterval(interval);
    }, [state]);

    const handleMenuSelect = (section: ContentSection) => {
        playClick();
        setActiveContent(section);
        setState("CONTENT");
    };

    const handleCommandSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!commandInput.trim()) return;

        const cmd = commandInput.trim().toUpperCase();
        playClick();
        setCommandOutput(prev => [...prev, `> ${cmd}`]);

        let response = "";
        switch (cmd) {
            case "HELP":
                response = "AVAILABLE COMMANDS: OPEN [SECTION], CLEAR, WHOAMI, DATE, JOKE, DOWNLOAD_CV, CONTACT";
                break;
            case "WHOAMI":
                response = "YOU ARE A GUEST USER ACCESSING OPERATIVE ZAINAB'S TERMINAL.";
                break;
            case "OPEN HERO": case "OPEN HOME":
                handleMenuSelect("HERO");
                response = "NAVIGATING TO HOME BASE...";
                break;
            case "OPEN ABOUT":
                handleMenuSelect("ABOUT");
                response = "OPENING PROFILE DOSSIER...";
                break;
            case "OPEN PROJECTS":
                handleMenuSelect("PROJECTS");
                response = "LOADING MISSION LOGS...";
                break;
            case "OPEN SKILLS":
                handleMenuSelect("SKILLS");
                response = "DISPLAYING WEAPONRY SPECS...";
                break;
            case "OPEN CONTACT": case "CONTACT":
                handleMenuSelect("CONTACT");
                response = "INITIATING TRANSMISSION PROTOCOLS...";
                break;
            case "DATE":
                response = new Date().toLocaleString();
                break;
            case "JOKE":
                response = "WHY DO JAVA DEVELOPERS WEAR GLASSES? BECAUSE THEY DON'T C#.";
                break;
            case "CLEAR":
                setCommandOutput([]);
                setCommandInput("");
                return;
            default:
                if (cmd.startsWith("OPEN ")) {
                    response = `ERROR: SECTION '${cmd.split(" ")[1]}' NOT FOUND. ACCESS DENIED.`;
                    playError();
                } else {
                    response = `COMMAND NOT RECOGNIZED. TYPE 'HELP' FOR PROTOCOLS.`;
                    playError();
                }
        }

        if (response) {
            setCommandOutput(prev => [...prev, response]);
        }
        setCommandInput("");
    };


    const TerminalHero = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="border-b-2 border-primary pb-4 mb-6 dashed">
                <h2 className="text-4xl md:text-6xl font-bold mb-2">OPERATIVE: ZAINAB IQBAL</h2>
                <div className="text-xl md:text-2xl opacity-80">&gt;&gt; SENIOR FRONTEND DEVELOPER & WEB ENGINEER</div>
                <div className="text-md md:text-xl opacity-60 mt-1">&gt;&gt; BASE: ISLAMABAD, PAKISTAN | STATUS: ACTIVE</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="knd-box p-6 space-y-4">
                    <h3 className="text-2xl border-b border-primary/50 pb-2">MISSION STATEMENT</h3>
                    <p className="text-lg leading-relaxed">
                        I craft responsive, high-performance web experiences with React, Next.js, and TypeScript.
                        I bridge the gap between frontend polish and backend reliability, bringing ML-driven features
                        to life with TensorFlow and PyTorch.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["React", "Next.js", "TypeScript", "NestJS", "TensorFlow"].map(tech => (
                            <span key={tech} className="px-2 py-1 bg-primary/20 border border-primary text-sm uppercase">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="knd-box p-6 flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl border-b border-primary/50 pb-2">STATS</h3>
                    <ul className="space-y-2 text-lg">
                        <li className="flex justify-between"><span>CGPA:</span> <span>3.94 / 4.00</span></li>
                        <li className="flex justify-between"><span>EXPERIENCE:</span> <span>2+ YEARS</span></li>
                        <li className="flex justify-between"><span>SPECIALIZATION:</span> <span>FULL-STACK</span></li>
                        <li className="flex justify-between"><span>LANGUAGES:</span> <span>9+ KNOWN</span></li>
                    </ul>
                    <button
                        onClick={() => handleMenuSelect('CONTACT')}
                        onMouseEnter={playHover}
                        className="mt-4 w-full py-2 bg-primary text-black font-bold hover:bg-primary/80 transition-colors"
                    >
                        [INITIATE CONTACT]
                    </button>
                </div>
            </div>

            
        </div>
    );

    const TerminalAbout = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl border-b-2 border-dashed border-primary pb-4">&gt;&gt; OPERATIVE PROFILE [ABOUT]</h2>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <p>
                    I'm Zainab Iqbal, a Frontend Developer | Web Engineer rooting for high-performance interfaces.
                    My journey involves not just writing code, but solving complex problems with elegant solutions.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="border border-primary p-4 hover:bg-primary/10 transition-colors cursor-default" onMouseEnter={playHover}>
                        <h4 className="text-2xl font-bold mb-2">&gt;&gt; PROFESSIONAL JOURNEY</h4>
                        <p className="opacity-80">2 Years of expertise in building modern web applications.</p>
                        <div className="mt-2 text-sm text-primary/70">"Once debugged code for 16 hours straight. The bug? A missing semicolon."</div>
                    </div>

                    <div className="border border-primary p-4 hover:bg-primary/10 transition-colors cursor-default" onMouseEnter={playHover}>
                        <h4 className="text-2xl font-bold mb-2">&gt;&gt; TECHNICAL MASTERY</h4>
                        <p className="opacity-80">Frontend & Full-Stack Architectures.</p>
                        <div className="mt-2 text-sm text-primary/70">"I speak 9 programming languages but still talk to my computer."</div>
                    </div>

                    <div className="border border-primary p-4 hover:bg-primary/10 transition-colors md:col-span-2 cursor-default" onMouseEnter={playHover}>
                        <h4 className="text-2xl font-bold mb-2">&gt;&gt; COLLABORATIVE APPROACH</h4>
                        <p className="opacity-80">I turn merge conflicts into opportunities for team bonding.</p>
                    </div>
                </div>

                <div className="knd-box p-6 mt-6">
                    <p className="typing-effect">
                        Beyond the code editor, I love exploring emerging technologies, refining performance playbooks,
                        and mentoring peers who want to build meaningful digital products.
                    </p>
                </div>
            </div>
        </div>
    );

    const TerminalProjects = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl border-b-2 border-dashed border-primary pb-4">&gt;&gt; MISSION LOG [PROJECTS]</h2>

            <div className="space-y-12">
                {projects.map((project, idx) => (
                    <div key={idx} className="knd-box p-6 relative group hover:shadow-[0_0_15px_var(--primary)] transition-all" onMouseEnter={playHover}>
                        <div className="absolute top-0 right-0 p-2 bg-primary text-black font-bold text-xs uppercase">
                            {project.category}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:underline decoration-dashed underline-offset-4">
                            {project.title}
                        </h3>
                        <p className="text-lg opacity-80 mb-4 italic">
                            {project.subtitle}
                        </p>

                        <p className="mb-6 opacity-90 max-w-3xl">
                            {project.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 className="text-primary font-bold mb-2 uppercase border-b border-primary/30 inline-block">Key Features</h4>
                                <ul className="list-none space-y-1 mt-2">
                                    {project.features?.map((f, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-2 text-primary">&gt;</span> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-primary font-bold mb-2 uppercase border-b border-primary/30 inline-block">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.map(t => (
                                        <span key={t} className="px-2 py-0.5 border border-primary/50 text-sm">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-end border-t border-primary/30 pt-4">
                            <div className="flex gap-4 text-sm opacity-70">
                                <span>USERS: {project.stats.users}</span>
                                <span>RATING: {project.stats.rating}</span>
                            </div>
                            <button
                                onClick={() => { playClick(); window.open(project.link, '_blank'); }}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold hover:bg-white hover:text-black transition-colors"
                            >
                                VIEW LIVE <ExternalLink size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const TerminalSkills = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl border-b-2 border-dashed border-primary pb-4">&gt;&gt; WEAPONRY SPECS [SKILLS]</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((cat, idx) => (
                    <div key={idx} className="border border-primary p-4 hover:bg-primary/5 transition-colors" onMouseEnter={playHover}>
                        <div className="flex items-center gap-3 mb-4 border-b border-primary/30 pb-2">
                            <h3 className="text-xl font-bold uppercase text-primary">{cat.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map(skill => (
                                <span key={skill} className="px-2 py-1 bg-primary/10 text-sm hover:bg-primary/30 cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4 pt-2 border-t border-primary/20 text-xs opacity-60">
                            PROFICIENCY: ADVANCED
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const TerminalTestimonials = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl border-b-2 border-dashed border-primary pb-4">&gt;&gt; INTERCEPTED TRANSMISSIONS [TESTIMONIALS]</h2>

            <div className="grid gap-6">
                {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="knd-box p-6 border-l-4 border-l-primary flex gap-4" onMouseEnter={playHover}>
                        <div className="hidden md:flex flex-col items-center justify-center p-4 bg-primary/10 border border-primary/30 h-fit min-w-[120px]">
                            <Terminal size={32} />
                            <span className="text-xs mt-2 opacity-50 text-center">ENCRYPTED</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-baseline gap-2">
                                <h4 className="text-xl font-bold text-primary">{t.name}</h4>
                                <span className="text-sm opacity-60">[{t.role}]</span>
                            </div>
                            <div className="text-xs border border-primary/30 inline-block px-1 bg-black text-primary mb-2">STATUS: {t.status}</div>
                            <p className="text-lg italic opacity-90">"{t.text}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const TerminalContact = () => (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl border-b-2 border-dashed border-primary pb-4 text-center">&gt;&gt; ESTABLISH CONNECTION</h2>

            <div className="knd-box p-8 md:p-12 text-center space-y-8">
                <p className="text-xl md:text-2xl">
                    READY TO INITIATE A NEW MISSION?
                </p>

                <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 md:gap-6 mt-8">
                    <a href="mailto:zainabiqbal653@gmail.com" onMouseEnter={playHover} onClick={playClick} className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-black font-bold text-lg md:text-xl hover:bg-white transition-colors">
                        <Mail /> EMAIL TRANSMISSION
                    </a>
                    <a href="tel:03431159190" onMouseEnter={playHover} onClick={playClick} className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-primary text-primary font-bold text-lg md:text-xl hover:bg-primary/20 transition-colors">
                        <Phone /> 0343-1159190
                    </a>
                    <a href="https://github.com/zainabkhan9118" target="_blank" onMouseEnter={playHover} onClick={playClick} className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-primary text-primary font-bold text-lg md:text-xl hover:bg-primary/20 transition-colors">
                        <Github /> GITHUB UPLINK
                    </a>
                    <a href="https://www.linkedin.com/in/zainab-iqbal-3a0216241" target="_blank" onMouseEnter={playHover} onClick={playClick} className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-primary text-primary font-bold text-lg md:text-xl hover:bg-primary/20 transition-colors">
                        <Linkedin /> LINKEDIN NETWORK
                    </a>
                </div>

                <div className="mt-12 pt-8 border-t border-primary/30 text-sm opacity-60">
                    ENCRYPTED CHANNEL SECURE. AWAITING DATA PACKETS.
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="terminal-wrapper h-screen w-full bg-black text-primary font-knd relative overflow-hidden flex flex-col">
                {/* Global Effects */}
                <MatrixRain />
                <div className="scanlines" />
                <div className="crt-flicker" />

                {/* Main Container */}
                <div className="relative z-10 w-full h-full flex-1 p-2 md:p-6 flex flex-col max-w-7xl mx-auto">

                    {/* Header / Top Bar */}
                    <header className="flex justify-between items-end border-b-4 border-primary pb-2 mb-4 shrink-0 bg-black/50 backdrop-blur-sm">
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-5xl font-bold text-glow tracking-tighter cursor-pointer" onClick={() => { playClick(); setState("MENU"); }}>
                                OPERATIVE ZAINAB
                            </h1>
                            <span className="text-xs md:text-sm opacity-80">SYSTEM ID: 2x4-PORTFOLIO-DEV</span>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-xs">SYS.TIME: {new Date().toLocaleTimeString()}</div>
                            <div className="text-xs">SERVER: ONLINE</div>
                        </div>
                    </header>

                    {/* Dynamic Content Area */}
                    <main className="flex-1 border-2 border-primary knd-box relative overflow-hidden flex flex-col shadow-[0_0_20px_rgba(74,246,38,0.2)] bg-black/90">

                        {/* BOOT SCREEN */}
                        {state === "BOOT" && (
                            <div className="flex flex-col items-start justify-end h-full w-full p-4 md:p-6 font-xl text-lg md:text-2xl space-y-2 pb-12">
                                {bootLines.map((line, i) => (
                                    <div key={i} className="text-primary/90">{line}</div>
                                ))}
                                <div className="animate-pulse">_</div>
                            </div>
                        )}

                        {/* LOGIN / INTRO SCREEN */}
                        {state === "LOGIN" && (
                            <div className="flex items-center justify-center h-full w-full p-4 md:p-6">
                                <div className="max-w-3xl text-xl md:text-3xl leading-relaxed text-center font-bold">
                                    {typedText}
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        )}

                        {/* MAIN MENU */}
                        {state === "MENU" && (
                            <div className="flex flex-col items-center justify-center h-full w-full p-4 md:p-6 space-y-6 md:space-y-8 animate-in fade-in zoom-in duration-500 overflow-y-auto">
                                <h2 className="text-2xl md:text-4xl border-b-2 border-dashed border-primary pb-2 mb-4 text-center shrink-0">
                                    &gt;&gt; SELECT DESTINATION FILE
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl shrink-0">
                                    {[
                                        { id: "HERO", label: "STATUS REPORT [HOME]" },
                                        { id: "ABOUT", label: "OPERATIVE PROFILE [ABOUT]" },
                                        { id: "PROJECTS", label: "MISSION LOG [PROJECTS]" },
                                        { id: "SKILLS", label: "WEAPONRY SPECS [SKILLS]" },
                                        { id: "TESTIMONIALS", label: "INTERCEPTED DATA [TESTIMONIALS]" },
                                        { id: "CONTACT", label: "TRANSMISSION [CONTACT]" },
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleMenuSelect(item.id as ContentSection)}
                                            onMouseEnter={playHover}
                                            className="group relative p-4 border-2 border-primary hover:bg-primary/20 transition-all text-left flex items-center shadow-[0_0_5px_rgba(74,246,38,0.1)] hover:shadow-[0_0_15px_rgba(74,246,38,0.4)]"
                                        >
                                            <span className="w-3 h-3 bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="text-lg md:text-2xl font-bold">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CONTENT VIEW */}
                        {state === "CONTENT" && (
                            <div className="relative w-full h-full flex flex-col">
                                {/* Sticky Header inside the box */}
                                <div className="flex justify-between items-center p-4 border-b border-primary/30 shrink-0 bg-black/95 z-10 sticky top-0">
                                    <span className="text-lg md:text-xl font-bold blink">&gt;&gt; MODE: {activeContent}</span>
                                    <button
                                        onClick={() => { playClick(); setState("MENU"); }}
                                        onMouseEnter={playHover}
                                        className="px-4 py-1 border border-primary hover:bg-primary hover:text-black transition-colors font-bold text-sm md:text-base"
                                    >
                                        [RETURN TO BASE]
                                    </button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 scrollbar-thumb-primary scrollbar-track-black">
                                    <div className="absolute inset-0 pointer-events-none h-full w-full z-[-1] opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#4AF626_1px,#4AF626_2px)]" />

                                    <div className="max-w-5xl mx-auto space-y-12">
                                        {activeContent === "HERO" && <TerminalHero />}
                                        {activeContent === "ABOUT" && <TerminalAbout />}
                                        {activeContent === "PROJECTS" && <TerminalProjects />}
                                        {activeContent === "SKILLS" && <TerminalSkills />}
                                        {activeContent === "CONTACT" && <TerminalContact />}
                                        {activeContent === "TESTIMONIALS" && <TerminalTestimonials />}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CLI AREA - Always visible in Menu and Content to allow power user access */}
                        {(state === "MENU" || state === "CONTENT") && (
                            <div className="shrink-0 border-t-2 border-primary bg-black p-2 font-mono text-sm md:text-base h-[120px] md:h-[150px] overflow-y-auto flex flex-col" onClick={() => document.getElementById('cli-input')?.focus()}>
                                <div className="flex-1 space-y-1">
                                    {commandOutput.map((out, i) => (
                                        <div key={i} className="opacity-80">{out}</div>
                                    ))}
                                    <div ref={cliEndRef} />
                                </div>
                                <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 mt-2">
                                    <span className="text-primary animate-pulse">&gt;</span>
                                    <input
                                        id="cli-input"
                                        type="text"
                                        value={commandInput}
                                        onChange={(e) => { setCommandInput(e.target.value); playType(); }}
                                        className="flex-1 bg-transparent border-none outline-none text-primary uppercase placeholder-primary/30"
                                        placeholder="ENTER COMMAND (TRY 'HELP')..."
                                        autoComplete="off"
                                    />
                                    <button type="submit" className="text-primary hover:text-white p-1"><Send size={16} /></button>
                                </form>
                            </div>
                        )}

                    </main>

                    {/* Footer Status Line */}
                    <footer className="mt-2 flex justify-between text-[10px] md:text-xs opacity-60 shrink-0 uppercase">
                        <div>MEMORY: 640K OK</div>
                        <div>AUDIO: {typeof window !== 'undefined' && window.AudioContext ? 'ENABLED' : 'DISABLED'}</div>
                        <div>OPERATIVE: ZAINAB [ACTIVE]</div>
                    </footer>
                </div>
            </div>

            
        </>
    );
}
