import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const { t } = useTranslation();
  
  // ดึง Array ของโปรเจกต์จากไฟล์ JSON ตามภาษาที่เลือก
  const projects = t('portfolio.projects', { returnObjects: true });

  return (
    <section id="portfolio" className="py-20 px-6 bg-white dark:bg-[#0B1120] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* หัวข้อ Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('portfolio.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </div>

        {/* ตารางแสดงการ์ดโปรเจกต์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-dark-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* ป้ายกำกับ Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ปุ่มลิงก์ */}
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <FaGithub size={18} /> Code
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <FaExternalLinkAlt size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;