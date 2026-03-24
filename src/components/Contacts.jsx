import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contacts = () => {
    return (
        <section id="contacts" className="py-24 relative overflow-hidden bg-transparent mb-[-5rem]">
            <div className="absolute bottom-0 w-full h-full bg-pink-300 transform translate-y-64 -skew-y-3 -z-10 opacity-10"></div>
            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-5xl font-serif font-bold text-pink-950 mb-6">Let's Connect</h2>
                    <p className="text-pink-800 mb-12 leading-relaxed max-w-lg text-lg italic font-medium">
                        "I aim to design AI solutions that are not only innovative, but also efficient, scalable, and practical."
                    </p>
                    <div className="space-y-6 text-pink-950">
                        <motion.a 
                            whileHover={{ x: 10 }}
                            href="mailto:kritigautam2408@gmail.com" 
                            className="flex items-center gap-6 hover:text-pink-600 transition-colors group"
                        >
                            <span className="w-14 h-14 bg-pink-100 text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors flex items-center justify-center rounded-full text-xl shadow-sm"><FaEnvelope /></span>
                            <span className="font-bold text-lg">kritigautam2408@gmail.com</span>
                        </motion.a>
                        <motion.div 
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-6 text-pink-950 group cursor-default"
                        >
                            <span className="w-14 h-14 bg-pink-100 text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors flex items-center justify-center rounded-full text-xl shadow-sm"><FaPhone /></span>
                            <span className="font-bold text-lg">+91-9369913801</span>
                        </motion.div>
                        <motion.a 
                            whileHover={{ x: 10 }}
                            href="https://github.com/kriti2010" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-6 hover:text-pink-600 transition-colors group"
                        >
                            <span className="w-14 h-14 bg-pink-100 text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors flex items-center justify-center rounded-full text-xl shadow-sm"><FaGithub /></span>
                            <span className="font-bold text-lg">github.com/kriti2010</span>
                        </motion.a>
                        <motion.a 
                            whileHover={{ x: 10 }}
                            href="https://www.linkedin.com/in/kriti-gautam-kriti" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-6 hover:text-pink-600 transition-colors group"
                        >
                            <span className="w-14 h-14 bg-pink-100 text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors flex items-center justify-center rounded-full text-xl shadow-sm"><FaLinkedin /></span>
                            <span className="font-bold text-lg">linkedin.com/in/kriti-gautam-kriti</span>
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                >
                    <form className="flex flex-col gap-6 text-left bg-pink-100/30 p-10 rounded-[40px] shadow-2xl shadow-pink-200/50 border border-pink-200 backdrop-blur-sm">
                        <div>
                            <label className="block text-sm font-bold text-pink-950 mb-2 ml-2">Name</label>
                            <input type="text" className="w-full bg-pink-50 border border-pink-200 rounded-xl p-4 focus:outline-none focus:border-pink-400 focus:bg-white transition-all focus:ring-4 focus:ring-pink-100 placeholder-pink-300 text-lg" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-pink-950 mb-2 ml-2">Email</label>
                            <input type="email" className="w-full bg-pink-50 border border-pink-200 rounded-xl p-4 focus:outline-none focus:border-pink-400 focus:bg-white transition-all focus:ring-4 focus:ring-pink-100 placeholder-pink-300 text-lg" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-pink-950 mb-2 ml-2">Message</label>
                            <textarea className="w-full bg-pink-50 border border-pink-200 rounded-xl p-4 h-40 focus:outline-none focus:border-pink-400 focus:bg-white transition-all focus:ring-4 focus:ring-pink-100 placeholder-pink-300 text-lg" placeholder="Hello there!"></textarea>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit" 
                            className="w-full bg-pink-600 text-white font-bold py-5 text-lg rounded-xl hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-500/30 transform transition-transform"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
export default Contacts;
