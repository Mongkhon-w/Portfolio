import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import profileImg from '../assets/my-profile.jpg'; 

// นำเข้า Icon สำหรับ Tech Stack
import { FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiFlutter, SiTailwindcss, SiJavascript, SiTypescript, SiGo, SiPostgresql, SiMysql, SiGithubactions, SiMongodb } from 'react-icons/si';
import { TbNetwork, TbDevices } from 'react-icons/tb';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const skillCategories = [
    {
      title: "Front-end & Mobile",
      icons: [
        { Icon: FaReact, name: "React", color: "hover:text-[#61DAFB]" },
        { Icon: SiFlutter, name: "Flutter", color: "hover:text-[#02569B]" },
        { Icon: SiTailwindcss, name: "Tailwind", color: "hover:text-[#06B6D4]" },
        { Icon: FaBootstrap, name: "Bootstrap", color: "hover:text-[#7952B3]" },
        { Icon: TbDevices, name: "Responsive", color: "hover:text-[#E34F26]" }, 
      ]
    },
    {
      title: "Back-end",
      icons: [
        { Icon: SiJavascript, name: "JavaScript", color: "hover:text-[#F7DF1E]" },
        { Icon: SiTypescript, name: "TypeScript", color: "hover:text-[#3178C6]" },
        { Icon: FaNodeJs, name: "Node.js", color: "hover:text-[#339933]" },
        { Icon: SiGo, name: "Golang", color: "hover:text-[#00ADD8]" },
      ]
    },
    {
      title: "Database & Infra",
      icons: [
        { Icon: SiPostgresql, name: "PostgreSQL", color: "hover:text-[#4169E1]" },
        { Icon: SiMysql, name: "MySQL", color: "hover:text-[#4479A1]" },
        { Icon: SiMongodb, name: "MongoDB", color: "hover:text-[#47A248]" }, 
        { Icon: FaDocker, name: "Docker", color: "hover:text-[#2496ED]" },
        { Icon: FaLinux, name: "Linux", color: "hover:text-black dark:hover:text-white" },
      ]
    },
    {
      title: "DevOps & Network",
      icons: [
        { Icon: FaGitAlt, name: "Git", color: "hover:text-[#F05032]" },
        { Icon: FaGithub, name: "GitHub", color: "hover:text-black dark:hover:text-white" },
        { Icon: SiGithubactions, name: "CI/CD", color: "hover:text-[#2088FF]" },
        { Icon: TbNetwork, name: "TCP/IP", color: "hover:text-gray-500" },
      ]
    }
  ];

  return (
    <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
      
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-dark-card shadow-lg mb-8 flex items-center justify-center"
      >
        {/* 2. เปลี่ยนให้เรียกใช้รูปโปรไฟล์ที่เรา Import มา */}
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-2 font-medium">
          {t('hero.greeting')}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          {t('hero.name')}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
          {t('hero.role')}
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          {t('hero.description')}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-8">
          <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-widest">
            {t('hero.tech_stack')}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 text-center border-b border-gray-100 dark:border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-3xl text-gray-500 dark:text-gray-400">
                {category.icons.map((item, i) => (
                  <div key={i} className="group relative flex flex-col items-center cursor-pointer p-1">
                    <item.Icon className={`${item.color} transition-colors duration-300`} />
                    <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm px-2 py-1 rounded whitespace-nowrap z-10">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;