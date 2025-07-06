"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Mail, Github, Linkedin, Instagram, ArrowRight, Star, Users, Award, 
  Code2, Calendar, MapPin, MessageCircle, ExternalLink, Play, 
  Smartphone, Server, Monitor, Settings, Database, Rocket, Globe, Download 
} from "lucide-react";
import Image from "next/image";

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
    technologies: ["Next.js", "NestJS", "Amadeus API", "Stripe", "MongoDB"],
    link: "https://aeronaa.vercel.app/",
    github: "https://github.com/Hamza-Akhtar008/Aeronaa", 
    features: [
      "Unified search across all travel services with intelligent filtering",
      "Secure payment processing and booking management",
      "Personalized recommendations engine",
      "Admin dashboard for analytics and content management"
    ],
    stats: { users: "50K+", rating: "4.9", reviews: "2.3K" },
    category: "Travel & Booking"
  },
  {
    title: "GigGives",
    subtitle: "Equipment Rental Marketplace",
    description: "Peer-to-peer equipment rental platform with geolocation services. Developed with Next.js and NestJS for seamless rental experiences.",
    technologies: ["Next.js", "NestJS", "Stripe", "Geolocation API", "Firebase"],
    link: "https://gig-gives.vercel.app/",
    github: "https://github.com/zainabkhan9118/giggives", // update if repo exists
    features: [
      "Real-time availability calendar and reservation system",
      "Secure payment processing with Stripe integration",
      "Rating and review system for trust management",
      "Comprehensive admin dashboard for rental analytics"
    ],
    stats: { users: "25K+", rating: "4.8", reviews: "1.8K" },
    category: "Marketplace"
  },
  {
    title: "Zara Schools",
    subtitle: "E-Learning Platform",
    description: "Scalable e-learning app with NestJS and Next.js, enabling instructors to manage courses and students to enroll, learn, and track progress.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "JWT", "Socket.io"],
    link: "https://zara-school-nextjs-ashen.vercel.app/",
    github: "https://github.com/zainabkhan9118/zara-schools", // update if repo exists
    features: [
      "Interactive course creation and management system",
      "Real-time progress tracking and analytics",
      "Advanced authentication and role-based access control",
      "Responsive design for all devices"
    ],
    stats: { users: "15K+", rating: "4.7", reviews: "900" },
    category: "Education"
  },
  {
    title: "Lemara Commercial",
    subtitle: "Real Estate Platform",
    description: "Web solution for a California-based real estate firm using NestJS and React. Enabled property listings, client inquiries, and role-based dashboards.",
    technologies: ["React", "NestJS", "PostgreSQL", "AWS S3", "Maps API"],
    link: "https://lemara-commercial.vercel.app",
    github: "https://github.com/zainabkhan9118/lemara-commercial", // update if repo exists
    features: [
      "Advanced property search and filtering",
      "Client relationship management system",
      "Interactive property galleries and virtual tours",
      "Secure document management and e-signatures"
    ],
    stats: { users: "8K+", rating: "4.9", reviews: "450" },
    category: "Real Estate"
  },
  {
    title: "4 Rays",
    subtitle: "Casino Management Tool",
    description: "Casino management tool developed in React and NestJS featuring real-time analytics, user management, and transaction tracking.",
    technologies: ["React", "NestJS", "MongoDB", "Socket.io"],
    link: "https://4rays.vercel.app",
    github: "https://github.com/zainabkhan9118/4rays", // update if repo exists
    features: [
      "Real-time analytics dashboard",
      "User and transaction management",
      "Secure authentication and role-based access",
      "Comprehensive reporting tools"
    ],
    stats: { users: "2K+", rating: "4.6", reviews: "120" },
    category: "Casino/Analytics"
  },
  {
    title: "S4",
    subtitle: "Security Recruitment Platform",
    description: "Recruitment app for security jobs with company job posts, applicant tracking, and interview scheduling.",
    technologies: ["Next.js", "NestJS", "MongoDB", "Socket.io"],
    link: "https://sfour.co.uk/",
    github: "https://github.com/zainabkhan9118/s4", 
    features: [
      "Company job posts and management",
      "Applicant tracking system",
      "Interview scheduling and notifications",
      "Secure authentication and admin dashboard"
    ],
    stats: { users: "1K+", rating: "4.5", reviews: "80" },
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
    content: "Zainab's frontend expertise transformed our application. Not only did she deliver exceptional code, but her suggestions for UX improvements led to a 30% increase in user engagement.",
    rating: 5
  },
  {
    name: "Alisha Patel",
    role: "Project Lead",
    company: "WebSolutions",
    avatar: "AP",
    content: "I was impressed with how quickly Zainab grasped our project needs and implemented solutions. Her technical skills and communication made the development process smooth and effective.",
    rating: 5
  }
];

