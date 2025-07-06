"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-12 bg-black border-t border-white/10 relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-silver-400 text-sm">
          &copy; {new Date().getFullYear()} Zainab Iqbal • Senior Frontend Developer
        </p>
        <p className="text-silver-500 text-xs mt-2">
          Built with Next.js, React and Tailwind CSS
        </p>
      </div>
    </motion.footer>
  );
}
