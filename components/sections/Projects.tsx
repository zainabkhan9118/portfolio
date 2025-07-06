"use client";


import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Star } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
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
    <motion.section
      className="py-28 bg-black relative overflow-hidden z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
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
                        </div>
                        
                        <div className="relative w-full aspect-video overflow-hidden bg-gray-950 rounded-b-md">
                          {/* Project Screenshot/Mockup (placeholder) */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-70"></div>
                          
                          {/* Abstract UI Elements */}
                          <div className="absolute inset-0 flex flex-col p-4">
                            <div className="w-1/2 h-2 bg-gray-700 rounded-full mb-3"></div>
                            <div className="w-3/4 h-2 bg-gray-800 rounded-full mb-6"></div>
                            
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="h-16 rounded-md bg-gray-800/70"></div>
                              <div className="h-16 rounded-md bg-gray-800/40"></div>
                            </div>
                            
                            <div className="flex-1 grid grid-cols-3 gap-2">
                              <div className="col-span-2 rounded-md bg-gray-800/50"></div>
                              <div className="rounded-md bg-gray-800/30"></div>
                            </div>
                            
                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine" style={{ backgroundSize: '200% 100%' }}></div>
                            </div>
                          </div>
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
    </motion.section>
  );
}
