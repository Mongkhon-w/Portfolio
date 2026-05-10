'use client';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { Monitor, Moon, Sun, Terminal } from 'lucide-react';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Terminal size={24} />
        <span>MW Portfolio</span>
      </div>
      
      <div className={styles.navLinks}>
        <a href="#">{t.home}</a>
        <a href="#">{t.api}</a>
        <a href="#">{t.about}</a>
        
        <div className={styles.langToggle}>
          <button className={`${styles.langBtn} ${lang === 'EN' ? styles.active : ''}`} onClick={() => toggleLang('EN')}>EN</button>
          <span>|</span>
          <button className={`${styles.langBtn} ${lang === 'TH' ? styles.active : ''}`} onClick={() => toggleLang('TH')}>TH</button>
        </div>

        {mounted && (
          <button 
            className={styles.themeBtn} 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>
    </nav>
  );
}