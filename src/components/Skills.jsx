import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "Google Gemini", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" },
      { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    ]
  },
  {
    title: "Frameworks & Web",
    skills: [
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
      { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    ]
  },
  {
    title: "Tools & Core Engineering",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "DSA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "PLC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto bg-transparent min-h-[60vh] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-pink-950 mb-4">Skills & Technologies</h2>
        <div className="w-24 h-1.5 bg-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-24">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title}>
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="text-2xl font-serif font-bold text-pink-700 mb-10 ml-4 md:ml-10 border-l-4 border-pink-300 pl-4"
            >
              {category.title}
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="flex flex-row flex-wrap justify-center gap-8 md:gap-12"
            >
              {category.skills.map((skill, index) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={skill.name} 
                  className="w-24 flex flex-col items-center group"
                >
                  <Tilt
                    options={{
                      max: 45,
                      scale: 1,
                      speed: 450,
                    }}
                    className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl flex items-center justify-center p-6 border-2 border-pink-200 shadow-xl shadow-pink-200/20 cursor-pointer group-hover:border-pink-400 transition-colors"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";
                      }}
                    />
                  </Tilt>
                  <span className="mt-4 text-[10px] md:text-xs font-bold text-pink-800 group-hover:text-pink-600 transition-colors uppercase tracking-widest text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
