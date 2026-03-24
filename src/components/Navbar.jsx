import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-6 md:px-12 lg:px-24 sticky top-0 bg-white/40 backdrop-blur-xl z-50 border-b-2 border-pink-100/50 shadow-[0_4px_30px_rgba(236,72,153,0.1)] transition-all duration-300">
      <a href="#hero" className="font-serif font-bold text-2xl md:text-3xl text-pink-950 tracking-tighter hover:scale-105 transition-transform cursor-pointer">
        <span className="text-holographic">Kriti</span>
      </a>
      <div className="hidden md:flex space-x-6 lg:space-x-12 text-sm font-bold">
        {[
          { name: 'About', href: '#about' },
          { name: 'Skills', href: '#skills' },
          { name: 'Projects', href: '#projects' },
          { name: 'Contacts', href: '#contacts' }
        ].map((item) => (
          <a 
            key={item.name}
            href={item.href} 
            className="text-pink-900 hover:text-pink-600 transition-all uppercase tracking-widest text-[11px] relative group px-2 py-1"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full group-hover:shadow-[0_0_10px_rgba(236,72,153,0.8)]"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
