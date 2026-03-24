import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CherryBlossoms from './3D/CherryBlossoms';

const AvatarPlaceholder = () => (
  <mesh rotation={[0.5, 0.5, 0]}>
    <boxGeometry args={[2, 4, 1]} />
    <meshStandardMaterial color="#ff6b9a" />
  </mesh>
);

import avatarImg from '../assets/avatar.png';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const keywords = ["AI", "NLP", "Computer Vision", "Machine Learning", "Data Intelligence", "Automation"];
  
  // Mouse tracking for Live Avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for natural movement
  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Center based coordinates
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 md:py-20 relative min-h-[80vh] bg-transparent overflow-hidden">
      <div className="w-full md:w-1/2 z-10 mt-10 md:mt-0">
        <div className="h-12 overflow-hidden mb-4">
          <motion.h2 
            key={keywords[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-holographic font-bold uppercase tracking-wider text-2xl md:text-3xl"
          >
            {keywords[index]} Specialist
          </motion.h2>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold text-pink-950 mb-6 leading-tight"
        >
          Hello, my name <br /> is Kriti
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-pink-800 mb-8 max-w-md leading-relaxed font-medium"
        >
          Software Developer & AI Enthusiast specializing in building intelligent, automated solutions. Welcome to my holographic 3D space.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="bg-pink-600 text-white px-8 py-3 rounded text-sm font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 transition-colors"
            >
              Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/kriti-gautam-kriti" 
              target="_blank" 
              rel="noreferrer" 
              className="border-2 border-pink-950 text-pink-950 px-8 py-3 rounded text-sm font-bold hover:bg-pink-100 transition-colors"
            >
              LinkedIn
            </motion.a>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              { label: 'Certificates', href: '#achievements' },
              { label: 'Achievements', href: '#achievements' },
              { label: 'Training', href: '#training' },
              { label: 'Education', href: '#education' }
            ].map((link, i) => (
              <motion.a
                key={link.label}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(219, 39, 119, 0.2)',
                  borderColor: 'rgba(219, 39, 119, 0.8)',
                  boxShadow: '0 0 15px rgba(236,72,153,0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-widest text-pink-800 border-2 border-pink-200 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-sm hover:text-pink-600 transition-all"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-[450px] md:h-[650px] perspective-1000">
        {/* Dynamic Glow that follows mouse slightly */}
        <motion.div 
          style={{ x: useSpring(useTransform(mouseX, [-300, 300], [20, -20]), springConfig), y: useSpring(useTransform(mouseY, [-300, 300], [20, -20]), springConfig) }}
          className="absolute inset-0 bg-pink-blob rounded-bl-[100px] rounded-tl-[300px] transform md:translate-x-12 z-0 scale-110 md:scale-125 origin-right opacity-80"
        ></motion.div>
        
        {/* Live Avatar with 3D Tilt & Eye Tracking */}
        <motion.div 
          style={{ rotateX, rotateY, z: 50 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative z-10 w-full max-w-[400px] md:max-w-full h-full flex justify-center items-center preserve-3d"
        >
          {/* Character Container with New Background */}
          <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[650px] flex justify-center items-center overflow-hidden rounded-[100px] md:rounded-[200px] bg-gradient-to-b from-pink-100 to-pink-300 shadow-[0_0_50px_rgba(236,72,153,0.3)] border-8 border-white/30 backdrop-blur-md">
            
            {/* Soft Glow Background behind character */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] opacity-40"></div>
            
            <img 
              src={avatarImg} 
              alt="Live 3D Avatar" 
              className="w-full h-full object-cover scale-110 translate-y-6 filter contrast-[1.1] brightness-[1.1] mix-blend-multiply"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 70%, transparent 100%)'
              }}
            />
            
            {/* Live Eyes Overlay */}
            {/* Left Pupil */}
            <motion.div 
              style={{ 
                x: useSpring(useTransform(mouseX, [-500, 500], [-3, 3]), springConfig), 
                y: useSpring(useTransform(mouseY, [-500, 500], [-2, 2]), springConfig) 
              }}
              className="absolute top-[38.8%] left-[38.2%] w-2 h-2 md:w-3 md:h-3 bg-[#3d2315] rounded-full blur-[1px] opacity-80 z-20 pointer-events-none"
            />
            {/* Right Pupil */}
            <motion.div 
              style={{ 
                x: useSpring(useTransform(mouseX, [-500, 500], [-3, 3]), springConfig), 
                y: useSpring(useTransform(mouseY, [-500, 500], [-2, 2]), springConfig) 
              }}
              className="absolute top-[38.8%] left-[61.6%] w-2 h-2 md:w-3 md:h-3 bg-[#3d2315] rounded-full blur-[1px] opacity-80 z-20 pointer-events-none"
            />

            {/* Periodic Blink Animation */}
            <motion.div 
              animate={{ height: ["0%", "0%", "100%", "0%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1, 1] }}
              className="absolute top-[37%] left-[32%] w-[36%] h-0 bg-pink-100/40 z-30 pointer-events-none blur-[2px] rounded-full"
            />
            
            {/* Over-image subtle shine */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent pointer-events-none z-10"></div>
          </div>
          
          {/* Glow Shadow */}
          <div className="absolute -inset-10 bg-pink-500/10 rounded-full blur-[100px] -z-10"></div>
          
          {/* Subtle light reflection overlay that moves with mouse */}
          <motion.div 
            style={{ x: useTransform(mouseX, [-300, 300], [-50, 50]), y: useTransform(mouseY, [-300, 300], [-50, 50]) }}
            className="absolute z-20 w-full h-full pointer-events-none mix-blend-soft-light opacity-30 bg-gradient-to-br from-white via-transparent to-pink-200 rounded-full blur-3xl scale-75"
          ></motion.div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 hologram-scanlines z-0 opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
