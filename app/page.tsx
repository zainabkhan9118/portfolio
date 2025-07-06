"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Mail, Github, Linkedin, Instagram, ArrowRight, Star, Users, Award, 
  Code2, ExternalLink, Smartphone, Server, Monitor, Settings, Database, Download 
} from "lucide-react";
import Image from "next/image";

// Typing effect component
const Typewriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const skills = [
  { title: "Frontend", icon: Monitor, color: "from-cyan-400 to-blue-600", skills: ["React.js", "Next.js", "Tailwind CSS", "Material UI"] },
  { title: "Backend", icon: Server, color: "from-fuchsia-500 to-purple-700", skills: ["NestJS", "Node.js", "Express", "Laravel"] },
  { title: "Languages", icon: Code2, color: "from-orange-400 to-pink-600", skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "Java", "C", "C#", "Dart"] },
  { title: "DevOps", icon: Settings, color: "from-green-400 to-teal-600", skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "DaisyUI", "ShadCN"] },
  { title: "Databases", icon: Database, color: "from-indigo-500 to-blue-600", skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL", "Neon"] },
  { title: "Mobile & APIs", icon: Smartphone, color: "from-teal-500 to-green-600", skills: ["Amadeus", "Stripe", "RESTful", "Flutter"] },
];

