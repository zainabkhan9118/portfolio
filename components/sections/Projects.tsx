"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Users, Star, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

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
        <div className="relative h-[550px] md:h-[600px] overflow-hidden">
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
                  <div className="w-full md:w-3/5 lg:w-2/3">
                    <Card className="bg-gray-900/80 border border-silver-500/20 shadow-xl h-full text-white max-h-[550px] overflow-hidden">
                      <CardHeader>
                        <Badge className="self-start mb-2 bg-gradient-to-r from-gray-800 to-gray-900 text-silver-300 border border-silver-500/30 px-3 py-1 text-sm">
                          {project.category}
                        </Badge>
                        
                        <CardTitle className="text-2xl md:text-4xl font-bold break-words">
                          <span className="bg-gradient-to-r from-white via-silver-200 to-white text-transparent bg-clip-text">
                            {project.title}
                          </span>
                        </CardTitle>
                        
                        <CardDescription className="text-lg md:text-xl text-silver-400">
                          {project.subtitle}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-6 overflow-y-auto pr-4 max-h-[350px] no-scrollbar">
                        <p className="text-silver-300 leading-relaxed text-sm md:text-base break-words">
                          {project.description}
                        </p>
                        
                        {/* Features List */}
                        <div>
                          <h4 className="text-lg font-medium text-silver-200 mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features?.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-white/40 shrink-0 mt-0.5" />
                                <p className="text-silver-300 text-sm">{feature}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Technologies */}
                        <div>
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
                      </CardContent>
                      
                      <CardFooter className="flex flex-wrap items-center gap-6 sticky bottom-0 bg-gray-900/95 backdrop-blur-sm border-t border-silver-500/20">
                        <div className="flex items-center gap-4 text-sm text-silver-400">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" /> {project.stats.users}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" /> {project.stats.rating}
                          </span>
                        </div>
                        
                        <div className="flex gap-3">
                          <button 
                            className="btn-shine inline-flex items-center px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-silver-200 transition-all duration-300 shadow-md hover:shadow-lg border border-transparent hover:border-white/50"
                            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </button>
                          
                          {/* <button 
                            className="inline-flex items-center px-4 py-2.5 rounded-md bg-transparent text-white font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg border border-silver-500/30 hover:border-white/50"
                            onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </button> */}
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  {/* Navigation Pills */}
                  <div className="w-full md:w-2/5 lg:w-1/3 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="flex flex-wrap justify-center gap-3">
                        {projects.map((project, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveProject(idx)}
                            className={`px-3 py-1.5 rounded-lg transition-all ${
                              idx === activeProject 
                                ? "bg-white text-black font-medium shadow-lg" 
                                : "bg-gray-800/60 text-silver-400 hover:bg-gray-700/70 border border-silver-500/30"
                            }`}
                            aria-label={`Go to project ${idx + 1}`}
                          >
                            {project.title}
                          </button>
                        ))}
                      </div>
                      
                      <div className="flex justify-center gap-2">
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
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
           {/* Navigation Arrows */}
          <button 
            onClick={prevProject} 
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/20 transition-colors border border-white/20 hover:border-white/50 z-10 shadow-lg hover-animate"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextProject} 
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/20 transition-colors border border-white/20 hover:border-white/50 z-10 shadow-lg hover-animate"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Project Progress Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
            <div className="bg-white/10 h-1 w-32 rounded-full overflow-hidden">
              <div 
                className="bg-white h-full transition-all duration-300 ease-out"
                style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}
              />
            </div>
            <span className="text-white/70 text-xs ml-3">
              {activeProject + 1}/{projects.length}
            </span>
          </div>
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
