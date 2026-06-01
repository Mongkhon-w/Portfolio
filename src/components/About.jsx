import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* ฝั่งซ้าย: ข้อมูลส่วนตัวและการศึกษา */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <FaGraduationCap className="text-3xl text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t('about.education_title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('about.education_detail')}</p>
                </div>
              </div>
            </div>

            {/* ฝั่งขวา: ช่องทางการติดต่อ */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.contact_title')}
              </h3>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:your.email@example.com" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50">
                  <FaEnvelope size={24} />
                  <span className="font-medium">{t('about.email')}</span>
                </a>
                
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50">
                  <FaGithub size={24} />
                  <span className="font-medium">{t('about.github')}</span>
                </a>
                
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50">
                  <FaLinkedin size={24} />
                  <span className="font-medium">{t('about.linkedin')}</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;