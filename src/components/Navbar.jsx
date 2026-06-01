import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 flex justify-between items-center bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 shadow-sm"
    >
      <div className="font-bold text-xl tracking-wider text-gray-900 dark:text-white">
        Portfolio.
      </div>

      <div className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300 font-medium">
        <a href="#home" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.home')}</a>
        <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.about')}</a>
        <a href="#portfolio" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.portfolio')}</a>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleLanguage}
          className="px-3 py-1 text-sm font-bold rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {i18n.language === 'en' ? 'TH' : 'EN'}
        </button>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;