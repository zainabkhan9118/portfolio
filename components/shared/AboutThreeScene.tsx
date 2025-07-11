"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function AboutThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 300;
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    
    // Create particles in a spiral pattern
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Spiral formula
      const angle = (i / 3) * 0.1;
      const radius = Math.sqrt((i / 3)) * 0.1;
      
      posArray[i] = Math.sin(angle) * radius * 5; // x
      posArray[i + 1] = Math.cos(angle) * radius * 5; // y
      posArray[i + 2] = (Math.random() - 0.5) * 3; // z
      
      // Create gradient colors (purples to blues to teals)
      const hue = (i / (particleCount * 3)) * 0.3 + 0.5; // Hue from 0.5 to 0.8 (purples to blues)
      const color = new THREE.Color().setHSL(hue, 0.8, 0.5);
      
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // GSAP Animations
    gsap.fromTo(
      particles.rotation,
      { x: -0.2, y: -0.2, z: 0 },
      { x: 0.2, y: 0.2, z: 0.1, duration: 20, ease: "none", repeat: -1, yoyo: true }
    );

    // Animation for particle size pulsing
    gsap.fromTo(
      particlesMaterial,
      { size: 0.03 },
      { size: 0.08, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true }
    );

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse move effect
    const handleMouseMove = (event: MouseEvent) => {
      if (!particlesRef.current || !canvasRef.current) return;
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      gsap.to(particlesRef.current.rotation, {
        x: mouseY * 0.1,
        y: mouseX * 0.1,
        duration: 2,
        ease: "power1.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (particlesRef.current) {
        particlesRef.current.rotation.z += 0.001;
      }
      
      rendererRef.current?.render(scene, camera);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up Three.js resources
      scene.remove(particles);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
