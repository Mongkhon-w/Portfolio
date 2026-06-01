import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaFlutter, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa6';
import { BiLogoPostgresql } from 'react-icons/bi';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
      
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-dark-card shadow-lg mb-8"
      >
        <img 
          src="https://ui-avatars.com/api/?name=Mongkhon+Wichaiphap&background=0D8ABC&color=fff&size=256" 
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
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          {t('hero.description')}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
          {t('hero.tech_stack')}
        </p>
        <div className="flex gap-6 text-3xl md:text-4xl text-gray-600 dark:text-gray-400">
          <FaFlutter className="hover:text-[#02569B] transition-colors cursor-pointer" title="Flutter" />
          <FaNodeJs className="hover:text-[#339933] transition-colors cursor-pointer" title="Node.js" />
          <BiLogoPostgresql className="hover:text-[#4169E1] transition-colors cursor-pointer" title="PostgreSQL" />
          <FaDocker className="hover:text-[#2496ED] transition-colors cursor-pointer" title="Docker" />
          <FaGithub className="hover:text-black dark:hover:text-white transition-colors cursor-pointer" title="GitHub" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;