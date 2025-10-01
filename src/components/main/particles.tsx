"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "@tsparticles/engine";
// import type { Container } from "@tsparticles/engine";


let particlesEngineInitialized = false;

export const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  particles: {
    number: { value: 60, density: { enable: true, width: 800, height: 800 } },
    color: { 
      value: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"] // Enhanced neural colors
    },
    shape: { 
      type: "circle",
    },
    opacity: { 
      value: { min: 0.4, max: 0.9 },
      animation: {
        enable: true,
        speed: 1,
        sync: false
      }
    },
    size: { 
      value: { min: 1, max: 4 },
      animation: {
        enable: true,
        speed: 3,
        sync: false
      }
    },
    links: { 
      enable: true, 
      distance: 180, 
      color: "#3b82f6", 
      opacity: 0.3, 
      width: 1.5,
      triangles: {
        enable: true,
        color: "#3b82f6",
        opacity: 0.02
      }
    },
    move: { 
      enable: true, 
      speed: 1.2, 
      direction: "none",
      random: false,
      straight: false,
      outModes: { 
        default: "bounce" 
      },
      attract: {
        enable: false,
        distance: 200,
        rotate: {
          x: 3000,
          y: 3000
        }
      }
    },
  },
  interactivity: {
    events: {
      onHover: { 
        enable: true, 
        mode: ["bubble", "connect"],
        parallax: { enable: false, force: 60, smooth: 10 }
      },
      onClick: { 
        enable: false, 
        mode: "push" 
      },
      resize: { enable: true },
    },
    modes: { 
      grab: {
        distance: 300,
        links: {
          opacity: 1,
          color: "#60a5fa"
        }
      },
      bubble: {
        distance: 200,
        size: 8,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      connect: {
        distance: 200,
        links: {
          opacity: 0.8
        },
        radius: 100
      },
      push: { 
        quantity: 1
      }
    },
  },
  background: {
    opacity: 0
  },
  detectRetina: true,
};

const HeroParticlesComponent: React.FC = () => {
  const [engineInitialized, setEngineInitialized] = useState(particlesEngineInitialized);

  useEffect(() => {
    if (!particlesEngineInitialized) {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        particlesEngineInitialized = true; 
        setEngineInitialized(true);
      });
    }
  }, []);

  if (!engineInitialized) return null;

  return (
    <>
      <style>{`
        #tsparticles {
          filter: blur(0px);
          transition: all 0.3s ease;
          position: relative;
        }
        
        #tsparticles:hover {
          filter: blur(0px) brightness(1.4) saturate(1.5) contrast(1.2);
        }
        
        #tsparticles canvas {
          animation: neural-pulse 6s ease-in-out infinite;
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
        }
        
        #tsparticles::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96, 165, 250, 0.1) 0%, transparent 30%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }
        
        #tsparticles:hover::before {
          opacity: 1;
        }
        
        @keyframes neural-pulse {
          0%, 100% { 
            opacity: 0.8;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.01);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
      <Particles
        id="tsparticles"
        className="absolute inset-0 w-full h-full z-0"
        options={particlesOptions}
      />
    </>
  );
};

export const HeroParticles = React.memo(HeroParticlesComponent);
HeroParticles.displayName = "HeroParticles";