import { motion } from 'framer-motion';

const Training = () => (
    <section id="training" className="py-24 px-6 md:px-16 max-w-6xl mx-auto bg-pink-100/20 rounded-[40px] mb-10 border border-pink-100 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-serif font-bold text-pink-950 mb-12 text-center"
      >
        Training
      </motion.h2>
      <div className="border-l-4 border-pink-300 pl-8 ml-4 md:ml-10 space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-[42px] w-6 h-6 bg-pink-500 rounded-full border-4 border-pink-50 shadow-sm"></div>
          <h3 className="text-2xl font-bold text-pink-950">Basic of Data Structure and Algorithms</h3>
          <p className="text-pink-600 font-medium mt-1 text-lg">Skill Development (LPU) | Nov 2025</p>
          <p className="text-pink-800 mt-2 max-w-2xl font-medium">Focused on fundamental algorithms, data structures, and problem-solving techniques to build a solid foundation in computer science.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -left-[42px] w-6 h-6 bg-pink-500 rounded-full border-4 border-pink-50 shadow-sm"></div>
          <h3 className="text-2xl font-bold text-pink-950 leading-snug">Cyber-Physical Systems: Sensors and PLC Interfacing</h3>
          <p className="text-pink-600 font-medium mt-1 text-lg">Skill Development (LPU) | Sept 2025</p>
          <p className="text-pink-800 mt-2 max-w-2xl font-medium">Hands-on experience with sensor integration, PLC programming, and the intersection of hardware and software in intelligent systems.</p>
        </motion.div>
      </div>
    </section>
);

export default Training;
