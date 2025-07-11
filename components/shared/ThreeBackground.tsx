"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Camera position
    camera.position.z = 30;
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    // Fill arrays with random positions and scales
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position in a sphere
      const radius = 25 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta); // x
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      posArray[i + 2] = radius * Math.cos(phi); // z
      
      scaleArray[i/3] = Math.random() * 2;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Material with custom shaders for better looking particles
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float scale;
        varying vec3 vPosition;
        
        void main() {
          vPosition = position;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        
        void main() {
          // Create a circular particle
          float r = 0.0;
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          r = dot(cxy, cxy);
          if (r > 1.0) {
            discard;
          }
          
          // Gradient based on position
          vec3 color = normalize(vPosition) * 0.5 + 0.5;
          color = mix(vec3(1.0, 1.0, 1.0), color, 0.3); // Mix with white
          
          // Fade out at the edges
          float alpha = 1.0 - r;
          alpha = pow(alpha, 2.0); // Softer falloff
          
          gl_FragColor = vec4(color, alpha * 0.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Mouse movement effect
    const mouse = {
      x: 0,
      y: 0,
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position (-1 to 1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Animate camera with GSAP
      gsap.to(camera.position, {
        x: mouse.x * 2,
        y: mouse.y * 2,
        duration: 2,
        ease: "power2.out"
      });
      
      // Also rotate particles slightly
      gsap.to(particles.rotation, {
        x: -mouse.y * 0.1,
        y: mouse.x * 0.1,
        duration: 2,
        ease: "power2.out"
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.y += 0.0005;
      particles.rotation.z += 0.0002;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial animations with GSAP
    gsap.from(particles.rotation, {
      y: particles.rotation.y + Math.PI * 2,
      duration: 2.5,
      ease: "power3.out"
    });
    
    gsap.from(camera.position, {
      z: 100,
      duration: 2.5,
      ease: "power3.out"
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 pointer-events-none" 
      style={{ overflow: 'hidden' }}
    />
  );
}
