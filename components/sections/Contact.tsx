"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowRight, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      className="py-28 bg-black relative overflow-hidden z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_80%)]"></div>
        <div className="absolute right-0 top-0 w-80 h-80 bg-purple-900/40 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">
              Let's Connect
            </span>
          </h2>
          <p className="text-silver-300 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to help bring it to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-silver-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-silver-200 text-sm">Email</h4>
                  <p className="text-white">zainabkhan3473@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-silver-200 text-sm">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/zainab-iqbal-3a0216241" target="_blank" rel="noopener noreferrer" className="text-white hover:text-silver-300">linkedin.com/in/zainab-iqbal</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-silver-200 text-sm">GitHub</h4>
                  <a href="https://github.com/zainabkhan9118" target="_blank" rel="noopener noreferrer" className="text-white hover:text-silver-300">github.com/zainabkhan9118</a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <div className="flex gap-4">
                {[
                  { icon: Github, url: "https://github.com/zainabkhan9118" },
                  { icon: Linkedin, url: "https://www.linkedin.com/in/zainab-iqbal-3a0216241" },
                  { icon: Instagram, url: "https://www.instagram.com/zainabkhan9118" },
                ].map((social) => (
                  <a 
                    key={social.url}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-medium text-white mb-6">Send me a message</h3>
              
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement)?.value;
                  const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
                  const message = (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement)?.value;
                  const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
                  window.open(`https://wa.me/923110522349?text=${text}`, '_blank');
                }}
              >
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-silver-200">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-silver-500 focus:border-silver-400" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-silver-200">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="Your email" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-silver-500 focus:border-silver-400" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-silver-200">Message</Label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5} 
                      placeholder="Your message" 
                      className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-silver-500 focus:border-silver-400 p-2.5 focus:outline-none focus:ring-2 focus:ring-silver-500/30" 
                    ></textarea>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-white text-black hover:bg-silver-200 flex items-center justify-center space-x-2 py-6">
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
