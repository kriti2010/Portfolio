import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 flex flex-col items-center max-w-6xl mx-auto overflow-hidden bg-white/5 rounded-[60px] my-10 border border-white/20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full mb-10 text-center md:text-left"
      >
        <h2 className="text-4xl font-serif font-bold text-pink-950">About me</h2>
      </motion.div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 text-pink-800 leading-relaxed font-medium"
        >
          <p className="mb-6">
            I’m an aspiring AI and Machine Learning engineer driven by a passion for building intelligent systems that solve real-world problems. With a strong foundation in Data Structures, Python, and modern machine learning frameworks, I enjoy transforming data into meaningful, automated solutions.
          </p>
          <p className="mb-6">
            I’ve developed projects like an AI-powered recruitment platform with resume matching and chatbot integration, and I actively explore domains such as Natural Language Processing, Computer Vision, and intelligent systems.
          </p>
          <p className="mb-6">
            Curious by nature and focused on impact, I aim to design AI solutions that are not only innovative, but also efficient, scalable, and practical.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Kriti_Gautam_CV.pdf" 
            download="Kriti_Gautam_CV.pdf"
            className="inline-block mt-2 bg-pink-600 text-white px-10 py-4 rounded-2xl text-sm font-bold shadow-xl shadow-pink-200 hover:bg-pink-700 transition-all"
          >
            Download CV
          </motion.a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 bg-pink-500 rounded-full absolute -z-10 transform translate-x-4 -translate-y-4 opacity-20 blur-2xl"></div>
          {/* Professional Photo */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-pink-50 rounded-full overflow-hidden border-8 border-white shadow-2xl flex flex-col items-center justify-center text-pink-400 font-bold ring-8 ring-pink-100/50">
            <img 
              src={profileImg} 
              alt="Kriti Gautam" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
