'use client';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { Monitor, Moon, Sun, Terminal } from 'lucide-react'; 
import Image from 'next/image';
import Link from 'next/link'; 
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
        {/* 2. เรียกใช้โลโก้ของคุณตรงนี้ */}
        <Image 
          src="/Logo/logo.jpg"   
          alt="MW Logo" 
          width={32}        
          height={32}       
        />
        <span>Mongkhon Wichaiphap</span>
      </div>
      
      <div className={styles.navLinks}>
        <Link href="/">{t.home}</Link>
        <Link href="#">{t.api}</Link>
        <Link href="/about">{t.about}</Link> {/* <-- อัปเดตตรงนี้ */}
        
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