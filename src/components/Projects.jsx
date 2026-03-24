import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-pink-100/40 backdrop-blur-md p-5 rounded-3xl sm:w-[360px] w-full border border-pink-200 shadow-xl hover:shadow-2xl hover:border-pink-400 transition-all duration-300'
      >
        <div className='relative w-full h-[230px] overflow-hidden rounded-2xl'>
          <img
            src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"}
            alt='project_image'
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
          />

          <div className='absolute inset-0 flex justify-end m-3'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='w-12 h-12 rounded-full flex justify-center items-center cursor-pointer bg-white/90 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-lg'
            >
              <FaGithub className="text-2xl" />
            </div>
          </div>
        </div>

        <div className='mt-6'>
          <h3 className='text-pink-950 font-serif font-bold text-[24px] capitalize truncate'>{name.replace(/-/g, ' ')}</h3>
          <p className='mt-3 text-pink-800 text-[15px] leading-relaxed line-clamp-3 h-[68px]'>
            {description || "A personal project exploring AI, Machine Learning, or Web Development."}
          </p>
        </div>

        <div className='mt-5 flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <span
              key={`${name}-${tag}-${i}`}
              className='text-[12px] font-bold px-3 py-1 bg-pink-50 text-pink-600 rounded-full border border-pink-200'
            >
              #{tag}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Resume projects to guarantee they are displayed explicitly with their details
  const mandatoryProjects = [
    {
      id: 'talent-sync',
      name: 'TalentSync',
      description: 'An AI-driven recruitment platform using Django and DRF for scalable backend APIs. Integrated Google Gemini API to generate resume match scores and explain candidate-job fit.',
      tags: ['django', 'python', 'google-gemini', 'pypdf2'],
      source_code_link: 'https://github.com/kriti2010',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'smart-parking',
      name: 'Smart Parking System',
      description: 'A high-performance parking system using Java backend and responsive web frontend. Applied DSA to achieve O(1) slot allocation and lookup. Developed real-time dashboard.',
      tags: ['java', 'javascript', 'html', 'css'],
      source_code_link: 'https://github.com/kriti2010',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/kriti2010/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) {
            // Filter out forks or empty repos and block duplicates of mandatory projects
            const excludeNames = ['talentsync', 'talent-sync', 'smart-parking-system', 'smart_parking_system', 'smart parking system'];
            const githubProjects = data
              .filter(repo => !repo.fork && !excludeNames.includes(repo.name.toLowerCase()))
              .map(repo => ({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                tags: repo.language ? [repo.language.toLowerCase(), 'code', 'github'] : ['code', 'github'],
                source_code_link: repo.html_url,
                image: null // will use fallback
            }));
            
            // Combine list, prioritizing the detailed mandatory ones
            setProjects([...mandatoryProjects, ...githubProjects]);
        } else {
            setProjects(mandatoryProjects);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects", err);
        setProjects(mandatoryProjects);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden">
       {/* Background decorative blobs */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

       <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-pink-950 mb-6">Projects</h2>
       <p className="text-pink-800 text-center max-w-2xl mx-auto mb-20 leading-relaxed text-lg italic">
         "Transforming code into meaningful, automated solutions."
       </p>
       
       {loading ? (
         <div className="flex justify-center items-center h-40">
           <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
         </div>
       ) : (
         <div className="flex flex-wrap justify-center gap-10 max-w-[1400px] mx-auto">
           {projects.map((project, index) => (
             <ProjectCard key={project.id} index={index} {...project} />
           ))}
         </div>
       )}
    </section>
  );
};

export default Projects;
