import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const orbs = [
    { color: 'rgba(247, 127, 190, 0.4)', size: 'w-96 h-96', initialX: '10%', initialY: '10%', duration: 25 },
    { color: 'rgba(255, 182, 193, 0.3)', size: 'w-[500px] h-[500px]', initialX: '60%', initialY: '50%', duration: 30 },
    { color: 'rgba(236, 72, 153, 0.2)', size: 'w-80 h-80', initialX: '30%', initialY: '80%', duration: 20 },
    { color: 'rgba(252, 228, 236, 0.3)', size: 'w-[400px] h-[400px]', initialX: '80%', initialY: '10%', duration: 35 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-transparent">
      {/* Background Shimmer Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_50%)] animate-pulse opacity-30"></div>
      
      {/* Animated Glowing Orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ x: orb.initialX, y: orb.initialY, opacity: 0.3 }}
          animate={{
            x: [orb.initialX, `${parseInt(orb.initialX) + 15}%`, orb.initialX],
            y: [orb.initialY, `${parseInt(orb.initialY) - 15}%`, orb.initialY],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundColor: orb.color }}
          className={`absolute ${orb.size} rounded-full blur-[120px] mix-blend-soft-light`}
        />
      ))}

      {/* Floating Particles Overlay (SVG) */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              r={Math.random() * 2 + 1}
              fill="white"
              initial={{ cx: `${Math.random() * 100}%`, cy: `${Math.random() * 100}%` }}
              animate={{
                cy: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;
