"use client";


import { motion } from "framer-motion";
import { Award, Code2, Users } from "lucide-react";
import { Typewriter } from "@/components/shared/Typewriter";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
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
              <p className="text-lg text-silver-300 whitespace-pre-line">
                <span className="relative">
                  <Typewriter
                    text={
                      `I'm a passionate Senior Frontend Developer with a love for creating beautiful, intuitive, and high-performing web applications that solve real-world problems.\n\n` +
                      `With expertise in React, Next.js, and modern JavaScript, I transform complex requirements into elegant solutions. My background spans both frontend excellence and backend integration, allowing me to develop comprehensive full-stack applications.\n\n` +
                      `Beyond coding, I'm deeply interested in UI/UX design principles, ensuring that technical implementations are not just functional but delightful to use. I believe in continuous learning and stay at the forefront of web development trends.\n\n` +
                      `When I'm not crafting code, I enjoy exploring new technologies, contributing to open-source projects, and mentoring junior developers. Let's create something amazing together!`
                    }
                    delay={20}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
