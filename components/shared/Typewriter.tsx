"use client";

import { useState, useEffect } from "react";

export interface TypewriterProps {
  text: string;
  delay?: number;
}

export function Typewriter({ text, delay = 100 }: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (text.length > 0) {
      // Restart after 3 seconds
      // const restartTimeout = setTimeout(() => {
      //   setCurrentText("");
      //   setCurrentIndex(0);
      // },);
      // return () => clearTimeout(restartTimeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
}