const projects = [
  {
    title: "Aerona",
    subtitle: "Comprehensive Travel Platform",
    description: "Full-featured travel booking platform integrating flights, hotels, car rentals, and restaurant reservations. Built with Next.js frontend and NestJS backend, utilizing Amadeus API for real-time travel data.",
    features: [
      "Unified search across all travel services with intelligent filtering",
      "Secure payment processing and booking management",
      "Personalized recommendations engine",
      "Admin dashboard for analytics and content management"
    ],
    technologies: ["Next.js", "NestJS", "Amadeus API", "Stripe", "MongoDB"],
    link: "https://aeronaa.vercel.app/",
    github: "https://github.com/Hamza-Akhtar008/Aeronaa", 
    stats: { users: "50K+", rating: "4.9", reviews: "2.3K" },
    category: "Travel & Booking"
  },
  {
    title: "GigGives",
    subtitle: "Equipment Rental Marketplace",
    description: "Peer-to-peer equipment rental platform with geolocation services. Developed with Next.js and NestJS.",
    features: [
      "Real-time availability calendar and reservation system",
      "Secure payment processing with Stripe integration",
      "Rating and review system for trust management",
      "Comprehensive admin dashboard for rental analytics"
    ],
    technologies: ["Next.js", "NestJS", "Stripe", "Geolocation API", "Firebase"],
    link: "https://gig-gives.vercel.app/",
    github: "https://github.com/zainabkhan9118/giggives",
    stats: { users: "25K+", rating: "4.8", reviews: "1.8K" },
    category: "Marketplace"
  },
  {
    title: "Zara Schools",
    subtitle: "E-Learning Platform",
    description: "Scalable e-learning app developed with NestJS and Next.js, enabling instructors to manage courses and students to enroll, learn, and track progress.",
    features: [
      "Authentication and role-based access control",
      "Course creation and management system",
      "Student progress tracking",
      "Fully responsive UI for all devices"
    ],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "JWT", "Socket.io"],
    link: "https://zara-school-nextjs-ashen.vercel.app/",
    github: "https://github.com/zainabkhan9118/zara-schools",
    stats: { users: "15K+", rating: "4.7", reviews: "900" },
    category: "Education"
  },
  {
    title: "Lemara Commercial",
    subtitle: "Real Estate Platform",
    description: "Engineered a web solution for a California-based real estate firm using NestJS and React. Enabled property listings, client inquiries, and role-based dashboards.",
    features: [
      "Property listing management system",
      "Client inquiry processing",
      "Role-based dashboards for agents and admins",
      "Secure backend with responsive frontend"
    ],
    technologies: ["React", "NestJS", "PostgreSQL", "AWS S3", "Maps API"],
    link: "https://lemara-commercial.vercel.app",
    github: "https://github.com/zainabkhan9118/lemara-commercial",
    stats: { users: "8K+", rating: "4.9", reviews: "450" },
    category: "Real Estate"
  },
  {
    title: "4 Rays",
    subtitle: "Casino Management Tool",
    description: "Casino management tool developed in React and NestJS featuring real-time analytics, user management, and transaction tracking.",
    features: [
      "Real-time analytics dashboard",
      "User account management system",
      "Transaction tracking and reporting",
      "Data visualization and insights"
    ],
    technologies: ["React", "NestJS", "MongoDB", "Socket.io"],
    link: "https://4rays.vercel.app",
    github: "https://github.com/zainabkhan9118/4rays",
    stats: { users: "2K+", rating: "4.6", reviews: "120" },
    category: "Casino/Analytics"
  },
  {
    title: "S4",
    subtitle: "Security Recruitment Platform",
    description: "Recruitment app for security jobs with company job posts, applicant tracking, and interview scheduling.",
    features: [
      "Company job posting system",
      "Applicant tracking and management",
      "Interview scheduling and feedback",
      "Security clearance verification"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "JWT"],
    link: "https://sfour.co.uk/",
    github: "",
    stats: { users: "5K+", rating: "4.8", reviews: "320" },
    category: "Recruitment"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechInnovate",
    avatar: "SJ",
    content: "Working with Zainab was an absolute pleasure. Her attention to detail and ability to translate complex requirements into elegant solutions significantly improved our product's user experience.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupVision",
    avatar: "MC",
    content: "Zainab's frontend expertise transformed our application. Her suggestions for UX improvements led to a 30% increase in user engagement.",
    rating: 5
  }
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveProject((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };
  
  return (
    <div className="min-h-screen bg-black text-silver-100 font-mono">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern-dark.svg')] bg-center opacity-20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-purple-900/20 filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-blue-900/20 filter blur-[100px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-fuchsia-900/10 filter blur-[120px] opacity-50 animate-pulse"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] mix-blend-overlay"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative group">
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
            
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                {/* Silver glow effect for the text */}
                <div className="absolute -inset-2 bg-white/5 blur-xl rounded-lg"></div>
                <span className="relative text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white">
                    <Typewriter text="Zainab Iqbal" delay={80} />
                  </span>
                </span>
              </h1>
              
              <h2 className="text-xl md:text-3xl font-bold mb-6 relative">
                <span className="relative z-10 text-silver-200">
                  <Typewriter text="Senior Frontend Developer & UI Specialist" delay={50} />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
              </h2>
              
              <p className="text-white text-lg mb-10 max-w-xl leading-relaxed">
                <Typewriter text="I craft exceptional digital experiences with React, Next.js, and modern web technologies." delay={30} />
              </p>
              
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
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">
                My Expertise
              </span>
            </h2>
            <p className="text-silver-400 max-w-2xl mx-auto">
              Technologies I've mastered and love working with
            </p>
          </div>              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((cat) => (
              <div 
                key={cat.title} 
                className="bg-black rounded-xl border border-white/10 p-6 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-white/10">
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <Badge 
                      key={s} 
                      variant="outline" 
                      className="bg-black text-white border-white/20 hover:bg-white/5"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_40%)]"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute left-0 top-0 w-80 h-80 bg-silver-300 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        {/* Add animation styles */}
        <style jsx global>{`
          @keyframes shine {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
          .animate-shine {
            background-size: 200% 100%;
            animation: shine 6s ease-in-out infinite;
          }
          
          /* Simple hover effect for buttons */
          .btn-shine {
            position: relative;
            overflow: hidden;
          }
          .btn-shine::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              to bottom right,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.1) 50%,
              rgba(255,255,255,0) 100%
            );
            transform: rotate(30deg);
            transition: transform 0.5s;
            opacity: 0;
          }
          .btn-shine:hover::before {
            transform: rotate(30deg) translate(100%, -100%);
            opacity: 1;
          }
        `}</style>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">
                About Me
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-silver-500/30 to-white/30 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-gray-900 border border-gray-800 group-hover:border-silver-700 transition-all duration-700 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Professional Journey</h3>
                        <p className="text-silver-400 text-sm">2 years of expertise</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Technical Mastery</h3>
                        <p className="text-silver-400 text-sm">Frontend & Full-Stack</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Collaborative Approach</h3>
                        <p className="text-silver-400 text-sm">Team-oriented developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <div className="space-y-6">
                <p className="text-lg text-silver-300">
                  <span className="relative">
                    <Typewriter 
                      text="I'm a passionate Senior Frontend Developer with a love for creating beautiful, intuitive, and high-performing web applications that solve real-world problems."
                      delay={20}
                    />
                  </span>
                </p>
                
                <p className="text-silver-300">
                  <span className="relative">
                    <Typewriter 
                      text="With expertise in React, Next.js, and modern JavaScript, I transform complex requirements into elegant solutions. My background spans both frontend excellence and backend integration, allowing me to develop comprehensive full-stack applications."
                      delay={10}
                    />
                  </span>
                </p>
                
                <p className="text-silver-300">
                  <span className="relative">
                    <Typewriter 
                      text="Beyond coding, I'm deeply interested in UI/UX design principles, ensuring that technical implementations are not just functional but delightful to use. I believe in continuous learning and stay at the forefront of web development trends."
                      delay={10}
                    />
                  </span>
                </p>
                
                <p className="text-silver-300">
                  <span className="relative">
                    <Typewriter 
                      text="When I'm not crafting code, I enjoy exploring new technologies, contributing to open-source projects, and mentoring junior developers. Let's create something amazing together!"
                      delay={10}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Modern Slider */}
      <section className="py-28 bg-black relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                Featured Projects
              </span>
            </h2>
            <p className="text-silver-300 max-w-2xl mx-auto text-lg">
              Innovative solutions for real-world challenges
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-white/50 via-silver-400/70 to-white/50 rounded-full"></div>
            </div>
          </div>

          {/* Project Slider */}
          <div className="relative h-[700px] overflow-hidden">
            {/* Project Cards */}
            <div className="relative h-full w-full">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    index === activeProject 
                      ? "opacity-100 translate-x-0" 
                      : index < activeProject 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="h-full flex flex-col md:flex-row gap-10 items-center">
                    {/* Project Info */}
                    <div className="w-full md:w-1/2">
                      <div className="mb-4 flex items-center">
                        <Badge className="bg-gradient-to-r from-gray-800 to-gray-900 text-silver-300 border border-silver-500/30 px-3 py-1 text-sm">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-white via-silver-200 to-white text-transparent bg-clip-text">
                          {project.title}
                        </span>
                      </h3>
                      
                      <p className="text-xl text-silver-400 mb-2">{project.subtitle}</p>
                      
                      <div className="w-16 h-[2px] bg-gradient-to-r from-silver-500 to-white mb-6"></div>
                      
                      <p className="text-silver-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="mb-8">
                        <h4 className="text-lg font-medium text-silver-200 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features?.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="min-w-[20px] mt-1">
                                <div className="w-[6px] h-[6px] rounded-full bg-gradient-to-r from-silver-400 to-white"></div>
                              </div>
                              <p className="text-silver-300 text-sm">{feature}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-sm font-medium text-silver-200 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="bg-gray-800/80 text-silver-300 border-silver-500/30 hover:border-white/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Stats & Button */}
                      <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-4 text-sm text-silver-400">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" /> {project.stats.users}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" /> {project.stats.rating}
                          </span>
                        </div>
                        
                        <button 
                          className="btn-shine inline-flex items-center px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-silver-200 transition-all duration-300 shadow-md hover:shadow-lg border border-transparent hover:border-white/50"
                          onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </button>
                        
                        {/* {project.github && (
                          <button 
                            className="btn-shine inline-flex items-center px-5 py-2.5 rounded-md bg-black text-white font-medium hover:bg-gray-900 transition-all duration-300 border border-white/20 hover:border-white/40"
                            onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </button>
                        )} */}
                      </div>
                    </div>
                    
                    {/* Project Visual */}
                    <div className="w-full md:w-1/2">
                      <div className="relative group aspect-video rounded-lg overflow-hidden border border-silver-500/30 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-silver-400/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Project Mockup/Frame */}
                        <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden p-1">
                          <div className="w-full h-[22px] bg-gray-800 rounded-t-md flex items-center px-3 mb-1">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                            <div className="mx-auto text-[10px] text-gray-400 font-mono">
                              {project.link.replace('https://', '')}
                            </div>
                          </div>
                          
                          <div className="relative w-full h-[calc(100%-26px)] bg-gradient-to-br from-gray-800 to-black rounded-md overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              {/* Project Title as placeholder */}
                              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-silver-500/20 via-white/30 to-silver-500/20">{project.title}</div>
                            </div>
                            
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine" style={{ backgroundSize: '200% 100%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Navigation Pills */}
                      <div className="mt-6 flex justify-center gap-2">
                        {projects.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveProject(idx)}
                            className={`h-1.5 rounded-full transition-all ${
                              idx === activeProject 
                                ? "w-8 bg-white" 
                                : "w-2 bg-gray-700 hover:bg-gray-600"
                            }`}
                            aria-label={`Go to project ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevProject} 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/10 transition-colors border border-white/10 hover:border-white/30 z-10"
              aria-label="Previous project"
            >
              <div className="relative w-5 h-5">
                <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2 -translate-x-[15%] rotate-45"></div>
                <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2 -translate-x-[15%] -rotate-45"></div>
              </div>
            </button>
            
            <button 
              onClick={nextProject} 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/10 transition-colors border border-white/10 hover:border-white/30 z-10"
              aria-label="Next project"
            >
              <div className="relative w-5 h-5">
                <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2 translate-x-[15%] -rotate-45"></div>
                <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2 translate-x-[15%] rotate-45"></div>
              </div>
            </button>
          </div>
          
          {/* View All Projects Button */}
          <div className="flex justify-center mt-16">
            <button 
              className="btn-shine px-8 py-4 bg-black text-white border border-white/30 rounded-md font-medium hover:bg-gray-900 transition-colors group relative overflow-hidden"
              onClick={() => window.open('https://github.com/zainabkhan9118', '_blank', 'noopener,noreferrer')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-silver-500/10 to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <span className="relative flex items-center">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-gradient-to-b from-gray-900 to-black relative z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full filter blur-[100px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full filter blur-[100px] opacity-10"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">
                Client Testimonials
              </span>
            </h2>
            <p className="text-silver-300 max-w-2xl mx-auto text-lg mb-8">
              What colleagues and clients say about working with me
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, index) => (
              <div key={t.name} className="bg-black border border-white/10 rounded-lg shadow-lg p-6 hover:shadow-white/5 transition-shadow duration-300">
                <div className="relative">
                    {/* Simple clean card */}
                    <div className="absolute top-0 left-0 w-20 h-1 bg-white/30"></div>
                      
                    {/* Avatar and name */}
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-16 h-16 border-2 border-white/20 shadow-lg">
                        <AvatarFallback className="bg-gradient-to-b from-gray-600 to-gray-800 text-white font-bold">
                          {t.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="font-bold text-white text-lg">{t.name}</div>
                        <div className="text-silver-300 text-sm">{t.role}</div>
                        <div className="text-silver-500 text-xs">{t.company}</div>
                      </div>
                    </div>
                    
                    {/* Testimonial text */}
                    <blockquote className="text-silver-200 leading-relaxed mb-4">
                      "{t.content}"
                    </blockquote>
                    
                    {/* Rating */}
                    <div className="flex gap-1 mt-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-white text-white" />
                      ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-700 blur-3xl animate-pulse"></div>
            <div className="absolute w-[600px] h-[600px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-700 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute w-[400px] h-[400px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-700 to-purple-700 blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-10 border border-white/10 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-white/5 blur-lg rounded-lg"></div>
                  <span className="relative text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white">Amazing</span>
                  </span>
                </div>
              </h2>
              <p className="text-silver-300 text-lg max-w-2xl mx-auto mb-8">
                Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges and collaborations.
              </p>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-silver-500 to-white rounded-full"></div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:zainabkhan3473@gmail.com" className="w-full sm:w-auto">
                <div className="btn-shine flex items-center justify-center gap-2 bg-black border border-white/20 rounded-lg px-8 py-5 text-white hover:border-white/50 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg font-medium">Email Me</span>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/zainab-iqbal-3a0216241" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <div className="btn-shine flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-8 py-5 text-white hover:bg-white/15 hover:border-white/50 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                  <span className="text-lg font-medium">Connect on LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern-dark.svg')] bg-center opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-silver-500 via-white to-silver-500"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold mb-2 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-silver-300 to-white">
                  Zainab Iqbal
                </span>
              </div>
              <p className="text-silver-400">
                Senior Frontend Developer
              </p>
            </div>
            
            <div className="flex gap-6">
              {[
                { icon: Github, url: "https://github.com/zainabkhan9118" },
                { icon: Linkedin, url: "https://www.linkedin.com/in/zainab-iqbal-3a0216241" },
                { icon: Instagram, url: "https://www.instagram.com/zainabkhan9118" }
              ].map((social) => (
                <a 
                  key={social.url}
                  href={social.url} 
                  className="group p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-sm text-silver-400 mb-3">
              © {new Date().getFullYear()} Zainab Iqbal. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Crafted with
              <span className="mx-1 inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-300 to-white">❤</span>
              </span>
              using Next.js, Tailwind CSS, and creative imagination
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}