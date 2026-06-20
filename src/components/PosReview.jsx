import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaCheckCircle, FaLock, FaChartLine } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PosReview = ({ onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="py-20 px-6 bg-white dark:bg-[#0B1120] min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Header & Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
          >
            <FaArrowLeft /> {t('posReview.back')}
          </button>
          <a 
            href="https://github.com/Mongkhon-w" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaGithub size={24} /> {t('posReview.github')}
          </a>
        </motion.div>

        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {t('posReview.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('posReview.subtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['Go', 'Gin', 'Vue 3', 'Tailwind CSS', 'MongoDB', 'JWT'].map(tech => (
              <span key={tech} className="px-4 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Feature 1: POS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> {t('posReview.feature1_title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('posReview.feature1_desc')}
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">{t('posReview.feature1_li1')}</li>
              <li className="flex items-center gap-2">{t('posReview.feature1_li2')}</li>
              <li className="flex items-center gap-2">{t('posReview.feature1_li3')}</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            {/* Placeholder for POS Image */}
            <div 
              className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 relative cursor-pointer overflow-hidden group"
              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}assets/pos/pos-1.png`)}
            >
              <img src={`${import.meta.env.BASE_URL}assets/pos/pos-1.png`} alt={t('posReview.img_alt1')} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <span className="hidden">{t('posReview.img_err1')}</span>
            </div>
          </motion.div>
        </div>

        {/* Feature 2: Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            {/* Placeholder for Security Dashboard Image */}
            <div 
              className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 relative cursor-pointer overflow-hidden group"
              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}assets/pos/pos-2.png`)}
            >
              <img src={`${import.meta.env.BASE_URL}assets/pos/pos-2.png`} alt={t('posReview.img_alt2')} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <span className="hidden">{t('posReview.img_err2')}</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FaLock className="text-blue-500" /> {t('posReview.feature2_title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('posReview.feature2_desc')}
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">{t('posReview.feature2_li1')}</li>
              <li className="flex items-center gap-2">{t('posReview.feature2_li2')}</li>
              <li className="flex items-center gap-2">{t('posReview.feature2_li3')}</li>
            </ul>
          </motion.div>
        </div>

        {/* Feature 3: Finance & RBAC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FaChartLine className="text-purple-500" /> {t('posReview.feature3_title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('posReview.feature3_desc')}
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">{t('posReview.feature3_li1')}</li>
              <li className="flex items-center gap-2">{t('posReview.feature3_li2')}</li>
              <li className="flex items-center gap-2">{t('posReview.feature3_li3')}</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            {/* Placeholder for Finance Image */}
            <div 
              className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 relative cursor-pointer overflow-hidden group"
              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}assets/pos/pos-3.png`)}
            >
              <img src={`${import.meta.env.BASE_URL}assets/pos/pos-3.png`} alt={t('posReview.img_alt3')} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <span className="hidden">{t('posReview.img_err3')}</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage} 
              alt={t('posReview.zoom_alt')} 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />
            <button 
              className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default PosReview;
