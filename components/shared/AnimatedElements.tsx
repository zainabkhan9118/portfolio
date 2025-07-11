"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedElementsProps {
  children: React.ReactNode;
}

export default function AnimatedElements({ children }: AnimatedElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Animate heading elements
    const headings = container.querySelectorAll('h1, h2');
    gsap.fromTo(
      headings,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 1, 
        ease: "power3.out",
      }
    );
    
    // Animate paragraph
    const paragraph = container.querySelectorAll('p');
    gsap.fromTo(
      paragraph,
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.4, 
        ease: "power2.out" 
      }
    );
    
    // Animate buttons with staggered effect
    const buttons = container.querySelectorAll('button, a');
    gsap.fromTo(
      buttons,
      { 
        opacity: 0, 
        y: 20, 
        scale: 0.9 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        stagger: 0.15, 
        duration: 0.6, 
        delay: 0.6, 
        ease: "back.out(1.7)" 
      }
    );
    
    // Animate social icons
    const socialIcons = container.querySelectorAll('.social-icons a');
    gsap.fromTo(
      socialIcons,
      { 
        opacity: 0, 
        x: -10 
      },
      { 
        opacity: 1, 
        x: 0, 
        stagger: 0.1, 
        duration: 0.4, 
        delay: 1.2, 
        ease: "power1.out" 
      }
    );
    
    // Image reveal animation
    const imageContainer = container.querySelector('.image-container');
    if (imageContainer) {
      gsap.fromTo(
        imageContainer,
        { 
          opacity: 0, 
          scale: 0.8, 
          rotation: -5 
        },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0, 
          duration: 1.2, 
          ease: "elastic.out(1, 0.5)" 
        }
      );
    }
    
    // Floating elements animation
    const floatingElements = container.querySelectorAll('.floating-element');
    floatingElements.forEach((element, i) => {
      gsap.to(element, {
        y: i % 2 === 0 ? -8 : 8,
        x: i % 3 === 0 ? 5 : -5,
        rotation: i % 2 === 0 ? 10 : -10,
        duration: 2 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
    
    // Create hover effects using GSAP
    const hoverElements = container.querySelectorAll('.hover-animate');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.out"
        });
      });
      
      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: "power1.out"
        });
      });
    });
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  return <div ref={containerRef}>{children}</div>;
}
