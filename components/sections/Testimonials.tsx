"use client";


import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };
  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <motion.section
      className="py-28 bg-gradient-to-b from-gray-900 to-black relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_60%)]"></div>
      </div>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Client Testimonials</span>
          </h2>
          <p className="text-silver-300 max-w-2xl mx-auto">What clients say about working with me</p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
        <div className="relative h-[380px] md:h-[300px]">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                idx === active
                  ? "opacity-100 translate-x-0 z-10"
                  : idx < active
                  ? "opacity-0 -translate-x-full z-0"
                  : "opacity-0 translate-x-full z-0"
              }`}
            >
              <Card className="bg-gradient-to-br from-black to-gray-900 border border-silver-500/20 shadow-lg h-full text-white">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-silver-500 to-white text-gray-900 font-medium">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-[120px]">
                      <CardTitle className="text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-silver-400">{testimonial.role}, {testimonial.company}</CardDescription>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -left-1 -top-1 w-6 h-6 text-silver-500/20" />
                    <p className="text-silver-300 italic leading-relaxed text-sm md:text-base break-words pl-5">
                      {testimonial.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          {/* Navigation Arrows */}
          <button 
            onClick={prev} 
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/20 transition-colors border border-white/20 hover:border-white/50 z-20 shadow-lg hover-animate"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={next} 
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/20 transition-colors border border-white/20 hover:border-white/50 z-20 shadow-lg hover-animate"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Testimonial Progress Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
            <div className="bg-white/10 h-1 w-32 rounded-full overflow-hidden">
              <div 
                className="bg-white h-full transition-all duration-300 ease-out"
                style={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
              />
            </div>
            <span className="text-white/70 text-xs ml-3">
              {active + 1}/{testimonials.length}
            </span>
          </div>
          
          {/* Pills */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === active ? "w-8 bg-white" : "w-2 bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