const achievements = [
  { icon: Users, count: "50K+", label: "Active Users" },
  { icon: Star, count: "4.8", label: "Average Rating" },
  { icon: Code2, count: "15+", label: "Projects Completed" },
  { icon: Award, count: "3", label: "Team Members Mentored" }
];

// Add types for slider props
interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

function Slider<T>({ items, renderItem, className = "" }: SliderProps<T>) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  return (
    <div className={`relative w-full ${className}`}>
      <div className="transition-all duration-700 ease-in-out">
        {renderItem(items[index], index)}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button variant="ghost" size="icon" onClick={prev} className="neon-glow">
          &#8592;
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button variant="ghost" size="icon" onClick={next} className="neon-glow">
          &#8594;
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white futuristic-bg">
      {/* Futuristic Glassmorphic Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-16">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 blur-2xl" />
        <div className="relative z-10 rounded-3xl glassmorph border-2 border-cyan-400/30 shadow-2xl p-10 max-w-3xl w-full flex flex-col items-center neon-border">
          <div className="relative mb-6">
            <Image src="/me.png" alt="Zainab Iqbal" width={160} height={160} className="rounded-full border-4 border-cyan-400/60 shadow-xl neon-glow" />
            {/* Removed FUTURIST label */}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-neon mb-4 animate-fade-in">Zainab Iqbal</h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-6 animate-fade-in delay-200 text-center">
            Senior Frontend Developer | React.js Expert | Next.js | Full-Stack Specialist
          </p>
          <div className="text-cyan-200 text-center text-base mb-6 animate-fade-in delay-300">
            zainabkhan3473@gmail.com | (+92) 311 0522349 <br />
            <a href="https://github.com/zainabkhan9118" className="underline neon-text-gradient" target="_blank" rel="noopener noreferrer">GitHub: zainabkhan9118</a> | Abbottabad, Pakistan | DOB: 20 Jan 2002
          </div>
          <div className="flex gap-4 mb-6 animate-fade-in delay-300">
            <a href="mailto:zainabkhan3473@gmail.com" tabIndex={-1}>
              <Button size="lg" className="neon-glow bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-xl">
                <Mail className="w-5 h-5 mr-2" /> Contact
              </Button>
            </a>
            <a href="/resume" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="outline" size="lg" className="neon-glow border-cyan-400 text-black">
                <Download className="w-5 h-5 mr-2" />Resume
              </Button>
            </a>
          </div>
          <div className="flex gap-3 animate-fade-in delay-500">
            <a href="https://github.com/zainabkhan9118" className="neon-icon" target="_blank" rel="noopener noreferrer"><Github className="w-6 h-6 text-cyan-300" /></a>
            <a href="https://www.linkedin.com/in/zainab-iqbal-3a0216241" className="neon-icon" target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6" /></a>
            <a href="https://www.instagram.com/zainabkhan9118" className="neon-icon" target="_blank" rel="noopener noreferrer"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* Skills - Neon Cards */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-widest neon-text">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((cat, i) => (
            <div key={cat.title} className={`rounded-2xl glassmorph border-2 shadow-xl p-6 flex flex-col items-center neon-border ${i%2===0?'animate-float':''}`}> 
              <cat.icon className="w-10 h-10 mb-3 neon-glow" />
              <h3 className="text-xl font-bold mb-2 neon-text-gradient">{cat.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {cat.skills.map((s) => <Badge key={s} className="neon-badge">{s}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects - Futuristic Slider */}
      <section className="py-16 bg-gradient-to-br from-[#232526]/60 to-[#0f2027]/80">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-widest neon-text">Projects</h2>
        <div className="max-w-3xl mx-auto">
          <Slider
            items={projects}
            renderItem={(project, idx) => (
              <Card className="glassmorph border-2 neon-border shadow-2xl p-8 animate-fade-in">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl neon-text-gradient">{project.title}</CardTitle>
                    <Badge variant="secondary" className="neon-badge">{project.category}</Badge>
                  </div>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-cyan-100">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string) => <Badge key={tech} className="neon-badge">{tech}</Badge>)}
                  </div>
                  <ul className="mb-4 space-y-1">
                    {project.features.map((f: string, i: number) => <li key={i} className="flex items-center gap-2 text-cyan-200"><ArrowRight className="w-4 h-4 neon-glow" />{f}</li>)}
                  </ul>
                  <div className="flex gap-4 mt-4">
                    {/* <Button asChild variant="outline" className="neon-glow"><a href={project.github} target="_blank"><Github className="w-5 h-5 mr-1" />Code</a></Button> */}
                    <Button asChild variant="default" className="neon-glow"><a href={project.link} target="_blank"><ExternalLink className="w-5 h-5 mr-1" />Demo</a></Button>
                  </div>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </section>

      {/* Achievements - Neon Stat Cards */}
      <section className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <div key={a.label} className="glassmorph border-2 neon-border shadow-xl p-6 flex flex-col items-center animate-float">
              <a.icon className="w-10 h-10 mb-2 neon-glow" />
              <div className="text-3xl font-extrabold neon-text-gradient">{a.count}</div>
              <div className="text-cyan-200 text-sm mt-1">{a.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Futuristic Slider */}
      <section className="py-16 bg-gradient-to-br from-[#232526]/60 to-[#0f2027]/80">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-widest neon-text">Testimonials</h2>
        <div className="max-w-2xl mx-auto">
          <Slider
            items={testimonials}
            renderItem={(t, idx) => (
              <Card className="glassmorph border-2 neon-border shadow-2xl p-8 animate-fade-in">
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 neon-glow">
                      <AvatarFallback className="bg-cyan-600 text-white font-bold">{t.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold neon-text-gradient">{t.name}</div>
                      <div className="text-cyan-200 text-xs">{t.role} @ {t.company}</div>
                    </div>
                  </div>
                  <div className="italic text-cyan-100 mb-2">"{t.content}"</div>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i: number) => <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400 neon-glow" />)}
                  </div>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-cyan-200 mb-2">© 2025 Zainab Iqbal. Crafted with <span className="text-fuchsia-400">❤️</span> using Next.js & Tailwind CSS.</p>
        <p className="text-xs text-cyan-600">Futuristic Portfolio. All rights reserved.</p>
      </footer>

      {/* Futuristic/Neon/Glassmorph CSS */}
      <style jsx global>{`
        .futuristic-bg { background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%); }
        .glassmorph { background: rgba(30,40,60,0.7); backdrop-filter: blur(16px) saturate(180%); }
        .neon-border { box-shadow: 0 0 16px 2px #0ff, 0 0 32px 4px #f0f, 0 0 2px 1px #fff2; border-image: linear-gradient(90deg,#0ff,#f0f,#0ff) 1; }
        .neon-glow { filter: drop-shadow(0 0 8px #0ff) drop-shadow(0 0 16px #f0f); }
        .neon-badge { background: linear-gradient(90deg,#0ff,#f0f,#0ff); color: #fff; border: none; box-shadow: 0 0 8px #0ff; }
        .neon-text { text-shadow: 0 0 8px #0ff, 0 0 16px #f0f; }
        .neon-text-gradient { background: linear-gradient(90deg,#0ff,#f0f,#0ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .neon-icon { color: #0ff; filter: drop-shadow(0 0 8px #0ff); transition: transform .2s; }
        .neon-icon:hover { color: #f0f; transform: scale(1.2) rotate(8deg); }
        .animate-float { animation: float 3s ease-in-out infinite alternate; }
        @keyframes float { 0% { transform: translateY(0); } 100% { transform: translateY(-12px); } }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
