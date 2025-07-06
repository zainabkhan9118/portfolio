"use client";


import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from "@/components/ui/hover-card";

// Fun facts about each expertise area
const expertiseFacts = {
  "Frontend": {
    fact: "Did you know? Frontend developers spend approximately 50% of their time debugging CSS!",
    tip: "Try the React DevTools extension for a productivity boost."
  },
  "Backend": {
    fact: "Backend systems process billions of API requests daily across the internet.",
    tip: "Always implement proper rate limiting on your APIs."
  },
  "Languages": {
    fact: "JavaScript was created in just 10 days in May 1995 by Brendan Eich.",
    tip: "TypeScript can reduce production bugs by up to 70%."
  },
  "DevOps": {
    fact: "The term 'DevOps' is a combination of 'development' and 'operations'.",
    tip: "Automating your CI/CD pipeline can save 20+ hours per week."
  },
  "Databases": {
    fact: "The world's data volume doubles approximately every two years!",
    tip: "Always index your database queries for better performance."
  },
  "Mobile & APIs": {
    fact: "There are over 1.6 million different API endpoints available publicly.",
    tip: "RESTful APIs remain the most widely used API architecture."
  }
};

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
            <HoverCard key={cat.title} className="w-full">
              <HoverCardTrigger asChild>
                <div 
                  className="bg-black rounded-xl border border-white/10 p-6 cursor-pointer"
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
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-black/95 border border-white/20 text-white p-5 backdrop-blur-xl shadow-xl shadow-purple-500/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cat.color} flex items-center justify-center`}>
                      <cat.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold">{cat.title} Expertise</h4>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-sm italic text-silver-300 mb-2">"{expertiseFacts[cat.title]?.fact}"</p>
                    <p className="text-xs font-medium text-silver-400 mt-2">💡 Pro Tip: {expertiseFacts[cat.title]?.tip}</p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-white/10">
                    <p className="text-xs text-silver-400">Experience level: <span className="text-white font-semibold">Advanced</span></p>
                    <div className="mt-1 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
