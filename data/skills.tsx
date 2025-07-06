"use client";

import { Monitor, Server, Code2, Settings, Database, Smartphone } from "lucide-react";

export const skills = [
  { title: "Frontend", icon: Monitor, color: "from-cyan-400 to-blue-600", skills: ["React.js", "Next.js", "Tailwind CSS", "Material UI"] },
  { title: "Backend", icon: Server, color: "from-fuchsia-500 to-purple-700", skills: ["NestJS", "Node.js", "Express", "Laravel"] },
  { title: "Languages", icon: Code2, color: "from-orange-400 to-pink-600", skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "Java", "C", "C#", "Dart"] },
  { title: "DevOps", icon: Settings, color: "from-green-400 to-teal-600", skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "DaisyUI", "ShadCN"] },
  { title: "Databases", icon: Database, color: "from-indigo-500 to-blue-600", skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL", "Neon"] },
  { title: "Mobile & APIs", icon: Smartphone, color: "from-teal-500 to-green-600", skills: ["Amadeus", "Stripe", "RESTful", "Flutter"] },
];
