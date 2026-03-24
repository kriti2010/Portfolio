import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const CertificateCard = ({ index, name, issuer, date, imagePath }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <a href={imagePath} target="_blank" rel="noreferrer" className="block">
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          scale={1.02}
          transitionSpeed={400}
          className='bg-pink-100/40 backdrop-blur-md p-4 md:p-5 rounded-2xl w-full border border-pink-200 shadow-xl relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-pink-300/30 transition-all'
        >
          <div className='absolute z-0 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-10 -top-10 -right-10'></div>
          
          <div className='relative w-full h-[220px] md:h-[240px] z-10'>
            <img
              src={imagePath}
              alt={name}
              className='w-full h-full object-cover rounded-xl border border-pink-100 group-hover:border-pink-500/50 transition-colors'
              onError={(e) => { e.target.src = `https://placehold.co/800x600/fce7f3/db2777?text=${encodeURIComponent(issuer + ' Certificate')}` }}
            />
          </div>
  
          <div className='mt-5 relative z-10'>
            <h3 className='text-pink-950 font-bold text-[16px] md:text-[18px] leading-snug line-clamp-2 h-[48px]'>{name}</h3>
            <p className='mt-3 text-pink-700 text-[13px] md:text-[14px] font-medium'>
              {issuer} <span className="text-pink-200 mx-1">|</span> {date}
            </p>
          </div>
        </Tilt>
      </a>
    </motion.div>
  );
};

const Achievements = () => {
    // Array of certificates with the newly uploaded image filenames
    const certificates = [
      {
        name: "Master Generative AI & Generative AI tools (ChatGPT & more)",
        issuer: "Udemy",
        date: "Aug 24, 2025",
        imagePath: "/certificates/media__1774285824001.png"
      },
      {
        name: "Machine Learning: Natural Language Processing in Python (V2)",
        issuer: "Udemy",
        date: "Feb 12, 2024",
        imagePath: "/certificates/media__1774285824029.png"
      },
      {
        name: "Build Generative AI Apps and Solutions with No-Code Tools",
        issuer: "Infosys",
        date: "Aug 22, 2025",
        imagePath: "/certificates/media__1774285824038.png"
      },
      {
        name: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
        issuer: "Infosys",
        date: "Aug 24, 2025",
        imagePath: "/certificates/media__1774285824102.png"
      },
      {
        name: "Computational Theory: Language Principle & Finite Automata",
        issuer: "Infosys",
        date: "Dec 10, 2025",
        imagePath: "/certificates/media__1774286181474.png"
      }
    ];

    return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto mb-10">
      
      {/* Certificates */}
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-pink-950 mb-16">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
             <CertificateCard key={index} index={index} {...cert} />
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-4xl font-serif font-bold text-center text-pink-950 mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-pink-200 rounded-3xl hover:shadow-xl transition-all duration-300 bg-pink-100/20 text-center group cursor-pointer hover:-translate-y-2">
            <div className="w-20 h-20 bg-pink-100 text-pink-600 flex items-center justify-center rounded-full mx-auto mb-6 text-3xl group-hover:bg-pink-600 group-hover:text-white transition-colors shadow-sm">🦾</div>
            <h3 className="font-bold text-xl mb-2 text-pink-950 mt-4">VOGAP Project</h3>
            <p className="text-sm text-pink-800 leading-relaxed">Voice Powered Object Grasping Arm Prosthesis Device. (Jan 2026)</p>
          </div>
          <div className="p-8 border border-pink-200 rounded-3xl hover:shadow-xl transition-all duration-300 bg-pink-100/20 text-center group cursor-pointer hover:-translate-y-2">
            <div className="w-20 h-20 bg-pink-100 text-pink-600 flex items-center justify-center rounded-full mx-auto mb-6 text-2xl group-hover:bg-pink-600 group-hover:text-white transition-colors shadow-sm">⭐⭐⭐⭐⭐</div>
            <h3 className="font-bold text-xl mb-2 text-pink-950 mt-4">5 Star Rating in Java</h3>
            <p className="text-sm text-pink-800 leading-relaxed">Hacker Rank (Dec 2025)</p>
          </div>
          <div className="p-8 border border-pink-200 rounded-3xl hover:shadow-xl transition-all duration-300 bg-pink-100/20 text-center group cursor-pointer hover:-translate-y-2">
            <div className="w-20 h-20 bg-pink-100 text-pink-600 flex items-center justify-center rounded-full mx-auto mb-6 text-2xl group-hover:bg-pink-600 group-hover:text-white transition-colors shadow-sm">⭐⭐⭐</div>
            <h3 className="font-bold text-xl mb-2 text-pink-950 mt-4">3 Star Rating in SQL</h3>
            <p className="text-sm text-pink-800 leading-relaxed">Hacker Rank (Dec 2025)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
