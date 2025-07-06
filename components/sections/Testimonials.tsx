"use client";


import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";

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
        <div className="relative h-[340px] md:h-[300px]">
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
              <div className="bg-gradient-to-br from-black to-gray-900 border border-silver-500/20 p-8 rounded-xl shadow-lg flex flex-col h-full justify-between">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-silver-500 to-white text-gray-900 font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-white text-lg">{testimonial.name}</h3>
                    <p className="text-silver-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                  <div className="flex ml-auto">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-silver-300 italic leading-relaxed text-lg">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/10 transition-colors border border-white/10 hover:border-white/30 z-20"
            aria-label="Previous testimonial"
          >
            <div className="relative w-4 h-4">
              <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2 -translate-x-[15%] rotate-45"></div>
              <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2 -translate-x-[15%] -rotate-45"></div>
            </div>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/10 transition-colors border border-white/10 hover:border-white/30 z-20"
            aria-label="Next testimonial"
          >
            <div className="relative w-4 h-4">
              <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2 translate-x-[15%] -rotate-45"></div>
              <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2 translate-x-[15%] rotate-45"></div>
            </div>
          </button>
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
