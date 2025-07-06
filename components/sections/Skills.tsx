"use client";


import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <motion.section
      className="py-20 bg-gray-900 relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </motion.section>
  );
}
