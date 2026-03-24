import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-10 gap-6 mt-20 relative overflow-hidden bg-pink-100/20">
      <div className="flex gap-6 text-2xl text-pink-950">
        <a href="https://github.com/kriti2010" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kriti-gautam-kriti" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors"><FaLinkedin /></a>
        <a href="mailto:kritigautam2408@gmail.com" className="hover:text-pink-600 transition-colors"><FaEnvelope /></a>
      </div>
      <p className="text-sm text-pink-800 font-serif font-bold">Kriti &copy; 2026</p>
      
      {/* Decorative Blob */}
      <div className="absolute bottom-0 w-full h-32 bg-pink-600 transform translate-y-16 -skew-y-3 -z-10 opacity-30" style={{ borderRadius: '100% 0 0 0' }}></div>
    </footer>
  );
};

export default Footer;
