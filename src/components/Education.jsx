import { motion } from 'framer-motion';

const Education = () => (
    <section id="education" className="py-24 px-6 md:px-16 max-w-6xl mx-auto bg-pink-100/10 rounded-[40px] mb-20 border border-pink-100 overflow-hidden text-left">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-serif font-bold text-center text-pink-950 mb-12"
      >
        Education
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
          <h3 className="text-2xl font-bold text-pink-950">Bachelor of Technology (CSE)</h3>
          <p className="text-pink-600 font-medium mt-1 text-lg">Lovely Professional University | Aug 2023 - Present</p>
          <p className="text-pink-900 text-sm mt-3 font-bold bg-pink-100 inline-block px-4 py-2 rounded-full shadow-sm border border-pink-200">CGPA: 8.48</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -left-[42px] w-6 h-6 bg-pink-500 rounded-full border-4 border-pink-50 shadow-sm"></div>
          <h3 className="text-2xl font-bold text-pink-950">Intermediate (KV No.1)</h3>
          <p className="text-pink-600 font-medium mt-1 text-lg">Army Cantt, Jhansi | Apr 2020 - Jul 2021</p>
          <p className="text-pink-900 text-sm mt-3 font-bold bg-pink-100 inline-block px-4 py-2 rounded-full shadow-sm border border-pink-200">Percentage: 89.8%</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-[42px] w-6 h-6 bg-pink-500 rounded-full border-4 border-pink-50 shadow-sm"></div>
          <h3 className="text-2xl font-bold text-pink-950">Matriculation (KV No.1)</h3>
          <p className="text-pink-600 font-medium mt-1 text-lg">Army Cantt, Jhansi | Apr 2018 - May 2019</p>
          <p className="text-pink-900 text-sm mt-3 font-bold bg-pink-100 inline-block px-4 py-2 rounded-full shadow-sm border border-pink-200">Percentage: 93.8%</p>
        </motion.div>
      </div>
    </section>
);

export default Education;
