import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Training from './components/Training';
import Education from './components/Education';
import Contacts from './components/Contacts';
import Background3D from './components/3D/Background3D';
import AnimatedBackground from './components/3D/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen font-sans text-text-dark flex flex-col overflow-x-hidden relative bg-bg-main selection:bg-pink-200 selection:text-pink-900">
      <Background3D />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Training />
        <Education />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
